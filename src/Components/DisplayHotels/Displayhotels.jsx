import React from 'react'
import './Displayhotel.css'

export default function DisplayHotels({ result }) {
  return (
    <section class='show'>
      <div>
        <div className='list-container showDetails'>
          <div className='one'>
            <img
              className='img-left'
              src='https://property-gallery.rakutentravelxchange.com/R32M/7PYywOG4.jpg'
              alt=''
            />
            <div className='wrapper'>
              <img
                src='https://property-gallery.rakutentravelxchange.com/R32M/7PYywOG4.jpg'
                alt=''
              />
              <img
                src='https://property-gallery.rakutentravelxchange.com/R32M/4eE039O4.jpg'
                alt=''
              />
              <img
                src='https://property-gallery.rakutentravelxchange.com/R32M/QEwA39A7.jpg'
                alt=''
              />
              <img
                src='https://property-gallery.rakutentravelxchange.com/R32M/6yVX2mo7.jpg'
                alt=''
              />
              <img
                src='https://property-gallery.rakutentravelxchange.com/R32M/Q3J0lrp4.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='two'>
            <div className='flex'>
              <p>
                <strong>{result.property.name}</strong>
              </p>
            </div>
            <p className='location'>
              {result.property.location.address},{result.property.location.city}
              ,{result.property.location.country},
              {result.property.location.countryCode}
              <span>
                <a href='/'>(View in Map)</a>
              </span>
            </p>
            <p className='ellipsis'>stan</p>
            <div className='flex showBtn'>
              <btn>Breakfast</btn>
              <btn>Free cancellation</btn>
              <btn>Pay later</btn>
              <btn>+1</btn>
            </div>
            <div className='flex badge-p'>
              <img src='badge.png' className='badge' alt='' />
              <p className='sm'>Singapore - SG Clean</p>
            </div>
          </div>
          <div className='three'>
            <img src='rating.png' alt='' className='rating' />
            <button>SAVE TODAY!</button>
            <p className='light'>Nightly avg.</p>
            <div className='flex'>
              <p className='strike'>
                SGD {result.packages[0].displayRate.value}
              </p>
              <p>
                <strong>
                  SGD
                  {result.packages[0].adjustedDisplayRate.value}
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
