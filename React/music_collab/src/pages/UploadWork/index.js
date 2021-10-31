import React from 'react';
import PropTypes, { func } from 'prop-types';
import "./styles.css";
import UploadWorkDetails from '../../components/UploadWorkDetails';
import UploadCoverPhoto from '../../components/UploadCoverPhoto';

function UploadWork (props) {

    return (
        <div id = "page">
            <UploadWorkDetails/>
            <UploadCoverPhoto currentUser={props.currentUser}/>
        </div>
        
    );

}

UploadWork.propTypes = {
    currentUser: PropTypes.object
};

export default UploadWork;