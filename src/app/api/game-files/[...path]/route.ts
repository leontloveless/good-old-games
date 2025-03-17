import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import mime from "mime-types";

type tParams = Promise<{ path: string[] }>;

export async function GET(
  request: NextRequest,
  { params }: { params: tParams }
): Promise<Response> {
  const { path: pathSegments } = await params;
  const filePath = path.join(process.cwd(), "src/data/html5", ...pathSegments);
  try {
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: "File not found" }, { status: 404 });
    }

    const fileContents = fs.readFileSync(filePath);
    const contentType = mime.lookup(filePath) || "application/octet-stream";

    return new NextResponse(fileContents, {
      headers: {
        "Content-Type": contentType,
      },
    });
  } catch (error) {
    console.error("Error serving game file:", error);
    return NextResponse.json(
      { error: "Failed to serve file" },
      { status: 500 }
    );
  }
}
