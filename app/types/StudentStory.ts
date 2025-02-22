interface GalleryImage {
  url: string;
  caption: string;
}

interface GalleryAsset {
  title: string;
  url: string;
}

interface Gallery {
  images: GalleryImage[];
  assets: GalleryAsset[];
}

export interface StudentStoryProps {
  headline: string;
  status?: "scheduled" | "complete" | "paused" | "proposed";
  studentInfo: {
    name: string;
    photoUrl: string;
    grade: string;
    school: string;
    personality: string[];
    interests: string[];
  };
  painPoints: string[];
  successMetrics: string[];
  mentorInfo: {
    name: string;
    expertise: string[];
    background: string;
    photoUrl: string;
    education?: {
      university: string;
      major: string;
    };
  };
  mentorshipMatch: {
    relationship: string;
    expertise: string;
    accountability: string;
    sharedInterests: string[];
  };
  mentorshipDetails: {
    engagementMetrics: {
      length: string;
      consistency: string;
    };
    challengesOvercome: string[];
    skillsDeveloped: string[];
  };
  outcomes: {
    milestones: string[];
    documentation: string[];
    testimonials: {
      quote: string;
      author: string;
      role: string;
    }[];
    currentStatus: string;
  };
  impactSummary: string;
  futureGoals: string;
  timeline: {
    sessions: {
      id: string;
      date: string;
      title: string;
      summary: string;
      tags: string[];
      outcomes: string[];
    }[];
    chapters: {
      id: string;
      title: string;
      startDate: string;
      endDate: string;
      summary: string;
      sessions: string[];
    }[];
  };
  gallery?: Gallery;
}
