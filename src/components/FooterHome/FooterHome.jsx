import React from 'react'
import '../../css/basic.css'
import './FooterHome.css'

export default function Footer() {
  return (
    <>
      <footer className='FooterHome'>
        <div className='social'>
          <a 
          href='https://github.com/FilipeGuto' 
          target='_blank' rel="noreferrer"
          >
            <i className="fab fa-github fa-3x"></i>
          </a>
          <a 
          href="https://www.linkedin.com/in/filipeguto/"
          target="_blank" rel="noreferrer"
          >
            <i className="fab fa-linkedin-in fa-3x"></i>
          </a>
        </div>
        <div className='social'>
          <h3>FilipeAugusto</h3>
        </div>
      </footer>
    </>
  )
};
