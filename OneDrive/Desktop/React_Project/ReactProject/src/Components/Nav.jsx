// import React from 'react'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHome, faSearch } from "@fortawesome/free-solid-svg-icons"
import './Nav.css'
import { Link } from "react-router-dom"
const Nav = () => {
  return (
    <>
      <div className="nav1">
      <div className="home-icon">
        <span>
            <Link to='/Home'>
            <FontAwesomeIcon icon={faHome}  style={{cursor:'pointer'}}/>
            </Link>
        </span>
      </div>
      <div className="nav-links">
        <ul>
            <Link to='/syntax'><li>LearnWithSyntax</li></Link>
            <Link to='/videos'><li>LearnWithVideos</li></Link>
            <Link to='/puzzels'><li>LearnWithPuzzles</li></Link>
            <Link to='/AI'><li>LearnWithAi</li></Link>
            <Link to='/compailer'><li>Compailer</li></Link>
        </ul>
      </div>
      <div className="search">
        <span className='myspan'>
            <FontAwesomeIcon icon={faSearch} className="searchicon" />
        </span>
        <input type="serach" name="" id="" />
      </div>
      </div>
    </>
  )
}

export default Nav
