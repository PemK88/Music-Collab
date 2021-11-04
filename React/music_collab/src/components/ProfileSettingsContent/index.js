import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./styles.css";
import SelectCategories from '../SelectCategories';


function ProfileSettingsContent (props) {

    const [editProfile, setEditProfile] = useState(false);

    const handleEdit = (event) => {
        setEditProfile(!editProfile);
        event.preventDefault();
    };

    return (
        <div id="container">
            <div id="header-container">
                <h1 className="page-title">Profile Settings</h1>
            </div>

            <div id="settings-container">
                <h3 className="section-title">Profile</h3>
                <form id="profile-form">
                    <div className="row">
                        <label className="input-label">Profile Name</label>
                        <input id="profilename" type="text" className="input-box" defaultValue={props.currentUser.profileName} readOnly={!editProfile}/>
                    </div>
                    <br/>
                    <div className="row">
                        <label className="input-label">Email</label>
                        <input id="email" type="text" className="input-box" defaultValue={props.currentUser.email} readOnly={!editProfile}/>
                    </div>
                    <br/>
                    <div className="row">
                        <label className="input-label">Interests</label>
                        <SelectCategories selectedValues={props.currentUser.interests} disabled={!editProfile}/>
                        {/* <input id="interests" type="text" className="input-box" defaultValue={props.currentUser.interests.join(', ')} readOnly/> */}
                    </div>
                </form>
                <br/>
                <button type="submit" form="profile-form" className="btn section-btn" id="change-profile-info-btn" onClick={handleEdit}>
                   {editProfile ? 'Save Changes' : 'Edit'}
                </button>
                
                <br/>
                <br/>

                <div id="password-container">
                    <h3 className="section-title">Password</h3>
                    <form id="password-form">
                        <div className="row">
                            <label className="input-label">Old Password</label>
                            <input id="old-password" type="password" className="input-box" defaultValue=""/>
                        </div>
                        <br/>
                        <div className="row">
                            <label className="input-label">New Password</label>
                            <input id="new-lassword" type="password" className="input-box" defaultValue=""/>
                        </div>
                        <br/>
                        <div className="row">
                            <label className="input-label">Confirm Password</label>
                            <input id="confirm-password" type="password" className="input-box" defaultValue=""/>
                        </div>
                    </form>
                    <br/>
                    <button type="submit" form="password-form" className="btn section-btn" id="change-passwd-btn">Change Password</button>

                </div>
            </div>
        </div>

            
    );
}
    

ProfileSettingsContent.propTypes = {
    currentUser: PropTypes.object
}

export default ProfileSettingsContent;