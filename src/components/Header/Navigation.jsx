import React from 'react'
import style from './style.module.css'
import { Link } from 'react-router-dom'
function Navigation() {
  return (
    <div className={style.navigation}>
        <div className="logo">
            <h1>Tiigsi</h1>
        </div>
        <div className={style.munes}>
            <ul>
                <li>Hom</li>
                <li>Service</li>
                <li><Link to={"/About"}>About</Link></li>
                <li><Link to={"/Blog"}>Blog</Link></li>
                <li>Blog</li>
                </ul>
        </div>
    </div>
  )
}

export default Navigation