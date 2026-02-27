import { Card } from "react-bootstrap"

export type Episode = {
  title: string
  sub?: string
  img: string
  explicit?: boolean
}

type Props = {
  episodes: Episode[]
}

export default function EpisodeRow({ episodes }: Props) {
  return (
    <div className="am-episodes-row am-no-scrollbar" aria-label="Nuovi episodi radio">
      {episodes.map((ep) => (
        <div key={ep.title} className="am-episodes-item">
          <Card className="am-episodes-card">
            <Card.Img className="am-episodes-img" src={ep.img} alt={ep.title} />
          </Card>

          <div className="am-episodes-meta">
            <div className="am-episodes-name">{ep.title}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
