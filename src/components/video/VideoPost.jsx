import { AiOutlineLike } from "react-icons/ai"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { GoComment } from "react-icons/go"
import { PiShareFatLight } from "react-icons/pi"

function VideoPost() {
  return (
    <div className='home-posts-container'>
    <div>

      <div className="d-flex">
        <button className="button1 create-post-button create-post-profile" style={{ width: "50px", marginTop: "5px" }}>
          <img width="36px" height="36px" style={{ borderRadius: "50%" }} src="https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-1/366156409_1324238485178760_4338614729461176337_n.jpg?stp=c9.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=gFGBRNT1o8oAX8xPuaT&_nc_ht=scontent.fist13-1.fna&oh=00_AfC_i-udA0-w4sEyIrV-LdW70Uv7Ld9SRT58Wr_1ZqUmfw&oe=64DC2FA9"/>
        </button>

        <div style={{ marginLeft: "8px", marginTop: "10px" }}>
          <span style={{ fontSize: "17px", cursor: "pointer" }}>g4stly the lord</span>
          <div style={{ color: "gray", fontSize: "12px" }}>{Math.floor(Math.random() * 20)} days ago </div>
        </div>

        <div style={{ marginRight: "0px", marginLeft: "auto", display: "flex" }}>
          <BiDotsHorizontalRounded size="25px" className="home-post-buttons" /> &nbsp;&nbsp;
        </div>

      </div>

      <div style={{ marginLeft: "10px", marginBottom: "5px" }}>
        <p>These names, descriptions, and videos could be randomized (or fetched from a db) too but I did not want the app to be too heavy/slow.</p>
        <p>Also infinite scroll could be implemented to video and friends pages too.</p>

        <iframe style={{margin:"10px 5px 0 5px"}} width="97%" height="315" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; full-screen"></iframe>
      
      </div>



    </div>

    <div className="d-flex">
      <div className="d-flex" style={{ margin: "10px 0 0 10px" }}>
        <img width="18px" height="18px" style={{ cursor: "pointer" }} src="https://cdn.freebiesupply.com/logos/large/2x/facebook-like-logo-png-transparent.png" />
        <img width="18px" height="18px" style={{ cursor: "pointer" }} src="https://www.freeiconspng.com/thumbs/facebook-love-png/facebook-love-png-3.png" /> &nbsp;&nbsp;
        <a style={{ color: "#B0B3B8", cursor: "pointer", marginTop: "-3px" }}>{Math.floor(Math.random() * 900)}</a>
      </div>

      <div className="d-flex" style={{ margin: "0 10px 0 auto" }}>
        <a style={{ color: "#B0B3B8", cursor: "pointer" }}>{Math.floor(Math.random() * 80)} comments</a>&nbsp;&nbsp;
        <a style={{ color: "#B0B3B8", cursor: "pointer" }}>{Math.floor(Math.random() * 25)} shares</a>
      </div>
    </div>


    <hr />

    <div className="d-flex" >
      <button className="button1 create-post-button create-post-sub-button">
        <AiOutlineLike size="24px" color="#B0B3B8" style={{ marginTop: "-5px" }} />
        &nbsp;&nbsp; <span style={{ marginLeft: "-8px" }}>Like</span>
      </button>

      <button className="button1 create-post-button create-post-sub-button">
        <GoComment size="24px" color="#B0B3B8" style={{ marginTop: "-2px" }} />
        &nbsp;&nbsp;<span style={{ marginLeft: "-4px" }}>Comment</span>
      </button>

      <button className="button1 create-post-button create-post-sub-button">
        <PiShareFatLight size="24px" color="#B0B3B8" style={{ marginTop: "-3px" }} />
        &nbsp;&nbsp;<span style={{ marginLeft: "-4px" }}>Share</span>
      </button>
    </div>
  </div>
  )
}

export default VideoPost