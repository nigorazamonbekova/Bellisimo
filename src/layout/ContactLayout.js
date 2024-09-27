import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

function ContactLayout() {
  return (
    <div className="container">
        <div >
        <h1>Contact 📞</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur eligendi magni harum! Cupiditate ipsa, minus aliquid quibusdam exercitationem dolorem delectus dicta voluptatem ducimus. Ipsam, quam, beatae saepe, illo eveniet architecto deleniti quisquam aliquam iure placeat cumque? Dicta doloremque nisi repellendus sequi consequatur incidunt veritatis sint quasi dolorum error sit laboriosam praesentium reiciendis quia deserunt rerum odit eveniet harum repellat vero, mollitia at vel? Inventore ab, eum, fuga sequi repudiandae nobis temporibus facilis accusamus, totam delectus qui id. Tempore quia laboriosam quidem voluptas, accusantium dolore. Magni, eveniet? Deserunt voluptatum a rerum.</p>
        </div>

        <nav className="nest">
            <NavLink to="faq">Faq</NavLink>
            <NavLink to= "form">Form</NavLink>
        </nav>
        <Outlet/>

    </div>
  )
}

export default ContactLayout