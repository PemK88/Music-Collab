import React, { useState } from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import PropTypes from 'prop-types';
import FollowList from '../../components/FollowList';
import { useLocation } from 'react-router';
import { getUserByID } from '../../actions/user';



function Follows (props) {
    const location = useLocation();
    const {header, user, externalView} = location.state;
    const [otherUser, setUser] = useState(user);


    const updateOtherUser = () => {
        getUserByID(otherUser._id, setUser);
    }

    return (
        <div className="page">
            <ProfileHeader externalView={externalView} currentUser={otherUser} page={header === 'Followings'? 'followings':'followers'} loggedUser={props.currentUser}
                updateUser={props.updateUser} updateOtherUser={updateOtherUser}/>
            <FollowList header={header} list={otherUser ? (header === 'Followings'? otherUser.followings : otherUser.followers) : []} user={user} />
        </div>
    );
}

Follows.propType = {
    currentUser: PropTypes.object,
    updateUser: PropTypes.func
};

export default Follows;
