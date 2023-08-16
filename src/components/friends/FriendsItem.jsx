import { Button, Card } from 'react-bootstrap'

function FriendsItem({name,delRm,imgSrc}) {
  return (
    <Card className="inline-block" style={{ backgroundColor: "#242526", color: "white", width: "160px", height: "320px" }}>
    <Card.Img variant="top" src={imgSrc} width="160px" height="160px" />
    <Card.Body>
      <Card.Title style={{ fontSize: "18px", marginTop: "-8px", marginLeft: "-7px" }}>{name}</Card.Title>
      <Card.Text style={{ color: "gray", marginTop: "-5px", marginLeft: "-7px" }}>
        {Math.floor(Math.random() * 10)} mutual friends
      </Card.Text>
      <Button variant="primary" style={{ marginTop: "-10px",marginBottom:"5px",width:"100%" }}>Add Friend</Button>
      <Button variant="secondary" style={{width:"100%"}}>{delRm}</Button>
    </Card.Body>
  </Card>
  )
}

export default FriendsItem