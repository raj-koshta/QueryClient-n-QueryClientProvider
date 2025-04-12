import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <div>
        <NavLink to="/"> TanStack Query </NavLink>
        <ul>
          <li><NavLink to="/queryclient-n-provider/">Home</NavLink></li>
          <li><NavLink to="/queryclient-n-provider/trad">FetchOld</NavLink></li>
          <li><NavLink to="/queryclient-n-provider/rq">FetchRQ</NavLink></li>
        </ul>
      </div>
    </header>
  )
}

export default Header