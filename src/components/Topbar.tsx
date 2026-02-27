import { Button, Container, Form, Navbar } from "react-bootstrap"

type Props = {
  onMenuClick?: () => void
}

export default function Topbar({ onMenuClick }: Props) {
  return (
    <Navbar className="am-topbar" variant="dark">
      <Container fluid className="am-topbar-inner">
        <button className="am-topbar-burger d-lg-none" aria-label="Apri menu" onClick={onMenuClick} type="button">
          <i className="bi bi-list" />
        </button>

        <div className="am-controls d-none d-lg-flex">
          <button className="am-ctl-btn" aria-label="Shuffle" type="button">
            <i className="bi bi-shuffle" />
          </button>
          <button className="am-ctl-btn" aria-label="Previous" type="button">
            <i className="bi bi-skip-backward-fill" />
          </button>
          <button className="am-ctl-btn am-ctl-play" aria-label="Play" type="button">
            <i className="bi bi-play-fill" />
          </button>
          <button className="am-ctl-btn" aria-label="Next" type="button">
            <i className="bi bi-skip-forward-fill" />
          </button>
          <button className="am-ctl-btn" aria-label="Repeat" type="button">
            <i className="bi bi-arrow-repeat" />
          </button>
        </div>

        <div className="am-topbar-center d-lg-none">
          <img className="am-brand" src="/assets/logos/music.svg" alt="Music" />
        </div>

        <div className="am-now d-none d-lg-flex" aria-hidden="true">
          <img src="/assets/logos/apple.svg" alt="" />
        </div>

        <div className="am-topbar-right">
          <div className="am-vol-wrap d-none d-lg-flex">
            <i className="bi bi-volume-up" aria-hidden="true" />
            <Form.Range className="am-volume" aria-label="Volume" />
          </div>

          <Button size="sm" className="am-login d-none d-lg-inline-flex">
            Accedi
          </Button>

          <button className="am-login-link d-lg-none" type="button">
            Accedi
          </button>
        </div>
      </Container>
    </Navbar>
  )
}
