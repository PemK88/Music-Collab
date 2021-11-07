import React, {  useState  } from 'react'
import ReportTable from './ReportTable'
import 'react-router-dom'


class ReportManagementPage extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div className='box-title'>
        <ReportTable reports={this.props.reports} archived={this.props.archived} setReports = {this.props.setReports} setArchived = {this.props.setArchived}/>
      </div>
    )
  }
}

export default ReportManagementPage;