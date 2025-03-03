import { StudentStoryProps } from "@/app/types/StudentStory";

export const studentStory: StudentStoryProps = {
  id: "d20a9086-8bcc-4410-b812-c2308f10fdad",
  showLearningPlan: false,
  showAssets: false,
  showGallery: false,
  headline:
    "From Troubleshooting to Mastery: Timmy’s Deep Dive into PC Engineering",
  discipline: "Science, Engineering & Technology",
  topic: "Coding / Programming",
  startDate: "2024-12-21",
  lastSessionDate: "2025-01-05",
  sessionsCompleted: 4,
  status: "scheduled",
  learningPlanUrl: "#",
  assets: [],
  gallery: {
    images: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e2e8f0'/%3E%3C/svg%3E",
        caption: "Timmy working on troubleshooting his custom PC.",
      },
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e2e8f0'/%3E%3C/svg%3E",
        caption:
          "Exploring the intricacies of GPU functionality and performance.",
      },
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e2e8f0'/%3E%3C/svg%3E",
        caption: "Successfully installing and testing a new AIO liquid cooler.",
      },
    ],
  },
  studentProfileImage:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23e2e8f0'/%3E%3C/svg%3E",
  studentName: "Timothy McKenna",
  studentSchool: "Riverdale in NYC",
  studentGrade: 10,
  studentPersonality: ["Bright", "Curious", "Humorous", "Dedicated"],
  studentInterests: ["Coding", "Robotics", "Squash", "Gaming", "Technology"],
  mentorProfileImage:
    "https://ucarecdn.com/d45d5a9e-cb6e-4ace-9eac-1e80346ecbbd/",
  mentorName: "Eli Blumkin",
  mentorSchool: "Washington University in St. Louis",
  mentorMajor: "Economics/Strategy and Psychology",
  mentorTeachingStyle: ["Supportive", "Patient", "Hands-on", "Encouraging"],
  mentorExpertise: [
    "PC Building",
    "Troubleshooting",
    "Economics",
    "Coding",
    "Problem Solving",
  ],
  match: {
    qualities: [
      {
        title: "Technical Mastery",
        description:
          "Eli's deep understanding of PC hardware and troubleshooting made him the perfect guide for Timmy’s hands-on learning experience.",
      },
      {
        title: "Step-by-Step Guidance",
        description:
          "Eli provided methodical, structured troubleshooting support that helped Timmy systematically diagnose and resolve hardware issues.",
      },
      {
        title: "Shared Passion for Tech",
        description:
          "Both mentor and student shared a strong enthusiasm for hardware and problem-solving, making for a deeply engaging mentorship experience.",
      },
    ],
  },
  backgroundBlurb:
    "Timmy has always been passionate about coding, robotics, and engineering, but he wanted to develop hands-on troubleshooting skills for building and fixing PCs. His goal was to master the intricacies of computer hardware and resolve real-world tech challenges with confidence. Finding a mentor who shared his interest in technology and could guide him through complex problem-solving was crucial.",
  timeline: {
    milestones: [
      {
        id: 1,
        startDate: "2024-12",
        endDate: "2024-12",
        title: "Identifying PC Display Issues",
        summary:
          "Timmy and Eli worked through diagnosing a custom-built PC that powered on but showed no display output, testing different components and configurations.",
        icon: "monitor",
      },
      {
        id: 2,
        startDate: "2025-01",
        endDate: "2025-01",
        title: "GPU Troubleshooting and Optimization",
        summary:
          "Reseated the graphics card, checked power connections, and attempted software fixes, making intermittent progress but facing persistent stability issues.",
        icon: "cpu",
      },
      {
        id: 3,
        startDate: "2025-01",
        endDate: "2025-01",
        title: "Cooling System Overhaul",
        summary:
          "Timmy successfully installed a new AIO liquid cooler, significantly reducing CPU temperatures and improving system stability.",
        icon: "thermometer-snowflake",
      },
      {
        id: 4,
        startDate: "2025-01",
        endDate: "2025-01",
        title: "Advanced GPU Troubleshooting",
        summary:
          "Investigated PCIe slot configurations and power delivery, researching possible solutions for persistent GPU power issues.",
        icon: "zap",
      },
    ],
  },
  skillsDeveloped: [
    "PC hardware troubleshooting",
    "Graphics card diagnostics",
    "Cooling system installation",
    "Systematic problem-solving",
    "Hands-on technical repair",
  ],
  challengesOvercome: [
    "Diagnosed and resolved display output issues",
    "Installed and configured new CPU cooling systems",
    "Troubleshot complex GPU connectivity problems",
    "Developed patience and resilience in debugging technical issues",
  ],
  futureGoals:
    "With his newfound troubleshooting skills, Timmy aims to continue refining his PC building expertise and apply his knowledge to robotics and engineering projects. He is also considering potential internships in hardware engineering and computer science.",
};
