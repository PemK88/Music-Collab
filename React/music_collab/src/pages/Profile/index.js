import React, { useState } from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileContent from '../../components/ProfileContent';
import profile_photo from '../../data/profile/profile_photo.jpeg'
import album_cover from '../../data/album_cover.jpeg';
import "./styles.css";

function Profile () {
    
    const [currentUser, setCurrentUser] = useState({
        imgSrc: profile_photo,
        profileName:'Beat Maker',
        username: 'User101',
        followersNum: 100,
        followingsNum: 10,
        bio: "you can always adjust your introductory paragraph later. Sometimes you just have to start writing. You can start at the beginning or dive right into the heart of your essay.",
        works: [{
            imgSrc: album_cover,
            title: 'Pain',
            artist: 'Beat Maker'}]
    });


    return (
       <div id="page"> 
            <ProfileHeader imgSrc={currentUser.imgSrc} followersNum={currentUser.followersNum} followingsNum={currentUser.followingsNum} 
                externalView={true} profileName={currentUser.profileName}/>
            <ProfileContent works={currentUser.works} externalView={true} bio={currentUser.bio}/>
        </div>

    )
    
}

export default Profile;