import { NextRequest, NextResponse } from "next/server";

// 간단한 인메모리 저장소 (실제로는 데이터베이스 사용)
let likesData: { [postId: string]: { count: number; userIPs: Set<string> } } = {};

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const postId = searchParams.get("postId");

  if (!postId) {
    return NextResponse.json({ error: "Post ID is required" }, { status: 400 });
  }

  const postLikes = likesData[postId] || { count: 0, userIPs: new Set() };

  return NextResponse.json({
    count: postLikes.count,
    userIPs: Array.from(postLikes.userIPs),
  });
}

export async function POST(request: NextRequest) {
  try {
    const { postId, userIP } = await request.json();

    if (!postId || !userIP) {
      return NextResponse.json({ error: "Post ID and User IP are required" }, { status: 400 });
    }

    if (!likesData[postId]) {
      likesData[postId] = { count: 0, userIPs: new Set() };
    }

    const postLikes = likesData[postId];

    if (postLikes.userIPs.has(userIP)) {
      // 이미 좋아요를 눌렀으면 취소
      postLikes.userIPs.delete(userIP);
      postLikes.count = Math.max(0, postLikes.count - 1);
    } else {
      // 좋아요 추가
      postLikes.userIPs.add(userIP);
      postLikes.count += 1;
    }

    return NextResponse.json({
      count: postLikes.count,
      isLiked: postLikes.userIPs.has(userIP),
    });
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
