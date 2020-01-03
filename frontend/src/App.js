/* eslint-disable react/jsx-filename-extension */

import React from 'react';
import './App.css';
import TweetList from './TweetList';

function App() {
  return (
    <div className="App">
      <div className="header">Tweets Retweeted</div>
      <TweetList />
    </div>
  );
}

export default App;
