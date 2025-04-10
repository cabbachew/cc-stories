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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Flag, Heart } from "lucide-react";

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
  studentSchool: "",
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
    "Talia sought mentorship to strengthen her skills in both mathematics and Spanish simultaneously. As a detail-oriented and analytical learner, she needed guidance that could help her connect concepts across different subjects while building confidence in her problem-solving abilities.",
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
      skill: "Problem-solving methodology",
      explanation:
        "Talia excels at breaking down complex problems into manageable steps, particularly with word problems involving rates, distance, and mixtures. She systematically identifies key variables before solving.",
      categories: ["Critical Thinking", "Mathematics", "Process Skills"],
      sessions: [
        "2024-10-02",
        "2024-10-20",
        "2025-01-28",
        "2025-02-04",
        "2025-02-12",
      ],
    },
    {
      skill: "Mathematical reasoning",
      explanation:
        "Talia can identify relationships between mathematical concepts, connecting slope calculations with perpendicular line properties. She's developing strong self-correction habits when dealing with negative numbers and sign errors.",
      categories: ["Critical Thinking", "Mathematics", "Error Detection"],
      sessions: [
        "2024-10-09",
        "2024-12-03",
        "2024-12-09",
        "2025-02-12",
        "2025-02-18",
      ],
    },
    {
      skill: "Bilingual mathematical fluency",
      explanation:
        "Talia can discuss and solve complex math problems in both English and Spanish, making her truly bilingual in academic contexts. She comfortably explains exponential growth concepts and geometric applications in both languages.",
      categories: ["Communication", "Language", "Technical Knowledge"],
      sessions: [
        "2024-10-02",
        "2024-10-09",
        "2024-10-20",
        "2025-01-28",
        "2025-02-04",
        "2025-02-12",
        "2025-02-18",
      ],
    },
    {
      skill: "Verbal process articulation",
      explanation:
        "Talia effectively verbalizes her thought processes while solving problems, which strengthens her understanding. She asks specific, targeted questions about concepts like irregular verbs and exponential expressions when she needs clarification.",
      categories: ["Communication", "Metacognition", "Process Skills"],
      sessions: ["2024-10-02", "2024-10-09", "2025-02-04", "2025-03-08"],
    },
    {
      skill: "Strategic academic preparation",
      explanation:
        "Talia is developing strong preparation habits, completing homework before sessions (specifically noted on December 3rd) and effectively preparing for assessments, including back-to-back Spanish tests in March.",
      categories: ["Self-Management", "Organization", "Time Management"],
      sessions: [
        "2024-12-03",
        "2024-12-09",
        "2025-02-04",
        "2025-03-08",
        "2025-03-09",
      ],
    },
    {
      skill: "Attention to detail",
      explanation:
        "Talia is developing strategies to avoid rushing through problems and misreading instructions. She's learning to carefully manage positive and negative signs when moving terms between sides of equations.",
      categories: ["Self-Management", "Metacognition", "Process Skills"],
      sessions: ["2024-10-09", "2024-12-09", "2025-01-28", "2025-02-04"],
    },
    {
      skill: "Learning style awareness",
      explanation:
        "Talia recognizes she learns best through visual aids like Desmos visualizations and has identified specific challenges with fraction operations and irregular verbs that require additional focus.",
      categories: ["Metacognition", "Self-Assessment", "Adaptability"],
      sessions: ["2024-12-09", "2025-02-12", "2025-02-18", "2025-03-09"],
    },
    {
      skill: "Technical tool proficiency",
      explanation:
        "Talia has progressed from basic calculator operations to more sophisticated applications like comparing savings strategies with graphs and plotting intersection points. She effectively uses graphical representations to understand abstract concepts.",
      categories: ["Technical Knowledge", "Mathematics", "Digital Literacy"],
      sessions: ["2024-10-20", "2024-11-13", "2025-01-28"],
    },
    {
      skill: "Cross-subject application",
      explanation:
        "Talia applies mathematical concepts to physics problems, particularly when calculating slopes from graphs and analyzing experimental error. She transfers language patterns between different contexts and disciplines.",
      categories: [
        "Technical Knowledge",
        "Interdisciplinary Learning",
        "Transfer Skills",
      ],
      sessions: ["2024-11-13", "2025-01-28", "2025-02-04"],
    },
    {
      skill: "Perseverance with challenges",
      explanation:
        "Talia persists through difficult problems until resolution, showing a growth mindset. She's progressing from initial hesitation with unfamiliar problem types to greater independence and confidence.",
      categories: ["Social-Emotional", "Adaptability", "Learning Approach"],
      sessions: [
        "2024-10-20",
        "2024-12-03",
        "2025-01-28",
        "2025-02-18",
        "2025-03-08",
      ],
    },
    {
      skill: "Spanish cultural engagement",
      explanation:
        "Talia shows enthusiasm for Spanish beyond just academic requirements, engaging in conversational practice about everyday topics and demonstrating interest in contextual language usage.",
      categories: ["Social-Emotional", "Language", "Cultural Appreciation"],
      sessions: ["2024-10-20", "2025-02-25", "2025-03-09"],
    },
    {
      skill: "Mentor relationship effectiveness",
      explanation:
        "Talia has established productive communication patterns with Mari, effectively implementing specific feedback about slowing down during problem-solving and developing a strong working relationship.",
      categories: ["Social-Emotional", "Communication", "Interpersonal Skills"],
      sessions: [
        "2024-10-02",
        "2024-10-09",
        "2024-11-13",
        "2025-01-28",
        "2025-02-04",
        "2025-02-12",
      ],
    },
  ],
  keyDates: [
    {
      date: "Oct 11, 2024",
      event: "Math test",
    },
    {
      date: "Dec 3, 2024",
      event: "Completed homework before tutoring session",
    },
    {
      date: "Dec 10, 2024",
      event: "Math exam",
    },
    {
      date: "Dec 16, 2024",
      event: "Winter break begins",
    },
    {
      date: "Jan 6, 2025",
      event: "Winter break ends",
    },
    {
      date: "Feb 5, 2025",
      event: "Spanish test on preterite and imperfect tenses",
    },
    {
      date: "Mar 10, 2025",
      event: "Spanish test on verb conjugations",
    },
  ],
};

