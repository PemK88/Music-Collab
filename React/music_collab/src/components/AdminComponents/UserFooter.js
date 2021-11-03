import React from 'react';
import AddAdminPopup from './AddAdminPopup';
import './Footer.css';

class UserFooter extends React.Component {
    state = {
        isOpen: false,
        users: this.props.userData
    }

    callBack = (childData) => {
        this.setState({
            users: childData
        })
    }

    sendData = () => {
        this.props.parentCallBack(this.state.users)
    }

    openPopup = () => { 
        this.setState({
            isOpen: !this.state.isOpen
        })
    }
    
    render() {
        return(
            <div className='footer'>
                <button id='left-button' type="createAdmin" onClick={ this.openPopup }>Create Admin</button>
                <button id='rigt-button' type="deleteAll">Delete All</button>
                {this.state.isOpen && <AddAdminPopup handleClose={ this.openPopup } userData={ this.state.users } parentCallBack={ this.callBack }/>}
            </div>
        )
    }
}

export default UserFooter