import React, { useState, useEffect } from 'react';
import './layout.css';

import './TweetForm.css';
export const TweetForm = (props) => {
  const [tweetText, setTweetText] = useState('');
  const remainChars = 140 - tweetText.length;
  let color = remainChars >= 0 ? 'black' : 'red';
  const spanStyle = {
    color
  }
  useEffect(() => {
    document.getElementById('tweet-text').focus();
  },[])
  const [err, setErr] = useState('');
  const newText = (event) => {
    setErr('');
    setTweetText(event.target.value)
  }
  const errStyle = { display: err ? 'block' : 'none' };
  const [inFocus, setInFocus] = useState(false);

  useEffect(() => {
    document.getElementById('tweet-text').addEventListener('focus', () => setInFocus(true))
    document.getElementById('tweet-text').addEventListener('blur', () => setInFocus(false))
    
  },[inFocus])
  const submitTweet = event => {
    event.preventDefault();
    if (remainChars >= 0 && remainChars < 140) {
      props.addNewTweet(tweetText)
      setTweetText('');
      setErr('');
    }
    else if (remainChars < 0) {
      setErr('Too many chars');
    }
    else
      setErr('Cannot be empty');
  }
  return (
    <section className="new-tweet">
      <form onSubmit={submitTweet} className="new-tweet--form">
        <input onChange={newText} value={tweetText} name="text" id="tweet-text" rows="3" placeholder="What are you humming about?" />
        <div>
          <button type="submit">Tweet</button>
          <span className="error" style={errStyle}>{err}</span>
          <output style={spanStyle} className='counter' name="counter" for="tweet-text">{140 - tweetText.length}</output>
        </div>
      </form>
    </section>
  );
}
