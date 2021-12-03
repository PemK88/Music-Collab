import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './styles.css';


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
    }

    const addComment = () => {
        const commentList = props.currentPost.comments
        const newComment = [props.currentUser.profileName, state.comment, props.currentUser.username]
        commentList.push(newComment)

        props.setComment(commentList)
    }

    const generateUserComments = (list) => {
        if(!list) return;

        return list.map((comment, idx) => {
            if (comment[2] !== props.currentUser.username) {
                return (
                    <li key={idx} className='comment-box'>
                        <div className='comment-username-container'>
                            <Link to="/Profile"><button id='comment-username-btn'>{comment[0]}</button></Link>
                        </div>
                        <div className='comment-content-container'>
                            <p id='comment-content'> {comment[1]} </p>
                        </div>
                       
                    </li>
                );  
            }
            else {
                return (
                    <li key={idx} className='curr-comment-box'>
                        <div className='comment-username-container'>
                        <Link to="/Profile"><button className='btn'>{comment[0]}</button></Link>
                        </div>
                        <div className='comment-content-container'>
                            <p id='comment-content'> {comment[1]} </p>
                        </div>
                        <button id='comment-delete-btn' onClick={ () => removeComment(comment) } >Delete</button>
                       
                    </li>
                );
            }  
        });
    };

    const generateComments = (list) => {
        if(!list) return;

        return list.map((comment, idx) => {
            return (
                <li key={idx} className='comment-box'>
                    <div className='comment-username-container'>
                        <button id='comment-username-btn'>{comment[0]}</button>
                    </div>
                    <div className='comment-content-container'>
                        <p id='comment-content'> {comment[1]} </p>
                    </div>
                    
                </li>
            );  
        });
    };
    
    return (
        <div id="profile-content">
            <div className="comment-container">
                <h3 className="box-title">Comments</h3>
                    <div id="comments">
                        <ul className="comment-list">
                            {props.externalView && generateComments(props.currentPost.comments)}
                            {!props.externalView && generateUserComments(props.currentPost.comments)}
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