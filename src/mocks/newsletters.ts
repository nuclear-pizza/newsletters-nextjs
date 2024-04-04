import { Newsletter } from "@/shared.types";

type NewsletterAPI = {
  getAll: () => Promise<Newsletter[]>;
};

export const NEWSLETTER_ITEMS: Newsletter[] = [
  {
    id: "000000000000000000000000",
    image: "https://via.placeholder.com/150",
    description: "Dive into the unknown with this week's spotlight!",
    title: "Weekly Wonders",
    site: "DEN",
    subscriptions: ["RIGHT_1"],
  },
  {
    id: "000000000000000000000001",
    image: "https://via.placeholder.com/150",
    description: "Kickstart your week with a burst of inspiration.",
    title: "Marvelous Mondays",
    site: "DAN",
    subscriptions: ["RIGHT_1"],
  },
  {
    id: "000000000000000000000002",
    image: "https://via.placeholder.com/150",
    description: "Tuesdays just got a lot more exciting!",
    title: "Terrific Tuesdays",
    site: "LAN",
    subscriptions: ["RIGHT_1"],
  },
  {
    id: "000000000000000000000003",
    image: "https://via.placeholder.com/150",
    description: "Midweek madness unleashed.",
    title: "Wacky Wednesdays",
    site: "SAN",
    subscriptions: ["RIGHT_1"],
  },
  {
    id: "000000000000000000000004",
    image: "https://via.placeholder.com/150",
    description: "Discover the thrill of innovation.",
    title: "Thrilling Thursdays",
    site: "DEN",
    subscriptions: ["RIGHT_2"],
  },
  {
    id: "000000000000000000000005",
    image: "https://via.placeholder.com/150",
    description: "Wrap up your week on a high note.",
    title: "Fun Fridays",
    site: "DAN",
    subscriptions: ["RIGHT_2"],
  },
  {
    id: "000000000000000000000006",
    image: "https://via.placeholder.com/150",
    description: "Weekend wonders to amaze and delight.",
    title: "Sensational Saturdays",
    site: "LAN",
    subscriptions: ["RIGHT_2"],
  },
  {
    id: "000000000000000000000007",
    image: "https://via.placeholder.com/150",
    description: "Unwind with our serene selection for Sunday.",
    title: "Serene Sundays",
    site: "SAN",
    subscriptions: ["RIGHT_2"],
  },
  {
    id: "000000000000000000000008",
    image: "https://via.placeholder.com/150",
    description: "Mysteries and magic await in our latest feature.",
    title: "Mystery and Magic",
    site: "DEN",
    subscriptions: ["RIGHT_2"],
  },
  {
    id: "000000000000000000000009",
    image: "https://via.placeholder.com/150",
    description: "Tech trends and titans: this week's must-read.",
    title: "Tech Titans",
    site: "DAN",
    subscriptions: ["RIGHT_2"],
  },
  {
    id: "00000000000000000000000a",
    image: "https://via.placeholder.com/150",
    description: "A blast from the past with a modern twist.",
    title: "Historical Highlights",
    site: "LAN",
    subscriptions: ["RIGHT_2"],
  },
  {
    id: "00000000000000000000000b",
    image: "https://via.placeholder.com/150",
    description: "Futuristic fantasies turned reality.",
    title: "Future Frontiers",
    site: "SAN",
    subscriptions: ["RIGHT_2"],
  },
  {
    id: "00000000000000000000000c",
    image: "https://via.placeholder.com/150",
    description: "Exploring the intersection of art and life.",
    title: "Artistic Avenues",
    site: "DEN",
    subscriptions: [],
  },
  {
    id: "00000000000000000000000d",
    image: "https://via.placeholder.com/150",
    description: "Culinary adventures that tantalize the taste buds.",
    title: "Culinary Quests",
    site: "DAN",
    subscriptions: [],
  },
  {
    id: "00000000000000000000000e",
    image: "https://via.placeholder.com/150",
    description: "Tales from the trail: the world is your oyster.",
    title: "Traveler's Tales",
    site: "LAN",
    subscriptions: [],
  },
  {
    id: "00000000000000000000000f",
    image: "https://via.placeholder.com/150",
    description: "Celebrating the spirit of sport and competition.",
    title: "Sporting Spirits",
    site: "SAN",
    subscriptions: [],
  },
  {
    id: "000000000000000000000010",
    image: "https://via.placeholder.com/150",
    description: "The latest and greatest in global fashion.",
    title: "Fashion Finds",
    site: "DEN",
    subscriptions: ["RIGHT_1"],
  },
  {
    id: "000000000000000000000011",
    image: "https://via.placeholder.com/150",
    description: "Musical moments that moved the world.",
    title: "Music Moments",
    site: "DAN",
    subscriptions: [],
  },
  {
    id: "000000000000000000000012",
    image: "https://via.placeholder.com/150",
    description: "Cinematic celebrations for every cinephile.",
    title: "Cinema Circles",
    site: "LAN",
    subscriptions: [],
  },
  {
    id: "000000000000000000000013",
    image: "https://via.placeholder.com/150",
    description: "Literary gems to add to your collection.",
    title: "Literary Landscapes",
    site: "SAN",
    subscriptions: ["RIGHT_2"],
  },
];

export const newsletterActions: NewsletterAPI = {
  getAll() {
    return new Promise((resolve) => {
      resolve(NEWSLETTER_ITEMS);
    });
  },
};
