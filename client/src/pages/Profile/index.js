import React, { useState } from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileContent from '../../components/ProfileContent';
import "./styles.css";
import PropTypes from 'prop-types';

function Profile (props) {

    //We will check if the currentUser Id provided through a link matches the curentUser Id
    //If it does not, a get request will be made to get the user's information and external view will be set to true

    const [externalView, setExternalView] = useState(false);

    
    const toggleView = () => {
        setExternalView(!externalView);
    };


    return (
       <div className="page"> 
            <ProfileHeader externalView={externalView} currentUser={props.currentUser} page={'profile'} toggleView={toggleView}/>
            <ProfileContent currentUser={props.currentUser} externalView={externalView}/>
        </div>

    );
    
}

Profile.propTypes = {
    currentUser: PropTypes.object
};

export default Profile;