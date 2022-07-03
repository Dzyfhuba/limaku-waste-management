import * as React from 'react';
import { Component } from 'react';

const ButtonAnchor = ({href, role='button', styles, className='button-primary', children}) => {
    return (
    <a role={role} href={href} className={className} style= {styles}>{children}</a>
    );
}

export default ButtonAnchor;
