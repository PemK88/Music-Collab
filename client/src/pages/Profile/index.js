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
    const [user, setUser] = useState();
    const [loggedUser, setLoggedUser] = useState();

    const updateUser = (id, setState) => {

        getUserByID(id, setState) 

    }

    const updateLoggedUser = () => {

        updateUser(props.currentUser.id, setLoggedUser)

    }
    const updateWithUserId = () => {

        updateUser(userId, setUser)

    }
    const updateWithCurrentId = () => {

        updateUser(props.currentUser.id, setUser)

    }


    useEffect(() => {

            if(userId){
                console.log("this is userID")
                updateWithUserId();
            }
            else if(props.currentUser && props.currentUser.id){
                updateWithCurrentId();
            }

            if(props.currentUser && userId && props.currentUser.id) {
                if(props.currentUser.id !== userId) {
                    setExternalView(true)
                }
                else{
                    setExternalView(false)
                }
            }
            if(props.currentUser && props.currentUser.id) {
                updateLoggedUser(); 
            }
    
        // if(props.currentUser && userId) {
        //     console.log("in here")
        //     if(props.currentUser._id !== userId) {
        //         if(passedUser) {
        //             userId === passedUser._id ? setUser(passedUser) : getUser()
        //         }
        //         else {
        //             getUser()
        //         }
        //         setExternalView(true);
        //     }
        //     else {
        //         setUser(props.currentUser)
        //         setExternalView(false);
        //     }
        // }
  
    }, [userId, props.currentUser])

    const toggleView = () => {
        setExternalView(!externalView);
    };


    return (
       <div className="page"> 
           {user && <ProfileHeader externalView={externalView} currentUser={user} page={'profile'} toggleView={toggleView} loggedUser={loggedUser} updateUser={updateWithUserId} updateLoggedUser={updateLoggedUser}/>}
           {user && <ProfileContent user={user} externalView={externalView} updateUser={updateWithUserId}/>}
        </div>

    );
    
}

Profile.propTypes = {
    currentUser: PropTypes.object
};

export default Profile;