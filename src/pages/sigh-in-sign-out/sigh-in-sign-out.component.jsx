import React from "react";
import SignIn from "../../components/sigh-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.componenet";
import './sigh-in-sign-out.styles.scss';



const SignInSignOut = () => (
    <div className="sigh-in-sign-out">
        <SignIn />
        <SignUp />
    </div>
);

export default SignInSignOut;