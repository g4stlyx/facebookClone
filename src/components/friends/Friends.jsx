import { useNavigate } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import "../../styles/friends.css"

import { IoMdSettings } from "react-icons/io"
import { AiOutlineUserSwitch, AiFillGift } from "react-icons/ai"
import { BiSolidUserPlus, BiSolidUserDetail } from "react-icons/bi"
import { ImUsers } from "react-icons/im"
import FriendsItem from "./FriendsItem"

function Friends() {

  const navigate = useNavigate()

  return (
    <Container fluid className="friends-container">
      <Row>

        <Col className="friends-left">

          <div style={{ display: "flex", marginBottom: "10px", marginTop: "30px", marginRight: "10px" }}>
            <span style={{ fontSize: "25px", fontWeight: "bold" }}>Friends</span>
            <div className="header-right-item" style={{ cursor: "pointer", marginLeft: "auto" }}>
              <IoMdSettings size="25px" color="white" />
            </div>
          </div>

          <button className="button1" onClick={() => { navigate("/friends") }}>
            <ImUsers style={{ borderRadius: "50%", width: "36px", height: "36px" }} color="#3698E9" />
            &nbsp; Home
          </button>
          <button className="button1">
            <AiOutlineUserSwitch style={{ borderRadius: "50%", width: "36px", height: "36px" }} color="#3698E9" />
            &nbsp; Friend Requests
          </button>
          <button className="button1">
            <BiSolidUserPlus style={{ borderRadius: "50%", width: "36px", height: "36px" }} color="#3698E9" />
            &nbsp; Suggestions
          </button>
          <button className="button1">
            <BiSolidUserDetail style={{ borderRadius: "50%", width: "36px", height: "36px" }} color="#3698E9" />
            &nbsp; All friends
          </button>
          <button className="button1">
            <AiFillGift style={{ borderRadius: "15px", width: "36px", height: "36px" }} color="#3698E9" />
            &nbsp; Birthdays
          </button>
          <button className="button1">
            <BiSolidUserDetail style={{ borderRadius: "15px", width: "36px", height: "36px" }} color="#3698E9" />
            &nbsp; Custom Lists
          </button>
        </Col>

        <Col className="friends-right">
          <Row>
            <div style={{ marginTop: "10px", marginBottom: "10px" }} >

              <div style={{ marginBottom: "10px",marginLeft:"10px"  }}>
                <span style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>Friend Requests</span>
                <button className="button1" style={{ color: "#3698E9", float: "right", fontSize: "17px", width: "75px", padding: "5px", textAlign: "center", backgroundColor:"#18191A" }}>See All</button>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px",marginLeft:"10px"  }}>
                <FriendsItem name="random" delRm="Delete" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p160x160&_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=Pg1r5vji1ToAX9xxv0f&_nc_ht=scontent.fist13-1.fna&oh=00_AfCEFO4d_zBGL8Rz2qHIrDFYeO-qpW6rjs8g4hys3wnuOg&oe=64FE1138" />
                <FriendsItem name="random" delRm="Delete" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p160x160&_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=Pg1r5vji1ToAX9xxv0f&_nc_ht=scontent.fist13-1.fna&oh=00_AfCEFO4d_zBGL8Rz2qHIrDFYeO-qpW6rjs8g4hys3wnuOg&oe=64FE1138" />
                <FriendsItem name="random" delRm="Delete" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p160x160&_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=Pg1r5vji1ToAX9xxv0f&_nc_ht=scontent.fist13-1.fna&oh=00_AfCEFO4d_zBGL8Rz2qHIrDFYeO-qpW6rjs8g4hys3wnuOg&oe=64FE1138" />
              </div>

            </div>
          </Row>
          <hr />
          <Row>
            <div style={{ marginTop: "10px", marginBottom: "10px" }} >

              <div style={{ marginBottom: "10px",marginLeft:"10px"  }}>
                <span style={{ fontSize: "20px", fontWeight: "bold", marginTop: "5px" }}>People You May Know</span>
                <button className="button1" style={{ color: "#3698E9", float: "right", fontSize: "17px", width: "75px", padding: "5px", textAlign: "center", backgroundColor:"#18191A" }}>See All</button>
              </div>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "5px",marginLeft:"10px" }}>

                {
                  Array.from({ length: 50 }).map((_, idx) => (
                    <FriendsItem key={idx} name="random" delRm="Remove" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?stp=dst-png_p160x160&_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=Pg1r5vji1ToAX9xxv0f&_nc_ht=scontent.fist13-1.fna&oh=00_AfCEFO4d_zBGL8Rz2qHIrDFYeO-qpW6rjs8g4hys3wnuOg&oe=64FE1138" />
                  ))
                }

              </div>

            </div>
          </Row>

        </Col>

      </Row>

    </Container>
  )
}

export default Friends