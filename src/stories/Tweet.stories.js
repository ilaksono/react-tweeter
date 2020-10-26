import React from 'react';
import {Tweet} from '../components/Tweet';

export default { title: 'Singular Tweet'}

export const emptyTweet = () => <Tweet tweet={{}}/>

export const populatedTweet = () => {
  const singleTweet = {
    name: `Ian's Enemies`,
    handle: '@baddie',
    profile_image: "https://i.imgur.com/73hZDYK.png",
    text: 'I am sad',
    date: '9 days ago'
  };

  return <Tweet tweet={singleTweet}/>
  
}