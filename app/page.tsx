import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen p-4 md:p-6">
      <div className="mx-auto max-w-7xl space-y-6">
        <h1 className="text-2xl md:text-3xl font-bold">CC Stories</h1>
        <div className="space-y-4">
          <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <Link
              href="/engagements/bca78955-2e42-44b6-84a3-cb31dfa64a7f"
              className="block space-y-2"
            >
              <h2 className="text-lg font-semibold">Prototype v1.0</h2>
              <p className="text-sm text-muted-foreground">
                bca78955-2e42-44b6-84a3-cb31dfa64a7f
              </p>
            </Link>
          </div>
          <div className="p-4 border rounded-lg hover:bg-muted/50 transition-colors">
            <Link href="/prototype" className="block space-y-2">
              <h2 className="text-lg font-semibold">Prototype v1.1</h2>
              <p className="text-sm text-muted-foreground">
                611ae784-f69c-4304-9dc1-2347ea2ac8ac
              </p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
