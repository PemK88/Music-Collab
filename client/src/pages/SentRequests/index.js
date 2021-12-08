import React, { useState, useEffect } from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import PropTypes from 'prop-types';
import FollowList from '../../components/FollowList';
import { getUserByID } from '../../actions/user';
import { getSentRequests } from '../../actions/request';



function SentRequests (props) {

    const [requests, setRequest] = useState();
    const [noRequests, setNoRequest] = useState();
    const [viewedRequest, setViewed] = useState();
    const [user, setUser] = useState()

    const setUserInfo  = (data) => {
        setUser(data);
    }
    const setSentRequests  = (data) => {
        setRequest(data);
    }

    useEffect(() => {

            if(props.currentUser && props.currentUser.id) {
                getUserByID(props.currentUser.id, setUserInfo)
                getSentRequests(props.currentUser.id, setSentRequests)
            }

    })



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
