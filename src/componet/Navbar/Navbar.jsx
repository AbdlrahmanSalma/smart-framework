import { Link, NavLink } from "react-router-dom"
import './Navbar.css'
export default function Navbar() {
  return (
    <>
    



<nav className="navbar navbar-expand-lg user pb-4">
  <div className="container pt-3">
    <Link  className=" fs-2 fw-bold start" to='home'>START FRAMEWORK</Link >
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"/>
    </button>
    <div className="collapse navbar-collapse "  id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">

        <li className="nav-item  ">
          <NavLink  className="nav-link  fw-bold page" aria-current="page" to='about'>ABOUT</NavLink >
        </li>

        <li className="nav-item ">
          <NavLink  className="nav-link fw-bold page " to='PORTFOLiO'>PORTFOLiO</NavLink >
        </li>

        <li className="nav-item">
          <NavLink  className="nav-link fw-bold page " to='CONTACT'>CONTACT</NavLink >
        </li>
       
      
       
      </ul>
    </div>
  </div>
</nav>


    
    
    
    </>
  )
}
