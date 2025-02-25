"use client";

// import { Timeline, TimelineItem } from "@/app/components/timeline";
import { TimelineLayout } from "@/components/custom-timeline";
import { BookOpen } from "lucide-react";
// import { motion } from "framer-motion";
import { TimelineChapter } from "@/app/types/timeline";
import React from "react";

export default function MilestonesTimeline({
  chapters,
  loading,
  viewMode = "story",
}: {
  chapters: TimelineChapter[];
  loading?: boolean;
  viewMode?: "story" | "feed";
}) {
  const sortedChapters = React.useMemo(() => {
    return [...chapters].sort((a, b) => {
      if (viewMode === "feed") {
        return (
          new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
        );
      }
      return new Date(a.startDate).getTime() - new Date(b.startDate).getTime();
    });
  }, [chapters, viewMode]);

  if (loading) {
    return (
      <TimelineLayout
        items={[
          { date: "", title: "" },
          { date: "", title: "" },
          { date: "", title: "" },
        ]}
        animate={true}
      />
    );
  }

  const timelineItems = sortedChapters.map((chapter) => ({
    date: `${chapter.startDate} - ${chapter.endDate}`,
    title: chapter.title,
    description: chapter.summary,
    icon: <BookOpen className="h-4 w-4" />,
  }));

  return (
    <TimelineLayout items={timelineItems} animate={true} iconColor="primary" />
  );
}
