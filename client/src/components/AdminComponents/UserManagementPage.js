import UserTable from './UserTable'
import React, { useState, useEffect } from 'react';
import 'react-router-dom'
import PropTypes from 'prop-types';
import { getUserInfo } from '../../actions/user';
import { Link } from "react-router-dom";

function UserManagementPage(props) {
  
  //a get request will be made to the server to get the user details
  const [redirctTo, setRedirctTo] = useState(false);
  const [userData, setUserData] = useState({
    users: []
  })

  function setUserChanged(child) {
    const name = child[0]
    setUserData(inputs => ({...inputs, [name]: child[1]}))
  }

  useEffect(() => {
    if (props.currentUser) {
      setRedirctTo(false)
      getUserInfo(setUserData)
      console.log('changed')
    }
  }, [])

  if (redirctTo) {
    return <Link to="/" />
  } else {
      return (
        <div className='management-container'>
          <UserTable currentUser={props.currentUser} setLog={props.setLog} users={userData.users} setUsers = {setUserChanged} />
        </div>
      );
  }

}

UserManagementPage.propTypes = {
  currentUser: PropTypes.object,
  setLog: PropTypes.func
};

export default UserManagementPage;