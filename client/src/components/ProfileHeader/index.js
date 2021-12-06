import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./styles.css";
import ProfileSideNav from '../ProfileSideNav';
import ReportPopup from '../ReportPopup';
import defaultCoverPhoto from '../../data/default_cover_photo.jpeg';
import { addFollowing, removeFollowing } from '../../actions/user';


function ProfileHeader (props) {

    const [followBtnVal, setFollowBtnVal] = useState();
    const [followBtnId, setFollowBtnId] = useState('follow-btn');
    const [reportPopupTrigger, setReportPopupTrigger] = useState(false);

    useEffect(() =>
    {
        if(props.externalView && props.loggedUser && props.page === 'profile'){
            if(props.loggedUser.followings.find(user => user === props.currentUser._id)) {
                setFollowBtnVal('Unfollow');
                setFollowBtnId('unfollow-btn');
            
            } else {
                setFollowBtnVal('+ Follow');
                setFollowBtnId('follow-btn');
            }
        }
    }, [props.loggedUser, props.currentUser])

    const handleReport = () => {
        setReportPopupTrigger(!reportPopupTrigger);
    };

    //This function is here temporarily to switch between external and profile view
    const handleViewChange = () => {
        props.toggleView();
    };

    const following = async (flag) => {
        try  {
            if(flag) {
                await addFollowing(props.loggedUser._id, props.currentUser._id);
                await props.updateOtherUser();
                await props.updateUser();
            }
            else {
                await removeFollowing(props.loggedUser._id, props.currentUser._id);
                await props.updateOtherUser();
                await props.updateUser();
            }

            return 1;
        }
        catch (error) {
            console.log(error)
            return 0;
        }

    }

    const handleFollow = () => {
        //a post request will be made to the server to update the current user's follow list
        if(followBtnVal === '+ Follow') {
            //add current user to logged in user follosing
            //add loggedin user to current users followers

            // addFollowing(props.loggedUser._id, props.currentUser._id);
            // props.updateOtherUser();
            // props.updateUser();
            // setFollowBtnVal('Unfollow');
            // setFollowBtnId('unfollow-btn');

            following(1).then( value => {
                if(value) {
                    setFollowBtnVal('Unfollow');
                    setFollowBtnId('unfollow-btn');
            }})

        
        } else {
            //remove current user from logged in user follosing
            //remove loggedin user from current users followers

            // removeFollowing(props.loggedUser._id, props.currentUser._id);
            // props.updateOtherUser();
            // props.updateUser();
            // setFollowBtnVal('+ Follow');
            // setFollowBtnId('follow-btn');
            following(0).then(value => {
                if(value) {
                    setFollowBtnVal('+ Follow');
                    setFollowBtnId('follow-btn');
                }
        })

        }
    };

    return(
        <div className="profile-header no-overflow">
            <div id="hidden-container">
            
            <img id="profile-photo" src={(props.currentUser && props.currentUser.profilePhotoUrl) ? props.currentUser.profilePhotoUrl : defaultCoverPhoto} alt={"User Profile"}/>
            <h2 id="profile-name">{props.currentUser ? props.currentUser.profileName : ""}</h2>
            <br/>
            {(props.externalView && props.page === 'profile') && <button id={followBtnId} className="btn" onClick={handleFollow}>{followBtnVal}</button>}
            {(props.externalView && props.page !== 'profile') && <br/>}
            <br/>
            <br/>
            <ProfileSideNav page={props.page} currentUser={props.currentUser} externalView={props.externalView} loggedUser={props.loggedUser}/>
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
    loggedUser: PropTypes.object,
    page: PropTypes.string,
    updateUser: PropTypes.func,
    updateOtherUser: PropTypes.func,
    toggleView: PropTypes.func
};

export default ProfileHeader;
