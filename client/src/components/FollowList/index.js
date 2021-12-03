import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./styles.css";


function FollowList(props) {

    //given a list of userIds from props, a get request will be made to the server
    //to retrieve profilenames and images
    
    const generateList = (list) => {
        if(!list) return;

        return list.map((user, idx) => {
            return (
                <li key={idx}>
                    <img className="small-profile-picture"src={user.imgSrc} alt='Small Profile'/>
                    <Link className="follow-list-link" to={{
                        pathname:'/Profile',
                        userId: user.id
                    }}>{user.profileName}</Link> 
                </li>
            );   
        });
    
    };

    return (
        <div id="list-container">
            <div className="extra-large-dark-box">
                <h3 className="box-title">{props.header}</h3>
                <ul className="follow-list">
                    {generateList(props.list)}
                    {generateList(props.list)}
                    {generateList(props.list)}
                    {generateList(props.list)}
                </ul>
            </div>
        </div>
    );
}

FollowList.propTypes = {
    header: PropTypes.string,
    list: PropTypes.array
}

export default FollowList;