import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./styles.css";
import ReportPopup from '../ReportPopup';
import {Link } from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function ExternalCoverHeader (props) {

    const [reportPopupTrigger, setReportPopupTrigger] = useState(false);

    const [isLiked, setIsLiked] = useState(false);



    const handleReport = () => {
        setReportPopupTrigger(!reportPopupTrigger);
    };

    const handleViewChange = () => {
        props.toggleView();
    };

    const generateGenres = (list) => {
        if(!list) return;

        return list.map((interest, idx) => {
            return (
                <li key={idx}>
                    <p className="btn">{interest}</p>
                </li>
            );   
        });
    
    };

    const generateTags = (list) => {
        if(!list) return;

        return list.map((interest, idx) => {
            return (
                <li className="hashtag-cover-page" key={idx} id='descriptionTags'>
                    {'#'+ interest}
                </li>
            );   
        });
    
    };



    return(
        <div className="cover-no-overflow">
                <img id="cover-photo" src={props.currentPost.imgSrc} alt={"Song Cover"}/>
                <h3 id="profile-name">{props.currentPost.artist} - {props.currentPost.title}</h3>
                <AudioPlayer
                    src={props.currentPost.audio}
                />
                 <div id="description-box">
                    <h3 className="box-title">Description</h3>
                    <p id="description-text">{props.currentPost.description}</p>
                    <ul id="interests-list" className="no-left-padding">
                        {generateTags(props.currentPost.tags)}
                    </ul>
                    <ul id="interests-list1">
                        {generateGenres(props.currentPost.categories)}
                    </ul>
                </div>

            <ReportPopup trigger={reportPopupTrigger} handleTrigger={handleReport}/>
            <div id="coverButtons">
                {props.externalView && <a href={props.currentPost.audio} id="download-btn" className="btn" download>Download</a>}
                <Link to="Features" id="timeline-btn" className="btn">Features</Link>
                {props.externalView && <button id="report-btn" className="btn" onClick={handleReport}>Report</button>}
                {!props.externalView && <Link to="/CoverPageSetting" id="edit-btn" className="btn">Edit</Link>}
            </div>
            <br/>
            {props.page === 'cover' && <button className="btn" onClick={handleViewChange}>{props.externalView ? 'Internal View': 'External View'}</button>}
        </div>

    )
}

ExternalCoverHeader.propTypes = {
    externalView: PropTypes.bool,
    currentPost: PropTypes.object,
    currentUser: PropTypes.object,
    setWork: PropTypes.func,
    page: PropTypes.string,
    toggleView: PropTypes.func,
};

export default ExternalCoverHeader;
