import React from 'react';
import './UserTable.css';
import UserFooter from './UserFooter'

class UserTable extends React.Component {
    state = {
        users: [
            { username: 'abc123', email: 'jdoe123@mail.com', password: '123', name: 'John Doe', lastLogIn: "2021-11-02 10:34:23" },
            { username: 'hihii99', email: 'jsmith123@mail.com', password: '123', name: 'Jane Smith', lastLogIn: "2021-10-31 16:28:02" },
            { username: 'kimyu18', email: 'kimyu18@mail.com', password: '123', name: 'Yu Jin Kim', lastLogIn: "2021-11-03 02:11:29" }
        ]
    }

    callBack = (childData) => {
        this.setState({
            users: childData
        })
    }


    tableHeader() {
        return(
            <tr>
                <th id='inputText'> Select </th>
	 			<th id='inputText'> User ID </th>
	 			<th id='inputText'> Name </th>
	 			<th id='inputText'> Last Log In </th>
                <th id='inputText'> Edit </th>
                <th id='inputText'> View </th>
                <th id='inputText'> Delete </th>
            </tr>
        )
    }

   tableData() {
    return this.state.users.map((user) => {
        const { username, name, lastLogIn } = user
        return (
            <tr key= {username}>
                <td><input type="checkbox"/></td>
                <td id='inputText'>{username}</td>
                <td id='inputText'>{name}</td>
                <td id='inputText'>{lastLogIn}</td>
                <td><button type="edit">Edit</button></td>
                <td><button type="edit">View</button></td>
                <td><button type="edit">Delete</button></td>
            </tr>
        )
        })
    }

   render() { 
      return (
         <div>
            <table id='userTable'>
               <tbody>
                    { this.tableHeader() }
                    { this.tableData() }
               </tbody>
               <UserFooter userData={ this.state.users } parentCallBack={ this.callBack }/>
            </table>

         </div>
      )
   }
}

export default UserTable