import React, { useState } from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import PropTypes from 'prop-types';
import FollowList from '../../components/FollowList';
import { useLocation } from 'react-router';
import { getUserByID } from '../../actions/user';



function Follows (props) {
    const location = useLocation();
    const {header, list, user, externalView} = location.state;
    // const [user, setUser] = useState(props.currentUser);
    // const [externalView, setExternalView] = useState(false);

    // const getUser = async () =>{
    //     console.log("in async")

    //     await getUserByID(userId, setUser);

    // }

    // if(props.currentUser && userId) {
    //     console.log("in here")
    //     if(props.currentUser._id !== userId) {
    //         setExternalView(true);
    //         debugger;
    //         getUser()
    //     }
        
    // }
    return (
        <div className="page">
            <ProfileHeader externalView={externalView} currentUser={user} page={header === 'Followings'? 'followings':'followers'} loggedUser={props.currentUser}/>
            <FollowList header={header} list={list} user={user} />
        </div>
    );
}

Follows.propType = {
    currentUser: PropTypes.object
};

export default Follows;
