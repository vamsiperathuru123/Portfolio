import React from 'react';
import "./SimpleFooter.css";

export default function SimpleFooter() {
  return (
    <div className='whole_footer'>
        <div className='footer'>
            <span>| All rights are reserved | &copy;{new Date().getFullYear()},Chandravamsi.com |</span>
        </div>
    </div>

  )
}

