import ArchivedReportTable from './ArchivedReportTable'
import 'react-router-dom'
import React from 'react'


class ArchivedReportManagementPage extends React.Component {
  
  render() {
    return (
      <div className='management-container'>
        <ArchivedReportTable setLog={this.props.setLog} reports={this.props.reports} archived={this.props.archived} setReports = {this.props.setReports} setArchived = {this.props.setArchived}/>
      </div>
    )
  }
}

export default ArchivedReportManagementPage;