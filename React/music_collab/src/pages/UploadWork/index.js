import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";
import UploadWorkDetails from '../../components/UploadWorkDetails';
import ProfileHeader from '../../components/ProfileHeader';

function UploadWork (props) {

    return (
        <div className="page">
            <ProfileHeader externalView={false} currentUser={props.currentUser} page={'upload'}/>
            <UploadWorkDetails currentUser={props.currentUser}/>
            {/* <UploadCoverPhoto currentUser={props.currentUser}/> */}
        </div>
        
    );

}

UploadWork.propTypes = {
    currentUser: PropTypes.object
};

export default UploadWork;