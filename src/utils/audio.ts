class AudioController {
  private audio: HTMLAudioElement | null = null;
  private audioContext: AudioContext | null = null;
  private synthInterval: number | null = null;
  private isPlaying: boolean = false;
  private isSynthFallback: boolean = false;

  constructor() {
    // Lazy init
  }

  public async play(audioPath: string): Promise<boolean> {
    if (this.isPlaying) return true;

    try {
      if (!this.audio) {
        this.audio = new Audio(audioPath);
        this.audio.loop = true;
        this.audio.volume = 0.6;
      }

      const playPromise = this.audio.play();
      if (playPromise !== undefined) {
        await playPromise;
        this.isPlaying = true;
        this.isSynthFallback = false;
        return true;
      }
    } catch (e) {
      console.warn("Local audio file play failed or file missing, initiating atmospheric synth fallback...", e);
      this.playAtmosphericSynth();
      this.isPlaying = true;
      this.isSynthFallback = true;
      return true;
    }
    return false;
  }

  public pause() {
    if (this.audio) {
      this.audio.pause();
    }
    if (this.synthInterval) {
      clearInterval(this.synthInterval);
      this.synthInterval = null;
    }
    this.isPlaying = false;
  }

  public toggle(audioPath: string): boolean {
    if (this.isPlaying) {
      this.pause();
      return false;
    } else {
      this.play(audioPath);
      return true;
    }
  }

  public getIsPlaying(): boolean {
    return this.isPlaying;
  }

  private playAtmosphericSynth() {
    try {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      this.audioContext = new AudioCtx();

      // Acoustic chord progression inspired by Wonderwall: Em7, G, Dsus4, A7sus4
      const chords = [
        [164.81, 196.00, 293.66, 392.00], // Em7
        [196.00, 246.94, 293.66, 392.00], // G
        [146.83, 220.00, 293.66, 440.00], // Dsus4
        [220.00, 277.18, 329.63, 440.00]  // A7sus4
      ];

      let chordIndex = 0;

      const playChord = () => {
        if (!this.audioContext || this.audioContext.state === 'closed') return;
        const currentChord = chords[chordIndex % chords.length];
        chordIndex++;

        currentChord.forEach((freq, idx) => {
          if (!this.audioContext) return;
          const osc = this.audioContext.createOscillator();
          const gain = this.audioContext.createGain();

          osc.type = idx % 2 === 0 ? 'sine' : 'triangle';
          osc.frequency.setValueAtTime(freq, this.audioContext.currentTime);

          const now = this.audioContext.currentTime;
          const duration = 2.4;

          // Soft ambient acoustic envelope
          gain.gain.setValueAtTime(0.001, now);
          gain.gain.exponentialRampToValueAtTime(0.08, now + 0.3);
          gain.gain.exponentialRampToValueAtTime(0.0001, now + duration);

          osc.connect(gain);
          gain.connect(this.audioContext.destination);

          osc.start(now + idx * 0.05);
          osc.stop(now + duration);
        });
      };

      playChord();
      this.synthInterval = window.setInterval(playChord, 2600);
    } catch (err) {
      console.error("Audio synth error:", err);
    }
  }
}

export const globalAudio = new AudioController();
