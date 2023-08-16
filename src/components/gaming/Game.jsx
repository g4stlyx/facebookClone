import { Button, Card } from "react-bootstrap"

function GamingItem({imgSrc,follower,game}) {
  return (
    <Card className='game-element inline-block' style={{minWidth:"180px",minHeight:"410px",backgroundColor:"#242526"}}>
      <a style={{cursor:"pointer"}} width="180px" height="275px">
        <Card.Img variant="top" width="180px" height="275px" src={imgSrc}/>
      </a>
      <Card.Body>
        <Card.Title style={{fontSize:"15px",color:"white",marginBottom:"15px"}}>{game}</Card.Title>
        <Card.Text style={{color:"gray",fontSize:"13px",marginBottom:"6px"}}>{follower} Followers </Card.Text>
        <Button variant="secondary" style={{width:"100%"}}> Follow</Button>
      </Card.Body>
    </Card>
  )
}

export default GamingItem