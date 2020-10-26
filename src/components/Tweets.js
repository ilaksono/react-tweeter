import React from 'react';
import { Tweet } from './Tweet'


export const Tweets = props => {
  const {tweetsData} = props;
  const tweets = tweetsData[0] ? tweetsData.map((val, index) => <Tweet key={index} tweet={val} />) : 'There is no tweet here';

  return (
    <section className='tweet-log'>{tweets}</section>
  )
}