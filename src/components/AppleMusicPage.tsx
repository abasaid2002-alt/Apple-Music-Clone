import { useEffect, useMemo, useState } from "react"
import { Container, Offcanvas } from "react-bootstrap"
import type { DeezerTrack } from "../types"
import { searchDeezerTracks } from "../deezerApi"
import Sidebar from "./Sidebar"
import Topbar from "./Topbar"
import HeroStations from "./HeroStations"
import EpisodeRow, { type Episode } from "./EpisodeRow"
import NewReleases from "./NewReleases"
import ExploreMore from "./ExploreMore"
import Footer from "./Footer"
import PlayerBar from "./PlayerBar"

type LoadState = {
  loading: boolean
  error: string | null
  tracks: DeezerTrack[]
}

export default function AppleMusicPage() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [state, setState] = useState<LoadState>({ loading: true, error: null, tracks: [] })

  const episodes = useMemo<Episode[]>(
    () => [
      { title: "Prólogo con Abuelo", img: "/assets/images/2a.png" },
      { title: "The Wanderer", img: "/assets/images/2b.png" },
      { title: "Michael Bublé & Carly Pearce", img: "/assets/images/2c.png" },
      { title: "Stephan Moccio: The Zane Lowe", img: "/assets/images/2d.png" },
      { title: "Chart Spotlight: Julia Michaels", img: "/assets/images/2e.png" },
    ],
    [],
  )

  const exploreMore = useMemo(
    () => [
      "Esplora per genere",
      "Worldwide",
      "Video musicali",
      "Decenni",
      "Classifiche",
      "Nuovi artisti",
      "Attività e stati d’animo",
      "Audio spaziale",
      "Hit del passato",
    ],
    [],
  )

  useEffect(() => {
    const controller = new AbortController()

    async function run() {
      try {
        setState({ loading: true, error: null, tracks: [] })
        const data = await searchDeezerTracks("travis scott", controller.signal)
        setState({ loading: false, error: null, tracks: data.slice(0, 10) })
      } catch (e) {
        if (controller.signal.aborted) return
        setState({
          loading: false,
          error: e instanceof Error ? e.message : "Errore sconosciuto",
          tracks: [],
        })
      }
    }

    run()
    return () => controller.abort()
  }, [])

  return (
    <>
      <div className="am-shell">
        <div className="d-none d-lg-block">
          <Sidebar active="Novità" />
        </div>

        <Offcanvas show={menuOpen} onHide={() => setMenuOpen(false)} placement="start" className="am-offcanvas d-lg-none">
          <Offcanvas.Body className="p-0">
            <Sidebar active="Novità" />
          </Offcanvas.Body>
        </Offcanvas>

        <main className="am-main">
          <Topbar onMenuClick={() => setMenuOpen(true)} />

          <Container fluid className="am-content">
            <h1 className="am-h1">Novità</h1>

            <HeroStations />

            <section className="am-episodes">
              <div className="am-episodes-head">
                <h2 className="am-episodes-title">
                  Nuovi episodi radio <span className="am-episodes-chevron">›</span>
                </h2>
              </div>

              <EpisodeRow episodes={episodes} />
            </section>

            <div className="am-section-head">
              <h2 className="am-section-title">Nuove uscite</h2>
              <span className="am-section-link">›</span>
            </div>
            <NewReleases loading={state.loading} error={state.error} tracks={state.tracks} />

            <div className="am-section-head">
              <h2 className="am-section-title">Altro da esplorare</h2>
            </div>
            <ExploreMore items={exploreMore} />

            <Footer />
          </Container>
        </main>
      </div>

      <PlayerBar />
    </>
  )
}
