import React from "react";
import './styles.css'
 
class AddAdminPopup extends React.Component {
    state = {
        username: "",
        userType: "admin",
        email: "",
        password: "",
        name: "",
        lastLogIn: "Not Yet Logged In",
    }

    handleInputChange = (event) => {
        const target=event.target
        const value=target.value
        const stateName=target.name

        this.setState({
            [stateName]: value
        })

        console.log(this.state.username);
    }

    addAdminUser = (event) => {
        const adminUser = {
            username: this.state.username,
            userType: "admin",
            email: this.state.email,
            password: this.state.password,
            name: this.state.name,
            lastLogIn: this.state.lastLogIn,
            activityLog: []
        }

        this.props.parentCallBack(adminUser)
        this.props.handleClose()
    }

    render() {
        return (
            <div className="popup-overlay">
                <div className="popup-content">
                    <h3 id="popup-title"> Add Admin </h3>
                    <form id='adminForm'>
                        <div className='Row'>
                            <label className='inputLabel'>Username</label>
                            <input type="text" 
                                id="addInput"
                                name='username' 
                                placeholder="username" 
                                value={ this.state.username }
                                onChange={ this.handleInputChange }
                            />
                        </div>
                        <div className='Row'>
                            <label className='inputLabel'>Name</label>
                            <input type="text"
                                id="addInput" 
                                name='name' 
                                placeholder="name" 
                                value={ this.state.name }
                                onChange={ this.handleInputChange }
                            />
                        </div>
                        <div className='Row'>
                            <label className='inputLabel'>Email</label>
                            <input type="text"
                                id="addInput" 
                                name='email' 
                                placeholder="email" 
                                value={ this.state.email }
                                onChange={ this.handleInputChange }
                            />
                        </div>
                        <div className='Row'>
                            <label className='inputLabel'>Password</label>
                            <input id="addInput"
                                type="password" 
                                name='password' 
                                placeholder="password" 
                                value={ this.state.password }
                                onChange={ this.handleInputChange }
                            />
                        </div>
                    </form>
                    <div>
                        <button id="btn-a" type="submit" onClick={this.addAdminUser}>Add Admin</button>
                        <button id="btn-b" type="close" onClick={this.props.handleClose}>Close</button>
                    </div>
                </div>
            </div>
        );
    }
};
 
export default AddAdminPopup;