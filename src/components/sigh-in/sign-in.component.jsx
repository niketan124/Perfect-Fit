import React from 'react';
import { Component } from 'react'
import './sign-in.styles.scss'
import FormInput from '../form-input/form-input.component';
import CustomButton from '../button/button.component';


class SignIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
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

                    <CustomButton className='btn'
                    type="submit">Sign In </CustomButton>
                    <CustomButton className='btn'
                    type="submit">Sign In with Google </CustomButton>   
                </form>

            </div>
        )
    }
}


export default SignIn;