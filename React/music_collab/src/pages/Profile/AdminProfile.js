import React, { useState } from 'react';
import AdminProfileHeader from '../../components/ProfileHeader/AdminProfileHeader';
import AdminProfileContent from '../../components/ProfileContent/AdminProfileContent';
import "./styles.css";
import PropTypes from 'prop-types';

function AdminProfile (props) {

    const [externalView, setExternalView] = useState(false);

    //will check if the currentUserid provided through link matches the curentUser Id
    //If it does not, a get request will be made to get the currentUser's information

    const toggleView = () => {
        setExternalView(!externalView);
    };


    return (
       <div className="page"> 
            <AdminProfileHeader externalView={externalView} currentUser={props.currentUser} page={'profile'} toggleView={toggleView}/>
            <AdminProfileContent currentUser={props.currentUser} externalView={externalView}/>
        </div>

    );
    
}

AdminProfile.propTypes = {
    currentUser: PropTypes.object
};

export default AdminProfile;