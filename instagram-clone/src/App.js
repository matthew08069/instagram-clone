import React, { useState, useEffect} from "react";
import "./App.css";
import Post from "./Post";
import {db, auth, storage} from "./firebase"

function App() {
  const [posts, setPosts] = useState([]);

  // useEffect -> Runs a piece of code based on a specific condition
  useEffect(() => {
    // Runs code
    db.collection('posts').onSnapshot(snapshot => {
    //snapshot -> refresh everytime the db updated
    setPosts(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__hearderImage"
          src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
          alt=""
        />
        <p
          className="app__hearderLine"
        />
      </div>

      <h1>Hello World!</h1>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
      }
      
    </div>
  );
}

export default App;
