import React from 'react'

const Services_Card = (props) => {
  return (
    <>
      <div className="Card">
        <img src={props.img} alt="" />
        <h1>{props.hedd}</h1>
        <p>{props.titel}</p>
      </div>
    </>
  )
}

export default Services_Card
