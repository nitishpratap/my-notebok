import React from 'react'
const image = require('../images/keep_2020q4_48dp.png')
function Header() {
  return (
    <div>
        <div style={{height:'3rem',border:'2px solid grey',marginTop:'.1rem'}}>
        <div style={{display:'flex',justifyContent:'center'}}>
        <img src={image} alt='keep logo'></img>
        <h1 style={{marginLeft:'2rem'}}>Keep</h1>
        </div>
        </div>


    </div>
  )
}

export default Header