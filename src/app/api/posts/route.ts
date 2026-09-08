import { NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET() {
  try {
    const posts = await db.blogPost.findMany({
      orderBy: { weekNumber: "asc" },
      select: {
        id: true,
        slug: true,
        title: true,
        excerpt: true,
        weekNumber: true,
        startDate: true,
        endDate: true,
        totalHours: true,
        remainingHours: true,
        coverAccent: true,
        tags: true,
        highlights: true,
        publishedAt: true,
      },
    });

    return NextResponse.json({ posts });
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    return NextResponse.json(
      { error: "Failed to fetch posts" },
      { status: 500 }
    );
  }
}
