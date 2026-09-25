export interface Language {
  name: string;
  color: string;
  percentage: number;
  count: number; // Used for calculation
}

export interface Repository {
  name: string;
  description: string;
  stars: number;
  language: string;
  topics: string[]; // Added topics for AI detection
  url: string;
}

export interface ProductivityData {
  timeOfDay: string; // "Morning", "Afternoon", "Evening", "Late Night"
  peakHour: number; // 0-23
}

export interface ContributionBreakdown {
  commits: number;
  prs: number;
  issues: number;
  reviews: number;
}

export interface CommunityStats {
  followers: number;
  following: number;
  totalStars: number;
  publicRepos: number;
}

export interface GitStoryData {
  username: string;
  avatarUrl: string;
  year: number;
  flowStateMinutes: number;
  vibeScore: number;
  auraColors: string[];
  totalCommits: number;
  longestStreak: number;
  busiestDay: string; // e.g., "Wednesdays"
  topLanguages: Language[];
  topRepo: Repository;
  topRepos: Repository[]; // Top 5 repos of the year
  velocityData: { date: string; commits: number }[]; // For chart
  weekdayStats: number[]; // Array of 7 numbers (Sun-Sat)
  productivity: ProductivityData;
  archetype: string; // The calculated persona (e.g., "The Architect")
  contributionBreakdown: ContributionBreakdown;
  community: CommunityStats;
}

export enum SlideType {
  TITLE = 0,
  VELOCITY = 1,
  GRID = 2,
  COMPOSITION = 3,
  ROUTINE = 4,
  PRODUCTIVITY = 5,
  COMMUNITY = 6,
  AURA = 7,
  LANGUAGES = 8,
  TOP_TRACKS = 9,
  REPO = 10,
  POSTER = 11,
}