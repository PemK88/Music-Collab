import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import "./styles.css";
import UploadWorkDetails from '../../components/UploadWorkDetails';
import ProfileHeader from '../../components/ProfileHeader';
import { getUserByID } from '../../actions/user';

function UploadWork (props) {

    const [user, setUser] = useState();

    const updateUser = (id, setState) => {

        getUserByID(id, setState) 

    }

    const updateWithCurrentId = () => {

        updateUser(props.currentUser.id, setUser)

    }

    useEffect(() => {

        if(props.currentUser && props.currentUser.id){
            updateWithCurrentId();
        }

    }, [props.currentUser])


    return (
        <div className="page upload-work">
            {user && <ProfileHeader externalView={false} currentUser={user} page={'upload'} loggedUser={user}/>}
            {user && <UploadWorkDetails currentUser={user}/>}
        </div>
        
    );

}

UploadWork.propTypes = {
    currentUser: PropTypes.object
};

export default UploadWork;