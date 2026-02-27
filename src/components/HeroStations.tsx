import { Card, Col, Row } from "react-bootstrap"

type Hero = {
  kicker: string
  title: string
  img: string
}

const heroes: Hero[] = [
  {
    kicker: "NUOVA STAZIONE RADIO",
    title: "Rilassati, al resto pensiamo noi.\nAscolta Apple Music Chill",
    img: "/assets/images/1a.png",
  },
  {
    kicker: "NUOVA STAZIONE RADIO",
    title: "Ecco la nuova casa della musica latina",
    img: "/assets/images/1b.png",
  },
]

export default function HeroStations() {
  return (
    <section className="am-novita-hero">
      <Row className="am-hero-row g-4 flex-nowrap flex-lg-wrap overflow-auto overflow-lg-visible am-no-scrollbar">
        {heroes.map((h) => (
          <Col key={h.img} xs={10} sm={8} lg={6} className="am-hero-col">
            <div className="am-hero-text">
              <div className="am-kicker">{h.kicker}</div>
              <div className="am-hero-title">{h.title}</div>
            </div>

            <Card className="am-hero-card">
              <Card.Img className="am-hero-img" src={h.img} alt={h.title.replaceAll("\n", " ")} />
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  )
}
