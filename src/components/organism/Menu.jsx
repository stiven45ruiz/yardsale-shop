import React from 'react'
import { Link } from 'react-router-dom'
import '../../styles/components/Menu.scss'

const Menu = () => {
  return (
    <article className="desktop__menu">
      <ul>
        <li>
          <Link to="/orders" className="title">My orders</Link>
        </li>

        <li>
          <Link to="/account">My account</Link>
        </li>

        <li>
          <Link to="/login">Sign out</Link>
        </li>
      </ul>
    </article>
  )
}

export {Menu}
