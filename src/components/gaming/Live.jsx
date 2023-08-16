import { Card } from 'react-bootstrap'

function Live({title,imgSrc,game,streamer}) {
  return (
    <Card className='game-element inline-block' style={{minWidth:"365px",backgroundColor:"#18191a"}}>
      <a style={{cursor:"pointer"}} width="250px" height="200px">
        <Card.Img variant="top" width="250px" height="200px" src={imgSrc}/>
      </a>
      <Card.Body>
        <Card.Title style={{color:"white"}}>{title}</Card.Title>
        <Card.Text style={{color:"white"}}>{streamer} · {game}</Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Live