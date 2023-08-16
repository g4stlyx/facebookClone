import { useNavigate } from "react-router-dom"
import { Col, Container, Row } from "react-bootstrap"
import "../../styles/video.css"

import { IoMdSettings } from "react-icons/io"
import { BsBookmark,BsRocketTakeoff } from "react-icons/bs"
import { TfiVideoClapper } from "react-icons/tfi"
import { GoVideo } from "react-icons/go"
import {MdVideoCameraBack,MdVideoCameraFront} from "react-icons/md"
import VideoPost from "./VideoPost"

function Video() {

  const navigate = useNavigate()

  return (
    <Container fluid className="video-container">
      <Row>

        <Col className="video-left">

          <div style={{ display: "flex", marginBottom: "10px", marginTop: "30px", marginRight: "10px" }}>
            <span style={{ fontSize: "25px", fontWeight: "bold" }}>Video</span>
            <div className="header-right-item" style={{ cursor: "pointer", marginLeft: "auto" }}>
              <IoMdSettings size="25px" color="white" />
            </div>
          </div>

          <button className="button1" onClick={() => { navigate("/video") }}>
            <GoVideo style={{ borderRadius: "30%", width: "30px", height: "30px" }} color="#3698E9" />
            &nbsp; Home
          </button>
          <button className="button1">
            <MdVideoCameraBack style={{ width: "30px", height: "30px"}} color="lightgray" />
            &nbsp; Live
          </button>
          <button className="button1">
            <MdVideoCameraFront style={{ borderRadius: "5px", width: "30px", height: "30px" }} color="lightgray" />
            &nbsp; Reels
          </button>
          <button className="button1">
            <TfiVideoClapper style={{ width: "30px", height: "30px" }} color="lightgray" />
            &nbsp; Shows
          </button>
          <button className="button1">
            <BsRocketTakeoff style={{  width: "30px", height: "30px"}} color="lightgray" />
            &nbsp; Explore
          </button>
          <button className="button1">
            <BsBookmark style={{ width: "30px", height: "30px" }} color="lightgray" />
            &nbsp; Saved Videos
          </button>
        </Col>

        <Col className="video-right-container">  
          <div className="video-right" style={{ marginTop: "10px", marginBottom: "10px" }} >
                
              {
                  Array.from({ length: 10 }).map((_, idx) => (
                    <VideoPost key={idx} />
                  ))
              }

          </div>
        </Col>


      </Row>
    </Container>
  )
}

export default Video