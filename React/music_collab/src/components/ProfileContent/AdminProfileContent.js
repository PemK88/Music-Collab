import React, { useState } from 'react';
import PropTypes from 'prop-types';
import "./styles.css";


function AdminProfileContent (props) {

    const generateLogs = (list) => {
        if(!list) return;

        return list.map((log, idx) => {
            return (
                <li key={idx}>
                    <p>{log}</p>
                </li>
            );   
        });
    
    };



    const activityLogBox = () => { return (
                                <div className="large-dark-box">
                                    <h3 className="box-title">Activity Log</h3>
                                    <div>
                                        <ul>
                                        {generateLogs(props.currentUser.activityLog)}
                                        </ul>
                                    </div>
                                </div>
    );};


    return (
        <div id="profile-content">  
            {activityLogBox()}
        </div>
    )

}

AdminProfileContent.propTypes = {
    currentUser: PropTypes.object,
    externalView: PropTypes.bool,
}

export default AdminProfileContent;