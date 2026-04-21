export interface YTVideo {
  id: string;
  title: string;
  thumbnail: string;
  publishedAt: string;
  url: string;
}

export interface ChannelStats {
  subscribers: string;
  interviews: string;
}

const FALLBACK_VIDEOS: YTVideo[] = [
  {
    id: "Mw-6dy1thqg",
    title: "Pace Morby 🔥 REI Baddies Is the GOAT — Episode 23 & Counting",
    thumbnail: "https://i.ytimg.com/vi/Mw-6dy1thqg/hqdefault.jpg",
    publishedAt: "2024-01-01",
    url: "https://www.youtube.com/watch?v=Mw-6dy1thqg",
  },
  {
    id: "Mw-6dy1thqg",
    title: "Creative Finance Deal Breakdown — SubTo in Action",
    thumbnail: "https://i.ytimg.com/vi/Mw-6dy1thqg/hqdefault.jpg",
    publishedAt: "2024-01-01",
    url: "https://www.youtube.com/watch?v=Mw-6dy1thqg",
  },
  {
    id: "Mw-6dy1thqg",
    title: "Seller Finance Secrets — How to Structure Any Deal",
    thumbnail: "https://i.ytimg.com/vi/Mw-6dy1thqg/hqdefault.jpg",
    publishedAt: "2024-01-01",
    url: "https://www.youtube.com/watch?v=Mw-6dy1thqg",
  },
];

function formatCount(n: number): string {
  if (n >= 1_000_000) return (n / 1_000_000).toFixed(1).replace(/\.0$/, "") + "M";
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, "") + "K";
  return n.toString();
}

export async function getChannelStats(): Promise<ChannelStats> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const channelId = process.env.YOUTUBE_CHANNEL_ID ?? "UCLtgGrNT228cYkU6tYNI1Kw";
  const playlistId = process.env.YOUTUBE_PLAYLIST_ID ?? "PLsqWtY6le6VldvIJAwOmF5QiQoV3BA785";

  if (!apiKey) return { subscribers: "557", interviews: "23+" };

  try {
    const [channelRes, playlistRes] = await Promise.all([
      fetch(
        `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${channelId}&key=${apiKey}`,
        { next: { revalidate: 86400 } }
      ),
      fetch(
        `https://www.googleapis.com/youtube/v3/playlists?part=contentDetails&id=${playlistId}&key=${apiKey}`,
        { next: { revalidate: 86400 } }
      ),
    ]);

    const [channelData, playlistData] = await Promise.all([
      channelRes.json(),
      playlistRes.json(),
    ]);

    const subs = Number(channelData.items?.[0]?.statistics?.subscriberCount ?? 557);
    const interviews = Number(playlistData.items?.[0]?.contentDetails?.itemCount ?? 23);

    return {
      subscribers: formatCount(subs),
      interviews: interviews.toString(),
    };
  } catch {
    return { subscribers: "557", interviews: "23+" };
  }
}

export async function getLatestInterviews(count = 3): Promise<YTVideo[]> {
  const apiKey = process.env.YOUTUBE_API_KEY;
  const playlistId = process.env.YOUTUBE_PLAYLIST_ID ?? "PLsqWtY6le6VldvIJAwOmF5QiQoV3BA785";

  if (!apiKey) return FALLBACK_VIDEOS.slice(0, count);

  try {
    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=${count}&playlistId=${playlistId}&key=${apiKey}`,
      { next: { revalidate: 86400 } }
    );

    if (!res.ok) throw new Error(`YouTube API error: ${res.status}`);

    const data = await res.json();

    return (data.items ?? []).map((item: {
      snippet: {
        resourceId: { videoId: string };
        title: string;
        thumbnails: { high?: { url: string }; medium?: { url: string } };
        publishedAt: string;
      };
    }) => ({
      id: item.snippet.resourceId.videoId,
      title: item.snippet.title,
      thumbnail:
        item.snippet.thumbnails.high?.url ??
        item.snippet.thumbnails.medium?.url ??
        `https://i.ytimg.com/vi/${item.snippet.resourceId.videoId}/hqdefault.jpg`,
      publishedAt: item.snippet.publishedAt,
      url: `https://www.youtube.com/watch?v=${item.snippet.resourceId.videoId}`,
    }));
  } catch (err) {
    console.error("YouTube fetch failed, using fallback:", err);
    return FALLBACK_VIDEOS.slice(0, count);
  }
}
