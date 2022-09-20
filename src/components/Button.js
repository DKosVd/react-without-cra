import React from "react";

const Button = ({text, onClick, dataInfo, disabled}) => {
    return (
        <button className="button" onClick={onClick} disabled={disabled} data-attribute={dataInfo}>{text}</button>
    )
}

export default Button;