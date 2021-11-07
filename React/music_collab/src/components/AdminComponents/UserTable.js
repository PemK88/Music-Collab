import React from 'react';
import './styles.css';
import UserFooter from './UserFooter';
import SearchBar from './SearchBar';
import {Link } from "react-router-dom";

class UserTable extends React.Component {
    state = {
        selected: [],
        query: ""
    }

    callBack = (childData) => {
        const userList = this.props.users 
        userList.push(childData)
        this.props.setUsers(userList)
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
	 			<th id='inputText'> Username </th>
                <th id='inputText'> Type </th>
	 			<th id='inputText'> Name </th>
	 			<th id='inputText'> Last Log In </th>
                <th id='inputText'> Edit </th>
                <th id='inputText'> View </th>
                <th id='inputText'> Delete </th>
            </tr>
        )
    }

    removeUser = (user) => {
        const filteredUsers = this.props.users.filter((u) => { return u != user })
        this.props.setUsers(filteredUsers)
    }

    handleChange = (user) => {
        const selectedList = this.state.selected
        const find = selectedList.indexOf(user)
      
        if (find > -1) {
          selectedList.splice(find, 1)
        } else {
          selectedList.push(user)
        }
      
        this.setState({
            selected: selectedList
        })
    }

    deleteSelected = () => {
        const selected = this.state.selected
        let userList = this.props.users
        for (let user of selected ) {
            let filteredList = userList.filter((u) => { return u != user })
            userList = filteredList
        }
        this.setState({
            selected: []
        })
        this.props.setUsers(userList)
    }

    filterUsers = (users, query) => {
        if (query == "") {
            return this.tableData(this.props.users)
        }

        const lowerQuery = query.toLowerCase()

        const filteredList =  users.filter((user) => {
            const username = user.username.toLowerCase();
            return username.includes(lowerQuery);
        })

        return this.tableData(filteredList)
    };


    tableData = (searchResult) => {
        return searchResult.map((user) => {
            return (
                <tr key= {user.username}>
                    <td><input type="checkbox" onChange={ () => this.handleChange(user) }/></td>
                    <td id='inputText'>{user.username}</td>
                    <td id='inputText'>{user.userType}</td>
                    <td id='inputText'>{user.name}</td>
                    <td id='inputText'>{user.lastLogIn}</td>
                    <td><Link to="/ProfileSettingsView"><button type="edit">Edit</button></Link></td>
                    <td><Link to="/ProfileView"><button type="view">View</button></Link></td>
                    <td><button type="select" onClick={ () => this.removeUser(user) }>Delete</button></td>
                </tr>
            )
        })
    }

   render() { 
      return (
        <div className="table-container">
            <h3 className="box-title">User Management</h3>
                <SearchBar parentCallBack={ this.queryCallBack }/>
                <table className='table'>
                <tbody>
                        { this.tableHeader() }
                        { this.filterUsers(this.props.users, this.state.query) }
                </tbody>
                </table>
                <UserFooter parentCallBack={ this.callBack } deleteSelected = { this.deleteSelected}/>
        </div>
      )
   }
}

export default UserTable