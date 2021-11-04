import React, { useState } from 'react';
import "./styles.css";
import PropTypes from 'prop-types';
import ProfileSettingsHeader from '../../components/ProfileSettingsHeader';
import ProfileSettingsContent from '../../components/ProfileSettingsContent';



function ProfileSettings (props) {

    const [profileImageSrc, setprofileImageSrc] = useState(props.currentUser.imgSrc);
   
    const handleImgChange = (event) => {
        const image = event.target.files[0]
        setprofileImageSrc(URL.createObjectURL(image));
    }

    return (
        <div className="page"> 
             <ProfileSettingsHeader currentUser={props.currentUser} imgSrc={profileImageSrc} handleImgChange={handleImgChange}/>
             <ProfileSettingsContent currentUser={props.currentUser} imgSrc={profileImageSrc}/>
        </div>
 
     );


}

ProfileSettings.propTypes = {
    currentUser: PropTypes.object
};

export default ProfileSettings;