import { Col, Row } from "react-bootstrap"

type Props = { items: string[] }

export default function ExploreMore({ items }: Props) {
  return (
    <Row xs={1} md={3} className="g-3">
      {items.map((it) => (
        <Col key={it}>
          <button className="am-explore-item" type="button">
            <span>{it}</span>
            <span className="am-explore-arrow">›</span>
          </button>
        </Col>
      ))}
    </Row>
  )
}
