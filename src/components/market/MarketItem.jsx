import { Card } from 'react-bootstrap'

function MarketItem({ name,price,location, imgSrc }) {
    return (
        <a href="#" style={{marginBottom:"10px"}}>
            <Card className="inline-block" style={{ backgroundColor: "#18191A", color: "white", width: "200px", height: "320px" }}>
                <Card.Img variant="top" src={imgSrc} width="200px" height="200px" />
                <Card.Body>
                    <Card.Title style={{ fontSize: "18px", marginTop: "-8px", marginLeft: "-7px", fontWeight:"20px" }}>{price}</Card.Title>
                    <Card.Text style={{ fontSize: "16px", marginTop: "-3px", marginLeft: "-7px", fontWeight:"10px" }}>{name}</Card.Text>
                    <Card.Text style={{ fontSize:"12px", color: "gray", marginTop: "-10px", marginLeft: "-7px" }}> {location} </Card.Text>  
                </Card.Body>
            </Card>
        </a>
    )
}

export default MarketItem