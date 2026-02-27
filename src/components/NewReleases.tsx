import { Alert, Card, Col, Row, Spinner } from "react-bootstrap"
import type { DeezerTrack } from "../types"

type Props = {
  loading: boolean
  error: string | null
  tracks: DeezerTrack[]
}

function PlaceholderCard() {
  return (
    <div className="am-release">
      <div className="am-cover-placeholder" aria-hidden="true">
        <i className="bi bi-music-note-beamed" />
      </div>
      <div className="am-release-title">Song Placeholder</div>
      <div className="am-release-sub">Artist Placeholder</div>
    </div>
  )
}

export default function NewReleases({ loading, error, tracks }: Props) {
  if (error)
    return (
      <Alert variant="danger" className="mt-2">
        {error}
      </Alert>
    )

  if (loading) {
    return (
      <>
        <div className="d-flex align-items-center gap-2 my-2 text-secondary">
          <Spinner size="sm" />
          Caricamento…
        </div>

        <Row xs={2} sm={3} md={4} xl={5} className="g-4 am-releases-row">
          {Array.from({ length: 10 }).map((_, i) => (
            <Col key={i}>
              <PlaceholderCard />
            </Col>
          ))}
        </Row>
      </>
    )
  }

  const list = tracks.slice(0, 10)

  return (
    <Row xs={2} sm={3} md={4} xl={5} className="g-4 am-releases-row">
      {list.map((t) => (
        <Col key={t.id}>
          <div className="am-release">
            <Card className="am-release-card">
              <Card.Img src={t.album.cover_medium} alt={t.album.title} />
            </Card>
            <div className="am-release-title">{t.title}</div>
            <div className="am-release-sub">{t.artist.name}</div>
          </div>
        </Col>
      ))}
    </Row>
  )
}
