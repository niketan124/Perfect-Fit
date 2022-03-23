import React from 'react';
import { Component } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import { auth, signInWithGoogle } from '../../firebase/firebase.utils';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const {email, password}  = this.state;
            await auth.signInWithEmailAndPassword(email, password);
        } catch (error) {
            if (error.code === "auth/wrong-password") {
                alert ('Please enter correct password')
            } else if (error.code === "auth/user-not-found") {
                alert("User doesn't exist please SignUp!")
            }
        }
        this.setState({
            email: '',
            password: ''
        })
    }

    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({
            [name]: value
        })
    }

    render() {
        return(
            <div className='sign-in'>
                <h2>I already have account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <br />
                    <label>Email</label>
                    <FormInput 
                    name='email'
                    type="email"
                    value={this.state.email} 
                    handleChange={this.handleChange}
                    required
                    label="email"
                    autoComplete='off' />
                    <label>Password</label>
                    <FormInput 
                    name='password'
                    type="password"
                    value={this.state.password}
                    handleChange={this.handleChange}
                    required
                    label='password'
                    autoComplete='off'/>

                   <div className='google-div'>
                    <button className='btn'
                        type="submit">Sign In </button>
                    <button type='button' className="btn btn-google" onClick= {
                            signInWithGoogle
                        }>
                        Sign In With Google 
                    </button> 
                   </div>
                </form>

            </div>
        )
    }
}


export default SignIn;