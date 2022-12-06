import React from 'react'
import './OptionBar.css'

export default function OptionBar() {
  return (
    <div className='container'>
      <button className='blue'>Popularity</button>
      <button>Price (lowest first)</button>
      <button>Reviews</button>
      <button>Discount</button>
    </div>
  )
}