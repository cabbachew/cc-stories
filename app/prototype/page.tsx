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
import {
  Link,
  Pencil,
  Cpu,
  Radio,
  Navigation,
  TestTube,
  User,
  GraduationCap,
} from "lucide-react";
import NextLink from "next/link";
import Image from "next/image";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
}

const milestoneIcons = [
  <Pencil className="h-4 w-4 text-[#111827]" key="pencil" />,
  <Cpu className="h-4 w-4 text-[#111827]" key="cpu" />,
  <Radio className="h-4 w-4 text-[#111827]" key="radio" />,
  <Navigation className="h-4 w-4 text-[#111827]" key="navigation" />,
  <TestTube className="h-4 w-4 text-[#111827]" key="test" />,
];

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
              className="text-[11px] sm:text-xs md:text-sm"
            >
              {studentStory.discipline}
            </Badge>
            <Badge
              variant="secondary"
              className="text-[11px] sm:text-xs md:text-sm"
            >
              {studentStory.topic}
            </Badge>
          </div>

          {/* Second Row: Dates and Status */}
          <div className="flex flex-wrap gap-1.5 sm:gap-2 md:gap-3 items-center">
            <Badge
              variant="outline"
              className="text-[11px] sm:text-xs md:text-sm"
            >
              {formatDate(studentStory.startDate)}
            </Badge>
            <span className="text-muted-foreground text-[11px] sm:text-xs md:text-sm">
              –
            </span>
            <Badge
              variant="outline"
              className="text-[11px] sm:text-xs md:text-sm"
            >
              {formatDate(studentStory.lastSessionDate)}
            </Badge>
            <span className="text-[#111827]/20">|</span>
            <Badge
              variant="outline"
              className="text-[11px] sm:text-xs md:text-sm"
            >
              {studentStory.sessionsCompleted} sessions
            </Badge>
            {studentStory.status === "scheduled" && (
              <Badge className="text-[11px] sm:text-xs md:text-sm bg-[#a7f3d0] text-[#111827] hover:bg-[#a7f3d0]/90">
                Ongoing
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
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-[#111827]"
            >
              <Link className="h-4 w-4 text-[#111827]" />
              <span>Initial Learning Plan</span>
            </NextLink>
          </div>
        </div>

        {/* Student and Mentor Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Student Column */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#111827] flex items-center gap-2">
              <User className="h-5 w-5" />
              The Student
            </h2>
            <div className="flex items-start gap-4">
              <div className="h-24 w-24 rounded-full bg-gray-200 flex-shrink-0">
                {studentStory.studentProfileImage && (
                  <img
                    src={studentStory.studentProfileImage}
                    alt={`${studentStory.studentName}'s profile`}
                    className="h-full w-full rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </div>
              <div className="space-y-1">
                <div className="font-medium">{studentStory.studentName}</div>
                <div className="space-y-0.5 text-sm text-muted-foreground">
                  <div>{studentStory.studentSchool}</div>
                  <div>Grade {studentStory.studentGrade}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Mentor Column */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-[#111827] flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              The Mentor
            </h2>
            <div className="flex items-start gap-4">
              <div className="h-24 w-24 rounded-full bg-gray-200 flex-shrink-0">
                {studentStory.mentorProfileImage && (
                  <img
                    src={studentStory.mentorProfileImage}
                    alt={`${studentStory.mentorName}'s profile`}
                    className="h-full w-full rounded-full object-cover"
                    onError={(e) => {
                      e.currentTarget.style.display = "none";
                    }}
                  />
                )}
              </div>
              <div className="space-y-1">
                <div className="font-medium">{studentStory.mentorName}</div>
                <div className="space-y-0.5 text-sm text-muted-foreground">
                  <div>{studentStory.mentorSchool}</div>
                  <div>{studentStory.mentorMajor}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
                    {milestoneIcons[index]}
                  </TimelineDot>
                  {index < studentStory.timeline.milestones.length - 1 && (
                    <TimelineConnector className="bg-[#111827]/10" />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <div className="flex items-baseline gap-2">
                    <TimelineTitle className="text-[#111827]">
                      {milestone.title}
                    </TimelineTitle>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(milestone.startDate)}
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
