import { StudentStoryProps } from "@/app/types/StudentStory";

export const studentStory: StudentStoryProps = {
  id: "3e1859e5-0cdd-4446-824d-b4274028ef6d",
  showLearningPlan: false,
  showAssets: false,
  showGallery: false,
  headline:
    "From Vision to Innovation: How a High School Junior Revolutionized Medical Design Through Bioengineering",
  discipline: "Science, Engineering & Technology",
  topic: "STEM Project",
  startDate: "2024-10-05",
  lastSessionDate: "2025-03-21",
  sessionsCompleted: 23,
  status: "scheduled",
  learningPlanUrl: "#",
  assets: [
    {
      title: "Speculum Design CAD Models",
      url: "#",
    },
    {
      title: "User Research Findings",
      url: "#",
    },
  ],
  gallery: {
    images: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e2e8f0'/%3E%3C/svg%3E",
        caption: "Early prototype sketches of the redesigned vaginal speculum",
      },
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e2e8f0'/%3E%3C/svg%3E",
        caption:
          "3D printed prototype showing innovative vertical opening mechanism",
      },
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e2e8f0'/%3E%3C/svg%3E",
        caption:
          "Simplified tube-based design with integrated camera technology",
      },
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e2e8f0'/%3E%3C/svg%3E",
        caption:
          "Swara presenting her research at regional science fair competition",
      },
    ],
  },
  studentProfileImage:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23e2e8f0'/%3E%3C/svg%3E",
  studentName: "Swara Ahire",
  studentSchool: "Piedmont High School",
  studentGrade: 11,
  studentPersonality: ["Dedicated", "Sociable", "Analytical", "Sincere"],
  studentInterests: [
    "Bioengineering",
    "Indian Dance",
    "Thrifting",
    "Environmental Sustainability",
    "Classic Literature",
  ],
  mentorProfileImage:
    "https://ucarecdn.com/832566d4-cfc5-4b96-8624-b80161acb509/",
  mentorName: "Vanessa Tam",
  mentorSchool: "Duke University",
  mentorMajor: "Biomedical Engineering",
  mentorTeachingStyle: ["Patient", "Analytical", "Supportive", "Innovative"],
  mentorExpertise: [
    "Medical Device Design",
    "CAD Modeling",
    "Engineering Design Process",
    "Healthcare Innovation",
    "Prototyping",
  ],
  match: {
    qualities: [
      {
        title: "Shared Passion for Innovation",
        description:
          "Both Swara and Vanessa are driven by the desire to create meaningful healthcare solutions, fostering an environment where ambitious ideas are encouraged and refined through systematic engineering approaches.",
      },
      {
        title: "Balance of Creativity and Rigor",
        description:
          "Vanessa recognizes Swara's natural creativity and helps channel it through structured engineering methodologies, teaching her to balance innovative thinking with technical feasibility and evidence-based design.",
      },
      {
        title: "Building from Strengths",
        description:
          "Vanessa's expertise in medical device design perfectly complements Swara's analytical thinking and enthusiasm for bioengineering, creating a mentorship where Swara's academic strengths are leveraged toward practical, impactful applications.",
      },
    ],
  },
  backgroundBlurb:
    "Swara began her junior year with a strong academic foundation and interest in bioengineering, but lacked hands-on experience translating her scientific knowledge into practical applications. She was drawn to the intersection of healthcare and engineering but needed guidance to focus her interests into a concrete project. While excelling in biology and mathematics, Swara sought mentorship to develop technical skills like CAD modeling and the engineering design process that weren't available in her traditional high school curriculum.",
  timeline: {
    milestones: [
      {
        id: 1,
        startDate: "2024-10",
        endDate: "2024-10",
        title: "Foundations & Project Selection",
        summary:
          "Explored the field of bioengineering and its subfields while learning the engineering design process. Selected a medical device redesign project focused on improving the vaginal speculum, addressing issues of patient comfort and inclusivity.",
        icon: "compass",
      },
      {
        id: 2,
        startDate: "2024-10",
        endDate: "2024-11",
        title: "User Needs & CAD Fundamentals",
        summary:
          "Mastered CAD fundamentals through structured exercises, creating models of progressively complex objects. Conducted comprehensive user needs analysis, developing design specifications based on patient and physician requirements.",
        icon: "users",
      },
      {
        id: 3,
        startDate: "2024-11",
        endDate: "2024-12",
        title: "Prototype Development",
        summary:
          "Created solution landscaping charts and morph charts to systematically evaluate design alternatives. Designed low-fidelity prototypes and conducted stakeholder surveys to gather feedback on comfort, design, and functionality.",
        icon: "pencil",
      },
      {
        id: 4,
        startDate: "2024-12",
        endDate: "2025-01",
        title: "CAD Modeling & Iteration",
        summary:
          "Developed detailed CAD models incorporating user feedback, focusing on handle design and opening mechanisms. Conducted professional interviews with healthcare providers to refine design specifications based on clinical requirements.",
        icon: "code",
      },
      {
        id: 5,
        startDate: "2025-01",
        endDate: "2025-02",
        title: "3D Printing & Mechanism Design",
        summary:
          "Produced first 3D-printed prototypes and analyzed functionality. Explored innovative locking and opening mechanisms inspired by everyday objects, focusing on improving usability and patient comfort.",
        icon: "layers",
      },
      {
        id: 6,
        startDate: "2025-02",
        endDate: "2025-03",
        title: "Design Pivot & Refinement",
        summary:
          "Made a breakthrough design pivot from traditional speculum to innovative tube-based approach with integrated camera and lighting. Presented at science fairs, receiving positive feedback from judges on addressing an important healthcare need.",
        icon: "lightbulb",
      },
    ],
  },
  skillsDeveloped: [
    "Computer-Aided Design (CAD) modeling",
    "Engineering design process methodology",
    "User needs analysis and requirements definition",
    "Prototype development and iteration",
    "3D printing and additive manufacturing",
    "Stakeholder survey design and analysis",
    "Technical interviewing techniques",
    "Medical device engineering principles",
    "Solution evaluation using engineering tools",
    "Scientific presentation and communication",
  ],
  challengesOvercome: [
    "Translated abstract engineering concepts into practical design applications",
    "Evolved from basic CAD modeling to complex mechanical design implementation",
    "Progressed from theoretical understanding to hands-on prototyping",
    "Developed from seeking guidance to making independent design decisions",
    "Advanced from following design templates to innovating original solutions",
    "Transformed from hesitant presenter to confident science fair competitor",
    "Pivoted from traditional design approaches to innovative alternatives when faced with technical challenges",
  ],
  futureGoals:
    "With a solid foundation in bioengineering principles and medical device design, Swara now plans to refine her innovative speculum design through further professional feedback and testing. She aims to develop her design portfolio to showcase her work for college applications, particularly for programs at Johns Hopkins, UC Berkeley, and Stanford. Building on the skills gained through this project, Swara intends to explore additional healthcare innovation opportunities and potentially pursue research internships that combine her interests in bioengineering and improving medical care accessibility.",
};
