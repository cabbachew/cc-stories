"use client";

import { studentStory } from "./data/studentStories/test";
import TimelineTabs from "./components/TimelineTabs";

export default function StudentStory() {
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <div className="space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">
            {studentStory.headline}
          </h1>
          <p className="text-lg text-muted-foreground">
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
