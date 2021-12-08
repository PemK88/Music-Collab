import React, { useState, useEffect } from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import ProfileContent from '../../components/ProfileContent';
import "./styles.css";
import PropTypes from 'prop-types';
import { getUserByID } from '../../actions/user';
import { useLocation } from 'react-router';

function Profile (props) {

    //We will check if the currentUser Id provided through a link matches the curentUser Id
    //If it does not, a get request will be made to get the user's information and external view will be set to true

    const [externalView, setExternalView] = useState(false);
    const location = useLocation();
    const {userId} = location.state;
    const [user, setUser] = useState(props.currentUser);

    useEffect(() => {

        const getUser = () =>{
            console.log("in async")
    
            getUserByID(userId, setUser);
    
        }
        console.log("in profile page")
        console.log("this is userID " + userId)
        console.log("this is current User ID " + props.currentUser)

    
        if(props.currentUser && userId) {
            console.log("in here")
            if(props.currentUser._id !== userId) {
                setExternalView(true);
                debugger;
                getUser()
            }
            
        }
  
    }, [userId])

    const toggleView = () => {
        setExternalView(!externalView);
    };

    console.log("this is userID " + userId)


    return (
       <div className="page"> 
           {props.currentUser && <ProfileHeader externalView={externalView} currentUser={user} page={'profile'} toggleView={toggleView} loggedUser={props.currentUser}/>}
           {props.currentUser && <ProfileContent user={user} externalView={externalView} updateUser={props.updateUser}/>}
        </div>

    );
    
}

Profile.propTypes = {
    currentUser: PropTypes.object,
    updateUser: PropTypes.func
};

export default Profile;