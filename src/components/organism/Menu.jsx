import React from 'react'
import '../../styles/components/Menu.scss'

const Menu = () => {
  return (
    <article className="desktop__menu">
      <ul>
        <li>
          <a href="/" className="title">My orders</a>
        </li>

        <li>
          <a href="/">My account</a>
        </li>

        <li>
          <a href="/">Sign out</a>
        </li>
      </ul>
    </article>
  )
}

export {Menu}
