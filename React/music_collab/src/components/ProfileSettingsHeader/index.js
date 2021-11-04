import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";
import ProfileSideNav from '../ProfileSideNav';

function ProfileSettingsHeader (props) {

    return (
            <div className="profile-header">
                <div id="profile-photo-container">
                    <img id="profile-photo" src={props.imgSrc} alt={"User Profile"}/>
                    <label id="change-photo-label" htmlFor="photo">Change Photo</label>
                    <input id="photo" type="file" accept=".png, .jpg, .jpeg" onChange={props.handleImgChange}/>
                </div>
                <h2 id="username">{props.currentUser.username}</h2>
                <label className="header-sub-label">Username</label>
                <br/>
                <br/>
                <br/>
                <br/>
                <ProfileSideNav page={'settings'} currentUser={props.currentUser} externalView={false}/>
            </div> 
        );
}


ProfileSettingsHeader.propTypes = {
    currentUser: PropTypes.object,
    imgSrc: PropTypes.string,
    handleImgChange: PropTypes.func
};

export default ProfileSettingsHeader;