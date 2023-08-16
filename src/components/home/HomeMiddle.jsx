import { AiOutlinePlus, AiOutlineClose, AiOutlineLike,AiOutlineLeft,AiOutlineRight } from "react-icons/ai"
import { BiDotsHorizontalRounded } from "react-icons/bi"
import { GoComment } from "react-icons/go"
import {PiShareFatLight} from "react-icons/pi"
import PeopleYouMayKnow from "./PeopleYouMayKnow"
import Posts from "./Posts"

function HomeMiddle() {

  const handleScrollLeft = ()=>{
      document.querySelector('.people-container').scrollLeft -= 150;
  };
  const handleScrollRight = ()=>{
      document.querySelector('.people-container').scrollLeft += 150;
  }



  return (
    <div className='home-middle-main'>

      <div className='create-story'>
        <button className="button1 create-story-button">
          <div className="header-right-item" style={{ backgroundColor: "#263951" }}>
            <AiOutlinePlus size="25px" color="#4394FF" />
          </div>
          <div>
            <div style={{ fontSize: "17px" }}>&nbsp;&nbsp;&nbsp; Create Story</div>
            <div style={{ color: "gray" }}>&nbsp;&nbsp;&nbsp; Share a photo or write something.</div>
          </div>
        </button>
      </div>

      <div className='home-posts-container'>
        <div className="d-flex">
          <button className="button1 create-post-button create-post-profile" style={{ width: "50px", marginTop: "10px" }}>
            <img width="36px" height="36px" style={{ borderRadius: "50%" }} src="https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-1/366156409_1324238485178760_4338614729461176337_n.jpg?stp=c9.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=hIO0cJW6EvgAX9IfqOk&_nc_ht=scontent.fist13-1.fna&oh=00_AfArb6vcBr98JMXqS780KvfwUVIY4yVQWDUWGeFkTzHaCg&oe=64D83B29" />
          </button>
          <button className="button1 create-post-button create-post-desc">What is on your mind, Sefa?</button>
        </div>

        <hr />

        <div className="d-flex" >
          <button className="button1 create-post-button create-post-sub-button">
            <img width="24px" height="24px" src="https://static.xx.fbcdn.net/rsrc.php/v3/yr/r/c0dWho49-X3.png" />
            &nbsp;&nbsp;Live Video
          </button>

          <button className="button1 create-post-button create-post-sub-button">
            <img width="24px" height="24px" src="https://static.xx.fbcdn.net/rsrc.php/v3/y7/r/Ivw7nhRtXyo.png" />
            &nbsp;&nbsp;Photo/Video
          </button>

          <button className="button1 create-post-button create-post-sub-button">
            <img width="24px" height="24px" src="https://static.xx.fbcdn.net/rsrc.php/v3/yd/r/Y4mYLVOhTwq.png" />
            &nbsp;&nbsp;Feeling/activity
          </button>
        </div>
      </div>

      <div className='home-posts-container'> {/* one example post here */}
        <div>

          <div className="d-flex">
            <button className="button1 create-post-button create-post-profile" style={{ width: "50px", marginTop: "5px" }}>
              <img width="36px" height="36px" style={{ borderRadius: "50%" }} src="https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-1/317449894_687897632699587_8916400706750714424_n.jpg?stp=cp0_dst-jpg_p40x40&_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=c6021c&_nc_ohc=cQ4VK2qtq4IAX_yTBpn&_nc_ht=scontent.fist13-1.fna&oh=00_AfDb9i0hkOzSbbV3u__f-RWEWh7obfdf46zcL3sN_P7_FQ&oe=64D9DE06" />
            </button>

            <div style={{ marginLeft: "8px", marginTop: "10px" }}>
              <span style={{ fontSize: "17px", cursor:"pointer" }}>Metallica</span>
              <div style={{ color: "gray", fontSize: "12px" }}>4 days ago </div>
            </div>

            <div style={{ marginRight: "0px", marginLeft: "auto", display: "flex" }}>
              <BiDotsHorizontalRounded size="25px" className="home-post-buttons" /> &nbsp;&nbsp;
              <AiOutlineClose size="25px" className="home-post-buttons" />
            </div>

          </div>

          <div style={{ marginLeft: "10px" }}>
            <span>Adrenaline starts to flow</span> <br />
            <span>You are thrashing all around</span><br />
            <span>Acting like a maniac</span><br />
            <span>Whiplash!</span><br />
          </div>

        </div>

        <div className="d-flex">
          <div className="d-flex" style={{ margin: "10px 0 0 10px" }}>
            <img width="18px" height="18px" style={{ cursor: "pointer" }} src="https://cdn.freebiesupply.com/logos/large/2x/facebook-like-logo-png-transparent.png" />
            <img width="18px" height="18px" style={{ cursor: "pointer" }} src="https://www.freeiconspng.com/thumbs/facebook-love-png/facebook-love-png-3.png" /> &nbsp;&nbsp;
            <a style={{ color: "#B0B3B8", cursor: "pointer", marginTop: "-3px" }}>991</a>
        </div>

          <div className="d-flex" style={{ margin: "0 10px 0 auto" }}>
            <a style={{ color: "#B0B3B8", cursor: "pointer" }}>77 comments</a>&nbsp;&nbsp;
            <a style={{ color: "#B0B3B8", cursor: "pointer" }}>2 shares</a>
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

      <div className='home-posts-container'>
        <div className="d-flex" >
          <div style={{ color: "#B0B3B8", marginTop: "10px",marginLeft:"10px",marginBottom:"10px" }}>People You May Know</div>
          <div style={{ marginRight: "0px", marginLeft: "auto", display: "flex" }}>
            <BiDotsHorizontalRounded size="25px" className="home-post-buttons" /> &nbsp;&nbsp;
          </div>
        </div>

        

        <div className="people-wrapper">
          
          <div>
              <button onClick={handleScrollLeft} className="left-scroller button1 create-post-button create-post-sub-button">
                <AiOutlineLeft size="15px" color="#B0B3B8" />
              </button>
              <button onClick={handleScrollRight} className="right-scroller button1 create-post-button create-post-sub-button">
                <AiOutlineRight size="15px" color="#B0B3B8" />
              </button>
          </div>

          <div className="people-container">
              <PeopleYouMayKnow name="James Hetfield" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=CAaKnaNC2nAAX_IqKER&_nc_ht=scontent.fist13-1.fna&oh=00_AfDXlkoDQG1RA0FC4zV__ce98g0M7xja96xymkp-x5fNBQ&oe=64FC16F8" />
              <PeopleYouMayKnow name="Corey Taylor" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=CAaKnaNC2nAAX_IqKER&_nc_ht=scontent.fist13-1.fna&oh=00_AfDXlkoDQG1RA0FC4zV__ce98g0M7xja96xymkp-x5fNBQ&oe=64FC16F8" />
              <PeopleYouMayKnow name="M. Shadows" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=CAaKnaNC2nAAX_IqKER&_nc_ht=scontent.fist13-1.fna&oh=00_AfDXlkoDQG1RA0FC4zV__ce98g0M7xja96xymkp-x5fNBQ&oe=64FC16F8" />
              <PeopleYouMayKnow name="Cliff Burton" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=CAaKnaNC2nAAX_IqKER&_nc_ht=scontent.fist13-1.fna&oh=00_AfDXlkoDQG1RA0FC4zV__ce98g0M7xja96xymkp-x5fNBQ&oe=64FC16F8" />
              <PeopleYouMayKnow name="Synyster Gates" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=CAaKnaNC2nAAX_IqKER&_nc_ht=scontent.fist13-1.fna&oh=00_AfDXlkoDQG1RA0FC4zV__ce98g0M7xja96xymkp-x5fNBQ&oe=64FC16F8" />
              <PeopleYouMayKnow name="Jimmy Sullivan" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=CAaKnaNC2nAAX_IqKER&_nc_ht=scontent.fist13-1.fna&oh=00_AfDXlkoDQG1RA0FC4zV__ce98g0M7xja96xymkp-x5fNBQ&oe=64FC16F8" />
              <PeopleYouMayKnow name="Matthew Tuck" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=CAaKnaNC2nAAX_IqKER&_nc_ht=scontent.fist13-1.fna&oh=00_AfDXlkoDQG1RA0FC4zV__ce98g0M7xja96xymkp-x5fNBQ&oe=64FC16F8" />
              <PeopleYouMayKnow name="Joey Jordison" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=CAaKnaNC2nAAX_IqKER&_nc_ht=scontent.fist13-1.fna&oh=00_AfDXlkoDQG1RA0FC4zV__ce98g0M7xja96xymkp-x5fNBQ&oe=64FC16F8" />
              <PeopleYouMayKnow name="Mick Thomson" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=CAaKnaNC2nAAX_IqKER&_nc_ht=scontent.fist13-1.fna&oh=00_AfDXlkoDQG1RA0FC4zV__ce98g0M7xja96xymkp-x5fNBQ&oe=64FC16F8" />  
              <PeopleYouMayKnow name="Jason Newsted" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=CAaKnaNC2nAAX_IqKER&_nc_ht=scontent.fist13-1.fna&oh=00_AfDXlkoDQG1RA0FC4zV__ce98g0M7xja96xymkp-x5fNBQ&oe=64FC16F8" />  
              <PeopleYouMayKnow name="Bruce Dickinson" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=CAaKnaNC2nAAX_IqKER&_nc_ht=scontent.fist13-1.fna&oh=00_AfDXlkoDQG1RA0FC4zV__ce98g0M7xja96xymkp-x5fNBQ&oe=64FC16F8" />  
              <PeopleYouMayKnow name="Kirk Hammett" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t1.30497-1/143086968_2856368904622192_1959732218791162458_n.png?_nc_cat=1&cb=99be929b-59f725be&ccb=1-7&_nc_sid=2b6aad&_nc_ohc=CAaKnaNC2nAAX_IqKER&_nc_ht=scontent.fist13-1.fna&oh=00_AfDXlkoDQG1RA0FC4zV__ce98g0M7xja96xymkp-x5fNBQ&oe=64FC16F8" />  
          </div>

          <button className="button1 create-post-button create-post-sub-button"
          style={{marginTop:"-10px"}}>
            <span style={{color:"#3C71E6"}}>See all</span>
          </button>

        </div>
      </div>


      <div className='posts'>
          <Posts />
      </div>
    </div>
  )
}

export default HomeMiddle