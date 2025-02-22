"use client";

import { studentStory } from "@/app/data/studentStories/611ae784-f69c-4304-9dc1-2347ea2ac8ac";
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
import { Link, Compass, Zap, Rocket, Dice6, ShoppingBag } from "lucide-react";
import NextLink from "next/link";
import Image from "next/image";

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
            {studentStory.headline}
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
              {studentStory.discipline}
            </Badge>
            <Badge
              variant="secondary"
              className="text-[11px] sm:text-xs md:text-sm font-normal tracking-wider"
            >
              {studentStory.topic}
            </Badge>
          </div>

          {/* Second Row: Dates and Status */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 items-center">
            <Badge
              variant="outline"
              className="text-[11px] sm:text-xs md:text-sm font-normal tracking-wider"
            >
              {formatDate(studentStory.startDate)}
            </Badge>
            <span className="text-muted-foreground text-[11px] sm:text-xs md:text-sm">
              –
            </span>
            <Badge
              variant="outline"
              className="text-[11px] sm:text-xs md:text-sm font-normal tracking-wider"
            >
              {formatDate(studentStory.lastSessionDate)}
            </Badge>
            <span className="text-[#111827]/20">|</span>
            <Badge
              variant="outline"
              className="text-[11px] sm:text-xs md:text-sm font-normal tracking-wider"
            >
              {studentStory.sessionsCompleted} sessions
            </Badge>
            {studentStory.status === "scheduled" && (
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
              href={studentStory.learningPlanUrl}
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
                    {studentStory.studentProfileImage && (
                      <Image
                        src={studentStory.studentProfileImage}
                        alt={`${studentStory.studentName}'s profile`}
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
                      {studentStory.studentName}
                    </div>
                    <div className="space-y-0.5 text-sm text-muted-foreground">
                      <div>{studentStory.studentSchool}</div>
                      <div>Grade {studentStory.studentGrade}</div>
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
                    {studentStory.mentorProfileImage && (
                      <Image
                        src={studentStory.mentorProfileImage}
                        alt={`${studentStory.mentorName}'s profile`}
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
                    <div className="font-medium">{studentStory.mentorName}</div>
                    <div className="space-y-0.5 text-sm text-muted-foreground">
                      <div>{studentStory.mentorSchool}</div>
                      <div>{studentStory.mentorMajor}</div>
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
            {studentStory.timeline.milestones.map((milestone, index) => (
              <TimelineItem key={milestone.id}>
                <TimelineSeparator>
                  <TimelineDot className="flex h-8 w-8 items-center justify-center">
                    {iconMap[milestone.icon as keyof typeof iconMap]}
                  </TimelineDot>
                  {index < studentStory.timeline.milestones.length - 1 && (
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
