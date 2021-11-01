import React from 'react';
import "./styles.css";
import PropTypes from 'prop-types';
import ProfileSettingsHeader from '../../components/ProfileSettingsHeader';
import ProfileSettingsContent from '../../components/ProfileSettingsContent';



function ProfileSettings (props) {
   
    return (
        <div id="page"> 
             <ProfileSettingsHeader imgSrc={props.currentUser.imgSrc} username={props.currentUser.username}/>
             <ProfileSettingsContent currentUser={props.currentUser}/>
        </div>
 
     );


}

ProfileSettings.propTypes = {
    currentUser: PropTypes.object
};

export default ProfileSettings;