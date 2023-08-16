import { Col, Container, Row } from "react-bootstrap"
import "../../styles/home.css"
import HomeLeft from "./HomeLeft"
import HomeMiddle from "./HomeMiddle"
import HomeRight from "./HomeRight"

function Home() {
  return (
    <Container fluid className="home-container">
        <Row>
            <Col xs={2} className="home-left">
              <HomeLeft/>
            </Col>
            <Col xs={8} className="home-middle">
              <HomeMiddle/>
            </Col>
            <Col xs={2} className="home-right">
              <HomeRight/>
            </Col>
        </Row>
    </Container>
  )
}

export default Home