import React from 'react'
import './Header.css'

export default function Header() {
  return (
    <div className='header'>
        <div className="headerTitles">
            <span className='headerTitleSm'>React & Node</span>
            <span className='headerTitleLg'>Blog</span>
        </div>
        <img className='headerImg' src='https://images.fineartamerica.com/images-medium-large-5/sunflower-field-in-sunset-tu-xa-ha-noi.jpg'/>
    </div>
  )
}

// https://images.fineartamerica.com/images-medium-large-5/sunflower-field-in-sunset-tu-xa-ha-noi.jpg