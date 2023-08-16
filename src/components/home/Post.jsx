import { AiOutlineClose, AiOutlineLike } from "react-icons/ai"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { GoComment } from "react-icons/go"
import { PiShareFatLight } from "react-icons/pi"

function Post({ post }) {
  return (
    <div className='home-posts-container'>
      <div>

        <div className="d-flex">
          <button className="button1 create-post-button create-post-profile" style={{ width: "50px", marginTop: "5px" }}>
            <img width="36px" height="36px" style={{ borderRadius: "50%" }} src={`https://picsum.photos/36/36?random${post.id}`} />
          </button>

          <div style={{ marginLeft: "8px", marginTop: "10px" }}>
            <span style={{ fontSize: "17px", cursor: "pointer" }}>{post.name}</span>
            <div style={{ color: "gray", fontSize: "12px" }}>{Math.floor(Math.random() * 20)} days ago </div>
          </div>

          <div style={{ marginRight: "0px", marginLeft: "auto", display: "flex" }}>
            <BiDotsHorizontalRounded size="25px" className="home-post-buttons" /> &nbsp;&nbsp;
            <AiOutlineClose size="25px" className="home-post-buttons" />
          </div>

        </div>

        <div style={{ marginLeft: "10px", marginBottom: "5px" }}>
          {post.body}
        </div>

      </div>

      <div className="d-flex">
        <div className="d-flex" style={{ margin: "10px 0 0 10px" }}>
          <img width="18px" height="18px" style={{ cursor: "pointer" }} src="https://cdn.freebiesupply.com/logos/large/2x/facebook-like-logo-png-transparent.png" />
          <img width="18px" height="18px" style={{ cursor: "pointer" }} src="https://cdn.freebiesupply.com/logos/large/2x/facebook-haha-logo-png-transparent.png" /> &nbsp;&nbsp;
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

export default Post