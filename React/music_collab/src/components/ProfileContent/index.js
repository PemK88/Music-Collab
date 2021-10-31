import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./styles.css";




function ProfileContent (props) {

    const[editMode, setEditMode] = useState(false);

    const generateWorks = () => {
        return props.works.map((work, idx) => {
            return (
                <li key={idx}>
                    <img src={work.imgSrc} alt='work cover'/>
                    <Link className="profileWorksLink" to={{
                        pathname:'/coverpage',
                    }}>work.title</Link> 
                </li>
            );   
        });
    
    };

    return (
        <div id="profileContent">

            <div className="smallBox">
                <h3 className="boxTitle">Biography</h3>
                <div id="bioContainer">
                    <textarea id="bioTextBox" name="biography" defaultValue={props.bio} readOnly={editMode && !props.externalView}/>
                </div>
            </div>

            <div className="largeBox">
                <h3 className="boxTitle">Works</h3>
                <div className="profileWorks">
                        <ul>
                            {generateWorks()}
                        </ul>
                </div>
            </div>
        </div>
    )

}

ProfileContent.propTypes = {
    works: PropTypes.array,
    externalView: PropTypes.bool,
    bio: PropTypes.string
}

export default ProfileContent;