import React from 'react';
import './styles/Anchor.css'

export const Anchor = () => {
  const showSection = () => {
    window.scroll(0, 0);

    const element = document.getElementsByClassName('new-tweet')[0];
    if(element.style.display === 'none') element.style.display = 'block';
    
    document.getElementById('tweet-text').focus();
  }
  return (
    <div onClick={() => showSection()} className='anchor-toggle'>
      <h1>^</h1> 
    </div>
  )
}