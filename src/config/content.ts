export interface MemoryItem {
  id: string;
  url: string;
  caption: string;
  rotation: number;
  tag?: string;
}

export interface LoveNoteItem {
  number: string;
  title: string;
  detail: string;
}

export const APP_CONFIG = {
  name: "Kaserra",
  music: {
    title: "Wonderwall — Oasis",
    artist: "Oasis",
    audioPath: "/music/wonderwall.mp3",
    spotifyUrl: "https://open.spotify.com/intl-id/track/41tTCXOzxSWAoVrfeIIh8x?si=e7f5672578ea4ec3",
  },
  hero: {
    greeting: "Hey, Kaserra…",
    subheading: "There's something I've been meaning to tell you.",
    startButton: "Open Scrapbook",
  },
  memories: [
    {
      id: "mem-1",
      url: "/images/photo1.png",
      caption: "you, being you.",
      rotation: -2,
      tag: "favorite memory",
    },
    {
      id: "mem-2",
      url: "/images/photo2.png",
      caption: "one of my favorite moments.",
      rotation: 2,
      tag: "us together",
    },
    {
      id: "mem-3",
      url: "/images/photo3.png",
      caption: "I still smile when I see this.",
      rotation: -1.5,
      tag: "late night talk",
    },
    {
      id: "mem-4",
      url: "/images/photo4.png",
      caption: "this moment means more to me than you probably know.",
      rotation: 3,
      tag: "unforgettable",
    },
  ] as MemoryItem[],

  loveLetter: {
    headerTitle: "i think i'm in love with you",
    subtitle: "and i hope you feel the same...",
    imagePath: "/images/love_letter_art.jpg",
    reasons: [
      {
        number: "#1",
        title: "You're so kind",
        detail: "Even in the smallest things. You always think about others, and it makes you so special.",
      },
      {
        number: "#2",
        title: "I love the way you make me laugh",
        detail: "You're so funny, like seriously, your jokes are the best. You're just so cute when you joke around, it always makes my day. 😊",
      },
      {
        number: "#3",
        title: "You're always yourself",
        detail: "Not afraid to be weird, to be soft, to be you. And I really love that.",
      },
      {
        number: "#4",
        title: "We fit unexpectedly",
        detail: "We may be different in a lot of ways, but somehow it just feels right. Like we fit, in the most unexpected way.",
      },
      {
        number: "#5",
        title: "I really, really like you",
        detail: "So yeah... I just wanted you to know that I really, really like you. More than I probably should be able to say out loud.",
      },
    ] as LoveNoteItem[],
    doodleQuotes: [
      "your smile is my favorite thing",
      "you make everything better",
      "i'm really glad you're in my life",
    ],
  },

  confessionStory: [
    "I don't really know when it started.",
    "Somewhere between our conversations, the little moments, and all the time we spent together, you became someone I started looking forward to.",
    "And somehow, without me realizing it, you became one of my favorite parts of my days.",
    "I like the way you make ordinary moments feel a little less ordinary.",
    "I like having you around. I like talking to you. And honestly… I think I like you more than I know how to casually admit.",
    "So instead of keeping it in my head and wondering what could have happened…",
    "I thought I'd just tell you.",
    "Kaserra, I like you.",
  ],

  wonderwallLyrics: {
    quote1: "Because maybe,",
    quote2: "you're gonna be the one that saves me...",
    quote3: "And after all,",
    quote4: "you're my wonderwall.",
    meaningNote: "Sometimes, there's just one person who somehow feels like the place you want to come back to. And for me… lately, that person has been you.",
  },

  spotifyPlaylist: {
    title: "spotify playlist for u",
    subtitle: "I made a collection of songs that always make me think of you.",
    url: "https://open.spotify.com/playlist/5KjHxhYnUeXd4wbaIGGYTy?si=Kq1k_jYTQgqDfDDdBG1hdg&utm_source=copy-link",
    embedUrl: "https://open.spotify.com/embed/playlist/5KjHxhYnUeXd4wbaIGGYTy?utm_source=generator&theme=0",
  },

  finalQuestion: {
    prompt1: "So, Kaserra…",
    prompt2: "I don't know where this will take us.",
    prompt3: "But I'd really like to find out.",
    mainQuestion: "Will you be my Wonderwall?",
    btnYes: "Yes ✨",
    btnTime: "I need a little time 💭",
    yesMessage: {
      title: "I guess this is my favorite answer.",
      subtitle: "Thank you for giving me a chance. You just made my entire world light up.",
    },
    timeMessage: {
      title: "That's okay. Take your time.",
      subtitle: "No pressure at all. I just wanted you to know how I feel.",
    }
  },

  closingSignOff: "For Kaserra, with a little courage and a lot of feelings."
};
