import { promises as fs } from "fs";
import path from "path";
import { StudentStoryProps } from "@/app/types/StudentStory";

const STORIES_DIR = path.join(process.cwd(), "app/data/studentStories");

export async function getDynamicStudentStories(): Promise<StudentStoryProps[]> {
  try {
    // Read all files in the studentStories directory
    const files = await fs.readdir(STORIES_DIR);

    // Filter out non-TypeScript files and legacy.ts
    const storyFiles = files.filter(
      (file) => file.endsWith(".ts") && file !== "legacy.ts"
    );

    // Import and collect all stories
    const stories = await Promise.all(
      storyFiles.map(async (file) => {
        // Dynamic import of the story file
        const storyModule = await import(`@/app/data/studentStories/${file}`);
        return storyModule.studentStory as StudentStoryProps;
      })
    );

    return stories;
  } catch (error) {
    console.error("Error loading student stories:", error);
    return [];
  }
}

export async function getDynamicStudentStoryById(
  id: string
): Promise<StudentStoryProps | undefined> {
  try {
    const stories = await getDynamicStudentStories();
    return stories.find((story) => story.id === id);
  } catch (error) {
    console.error(`Error loading student story with ID ${id}:`, error);
    return undefined;
  }
}
