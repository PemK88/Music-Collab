import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { getUserByID } from '../../actions/user';
import RequestsHeader from '../../components/RequestsHeader';
import { getReceivedRequests } from '../../actions/request';


function ReceivedRequests (props) {

    const [requests, setRequest] = useState([]);
    const [viewedRequest, setViewed] = useState();
    const [user, setUser] = useState()

    const setUserInfo  = (data) => {
        setUser(data);
    }
    const setReceivedRequests  = (data) => {
        setRequest(data);
    }
    const setViewedRequest  = (data) => {
        setViewed(data);
    }

    useEffect(() => {

            if(props.currentUser && props.currentUser.id) {
                getUserByID(props.currentUser.id, setUserInfo)
                getReceivedRequests(props.currentUser.id, setReceivedRequests)
            }

    }, [])


    return (
        <div className="page">
            {(requests.length!== 0) && <RequestsHeader requests={requests} setViewedRequest={setViewedRequest} sentRequest={false}/>}
        </div>
    );
}

ReceivedRequests.propType = {
    currentUser: PropTypes.object
};

export default ReceivedRequests;
