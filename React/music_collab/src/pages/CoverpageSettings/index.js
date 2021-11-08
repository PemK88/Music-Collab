import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";
import UploadWorkDetails from '../../components/UploadWorkDetails';
import ProfileHeader from '../../components/ProfileHeader';

function CoverpageSettings (props) {

    return (
        <div className="page">
            <UploadWorkDetails currentUser={props.currentUser}/>
            {/* <UploadCoverPhoto currentUser={props.currentUser}/> */}
        </div>
        
    );

}

CoverpageSettings.propTypes = {
    currentUser: PropTypes.object
};

export default CoverpageSettings;