"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { StudentStoryProps } from "@/app/types/StudentStory";

export default function ContentsPage() {
  const [studentStories, setStudentStories] = useState<StudentStoryProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchStudentStories() {
      try {
        setLoading(true);
        const response = await fetch("/api/studentStories");
        if (!response.ok) {
          throw new Error("Failed to fetch student stories");
        }
        const data = await response.json();
        setStudentStories(data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching student stories:", err);
        setError("Failed to load student stories. Please try again later.");
        setLoading(false);
      }
    }

    fetchStudentStories();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen p-4 md:p-6 flex items-center justify-center">
        <div className="text-center">
          <p className="text-lg">Loading student stories...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen p-4 md:p-6 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-500">Error</h1>
          <p className="mt-2">{error}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold">Student Stories</h1>
        <div className="space-y-4">
          {studentStories.map((story) => (
            <div
              key={story.id}
              className="p-4 border rounded-lg hover:bg-muted/50 transition-colors"
            >
              <Link href={`/engagements/${story.id}`} className="block">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div className="space-y-2">
                    <h2 className="text-lg font-semibold text-gray-700 font-mono">
                      {story.id}
                    </h2>
                    <p className="text-sm text-muted-foreground">
                      {story.headline}
                    </p>
                    <p className="text-sm">
                      {story.studentName} • {story.mentorName}
                    </p>
                  </div>
                  <div className="flex flex-col gap-1.5 sm:items-end mt-2 sm:mt-0">
                    <Badge
                      variant="secondary"
                      className="text-xs whitespace-nowrap"
                    >
                      {story.discipline}
                    </Badge>
                    <Badge
                      variant="secondary"
                      className="text-xs whitespace-nowrap"
                    >
                      {story.topic}
                    </Badge>
                    <Badge
                      variant="outline"
                      className="text-xs whitespace-nowrap"
                    >
                      Grade {story.studentGrade}
                    </Badge>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