export default function StudentStory() {
  // Removed all dynamic data fetching logic, state, and effects.
  // The component now directly uses the hardcoded 'studentStoryData'.

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
            <h2 className="text-lg font-semibold text-[#111827]">Assets</h2>
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
              <h2 className="text-lg font-semibold text-[#111827]">Gallery</h2>
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
        {studentStoryData.match && (
          <div className="space-y-6">
            {/* <h2 className="text-xl font-semibold text-[#111827]">
              The Perfect Match
            </h2> */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Student Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#111827]">
                  The Student
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="student-traits" className="border-0">
                    <AccordionTrigger className="hover:no-underline">
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
                          <div className="font-medium text-base">
                            {getFirstName(studentStoryData.studentName)}
                          </div>
                          <div className="space-y-0.5 text-sm text-muted-foreground">
                            <div>{studentStoryData.studentSchool}</div>
                            <div>Grade {studentStoryData.studentGrade}</div>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
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
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>

              {/* Mentor Column */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-[#111827]">
                  The Mentor
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="mentor-traits" className="border-0">
                    <AccordionTrigger className="hover:no-underline">
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
                          <div className="font-medium text-base">
                            {getFirstName(studentStoryData.mentorName)}
                          </div>
                          <div className="space-y-0.5 text-sm text-muted-foreground">
                            <div>{studentStoryData.mentorSchool}</div>
                            <div>{studentStoryData.mentorMajor}</div>
                          </div>
                        </div>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-2">
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
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>

            {/* Student Background Blurb */}
            <Card className="rounded-none border-2 border-[#34D399]">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <CardHeader>
                    <CardTitle className="font-bold flex items-center gap-2">
                      <Flag className="h-5 w-5 text-[#34D399]" />
                      What {getFirstName(studentStoryData.studentName)} set out
                      to do
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-sm text-muted-foreground leading-relaxed">
                      {studentStoryData.backgroundBlurb}
                    </div>
                  </CardContent>
                </div>
                <div>
                  <CardHeader>
                    <CardTitle className="font-bold flex items-center gap-2">
                      <Heart className="h-5 w-5 text-[#34D399]" />
                      Why {getFirstName(studentStoryData.mentorName)} was the
                      perfect match
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 gap-2 md:gap-4">
                      <Accordion type="single" collapsible className="w-full">
                        {studentStoryData.match.qualities.map(
                          (quality, index) => (
                            <AccordionItem
                              key={index}
                              value={`quality-${index}`}
                              className="border-0"
                            >
                              <AccordionTrigger className="hover:no-underline py-2">
                                <h3 className="font-medium text-[#111827]">
                                  {quality.title}
                                </h3>
                              </AccordionTrigger>
                              <AccordionContent className="pt-1 pb-2">
                                <p className="text-sm text-muted-foreground">
                                  {quality.description}
                                </p>
                              </AccordionContent>
                            </AccordionItem>
                          )
                        )}
                      </Accordion>
                    </div>
                  </CardContent>
                </div>
              </div>
            </Card>
          </div>
        )}

        <div className="border-t border-[#111827]/5" />

        {/* Skills and Challenges Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Concepts Learned */}
          <div className="space-y-4">
            <h2 className="text-lg font-semibold text-[#111827]">
              Concepts Learned
            </h2>
            <ul className="space-y-2">
              {studentStoryData.subjects?.flatMap((subjectData) =>
                subjectData.topics.map((topic, topicIndex) => (
                  <li
                    key={`${subjectData.subject}-${topicIndex}`}
                    className="flex items-start gap-2 text-sm"
                  >
                    <DynamicIcon
                      name="check"
                      className="h-4 w-4 text-[#059669] flex-shrink-0 mt-0.5"
                    />
                    <span>
                      <span className="text-muted-foreground">
                        {subjectData.subject}
                      </span>
                      <span className="text-muted-foreground mx-1">/</span>
                      <span className="text-[#111827]">{topic.concept}</span>
                    </span>
                  </li>
                ))
              )}
            </ul>
          </div>

          {/* Key Events */}
          {studentStoryData.keyDates &&
            studentStoryData.keyDates.length > 0 && (
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-[#111827]">
                  Key Events
                  <span className="text-[10px] font-medium text-muted-foreground ml-1 align-super">
                    beta
                  </span>
                </h2>
                <ul className="space-y-2">
                  {studentStoryData.keyDates.map((item, index) => (
                    <li
                      key={index}
                      className="flex flex-col sm:flex-row gap-1 sm:gap-4 text-sm"
                    >
                      <span className="font-medium text-[#111827] sm:w-32 shrink-0">
                        {item.date}
                      </span>
                      <span className="text-muted-foreground">
                        {item.event}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
        </div>

        <div className="border-t border-[#111827]/5" />

        {/* Challenges Overcome Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#111827]">
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

        <div className="border-t border-[#111827]/5" />

        {/* Skills Analysis Section */}
        {studentStoryData.categorizedSkills &&
          studentStoryData.categorizedSkills.length > 0 && (
            <>
              <div className="space-y-4">
                <h2 className="text-lg font-semibold text-[#111827]">
                  Skills Analysis
                </h2>
                <div className="h-[300px] overflow-y-auto pr-4">
                  <Accordion
                    type="single"
                    collapsible
                    className="w-full space-y-2"
                  >
                    {[...(studentStoryData.categorizedSkills || [])]
                      .sort(
                        (a, b) =>
                          (b.sessions?.length || 0) - (a.sessions?.length || 0)
                      )
                      .map((skillDetail, index) => (
                        <AccordionItem
                          key={index}
                          value={`skill-item-${index}`}
                          className="border-b border-dotted border-[#111827]/10 py-1"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-2">
                            {/* Trigger contains skill name and session squares */}
                            <div className="flex items-center justify-between gap-2 w-full pr-2">
                              <span className="text-sm text-[#111827] flex-1 mr-2">
                                {skillDetail.skill}
                              </span>
                              {skillDetail.sessions &&
                                skillDetail.sessions.length > 0 && (
                                  <div className="flex items-center gap-0.5 flex-shrink-0">
                                    {skillDetail.sessions.map(
                                      (_, sessionIndex) => (
                                        <div
                                          key={sessionIndex}
                                          className="h-2 w-2 bg-green-500 rounded-sm"
                                          title="Session where skill was observed"
                                        ></div>
                                      )
                                    )}
                                  </div>
                                )}
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pt-1 pb-2 space-y-2">
                            <div className="flex flex-wrap gap-1">
                              {skillDetail.categories?.map(
                                (category, catIndex) => (
                                  <Badge
                                    key={catIndex}
                                    variant="outline"
                                    className="text-[10px] font-normal"
                                  >
                                    {category}
                                  </Badge>
                                )
                              )}
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {skillDetail.explanation}
                            </p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                  </Accordion>
                </div>
              </div>
            </>
          )}

        <div className="border-t border-[#111827]/5" />

        {/* What's Next Section */}
        <div className="space-y-4">
          <h2 className="text-lg font-semibold text-[#111827]">
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
