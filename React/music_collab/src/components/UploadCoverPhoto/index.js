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
        <div id="uploadContainer">
            <div id="coverPhotoContainer">
                <img id="coverPhoto" src={defaultCoverPhoto} alt={"Cover"}/>
                <label id="changeCoverPhotoLabel" htmlFor="photo">Select Cover Photo</label>
                <input id="photo" type="file" accept=".png, .jpg, .jpeg"/>
            </div>
            <button type="submit" form="uploadForm" className="btn" id="uploadBtn" onChange={handleUpload}>Upload</button>
        </div>
        

    );
    
}

UploadCoverPhoto.propTypes = {
    currentUser: PropTypes.object
}

export default UploadCoverPhoto;