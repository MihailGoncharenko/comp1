import React from 'react'

function Cards({ image, ...props }) {
  return (
    <div style={{ width: '18rem' }}>
      {image && <img src={image.src} className="card-img-top"/>}
      <div className="card-body">
        {props.children}
      </div>
    </div>
  )
}


export default Cards