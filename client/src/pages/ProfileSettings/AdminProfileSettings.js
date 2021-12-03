import React from 'react';
import "./styles.css";
import PropTypes from 'prop-types';
import AdminProfileSettingsHeader from '../../components/ProfileSettingsHeader/AdminProfileSettingsHeader';
import AdminProfileSettingsContent from '../../components/ProfileSettingsContent/AdminProfileSettingsContent';



function AdminProfileSettings (props) {

    return (
        <div className="page"> 
             <AdminProfileSettingsHeader currentUser={props.currentUser}/>
             <AdminProfileSettingsContent currentUser={props.currentUser}/>
        </div>
 
     );


}

AdminProfileSettings.propTypes = {
    currentUser: PropTypes.object
};

export default AdminProfileSettings;