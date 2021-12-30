import React from 'react'
import '../../css/basic.css'
import './footer.css'

export default function Footer() {
  return (
    <>
      <footer>
        <div className='social'>
          <a 
          href='https://github.com/FilipeGuto' 
          target='_blank' rel="noreferrer"
          >
            <i class="fab fa-github fa-3x"></i>
          </a>
          <a 
          href="https://www.linkedin.com/in/filipeguto/"
          target="_blank" rel="noreferrer"
          >
            <i class="fab fa-linkedin-in fa-3x"></i>
          </a>
        </div>
        <div className='social'>
          <h3>FilipeAugusto</h3>
        </div>
      </footer>
    </>
  )
};
