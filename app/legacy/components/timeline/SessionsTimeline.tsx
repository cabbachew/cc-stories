"use client";

import {
  Timeline,
  TimelineItem,
  TimelineLayout,
} from "@/components/custom-timeline";
import { Calendar } from "lucide-react";
// import { motion } from "framer-motion";
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
          <TimelineItem key={i} date="" title="" loading={true} />
        ))}
      </Timeline>
    );
  }

  const timelineItems = sortedSessions.map((session) => ({
    date: session.date,
    title: session.title,
    description: session.summary,
    icon: <Calendar className="h-4 w-4" />,
  }));

  return (
    <TimelineLayout items={timelineItems} animate={true} iconColor="primary" />
  );
}
