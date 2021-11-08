import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./styles.css";
import ReportPopup from '../ReportPopup';
import {Link } from "react-router-dom";
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';


function CoverHeader (props) {

    const [reportPopupTrigger, setReportPopupTrigger] = useState(false);

    const [isLiked, setIsLiked] = useState(false);

    const useAudio = url => {
        const [audio] = useState(new Audio(url));
        const [playing, setPlaying] = useState(false);
      
        const toggle = () => setPlaying(!playing);
      
        useEffect(() => {
            playing ? audio.play() : audio.pause();
          },
          [playing]
        );
      
        useEffect(() => {
          audio.addEventListener('ended', () => setPlaying(false));
          return () => {
            audio.removeEventListener('ended', () => setPlaying(false));
          };
        }, []);
      
        return [playing, toggle];
    };

    // const Player = ({ url }) => {
    //     const [playing, toggle] = URL.createObjectURL(url));
      
    //     return (
    //         <button button id="play-btn" className="btn" onClick={toggle}>{playing ? "Pause" : "Play"}</button>
    //     );
    // };

    //const audio = new Audio(URL.createObjectURL(props.mp3file))
    const [play, setPlay] = useState(false);

    // const handlePlay = () => {
    //     if(play) {
    //         setPlay(false);
    //         audio.pause();
    //     }
    //     else {
    //         setPlay(true);
    //         audio.play();
    //     }

    // }



    const checkLiked = () => {
        const likedList = props.currentUser.likedWorks
        for (let work of likedList) {
            if (work.id == props.currentPost.id) {
                setIsLiked({isLiked: true})
            }
        }
    }

    const likePost = () => setIsLiked(!isLiked)

    const handleReport = () => {
        setReportPopupTrigger(!reportPopupTrigger);
    };

    const handleDelete = () => {
        const currID = props.currentPost.id
        const filteredUsers = props.currentUser.works.filter((w) => { return w.id != currID })
        props.setWork(filteredUsers)
    }

    const handleViewChange = () => {
        props.toggleView();
    };

    const generateTags = (list) => {
        if(!list) return;

        return list.map((interest, idx) => {
            return (
                <li key={idx} id='descriptionTags'>
                    {'#'+ interest}
                </li>
            );   
        });
    
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


    return(
        <div className="cover-no-overflow">
                <img id="cover-photo" src={props.currentPost.imgSrc} alt={"Song Cover"}/>
                <h3 id="profile-name">{props.currentPost.artist} - {props.currentPost.title}</h3>
                <AudioPlayer
                    src={props.currentPost.mp3file}
                    onPlay={e => console.log("onPlay")}
                    // other props here
                />
                <div id="coverButtons2">
<<<<<<< HEAD
                    {Player("./bensound-downtown.mp3")}
=======
>>>>>>> ccded3f10dfb9e94b0eff76bf0d06e056f0090a5
                    <button id="like-btn" className="btn" onClick={likePost}>{isLiked ? 'Like':'Unlike'}</button>
                </div>
                <div id="description-box">
                    <h3 className="box-title">Description</h3>
                    <p id="description-text">{props.currentPost.description}</p>
<<<<<<< HEAD
                    <ul id="des-list">
=======
                    <p className="hashtag-cover-page">#hurting #heal</p>
                    <ul id="interests-list">
>>>>>>> ccded3f10dfb9e94b0eff76bf0d06e056f0090a5
                        {generateTags(props.currentPost.tags)}
                    </ul>
                    <ul id="interests-list1">
                        {generateGenres(props.currentPost.categories)}
                    </ul>
            </div>
            <ReportPopup trigger={reportPopupTrigger} handleTrigger={handleReport}/>
            <div id="coverButtons">
                {props.externalView && <a href={props.currentPost.mp3file} id="download-btn" className="btn" download>Download</a>}
                <Link to="Features" id="timeline-btn" className="btn">Features</Link>
                {props.externalView && <button id="report-btn" className="btn" onClick={handleReport}>Report</button>}
<<<<<<< HEAD
                {!props.externalView && <Link to="/CoverPageSettings"><button id="edit-btn" className="btn">Edit</button></Link>}
=======
                {!props.externalView && <Link to="/" id="edit-btn" className="btn">Edit</Link>}
>>>>>>> ccded3f10dfb9e94b0eff76bf0d06e056f0090a5
            </div>
            <br/>
            {props.page === 'cover' && <button className="btn" onClick={handleViewChange}>{props.externalView ? 'Internal View': 'External View'}</button>}
        </div>

    )
}

CoverHeader.propTypes = {
    externalView: PropTypes.bool,
    currentPost: PropTypes.object,
    currentUser: PropTypes.object,
    setWork: PropTypes.func,
    page: PropTypes.string,
    toggleView: PropTypes.func,
};

export default CoverHeader;
