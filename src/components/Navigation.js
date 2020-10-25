import React, {useState } from 'react';
import './Navigation.css';

export const Navigation = (props) => {
  const [hide, setHide] = useState(true);
  // useEffect(() => {
    // const btn = document.getElementById('nav-btn');
    // btn.addEventListener('click', () => {
    //   document.getElementById('tweet-text').focus();
    // })
  // }, []);
  
  const hideArticle = () => {
    const target = document.getElementsByClassName('new-tweet')[0];
    if (hide) {
      target.style.display = 'none';
      setHide(false);
    }
    else {
      target.style.display = 'block';
      document.getElementById('tweet-text').focus();
      setHide(true);
    }
  }
  return (
    <nav>
      <span>tweeter</span>
      <button onClick={() => hideArticle()} id='nav-btn'>say something</button>
    </nav>
  );
}