import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { studentStory as story1 } from "@/app/data/studentStories/611ae784-f69c-4304-9dc1-2347ea2ac8ac";
import { studentStory as story2 } from "@/app/data/studentStories/bca78955-2e42-44b6-84a3-cb31dfa64a7f";

// Collect all student stories in an array (excluding legacy)
const studentStories = [story1, story2];

export default function ContentsPage() {
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
