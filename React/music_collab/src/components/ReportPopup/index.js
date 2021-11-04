import React, { useState } from 'react';
import "./styles.css";
import PropTypes from 'prop-types';

function ReportPopup (props) {

    const [submitted, setSubmitted] = useState(false);

    if(!props.trigger) return null;

    const handleSubmit = () => {
        setSubmitted(true);
    };

    const handleClose = () => {
        setSubmitted(false);
        props.handleTrigger();
    };

    return(
        <div className="popup-overlay">
            <button className="popup-close-btn" onClick={handleClose}>X</button>
            <div className="popup-content">
                <h3 className="box-title">Reason for Report</h3>
                <textarea id="report-text-box" className="bio-text-box"name="report-reason" placeholder={"Cannot leave this area blank!"} readOnly={submitted}/>
                {!submitted && <button className="box-btn margin-10" onClick={handleSubmit}>Submit</button>}
                {submitted && <label className="box-label margin-10">Report Submitted</label>}
            </div>
        </div>
    );
}

ReportPopup.propTypes = {
    trigger: PropTypes.bool,
    handleTrigger: PropTypes.func
};

export  default ReportPopup;

