import React, { useState, useEffect } from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import PropTypes from 'prop-types';
import FollowList from '../../components/FollowList';
import { useLocation } from 'react-router';
import { getUserByID } from '../../actions/user';



function Follows (props) {

    const location = useLocation();
    const {header, userId} = location.state;
    const [user, setUser] = useState();
    const [loggedUser, setLoggedUser] = useState();
    const [externalView, setExternalView] = useState(false);

    const updateUser = (id, setState) => {

        getUserByID(id, setState) 

    }

    const updateLoggedUser = () => {

        updateUser(props.currentUserid, setLoggedUser)

    }
    const updateWithUserId = () => {

        updateUser(userId, setUser)

    }
    const updateWithCurrentId = () => {

        updateUser(props.currentUser.id, setUser)

    }

    useEffect(() => {

            if(userId){
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
  
    }, [userId, props.currentUser])



    return (
        <div className="page">
            {user && <ProfileHeader externalView={externalView} currentUser={user} page={header === 'Followings'? 'followings':'followers'} loggedUser={loggedUser}/>}
            {user && <FollowList header={header} list={header === 'Followings'? user.followings : user.followers} user={user}/>}
        </div>
    );
}

Follows.propType = {
    currentUser: PropTypes.object
};

export default Follows;
