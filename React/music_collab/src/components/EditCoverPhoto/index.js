import React from 'react';
import "./styles.css";
import PropTypes from 'prop-types';
import {Link } from "react-router-dom";

function EditCoverPhoto(props) {

    return(
        <div id="upload-container">
            <div id="cover-photo-container">
                <img id="cover-photo-upload" src={props.coverImageSrc} alt={"Cover"}/>
                <label id="change-cover-photo-label" htmlFor="photo">Select Cover Photo</label>
                <input name="coverImage" id="photo" type="file" accept=".png, .jpg, .jpeg" onChange={props.handleImgChange}/>
            </div>
            <Link to="/CoverPage"><button className='btn' id='upload-btn' onClick={() => props.saveChanges()}> Save Changes</button></Link>
        </div>
        

    );
    
}

EditCoverPhoto.propTypes = {
    coverImageSrc: PropTypes.string,
    handleImgChange: PropTypes.func,
    saveChanges: PropTypes.func
}

export default EditCoverPhoto;