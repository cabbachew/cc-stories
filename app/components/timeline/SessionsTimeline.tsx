"use client";

import { Timeline, TimelineItem } from "@/app/components/timeline";
import { Calendar } from "lucide-react";
import { motion } from "framer-motion";
import { TimelineSession } from "@/app/types/timeline";
import React from "react";

export default function SessionsTimeline({
  sessions,
  loading,
  viewMode = "story",
}: {
  sessions: TimelineSession[];
  loading?: boolean;
  viewMode?: "story" | "feed";
}) {
  // Pre-sort the sessions array before rendering
  const sortedSessions = React.useMemo(() => {
    return [...sessions].sort((a, b) => {
      if (viewMode === "feed") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return new Date(a.date).getTime() - new Date(b.date).getTime();
    });
  }, [sessions, viewMode]);

  if (loading) {
    return (
      <Timeline>
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: i * 0.05,
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
      {sortedSessions.map((session, index) => (
        <motion.div
          key={`${session.id}-${viewMode}`}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.2,
            delay: index * 0.05,
            ease: [0.25, 0.1, 0.25, 1],
          }}
        >
          <TimelineItem
            date={session.date}
            title={session.title}
            description={session.summary}
            icon={<Calendar className="h-4 w-4" />}
            status="completed"
            showConnector={index !== sortedSessions.length - 1}
          />
        </motion.div>
      ))}
    </Timeline>
  );
}
