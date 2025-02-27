import { StudentStoryProps } from "@/app/types/StudentStory";
import { studentStory as story1 } from "@/app/data/studentStories/611ae784-f69c-4304-9dc1-2347ea2ac8ac";
import { studentStory as story2 } from "@/app/data/studentStories/bca78955-2e42-44b6-84a3-cb31dfa64a7f";
import { studentStory as story3 } from "@/app/data/studentStories/46ffc7f3-37c3-49bb-81a4-5c9f8199c2a4";

// This approach manually imports all student stories
// In a production environment, you might want to use a more dynamic approach
// such as server-side file system operations or a database
export function getAllStudentStories(): StudentStoryProps[] {
  // Exclude legacy stories or any other stories you don't want to include
  return [story1, story2, story3];
}

export function getStudentStoryById(id: string): StudentStoryProps | undefined {
  return getAllStudentStories().find((story) => story.id === id);
}

// For a truly dynamic approach, you would need to use a server component
// and leverage the Node.js file system API to read all files in the directory
// This is a placeholder for that approach and would need to be implemented
// in a server component or API route
export async function getDynamicStudentStories(): Promise<StudentStoryProps[]> {
  // In a real implementation, this would use the file system to read all files
  // For now, we'll just return the manually imported stories
  return getAllStudentStories();
}

export async function getDynamicStudentStoryById(
  id: string
): Promise<StudentStoryProps | undefined> {
  try {
    // In a real implementation, this would dynamically import the file
    // For now, we'll just use the manually imported stories
    return getStudentStoryById(id);
  } catch (error) {
    console.error(`Error loading student story with ID ${id}:`, error);
    return undefined;
  }
}
