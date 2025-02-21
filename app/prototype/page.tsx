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
import { Link, Pencil, Cpu, Radio, Navigation, TestTube } from "lucide-react";
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
        {/* Logo */}
        <div className="mb-8">
          <Image
            src="/images/cc-logo.png"
            alt="CC Stories Logo"
            width={48}
            height={48}
            className="rounded-lg"
          />
        </div>

        {/* Header Section */}
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold text-[#111827]">
            {studentStory.headline}
          </h1>

          {/* Metadata Rows */}
          <div className="space-y-3">
            {/* First Row: Discipline and Topic */}
            <div className="flex flex-wrap gap-3 items-center">
              <Badge variant="secondary" className="text-sm">
                {studentStory.discipline}
              </Badge>
              <Badge variant="secondary" className="text-sm">
                {studentStory.topic}
              </Badge>
            </div>

            {/* Second Row: Dates */}
            <div className="flex flex-wrap gap-3 items-center">
              <Badge variant="outline" className="text-sm">
                {formatDate(studentStory.startDate)}
              </Badge>
              <span className="text-muted-foreground">–</span>
              <Badge variant="outline" className="text-sm">
                {formatDate(studentStory.lastSessionDate)}
              </Badge>
              <span className="text-[#111827]/20">|</span>
              <Badge variant="outline" className="text-sm">
                {studentStory.sessionsCompleted} sessions
              </Badge>
            </div>
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
