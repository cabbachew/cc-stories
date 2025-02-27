import { NextResponse } from "next/server";
import {
  getDynamicStudentStories,
  getDynamicStudentStoryById,
} from "@/app/utils/serverStudentStories";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const id = searchParams.get("id");

  try {
    if (id) {
      const story = await getDynamicStudentStoryById(id);
      if (story) {
        return NextResponse.json(story);
      } else {
        return NextResponse.json(
          { error: "Student story not found" },
          { status: 404 }
        );
      }
    } else {
      const stories = await getDynamicStudentStories();
      return NextResponse.json(stories);
    }
  } catch (error) {
    console.error("Error processing request:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
