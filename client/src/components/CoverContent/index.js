import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';
import { addPostComment, deleteComment } from '../../actions/post';


function CoverContent (props) {
    
    const [state, setState] = useState ({
        comment: ""
    })

    const handleInputChange = (event) => {
        const target=event.target
        const value=target.value

        setState({
            comment: value
        })
    }

    const removeComment = (comment) => {
        const filteredList = props.currentPost.comments.filter((c) => { return c !== comment })
        props.setComment(filteredList)
        deleteComment(props.currentPost.id, comment._id)
    }

    const addComment = () => {
        const commentList = props.currentPost.comments
        const newComment = {profileName: props.currentUser.profileName, comment: state.comment, userId: props.currentUser.id}
        commentList.push(newComment)
        props.setComment(commentList)
        addPostComment(newComment, props.currentPost.id)
    }

    const generateComments = (list) => {
        if(!list) return;

        return list.map((comment, idx) => {
            if (props.currentUser.isAdmin) {
                return (
                    <li key={idx} className='curr-comment-box'>
                        <div className='comment-username-container'>
                        <Link to="/Profile"><button className='btn'>{comment.profileName}</button></Link>
                        </div>
                        <div className='comment-content-container'>
                            <p id='comment-content'> {comment.comment} </p>
                        </div>
                        <button id='comment-delete-btn' onClick={ () => removeComment(comment) } >Delete</button>
                       
                    </li>
                );
            }
            else {
                if (comment.id !== props.currentUser.id) {
                    return (
                        <li key={idx} className='comment-box'>
                            <div className='comment-username-container'>
                                <Link to="/Profile"><button id='comment-username-btn'>{comment.profileName}</button></Link>
                            </div>
                            <div className='comment-content-container'>
                                <p id='comment-content'> {comment.comment} </p>
                            </div>
                        
                        </li>
                    );  
                }
                else {
                    return (
                        <li key={idx} className='curr-comment-box'>
                            <div className='comment-username-container'>
                            <Link to="/Profile"><button className='btn'>{comment.profileName}</button></Link>
                            </div>
                            <div className='comment-content-container'>
                                <p id='comment-content'> {comment.comment} </p>
                            </div>
                            <button id='comment-delete-btn' onClick={ () => removeComment(comment) } >Delete</button>
                        
                        </li>
                    );
                }
            }  
        });
    };


    
    return (
        <div id="profile-content">
            <div className="comment-container">
                <h3 className="box-title">Comments</h3>
                    <div id="comments">
                        <ul className="comment-list">
                            {props.externalView && generateComments(props.currentPost.comments)}
                            {!props.externalView && generateComments(props.currentPost.comments)}
                        </ul>
                    </div>
                    <div className='comment-content-container'>
                        <input type="text" 
                            name='keyword'
                            id='input-comment-content' 
                            placeholder="Type Comment" 
                            value={ state.comment }
                            onChange={ handleInputChange }
                        />
                        <button id="comment-submit-btn" onClick={ () => addComment() }> Submit </button>
                    </div>
            </div>
        </div>
    )

}

CoverContent.propTypes = {
    externalView: PropTypes.bool,
    currentUser: PropTypes.object,
    currentPost: PropTypes.object,
    setComment: PropTypes.func
}

export default CoverContent;