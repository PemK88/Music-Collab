import React, {  useState  } from 'react'
import UserTable from './UserTable'
import 'react-router-dom'


class UserManagementPage extends React.Component {
  
  render() {
    return (
      <div className='box-title'>
        <UserTable setLog={this.props.setLog} users={this.props.users} setUsers = {this.props.setUsers} />
      </div>
    )
  }
}

export default UserManagementPage;