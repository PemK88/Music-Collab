import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import "./styles.css";



function RequestHeader (props) {

    return(
        <div className="profile-header no-overflow">
            <div id="hidden-container">
            
            <div class="sidenav">
            <a href="#about">About</a>
            <a href="#services">Services</a>
            <a href="#clients">Clients</a>
            <a href="#contact">Contact</a>
            </div>
        </div>
        </div>

    )
}

RequestHeader.propTypes = {
    requests: PropTypes.object,
    setViewedRequest: PropTypes.func,
    sentRequest: PropTypes.bool
};

export default RequestHeader;
