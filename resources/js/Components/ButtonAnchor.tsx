import { Link } from '@inertiajs/inertia-react';
import * as React from 'react';

const ButtonAnchor = ({
    href,
    role = 'button',
    style,
    className = 'button-primary',
    children,
}) => {
    return (
        <Link role={role} href={href} className={className} style={style}>
            {children}
        </Link>
    );
};

export default ButtonAnchor;
