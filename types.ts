export interface CelebProfile {
  name: string;
  handle: string;
  followers: string;
  avgViews: string;
  identity: string[];
  dna: {
    label: string;
    value: number;
  }[];
}

export interface MatchPoint {
  id: number;
  feature: string;       // Product Feature (e.g., EMS)
  connection: string;    // Celeb Persona (e.g., Ratio Architect)
  title: string;         // Short Headline
  logic: string;         // The deep dive explanation
  isCore: boolean;       // Core vs Sub
}

export interface ContentIdea {
  id: string;
  title: string;
  subTitle: string;
  tags: string[];
  concept: string;
  flow: string[];        // Changed to string array for step-by-step visualization
  rationale: string;     // Why it fits
  synergy: string;
  theme: 'purple' | 'blue' | 'pink';
}

export interface StrategicPillar {
  title: string;
  icon: string;
  content: string;
}