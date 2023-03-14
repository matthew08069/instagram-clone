import React, { useState, useEffect} from "react";
import "./App.css";
import Post from "./Post";
import { db, auth } from "./firebase";
import { getDocs, collection, addDoc } from "firebase/firestore";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Input from '@mui/material/Input';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

function App() {
  const [posts, setPosts] = useState([]);
  const [open, setOpen] = useState(false);
  // New post states -> simple ver
  const [newUsername, setNewUsername] = useState("");
  const [newImageUrl, setNewImageUrl] = useState("");
  const [newCaption, setNewCaption] = useState("");
  // Sign up new user
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  const postsCollectionRef = collection(db, "posts");

  const getPosts = async () => {
      try {
        const data = await getDocs(postsCollectionRef);
        const filteredData = data.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id
        }));
        setPosts(filteredData);
      } catch (err){
        console.log(err);
      }
    }

  //useEffect -> Runs a piece of code based on a specific condition
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser){
        // User has logged in...
        console.log(authUser);
        setUser(authUser);

        if (authUser.displayName) {
          // Don't update user
        } else {
          // If new user
          return authUser.updateProfile({
            displayName: username
          });
        }
      } else {
        // User has logged out...
        setUser(null);
      }
    })
  }, [user, username]);

  useEffect(() => {
    getPosts();
  }, []);

  const onSubmitPost = async () => {
    try{
    await addDoc(postsCollectionRef, {
      username: newUsername, 
      imageUrl: newImageUrl, 
      caption: newCaption});

      getPosts();
    } catch (err) {
      console.log(err);
    }
  };
  
  // TODO: delete a post
  // const deletePost = async () =>{
  //   const postDoc = doc(db, "posts", id)
  //   await deletePost(postDoc);
  // };

  const signUp = (event) => {
    event.preventDefault();
    auth.createUserWithEmailAndPassword(email, password)
  };

  return (
    <div className="app">
      <Modal
        open={open}
        onClose={() => setOpen(false)}
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            <form className="app__signup">
              <center>
                <img
                  className="app__hearderImage"
                  src="https://logos-download.com/wp-content/uploads/2016/03/Instagram_Logo_2016.png"
                  alt=""
                />
              </center>
              <Input placeholder="username" type="text" value={username} onChange={(e) => setUsername(e.target.value)}></Input>
              <Input placeholder="email" type="text" value={email} onChange={(e) => setEmail(e.target.value)}></Input>
              <Input placeholder="password" type="text" value={password} onChange={(e) => setPassword(e.target.value)}></Input>
              <Button type="submit" onCLick={signUp}>Sign Up</Button>
            </form>
          </Typography>
        </Box>
      </Modal>
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

      <Button onClick={() => setOpen(true)}>Sign Up</Button>

      <h1>Hello World!</h1>
      <div>
        <input placeholder="username" onChange={(e) => setNewUsername(e.target.value)}></input>
        <input placeholder="imageUrl" onChange={(e) => setNewImageUrl(e.target.value)}></input>
        <input placeholder="caption" onChange={(e) => setNewCaption(e.target.value)}></input>
        <button onClick={onSubmitPost}>Upload</button>
      </div>

      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
        // <button onClick={() => deletePost(post.id)}>Delete Post</button>

      }
      
    </div>
  );
}

export default App;
