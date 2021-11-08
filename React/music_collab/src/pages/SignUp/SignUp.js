import React, { useState } from 'react';
import UploadCoverPhoto from '../../components/UploadCoverPhoto';
import "./styles.css";
import FormRow from '../../components/FormRow';
import SelectCategories from '../../components/SelectCategories';
import SelectReference from '../../components/SelectReference';
import PropTypes from 'prop-types';
import defaultCoverPhoto from '../../data/default_cover_photo.jpeg';
import {Link, Redirect } from "react-router-dom";

function SignUp (props) {

    const defaultSignUpInputs = {
        username: "",
        profileName: "",
        email: "",
        interests: [],
        newPassword: "",
        confirmPassword: ""
    };

    const [isSuccessful, setSuccessful] = useState(false);
    const [signUpFormInputs, setSignUpFormInputs] = useState(defaultSignUpInputs);
  

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setSignUpFormInputs(inputs => ({...inputs, [name]: value}))
    }

    const handleInterestChange = (interestList) => {
        const name = 'interests';
        setSignUpFormInputs(inputs => ({...inputs, [name]: interestList}))
    }



    const renderRedirect = () => {
        if (isSuccessful) {
          return <Redirect to='/' />
        }
    }

    const signUp = () => {
        if (signUpFormInputs.username == defaultSignUpInputs.username) {
            return alert("username can't be empty! Enter username");
        }
        if (signUpFormInputs.profileName == defaultSignUpInputs.profileName) {
            return alert("Profile name can't be empty! Enter profile name");
        }
        if(signUpFormInputs.newPassword !== signUpFormInputs.confirmPassword) {
            return alert("Passwords don't match!");
        }
        setSuccessful(true)
    }


    return (
        <div className="page">
            {renderRedirect()}
        <div id="container">
            <div id="header-container">
                <h2 className="page-title">Sign Up</h2>
            </div>

            <div id="settings-container">
                <h3 className="section-title"></h3>
                <form id="signup-form">
                    <FormRow label={"Username"} type={"text"} value={signUpFormInputs.username} 
                        handleChange={handleInputChange} className='input-box' name={"username"}/>
                    <br/>
                    <FormRow label={"Profile Name"} type={"text"} value={signUpFormInputs.profileName} 
                        handleChange={handleInputChange}  className='input-box'  name={"profileName"}/>
                    <br/>
                    <FormRow label={"Email"} type={"text"} value={signUpFormInputs.email} 
                        handleChange={handleInputChange} className='input-box'  name={"email"}/>
                    <br/>
                    <div className="row">
                        <label className="input-label">Interests</label>
                        <SelectCategories selectedValues={signUpFormInputs.interests} handleSelect={handleInterestChange}/>
                    </div>
                    <br/>
                        <FormRow label={"Password"} type={"password"} value={signUpFormInputs.newPassword} 
                            handleChange={handleInputChange} className='input-box'  name={"newPassword"}/>
                        <br/>
                        <FormRow label={"Confirm Password"} type={"password"} value={signUpFormInputs.confirmPassword} 
                            handleChange={handleInputChange} className='input-box' name={"confirmPassword"}/>
                    </form>
                    <br/>
                    <div>
                        <button type="submit" form="signup-form" className="btn" onClick={signUp}>
                            Sign Up
                        </button>
                        <Link to='/'><button id="signup-cancel-btn"> Cancel </button></Link>
                    </div>
                </div>
            </div>
        </div>   
    );
}

SignUp.propTypes = {
};

export default SignUp;