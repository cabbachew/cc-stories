"use client";

// import { useParams } from "next/navigation";
import { StudentStoryProps } from "@/app/types/StudentStory";
import { Badge } from "@/components/ui/badge";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineDot,
  TimelineConnector,
  TimelineContent,
  TimelineTitle,
  TimelineDescription,
} from "@/components/ui/timeline";
import NextLink from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { DynamicIcon } from "@/app/utils/icons";
import ccLogo from "@/public/images/cc-logo.png";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

// Utility function to extract first name
function getFirstName(fullName: string): string {
  return fullName.split(" ")[0];
}

function formatDate(dateString: string) {
  // Handle both YYYY-MM and YYYY-MM-DD formats
  const [year, month] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, 1); // Subtract 1 from month since JS months are 0-based
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
}

function formatDateRange(startDate: string, endDate: string) {
  const start = formatDate(startDate);
  const end = formatDate(endDate);
  return start === end ? start : `${start} - ${end}`;
}

// Hardcoded student story data
const studentStoryData: StudentStoryProps = {
  id: "55b35e95-ee62-4df0-a859-ea0dc8a370b8",
  showLearningPlan: false,
  showAssets: false,
  showGallery: false,
  headline:
    "Bilingual Excellence: Mastering Mathematical Concepts Through Dual-Language Mentorship",
  discipline: "Math",
  topic: "Geometry",
  startDate: "2024-10-02",
  lastSessionDate: "2025-03-09",
  sessionsCompleted: 14,
  status: "scheduled",
  learningPlanUrl: "#",
  assets: [
    {
      title: "Spanish Verb Tense Guide",
      url: "#",
    },
    {
      title: "Linear Equations Practice Problems",
      url: "#",
    },
  ],
  gallery: {
    images: [
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e2e8f0'/%3E%3C/svg%3E",
        caption:
          "Solving systems of equations through both algebraic and graphical methods",
      },
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e2e8f0'/%3E%3C/svg%3E",
        caption:
          "Practicing Spanish verb conjugations while applying mathematical vocabulary",
      },
      {
        url: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='400' viewBox='0 0 400 400'%3E%3Crect width='400' height='400' fill='%23e2e8f0'/%3E%3C/svg%3E",
        caption:
          "Using the graphing calculator to visualize exponential growth problems",
      },
    ],
  },
  studentProfileImage:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23e2e8f0'/%3E%3C/svg%3E",
  studentName: "Talia Kirsch",
  studentSchool: "n/a",
  studentGrade: 10,
  studentPersonality: [
    "Analytical",
    "Detail-oriented",
    "Self-reflective",
    "Inquisitive",
  ],
  studentInterests: [
    "Mathematics",
    "Spanish Language",
    "Physics",
    "Problem-solving",
    "Bilingual Learning",
  ],
  mentorProfileImage:
    "https://ucarecdn.com/a456b8ce-2244-46a7-bf3e-2400bb3d7ea2/-/crop/460x460/0,80/-/preview/",
  mentorName: "Mari Velazquez",
  mentorSchool: "Harvard University",
  mentorMajor: "Economics",
  mentorTeachingStyle: ["Supportive", "Methodical", "Bilingual", "Patient"],
  mentorExpertise: [
    "Mathematics",
    "Spanish Language",
    "Economics",
    "Bilingual Education",
    "Problem-solving Strategies",
  ],
  match: {
    qualities: [
      {
        title: "Bilingual Mathematical Fluency",
        description:
          "Mari's native Spanish fluency paired with her strong mathematical background creates a unique learning environment where Talia can strengthen both language and analytical skills simultaneously, building confidence in expressing complex concepts across languages.",
      },
      {
        title: "Structured Problem Approach",
        description:
          "Mari's methodical teaching style perfectly complements Talia's analytical nature, helping her develop systematic approaches to solving problems while maintaining attention to detail—exactly what Talia needs to excel in both math and language studies.",
      },
      {
        title: "Adaptive Learning Techniques",
        description:
          "Mari recognizes when Talia benefits from visual aids versus verbal explanations, adapting her teaching methods in real-time to match Talia's learning style, which helps build confidence when tackling unfamiliar problem types.",
      },
    ],
  },
  backgroundBlurb:
    "Talia sought mentorship to strengthen her skills in both mathematics and Spanish simultaneously. As a detail-oriented and analytical learner, she needed guidance that could help her connect concepts across different subjects while building confidence in her problem-solving abilities. Though she demonstrated strong foundational knowledge, Talia sometimes rushed through problems and needed support in developing systematic approaches to tackle unfamiliar question formats, especially in timed test situations.",
  timeline: {
    milestones: [
      {
        id: 1,
        startDate: "2024-10",
        endDate: "2024-10",
        title: "Foundational Skills Assessment",
        summary:
          "Established baseline understanding of algebraic concepts and Spanish fluency through introductory problem sets. Identified strengths in problem-solving and areas for improvement in careful analysis of word problems.",
        icon: "clipboard-list",
      },
      {
        id: 2,
        startDate: "2024-10",
        endDate: "2024-11",
        title: "Linear Equations Mastery",
        summary:
          "Developed proficiency in graphing linear equations and calculating slopes. Successfully applied these concepts to solve real-world problems involving exponential growth while conducting discussions in Spanish.",
        icon: "line-chart",
      },
      {
        id: 3,
        startDate: "2024-11",
        endDate: "2024-12",
        title: "Test Preparation Strategies",
        summary:
          "Created and implemented effective test preparation routines, including practice tests and review techniques. Demonstrated improved performance on math assessments, particularly with linear equations in various forms.",
        icon: "check-square",
      },
      {
        id: 4,
        startDate: "2025-01",
        endDate: "2025-02",
        title: "Advanced Mathematics & Spanish Grammar",
        summary:
          "Mastered exponents, scientific notation, and systems of equations while simultaneously strengthening Spanish grammar, particularly preterite vs. imperfect tenses and the subjunctive mood.",
        icon: "book-open",
      },
      {
        id: 5,
        startDate: "2025-02",
        endDate: "2025-03",
        title: "Bilingual Academic Fluency",
        summary:
          "Achieved confident bilingual expression of mathematical concepts, demonstrated through solving complex problems while explaining reasoning in both English and Spanish. Successfully prepared for Spanish verb conjugation tests.",
        icon: "award",
      },
    ],
  },
  skillsDeveloped: [
    "Bilingual mathematical vocabulary and expression",
    "Linear equation graphing and analysis",
    "Systems of equations problem-solving",
    "Spanish verb conjugation (subjunctive, imperative, preterite)",
    "Exponential growth calculations",
    "Scientific notation applications",
    "Test preparation strategies",
    "Self-assessment and error correction",
    "Mathematical word problem analysis",
    "Technology integration for mathematical visualization",
  ],
  challengesOvercome: [
    "Progressed from rushing through problems to methodical analysis",
    "Developed from hesitation with unfamiliar problem types to confident approach strategies",
    "Advanced from basic verb tense understanding to masterful application of complex Spanish grammar",
    "Transformed from separate subject thinking to integrated bilingual concept application",
    "Evolved from calculator dependence to strategic technology utilization",
    "Improved from occasional sign errors to careful tracking of negatives in equations",
  ],
  futureGoals:
    "Talia is positioned to continue strengthening her bilingual academic skills, with plans to pursue more advanced mathematics courses while maintaining her Spanish language development. She aims to apply her enhanced problem-solving strategies across multiple subjects, leveraging her newfound confidence in tackling unfamiliar problem types. As she progresses, Talia will continue developing her ability to express complex mathematical concepts in both English and Spanish, a valuable skill that will serve her well in future academic and professional settings.",
  subjects: [
    {
      subject: "Mathematics",
      topics: [
        {
          concept: "Algebraic Expressions & Equations",
          actions: [
            "Worked through problems from Talia's review packet",
            "Focused on areas where Talia felt less confident",
            "Practiced step-by-step problem solving with explanations",
            "Used the technique of having Talia explain her thought process aloud",
            "Concentrated on careful management of positive/negative signs",
          ],
        },
        {
          concept: "Linear Equations & Graphing",
          actions: [
            "Converted between different forms (slope-intercept, point-slope, standard)",
            "Used Desmos to visualize and illustrate reflection problems",
            "Worked on both algebraic and graphical solutions to find intersection points",
            "Practiced finding equations of lines through points and perpendicular lines",
            "Completed problems from homework and created additional practice problems",
          ],
        },
        {
          concept: "Exponential Growth & Scientific Notation",
          actions: [
            "Calculated bank balances over time using a graphing calculator",
            "Compared different savings strategies using graphs and intersection points",
            "Solved population growth problems and calculated doubling rates",
            "Practiced with box volume calculations and nested parentheses expressions",
            "Worked with real-world applications of scientific notation",
          ],
        },
        {
          concept: "Word Problems",
          actions: [
            "Analyzed and broke down complex problems (like escalator calculations)",
            "Set up equations for rate-time-distance scenarios",
            "Worked through practical pricing and purchasing scenarios",
            "Practiced calculating mass of copper objects and solving mixture problems",
            "Focused on careful reading and interpretation of problem statements",
          ],
        },
      ],
    },
    {
      subject: "Spanish",
      topics: [
        {
          concept: "Verb Tenses & Conjugations",
          actions: [
            "Practiced conjugating various verbs (hablar, comer, escribir, etc.)",
            "Created lists of indicator words to help identify appropriate tenses",
            "Completed online exercises for selecting correct verb forms",
            "Used translation exercises to practice applying grammar rules",
            "Focused on distinguishing between estar and ser usage",
          ],
        },
        {
          concept: "Subjunctive Mood",
          actions: [
            "Reviewed conjugation rules for present subjunctive",
            'Identified subjunctive "triggers" in sentences',
            "Practiced when to use subjunctive versus indicative mood",
            "Worked on interactive exercises with immediate feedback",
            "Emphasized contextual understanding beyond just mechanical conjugation",
          ],
        },
        {
          concept: "Imperative Forms (Commands)",
          actions: [
            "Practiced forming both affirmative and negative commands",
            "Worked across different pronouns (tú, usted, ustedes, nosotros)",
            "Constructed complete sentences using command forms",
            "Discussed formal versus informal command usage",
            "Conjugated both regular and irregular verbs in command form",
          ],
        },
        {
          concept: "Por vs. Para Usage",
          actions: [
            "Completed exercises to reinforce correct usage",
            "Practiced distinguishing between different contexts for each",
            "Used examples relevant to Talia's life for better retention",
            "Focused on common confusion points between the two",
          ],
        },
      ],
    },
    {
      subject: "Physics",
      topics: [
        {
          concept: "Experimental Analysis",
          actions: [
            "Calculated slopes from graphs",
            "Discussed potential sources of experimental error",
            "Practiced percent error calculations",
            "Applied mathematical concepts to scientific contexts",
          ],
        },
      ],
    },
  ],
  categorizedSkills: [
    {
      category: "Critical Thinking",
      skill: "Problem decomposition",
      description: "Breaking down complex word problems into manageable parts",
    },
    {
      category: "Critical Thinking",
      skill: "Analytical reasoning",
      description: "Identifying relationships between mathematical concepts",
    },
    {
      category: "Critical Thinking",
      skill: "Error detection",
      description: "Self-correcting when making calculation mistakes",
    },
    {
      category: "Critical Thinking",
      skill: "Systematic approach",
      description: "Developing step-by-step problem-solving methodologies",
    },
    {
      category: "Communication",
      skill: "Bilingual proficiency",
      description:
        "Explaining mathematical concepts in both English and Spanish",
    },
    {
      category: "Communication",
      skill: "Technical vocabulary",
      description: "Building specialized language in multiple domains",
    },
    {
      category: "Communication",
      skill: "Articulation of process",
      description: "Verbalizing thought processes when solving problems",
    },
    {
      category: "Communication",
      skill: "Clarification seeking",
      description: "Asking insightful questions when concepts aren't clear",
    },
    {
      category: "Self-Management",
      skill: "Preparation",
      description:
        "Completing homework before sessions (noted on December 3rd)",
    },
    {
      category: "Self-Management",
      skill: "Test preparation strategies",
      description: "Developing structured approaches to studying",
    },
    {
      category: "Self-Management",
      skill: "Focus improvement",
      description: "Developing strategies to avoid rushing through problems",
    },
    {
      category: "Self-Management",
      skill: "Handling pressure",
      description: "Preparing for assessments with tight timelines",
    },
    {
      category: "Metacognition",
      skill: "Learning awareness",
      description:
        "Recognizing her own learning preferences (e.g., visual aids)",
    },
    {
      category: "Metacognition",
      skill: "Self-assessment",
      description: "Identifying areas where she needs more practice",
    },
    {
      category: "Metacognition",
      skill: "Adaptability",
      description: "Working with different teaching approaches and tools",
    },
    {
      category: "Metacognition",
      skill: "Confidence building",
      description: "Becoming more comfortable with unfamiliar problem types",
    },
    {
      category: "Technical Knowledge",
      skill: "Technology literacy",
      description:
        "Using graphing calculators and digital tools for mathematics",
    },
    {
      category: "Technical Knowledge",
      skill: "Cross-disciplinary application",
      description: "Applying math concepts to physics problems",
    },
    {
      category: "Technical Knowledge",
      skill: "Language switching",
      description:
        "Developing the ability to think about technical concepts in multiple languages",
    },
    {
      category: "Technical Knowledge",
      skill: "Visualization techniques",
      description:
        "Using graphical representations to understand abstract concepts",
    },
    {
      category: "Social-Emotional Learning",
      skill: "Receptiveness to feedback",
      description: "Implementing suggestions for improvement",
    },
    {
      category: "Social-Emotional Learning",
      skill: "Persistence",
      description: "Working through challenging problems until resolution",
    },
    {
      category: "Social-Emotional Learning",
      skill: "Cultural appreciation",
      description:
        "Engaging with Spanish language beyond just academic requirements",
    },
    {
      category: "Social-Emotional Learning",
      skill: "Mentorship relationship building",
      description: "Developing a productive working relationship with Mari",
    },
  ],
  keyDates: [
    {
      date: "October 11, 2024",
      event: "Math test",
    },
    {
      date: "December 3, 2024",
      event: "Completed homework before tutoring session",
    },
    {
      date: "December 10, 2024",
      event: "Math exam",
    },
    {
      date: "December 16-January 6, 2025",
      event: "Winter break from school",
    },
    {
      date: "February 5, 2025",
      event: "Spanish test on preterite and imperfect tenses",
    },
    {
      date: "March 8-10, 2025",
      event:
        "Spanish test on verb conjugations (subjunctive, infinitive, indicative, and gerund forms)",
    },
    {
      date: "March 10, 2025",
      event: "Spanish test on imperative verb forms",
    },
  ],
};

