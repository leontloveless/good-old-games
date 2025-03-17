import { NextRequest, NextResponse } from "next/server";

type tParams = Promise<{ slug: string }>;

export async function GET(
  request: NextRequest,
  { params }: { params: tParams }
) {
  const { slug } = await params;

  // Redirect to the placeholder image API
  return NextResponse.redirect(
    new URL(
      `/api/placeholder-image?text=${slug}&width=400&height=225`,
      request.url
    )
  );
}
