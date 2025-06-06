"use client";

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from "react";
import { StudentStoryProps } from "@/app/types/StudentStory";
import { Route, Link as LinkIcon, Image, Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";

interface SchoolLevel {
  id: string;
  label: string;
  grades: number[];
}

const schoolLevels: SchoolLevel[] = [
  { id: "lower", label: "Lower School (K-5)", grades: [0, 1, 2, 3, 4, 5] },
  { id: "middle", label: "Middle School (6-8)", grades: [6, 7, 8] },
  { id: "high", label: "High School (9-12)", grades: [9, 10, 11, 12] },
];

export default function ConsultsPage() {
  const [studentStories, setStudentStories] = useState<StudentStoryProps[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedLevels, setSelectedLevels] = useState<string[]>(
    schoolLevels.map((level) => level.id)
  );

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

  const filteredStories = studentStories.filter((story) => {
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch =
      story.headline.toLowerCase().includes(searchLower) ||
      story.discipline.toLowerCase().includes(searchLower) ||
      story.topic.toLowerCase().includes(searchLower) ||
      story.studentName.toLowerCase().includes(searchLower) ||
      story.mentorName.toLowerCase().includes(searchLower) ||
      story.id.toLowerCase().includes(searchLower);

    const studentGrade = story.studentGrade;
    const matchesGrade = selectedLevels.some((levelId) => {
      const level = schoolLevels.find((l) => l.id === levelId);
      return level?.grades.includes(studentGrade);
    });

    return matchesSearch && matchesGrade && story.showGallery;
  });

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
        <div className="flex flex-col space-y-4">
          <h1 className="text-2xl md:text-3xl font-bold">Student Stories</h1>
          <div className="space-y-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search stories..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-9"
              />
            </div>
            <div className="flex flex-wrap gap-4">
              {schoolLevels.map((level) => (
                <div key={level.id} className="flex items-center space-x-2">
                  <Checkbox
                    id={level.id}
                    checked={selectedLevels.includes(level.id)}
                    onCheckedChange={(checked) => {
                      setSelectedLevels((prev) =>
                        checked
                          ? [...prev, level.id]
                          : prev.filter((id) => id !== level.id)
                      );
                    }}
                  />
                  <label
                    htmlFor={level.id}
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    {level.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="space-y-4">
          {filteredStories.length === 0 ? (
            <p className="text-center text-muted-foreground py-8">
              No stories found matching your search.
            </p>
          ) : (
            filteredStories.map((story) => (
              <div
                key={story.id}
                className="p-3 border hover:border-foreground/50 transition-all group"
              >
                <Link
                  href={`/engagements/${story.id}`}
                  className="block"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div className="space-y-0 w-full">
                      <div className="flex justify-between items-start">
                        <p className="text-sm text-foreground">
                          {story.headline}
                        </p>
                        <div className="flex items-center gap-1 text-muted-foreground ml-2">
                          {story.showLearningPlan && (
                            <Route
                              className="h-4 w-4"
                              aria-label="Learning plan available"
                            />
                          )}
                          {story.showAssets && (
                            <LinkIcon
                              className="h-4 w-4"
                              aria-label="Assets available"
                            />
                          )}
                          {story.showGallery && (
                            <Image
                              className="h-4 w-4"
                              aria-label="Gallery available"
                            />
                          )}
                        </div>
                      </div>

                      <div className="h-0 overflow-hidden group-hover:h-auto transition-all duration-300 pt-0 group-hover:pt-1">
                        <div className="text-sm flex items-center gap-2">
                          <span className="text-muted-foreground">
                            {story.studentName} • {story.mentorName}
                          </span>
                        </div>
                        <div className="flex gap-2 mt-1">
                          <Badge
                            variant="secondary"
                            className="text-[10px] sm:text-xs whitespace-nowrap w-fit"
                          >
                            {story.discipline}
                          </Badge>
                          <Badge
                            variant="secondary"
                            className="text-[10px] sm:text-xs whitespace-nowrap w-fit"
                          >
                            {story.topic}
                          </Badge>
                          <Badge
                            variant="outline"
                            className="text-[10px] sm:text-xs w-6 h-6 rounded-full flex items-center justify-center"
                          >
                            {story.studentGrade}
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
