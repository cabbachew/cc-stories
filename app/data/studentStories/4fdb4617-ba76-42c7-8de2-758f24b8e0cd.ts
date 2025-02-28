import { StudentStoryProps } from "@/app/types/StudentStory";

export const studentStory: StudentStoryProps = {
  id: "4fdb4617-ba76-42c7-8de2-758f24b8e0cd",
  showLearningPlan: false,
  showAssets: false,
  showGallery: false,
  headline:
    "From Hands-On Tinkerer to Confident Engineer: A Deep Dive into Robotics & Coding",
  discipline: "Science, Engineering & Technology",
  topic: "Robotics / Electronics / CAD",
  startDate: "2024-10-07",
  lastSessionDate: "2025-02-24",
  sessionsCompleted: 23,
  status: "scheduled",
  learningPlanUrl: "#",
  assets: [
    {
      title: "Henry's Underwater Robot Blueprint",
      url: "#",
    },
  ],
  gallery: {
    images: [
      {
        url: "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20width%3D%27400%27%20height%3D%27400%27%20viewBox%3D%270%200%20400%20400%27%3E%3Crect%20width%3D%27400%27%20height%3D%27400%27%20fill%3D%27%23e2e8f0%27/%3E%3C/svg%3E",
        caption: "[Generated caption based on project]",
      },
      {
        url: "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20width%3D%27400%27%20height%3D%27400%27%20viewBox%3D%270%200%20400%20400%27%3E%3Crect%20width%3D%27400%27%20height%3D%27400%27%20fill%3D%27%23e2e8f0%27/%3E%3C/svg%3E",
        caption: "[Generated caption based on skills]",
      },
      {
        url: "data:image/svg+xml,%3Csvg%20xmlns%3D%27http%3A//www.w3.org/2000/svg%27%20width%3D%27400%27%20height%3D%27400%27%20viewBox%3D%270%200%20400%20400%27%3E%3Crect%20width%3D%27400%27%20height%3D%27400%27%20fill%3D%27%23e2e8f0%27/%3E%3C/svg%3E",
        caption: "[Generated caption based on milestone]",
      },
    ],
  },
  studentProfileImage:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23e2e8f0'/%3E%3C/svg%3E",
  studentName: "Henry Tunguz",
  studentSchool: "Avenues Online School",
  studentGrade: 6,
  studentPersonality: ["Nerdy", "Earnest", "Curious", "Persistent"],
  studentInterests: ["Coding", "Sailing", "Robotics", "Reading", "Animals"],
  mentorProfileImage:
    "https://ucarecdn.com/f8b73e74-3947-400b-b604-c58d021e9c92/",
  /*
      If there were more mentorProfilePhotos, they would be listed here in commented lines for reference:
      // "https://some-other-photo-url"
    */
  mentorName: "Gyaan Antia",
  mentorSchool: "Northwestern University",
  mentorMajor: "Computer Engineering",
  mentorTeachingStyle: ["Patient", "Enthusiastic", "Structured", "Hands-on"],
  mentorExpertise: [
    "Machine Learning",
    "Robotics",
    "Software Engineering",
    "Project Management",
    "Mathematics",
  ],
  match: {
    qualities: [
      {
        title: "Shared Engineering Mindset",
        description:
          "Both Henry and Gyaan share a passion for hands-on building, fueling a creative space where designs can quickly move from idea to prototype.",
      },
      {
        title: "Empowering Curiosity",
        description:
          "Gyaan fosters Henry’s inquisitive nature by encouraging deep dives into memory concepts, allowing big-picture thinkers to excel in coding details.",
      },
      {
        title: "Adaptive Project Approach",
        description:
          "With multiple pivots (land robot, underwater sub, Rust project), Gyaan and Henry collaborate flexibly, turning every challenge into a new opportunity.",
      },
    ],
  },
  backgroundBlurb:
    "Henry entered with a strong drive to build and dismantle anything mechanical, but needed structured guidance to translate his enthusiasm into real engineering projects. Homeschooling left him eager for a mentor who understood his curiosity and passion for robotics. Connecting with Gyaan gave him both a role model and a practical framework for exploring robotics, coding, and even pivoting into Rust programming. Together, they’ve transformed spontaneous tinkering into a comprehensive learning journey.",
  timeline: {
    milestones: [
      {
        id: 1,
        startDate: "2024-10",
        endDate: "2024-10",
        title: "Kickoff: Building a Land Robot",
        summary:
          "Established initial goals and began constructing a mobile robot chassis, exploring hardware assembly and motor configurations.",
        icon: "bot",
      },
      {
        id: 2,
        startDate: "2024-11",
        endDate: "2024-11",
        title: "Pivot to Underwater Explorer",
        summary:
          "Shifted focus to designing a submersible prototype, researching buoyancy and propulsion methods to navigate underwater environments.",
        icon: "anchor",
      },
      {
        id: 3,
        startDate: "2024-12",
        endDate: "2024-12",
        title: "Exploring VEX IQ Competitions",
        summary:
          "Researched VEX IQ events, studied competition rules, and brainstormed advanced mechanisms for ball collection and launching.",
        icon: "compass",
      },
      {
        id: 4,
        startDate: "2025-01",
        endDate: "2025-01",
        title: "Diving into Rust Programming",
        summary:
          "Begun building a to-do list application in Rust, discussing data structures, date/time handling, and project architecture.",
        icon: "code",
      },
      {
        id: 5,
        startDate: "2025-02",
        endDate: "2025-02",
        title: "Mastering Memory & Next Steps",
        summary:
          "Learned stack vs. heap memory concepts, explored pointers, and shaped a long-term plan for combining robotics with coding.",
        icon: "brain-cog",
      },
    ],
  },
  skillsDeveloped: [
    "ROS fundamentals and architecture",
    "Rust programming basics",
    "Electronics design and wiring",
    "Linux terminal navigation",
    "VEX robotics design",
    "Project planning and pivoting",
  ],
  challengesOvercome: [
    "Transitioned between multiple robotics concepts",
    "Dealt with blocked package managers and environment setup",
    "Explored complex memory management principles",
    "Balanced diverse homeschool activities with project milestones",
    "Iterated through design pivots without losing motivation",
  ],
  futureGoals:
    "Henry aims to refine his coding foundation, potentially integrating AI or advanced data structures into his Rust projects. He’s also interested in revisiting VEX competitions or local science fairs to showcase his engineering progress. With consistent mentorship, he hopes to merge hands-on building with thoughtful software development, ultimately crafting meaningful, community-focused tech solutions.",
};
