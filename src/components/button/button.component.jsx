import React from "react";

import './button.styles.scss';

const CustomButton = ({children, ...otherProps}) => (
    <button className="custom-button btn">
        {children}
    </button>
)

export default CustomButton;