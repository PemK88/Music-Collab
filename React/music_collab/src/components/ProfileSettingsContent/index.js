import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";
import "../buttons.css";


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
                        <label className="settingLabel">Profile Name</label>
                        <input id="profilename" type="text" className="settingInput" defaultValue={props.currentUser.ProfileName} readOnly/>
                    </div>
                    <br/>
                    <div className="row">
                        <label className="settingLabel">Email</label>
                        <input id="email" type="text" className="settingInput" defaultValue={props.currentUser.email} readOnly/>
                    </div>
                    <br/>
                    <div className="row">
                        <label className="settingLabel">Interests</label>
                        <input id="interests" type="text" className="settingInput" defaultValue={props.currentUser.interests.join(', ')} readOnly/>
                    </div>
                </form>
                <br/>
                <button type="submit" form="profileForm" className="btn subBtn" id="changeProfileInfoBtn">Save Changes</button>
                
                <br/>
                <br/>

                <div id="passwordContainer">
                    <h3 className="sectionTitle">Password</h3>
                    <form id="passwordForm">
                        <div className="row">
                            <label className="settingLabel">Old Password</label>
                            <input id="oldPassword" type="password" className="settingInput" defaultValue=""/>
                        </div>
                        <br/>
                        <div className="row">
                            <label className="settingLabel">New Password</label>
                            <input id="newPassword" type="password" className="settingInput" defaultValue=""/>
                        </div>
                        <br/>
                        <div className="row">
                            <label className="settingLabel">Confirm Password</label>
                            <input id="confirmPassword" type="password" className="settingInput" defaultValue=""/>
                        </div>
                    </form>
                    <br/>
                    <button type="submit" form="passwordForm" className="btn subBtn" id="changePasswdBtn">Change Password</button>

                </div>
            </div>
        </div>

            
    );
}
    

ProfileSettingsContent.propTypes = {
    currentUser: PropTypes.object
}

export default ProfileSettingsContent;