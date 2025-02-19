import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import Overview from "./Overview";
import MilestonesTimeline from "./timeline/MilestonesTimeline";
import SessionsTimeline from "./timeline/SessionsTimeline";
import { StudentStoryProps } from "@/app/types/StudentStory";
import { TimelineSession, TimelineChapter } from "@/app/types/timeline";

export default function TimelineTabs({
  studentStory,
  sessions,
  chapters,
}: {
  studentStory: StudentStoryProps;
  sessions: TimelineSession[];
  chapters: TimelineChapter[];
}) {
  const [viewMode, setViewMode] = useState<"story" | "feed">("story");
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <Tabs
      defaultValue="overview"
      onValueChange={(value) => setActiveTab(value)}
    >
      <div className="flex items-center justify-between mb-6">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="milestones">Milestones</TabsTrigger>
          <TabsTrigger value="sessions">Sessions</TabsTrigger>
        </TabsList>

        {(activeTab === "milestones" || activeTab === "sessions") && (
          <div className="flex items-center space-x-2">
            <Switch
              id="view-mode"
              checked={viewMode === "feed"}
              onCheckedChange={(checked) =>
                setViewMode(checked ? "feed" : "story")
              }
            />
            <Label htmlFor="view-mode">
              {viewMode === "story" ? "Story" : "Feed"}
            </Label>
          </div>
        )}
      </div>

      <TabsContent value="overview">
        <Overview studentStory={studentStory} />
      </TabsContent>

      <TabsContent value="milestones">
        <MilestonesTimeline
          chapters={chapters}
          loading={false}
          viewMode={viewMode}
        />
      </TabsContent>

      <TabsContent value="sessions">
        <SessionsTimeline
          sessions={sessions}
          loading={false}
          viewMode={viewMode}
        />
      </TabsContent>
    </Tabs>
  );
}
