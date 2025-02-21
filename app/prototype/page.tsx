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
import { Link2, Pencil, Cpu, Radio, Navigation, TestTube } from "lucide-react";
import Link from "next/link";

function formatDate(dateString: string) {
  const date = new Date(dateString);
  return new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(date);
}

const milestoneIcons = [
  <Pencil className="h-4 w-4" key="pencil" />,
  <Cpu className="h-4 w-4" key="cpu" />,
  <Radio className="h-4 w-4" key="radio" />,
  <Navigation className="h-4 w-4" key="navigation" />,
  <TestTube className="h-4 w-4" key="test" />,
];

export default function PrototypePage() {
  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-8">
        {/* Header Section */}
        <div className="space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold">
            {studentStory.headline}
          </h1>

          {/* Metadata Row */}
          <div className="flex flex-wrap gap-3 items-center">
            <Badge variant="outline" className="text-sm">
              {formatDate(studentStory.startDate)}
            </Badge>
            <Badge variant="secondary" className="text-sm">
              {studentStory.topic}
            </Badge>
            <Badge variant="secondary" className="text-sm">
              {studentStory.discipline}
            </Badge>
            <Link
              href={studentStory.learningPlanUrl}
              className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary"
            >
              <Link2 className="h-4 w-4" />
              <span>Learning Plan</span>
            </Link>
          </div>
        </div>

        {/* Timeline Section */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold">Project Milestones</h2>
          <Timeline>
            {studentStory.timeline.milestones.map((milestone, index) => (
              <TimelineItem key={milestone.id}>
                <TimelineSeparator>
                  <TimelineDot className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-primary bg-background">
                    {milestoneIcons[index]}
                  </TimelineDot>
                  {index < studentStory.timeline.milestones.length - 1 && (
                    <TimelineConnector />
                  )}
                </TimelineSeparator>
                <TimelineContent>
                  <div className="flex items-baseline gap-2">
                    <TimelineTitle>{milestone.title}</TimelineTitle>
                    <span className="text-sm text-muted-foreground">
                      {formatDate(milestone.startDate)}
                    </span>
                  </div>
                  <TimelineDescription>{milestone.summary}</TimelineDescription>
                </TimelineContent>
              </TimelineItem>
            ))}
          </Timeline>
        </div>
      </div>
    </div>
  );
}
