import React from "react";
import './Button.css';

var Button = ({label}) => (
        <div>
            <button className="button">{label}</button>
        </div>
);

export default Button;