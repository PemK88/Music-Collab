import React from 'react';
import "./styles.css";
import PropTypes from 'prop-types';
import ProfileSettingsHeader from '../../components/ProfileSettingsHeader';
import ProfileSettingsContent from '../../components/ProfileSettingsContent';



function ProfileSettings (props) {
   
    return (
        <div className="page"> 
             <ProfileSettingsHeader currentUser={props.currentUser}/>
             <ProfileSettingsContent currentUser={props.currentUser}/>
        </div>
 
     );


}

ProfileSettings.propTypes = {
    currentUser: PropTypes.object
};

export default ProfileSettings;