import React from 'react'
import ReportTable from './ReportTable'
import 'react-router-dom'


class ReportManagementPage extends React.Component {

  //a get request will be made to the server to get the report details
  
  render() {
    return (
      <div className='management-container'>
        <ReportTable setLog={this.props.setLog} reports={this.props.reports} archived={this.props.archived} setReports = {this.props.setReports} setArchived = {this.props.setArchived}/>
      </div>
    )
  }
}

export default ReportManagementPage;