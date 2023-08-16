import { useNavigate } from "react-router-dom"
//icons
import {GoPeople} from "react-icons/go"
import {HiUserGroup} from "react-icons/hi"
import { BsShopWindow,BsPlayBtn } from "react-icons/bs"
import{RiMemoriesFill} from "react-icons/ri"

function HomeLeft() {
      
    const navigate = useNavigate()
    
    return(
        <div className="home-left-main">
            
            <div className="toggled-container" style={{marginTop:"10px"}}>
                <button className="button1">
                    <img width="36px" height="36px" style={{borderRadius:"50%"}} src="https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-1/366156409_1324238485178760_4338614729461176337_n.jpg?stp=c9.0.40.40a_cp0_dst-jpg_p40x40&_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=dbb9e7&_nc_ohc=hIO0cJW6EvgAX9IfqOk&_nc_ht=scontent.fist13-1.fna&oh=00_AfArb6vcBr98JMXqS780KvfwUVIY4yVQWDUWGeFkTzHaCg&oe=64D83B29" />
                    &nbsp; g4 the Lord
                </button>
                <button className="button1" onClick={()=>{navigate("/friends")}}>
                    <GoPeople style={{borderRadius:"50%",width:"36px",height:"36px"}} color="#3698E9"/>
                    &nbsp; Find Friends
                </button>
                <button className="button1">
                    <img width="36px" height="36px" style={{borderRadius:"50%"}} src="https://static.xx.fbcdn.net/rsrc.php/v3/yb/r/eECk3ceTaHJ.png" />
                    &nbsp; Feeds
                </button>
                <button className="button1">
                    <HiUserGroup style={{borderRadius:"50%",width:"36px",height:"36px"}} color="#3698E9"/>
                    &nbsp; Groups
                </button>
                <button className="button1" onClick={()=>{navigate("/marketplace")}}>
                    <BsShopWindow style={{borderRadius:"50%",width:"36px",height:"36px"}} color="#3698E9"/>
                    &nbsp; Marketplace
                </button>
                <button className="button1" onClick={()=>{navigate("/video")}}>
                    <BsPlayBtn style={{borderRadius:"15px",width:"36px",height:"36px"}} color="#3698E9"/>
                    &nbsp; Video
                </button>
                <button className="button1">
                    <RiMemoriesFill style={{borderRadius:"15px",width:"36px",height:"36px"}} color="#3698E9"/>
                    &nbsp; Memories
                </button>

            </div>
            
            <hr />

            <div className="toggled-container">
                <div className="shortcuts-title">Your Shortcuts</div>
                <button className="button1">
                    <img width="36px" height="36px" src="https://scontent.fist13-1.fna.fbcdn.net/v/t39.2081-6/278397805_5011558652224773_7892220872797451727_n.jpg?stp=c6.6.31.31a_dst-jpg_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=mkbsoFgn0iQAX-CDlBy&_nc_ht=scontent.fist13-1.fna&oh=00_AfBu-OR8RGItKr9CnKvrVhX-qS7PXA2YFwJZhYxWPuv5_g&oe=64D7951A" />
                    &nbsp; 101 Okey
                </button>
                <button className="button1">
                    <img width="36px" height="36px" src="https://scontent.fist13-1.fna.fbcdn.net/v/t39.2081-6/42630609_2166936443330818_3464735768197464064_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=_9zvts7Z7QIAX98fCjQ&_nc_ht=scontent.fist13-1.fna&oh=00_AfCyxiKygnlTuARWryvNsW3N4PjNb_EJ7Ceb0J-pjpCTMA&oe=64D83C2F" />
                    &nbsp; 8 Ball Pool
                </button>
                <button className="button1">
                    <img width="36px" height="36px" src="https://scontent.fist13-1.fna.fbcdn.net/v/t39.2081-6/347224227_5859001717537516_2150469681825195855_n.jpg?stp=c6.6.31.31a_dst-jpg_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=AaU2R0KUBhMAX-5iIqc&_nc_ht=scontent.fist13-1.fna&oh=00_AfC7K9Ld5BoZyafQEhCUlSbj1bsJ0AFV_s44JgHwt05YJg&oe=64D90E7B" />
                    &nbsp; Agar.io
                </button>
                <button className="button1">
                    <img width="36px" height="36px" src="https://scontent.fist13-1.fna.fbcdn.net/v/t39.2081-6/38857289_967432326791829_6476944985995345920_n.png?stp=c6.6.31.31a_dst-png_p36x36&_nc_cat=1&ccb=1-7&_nc_sid=b29aad&_nc_ohc=Dqq8K1jaT7wAX8BEveK&_nc_ht=scontent.fist13-1.fna&oh=00_AfDnCPLxUXXHZibwxo49t4KHqv7mW0L1jVq0FDx-nAyLjg&oe=64D85E00" />
                    &nbsp; Soccer Stars
                </button>
            </div>

            <div className="home-left-bottom">
                <button className="button2">Privacy</button>·
                <button className="button2">Terms</button>·
                <button className="button2">Advertising</button>·
                <button className="button2">Ad Choices</button>·
                <button className="button2">Cookies</button>·
                <button className="button2">More</button>· &nbsp;
                <div className="button2" style={{color:"white"}}>gSoftw4re &copy; 2023</div>
            </div>
        </div>
    )
}

export default HomeLeft