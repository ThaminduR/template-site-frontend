import React, { useState } from 'react';
import axios from 'axios';
import { API_BASE_URL } from '../../constants/constants';
import { withRouter } from 'react-router-dom';
import './Register.css'

function RegisterForm(props) {

    const [state, setState] = useState({
        first_name: "",
        last_name: "",
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
                'errorMessage': 'Passwords do not match',
                'successMessage': '',
            }))
        }
    }

    const sendDetailsToServer = () => {
        if (state.email.length && state.password.length && state.first_name.length && state.last_name.length) {
            props.showError(null);
            const payload = {
                'first_name': state.first_name,
                'last_name': state.last_name,
                "email": state.email,
                "password": state.password,
            }
            axios.post(API_BASE_URL + 'register', payload)
                .then(function (response) {
                    if (response.data.code === 200) {
                        setState(prevState => ({
                            ...prevState,
                            'successMessage': 'Registration successful. Redirecting to home page..',
                            'errorMessage': '',
                        }))
                        //redirectToHome();
                        props.showError(null)
                    } else {
                        setState(prevState => ({
                            ...prevState,
                            'errorMessage': response.data.failure,
                            'successMessage': '',
                        }))
                    }
                })
                .catch(function (error) {
                    console.log(error);
                });
        } else {
            setState(prevState => ({
                ...prevState,
                'errorMessage': 'Please Fill All the Fields',
                'successMessage': '',
            }))
        }
    }

    const redirectToLogin = () => {
        props.updateTitle('Login')
        props.history.push('/login');
    }

    return (
        <div className='bg-img'>
            <div className='register-overlay'>
                <div className='container '>
                    <div className=' container register-column'>
                        <div className='card register-card'>
                            <div className='col-12'>
                                <p className='welcome-txt'>Welcome</p>
                                <form>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className="form-group text-left">
                                                <input type="email"
                                                    className="form-control"
                                                    id="email"
                                                    aria-describedby="emailHelp"
                                                    placeholder="First Name"
                                                    value={state.first_name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className="form-group text-left">
                                                <input type="email"
                                                    className="form-control"
                                                    id="email"
                                                    aria-describedby="emailHelp"
                                                    placeholder="Last Name"
                                                    value={state.last_name}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group text-left">
                                        <input type="email"
                                            className="form-control"
                                            id="email"
                                            aria-describedby="emailHelp"
                                            placeholder="Email"
                                            value={state.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group text-left">
                                        <input type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Password"
                                            value={state.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group text-left">
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
                                        className="btn btn-outline-white"
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
                                    <div className="btn btn-outline-black loginText" onClick={() => redirectToLogin()} >Already Has an Account?</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default withRouter(RegisterForm);