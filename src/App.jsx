import { Route, Routes } from 'react-router-dom'
import './styles/App.css'
import Header from './components/header/Header'
import Home from "./components/home/Home"
import Friends from "./components/friends/Friends"
import Video from "./components/video/Video"
import Marketplace from "./components/market/Marketplace"
import Gaming from "./components/gaming/Gaming"
import NotFound from "./components/NotFound"

import { useState } from 'react'
import HeaderToggledMenu from './components/header/HeaderToggledMenu'

function App() {

  const [toggle,setToggle] = useState(false)
  

  return (
    <div className='App'>
        <Header toggle={toggle} setToggle={setToggle}/>

        <div className="toggled-menu-container">
            {
                toggle && <HeaderToggledMenu />
            }
        </div>

        <div className={toggle?"displayNone":""}>    
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/friends" element={<Friends/>} />
          <Route path="/video" element={<Video/>} />
          <Route path="/marketplace" element={<Marketplace />} />
          <Route path="/gaming" element={<Gaming/>} />

          <Route path="*" element={<NotFound/>} />
        </Routes>
        </div>

    </div>
  )
}

export default App
