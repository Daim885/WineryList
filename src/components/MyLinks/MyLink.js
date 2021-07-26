import React from "react"

import { Link } from "gatsby"

import "./MyLink.css"

const MyLink = ({ to, children }) => {
  return (
    <Link to={to} className="my-link">
      {children}
    </Link>
  )
}

export default MyLink
