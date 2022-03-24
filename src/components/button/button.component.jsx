import React from "react";

import './button.styles.scss';

const CustomButton = ({children, ...otherProps}) => (
    <button key={id} className="custom-button btn">
        {children}
    </button>
)

export default CustomButton;