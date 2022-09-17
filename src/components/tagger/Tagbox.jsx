import React from 'react'
import "./tagger.css"

const Tagbox = (props) => {
  return (
    <div className="tagbox">
      <p>{props.subtop}</p>
      <h2>{props.heading}</h2>
    </div>
  )
}

export default Tagbox