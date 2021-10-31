import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";
import "../buttons.css";


function ProfileSettingsHeader (props) {

    const handleLogout = () => {
        console.log('Direct to logout page');
    };

    return (
            <div id="profileHeader">
                <div id="profilePhotoContainer">
                    <img id="profilePhoto" src={props.imgSrc}/>
                    <label id="changePhotoLabel" htmlFor="photo">Change Photo</label>
                    <input id="photo" type="file" accept=".png, .jpg, .jpeg"/>
                </div>
                <h2 id="username">{props.username}</h2>
                <label className="headerSubLabel">Username</label>
                <button id="logoutBtn" className="btn" onClick={handleLogout}>Logout</button>
            </div> 
        );
}


ProfileSettingsHeader.propTypes = {
    imgSrc: PropTypes.string,
    username: PropTypes.string
};

export default ProfileSettingsHeader;