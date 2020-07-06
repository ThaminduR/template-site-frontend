import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../constants/constants';
import { withRouter } from 'react-router-dom';
function RegistrationForm(props) {

    const [state, setState] = useState({
        email: "",
        password: "",
        confirmPassword: "",
        successMessage: null,
        errorMessage: null

    })

    const handleChange = (e) => {
        const { id, value } = e.target
        setState(prevState => ({
            ...prevState,
            [id]: value
        }))
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if (state.password === state.confirmPassword) {
            sendDetailsToServer()
        } else {
            setState(prevState => ({
                ...prevState,
                'errorMessage': 'Passwords do not match'
            }))
            // props.showError('Passwords do not match');
        }
    }

    const sendDetailsToServer = () => {
        if (state.email.length && state.password.length) {
            props.showError(null);
            const payload = {
                'first_name': "Test1",
                'last_name': 'Test2',
                "email": state.email,
                "password": state.password,
            }
            axios.post(API_BASE_URL + 'register', payload)
                .then(function (response) {
                    if (response.data.code === 200) {
                        setState(prevState => ({
                            ...prevState,
                            'successMessage': 'Registration successful. Redirecting to home page..'
                        }))
                        //redirectToHome();
                        props.showError(null)
                    } else {
                        setState(prevState => ({
                            ...prevState,
                            'errorMessage': response.data.failure
                        }))
                        // props.showError(response.data.failure);
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            setState(prevState => ({
                ...prevState,
                'errorMessage': 'Please enter valid username and password'
            }))
            // props.showError('Please enter valid username and password')
        }
    }

    return (
        <div className="card col-12 col-lg-4 login-card mt-2 hv-center">
            <form>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputEmail1">Email address</label>
                    <input type="email"
                        className="form-control"
                        id="email"
                        aria-describedby="emailHelp"
                        placeholder="Enter email"
                        value={state.email}
                        onChange={handleChange}
                    />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword1">Password</label>
                    <input type="password"
                        className="form-control"
                        id="password"
                        placeholder="Password"
                        value={state.password}
                        onChange={handleChange}
                    />
                </div>
                <div className="form-group text-left">
                    <label htmlFor="exampleInputPassword2">Confirm Password</label>
                    <input type="password"
                        className="form-control"
                        id="confirmPassword"
                        placeholder="Confirm Password"
                        value={state.confirmPassword}
                        onChange={handleChange}
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-primary"
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
            <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                {state.successMessage}
            </div>
            <div className="alert alert-danger mt-2" style={{ display: state.errorMessage ? 'block' : 'none' }} role="alert">
                {state.errorMessage}
            </div>
            <div className="mt-2">
                <span>Already have an account? </span>
                <span className="loginText" >Login here</span>
                {/* onClick={() => redirectToLogin()} */}
            </div>
        </div>
    )
}

export default withRouter(RegistrationForm);