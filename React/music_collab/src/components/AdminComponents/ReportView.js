import React from 'react';
import {Link } from "react-router-dom";
import './styles.css';

class ReportView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div className="report-box">
                <h3 className="box-title">Report Detail</h3>
                <div className="report-container">
                    <div>
                        <div className="report-small">
                            <h3 className="report-label">Report ID:</h3>
                            <h3 className="report-info">{this.props.currentReport.reportID}</h3>
                        </div>
                        <Link to="/ProfileView"><div className="report-small-reported">
                            <h3 className="report-label">Reported:</h3>
                            <h3 className="report-info">{this.props.currentReport.reported}</h3>
                        </div></Link>
                    </div>
                    <div>
                        <div className="report-small">
                            <h3 className="report-label">Type:</h3>
                            <h3 className="report-info">{this.props.currentReport.type}</h3>
                        </div>
                        <div className="report-small">
                            <h3 className="report-label">Date:</h3>
                            <h3 className="report-info">{this.props.currentReport.date}</h3>
                        </div>
                    </div>
                </div>
                <h3 className="box-title">Reason</h3>
                <div className="report-container">
                    <p className="report-reason">{this.props.currentReport.reason}</p>
                </div>
            </div>
        )
    }
}

export default ReportView