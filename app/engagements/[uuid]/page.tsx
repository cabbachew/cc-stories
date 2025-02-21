"use client";

import { studentStory } from "@/app/data/studentStories/bca78955-2e42-44b6-84a3-cb31dfa64a7f";
import TimelineTabs from "@/app/components/TimelineTabs";

export default function StudentStory() {
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
