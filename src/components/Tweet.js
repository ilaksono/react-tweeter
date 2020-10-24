import React from 'react';
import './layout.css';
import './Tweet.css';


export const Tweet = (props) => {
  const {name, text, profile_image, date, handle} = props.tweet
  return (
    <article>
      <header>
        <span>
          <span><img src={profile_image} alt='src not found' /></span>
          <span>{name}</span>
        </span>
        <span>{handle}</span>
      </header>
  <body className='tweet-body'>{text}</body>
      <footer><span>{date}</span>
        <div>
          <img src="./images/flag.png" alt='img not found' />
          <img src="./images/retweet.png" alt='img not found' />
          <img src="./images/heart.png" alt='img not found' />
        </div>
      </footer>
    </article>
  );
}