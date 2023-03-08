import React from 'react';
import './Post.css';

function Post() {
  return (
    <div>
        <h3>Username</h3>
        {/*header -> avatar + username*/}
        <img className="post__image" src="https://media.sproutsocial.com/uploads/meme-example.jpg" alt=""/>
        {/*image*/}
        <h4 className="post__text"><strong>Matthew</strong> Funny!</h4>
        {/*username + caption*/}
    </div>
  )
}

export default Post