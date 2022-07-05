import { Link } from '@inertiajs/inertia-react';
import * as React from 'react';

const ButtonAnchor = ({
    href,
    role = 'button',
    styles,
    className = 'button-primary',
    children,
}) => {
    return (
        <Link role={role} href={href} className={className} style={styles}>
            {children}
        </Link>
    );
};

export default ButtonAnchor;
