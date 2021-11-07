import ArchivedReportTable from './ArchivedReportTable'
import 'react-router-dom'
import React, {  useState  } from 'react'


class ArchivedReportManagementPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='box-title'>
        <ArchivedReportTable reports={this.props.reports} archived={this.props.archived} setReports = {this.props.setReports} setArchived = {this.props.setArchived}/>
      </div>
    )
  }
}

export default ArchivedReportManagementPage;