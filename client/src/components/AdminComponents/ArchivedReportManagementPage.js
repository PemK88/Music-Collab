import ArchivedReportTable from './ArchivedReportTable'
import 'react-router-dom'
import React from 'react'


class ArchivedReportManagementPage extends React.Component {

  //a get request will be made to the server to get the report details

  render() {
    return (
      <div className='management-container'>
        <ArchivedReportTable setLog={this.props.setLog} reports={this.props.reports} archived={this.props.archived} setReports = {this.props.setReports} setArchived = {this.props.setArchived}/>
      </div>
    )
  }
}

export default ArchivedReportManagementPage;