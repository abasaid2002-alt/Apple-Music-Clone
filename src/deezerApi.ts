import type { DeezerSearchResponse, DeezerTrack } from "./types"

const BASE_URL = "https://striveschool-api.herokuapp.com/api/deezer"

export async function searchDeezerTracks(query: string, signal?: AbortSignal): Promise<DeezerTrack[]> {
  const url = `${BASE_URL}/search?q=${encodeURIComponent(query)}`
  const res = await fetch(url, { signal })
  if (!res.ok) throw new Error(`Errore Deezer: ${res.status}`)
  const json = (await res.json()) as DeezerSearchResponse
  return json.data ?? []
}
