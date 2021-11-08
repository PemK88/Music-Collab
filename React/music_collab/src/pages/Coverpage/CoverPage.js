import React, { useState } from 'react';
import CoverHeader from '../../components/CoverHeader';
import CoverContent from '../../components/CoverContent';
import "./styles.css";
import mp3file from '../../data/bensound-downtown.mp3';
import PropTypes from 'prop-types';


function CoverPage (props) {

    const [externalView, setExternalView] = useState(false);
    

    //will check if the currentUserid provided through link matches the curentUser Id
    //If it does not, a get request will be made to get the currentUser's information

    const toggleView = () => {
        setExternalView(!externalView);
    };


    return (
       <div className="page"> 
<<<<<<< HEAD
            <CoverHeader externalView={externalView} currentPost={props.currentPost} currentUser={props.currentUser} setUserInfo={props.setUserInfo} page={'cover'} toggleView={toggleView}/>
=======
            <CoverHeader externalView={externalView} currentPost={props.currentPost} currentUser={props.currentUser} setWork={props.setWork} page={'cover'} toggleView={toggleView} mp3file={mp3file}/>
>>>>>>> ccded3f10dfb9e94b0eff76bf0d06e056f0090a5
            <CoverContent setComment={props.setComment} externalView={externalView} currentPost={props.currentPost} currentUser={props.currentUser}/>
        </div>

    );
    
}

CoverPage.propTypes = {
    currentUser: PropTypes.object,
    currentPost: PropTypes.object,
    setComment: PropTypes.func,
    setUserInfo: PropTypes.func
};

export default CoverPage;