import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./styles.css";
import ProfileSideNav from '../ProfileSideNav';
import ReportPopup from '../ReportPopup';
import defaultProfilePhoto from '../../data/default_profile_photo.jpeg';
import { addFollowing, removeFollowing } from '../../actions/user';


function RequestHeader (props) {

    return(
        <div className="profile-header no-overflow">
            <div id="hidden-container">
            
            <div class="sidenav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
            </div>
        </div>
        </div>

    )
}

RequestHeader.propTypes = {
    requests: PropTypes.object,
    setViewedRequest: PropTypes.func
};

export default ProfileHeader;
