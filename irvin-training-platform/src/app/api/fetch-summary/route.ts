import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const url = searchParams.get("url");

  if (!url) {
    return NextResponse.json({ error: "URL is required" }, { status: 400 });
  }

  try {
    const response = await fetch(url, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
      },
    });

    if (!response.ok) {
      return NextResponse.json({ error: `Failed to fetch: ${response.status}` }, { status: response.status });
    }

    const html = await response.text();

    const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
    const title = titleMatch ? titleMatch[1].trim() : "";

    const ogDescMatch = html.match(/<meta[^>]*property=["']og:description["'][^>]*content=["']([^"']+)["']/i);
    const ogTitleMatch = html.match(/<meta[^>]*property=["']og:title["'][^>]*content=["']([^"']+)["']/i);

    let summary = "";
    if (ogDescMatch) {
      summary = ogDescMatch[1];
    } else if (ogTitleMatch) {
      summary = ogTitleMatch[1];
    } else {
      const descMatch = html.match(/<meta[^>]*name=["']description["'][^>]*content=["']([^"']+)["']/i);
      summary = descMatch ? descMatch[1] : "No description available";
    }

    return NextResponse.json({
      url,
      title: title.substring(0, 200),
      summary: summary.substring(0, 500),
    });
  } catch (error) {
    return NextResponse.json(
      { error: `Fetch error: ${error instanceof Error ? error.message : "Unknown error"}` },
      { status: 500 }
    );
  }
}