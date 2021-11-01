import React, { useState } from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileContent from '../../components/ProfileContent';
import "./styles.css";
import PropTypes from 'prop-types';

function Profile (props) {

    const [externalView, setExternalView] = useState(false);


    return (
       <div id="page"> 
            <ProfileHeader imgSrc={props.currentUser.imgSrc} followersNum={props.currentUser.followersNum} followingsNum={props.currentUser.followingsNum} 
                externalView={externalView} profileName={props.currentUser.profileName}/>
            <ProfileContent works={props.currentUser.works} downloadedWorks={props.currentUser.downloadedWorks} externalView={externalView} bio={props.currentUser.bio}/>
        </div>

    );
    
}

Profile.propTypes = {
    currentUser: PropTypes.object
};

export default Profile;