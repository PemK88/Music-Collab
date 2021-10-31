import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./styles.css";
import "../buttons.css";

function ProfileHeader (props) {

    const handleReport = () => {
        console.log('Are you sure you want to report this user?');
    };

    const handleLogout = () => {
        console.log('Direct to logout page');
    };

    return(
        <div id="profileHeader">
            
            <img id="profilePhoto" src={props.imgSrc}/>
            <h2 id="profileName">{props.profileName}</h2>
            <br/>
            {props.externalView && <button id="followBtn" className="btn">Follow</button>}
            <div className="profileStats">
                <ul>
                    <li>Followers<span className="profileStatsNum">{props.followersNum}</span></li>
                    <li>Following<span className="profileStatsNum">{props.followingsNum}</span></li>
                </ul>
            </div>
            {props.externalView && <button id="reportBtn" className="btn" onClick={handleReport}>Report</button>}
            {!props.externalView && <button id="logoutBtn" className="btn" onClick={handleLogout}>Logout</button>}
        </div>
    )
}

ProfileHeader.propTypes = {
    imgSrc: PropTypes.string,
    externalView: PropTypes.bool,
    followersNum: PropTypes.number,
    followingsNum: PropTypes.number,
    profileName: PropTypes.string
};

export default ProfileHeader;
