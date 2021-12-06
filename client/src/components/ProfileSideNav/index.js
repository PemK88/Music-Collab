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
                    user: props.currentUser ? props.currentUser : {},
                    externalView: props.externalView ?  props.externalView : false
                }}} className={followersClass}>Followers: <span className="internal-profile-stats-num">{props.currentUser ? props.currentUser.followers.length : ""}</span></Link>
            <Link to={{
                pathname: "/Followings",
                state: {
                    header: "Followings",
                    user: props.currentUser ? props.currentUser : {},
                    externalView: props.externalView ?  props.externalView : false
                }}} className={followingsClass}>Following: <span className="internal-profile-stats-num">{props.currentUser ? props.currentUser.followings.length : ""}</span></Link>
            <Link to={{
                pathname: (props.loggedUser &&  props.currentUser) ?  ((props.loggedUser._id === props.currentUser._id ) ? "/Profile" : `/Profile/${props.currentUser.profileName}`) : "/Profile",
                state: {
                    userId: props.currentUser ? props.currentUser._id : "",
                    passedUser: props.currentUser
                }}}
                className={profileClass}>Profile</Link>
            {!props.externalView && <Link to="/UploadWork" className={uploadClass}>Upload Work</Link>}
            {!props.externalView && <Link to="/ProfileSettings" className={settingsClass}>Settings</Link>}   
        </div>
    );
}

ProfileSideNav.propTypes = {
    page: PropTypes.string,
    currentUser: PropTypes.object,
    loggedUser: PropTypes.object,
    externalView: PropTypes.bool
};

export default ProfileSideNav;
