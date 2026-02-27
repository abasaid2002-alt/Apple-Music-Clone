export type DeezerArtist = {
  id: number
  name: string
}

export type DeezerAlbum = {
  id: number
  title: string
  cover: string
  cover_small?: string
  cover_medium?: string
  cover_big?: string
  cover_xl?: string
}

export type DeezerTrack = {
  id: number
  title: string
  preview: string
  artist: DeezerArtist
  album: DeezerAlbum
  explicit_lyrics?: boolean
}

export type DeezerSearchResponse = {
  data: DeezerTrack[]
  total?: number
  next?: string
}
