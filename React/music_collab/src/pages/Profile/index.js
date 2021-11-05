import React, { useState } from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileContent from '../../components/ProfileContent';
import "./styles.css";
import PropTypes from 'prop-types';

function Profile (props) {

    const [externalView, setExternalView] = useState(false);

    //will check if the currentUserid provided through link matches the curentUser Id
    //If it does not, a get request will be made to get the currentUser's information

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