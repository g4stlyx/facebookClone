import { Button, Card } from 'react-bootstrap'

function Tournament({ imgSrc, date, title, playerCount }) {
  return (
    <Card className='game-element' style={{ minWidth: "290px", maxWidth: "290px", minHeight: "275px", backgroundColor: "#18191a" }}>
      <a style={{ cursor: "pointer" }} width="280px" height="120px">
        <Card.Img variant="top" width="280px" height="120px" src={imgSrc} />
      </a>
      <Card.Body style={{ width: "100%" }}>
        <Card.Text style={{ color: "red", fontSize: "14px" }}>{date}</Card.Text>
        <Card.Title className='tournament-title' style={{fontWeight:"15px" , color: "white", fontSize: "15px" }}>
          {title}
        </Card.Title>
        <Card.Text style={{ color: "white", fontSize: "14px" }}>{playerCount} Players Registered</Card.Text>
        <Button variant="secondary" style={{ width: "100%" }}>View Tournament</Button>
      </Card.Body>
    </Card>
  )
}

export default Tournament    