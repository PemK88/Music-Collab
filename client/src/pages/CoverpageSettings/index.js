import React, { useState, useEffect }  from 'react';
import PropTypes from 'prop-types';
import "./styles.css";
import EditWorkDetails from '../../components/UploadWorkDetails/EditWorkDetails';
import { getPost } from '../../actions/post';
import { getUserByID } from '../../actions/user';
import { useLocation } from 'react-router';

function CoverpageSettings (props) {

    const location = useLocation();
    const { postId } = location.state;
    const [user, setUser] = useState();
    const [post, setPost] = useState();

    const updateUser = (id, setState) => {

        getUserByID(id, setState) 

    }

    const updateWithCurrentId = () => {

        updateUser(props.currentUser.id, setUser)

    }

    const updatePost = (data) => {
        setPost(data)
    }

    useEffect(() => {

        if(props.currentUser && props.currentUser.id){
            updateWithCurrentId();
        }

    }, [props.currentUser])

    useEffect(() => {

       //get post
       getPost(postId, updatePost)

    }, [])

    return (
        <div className="page">
            {post && user && <EditWorkDetails currentUser={user} currentPost={post} updateUser={updateWithCurrentId}/>}
        </div>
        
    );

}

CoverpageSettings.propTypes = {
    currentUser: PropTypes.object
};

export default CoverpageSettings;