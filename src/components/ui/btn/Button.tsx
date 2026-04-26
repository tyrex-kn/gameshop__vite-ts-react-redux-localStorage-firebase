import classNames from 'classnames'
import {type MouseEventHandler, type ReactNode } from 'react';

import "./button.css"

type SizeBtnType = 'primary' | 's' | 'm' | 'secondary'

interface ButtonProperty{
    onClick?: MouseEventHandler<HTMLButtonElement>;
    type?: string;
    children: ReactNode;
    size?: SizeBtnType;
}

const Button = ({onClick, type, children, size = "s"}:ButtonProperty) => {
    const btnClass = classNames({
        'btn': true,
        'btn--primary': type === 'primary',
        'btn--small': type === 's',
        'btn--medium': type === 'm',
        'btn--secondary': type === 'secondary'
    })
    return (
    <button className={btnClass} onClick={onClick}>
        { children }
    </button>
  )
}

export default Button;