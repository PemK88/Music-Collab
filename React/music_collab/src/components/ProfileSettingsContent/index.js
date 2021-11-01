import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";


function ProfileSettingsContent (props) {

    return (
        <div id="container">
            <div id="headerContainer">
                <h1 className="pageTitle">Profile Settings</h1>
            </div>

            <div id="settingsContainer">
                <h3 className="sectionTitle">Profile</h3>
                <form id="profileForm">
                    <div className="row">
                        <label className="inputLabel">Profile Name</label>
                        <input id="profilename" type="text" className="inputBox" defaultValue={props.currentUser.ProfileName} readOnly/>
                    </div>
                    <br/>
                    <div className="row">
                        <label className="inputLabel">Email</label>
                        <input id="email" type="text" className="inputBox" defaultValue={props.currentUser.email} readOnly/>
                    </div>
                    <br/>
                    <div className="row">
                        <label className="inputLabel">Interests</label>
                        <input id="interests" type="text" className="inputBox" defaultValue={props.currentUser.interests.join(', ')} readOnly/>
                    </div>
                </form>
                <br/>
                <button type="submit" form="profileForm" className="btn sectionBtn" id="changeProfileInfoBtn">Save Changes</button>
                
                <br/>
                <br/>

                <div id="passwordContainer">
                    <h3 className="sectionTitle">Password</h3>
                    <form id="passwordForm">
                        <div className="row">
                            <label className="inputLabel">Old Password</label>
                            <input id="oldPassword" type="password" className="inputBox" defaultValue=""/>
                        </div>
                        <br/>
                        <div className="row">
                            <label className="inputLabel">New Password</label>
                            <input id="newPassword" type="password" className="inputBox" defaultValue=""/>
                        </div>
                        <br/>
                        <div className="row">
                            <label className="inputLabel">Confirm Password</label>
                            <input id="confirmPassword" type="password" className="inputBox" defaultValue=""/>
                        </div>
                    </form>
                    <br/>
                    <button type="submit" form="passwordForm" className="btn sectionBtn" id="changePasswdBtn">Change Password</button>

                </div>
            </div>
        </div>

            
    );
}
    

ProfileSettingsContent.propTypes = {
    currentUser: PropTypes.object
}

export default ProfileSettingsContent;