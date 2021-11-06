import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./styles.css";


function ExploreContent (props) {

    const[editMode, setEditMode] = useState(false);
    const[editBtnVal, setEditBtnVal] = useState('Edit');

    const generateWorks = (works) => {
        if(!works) return;
        return works.map((work, idx) => {
            return (
                <li key={idx}>
                    <img src={work.imgSrc} alt='work cover'/>
                    <Link className="profile-works-link" to={{
                        pathname:'/Coverpage',
                        id: work.id
                    }}>{work.title}</Link> 
                </li>
            );   
        });
    
    };




    const Genre = () => { return (
                                <div className="large-dark-box">
                                    <h3 className="box-title">Genre</h3>
                                    <div className="profile-works">
                                        <ul className="small-works-list">
                                        {generateWorks(props.currentUser.works)}
                                        </ul>
                                    </div>
                                </div>
    );};

 const Trending = () => { return (
                                <div className="large-dark-box">
                                    <h3 className="box-title">Trending</h3>
                                    <div className="profile-works">
                                        <ul className="small-works-list">
                                        {generateWorks(props.currentUser.works)}
                                        </ul>
                                    </div>
                                </div>
    );};

 const NewlyUploaded = () => { return (
                                <div className="large-dark-box">
                                    <h3 className="box-title">Newly Uploaded</h3>
                                    <div className="profile-works">
                                        <ul className="small-works-list">
                                        {generateWorks(props.currentUser.works)}
                                        </ul>
                                    </div>
                                </div>
    );};



    return (
        <div id="profile-content">
            {!props.externalView}
            {props.externalView && 
                (<div id="top-profile-content">
                    {interestsBox()}
                </div>)}

            {Genre()}
            {Trending()}
            {NewlyUploaded()}

            
        </div>
    )

}
ExploreContent.propTypes = {
    currentUser: PropTypes.object,
    externalView: PropTypes.bool,
}

export default ExploreContent;
