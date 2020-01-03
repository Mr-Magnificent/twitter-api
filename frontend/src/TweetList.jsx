import React from 'react';
import Tweet from './Tweet';

import './tweetList.css';

class TweetList extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
    this.eventSource = new EventSource('https://twitter-twit.herokuapp.com/api/subscribe-tweets');
  }

  componentDidMount() {
    this.eventSource.onmessage = e => {
      this.updateTweets(JSON.parse(e.data));
    }
  }

  updateTweets = (data) => {
    // console.log(data);
    let arr = this.state.data;
    data.forEach((tweet) => {
      if (arr.length === 50) {
        arr.unshift(<Tweet tweet={tweet} />);
        arr.pop();
      } else {
        arr.unshift(<Tweet tweet={tweet} />);
      }
    });
    this.setState({
      data: arr
    });
  }

  render() {
    return (
      <div className="tweets-container">
        {this.state.data}
      </div>
    );
  }
}

export default TweetList;
