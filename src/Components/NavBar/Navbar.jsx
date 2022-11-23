import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='nav-bar'>
      <img src='./logo.png' alt='' srcset='' />
      <ul className='list--container'>
        <li className='list--item'>
          English 
          <img src='./dropdown.png' alt='' srcset='' className='align-img' />
        </li>
        <li className='list--item'>
          USD
          <img src='./dropdown.png' alt='' srcset='' className='align-img' />
        </li>
        <li className='list--item'>My Account</li>
        <li className='list--item'>Logout</li>
      </ul>
      {/* <Menu
        className={'my-menu'}
      >
        <ul>
          <li id='home' className='menu-item'>
            English
          </li>
          <li id='about' className='menu-item' href='/currency'>
            USD
          </li>
          <li id='contact' className='menu-item' href='/myaccount'>
            My Account
          </li>
          <li id='contact' className='menu-item' href='/logout'>
            Log out
          </li>
        </ul>
      </Menu> */}
    </nav>
  )
}
