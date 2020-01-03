import React from 'react';
import PropTypes from 'prop-types';
import { FaRetweet, FaHeart, FaReply } from 'react-icons/fa';
import './tweet.css';

export default class Tweet extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    const { tweet } = this.props;
    console.log(tweet);
    const text = tweet.truncated ? tweet.extended_tweet.full_text : tweet.text;
    return (
      <div className="tweet-card">
        <div>
          <img src={tweet.user.profile_image_url_https} alt="profilepic" style={{ borderRadius: 50 }} />
          &nbsp;&nbsp;&nbsp;<span>{tweet.user.name}</span>
        </div>
        <div>
          {text}
        </div>
        <div className='tweet-info'>
          <div>
            <FaRetweet />&nbsp;
            <span>{tweet.retweet_count}</span>
          </div>
          <div >
            <FaHeart />&nbsp;
            <span>{tweet.favorite_count}</span>
          </div>
          <div >
            <FaReply />&nbsp;
            <span>{tweet.reply_count}</span>
          </div>
        </div>
      </div>
    );
  }
}

Tweet.propTypes = {
  tweet: PropTypes.object,
};
