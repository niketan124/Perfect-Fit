import { Component } from "react";
import FormInput from "../form-input/form-input.component";

import {auth, createUserProfileDocument} from '../../firebase/firebase.utils';
import './sign-up.styles.scss';


class SignUp extends Component {
    constructor() {
        super();
        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
            photoUrl: ''
        }
    }
    handleSubmit = async event => {
        event.preventDefault();
        const {displayName, email, password, confirmPassword} = this.state;
        if(password !== confirmPassword) {
            alert("password doesn't match");
            return
        }

        try {
            const {user} = await auth.createUserWithEmailAndPassword(email, password);
            await createUserProfileDocument(user, {displayName});
            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });
        } catch (error) {
            switch (error.code) {
                case 'auth/email-already-in-use':
                    alert ("You already have an account with that email.")
                    break;
                case 'auth/invalid-email':
                    alert ('Please provide a valid email')
                    break;
                case 'auth/weak-password':
                    alert('The password is too weak.')
                    break
                default:
                    console.log(error);
            }
        }

    };

    handleChange = event => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }
    render() {
        const {displayName, email, password, confirmPassword} = this.state;
        return(
            <div className="sign-up">
                <h2 className="title">I do not have an account</h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                        type = "text"
                        name = 'displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label= 'Display Name'
                        required
                        autoComplete='off'
                    />
                    <FormInput
                        type = "email"
                        name = 'email'
                        value={email}
                        onChange={this.handleChange}
                        label= 'Email'
                        required
                        autoComplete='off'
                    />
                    <FormInput
                        type = "password"
                        name = 'password'
                        value={password}
                        onChange={this.handleChange}
                        label= 'Password'
                        required
                        autoComplete='off'
                    />
                    <FormInput
                        type = "password"
                        name = 'confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label= 'Confirm Password'
                        required
                        autoComplete='off'
                    />
                    <button className='btn'
                    type="submit">Sign Up </button>
                </form>
            </div>
        )
    }
}


export default SignUp;