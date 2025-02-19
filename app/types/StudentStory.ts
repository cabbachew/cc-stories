export interface StudentStoryProps {
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
    testimonials: string[];
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
}
