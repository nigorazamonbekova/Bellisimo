import React from 'react'
import { NavLink } from 'react-router-dom'

function NotFound() {
  return (
    <div>
        <div className="container found">
            <h1>Bunday sahifa topa olmadik 🤣</h1>
            <h2>Qaytadan yozib ko;ring 👇</h2>
          <NavLink to="/">Go Home 🏠</NavLink>

        </div>
    </div>
  )
}

export default NotFound