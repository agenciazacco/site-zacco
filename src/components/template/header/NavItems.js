import React from 'react'

export const NavIcon = props => (
    <div className={`nav-item`}>
        <a href={props.href}>
            <span className="icon">
                <i className={props.icon}></i>
            </span>
        </a>
    </div>
);

export const NavLink = props => (
    <div className={`nav-item`}>
        <a href={props.href}>
            {props.text}
        </a>
    </div>
);