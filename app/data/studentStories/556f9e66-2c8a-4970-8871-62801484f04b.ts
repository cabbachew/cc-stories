import { StudentStoryProps } from "@/app/types/StudentStory";

export const studentStory: StudentStoryProps = {
  id: "556f9e66-2c8a-4970-8871-62801484f04b",
  showLearningPlan: false,
  showAssets: false,
  showGallery: false,
  headline:
    "From Patent Novice to Engineering Innovator: How a Sophomore Transformed Technical Curiosity into Real-World Impact",
  discipline: "Science, Engineering & Technology",
  topic: "Robotics / Electronics / CAD",
  startDate: "2024-01-07",
  lastSessionDate: "2025-03-16",
  sessionsCompleted: 33,
  status: "scheduled",
  learningPlanUrl: "#",
  assets: [
    {
      title: "Patent Law Blog",
      url: "https://unlockingpatentpotential.substack.com/",
    },
    {
      title: "Pill Dispenser CAD Design",
      url: "#",
    },
  ],
  gallery: {
    images: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e2e8f0'/%3E%3C/svg%3E",
        caption:
          "Prototype sketches for pill dispenser design for Parkinson's patients",
      },
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e2e8f0'/%3E%3C/svg%3E",
        caption: "CAD model of pill dispenser with innovative slide mechanism",
      },
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e2e8f0'/%3E%3C/svg%3E",
        caption:
          "3D printed prototype testing of accessible pill dispensing system",
      },
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23e2e8f0'/%3E%3C/svg%3E",
        caption: "Analyzing code for CPAP data processing project",
      },
    ],
  },
  studentProfileImage:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23e2e8f0'/%3E%3C/svg%3E",
  studentName: "Abby Merges",
  studentSchool: "Marlborough School",
  studentGrade: 10,
  studentPersonality: ["Analytical", "Dedicated", "Curious", "Humorous"],
  studentInterests: [
    "Biomedical Engineering",
    "Patent Law",
    "Debate",
    "Chess",
    "Athletics",
  ],
  mentorProfileImage:
    "https://ucarecdn.com/832566d4-cfc5-4b96-8624-b80161acb509/",
  mentorName: "Vanessa Tam",
  mentorSchool: "Duke University",
  mentorMajor: "Biomedical Engineering",
  mentorTeachingStyle: ["Patient", "Analytical", "Engaging", "Supportive"],
  mentorExpertise: [
    "Biomedical Engineering",
    "CAD Design",
    "Engineering Design Process",
    "Computer Programming",
    "Medical Device Development",
  ],
  match: {
    qualities: [
      {
        title: "Intellectual Curiosity Alignment",
        description:
          "Both Abby and Vanessa share an insatiable thirst for understanding how things work, creating an environment where complex concepts like patent law and engineering principles are explored with genuine enthusiasm and analytical rigor.",
      },
      {
        title: "Balancing Theory with Practice",
        description:
          "Vanessa recognizes Abby's natural analytical abilities and helps channel them through structured engineering approaches, teaching her to balance intellectual concepts with practical applications like CAD modeling and programming.",
      },
      {
        title: "Complementary Communication Styles",
        description:
          "Abby's strong debate background and Vanessa's experience teaching engineering concepts create a perfect dynamic where technical ideas are clearly articulated, questioned, refined, and applied to real-world problems.",
      },
    ],
  },
  backgroundBlurb:
    "Abby began her sophomore year with strong academic performance and a growing interest in STEM fields, particularly engineering and science. While excelling in math and honors courses, she sought ways to combine her analytical thinking from debate with her curiosity about engineering. She was actively seeking direction to channel her talents, looking for a project that would complement her academic strengths while building practical skills not available in her traditional high school curriculum. Though initially uncertain about technical aspects of engineering, Abby was eager to explore how fields like patent law and biomedical engineering could intersect.",
  timeline: {
    milestones: [
      {
        id: 1,
        startDate: "2024-01",
        endDate: "2024-02",
        title: "Patent Law Exploration & Blog Launch",
        summary:
          "Researched patent fundamentals and launched the 'Unlocking Patent Potential' blog to share knowledge on patent basics, importance for inventors, and application processes. Published first educational blog post after developing content strategy and platform.",
        icon: "book-open",
      },
      {
        id: 2,
        startDate: "2024-02",
        endDate: "2024-03",
        title: "Engineering Design Fundamentals",
        summary:
          "Mastered CAD modeling fundamentals through structured tutorials and hands-on projects. Created first technical designs including Lego bricks and mechanical components, learning critical spatial reasoning and technical drawing interpretation.",
        icon: "pen-tool",
      },
      {
        id: 3,
        startDate: "2024-03",
        endDate: "2024-05",
        title: "Programming & Data Analysis",
        summary:
          "Developed programming skills in Python, learning variables, functions, control structures, and data manipulation. Applied these skills to develop a CPAP machine data analysis program for measuring breath patterns and calculating appropriate settings.",
        icon: "code",
      },
      {
        id: 4,
        startDate: "2024-05",
        endDate: "2024-07",
        title: "Design Thinking & Problem Identification",
        summary:
          "Applied engineering design process to identify and analyze real-world problems. Conducted stakeholder research on multiple biomedical device options, ultimately focusing on designing a pill dispenser for Parkinson's patients based on need assessment.",
        icon: "search",
      },
      {
        id: 5,
        startDate: "2024-09",
        endDate: "2024-11",
        title: "Concept Development & Evaluation",
        summary:
          "Created solution landscaping evaluations and morphological charts for pill dispenser designs. Developed multiple concept solutions and evaluated them systematically using Pugh matrices to identify the most promising approaches.",
        icon: "layout",
      },
      {
        id: 6,
        startDate: "2024-11",
        endDate: "2025-03",
        title: "Prototyping & Iteration",
        summary:
          "Designed and created prototypes for pill dispenser for Parkinson's patients, iterating from low-fidelity cardboard models to CAD designs and 3D printed functional prototypes. Collected user feedback and made design improvements based on real-world testing.",
        icon: "layers",
      },
    ],
  },
  skillsDeveloped: [
    "Patent law fundamentals and application processes",
    "Technical blog content creation and publication",
    "Computer-Aided Design (CAD) modeling",
    "Python programming and data analysis",
    "Engineering design process methodology",
    "Solution evaluation using Pugh matrices and other tools",
    "User needs analysis and requirements definition",
    "Prototype development and iterative design",
    "3D printing and physical model creation",
    "Technical presentation and documentation",
  ],
  challengesOvercome: [
    "Transformed from patent law novice to creating educational resources on complex legal-technical concepts",
    "Evolved from basic CAD sketching to designing complete 3D models with mechanical features",
    "Progressed from beginner Python programmer to creating functional data analysis applications",
    "Advanced from theoretical design thinking to hands-on prototype development and testing",
    "Developed from individual problem-solving to user-centered design considering accessibility needs",
    "Transitioned from following instructions to independently directing engineering projects",
  ],
  futureGoals:
    "Building on her experience in both patent law education and engineering design, Abby plans to continue developing her pill dispenser prototype through additional iterations and user testing. She aims to create a final design that could potentially be patented, bringing her patent law knowledge full circle with her engineering work. With her growing interest in biomedical engineering, Abby also plans to further explore this field through her research position at the Natural History Museum lab working on an electronic impedance spectrometer for detecting bacteria. She intends to leverage her multi-disciplinary skills across debate, engineering, and patent law as she prepares for future studies and career opportunities.",
};
