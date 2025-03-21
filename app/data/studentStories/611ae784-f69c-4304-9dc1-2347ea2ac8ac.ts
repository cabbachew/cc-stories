import { StudentStoryProps } from "@/app/types/StudentStory";

export const studentStory: StudentStoryProps = {
  // Header section
  showLearningPlan: true,
  showAssets: false,
  showGallery: true,
  headline:
    "From Robotics to NASA: A Young Innovator's Journey in Engineering and Entrepreneurship",

  // Metadata section
  discipline: "Science, Engineering & Technology",
  topic: "Robotics / Electronics / CAD",
  startDate: "2024-12-29",
  lastSessionDate: "2025-02-21",
  sessionsCompleted: 77,
  status: "scheduled",

  // Assets section
  learningPlanUrl:
    "https://cc-proposals.vercel.app/proposals/f99fcca0-2e03-47af-9a85-cae4b1fe2c21",
  assets: [
    {
      title: "[Project Portfolio]",
      url: "https://cc-proposals.vercel.app/proposals/f99fcca0-2e03-47af-9a85-cae4b1fe2c21",
    },
    {
      title: "[NASA Presentation]",
      url: "https://cc-proposals.vercel.app/proposals/f99fcca0-2e03-47af-9a85-cae4b1fe2c21",
    },
  ],

  // Gallery section
  gallery: {
    images: [
      {
        url: "https://ucarecdn.com/72fea418-799e-47fb-9e67-13c60dca589f/-/preview/1000x1000/",
        caption: "A fully 3D printable, multi-floored birdhouse design",
      },
      {
        url: "https://ucarecdn.com/d281d2d9-cb32-45c8-afe0-0c5efd684e7c/-/preview/1000x1000/",
        caption: "A fully 3D printable, multi-floored birdhouse design",
      },
      {
        url: "https://ucarecdn.com/9e27f1e3-dcc9-4d80-b6a9-3005bbf154c2/-/preview/1000x1000/",
        caption:
          "First collaborative artwork to heighten product design skills",
      },

      {
        url: "https://ucarecdn.com/1f805fb6-f292-421f-a1be-df744a71890b/-/preview/999x999/",
        caption: "Preliminary design for Dome project presented to NASA",
      },
      {
        url: "https://ucarecdn.com/8ee34589-2fd2-46ec-a4f8-2ba17df40ad1/-/preview/1000x957/",
        caption: "NASA Rover Design",
      },
      {
        url: "https://ucarecdn.com/70aea16d-7616-4bcf-9a05-c49743810788/-/preview/1000x1000/",
        caption: "Character designs for Wizertry",
      },
      {
        url: "https://ucarecdn.com/ec175c41-11c5-41a2-aa77-0509057e5086/-/preview/1000x1000/",
        caption: "Snippet from Mini Munchies product line",
      },
    ],
  },

  // Student section
  studentProfileImage:
    "https://ucarecdn.com/f31e1614-7307-4b7d-8078-08b032ad1bc2/-/crop/1300x1100/50%25,10%25/-/preview/1000x666/",
  studentName: "Jack Zitterman",
  studentSchool: "Avenues The World School",
  studentGrade: 7,
  // Student personality and interests
  studentPersonality: ["Innovative", "Curious", "Creative", "Enthusiastic"],
  studentInterests: [
    "Robotics",
    "3D Printing",
    "Engineering",
    "Chess",
    "Space Exploration",
    "Gaming",
  ],

  // Mentor section
  mentorProfileImage:
    "https://ucarecdn.com/3b65f0ed-2c5c-4da1-a34a-a1356aa36d1b/",
  mentorName: "Skye Horiguchi",
  mentorSchool: "Stanford University",
  mentorMajor: "Aerospace Engineering & Product Design",
  // Mentor teaching style and expertise
  mentorTeachingStyle: [
    "Patient",
    "Encouraging",
    "Enthusiastic",
    "Goal-Oriented",
  ],
  mentorExpertise: [
    "Aerospace Engineering",
    "Product Design",
    "CAD Modeling",
    "Robotics",
    "Space Technology",
  ],

  // Match section
  match: {
    qualities: [
      {
        title: "Shared Vision",
        description:
          "Skye's aerospace aspirations and hands-on engineering approach perfectly align with Jack's innovative robotics and space exploration projects",
      },
      {
        title: "Technical + Creative",
        description:
          "Skye's Stanford engineering expertise and artistic background complement Jack's diverse interests in robotics, game design, and entrepreneurship",
      },
      {
        title: "Project Development",
        description:
          "Daily sessions provide the structure and guidance needed to transform Jack's ambitious ideas - from Mars rovers to business ventures - into tangible achievements",
      },
    ],
  },

  // Background section
  backgroundBlurb:
    "A bright 7th grader with a passion for robotics and engineering, Jack sought expert guidance to develop his technical skills and bring his innovative ideas to life. This neurodivergent innovator's determination to attend MIT and create advanced robotics drove him to seek daily mentorship, focusing on functional projects and expanding his technical capabilities.",

  // Timeline section
  timeline: {
    milestones: [
      {
        id: 1,
        startDate: "2024-12",
        endDate: "2024-12",
        title: "Initial Robotics & Design Exploration",
        summary:
          "Explored foundational robotics concepts and began work on mosquito elimination robot design.",
        icon: "compass",
      },
      {
        id: 2,
        startDate: "2025-01",
        endDate: "2025-01",
        title: "Bug Killer Bot Development",
        summary:
          "Evolved design from laser-based to automated salt gun system, completed CAD models and servo motor integration.",
        icon: "bug",
      },
      {
        id: 3,
        startDate: "2025-01",
        endDate: "2025-02",
        title: "Mars Rover Innovation",
        summary:
          "Designed innovative Mars rover protection system and presented concepts to NASA representatives.",
        icon: "rocket",
      },
      {
        id: 4,
        startDate: "2025-02",
        endDate: "2025-02",
        title: "Board Game Creation",
        summary:
          "Developed 'Wizertry' board game concept, created character designs, and established social media presence.",
        icon: "dice-6",
      },
      {
        id: 5,
        startDate: "2025-02",
        endDate: "2025-02",
        title: "Mini Munchies Business Launch",
        summary:
          "Initiated food business venture, developed branding, and began outreach to manufacturers.",
        icon: "briefcase",
      },
    ],
  },

  // Skills and Challenges section
  skillsDeveloped: [
    "Advanced CAD modeling using Shapr3D",
    "Technical documentation and presentation",
    "Engineering design principles",
    "Project management",
    "Business communication",
    "Website development",
    "Social media content creation",
    "Entrepreneurial thinking",
  ],
  challengesOvercome: [
    "Evolved from basic to independent CAD designer",
    "Progressed from concepts to multiple concrete projects",
    "Developed from seeking validation to trusting creative instincts",
    "Advanced from ideas to practical implementation",
    "Moved from individual work to professional outreach",
  ],

  // Future Goals section
  futureGoals:
    "Jack aims to scale his Mini Munchies business concept through local manufacturer partnerships while continuing to develop his engineering projects. He plans to deepen his CAD and robotics skills through hands-on prototyping, with a focus on bringing his innovative mechanical designs to life. Long-term goals include expanding his understanding of materials science and advanced fabrication techniques while nurturing his growing interests in both technical design and entrepreneurship.",

  // ID field (kept at the end as it's not directly displayed in the UI)
  id: "611ae784-f69c-4304-9dc1-2347ea2ac8ac",
};
