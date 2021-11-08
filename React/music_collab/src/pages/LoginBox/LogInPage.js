import React from "react";
import './styles.css';
import {Link, Redirect} from "react-router-dom";


class LogInPage extends React.Component {
    constructor(props) {
      super(props);

      this.state ={
        username: "",
        pw: "",
        redirectAdmin: false,
        redirectRegular: false,
        adminUser: {username: "admin", pw: "admin"},
        regularUser: {username: "user", pw: "user"}
      }
    }


    handleInputChange = (event) => {
        const target=event.target
        const value=target.value
        const stateName=target.name

        this.setState({
            [stateName]: value
        })

    }

    renderRedirect = () => {
        if (this.state.redirectAdmin) {
          return <Redirect to='/AdminProfile' />
        }
        else if (this.state.redirectRegular) {
            return <Redirect to='/Profile' />
        }
    }

    checkIdentity = (e) => {
        e.preventDefault();

        if (this.state.username === this.state.regularUser.username) {
            if (this.state.pw === this.state.regularUser.pw) {
                this.props.setRegular(true)
                this.setState({ redirectRegular: true })

            }
            else {
                return alert("Incorrect Password Try Again")
            }
        }
        else if (this.state.username === this.state.adminUser.username) {
            if (this.state.pw === this.state.adminUser.pw) {
                this.props.setAdmin(true)
                this.setState({ redirectAdmin: true })
            }
            else {
                return alert("Incorrect Password Try Again")
            }
        }
        else {
            return alert('This user does not exist.')
        }
    }

    render(){
        return (
            <div className='login-container'>
                {this.renderRedirect()}
                <h2 className='logIn-greetings'>Welcome to Music Collab</h2>
                <h3 className='logIn-greetings'>Log In to Continue</h3>
                <div className='login-form-container'>
                    <form className="login_form" onSubmit={this.checkIdentity}>
                        <input className="inputForm" type="text"
                        placeholder="Username" name="username" onChange={this.handleInputChange}/>
                        <br />
                        <input className="inputForm" type="password"
                            placeholder="Password" name="pw" onChange={this.handleInputChange}/>
                        <br />

                        <button onClick={() => this.checkIdentity}> Sign in</button>
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