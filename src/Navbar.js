import React,{useState, useEffect} from 'react'
import "./Navbar.css"

function Navbar() {
    const [show,handleShow]=useState(false);
    
  useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true)
            }else handleShow(false)
        })
      return () => {
          window.removeEventListener("scroll");
      }
  }, [])
    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <img
            alt="nil"
            className="nav__logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png"
            />
            <img
            alt="nil"
            className="nav__avatar"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNsCijZ2c7h4d0Qv44cGVOe8Y8NYRj_pZq-Q&usqp=CAU"/>

        </div>
    )
}

export default Navbar
