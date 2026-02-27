import { Form, Nav } from "react-bootstrap"

type Active = "Home" | "Novità" | "Radio"
type Props = { active?: Active }

const NAV: { key: Active; label: string; icon: string }[] = [
  { key: "Home", label: "Home", icon: "house-door" },
  { key: "Novità", label: "Novità", icon: "grid" },
  { key: "Radio", label: "Radio", icon: "broadcast" },
]

export default function Sidebar({ active = "Novità" }: Props) {
  return (
    <aside className="am-sidebar" aria-label="Menu laterale">
      <div className="am-sidebar-brand" aria-label="Apple Music">
        <img className="am-sidebar-logo" src="/assets/logos/music.svg" alt="Music" />
      </div>

      <div className="am-search-wrap" role="search">
        <i className="bi bi-search am-search-ico" aria-hidden="true" />
        <Form.Control className="am-search-input" placeholder="Cerca" aria-label="Cerca" />
      </div>

      <Nav className="flex-column am-nav" aria-label="Navigazione">
        {NAV.map((item) => (
          <Nav.Link key={item.key} href="#" className={active === item.key ? "active" : undefined}>
            <i className={`bi bi-${item.icon} am-nav-ico`} aria-hidden="true" />
            <span>{item.label}</span>
          </Nav.Link>
        ))}
      </Nav>
    </aside>
  )
}
