import { useNavigate } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import "../../styles/market.css"

import { IoMdSettings } from "react-icons/io"
import { AiOutlineTag, AiOutlineShoppingCart,AiOutlineQuestion,AiOutlineInbox } from "react-icons/ai"
import { BsShopWindow } from "react-icons/bs"
import { MdLocationOn,MdOutlineNotificationsNone } from "react-icons/md"
import MarketItem from "./MarketItem"

function Friends() {

  const navigate = useNavigate()

  return (
    <Container fluid className="market-container">
      <Row>

        <Col className="market-left">

          <div style={{ display: "flex", marginBottom: "10px", marginTop: "30px", marginRight: "10px" }}>
            <span style={{ fontSize: "25px", fontWeight: "bold" }}>MarketPlace</span>
            <div className="header-right-item" style={{ cursor: "pointer", marginLeft: "auto" }}>
              <IoMdSettings size="25px" color="white" />
            </div>
          </div>

          <button className="button1" onClick={() => { navigate("/friends") }}>
            <BsShopWindow style={{ width: "30px", height: "30px" }} color="#3698E9" />
            &nbsp; Browse All
          </button>
          <button className="button1">
            <MdOutlineNotificationsNone style={{ width: "30px", height: "30px" }} color="lightgray" />
            &nbsp; Notifications
          </button>
          <button className="button1">
            <AiOutlineInbox style={{ width: "30px", height: "30px" }} color="lightgray" />
            &nbsp; Inbox
          </button>
          <button className="button1">
            <AiOutlineShoppingCart style={{ width: "30px", height: "30px" }} color="lightgray" />
            &nbsp; Buying
          </button>
          <button className="button1">
            <AiOutlineTag style={{ width: "30px", height: "30px" }} color="lightgray" />
            &nbsp; Selling
          </button>
          <button className="button1" style={{overflowY:"hidden", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", backgroundColor: "#3C4D63", color: "#2B6FCA", height: "40px" }}>
            &nbsp; <span style={{ fontWeight: "bold", fontSize: "17px" }}>+ Create new listing</span>
          </button>

          <hr />
          <div>
            <span>Filters</span> <br />
            <button style={{ marginTop: "10px", marginLeft: "-15px", border: "none", color: "#3698E9", fontSize: "17px", width: "100%", backgroundColor: "#242526" }}>
              İstanbul, Türkiye · Within 65 kilometers
            </button>
          </div>
          <hr />

          <div>
            <span >Categories</span> <br />
            
            <div style={{ marginTop: "10px",marginLeft:"-10px" }}>
                {
                  Array.from({ length: 15 }).map((_, idx) => (
                    <button key={idx} className="button1">
                      <AiOutlineQuestion style={{ width: "30px", height: "30px" }} color="lightgray" />
                      &nbsp; Obviously A Category 
                    </button>
                  ))
                }
            </div>

          </div>

        </Col>

        <Col className="market-right">
          <Row>
            <div style={{ marginTop: "10px", marginBottom: "10px",marginRight:"0" }} >

              <div style={{ marginBottom: "10px", marginLeft: "10px" }}>
                <span style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>Today's picks</span>
                <button className="d-flex" style={{ border: "none", color: "#3698E9", float: "right", fontSize: "17px", width: "200px", textAlign: "center", backgroundColor: "#18191A", marginRight: "-20px", marginLeft: "auto" }}>
                  <MdLocationOn style={{ borderRadius: "15px", width: "25px", height: "25px" }} color="#3698E9" />
                  &nbsp; <span>İstanbul · 65km</span>
                </button>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginLeft: "10px" }}>
                {
                  Array.from({ length: 10 }).map((_, idx) => (
                    <MarketItem key={idx} name="An item we picked for you" price="1,000,000$" location="İstanbul,Türkiye" imgSrc="https://www.livehome3d.com/assets/img/articles/design-house/how-to-design-a-house.jpg" />
                  ))
                }
              </div>

            </div>
          </Row>
          <hr />
          <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
            <div style={{ marginBottom: "10px", marginLeft: "10px" }}>
              <span style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>Miscellaneous</span>
              <button className="button1" style={{ color: "#3698E9", float: "right", fontSize: "17px", width: "75px", padding: "5px", textAlign: "center", backgroundColor: "#18191A" }}>See All</button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginLeft: "10px" }}>
              {
                Array.from({ length: 6 }).map((_, idx) => (
                  <MarketItem key={idx} name="A miscellaneous? item" price="200,000$" location="Antalya,Türkiye" imgSrc="https://www.bogazturu.com/uploads/resim/481-1/bogaz-cocugu-tekne-iskele-kic-omuzluk.jpg" />
                ))
              }
            </div>
          </Row>
          <hr />
          <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
            <div style={{ marginBottom: "10px", marginLeft: "10px" }}>
              <span style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>Auto Parts</span>
              <button className="button1" style={{ color: "#3698E9", float: "right", fontSize: "17px", width: "75px", padding: "5px", textAlign: "center", backgroundColor: "#18191A" }}>See All</button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginLeft: "10px" }}>
              {
                Array.from({ length: 6 }).map((_, idx) => (
                  <MarketItem key={idx} name="You can buy auto parts too" price="150$" location="Ankara,Türkiye" imgSrc="https://cdni.autocarindia.com/Utils/ImageResizer.ashx?n=https://cdni.autocarindia.com/Features/Main-new_1-(1).jpg&w=700&q=90&c=1" />
                ))
              }
            </div>
          </Row>
          <hr />
          <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
            <div style={{ marginBottom: "10px", marginLeft: "10px" }}>
              <span style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>Cell Phones</span>
              <button className="button1" style={{ color: "#3698E9", float: "right", fontSize: "17px", width: "75px", padding: "5px", textAlign: "center", backgroundColor: "#18191A" }}>See All</button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginLeft: "10px" }}>
              {
                Array.from({ length: 6 }).map((_, idx) => (
                  <MarketItem key={idx} name="IPhone" price="1200$" location="İstanbul,Türkiye" imgSrc="https://cdn.vatanbilgisayar.com/Upload/PRODUCT/apple/thumb/135109-1-10_large.jpg" />
                ))
              }
            </div>
          </Row>
          <hr />
          <Row style={{ marginTop: "10px", marginBottom: "10px" }}>
            <div style={{ marginBottom: "10px", marginLeft: "10px" }}>
              <span style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>Electronics</span>
              <button className="button1" style={{ color: "#3698E9", float: "right", fontSize: "17px", width: "75px", padding: "5px", textAlign: "center", backgroundColor: "#18191A" }}>See All</button>
            </div>

            <div style={{ display: "flex", flexWrap: "wrap", gap: "5px", marginLeft: "10px" }}>
              {
                Array.from({ length: 6 }).map((_, idx) => (
                  <MarketItem key={idx} name="Gaming PC" price="2500$" location="İstanbul,Türkiye" imgSrc="https://w0.peakpx.com/wallpaper/245/74/HD-wallpaper-pc-gamer-pc-gamer.jpg" />
                ))
              }
            </div>
          </Row>

        </Col>

      </Row>

    </Container>
  )
}

export default Friends