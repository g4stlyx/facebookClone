import { Button, Col, Container, Dropdown, Row } from "react-bootstrap"
import "../../styles/gaming.css"
import { IoMdSettings, IoMdNotificationsOutline } from "react-icons/io"
import { GiClockwork, GiTrophyCup } from "react-icons/gi"
import { AiOutlinePlaySquare, AiOutlineLeft, AiOutlineRight } from "react-icons/ai"
import { PiStack } from "react-icons/pi"
import { FaSearchengin, FaTicketAlt, FaPodcast } from "react-icons/fa"
import { BsFillBookmarkHeartFill } from "react-icons/bs"
import { MdStadium } from "react-icons/md"
import Game from "./Game"
import Live from "./Live"
import Tournament from "./Tournament"

function Video() {

  const handleScrollLeft = (id) => {
    document.querySelector(`.games-container${id}`).scrollLeft -= 150;
  };
  const handleScrollRight = (id) => {
    document.querySelector(`.games-container${id}`).scrollLeft += 150;
  }


  return (
    <Container fluid className="gaming-container">
      <Row>

        <Col className="gaming-left">

          <div style={{ display: "flex", marginBottom: "10px", marginTop: "30px", marginRight: "10px" }}>
            <span style={{ fontSize: "25px", fontWeight: "bold" }}>Gaming</span>
            <div className="header-right-item" style={{ cursor: "pointer", marginLeft: "auto" }}>
              <IoMdSettings size="25px" color="white" />
            </div>
          </div>

          <Dropdown data-bs-theme="dark" style={{ marginBottom: "10px", border: "none", height: "60px" }}>
            <Dropdown.Toggle id="dropdown-button-dark-example1" style={{ height: "60px", textAlign: "left",backgroundColor:"#3A3B3C", border: "none" }} className="button1">
              <AiOutlinePlaySquare style={{ borderRadius: "50%", width: "33px", height: "33px" }} color="#3698E9" />
              &nbsp; Video
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "100%" }}>
              <Dropdown.Item href="#">
                <button className="button1">
                  <PiStack style={{ width: "33px", height: "33px" }} color="lightgray" />
                  &nbsp; Following
                </button>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <button className="button1">
                  <FaSearchengin style={{ width: "33px", height: "33px" }} color="lightgray" />
                  &nbsp; Browse
                </button>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <button className="button1">
                  <GiClockwork style={{ width: "33px", height: "33px" }} color="lightgray" />
                  &nbsp; Recently Watched
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown data-bs-theme="dark" style={{ marginBottom: "10px", height: "60px" }}>
            <Dropdown.Toggle id="dropdown-button-dark-example1" style={{ height: "60px", textAlign: "left", border: "none" }} className="button1" variant="secondary">
              <GiTrophyCup style={{ borderRadius: "30%", width: "33px", height: "33px" }} color="#3698E9" />
              &nbsp; Tournaments
            </Dropdown.Toggle>

            <Dropdown.Menu style={{ width: "100%" }}>
              <Dropdown.Item href="#">
                <button className="button1">
                  <MdStadium style={{ width: "33px", height: "33px" }} color="lightgray" />
                  &nbsp; Hosted
                </button>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <button className="button1">
                  <FaTicketAlt style={{ width: "33px", height: "33px" }} color="lightgray" />
                  &nbsp; Registered
                </button>
              </Dropdown.Item>
              <Dropdown.Item href="#">
                <button className="button1">
                  <BsFillBookmarkHeartFill style={{ width: "33px", height: "33px" }} color="lightgray" />
                  &nbsp; Completed
                </button>
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>


          <button className="button1" style={{ height: "60px" }}>
            <IoMdNotificationsOutline style={{ borderRadius: "5px", width: "33px", height: "33px" }} color="#3698E9" />
            &nbsp; Notifications
          </button>

          <hr />
          <button className="button1" style={{ overflowY: "hidden", display: "flex", justifyContent: "center", alignItems: "center", textAlign: "center", backgroundColor: "#4E4F50", color: "white", height: "40px" }}>
            <FaPodcast style={{ width: "18px", height: "18px" }} color="white" />
            &nbsp; <span style={{ fontWeight: "10px", fontSize: "16px" }}>
              Start Streaming
            </span>
          </button>
          <hr />
          <span style={{ fontWeight: "15px", fontSize: "large" }}>Suggested</span>
          <hr />

        </Col>



        <Col className="gaming-right-container">
          <div className="gaming-right" style={{ marginTop: "10px", marginBottom: "10px" }} >

            <div style={{marginBottom:"10px"}}>
            <iframe width="100%" height="600px" src="https://www.youtube.com/embed/dQw4w9WgXcQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share allowfullscreen"/>
            </div>

