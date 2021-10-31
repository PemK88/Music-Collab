import './App.css';
import Profile from './pages/Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import profile_photo from './data/profile/profile_photo.jpeg'
import album_cover from './data/album_cover.jpeg';
import album_cover2 from './data/album_cover2.jpeg';
import ProfileSettings from './pages/ProfileSettings';

function App() {

  const [currentUser, setCurrentUser] = useState({
    imgSrc: profile_photo,
    profileName:'Beat Maker',
    username: 'user',
    passowrd: 'user',
    email: 'beat.maker@gmail.com',
    interests: ['R&B','Pop'],
    followersNum: 100,
    followingsNum: 10,
    bio: "you can always adjust your introductory paragraph later. Sometimes you just have to start writing. You can start at the beginning or dive right into the heart of your essay.",
    works: [{
        id: 1,
        imgSrc: album_cover,
        title: 'Pain',
        artist: 'Beat Maker'}],
    downloadedWorks: [{
        id: 8,
        imgSrc: album_cover2,
        title: 'Iconology',
        artist: 'MissyE'}]
});

  return (
    //this should be home page
    <div>
        <BrowserRouter>
          <Switch> 
            <Route exact path='/Profile' render={() => (<Profile currentUser={currentUser}/>)}/>
            <Route exact path='/ProfileSettings' render={() => (<ProfileSettings currentUser={currentUser}/>)}/>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
