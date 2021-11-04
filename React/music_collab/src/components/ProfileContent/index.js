import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./styles.css";


function ProfileContent (props) {

    const[editMode, setEditMode] = useState(false);
    const[editBtnVal, setEditBtnVal] = useState('Edit');

    const generateWorks = (works) => {
        if(!works) return;
        return works.map((work, idx) => {
            return (
                <li key={idx}>
                    <img src={work.imgSrc} alt='work cover'/>
                    <Link className="profile-works-link" to={{
                        pathname:'/coverpage',
                        id: work.id
                    }}>{work.title}</Link> 
                </li>
            );   
        });
    
    };

    const generateInterests = (list) => {
        if(!list) return;

        return list.map((interest, idx) => {
            return (
                <li key={idx}>
                    <p className="btn">{interest}</p>
                </li>
            );   
        });
    
    };

    const handleEdit = () => {
        if(editMode === false) {
            setEditMode(true);
            setEditBtnVal('Save');
        } else {
            //onSave a post request will be made with the new bio
            setEditMode(false);
            setEditBtnVal('Edit');
        }
        
    }


    const worksBox = () => { return (
                                <div className="large-dark-box">
                                    <h3 className="box-title">Works</h3>
                                    <div className="profile-works">
                                        <ul className="small-works-list">
                                        {generateWorks(props.currentUser.works)}
                                        </ul>
                                    </div>
                                </div>
    );};

    const bioBox = () => { return (
                                <div className={props.externalView ? "tall-small-dark-box" : "small-dark-box"}>
                                    <h3 className="box-title">Biography</h3>
                                    <div id="bio-container">
                                        <textarea className="bio-text-box" name="biography" defaultValue={props.currentUser.bio} readOnly={props.externalView || (!props.externalView && !editMode)}/>
                                    </div>
                                    {!props.externalView && <button className="box-btn" onClick={handleEdit}>{editBtnVal}</button>}
                                </div>
    );};

    const interestsBox = () => { return (
                                <div className="tall-small-dark-box">
                                    <h3 className="box-title">Interests</h3>
                                    <ul id="interests-list">
                                        {generateInterests(props.currentUser.interests)}
                                    </ul>
                                    </div>
    );};

    const downloadsBox = () => { return ( 
        <div className="small-dark-box height-25">
            <h3 className="box-title">Downloads</h3>
            <div className="profile-works">
                <ul className="small-works-list">
                    {generateWorks(props.currentUser.downloadedWorks)}
                </ul>
            </div>
        </div>
    );};



    return (
        <div id="profile-content">
            {!props.externalView && bioBox()}
            {props.externalView && 
                (<div id="top-profile-content">
                    {bioBox()}
                    {interestsBox()}
                </div>)}
            {!props.externalView && downloadsBox()}      
            {worksBox()}

            
        </div>
    )

}

ProfileContent.propTypes = {
    currentUser: PropTypes.object,
    externalView: PropTypes.bool,
}

export default ProfileContent;