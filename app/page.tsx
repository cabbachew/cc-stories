import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold">Student Stories</h1>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <Link
              href="/engagements/611ae784-f69c-4304-9dc1-2347ea2ac8ac"
              className="block space-y-2"
            >
              <h2 className="text-lg font-semibold">Student Story</h2>
              <p className="text-sm text-muted-foreground">
                NASA Robotics Engagement
              </p>
            </Link>
          </div>
          <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <Link href="/legacy" className="block space-y-2">
              <h2 className="text-lg font-semibold">Legacy View</h2>
              <p className="text-sm text-muted-foreground">
                Timeline-based view of student story
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
