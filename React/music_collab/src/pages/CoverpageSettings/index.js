import React from 'react';
import PropTypes from 'prop-types';
import "./styles.css";
import EditWorkDetails from '../../components/UploadWorkDetails/EditWorkDetails';

function CoverpageSettings (props) {

    return (
        <div className="page">
            <EditWorkDetails currentUser={props.currentUser} currentPost={props.currentPost} setInfo={props.setInfo}/>
        </div>
        
    );

}

CoverpageSettings.propTypes = {
    currentUser: PropTypes.object,
    currentPost: PropTypes.object,
    setInfo: PropTypes.func
};

export default CoverpageSettings;