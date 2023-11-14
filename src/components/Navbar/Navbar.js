import React ,{useState}from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css"
function Navbar() {
  const [isSideBar, setIsSideBar] = useState(false);
  const showSideBar = ()=>{
    setIsSideBar(true)
  }
  const hideSideBar = ()=>{
    setIsSideBar(false)
  }

  return (
    <header>
        <h2 className='logo'>
            Abyssinia AI
         </h2>
        <div className="navigation">
            <Link to="/">Home</Link>
            <Link to="/ask">Ask me</Link>
            <Link to="/about">About</Link>
        </div>
        <div className='mob-nav'>
          <button className='hamburger' onClick={showSideBar}><i className='fa-solid fa-bars'></i></button>
          <div className={`sidebar ${isSideBar?"show":""}`}>
            <button onClick={hideSideBar} className='close'><i className='fas fa-times'></i></button>
            <div className='mob-lists'>
              <Link to="/">Home</Link>
              <Link to="/ask">Ask me</Link>
              <Link to="/about">About</Link>
            </div>
          </div>
        </div>
    </header>
  )
}

export default Navbar;