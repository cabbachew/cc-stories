"use client";

import { studentStory } from "@/app/data/studentStories/611ae784-f69c-4304-9dc1-2347ea2ac8ac";
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
import {
  Link,
  Compass,
  Zap,
  Rocket,
  Dice6,
  ShoppingBag,
  ImageIcon,
} from "lucide-react";
import NextLink from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";

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

const iconMap = {
  compass: <Compass className="h-4 w-4 text-[#111827]" />,
  zap: <Zap className="h-4 w-4 text-[#111827]" />,
  rocket: <Rocket className="h-4 w-4 text-[#111827]" />,
  "dice-6": <Dice6 className="h-4 w-4 text-[#111827]" />,
  "shopping-bag": <ShoppingBag className="h-4 w-4 text-[#111827]" />,
};

const studentStoryData: StudentStoryProps = studentStory;

export default function PrototypePage() {
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
              {formatDate(studentStoryData.lastSessionDate)}
            </Badge>
            <span className="text-[#111827]/20">|</span>
            <Badge
              variant="outline"
              className="text-[11px] sm:text-xs md:text-sm font-normal tracking-wider"
            >
              {studentStoryData.sessionsCompleted} sessions
            </Badge>
            {studentStoryData.status === "scheduled" && (
              <Badge className="text-[11px] sm:text-xs md:text-sm bg-[#a7f3d0] text-[#111827] font-normal tracking-wider shadow-none">
                Active
              </Badge>
            )}
          </div>
        </div>

        {/* Assets Section */}
        <div className="space-y-3">
          <h2 className="text-xl font-semibold text-[#111827]">Assets</h2>
          <div>
            <NextLink
              href={studentStoryData.learningPlanUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-[#111827]"
            >
              <Link className="h-4 w-4 text-[#111827]" />
              <span>Initial Learning Plan</span>
            </NextLink>
          </div>
        </div>

        <div className="border-t border-[#111827]/5" />

        {/* Gallery Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold text-[#111827]">Gallery</h2>
          <div className="relative mx-auto max-w-[calc(100vw-8rem)]">
            <Carousel
              opts={{
                align: "start",
                loop: true,
                slidesToScroll: 1,
              }}
              className="w-full max-w-4xl mx-auto"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {studentStoryData.gallery?.images?.map((image, index) => (
                  <CarouselItem
                    key={index}
                    className="pl-2 md:pl-4 basis-full md:basis-1/2 lg:basis-1/3"
                  >
                    <div className="p-1">
                      <div className="overflow-hidden rounded-lg bg-muted aspect-square">
                        {image.url ? (
                          <Image
                            src={image.url}
                            alt={image.caption || "Gallery image"}
                            width={400}
                            height={400}
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
                        alt={`${studentStoryData.studentName}'s profile`}
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
                      {studentStoryData.studentName}
                    </div>
                    <div className="space-y-0.5 text-sm text-muted-foreground">
                      <div>{studentStoryData.studentSchool}</div>
                      <div>Grade {studentStoryData.studentGrade}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    <Badge
                      variant="secondary"
                      className="text-[11px] font-normal"
                    >
                      Innovative
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-[11px] font-normal"
                    >
                      Curious
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-[11px] font-normal"
                    >
                      Creative
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-[11px] font-normal"
                    >
                      Enthusiastic
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <Badge
                      variant="outline"
                      className="text-[11px] font-normal"
                    >
                      Robotics
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[11px] font-normal"
                    >
                      3D Printing
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[11px] font-normal"
                    >
                      Engineering
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[11px] font-normal"
                    >
                      Chess
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[11px] font-normal"
                    >
                      Space Exploration
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[11px] font-normal"
                    >
                      Gaming
                    </Badge>
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
                        alt={`${studentStoryData.mentorName}'s profile`}
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
                      {studentStoryData.mentorName}
                    </div>
                    <div className="space-y-0.5 text-sm text-muted-foreground">
                      <div>{studentStoryData.mentorSchool}</div>
                      <div>{studentStoryData.mentorMajor}</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex flex-wrap gap-1">
                    <Badge
                      variant="secondary"
                      className="text-[11px] font-normal"
                    >
                      Patient
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-[11px] font-normal"
                    >
                      Encouraging
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-[11px] font-normal"
                    >
                      Enthusiastic
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-[11px] font-normal"
                    >
                      Goal-Oriented
                    </Badge>
                  </div>
                  <div className="flex flex-wrap gap-1">
                    <Badge
                      variant="outline"
                      className="text-[11px] font-normal"
                    >
                      Aerospace Engineering
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[11px] font-normal"
                    >
                      Product Design
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[11px] font-normal"
                    >
                      Technical Projects
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-[11px] font-normal"
                    >
                      Creative Arts
                    </Badge>
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
          <div className="space-y-6">
            <h2 className="text-xl font-semibold text-[#111827]">
              The Perfect Match
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <h3 className="font-medium text-[#111827]">Shared Vision</h3>
                <p className="text-sm text-muted-foreground">
                  Skye&apos;s aerospace aspirations and hands-on engineering
                  approach perfectly align with Jack&apos;s innovative robotics
                  and space exploration projects
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-[#111827]">
                  Technical + Creative
                </h3>
                <p className="text-sm text-muted-foreground">
                  Skye&apos;s Stanford engineering expertise and artistic
                  background complement Jack&apos;s diverse interests in
                  robotics, game design, and entrepreneurship
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="font-medium text-[#111827]">
                  Project Development
                </h3>
                <p className="text-sm text-muted-foreground">
                  Daily sessions provide the structure and guidance needed to
                  transform Jack&apos;s ambitious ideas - from Mars rovers to
                  business ventures - into tangible achievements
                </p>
              </div>
            </div>
          </div>
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
                    {iconMap[milestone.icon as keyof typeof iconMap]}
                  </TimelineDot>
                  {index < studentStoryData.timeline.milestones.length - 1 && (
                    <TimelineConnector className="bg-[#111827]/5" />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <div className="flex items-baseline gap-2">
                    <TimelineTitle className="text-[#111827]">
                      {milestone.title}
                    </TimelineTitle>
                    <span className="text-sm text-muted-foreground">
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
      </div>
    </div>
  );
}
