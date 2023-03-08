import React from 'react';
import './App.css';
import Post from './Post';

function App() {
  return (
    <div className="app">
      <div className="app__header">
        <img
          className="app__hearderImage"
          src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
          alt=""
        />
      </div>

      <h1>Hello World!</h1>

      <Post />
      {/*Posts*/}
      {/*Posts*/}
    </div>
  );
}

export default App;
