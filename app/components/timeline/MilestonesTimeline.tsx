"use client";

import { Timeline, TimelineItem } from "@/app/components/timeline";
import { BookOpen } from "lucide-react";
import { motion } from "framer-motion";
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
      <Timeline>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.5,
              delay: i * 0.1,
              ease: "easeOut",
            }}
          >
            <TimelineItem key={i} date="" title="" loading={true} />
          </motion.div>
        ))}
      </Timeline>
    );
  }

  return (
    <Timeline>
      {sortedChapters.map((chapter, index) => (
        <motion.div
          key={`${chapter.id}-${viewMode}`}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.5,
            delay: index * 0.1,
            ease: "easeOut",
          }}
        >
          <TimelineItem
            date={`${chapter.startDate} - ${chapter.endDate}`}
            title={chapter.title}
            description={chapter.summary}
            icon={<BookOpen className="h-4 w-4" />}
            status="completed"
            showConnector={index !== sortedChapters.length - 1}
          />
        </motion.div>
      ))}
    </Timeline>
  );
}
