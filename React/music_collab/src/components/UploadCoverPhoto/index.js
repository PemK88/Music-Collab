import React from 'react';
import "./styles.css";
import PropTypes from 'prop-types';
import defaultCoverPhoto from '../../data/default_cover_photo.jpeg';

function UploadCoverPhoto(props) {

    const handleUpload = () => {
        //A call will be made to the server to upload the work
        console.log(props.currentUser.id);
    }

    return(
        <div id="upload-container">
            <div id="cover-photo-container">
                <img id="cover-photo" src={defaultCoverPhoto} alt={"Cover"}/>
                <label id="change-cover-photo-label" htmlFor="photo">Select Cover Photo</label>
                <input id="photo" type="file" accept=".png, .jpg, .jpeg"/>
            </div>
            <button type="submit" form="upload-form" className="btn" id="upload-btn" onChange={handleUpload}>Upload</button>
        </div>
        

    );
    
}

UploadCoverPhoto.propTypes = {
    currentUser: PropTypes.object
}

export default UploadCoverPhoto;