import React from 'react';
import './styles/Anchor.css'

export const Anchor = () => { 
  return (
    <div onClick={() => document.getElementById('tweet-text').focus()} className='anchor-toggle'>
      <a href='#top'>^</a> 
    </div>
  )
}