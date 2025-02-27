"use client";

import { useParams } from "next/navigation";
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
import { Link, ImageIcon } from "lucide-react";
import NextLink from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { useEffect, useState } from "react";
import { DynamicIcon } from "@/app/utils/icons";

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

export default function StudentStory() {
  const params = useParams();
  const uuid = params?.uuid as string;
  const [studentStoryData, setStudentStoryData] =
    useState<StudentStoryProps | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadStudentStory() {
      try {
        setLoading(true);
        // Dynamically import the student story based on the UUID
        const storyModule = await import(`@/app/data/studentStories/${uuid}`);
        setStudentStoryData(storyModule.studentStory);
        setLoading(false);
      } catch (err) {
        console.error("Failed to load student story:", err);
        setError("Failed to load student story. Please check the UUID.");
        setLoading(false);
      }
    }

    if (uuid) {
      loadStudentStory();
    }
  }, [uuid]);

  if (loading) {
    return (
      <div className="min-h-screen p-4 md:p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg">Loading student story...</p>
        </div>
      </div>
    );
  }

  if (error || !studentStoryData) {
    return (
      <div className="min-h-screen p-4 md:p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">Error</h1>
          <p className="mt-2">{error || "Student story not found"}</p>
          <NextLink
            href="/"
            className="mt-4 inline-block text-blue-500 hover:underline"
          >
            Return to home
          </NextLink>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-6 text-[#111827]">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header Row */}
        <div className="flex items-center gap-3 md:gap-4">
          <Image
            src="/images/cc-logo.png"
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
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-[#111827]">Assets</h2>
          <div className="space-y-2">
            <NextLink
              href={studentStoryData.learningPlanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-[#111827]"
            >
              <Link className="h-4 w-4 text-[#111827]" />
              <span>Initial Learning Plan</span>
            </NextLink>

            {studentStoryData.showAssets !== false &&
              studentStoryData.assets?.map((asset, index) => (
                <div key={index}>
                  <NextLink
                    href={asset.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-[#111827]"
                  >
                    <Link className="h-4 w-4 text-[#111827]" />
                    <span>{asset.title}</span>
                  </NextLink>
                </div>
              ))}
          </div>
        </div>

        <div className="border-t border-[#111827]/5" />

        {/* Gallery Section */}
        {studentStoryData.showGallery !== false && (
          <>
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-[#111827]">Gallery</h2>
              {/* <div className="relative w-full"> */}
              <div className="relative mx-auto max-w-[calc(100vw-8rem)]">
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
                                <ImageIcon
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
                        className="h-full w-full rounded-full object-cover"
                        unoptimized
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
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
                        className="h-full w-full rounded-full object-cover"
                        unoptimized
                        onError={(e) => {
                          e.currentTarget.style.display = "none";
                        }}
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
          <div className="text-sm text-muted-foreground leading-relaxed pl-4 border-l-2 border-[#fbc012]">
            {studentStoryData.backgroundBlurb}
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
            Project Milestones
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
                  <span className="mr-2 text-[#059669]">✓</span>
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
                  <span className="mr-2 text-[#059669]">✓</span>
                  <span>{challenge}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

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
