import React from 'react';
import AddAdminPopup from './AddAdminPopup';
import './Footer.css';

class UserFooter extends React.Component {
    state = {
        isOpen: false,
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
                <button id='rigt-button' type="deleteAll" onClick={ this.props.deleteSelected }>Delete All</button>
                {this.state.isOpen && <AddAdminPopup handleClose={ this.openPopup } parentCallBack={ this.props.parentCallBack }/>}
            </div>
        )
    }
}

export default UserFooter