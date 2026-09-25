import { MediaStory, SpotifyTrack } from "../types";

export async function fetchSpotifyTopTracks(token?: string): Promise<SpotifyTrack[]> {
  if (!token) {
    // Return mock data for the "Binge Coder" vibe if no token is provided
    return [
      {
        name: "Lofi Hip Hop Radio",
        artist: "Lofi Girl",
        albumArt: "https://picsum.photos/seed/lofi1/200/200",
        url: "#"
      },
      {
        name: "Hacking to the Gate",
        artist: "Kanako Itou",
        albumArt: "https://picsum.photos/seed/anime1/200/200",
        url: "#"
      },
      {
        name: "Cyberpunk 2077 OST",
        artist: "Marcin Przybyłowicz",
        albumArt: "https://picsum.photos/seed/cyber/200/200",
        url: "#"
      }
    ];
  }
  
  try {
    const res = await fetch("https://api.spotify.com/v1/me/top/tracks?limit=3&time_range=short_term", {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });
    
    if (!res.ok) throw new Error("Spotify fetch failed");
    
    const data = await res.json();
    return data.items.map((item: any) => ({
      name: item.name,
      artist: item.artists[0]?.name || "Unknown Artist",
      albumArt: item.album.images[0]?.url || "",
      url: item.external_urls.spotify
    }));
  } catch (error) {
    console.error(error);
    return [];
  }
}

export async function fetchMediaStory(spotifyToken?: string): Promise<MediaStory> {
  const topSpotifyTracks = await fetchSpotifyTopTracks(spotifyToken);
  
  return {
    topSpotifyTracks,
    topAnime: ["Frieren: Beyond Journey's End", "Steins;Gate", "Solo Leveling"],
    topMovies: ["The Matrix", "Interstellar", "Dune: Part Two"]
  };
}
