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

interface TimelineMilestone {
  id: number;
  startDate: string;
  endDate: string;
  title: string;
  summary: string;
  icon: string;
}

// Type for the new implementation (prototype)
export interface StudentStoryProps {
  id: string;
  headline: string;
  discipline: string;
  topic: string;
  status: string;
  startDate: string;
  lastSessionDate: string;
  sessionsCompleted: number;
  studentProfileImage: string;
  mentorProfileImage: string;
  studentName: string;
  studentGrade: number;
  studentSchool: string;
  mentorName: string;
  mentorSchool: string;
  mentorMajor: string;
  backgroundBlurb: string;
  learningPlanUrl: string;
  skillsDeveloped: string[];
  challengesOvercome: string[];
  futureGoals: string;
  timeline: {
    milestones: TimelineMilestone[];
  };
  gallery?: Gallery;
}

// Type for the legacy implementation (engagement)
export interface LegacyStudentStoryProps {
  id: string;
  headline: string;
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
    milestones: TimelineMilestone[];
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