{/* *********************************************** */}
            <div style={{marginBottom:"20px"}}>
              <h4 style={{ fontWeight: "bold" }}>Live Followed Streamers</h4>
              <div style={{ textAlign: "center", color: "lightgray" }}>
                <span style={{ fontWeight: "bold", fontSize: "20px" }}>We Didn't Find Anything</span>
                <p>When you follow a streamer, they'll appear here when they're live. Browse live streams to find new favorites to follow.</p>
                <Button>Browse Live Streams</Button>
              </div>
            </div>
{/* *********************************************** */}
            <div style={{marginBottom:"10px"}}>
              
              <div style={{ marginBottom: "10px" }}>
                <span style={{ fontSize: "calc(1.275rem + .3vw)", fontWeight: "bold", marginTop: "5px" }}>Suggested Live Now</span>
                <button className="button1" style={{ color: "#3698E9", float: "right", fontSize: "17px", width: "75px", padding: "5px", textAlign: "center", backgroundColor: "#18191A" }}>See All</button>
              </div>

              <div className="people-wrapper">
                
                <div>
                  <button onClick={()=>handleScrollLeft(1)} className="left-scroller button1 create-post-button create-post-sub-button">
                    <AiOutlineLeft size="15px" color="#B0B3B8" />
                  </button>
                  <button onClick={()=>handleScrollRight(1)} className="right-scroller button1 create-post-button create-post-sub-button">
                    <AiOutlineRight size="15px" color="#B0B3B8" />
                  </button>
                </div>

                <div className="people-container games-container1">
                  
                    <Live title="We are playing games!" imgSrc="https://media.wired.com/photos/5ea0840cb0490300086261e3/master/w_2560%2Cc_limit/Cul-Reveal_ReactorA_VALORANT.jpg" streamer="g4" game="Valorant" />
                    <Live title="Welcome!" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t15.5256-10/366017686_822578065934048_8901601760361875842_n.jpg?stp=dst-jpg_s320x320&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=1a7029&_nc_ohc=STW5LMSi874AX-q6Cl7&_nc_ht=scontent.fist13-1.fna&oh=00_AfBx0In0GoDEZwfvVAGd1UiVPgFCtfg4qTafReCbt5V8fg&oe=64DF0AE6" streamer="streamer" game="PUBG Mobile" />
                    <Live title="Another shooter?!" imgSrc="https://playerbros.com/wp-content/uploads/2021/10/csgo-7-ekim-2021-guncelleme-detaylari.jpg" streamer="g4" game="CS:GO" />
                    <Live title="Another Live Video" imgSrc="https://media.wired.com/photos/5ea0840cb0490300086261e3/master/w_2560%2Cc_limit/Cul-Reveal_ReactorA_VALORANT.jpg" streamer="g4" game="Valorant" />
                    <Live title="We are playing games!" imgSrc="https://media.wired.com/photos/5ea0840cb0490300086261e3/master/w_2560%2Cc_limit/Cul-Reveal_ReactorA_VALORANT.jpg" streamer="g4" game="Valorant" />
                    <Live title="Welcome!" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t15.5256-10/366017686_822578065934048_8901601760361875842_n.jpg?stp=dst-jpg_s320x320&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=1a7029&_nc_ohc=STW5LMSi874AX-q6Cl7&_nc_ht=scontent.fist13-1.fna&oh=00_AfBx0In0GoDEZwfvVAGd1UiVPgFCtfg4qTafReCbt5V8fg&oe=64DF0AE6" streamer="streamer" game="PUBG Mobile" />
                    <Live title="Another shooter?!" imgSrc="https://playerbros.com/wp-content/uploads/2021/10/csgo-7-ekim-2021-guncelleme-detaylari.jpg" streamer="g4" game="CS:GO" />
                    <Live title="Another Live Video" imgSrc="https://media.wired.com/photos/5ea0840cb0490300086261e3/master/w_2560%2Cc_limit/Cul-Reveal_ReactorA_VALORANT.jpg" streamer="g4" game="Valorant" />                    <Live title="We are playing games!" imgSrc="https://media.wired.com/photos/5ea0840cb0490300086261e3/master/w_2560%2Cc_limit/Cul-Reveal_ReactorA_VALORANT.jpg" streamer="g4" game="Valorant" />
                    <Live title="Welcome!" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t15.5256-10/366017686_822578065934048_8901601760361875842_n.jpg?stp=dst-jpg_s320x320&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=1a7029&_nc_ohc=STW5LMSi874AX-q6Cl7&_nc_ht=scontent.fist13-1.fna&oh=00_AfBx0In0GoDEZwfvVAGd1UiVPgFCtfg4qTafReCbt5V8fg&oe=64DF0AE6" streamer="streamer" game="PUBG Mobile" />
                    <Live title="Another shooter?!" imgSrc="https://playerbros.com/wp-content/uploads/2021/10/csgo-7-ekim-2021-guncelleme-detaylari.jpg" streamer="g4" game="CS:GO" />
                    <Live title="Another Live Video" imgSrc="https://media.wired.com/photos/5ea0840cb0490300086261e3/master/w_2560%2Cc_limit/Cul-Reveal_ReactorA_VALORANT.jpg" streamer="g4" game="Valorant" />                    <Live title="We are playing games!" imgSrc="https://media.wired.com/photos/5ea0840cb0490300086261e3/master/w_2560%2Cc_limit/Cul-Reveal_ReactorA_VALORANT.jpg" streamer="g4" game="Valorant" />
                    <Live title="Welcome!" imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t15.5256-10/366017686_822578065934048_8901601760361875842_n.jpg?stp=dst-jpg_s320x320&_nc_cat=106&cb=99be929b-59f725be&ccb=1-7&_nc_sid=1a7029&_nc_ohc=STW5LMSi874AX-q6Cl7&_nc_ht=scontent.fist13-1.fna&oh=00_AfBx0In0GoDEZwfvVAGd1UiVPgFCtfg4qTafReCbt5V8fg&oe=64DF0AE6" streamer="streamer" game="PUBG Mobile" />
                    <Live title="Another shooter?!" imgSrc="https://playerbros.com/wp-content/uploads/2021/10/csgo-7-ekim-2021-guncelleme-detaylari.jpg" streamer="g4" game="CS:GO" />
                    <Live title="Another Live Video" imgSrc="https://media.wired.com/photos/5ea0840cb0490300086261e3/master/w_2560%2Cc_limit/Cul-Reveal_ReactorA_VALORANT.jpg" streamer="g4" game="Valorant" />
                
                </div>

              </div>
            </div>
{/* *********************************************** */}
            <div style={{marginBottom:"10px"}}>
              
              <div style={{ marginBottom: "10px" }}>
                <span style={{ fontSize: "calc(1.275rem + .3vw)", fontWeight: "bold", marginTop: "5px" }}>Popular Games to Watch</span>
                <button className="button1" style={{ color: "#3698E9", float: "right", fontSize: "17px", width: "75px", padding: "5px", textAlign: "center", backgroundColor: "#18191A" }}>See All</button>
              </div>

              <div className="people-wrapper">
                
                <div>
                  <button onClick={()=>handleScrollLeft(2)} className="left-scroller button1 create-post-button create-post-sub-button">
                    <AiOutlineLeft size="15px" color="#B0B3B8" />
                  </button>
                  <button onClick={()=>handleScrollRight(2)} className="right-scroller button1 create-post-button create-post-sub-button">
                    <AiOutlineRight size="15px" color="#B0B3B8" />
                  </button>
                </div>

                <div className="people-container games-container2" style={{height:"410px"}} >
                    
                      <Game game={"Mobile Legends"} follower={"11.9M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-Yw9NjsdRkKz8B3-6G-0lKOVT3NDvjEPaWyh1_FIYfF2Q4_Mk6o8FfNC6R1SGiNBvc_NeLUyqTC_YmIn9BY7b2A2ebNOtpK2D4u974KWnV?ccb=10-5&oh=00_AfBrYFg37RYLG5jVVPE07a3RgPXElr23orG94IhQbM_NKQ&oe=6502C9C3&_nc_sid=cae86a"/>
                      <Game game={"Grand Theft Auto V"} follower={"10.2M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-TRsQOaG0V-d5n6k-pqqPR534stPqNYlXLbzFLbp5OjtuUUR2wEwh3W4vUXEUHBA0kEYsvQXl7MtWYgocOgeKuQKpf8pgD3Mc0eVTThEhO?ccb=10-5&oh=00_AfDuv79qZRTpD4-jD6cpeL7qWer3l0uOLUzYudfFnQZbhA&oe=6502BA11&_nc_sid=cae86a"/>
                      <Game game={"PUBG Mobile"} follower={"19.7M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-_wweRiBEAV_b_RaNsYAyyGzJuj2yUyjaW0jTeJt1qAsv3PaC7jaLfvQa9tfJTTE16VPk3t8A_XKZgZhzVNEtHGgE0WOAxMn5nvR9LRREp?ccb=10-5&oh=00_AfDhij7-h4oDa6dLQWNpUqcNLa65V1hQOrs6DQASNi5xLA&oe=650299B5&_nc_sid=cae86a"/>
                      <Game game={"Arena of Valor"} follower={"2.3M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-MOLGn78Trk8Jm0kkXhF-DJbGYphTnU_wdTB5Uy6uPjowuyWYOEf3Nq_GdgahL1SFoMikZjUxPpn8JTsbXWsnEp_qSG3yXJkq_SoAtNh4?ccb=10-5&oh=00_AfCpzUI51PfF2nVa4NVLByw1lqYX4pl4LBVTeRMzLflAlQ&oe=6502C8B8&_nc_sid=cae86a"/>
                      <Game game={"FIFA 23"} follower={"2.3M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An8It-RqtYa9NXtJ5xs1-Jv03xcKSlBBRcmfihZ8m2_LNlV_DL3MvIUcf5jjKO_KMwhvSoXfn0MfUXA4KIVKb_yJ30KHh2swW01z3fGQoDI?ccb=10-5&oh=00_AfCZDtN8BaU3oaFtkZ0sraaRpKq9ce5NkU0aQ3XSf_9fAg&oe=65029FE0&_nc_sid=cae86a"/>
                      <Game game={"Call of Duty: Mobile"} follower={"3.7M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An_c-pSHA5VMtN8FHmNqJFq14uyX7ZOW5liD_jNBJTohQrdsopfJreSoF_lsSuLB1zuTDvwyk9Orl90V9oG1XGSCNUroIhF-FcdtESZWrVQ?ccb=10-5&oh=00_AfCA1jkLhWQRF_IkGKmGD1emDdBgZ9DjsA5G7c-Gtl-3Fw&oe=6502C434&_nc_sid=cae86a"/>
                      <Game game={"Mobile Legends"} follower={"11.9M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-Yw9NjsdRkKz8B3-6G-0lKOVT3NDvjEPaWyh1_FIYfF2Q4_Mk6o8FfNC6R1SGiNBvc_NeLUyqTC_YmIn9BY7b2A2ebNOtpK2D4u974KWnV?ccb=10-5&oh=00_AfBrYFg37RYLG5jVVPE07a3RgPXElr23orG94IhQbM_NKQ&oe=6502C9C3&_nc_sid=cae86a"/>
                      <Game game={"Grand Theft Auto V"} follower={"10.2M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-TRsQOaG0V-d5n6k-pqqPR534stPqNYlXLbzFLbp5OjtuUUR2wEwh3W4vUXEUHBA0kEYsvQXl7MtWYgocOgeKuQKpf8pgD3Mc0eVTThEhO?ccb=10-5&oh=00_AfDuv79qZRTpD4-jD6cpeL7qWer3l0uOLUzYudfFnQZbhA&oe=6502BA11&_nc_sid=cae86a"/>
                      <Game game={"PUBG Mobile"} follower={"19.7M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-_wweRiBEAV_b_RaNsYAyyGzJuj2yUyjaW0jTeJt1qAsv3PaC7jaLfvQa9tfJTTE16VPk3t8A_XKZgZhzVNEtHGgE0WOAxMn5nvR9LRREp?ccb=10-5&oh=00_AfDhij7-h4oDa6dLQWNpUqcNLa65V1hQOrs6DQASNi5xLA&oe=650299B5&_nc_sid=cae86a"/>
                      <Game game={"Arena of Valor"} follower={"2.3M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-MOLGn78Trk8Jm0kkXhF-DJbGYphTnU_wdTB5Uy6uPjowuyWYOEf3Nq_GdgahL1SFoMikZjUxPpn8JTsbXWsnEp_qSG3yXJkq_SoAtNh4?ccb=10-5&oh=00_AfCpzUI51PfF2nVa4NVLByw1lqYX4pl4LBVTeRMzLflAlQ&oe=6502C8B8&_nc_sid=cae86a"/>
                      <Game game={"FIFA 23"} follower={"2.3M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An8It-RqtYa9NXtJ5xs1-Jv03xcKSlBBRcmfihZ8m2_LNlV_DL3MvIUcf5jjKO_KMwhvSoXfn0MfUXA4KIVKb_yJ30KHh2swW01z3fGQoDI?ccb=10-5&oh=00_AfCZDtN8BaU3oaFtkZ0sraaRpKq9ce5NkU0aQ3XSf_9fAg&oe=65029FE0&_nc_sid=cae86a"/>
                      <Game game={"Call of Duty: Mobile"} follower={"3.7M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An_c-pSHA5VMtN8FHmNqJFq14uyX7ZOW5liD_jNBJTohQrdsopfJreSoF_lsSuLB1zuTDvwyk9Orl90V9oG1XGSCNUroIhF-FcdtESZWrVQ?ccb=10-5&oh=00_AfCA1jkLhWQRF_IkGKmGD1emDdBgZ9DjsA5G7c-Gtl-3Fw&oe=6502C434&_nc_sid=cae86a"/>

                </div>

              </div>
            </div>
{/* *********************************************** */}
            <div style={{marginBottom:"10px"}}>
              
              <div style={{ marginBottom: "10px" }}>
                <span style={{ fontSize: "calc(1.275rem + .3vw)", fontWeight: "bold", marginTop: "5px" }}>Suggested Tournaments</span>
                <button className="button1" style={{ color: "#3698E9", float: "right", fontSize: "17px", width: "75px", padding: "5px", textAlign: "center", backgroundColor: "#18191A" }}>See All</button>
              </div>

              <div className="people-wrapper">
                
                <div>
                  <button onClick={()=>handleScrollLeft(3)} className="left-scroller button1 create-post-button create-post-sub-button">
                    <AiOutlineLeft size="15px" color="#B0B3B8" />
                  </button>
                  <button onClick={()=>handleScrollRight(3)} className="right-scroller button1 create-post-button create-post-sub-button">
                    <AiOutlineRight size="15px" color="#B0B3B8" />
                  </button>
                </div>

                <div className="people-container games-container3">
                      <Tournament date="MON, AUG 28 AT 3 AM" title="KOTS: Historic Artisan BO3" playerCount={6} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/362290050_3474473489441385_955455364610584543_n.jpg?stp=dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=83ddde&_nc_ohc=RYyhYBvs5BIAX9EcPEL&_nc_ht=scontent.fist13-1.fna&oh=00_AfCk79CQyDDnIMFWhBcQdurdrga15_Fgef-zUDHBsl6gWQ&oe=64E09C83" />
                      <Tournament date="MON, AUG 28 AT 3 AM" title="Duo BR Charity Tournament" playerCount={6} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/367397231_761678852632902_7831665943112052244_n.jpg?stp=dst-jpg_p640x640&_nc_cat=102&ccb=1-7&_nc_sid=340051&_nc_ohc=b67dG6fMV0QAX9-I_Lh&_nc_ht=scontent.fist13-1.fna&oh=00_AfATZE1JeeL27kB5MUlYpC-Dfv1L1XU50b1wVdTtU3GPgQ&oe=64E1B315" />
                      <Tournament date="SUN, AUG 27 AT 1 PM" title="6e Open Wolvega Koppel 501" playerCount={6} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/362290050_3474473489441385_955455364610584543_n.jpg?stp=dst-jpg_p180x540&_nc_cat=107&ccb=1-7&_nc_sid=83ddde&_nc_ohc=RYyhYBvs5BIAX9EcPEL&_nc_ht=scontent.fist13-1.fna&oh=00_AfCk79CQyDDnIMFWhBcQdurdrga15_Fgef-zUDHBsl6gWQ&oe=64E09C83" />
                      <Tournament date="SAT, SEP 23 AT 4 AM" title="ONLY! Blackjack 21 App !ONLY!" playerCount={6} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/343196351_948563022844745_2853475750343586746_n.jpg?stp=dst-jpg_p640x640&_nc_cat=111&ccb=1-7&_nc_sid=340051&_nc_ohc=nfsrZX46AnIAX97Du0M&_nc_ht=scontent.fist13-1.fna&oh=00_AfDP88LNAiUx3Cr00TIcHjVvabQhqNh_d0lp_oZHRHbihw&oe=64E09B04" />

                </div>

              </div>
            </div>
{/* *********************************************** */}
            <div style={{marginBottom:"10px"}}>
              
              <div style={{ marginBottom: "10px" }}>
                <span style={{ fontSize: "calc(1.275rem + .3vw)", fontWeight: "bold", marginTop: "5px" }}>New and Rising Games</span>
                <button className="button1" style={{ color: "#3698E9", float: "right", fontSize: "17px", width: "75px", padding: "5px", textAlign: "center", backgroundColor: "#18191A" }}>See All</button>
              </div>

              <div className="people-wrapper">
                
                <div>
                  <button onClick={()=>handleScrollLeft(4)} className="left-scroller button1 create-post-button create-post-sub-button">
                    <AiOutlineLeft size="15px" color="#B0B3B8" />
                  </button>
                  <button onClick={()=>handleScrollRight(4)} className="right-scroller button1 create-post-button create-post-sub-button">
                    <AiOutlineRight size="15px" color="#B0B3B8" />
                  </button>
                </div>

                <div className="people-container games-container4" style={{height:"410px"}}>
                      <Game game={"Mobile Legends"} follower={"11.9M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-Yw9NjsdRkKz8B3-6G-0lKOVT3NDvjEPaWyh1_FIYfF2Q4_Mk6o8FfNC6R1SGiNBvc_NeLUyqTC_YmIn9BY7b2A2ebNOtpK2D4u974KWnV?ccb=10-5&oh=00_AfBrYFg37RYLG5jVVPE07a3RgPXElr23orG94IhQbM_NKQ&oe=6502C9C3&_nc_sid=cae86a"/>
                      <Game game={"Grand Theft Auto V"} follower={"10.2M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-TRsQOaG0V-d5n6k-pqqPR534stPqNYlXLbzFLbp5OjtuUUR2wEwh3W4vUXEUHBA0kEYsvQXl7MtWYgocOgeKuQKpf8pgD3Mc0eVTThEhO?ccb=10-5&oh=00_AfDuv79qZRTpD4-jD6cpeL7qWer3l0uOLUzYudfFnQZbhA&oe=6502BA11&_nc_sid=cae86a"/>
                      <Game game={"PUBG Mobile"} follower={"19.7M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-_wweRiBEAV_b_RaNsYAyyGzJuj2yUyjaW0jTeJt1qAsv3PaC7jaLfvQa9tfJTTE16VPk3t8A_XKZgZhzVNEtHGgE0WOAxMn5nvR9LRREp?ccb=10-5&oh=00_AfDhij7-h4oDa6dLQWNpUqcNLa65V1hQOrs6DQASNi5xLA&oe=650299B5&_nc_sid=cae86a"/>
                      <Game game={"Arena of Valor"} follower={"2.3M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-MOLGn78Trk8Jm0kkXhF-DJbGYphTnU_wdTB5Uy6uPjowuyWYOEf3Nq_GdgahL1SFoMikZjUxPpn8JTsbXWsnEp_qSG3yXJkq_SoAtNh4?ccb=10-5&oh=00_AfCpzUI51PfF2nVa4NVLByw1lqYX4pl4LBVTeRMzLflAlQ&oe=6502C8B8&_nc_sid=cae86a"/>
                      <Game game={"FIFA 23"} follower={"2.3M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An8It-RqtYa9NXtJ5xs1-Jv03xcKSlBBRcmfihZ8m2_LNlV_DL3MvIUcf5jjKO_KMwhvSoXfn0MfUXA4KIVKb_yJ30KHh2swW01z3fGQoDI?ccb=10-5&oh=00_AfCZDtN8BaU3oaFtkZ0sraaRpKq9ce5NkU0aQ3XSf_9fAg&oe=65029FE0&_nc_sid=cae86a"/>
                      <Game game={"Call of Duty: Mobile"} follower={"3.7M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An_c-pSHA5VMtN8FHmNqJFq14uyX7ZOW5liD_jNBJTohQrdsopfJreSoF_lsSuLB1zuTDvwyk9Orl90V9oG1XGSCNUroIhF-FcdtESZWrVQ?ccb=10-5&oh=00_AfCA1jkLhWQRF_IkGKmGD1emDdBgZ9DjsA5G7c-Gtl-3Fw&oe=6502C434&_nc_sid=cae86a"/>
                      <Game game={"Mobile Legends"} follower={"11.9M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-Yw9NjsdRkKz8B3-6G-0lKOVT3NDvjEPaWyh1_FIYfF2Q4_Mk6o8FfNC6R1SGiNBvc_NeLUyqTC_YmIn9BY7b2A2ebNOtpK2D4u974KWnV?ccb=10-5&oh=00_AfBrYFg37RYLG5jVVPE07a3RgPXElr23orG94IhQbM_NKQ&oe=6502C9C3&_nc_sid=cae86a"/>
                      <Game game={"Grand Theft Auto V"} follower={"10.2M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-TRsQOaG0V-d5n6k-pqqPR534stPqNYlXLbzFLbp5OjtuUUR2wEwh3W4vUXEUHBA0kEYsvQXl7MtWYgocOgeKuQKpf8pgD3Mc0eVTThEhO?ccb=10-5&oh=00_AfDuv79qZRTpD4-jD6cpeL7qWer3l0uOLUzYudfFnQZbhA&oe=6502BA11&_nc_sid=cae86a"/>
                      <Game game={"PUBG Mobile"} follower={"19.7M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-_wweRiBEAV_b_RaNsYAyyGzJuj2yUyjaW0jTeJt1qAsv3PaC7jaLfvQa9tfJTTE16VPk3t8A_XKZgZhzVNEtHGgE0WOAxMn5nvR9LRREp?ccb=10-5&oh=00_AfDhij7-h4oDa6dLQWNpUqcNLa65V1hQOrs6DQASNi5xLA&oe=650299B5&_nc_sid=cae86a"/>
                      <Game game={"Arena of Valor"} follower={"2.3M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-MOLGn78Trk8Jm0kkXhF-DJbGYphTnU_wdTB5Uy6uPjowuyWYOEf3Nq_GdgahL1SFoMikZjUxPpn8JTsbXWsnEp_qSG3yXJkq_SoAtNh4?ccb=10-5&oh=00_AfCpzUI51PfF2nVa4NVLByw1lqYX4pl4LBVTeRMzLflAlQ&oe=6502C8B8&_nc_sid=cae86a"/>
                      <Game game={"FIFA 23"} follower={"2.3M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An8It-RqtYa9NXtJ5xs1-Jv03xcKSlBBRcmfihZ8m2_LNlV_DL3MvIUcf5jjKO_KMwhvSoXfn0MfUXA4KIVKb_yJ30KHh2swW01z3fGQoDI?ccb=10-5&oh=00_AfCZDtN8BaU3oaFtkZ0sraaRpKq9ce5NkU0aQ3XSf_9fAg&oe=65029FE0&_nc_sid=cae86a"/>
                      <Game game={"Call of Duty: Mobile"} follower={"3.7M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An_c-pSHA5VMtN8FHmNqJFq14uyX7ZOW5liD_jNBJTohQrdsopfJreSoF_lsSuLB1zuTDvwyk9Orl90V9oG1XGSCNUroIhF-FcdtESZWrVQ?ccb=10-5&oh=00_AfCA1jkLhWQRF_IkGKmGD1emDdBgZ9DjsA5G7c-Gtl-3Fw&oe=6502C434&_nc_sid=cae86a"/>

                </div>

              </div>
            </div>
{/* *********************************************** */}
            <div>
              
              <div style={{ marginBottom: "10px" }}>
                <span style={{ fontSize: "calc(1.275rem + .3vw)", fontWeight: "bold", marginTop: "5px" }}>Suggested Games</span>
                <button className="button1" style={{ color: "#3698E9", float: "right", fontSize: "17px", width: "75px", padding: "5px", textAlign: "center", backgroundColor: "#18191A" }}>See All</button>
              </div>

              <div className="people-wrapper">
                
                <div>
                  <button onClick={()=>handleScrollLeft(5)} className="left-scroller button1 create-post-button create-post-sub-button">
                    <AiOutlineLeft size="15px" color="#B0B3B8" />
                  </button>
                  <button onClick={()=>handleScrollRight(5)} className="right-scroller button1 create-post-button create-post-sub-button">
                    <AiOutlineRight size="15px" color="#B0B3B8" />
                  </button>
                </div>

                <div className="people-container games-container5" style={{height:"410px"}}> 
                      <Game game={"Mobile Legends"} follower={"11.9M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-Yw9NjsdRkKz8B3-6G-0lKOVT3NDvjEPaWyh1_FIYfF2Q4_Mk6o8FfNC6R1SGiNBvc_NeLUyqTC_YmIn9BY7b2A2ebNOtpK2D4u974KWnV?ccb=10-5&oh=00_AfBrYFg37RYLG5jVVPE07a3RgPXElr23orG94IhQbM_NKQ&oe=6502C9C3&_nc_sid=cae86a"/>
                      <Game game={"Grand Theft Auto V"} follower={"10.2M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-TRsQOaG0V-d5n6k-pqqPR534stPqNYlXLbzFLbp5OjtuUUR2wEwh3W4vUXEUHBA0kEYsvQXl7MtWYgocOgeKuQKpf8pgD3Mc0eVTThEhO?ccb=10-5&oh=00_AfDuv79qZRTpD4-jD6cpeL7qWer3l0uOLUzYudfFnQZbhA&oe=6502BA11&_nc_sid=cae86a"/>
                      <Game game={"PUBG Mobile"} follower={"19.7M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-_wweRiBEAV_b_RaNsYAyyGzJuj2yUyjaW0jTeJt1qAsv3PaC7jaLfvQa9tfJTTE16VPk3t8A_XKZgZhzVNEtHGgE0WOAxMn5nvR9LRREp?ccb=10-5&oh=00_AfDhij7-h4oDa6dLQWNpUqcNLa65V1hQOrs6DQASNi5xLA&oe=650299B5&_nc_sid=cae86a"/>
                      <Game game={"Arena of Valor"} follower={"2.3M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-MOLGn78Trk8Jm0kkXhF-DJbGYphTnU_wdTB5Uy6uPjowuyWYOEf3Nq_GdgahL1SFoMikZjUxPpn8JTsbXWsnEp_qSG3yXJkq_SoAtNh4?ccb=10-5&oh=00_AfCpzUI51PfF2nVa4NVLByw1lqYX4pl4LBVTeRMzLflAlQ&oe=6502C8B8&_nc_sid=cae86a"/>
                      <Game game={"FIFA 23"} follower={"2.3M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An8It-RqtYa9NXtJ5xs1-Jv03xcKSlBBRcmfihZ8m2_LNlV_DL3MvIUcf5jjKO_KMwhvSoXfn0MfUXA4KIVKb_yJ30KHh2swW01z3fGQoDI?ccb=10-5&oh=00_AfCZDtN8BaU3oaFtkZ0sraaRpKq9ce5NkU0aQ3XSf_9fAg&oe=65029FE0&_nc_sid=cae86a"/>
                      <Game game={"Call of Duty: Mobile"} follower={"3.7M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An_c-pSHA5VMtN8FHmNqJFq14uyX7ZOW5liD_jNBJTohQrdsopfJreSoF_lsSuLB1zuTDvwyk9Orl90V9oG1XGSCNUroIhF-FcdtESZWrVQ?ccb=10-5&oh=00_AfCA1jkLhWQRF_IkGKmGD1emDdBgZ9DjsA5G7c-Gtl-3Fw&oe=6502C434&_nc_sid=cae86a"/>
                      <Game game={"Mobile Legends"} follower={"11.9M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-Yw9NjsdRkKz8B3-6G-0lKOVT3NDvjEPaWyh1_FIYfF2Q4_Mk6o8FfNC6R1SGiNBvc_NeLUyqTC_YmIn9BY7b2A2ebNOtpK2D4u974KWnV?ccb=10-5&oh=00_AfBrYFg37RYLG5jVVPE07a3RgPXElr23orG94IhQbM_NKQ&oe=6502C9C3&_nc_sid=cae86a"/>
                      <Game game={"Grand Theft Auto V"} follower={"10.2M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-TRsQOaG0V-d5n6k-pqqPR534stPqNYlXLbzFLbp5OjtuUUR2wEwh3W4vUXEUHBA0kEYsvQXl7MtWYgocOgeKuQKpf8pgD3Mc0eVTThEhO?ccb=10-5&oh=00_AfDuv79qZRTpD4-jD6cpeL7qWer3l0uOLUzYudfFnQZbhA&oe=6502BA11&_nc_sid=cae86a"/>
                      <Game game={"PUBG Mobile"} follower={"19.7M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-_wweRiBEAV_b_RaNsYAyyGzJuj2yUyjaW0jTeJt1qAsv3PaC7jaLfvQa9tfJTTE16VPk3t8A_XKZgZhzVNEtHGgE0WOAxMn5nvR9LRREp?ccb=10-5&oh=00_AfDhij7-h4oDa6dLQWNpUqcNLa65V1hQOrs6DQASNi5xLA&oe=650299B5&_nc_sid=cae86a"/>
                      <Game game={"Arena of Valor"} follower={"2.3M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An-MOLGn78Trk8Jm0kkXhF-DJbGYphTnU_wdTB5Uy6uPjowuyWYOEf3Nq_GdgahL1SFoMikZjUxPpn8JTsbXWsnEp_qSG3yXJkq_SoAtNh4?ccb=10-5&oh=00_AfCpzUI51PfF2nVa4NVLByw1lqYX4pl4LBVTeRMzLflAlQ&oe=6502C8B8&_nc_sid=cae86a"/>
                      <Game game={"FIFA 23"} follower={"2.3M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An8It-RqtYa9NXtJ5xs1-Jv03xcKSlBBRcmfihZ8m2_LNlV_DL3MvIUcf5jjKO_KMwhvSoXfn0MfUXA4KIVKb_yJ30KHh2swW01z3fGQoDI?ccb=10-5&oh=00_AfCZDtN8BaU3oaFtkZ0sraaRpKq9ce5NkU0aQ3XSf_9fAg&oe=65029FE0&_nc_sid=cae86a"/>
                      <Game game={"Call of Duty: Mobile"} follower={"3.7M"} imgSrc="https://scontent.fist13-1.fna.fbcdn.net/m1/v/t0.53032-6/An_c-pSHA5VMtN8FHmNqJFq14uyX7ZOW5liD_jNBJTohQrdsopfJreSoF_lsSuLB1zuTDvwyk9Orl90V9oG1XGSCNUroIhF-FcdtESZWrVQ?ccb=10-5&oh=00_AfCA1jkLhWQRF_IkGKmGD1emDdBgZ9DjsA5G7c-Gtl-3Fw&oe=6502C434&_nc_sid=cae86a"/>
                </div>

              </div>
            </div>

          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Video