import React, { useState } from 'react';
import ExternalCoverHeader from '../../components/CoverHeader/ExternalCoverHeader';
import CoverContent from '../../components/CoverContent';
import "./styles.css";
import PropTypes from 'prop-types';


function ExternalCoverPage (props) {

    const [externalView, setExternalView] = useState(true);
    

    //will check if the currentUserid provided through link matches the curentUser Id
    //If it does not, a get request will be made to get the currentUser's information



    return (
       <div className="page"> 
            <ExternalCoverHeader externalView={externalView} currentPost={props.currentPost} currentUser={props.currentUser} setWork={props.setWork} page={'cover'}/>
            <CoverContent setComment={props.setComment} externalView={externalView} currentPost={props.currentPost} currentUser={props.currentUser}/>
        </div>

    );
    
}

ExternalCoverPage.propTypes = {
    currentUser: PropTypes.object,
    currentPost: PropTypes.object,
    setComment: PropTypes.func,
    setUserInfo: PropTypes.func
};

export default ExternalCoverPage;