export default function StudentStory() {
  // Removed all dynamic data fetching logic, state, and effects.
  // The component now directly uses the hardcoded 'studentStoryData'.

  // Group categorized skills by category
  const groupedSkills = studentStoryData.categorizedSkills?.reduce(
    (acc, skill) => {
      if (!acc[skill.category]) {
        acc[skill.category] = [];
      }
      acc[skill.category].push(skill);
      return acc;
    },
    {} as Record<string, typeof studentStoryData.categorizedSkills>
  );

  return (
    <div className="min-h-screen p-4 md:p-6 text-[#111827]">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header Row */}
        <div className="flex items-center gap-3 md:gap-4">
          <Image
            src={ccLogo}
            alt="CC Stories Logo"
            width={40}
            height={40}
            className="rounded-lg md:w-12 md:h-12"
          />
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#111827] flex-grow">
            {studentStoryData.headline}
          </h1>
        </div>

        {/* Metadata Section */}
        <div className="space-y-1.5 sm:space-y-2 md:space-y-3">
          {/* First Row: Discipline and Topic */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 items-center">
            <Badge
              variant="secondary"
              className="text-[11px] sm:text-xs md:text-sm font-normal tracking-wider"
            >
              {studentStoryData.discipline}
            </Badge>
            <Badge
              variant="secondary"
              className="text-[11px] sm:text-xs md:text-sm font-normal tracking-wider"
            >
              {studentStoryData.topic}
            </Badge>
          </div>

          {/* Second Row: Dates and Status */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 items-center">
            <Badge
              variant="outline"
              className="text-[11px] sm:text-xs md:text-sm font-normal tracking-wider"
            >
              {formatDate(studentStoryData.startDate)}
            </Badge>
            <span className="text-muted-foreground text-[11px] sm:text-xs md:text-sm">
              –
            </span>
            <Badge
              variant="outline"
              className="text-[11px] sm:text-xs md:text-sm font-normal tracking-wider"
            >
              {studentStoryData.status === "scheduled"
                ? "Ongoing"
                : formatDate(studentStoryData.lastSessionDate)}
            </Badge>
            <span className="text-[#111827]/20">|</span>
            <Badge
              variant="outline"
              className="text-[11px] sm:text-xs md:text-sm font-normal tracking-wider"
            >
              {studentStoryData.sessionsCompleted} sessions
            </Badge>
          </div>
        </div>

        {/* Assets Section */}
        {(studentStoryData.showLearningPlan !== false ||
          studentStoryData.showAssets !== false) && (
          <div className="space-y-3">
            <h2 className="text-xl font-semibold text-[#111827]">Assets</h2>
            <div className="space-y-2">
              {studentStoryData.showLearningPlan !== false && (
                <NextLink
                  href={studentStoryData.learningPlanUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-[#111827]"
                >
                  <DynamicIcon name="link" className="h-4 w-4 text-[#111827]" />
                  <span>Initial Learning Plan</span>
                </NextLink>
              )}

              {studentStoryData.showAssets !== false &&
                studentStoryData.assets?.map((asset, index) => (
                  <div key={index}>
                    <NextLink
                      href={asset.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-[#111827]"
                    >
                      <DynamicIcon
                        name="link"
                        className="h-4 w-4 text-[#111827]"
                      />
                      <span>{asset.title}</span>
                    </NextLink>
                  </div>
                ))}
            </div>
          </div>
        )}

        {/* Only show the divider if there are assets to display */}
        {(studentStoryData.showLearningPlan !== false ||
          (studentStoryData.showAssets !== false &&
            studentStoryData.assets &&
            studentStoryData.assets.length > 0)) && (
          <div className="border-t border-[#111827]/5" />
        )}

        {/* Gallery Section */}
        {studentStoryData.showGallery !== false && (
          <>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-[#111827]">Gallery</h2>
              {/* <div className="relative w-full"> */}
              <div className="relative mx-auto w-full lg:max-w-[calc(100vw-8rem)]">
                <Carousel
                  opts={{
                    align: "start",
                    loop: true,
                    slidesToScroll: 1,
                  }}
                  className="w-full mx-auto"
                >
                  <CarouselContent className="-ml-2 md:-ml-4">
                    {studentStoryData.gallery?.images?.map((image, index) => (
                      <CarouselItem
                        key={index}
                        className="pl-2 md:pl-4 basis-full sm:basis-1/2 lg:basis-1/3"
                      >
                        <div className="p-1">
                          <div className="overflow-hidden rounded-lg bg-muted aspect-square">
                            {image.url ? (
                              <Image
                                src={image.url}
                                alt={image.caption || "Gallery image"}
                                width={500}
                                height={500}
                                unoptimized
                                className="h-full w-full object-cover transition-all hover:scale-105"
                              />
                            ) : (
                              <div className="h-full w-full flex items-center justify-center">
                                <DynamicIcon
                                  name="image"
                                  className="h-10 w-10 text-muted-foreground/50"
                                  aria-hidden="true"
                                />
                              </div>
                            )}
                          </div>
                          {image.caption && (
                            <p className="mt-2 text-sm text-center text-muted-foreground">
                              {image.caption}
                            </p>
                          )}
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <div className="hidden lg:block">
                    <CarouselPrevious className="absolute -left-10 top-[calc(50%-24px)]" />
                    <CarouselNext className="absolute -right-10 top-[calc(50%-24px)]" />
                  </div>
                  <div className="block lg:hidden mt-4 flex justify-center gap-2">
                    <CarouselPrevious />
                    <CarouselNext />
                  </div>
                </Carousel>
              </div>
            </div>
            <div className="border-t border-[#111827]/5" />
          </>
        )}

        {/* Student and Mentor Section */}
        <div className="bg-white rounded-none pl-0 pr-6 pb-6 space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Student Column */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-[#111827]">
                The Student
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-24 w-24 rounded-full bg-gray-200 flex-shrink-0 shadow-md ring-1 ring-[#111827]/10">
                    {studentStoryData.studentProfileImage && (
                      <Image
                        src={studentStoryData.studentProfileImage}
                        alt={`${getFirstName(
                          studentStoryData.studentName
                        )}'s profile`}
                        width={96}
                        height={96}
                        unoptimized
                        className="h-full w-full rounded-full object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <div className="font-medium">
                      {getFirstName(studentStoryData.studentName)}
                    </div>
                    <div className="space-y-0.5 text-sm text-muted-foreground">
                      <div>{studentStoryData.studentSchool}</div>
                      <div>Grade {studentStoryData.studentGrade}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {studentStoryData.studentPersonality?.map(
                      (trait, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-[11px] font-normal"
                        >
                          {trait}
                        </Badge>
                      )
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {studentStoryData.studentInterests?.map(
                      (interest, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-[11px] font-normal"
                        >
                          {interest}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* Mentor Column */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-[#111827]">
                The Mentor
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-24 w-24 rounded-full bg-gray-200 flex-shrink-0 shadow-md ring-1 ring-[#111827]/10">
                    {studentStoryData.mentorProfileImage && (
                      <Image
                        src={studentStoryData.mentorProfileImage}
                        alt={`${getFirstName(
                          studentStoryData.mentorName
                        )}'s profile`}
                        width={96}
                        height={96}
                        unoptimized
                        className="h-full w-full rounded-full object-cover"
                      />
                    )}
                  </div>
                  <div>
                    <div className="font-medium">
                      {getFirstName(studentStoryData.mentorName)}
                    </div>
                    <div className="space-y-0.5 text-sm text-muted-foreground">
                      <div>{studentStoryData.mentorSchool}</div>
                      <div>{studentStoryData.mentorMajor}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    {studentStoryData.mentorTeachingStyle?.map(
                      (style, index) => (
                        <Badge
                          key={index}
                          variant="secondary"
                          className="text-[11px] font-normal"
                        >
                          {style}
                        </Badge>
                      )
                    )}
                  </div>
                  <div className="flex flex-wrap gap-1">
                    {studentStoryData.mentorExpertise?.map(
                      (expertise, index) => (
                        <Badge
                          key={index}
                          variant="outline"
                          className="text-[11px] font-normal"
                        >
                          {expertise}
                        </Badge>
                      )
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Student Background Blurb */}
          <div className="space-y-2">
            <h3 className="font-medium text-[#111827]">
              What They Set Out To Do
            </h3>
            <div className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-[#fbc012]">
              {studentStoryData.backgroundBlurb}
            </div>
          </div>

          <div className="border-t border-[#111827]/5" />

          {/* The Perfect Match Section */}
          {studentStoryData.match &&
          studentStoryData.match.qualities &&
          studentStoryData.match.qualities.length > 0 ? (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-[#111827]">
                The Perfect Match
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {studentStoryData.match.qualities.map((quality, index) => (
                  <div key={index} className="space-y-2">
                    <h3 className="font-medium text-[#111827]">
                      {quality.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {quality.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ) : null}
        </div>

        <div className="border-t border-[#111827]/5" />

        {/* Timeline Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#111827]">
            Learning Milestones
          </h2>
          <Timeline>
            {studentStoryData.timeline.milestones.map((milestone, index) => (
              <TimelineItem key={milestone.id}>
                <TimelineSeparator>
                  <TimelineDot className="flex h-8 w-8 items-center justify-center">
                    <DynamicIcon
                      name={milestone.icon}
                      className="h-4 w-4 text-[#059669]"
                    />
                  </TimelineDot>
                  {index < studentStoryData.timeline.milestones.length - 1 && (
                    <TimelineConnector className="bg-[#111827]/5" />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:gap-2">
                    <TimelineTitle className="text-[#111827]">
                      {milestone.title}
                    </TimelineTitle>
                    <span className="text-sm text-muted-foreground mt-1 sm:mt-0">
                      {formatDateRange(milestone.startDate, milestone.endDate)}
                    </span>
                  </div>
                  <TimelineDescription className="text-[#111827]/70">
                    {milestone.summary}
                  </TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>

        <div className="border-t border-[#111827]/5" />

        {/* Skills and Challenges Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Skills Developed */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#111827]">
              Skills Developed
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {studentStoryData.skillsDeveloped.map((skill, index) => (
                <li key={index} className="flex items-start">
                  <DynamicIcon
                    name="check"
                    className="h-4 w-4 mr-2 text-[#059669] flex-shrink-0 mt-0.5"
                  />
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Challenges Overcome */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#111827]">
              Challenges Overcome
            </h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {studentStoryData.challengesOvercome.map((challenge, index) => (
                <li key={index} className="flex items-start">
                  <DynamicIcon
                    name="check"
                    className="h-4 w-4 mr-2 text-[#059669] flex-shrink-0 mt-0.5"
                  />
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-[#111827]/5" />

        {/* Detailed Subject Breakdown Section */}
        {studentStoryData.subjects && studentStoryData.subjects.length > 0 && (
          <>
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-[#111827]">
                Concepts Learned
              </h2>
              <Accordion type="single" collapsible className="w-full space-y-2">
                {studentStoryData.subjects.flatMap(
                  (subjectData, subjectIndex) =>
                    subjectData.topics.map((topic, topicIndex) => (
                      <AccordionItem
                        key={`${subjectIndex}-${topicIndex}`}
                        value={`item-${subjectIndex}-${topicIndex}`}
                        className="border-b border-dotted border-[#111827]/10 py-1"
                      >
                        <AccordionTrigger className="text-left hover:no-underline py-3">
                          <div className="flex items-center gap-2 w-full">
                            <Badge
                              variant="secondary"
                              className="text-[10px] font-normal flex-shrink-0"
                            >
                              {subjectData.subject}
                            </Badge>
                            <span className="font-medium text-[#111827]">
                              {topic.concept}
                            </span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pt-1 pb-3 pl-6">
                          <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                            {topic.actions.map((action, actionIndex) => (
                              <li key={actionIndex}>{action}</li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    ))
                )}
              </Accordion>
            </div>
          </>
        )}

        <div className="border-t border-[#111827]/5" />

        {/* Categorized Skills Section */}
        {groupedSkills && Object.keys(groupedSkills).length > 0 && (
          <>
            <div className="space-y-6">
              <h2 className="text-xl font-semibold text-[#111827]">
                Skills Developed
              </h2>
              <div className="space-y-8">
                {Object.entries(groupedSkills).map(([category, skills]) => (
                  <div key={category} className="space-y-4">
                    <h3 className="text-lg font-medium text-[#111827]">
                      {category}
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-4">
                      {skills?.map((skillDetail, index) => (
                        <div key={index} className="space-y-1">
                          <h4 className="font-medium text-[#111827] text-sm">
                            {skillDetail.skill}
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {skillDetail.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        <div className="border-t border-[#111827]/5" />

        {/* Key Dates & Events Section */}
        {studentStoryData.keyDates && studentStoryData.keyDates.length > 0 && (
          <>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-[#111827]">
                Key Events
              </h2>
              <ul className="space-y-2">
                {studentStoryData.keyDates.map((item, index) => (
                  <li
                    key={index}
                    className="flex flex-col sm:flex-row sm:items-center sm:gap-4 text-sm"
                  >
                    <span className="font-medium text-[#111827] w-48 shrink-0">
                      {item.date}
                    </span>
                    <span className="text-muted-foreground mt-0.5 sm:mt-0">
                      {item.event}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        <div className="border-t border-[#111827]/5" />

        {/* What's Next Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#111827]">
            What&apos;s Next?
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            {studentStoryData.futureGoals}
          </p>
        </div>
      </div>
    </div>
  );
}
