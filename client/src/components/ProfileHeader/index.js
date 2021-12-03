import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./styles.css";
import ProfileSideNav from '../ProfileSideNav';
import ReportPopup from '../ReportPopup';
import defaultCoverPhoto from '../../data/default_cover_photo.jpeg';


function ProfileHeader (props) {

    const [followBtnVal, setFollowBtnVal] = useState('+ Follow');
    const [followBtnId, setFollowBtnId] = useState('follow-btn');
    const [reportPopupTrigger, setReportPopupTrigger] = useState(false);

    const handleReport = () => {
        setReportPopupTrigger(!reportPopupTrigger);
    };

    //This function is here temporarily to switch between external and profile view
    const handleViewChange = () => {
        props.toggleView();
    };

    const handleFollow = () => {
        //a post request will be made to the server to update the current user's follow list
        if(followBtnVal === '+ Follow') {
            setFollowBtnVal('Unfollow');
            setFollowBtnId('unfollow-btn');
        
        } else {
            setFollowBtnVal('+ Follow');
            setFollowBtnId('follow-btn');

        }
    };

    return(
        <div className="profile-header no-overflow">
            <div id="hidden-container">
            
            <img id="profile-photo" src={props.currentUser.profilePhotoUrl ? props.currentUser.profilePhotoUrl : defaultCoverPhoto} alt={"User Profile"}/>
            <h2 id="profile-name">{props.currentUser.profileName}</h2>
            <br/>
            {props.externalView && <button id={followBtnId} className="btn" onClick={handleFollow}>{followBtnVal}</button>}
            <br/>
            <br/>
            <ProfileSideNav page={props.page} currentUser={props.currentUser} externalView={props.externalView}/>
            <br/>

            {props.page === 'profile' && <button className="btn" onClick={handleViewChange}>{props.externalView ? 'Internal View': 'External View'}</button>}
            </div>
            {props.externalView && 
                (<div id="overflow-container">
                    <ReportPopup trigger={reportPopupTrigger} handleTrigger={handleReport}/>
                    <button id="report-btn" className="btn" onClick={handleReport}>Report</button>
                </div>)}
        </div>

    )
}

ProfileHeader.propTypes = {
    externalView: PropTypes.bool,
    currentUser: PropTypes.object,
    page: PropTypes.string,
    toggleView: PropTypes.func
};

export default ProfileHeader;
