import React from "react";

import './button.styles.scss';

const CustomButton = ({children, ...otherProps}) => (
    <button className="custom-button btn btn-google">
        {children}
    </button>
)

export default CustomButton;