import React from "react"

import "./MyLink.css"

const MyLinkOutside = ({ href, children }) => {
  return (
    <a href={href} className="my-link">
      {children}
    </a>
  )
}

export default MyLinkOutside
