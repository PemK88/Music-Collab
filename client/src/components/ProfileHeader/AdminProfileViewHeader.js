import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";
import AdminProfileNav from '../ProfileSideNav/AdminProfileNav';
import default_profile from '../../data/profile/default_profile_photo.jpeg'



function AdminProfileViewHeader (props) {

    return(
        <div className="profile-header no-overflow">
            <div id="hidden-container">
            {/* <img id="profile-photo" src={props.currentUser.profilePhotoUrl} alt={"User Profile"}/> */}
            <img id="profile-photo" src={props.currentUser.profilePhoto.imageUrl} alt={"User Profile"}/>
            <h2 id="profile-name">{props.currentUser.profileName}</h2>
            </div>
        </div>

    )
}

AdminProfileViewHeader.propTypes = {
    currentUser: PropTypes.object,
    page: PropTypes.string
};

export default AdminProfileViewHeader;