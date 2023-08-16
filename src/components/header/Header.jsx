import { Container, Form, InputGroup, Nav, Navbar } from "react-bootstrap"
import "../../styles/header.css"
//icons
import { AiOutlineSearch, AiOutlineHome } from "react-icons/ai"
import { PiMessengerLogo } from "react-icons/pi"
import { MdOutlineNotificationsNone, MdApps } from "react-icons/md"
import { GoVideo, GoPeople } from "react-icons/go"
import { BsShopWindow, BsController } from "react-icons/bs"

function Header({toggle,setToggle}) {

    return (
        <div style={{position:"relative",width:"100%",marginBottom:"90px"}}>
            <Navbar data-bs-theme="dark" style={{backgroundColor:"#242526",position:"fixed",top:"0px",zIndex:"999",width:"100%"}}>
                <Container fluid style={{ marginTop: "-5px", width: "100%" }}>

                <Navbar.Brand href="/">
                    <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" width="40px" height="40px" />
                </Navbar.Brand>
                <Form className="search-form">
                    <InputGroup>
                        <InputGroup.Text id="basic-addon1" style={{ borderTopLeftRadius: "50%", borderBottomLeftRadius: "50%" }}><AiOutlineSearch /></InputGroup.Text>
                        <Form.Control
                            type="search"
                            placeholder="Search Facebook"
                            className="me-2"
                            aria-label="Search"
                            style={{ borderTopRightRadius: "30px", borderBottomRightRadius: "30px", width: "50px" }}
                        />
                    </InputGroup>
                </Form>


                <button className="toggler-button" onClick={() => setToggle(!toggle)}>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="header-middle-container">
                    <Navbar.Collapse id="basic-navbar-nav" className="header-middle">
                        <Nav className="header-middle-tabs" variant="tabs" activeKey={window.location.pathname} as="ul">

                            <Nav.Link href="/" eventKey="/" className="header-middle-item">
                                <Nav.Item >
                                    <AiOutlineHome size="30px" />
                                </Nav.Item>
                            </Nav.Link>

                            <Nav.Link href="/friends" eventKey="/friends" className="header-middle-item">
                                <Nav.Item >
                                    <GoPeople size="30px" />
                                </Nav.Item>
                            </Nav.Link>


                            <Nav.Link href="/video" eventKey="/video" className="header-middle-item">
                                <Nav.Item >
                                    <GoVideo size="30px" />
                                </Nav.Item>
                            </Nav.Link>

                            <Nav.Link href="/marketplace" eventKey="/marketplace" className="header-middle-item">
                                <Nav.Item >
                                    <BsShopWindow size="30px" />
                                </Nav.Item>
                            </Nav.Link>

                            <Nav.Link href="/gaming" eventKey="/gaming" className="header-middle-item">
                                <Nav.Item >
                                    <BsController size="30px" />
                                </Nav.Item>
                            </Nav.Link>

                        </Nav>
                    </Navbar.Collapse>
                </div>

                <Navbar.Collapse>
                    <Nav className="my-2 my-lg-0" style={{ marginLeft: "auto", marginRight: "0px" }}>

                        <Nav.Link href="#menu">
                            <div className="header-right-item">
                                <MdApps size="25px" color="white" />
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#messenger">
                            <div className="header-right-item">
                                <PiMessengerLogo size="25px" color="white" />
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#notifications">
                            <div className="header-right-item">
                                <MdOutlineNotificationsNone size="25px" color="white" />
                            </div>
                        </Nav.Link>

                        <Nav.Link href="#profile-image">
                            <img src="https://scontent.fist13-1.fna.fbcdn.net/v/t39.30808-6/366156409_1324238485178760_4338614729461176337_n.jpg?_nc_cat=111&cb=99be929b-59f725be&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=_BBOY-rvQBQAX9YYQES&_nc_ht=scontent.fist13-1.fna&oh=00_AfDGMJdmstUgdK5lli_hGPTV_EhMLQ-NfCw_wgcddj9iLQ&oe=64D5FD6B" width="40px" height="40px" style={{ borderRadius: "50%" }} />
                        </Nav.Link>

                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
            </div>
    )
}

export default Header