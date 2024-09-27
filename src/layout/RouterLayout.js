import React from 'react'
import Navbar from '../components/navbar/Navbar'
import { Outlet } from 'react-router-dom'

function RouterLayout() {
  return (
    <div>
        <nav>
            <Navbar/>
        </nav>
        <section>
            <Outlet/>
        </section>
        <footer></footer>
    </div>
  )
}

export default RouterLayout