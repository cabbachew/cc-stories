import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { studentStory } from "@/app/data/studentStories/611ae784-f69c-4304-9dc1-2347ea2ac8ac";

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold">Student Stories</h1>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <Link
              href="/engagements/611ae784-f69c-4304-9dc1-2347ea2ac8ac"
              className="block"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                <div className="space-y-2">
                  <h2 className="text-lg font-semibold text-gray-700 font-mono">
                    611ae784-f69c-4304-9dc1-2347ea2ac8ac
                  </h2>
                  <p className="text-sm text-muted-foreground">
                    {studentStory.headline}
                  </p>
                </div>
                <div className="flex flex-wrap gap-1.5 sm:justify-end mt-2 sm:mt-0">
                  <Badge
                    variant="secondary"
                    className="text-xs whitespace-nowrap"
                  >
                    {studentStory.discipline}
                  </Badge>
                  <Badge
                    variant="secondary"
                    className="text-xs whitespace-nowrap"
                  >
                    {studentStory.topic}
                  </Badge>
                  <Badge
                    variant="outline"
                    className="text-xs whitespace-nowrap"
                  >
                    Grade {studentStory.studentGrade}
                  </Badge>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
