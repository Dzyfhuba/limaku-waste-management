import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavLink({ className, href, active, method, children }) {
    const styles = {
        width: 186,
        height: 46,
        // textAlign: 'center' as const,
        color: '#484848',
        padding: '10px',
    };
    return (
        <Link
            href={href}
            className={`${
                active ? 'nav-link text-center' : 'nav-link text-center'
            } ${className}`}
            style={styles}
            method="get"
        >
            {children}
        </Link>
    );
}
