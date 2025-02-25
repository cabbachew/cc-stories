"use client";

import { studentStory } from "@/app/data/studentStories/legacy";
import TimelineTabs from "@/app/legacy/components/TimelineTabs";

export default function LegacyStudentStory() {
  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            {studentStory.headline}
          </h1>
          <p className="text-base text-muted-foreground">
            {studentStory.impactSummary}
          </p>
        </div>

        <TimelineTabs
          studentStory={studentStory}
          sessions={studentStory.timeline.sessions}
          chapters={studentStory.timeline.chapters}
        />
      </div>
    </div>
  );
}
