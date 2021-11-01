import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./styles.css";


function ProfileContent (props) {

    const[editMode, setEditMode] = useState(false);

    const generateWorks = (works) => {
        if(!works) return;
        return works.map((work, idx) => {
            return (
                <li key={idx}>
                    <img src={work.imgSrc} alt='work cover'/>
                    <Link className="profileWorksLink" to={{
                        pathname:'/coverpage',
                        id: work.id
                    }}>{work.title}</Link> 
                </li>
            );   
        });
    
    };

    const largeBox = () => { return (
                                <div className="largeBox">
                                <h3 className="boxTitle">Works</h3>
                                <div className="profileWorks">
                                        <ul>
                                            {generateWorks(props.works)}
                                        </ul>
                                </div>
                            </div>
    );};

    const middleBox = () => { return (
                                <div className="smallBox" id="middleBox">
                                    <h3 className="boxTitle">Works</h3>
                                    <div className="profileWorks">
                                        <ul className="smallWorksList">
                                        {generateWorks(props.works)}
                                        </ul>
                                    </div>
                                    <Link className="boxBtn" to="/UploadWork"> Upload Work</Link>
                                </div>
                    );};

    const lastBox = () => { return ( 
                                <div className="smallBox">
                                    <h3 className="boxTitle">Downloads</h3>
                                    <div className="profileWorks">
                                        <ul className="smallWorksList">
                                            {generateWorks(props.downloadedWorks)}
                                        </ul>
                                    </div>
                                </div>
    );};

    return (
        <div id="profileContent">

            <div className="smallBox">
                <h3 className="boxTitle">Biography</h3>
                <div id="bioContainer">
                    <textarea id="bioTextBox" name="biography" defaultValue={props.bio} readOnly={!editMode && props.externalView}/>
                </div>
                <button className="boxBtn">Edit</button>
            </div>

            {props.externalView && largeBox()}
            {!props.externalView && middleBox()}
            {!props.externalView && lastBox()}

            
        </div>
    )

}

ProfileContent.propTypes = {
    works: PropTypes.array,
    downloadedWorks: PropTypes.array,
    externalView: PropTypes.bool,
    bio: PropTypes.string
}

export default ProfileContent;