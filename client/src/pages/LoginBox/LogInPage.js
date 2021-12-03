import React from "react";
import './styles.css';
import {Link, Redirect} from "react-router-dom";
import { login } from "../../actions/user";


class LogInPage extends React.Component {

    state ={
        username: "",
        password: ""
    }



    handleInputChange = (event) => {
        const target=event.target
        const value=target.value
        const stateName=target.name

        this.setState({
            [stateName]: value
        })

    }

    // renderRedirect = () => {
    //     if (this.state.redirectAdmin) {
    //       return <Redirect to='/AdminProfile' />
    //     }
    //     else if (this.state.redirectRegular) {
    //         return <Redirect to='/Home' />
    //     }
    // }

    // checkIdentity = (e) => {
    //     e.preventDefault();

    //     if (this.state.username === this.state.regularUser.username) {
    //         if (this.state.pw === this.state.regularUser.pw) {
    //             this.props.setRegular(true)
    //             this.setState({ redirectRegular: true })

    //         }
    //         else {
    //             return alert("Incorrect Password Try Again")
    //         }
    //     }
    //     else if (this.state.username === this.state.adminUser.username) {
    //         if (this.state.pw === this.state.adminUser.pw) {
    //             this.props.setAdmin(true)
    //             this.setState({ redirectAdmin: true })
    //         }
    //         else {
    //             return alert("Incorrect Password Try Again")
    //         }
    //     }
    //     else {
    //         return alert('This user does not exist.')
    //     }
    // }

    render(){
        return (
            <div className='login-container'>
                <h2 className='logIn-greetings'>Welcome to Music Collab</h2>
                <h3 className='logIn-greetings'>Log In to Continue</h3>
                <div className='login-form-container'>
                    <form className="login_form" onSubmit={() => login(this.state, this.props.changeState)}>
                        <input className="inputForm" type="text"
                        placeholder="Username" name="username" onChange={this.handleInputChange}/>
                        <br />
                        <input className="inputForm" type="password"
                            placeholder="Password" name="password" onChange={this.handleInputChange}/>
                        <br />

                        <button onClick={() => login(this.state, this.props.changeState)}> Sign in</button>
                        <br />
                        <div>
                            <p>No account? <Link to="/SignUp">Sign up here</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        );
        
    }
}

export default LogInPage;