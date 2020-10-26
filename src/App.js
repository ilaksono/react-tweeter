import React, { useState } from 'react';
import './App.css';
import { Navigation } from './components/Navigation.js';
import { Profile } from './components/Profile.js';
import { TweetForm } from './components/TweetForm.js';
import { Anchor } from './components/Anchor.js';
import {Tweets } from './components/Tweets.js';

const initialData = [
]


function App() {
  const [tweetsData, setTweetData] = useState(initialData);
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
      <Navigation />
      <div className='media-container'>
        <Profile />
        <main className='container'>
          <TweetForm addNewTweet={addNewTweet} />
          <Tweets tweetsData={tweetsData}/>
          </main>
      </div>
        <Anchor />
      </div>
  );
}

export default App;
