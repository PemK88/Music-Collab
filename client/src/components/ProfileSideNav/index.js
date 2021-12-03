import React from 'react';
import "./styles.css";
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

function ProfileSideNav (props) {

    const profileClass = props.page === 'profile' ? "side-nav-link active-page": "side-nav-link";
    const settingsClass = props.page === 'settings' ? "side-nav-link active-page": "side-nav-link";
    const followingsClass = props.page === 'followings' ? "side-nav-link active-page": "side-nav-link";
    const followersClass = props.page === 'followers' ? "side-nav-link active-page": "side-nav-link";
    const uploadClass = props.page === 'upload' ? "side-nav-link active-page": "side-nav-link";
    
    return (
        <div id="side-nav">
            <Link to={{
                pathname: "/Followers",
                state: {
                    header: "Followers",
                    list: props.currentUser.followers,
                    externalView: props.externalView
                }}} className={followersClass}>Followers: <span className="internal-profile-stats-num">{props.currentUser.followersNum}</span></Link>
            <Link to={{
                pathname: "/Followings",
                state: {
                    header: "Followings",
                    list: props.currentUser.followings,
                    externalView: props.externalView
                }}} className={followingsClass}>Following: <span className="internal-profile-stats-num">{props.currentUser.followingsNum}</span></Link>
            <Link to="/Profile" className={profileClass}>Profile</Link>
            {!props.externalView && <Link to="/UploadWork" className={uploadClass}>Upload Work</Link>}
            {!props.externalView && <Link to="/ProfileSettings" className={settingsClass}>Settings</Link>}   
        </div>
    );
}

ProfileSideNav.propTypes = {
    page: PropTypes.string,
    currentUser: PropTypes.object,
    externalView: PropTypes.bool
};

export default ProfileSideNav;
