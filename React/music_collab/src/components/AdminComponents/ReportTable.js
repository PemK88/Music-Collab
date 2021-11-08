import React from 'react';
import './styles.css';
import SearchBar from './SearchBar';
import {Link } from "react-router-dom";

class ReportTable extends React.Component {
    constructor(props) {
        super(props)
    }

    state = {
        selected: [],
        query: ""
    }

    queryCallBack = (childData) => {
        this.setState({
            query: childData
        })
    }

    tableHeader() {
        return(
            <tr>
                <th id='inputText'> Select </th>
	 			<th id='inputText'> Report ID </th>
                <th id='inputText'> Reported </th>
	 			<th id='inputText'> Type </th>
	 			<th id='inputText'> User Reported </th>
                <th id='inputText'> Date Reported </th>
                <th id='inputText'> Archive </th>
                <th id='inputText'> View </th>
                <th id='inputText'> Delete </th>
            </tr>
        )
    }

    archiveReport = (report) => {
        const filteredReports = this.props.reports.filter((r) => { return r != report })
        const archivedList = this.props.archived
        archivedList.push(report)

        this.props.setReports(filteredReports)
        this.props.setArchived(archivedList)
        this.props.setLog("archived report ID: " + report.reportID)
    }

    removeReport = (report) => {
        const filteredReports = this.props.reports.filter((r) => { return r != report })
        this.props.setReports(filteredReports)
        this.props.setLog("removed report ID: " + report.reportID)
    }

    handleChange = (report) => {
        const selectedList = this.state.selected
        const find = selectedList.indexOf(report)
      
        if (find > -1) {
          selectedList.splice(find, 1)
        } else {
          selectedList.push(report)
        }
      
        this.setState({
            selected: selectedList
        })
    }

    deleteSelected = () => {
        const selected = this.state.selected
        let reportList = this.props.reports
        for (let report of selected ) {
            let filteredList = reportList.filter((r) => { return r != report })
            reportList = filteredList
            this.props.setLog("removed report ID: " + report.reportID)
        }
        this.setState({
            selected: []
        })
        this.props.setReports(reportList)
    }

    archiveSelected = () => {
        const selected = this.state.selected
        const archivedList = this.props.archived
        
        let reportList = this.props.reports
        for (let report of selected ) {
            let filteredList = reportList.filter((r) => { return r != report })
            reportList = filteredList
            archivedList.push(report)
            this.props.setLog("archived report ID: " + report.reportID)
        }

        this.setState({
            selected: []
        })

        this.props.setReports(reportList)
        this.props.setArchived(archivedList)
    }

    filterPosts = (reports, query) => {
        if (query == "") {
            return this.tableData(this.props.reports)
        }
        const lowerQuery = query.toLowerCase()

        const filteredList =  reports.filter((report) => {
            const reported = report.reported.toLowerCase()
            return reported.includes(lowerQuery)
        })

        return this.tableData(filteredList)
    };


    tableData = (searchResult) => {
        return searchResult.map((r) => {
            return (
                <tr key= {r.reportID}>
                    <td><input type="checkbox" onChange={ () => this.handleChange(r) }/></td>
                    <td id='inputText'>{r.reportID}</td>
                    <td id='inputText'>{r.reported}</td>
                    <td id='inputText'>{r.type}</td>
                    <td id='inputText'>{r.user}</td>
                    <td id='inputText'>{r.date}</td>
                    <td><button type="archive" onClick={ () => this.archiveReport(r) }>Archive</button></td>
                    <td><Link to='/ReportView'><button type="view">View</button></Link></td>
                    <td><button type="select" onClick={ () => this.removeReport(r) }>Delete</button></td>
                </tr>
            )
        })
    }

   render() { 
      return (
        <div className="table-container">
            <h3 className="box-title">Report Management</h3>
                <SearchBar parentCallBack={ this.queryCallBack }/>
                <table className='table'>
                <tbody>
                        { this.tableHeader() }
                        { this.filterPosts(this.props.reports, this.state.query) }
                </tbody>
                </table>
                <div className='footer'>
                    <Link to="/ArchivedReportManagement"><button id='left-button' type="link" >Go To Archived Reports</button></Link>
                    <button id='right-button' type="deleteAll" onClick={ () => this.deleteSelected() }>Delete Selected</button>
                    <button id='right-button-b' type="deleteAll" onClick={ () => this.archiveSelected() }>Archive Selected</button>
                </div>
        </div>
      )
   }
}

export default ReportTable