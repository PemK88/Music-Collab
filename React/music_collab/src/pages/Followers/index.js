import React from 'react';
import ProfileHeader from '../../components/ProfileHeader';
import PropTypes from 'prop-types';
import FollowList from '../../components/FollowList';
import { useLocation } from 'react-router';


function Follows (props) {
    const location = useLocation();
    const {header, list, externalView} = location.state;
    return (
        <div className="page">
            <ProfileHeader externalView={externalView} currentUser={props.currentUser} page={header === 'Followings'? 'followings':'followers'}/>
            <FollowList header={header} list={list}/>
        </div>
    );
}

Follows.propType = {
    currentUser: PropTypes.object
};

export default Follows;
