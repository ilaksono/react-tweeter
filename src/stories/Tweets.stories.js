import React from 'react';
import {Tweets} from '../components/Tweets';

export default { title: 'Tweet Container'}

export const emptyTweets = () => <Tweets/>

export const populatedTweet = () => {
  const data = [
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
  ];

  return <Tweets tweetsData={data}/>
  
}