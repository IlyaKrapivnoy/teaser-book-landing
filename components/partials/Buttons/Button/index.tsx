import React from 'react';

interface ButtonProps {
    className: string;
    title: string;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ className, title, onClick }) => (
    <button className={className} onClick={onClick}>
        {title}
    </button>
);

export default Button;
