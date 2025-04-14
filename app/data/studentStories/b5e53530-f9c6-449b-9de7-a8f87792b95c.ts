import { StudentStoryProps } from "@/app/types/StudentStory";

export const studentStory: StudentStoryProps = {
  id: "b5e53530-f9c6-449b-9de7-a8f87792b95c",
  showLearningPlan: false,
  showAssets: false,
  showGallery: true,
  headline:
    "From Origami to Rocketry: How a 5th Grader Built and Launched His Own L1 Rocket",
  discipline: "Science, Engineering & Technology",
  topic: "Product Design",
  startDate: "2024-06-09",
  lastSessionDate: "2025-01-24",
  sessionsCompleted: 11,
  status: "scheduled",
  learningPlanUrl: "#",
  assets: [
    {
      title: "L1 Rocket Design Documentation",
      url: "#",
    },
    {
      title: "Fusion 360 3D Models and Designs",
      url: "#",
    },
  ],
  gallery: {
    images: [
      //   {
      //     url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e2e8f0'/%3E%3C/svg%3E",
      //     caption:
      //       "Arav working on his 3D-printed rocket nose cone design in Fusion 360",
      //   },
      //   {
      //     url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e2e8f0'/%3E%3C/svg%3E",
      //     caption:
      //       "Assembling the fin can with high-strength adhesives at the Stanford workspace",
      //   },
      //   {
      //     url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e2e8f0'/%3E%3C/svg%3E",
      //     caption:
      //       "Custom rocket simulation showing optimal stability calculations",
      //   },
      //   {
      //     url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e2e8f0'/%3E%3C/svg%3E",
      //     caption: "Final L1 rocket assembly for high-powered certification",
      //   },
      {
        url: "https://ucarecdn.com/5970014d-afce-49ff-b2cc-efea63f8b1d6/-/preview/540x720/",
        caption: "Successful launch for L1 high-powered rocketry certification",
      },
    ],
  },
  studentProfileImage:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23e2e8f0'/%3E%3C/svg%3E",
  studentName: "Arav Arora",
  studentSchool: "Bay Area Elementary School",
  studentGrade: 5,
  studentPersonality: ["Enthusiastic", "Collaborative", "Outgoing", "Hands-on"],
  studentInterests: [
    "Origami",
    "3D Printing",
    "Rocketry",
    "Design",
    "YouTube Content Creation",
  ],
  mentorProfileImage:
    "https://ucarecdn.com/c35f28fa-7c8d-4834-9762-4d5d8e36e107/-/preview/200x200/",
  mentorName: "Adam Yang",
  mentorSchool: "Stanford University",
  mentorMajor: "Aeronautics and Astronautics",
  mentorTeachingStyle: ["Enthusiastic", "Hands-on", "Patient", "Structured"],
  mentorExpertise: [
    "Rocket Design",
    "3D Modeling",
    "Aerodynamics",
    "Engineering Education",
    "Flight Systems",
  ],
  match: {
    qualities: [
      {
        title: "Shared Passion for Making",
        description:
          "Both Arav and Adam share a natural enthusiasm for hands-on creation, with Adam's experience in building rockets and drones perfectly complementing Arav's love for making physical objects and origami.",
      },
      {
        title: "Structured Technical Guidance",
        description:
          "Adam provides the perfect balance of technical expertise and step-by-step instruction that Arav needs to slow down and focus on quality over rushing to completion.",
      },
      {
        title: "Community Connection",
        description:
          "Adam's involvement in Stanford's engineering communities gives Arav access to professional workspaces, advanced equipment, and a real-world context that transforms abstract learning into tangible achievements.",
      },
    ],
  },
  backgroundBlurb:
    "Arav came to Curious Cardinals as an enthusiastic 5th grader with a natural love for hands-on activities, particularly origami and 3D printing. While academically strong, he tended to rush through projects, focusing more on completion than process. His parents sought a mentor who could channel his creative energy into structured engineering projects, helping him develop patience and attention to detail while nurturing his interest in design and making. Arav was particularly excited about the possibility of starting a YouTube channel to share his creations.",
  timeline: {
    milestones: [
      {
        id: 1,
        startDate: "2024-06",
        endDate: "2024-06",
        title: "Project Foundation & Inspiration",
        summary:
          "Explored Stanford Flight Club's workspace, gained exposure to college-level engineering projects, and established ambitious goals for building an L1 certification rocket followed by a potential FPV drone.",
        icon: "rocket",
      },
      {
        id: 2,
        startDate: "2024-07",
        endDate: "2024-07",
        title: "Technical Design Foundations",
        summary:
          "Mastered dimensional constraints in Fusion 360, learned rocket simulation software, and completed first design exercises resulting in a rocket with precisely 2 Cal of stability margin.",
        icon: "pencil-ruler",
      },
      {
        id: 3,
        startDate: "2024-07",
        endDate: "2024-08",
        title: "Custom Component Creation",
        summary:
          "Designed and 3D printed custom nose cone components, experimenting with different infill densities while creating a detailed design log documenting engineering decisions.",
        icon: "layers",
      },
      {
        id: 4,
        startDate: "2024-08",
        endDate: "2024-08",
        title: "Precision Manufacturing",
        summary:
          "Created DXF files for laser cutting fins, learned safe handling of high-strength adhesives, and assembled the fin can with aerospace-grade techniques at the Stanford workspace.",
        icon: "drafting-compass",
      },
      {
        id: 5,
        startDate: "2024-12",
        endDate: "2025-01",
        title: "Advanced Aerodynamics",
        summary:
          "Explored altitude sensor technology and drag minimization principles, building intuition for advanced rocket design concepts through hands-on application rather than abstract equations.",
        icon: "wind",
      },
      {
        id: 6,
        startDate: "2025-01",
        endDate: "2025-01",
        title: "Problem-Solving & Competition Prep",
        summary:
          "Conducted trade studies for fin repair options, balanced durability with performance considerations, and prepared final optimizations for upcoming launch and competition.",
        icon: "award",
      },
    ],
  },
  skillsDeveloped: [
    "3D modeling in Fusion 360",
    "Rocket simulation and stability analysis",
    "Digital fabrication with laser cutters",
    "3D printing techniques and optimization",
    "Safe handling of aerospace adhesives",
    "Technical documentation creation",
    "Engineering design constraints",
    "Trade studies for decision-making",
    "Aerodynamics fundamentals",
    "Project planning and execution",
  ],
  challengesOvercome: [
    "Converting from rushing to methodical work",
    "Learning to document design choices",
    "Mastering precision measurement techniques",
    "Developing patience for complex assembly processes",
    "Understanding invisible forces through simulation",
    "Following multi-step technical procedures",
    "Troubleshooting and repairing broken components",
    "Balancing creative ideas with engineering constraints",
    "Transitioning from simple origami to technical design",
  ],
  futureGoals:
    "Arav plans to continue his rocketry journey by completing his L1 certification launch and participating in his first rocketry competition with the team he's joined. With his newfound skills in CAD and 3D printing, he's excited to create content for his YouTube channel showcasing both his origami and engineering projects. Adam and Arav have also discussed collaborating on an exciting drone competition as their next project, allowing Arav to further develop his technical skills while combining his interests in flight, design, and content creation.",
};
