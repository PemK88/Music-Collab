import './App.css';
import Profile from './pages/Profile';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import React, { useState } from 'react';
import profile_photo from './data/profile/profile_photo.jpeg'
import profile_photo2 from './data/profile/profile_photo2.jpeg'
import album_cover from './data/album_cover.jpeg';
import album_cover2 from './data/album_cover2.jpeg';
import album_cover3 from './data/album_cover3.jpeg';
import ProfileSettings from './pages/ProfileSettings';
import UploadWork from './pages/UploadWork';
import Follows from './pages/Followers';
import NavigationBar from './components/NavigationBar';
import Features from './pages/Features';

function App() {

  const [currentUser, setCurrentUser] = useState({
    id: 1,
    imgSrc: profile_photo,
    profileName:'Beat Maker',
    username: 'user',
    password: 'user',
    email: 'user@user.com',
    interests: ['R&B','Pop'],
    followersNum: 4,
    followingsNum: 4,
    bio: "you can always adjust your introductory paragraph later. Sometimes you just have to start writing. You can start at the beginning or dive right into the heart of your essay.",
    //The 2 arrays bellow will contain only ids and calls to the server will be made to get the other attributes
    works: [{
        id: 1,
        imgSrc: album_cover,
        title: 'Pain',
        artist: 'Beat Maker'}],
    downloadedWorks: [{
        id: 8,
        imgSrc: album_cover2,
        title: 'Iconology',
        artist: 'MissyE'},
        {
          id: 3,
          imgSrc: album_cover3,
          title: 'Fine Line',
          artist: 'Harry Styles'}],
    followers: [{
      id: 2,
      imgSrc: profile_photo2,
      profileName: 'Singer 101'}],
    followings: [{
      id: 2,
      imgSrc: profile_photo2,
      profileName: 'Singer 101'}]
});

  return (
    //this should be home page
    <div>
        <BrowserRouter>
         <NavigationBar/>
          <Switch> 
            <Route exact path='/Profile' render={() => (<Profile currentUser={currentUser}/>)}/>
            <Route exact path='/ProfileSettings' render={() => (<ProfileSettings currentUser={currentUser}/>)}/>
            <Route exact path='/UploadWork' render={() => (<UploadWork currentUser={currentUser}/>)}/>
            <Route exact path='/Followers' render={() => (<Follows currentUser={currentUser}/>)}/>
            <Route exact path='/Followings' render={() => (<Follows currentUser={currentUser}/>)}/>
            <Route exact path='/Features' render={() => (<Features/>)}/>
          </Switch>
        </BrowserRouter>
      </div>
  );
}

export default App;
