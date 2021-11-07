import React from 'react';
import './styles.css';
import SearchBar from './SearchBar';
import {Link } from "react-router-dom";

class ArchivedReportTable extends React.Component {
    constructor(props) {
        super(props);
    
        console.log(this.props)
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
                <th id='inputText'> Unarchive </th>
                <th id='inputText'> View </th>
                <th id='inputText'> Delete </th>
            </tr>
        )
    }

    unarchiveReport = (report) => {
        const filteredArchivedReports = this.props.archived.filter((r) => { return r != report })
        const reportList = this.props.reports
        reportList.push(report)

        this.props.setReports(reportList)
        this.props.setArchived(filteredArchivedReports)
    }

    removeReport = (report) => {
        const filteredReports = this.props.archived.filter((r) => { return r != report })
        this.props.setArchived(filteredReports)
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
        let archivedReportList = this.props.archived
        for (let report of selected ) {
            let filteredList = archivedReportList.filter((r) => { return r != report })
            archivedReportList = filteredList
        }
        this.setState({
            selected: []
        })
        this.props.setArchived(archivedReportList)
    }

    unarchiveSelected = () => {
        const selected = this.state.selected
        const reportList = this.props.reports
        
        let archivedReportList = this.props.archived
        for (let report of selected ) {
            let filteredList = archivedReportList.filter((r) => { return r != report })
            archivedReportList = filteredList
            reportList.push(report)
        }

        this.setState({
            selected: []
        })

        this.props.setReports(reportList)
        this.props.setArchived(archivedReportList)
    }

    filterPosts = (reports, query) => {
        if (query == "") {
            return this.tableData(this.props.archived)
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
                    <td><button type="archive" onClick={ () => this.unarchiveReport(r) }>Unarchive</button></td>
                    <td><Link to='/ReportView'><button type="view">View</button></Link></td>
                    <td><button type="select" onClick={ () => this.removeReport(r) }>Delete</button></td>
                </tr>
            )
        })
    }

   render() { 
      return (
        <div className="table-container">
            <h3 className="box-title">Archived Report Management</h3>
                <SearchBar parentCallBack={ this.queryCallBack }/>
                <table className='table'>
                <tbody>
                        { this.tableHeader() }
                        { this.filterPosts(this.props.archived, this.state.query) }
                </tbody>
                </table>
                <div className='footer'>
                    <Link to="/ReportManagement"><button id='left-button' type="link" >Go To Reports</button></Link>
                    <button id='right-button-b' type="deleteAll" onClick={ () => this.deleteSelected() }>Delete Selected</button>
                    <button id='right-button-a' type="archiveAll" onClick={ () => this.unarchiveSelected() }>Unarchive Selected</button>
                </div>
        </div>
      )
   }
}

export default ArchivedReportTable