import React from "react";
import './Popup.css'
 
class AddAdminPopup extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        name: "",
        lastLogIn: "Not Yet Logged In",
        users: this.props.userData
    }

    handleInputChange = (event) => {
        const target=event.target
        const value=target.value
        const name=target.name

        this.setState({
            [name]: value
        })
    }

    addAdminUser() {
        const userList = this.state.users

        const adminUser = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            lastLogIn: this.state.lastLogIn
        }

        userList.push(adminUser)

        this.setState({
            users: userList
        })

        this.props.parentCallBack(this.state.users)
    }

    render() {
        return (
            <div className="popup-box">
                <div className="addAdminBox">
                    <h3> Add Admin </h3>
                    <form id='adminForm'>
                        <div className='Row'>
                            <label classname='inputLabel'>Username</label>
                            <input type="text" 
                                name='username' 
                                placeholder="username" 
                                value={ this.state.username }
                                onChange={ this.handleInputChange }
                            />
                        </div>
                        <div className='Row'>
                            <label classname='inputLabel'>Name</label>
                            <input type="text" 
                                name='name' 
                                placeholder="name" 
                                value={ this.state.name }
                                onChange={ this.handleInputChange }
                            />
                        </div>
                        <div className='Row'>
                            <label classname='inputLabel'>Email</label>
                            <input type="text" 
                                name='email' 
                                placeholder="email" 
                                value={ this.state.email }
                                onChange={ this.handleInputChange }
                            />
                        </div>
                        <div className='Row'>
                            <label classname='inputLabel'>Password</label>
                            <input type="text" 
                                name='password' 
                                placeholder="password" 
                                value={ this.state.password }
                                onChange={ this.handleInputChange }
                            />
                        </div>
                    </form>
                    <button type="submit" onClick={this.addAdminUser()}>Add Admin</button>
                    <button type="close" onClick={this.props.handleClose}>Close</button>
                </div>
            </div>
        );
    }
};
 
export default AddAdminPopup;