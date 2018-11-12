// @flow
import React from 'react';

type Props = {
    label: string,
    type: string,
    onClick: () => mixed,
    style?: {}
}

const styles = {
    color: "gray",
    height: "2rem",
    padding: "0 0.5rem",
    verticalAlign: "middle"
}

const Button = ({ label, type, onClick}: Props) => (
    <button
        style={styles}
        label={label}
        type={type}
        onClick={onClick}>
        {label}
    </button>
);

export default Button;
