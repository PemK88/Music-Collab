import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import "./styles.css";

function ExploreView (props) {

    const generateWorks = (works) => {
        if(!works) return;
        return works.map((work, idx) => {
            return (
                <li key={idx}>
                    <img id="large-img" src={work.imgSrc} alt='work cover'/>
                    <Link className="profile-works-link" to={{
                        pathname:'/CoverPage',
                        id: work.id
                    }}>{work.title}</Link>
                    <p>#songs #singer</p>
                </li>
            );   
        });
    
    };

    const worksBox = (works) => { return (
        <div className="large-dark-box-explore">
            <h3 className="box-title">{props.title}</h3>
            <div className="profile-works">
                <ul className="small-works-list">
                {generateWorks(works)}
                </ul>
            </div>
        </div>
    );};

    return (
        worksBox(props.works)
    );



}

ExploreView.propTypes = {
    works: PropTypes.array,
    title: PropTypes.string
};

export default ExploreView;