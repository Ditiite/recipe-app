// @flow
import React from 'react';

type Props = {
    label: string,
    type: string,
    onClick: () => mixed,
    style?: {},
    className: string
}

const styles = {
    color: "gray",
    padding: "0 10px",
    verticalAlign: "middle",
    fontSize: "20px"
}

const Button = ({ label, type, onClick, className}: Props) => (
    <button
        style={styles}
        label={label}
        type={type}
        className={className}
        onClick={onClick}>
        {label}
    </button>
);

export default Button;
