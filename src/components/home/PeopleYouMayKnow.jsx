import { Button, Card } from "react-bootstrap"



function PeopleYouMayKnow({name,imgSrc}) {
  return (
    <Card className="inline-block" style={{ backgroundColor:"#242526",color:"white",width:"160px",height:"270px" }}>
    <Card.Img variant="top" src={imgSrc} width="160px" height="160px" />
    <Card.Body>
      <Card.Title style={{fontSize:"18px",marginTop:"-5px",marginLeft:"-5px"}}>{name}</Card.Title>
      <Card.Text style={{color:"gray",marginTop:"-5px",marginLeft:"-5px"}}>
            {Math.floor(Math.random() * 44)} mutual friends
      </Card.Text>
      <Button variant="outline-primary" style={{marginTop:"-10px"}}>Add Friend</Button>
    </Card.Body>
  </Card>
  )
}

export default PeopleYouMayKnow