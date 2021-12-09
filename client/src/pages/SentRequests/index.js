import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserByID } from '../../actions/user';
import { getSentRequests } from '../../actions/request';
import RequestsHeader from '../../components/RequestsHeader';


function SentRequests (props) {

    const [requests, setRequest] = useState([]);
    const [viewedRequest, setViewed] = useState();
    const [user, setUser] = useState()

    const setUserInfo  = (data) => {
        setUser(data);
    }
    const setSentRequests  = (data) => {
        setRequest(data);
    }
    const setViewedRequest  = (data) => {
        setViewed(data);
    }

    useEffect(() => {

            if(props.currentUser && props.currentUser.id) {
                getUserByID(props.currentUser.id, setUserInfo)
                getSentRequests(props.currentUser.id, setSentRequests)
            }

    }, [])


    return (
        <div className="page">
            {(requests.length !== 0) && <RequestsHeader requests={requests} setViewedRequest={setViewedRequest} sentRequest={true}/>}
        </div>
    );
}

SentRequests.propType = {
    currentUser: PropTypes.object
};

export default SentRequests;
