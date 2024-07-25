import React, { ButtonHTMLAttributes } from 'react';
import styles from './Button.module.css';
import cn from 'classnames';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    children: React.ReactNode;
    appearence?: 'big' | 'small';
}

const Button = ({ children, className, appearence = 'small', ...props }: ButtonProps) => {
    return (
        <button className={cn(styles['button'], styles['accent'], className, {
            [styles['big']]: appearence === 'big',
            [styles['small']]: appearence === 'small',
        })} {...props}>
            {children}
        </button>
    );
};

export default Button;
