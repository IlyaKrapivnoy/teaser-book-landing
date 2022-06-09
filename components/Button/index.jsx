import React from 'react';

const Button = ({ className, title, onClick }) => {
    return (
        <button className={className} onClick={onClick} type={type}>
            {title}
        </button>
    );
};

export default Button;
