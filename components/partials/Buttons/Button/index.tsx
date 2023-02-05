import React from 'react';
import { ButtonProps } from 'types';

const Button: React.FC<ButtonProps> = ({ className, title, onClick }) => (
    <button className={className} onClick={onClick}>
        {title}
    </button>
);

export default Button;
