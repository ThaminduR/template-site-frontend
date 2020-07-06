import React, { useState } from 'react'
import './Login.css'
import axios from 'axios'
import { API_BASE_URL } from '../../constants/constants'

function Login(props) {

    const [state, setState] = useState({
        email: "",
        password: "",
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
        sendDetailsToServer()

    }

    const sendDetailsToServer = () => {
        if (state.email.length && state.password.length) {
            const payload = {
                "email": state.email,
                "password": state.password,
            }
            axios.post(API_BASE_URL + 'login', payload)
                .then(function (response) {
                    if (response.data.code === 200) {
                        setState(prevState => ({
                            ...prevState,
                            'successMessage': 'Login successful.'
                        }))
                        //redirectToHome();
                    } else {
                        setState(prevState => ({
                            ...prevState,
                            'errorMessage': response.data.failure
                        }))
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
        }
    }

    const redirectToForgotPassword = () => {
        props.updateTitle('Login')
        props.history.push('/register');
    }

    return (
        <div className='bg-img'>
            <div className='login-overlay'>
                <div className='container '>
                    <div className=' container login-column'>
                        <div className='card login-card'>
                            <div className='col-12'>
                                <p className='welcome-txt'>Welcome Back</p>
                                <form>
                                    <div className="form-group text-center">
                                        <input type="email"
                                            className="form-control"
                                            id="email"
                                            aria-describedby="emailHelp"
                                            placeholder="Enter email"
                                            value={state.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="form-group text-center">
                                        <input type="password"
                                            className="form-control"
                                            id="password"
                                            placeholder="Password"
                                            value={state.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <button type="submit" className="btn btn-outline-white" onClick={handleSubmitClick}>
                                        Login
                                </button>
                                </form>
                                <div className="alert alert-success mt-2" style={{ display: state.successMessage ? 'block' : 'none' }} role="alert">
                                    {state.successMessage}
                                </div>
                                <div className="alert alert-danger mt-2" style={{ display: state.errorMessage ? 'block' : 'none' }} role="alert">
                                    {state.errorMessage}
                                </div>
                                <div className="mt-2">

                                    <div className="btn btn-outline-black loginText" onClick={() => redirectToForgotPassword()} >Forgot Password?</div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login