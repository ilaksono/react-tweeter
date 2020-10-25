import React, { useState, useEffect } from 'react';
import './App.css';
import { Navigation } from './components/Navigation.js';
import { Profile } from './components/Profile.js';
import { TweetForm } from './components/TweetForm.js';
import { Tweet } from './components/Tweet.js';
import { Anchor } from './components/Anchor.js';
const initialData = [
  {
    name: 'Ian L',
    handle: '@ilaks',
    profile_image: "https://i.imgur.com/73hZDYK.png",
    text: 'This is some text',
    date: '10 days ago'
  },
  {
    name: `Ian's Enemies`,
    handle: '@baddie',
    profile_image: "https://i.imgur.com/73hZDYK.png",
    text: 'I am sad',
    date: '9 days ago'
  }
]


function App() {
  const [tweetsData, setTweetData] = useState(initialData);
  const tweets = tweetsData.map((val, index) => <Tweet key={index} tweet={val} />);
  const addNewTweet = (tweetText) => {
    const newTweet = {
      name: 'Ian',
      handle: '@ilaks',
      profile_image: "https://i.imgur.com/73hZDYK.png",
      text: tweetText,
      date: new Date().toDateString()
    }
    // const newList = tweetsData.push(newTweet);

    setTweetData([...tweetsData, newTweet]);
  }


  return (
    <div className="App" id='top'>
      <Navigation/>
      <div className='media-container'>
        <Profile />
        <main className='container'>
          <TweetForm addNewTweet={addNewTweet} />
          <section className='tweet-log'>{tweets}</section>
        </main>
      </div>
      <Anchor />
    </div>
  );
}

export default App;
