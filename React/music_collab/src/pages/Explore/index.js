import React, { useState } from 'react';
import ExploreContent from '../../components/ExploreContent';
import "./styles.css";
import PropTypes from 'prop-types';
import SearchBar from '../../components/SearchBar';

function Explore (props) {

    const [externalView, setExternalView] = useState(false);

    //will check if the currentUserid provided through link matches the curentUser Id
    //If it does not, a get request will be made to get the currentUser's information

    const toggleView = () => {
        setExternalView(!externalView);
    };

    return (
       <div className="page"> 
            <SearchBar currentUser={props.currentUser} externalView={externalView}/>
            {/* <ExploreContent currentUser={props.currentUser} externalView={externalView}/> */}
        </div>

    );
    
}

Explore.propTypes = {
    currentUser: PropTypes.object
}

export default Explore;
