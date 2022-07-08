import { Link } from '@inertiajs/inertia-react';
import * as React from 'react';

const ButtonAnchor = ({
    href,
    role = 'button',
    style,
    method,
    className = 'button-primary',
    children,
}) => {
    return (
        <Link role={role} href={href} className={`bg-neutral-700 text-neutral-100 dark:bg-white dark:text-black
        hover:bg-neutral-100 hover:text-neutral-700 border-2 border-neutral-700
        hover:dark:bg-neutral-700 hover:dark:text-neutral-100 dark:border-neutral-100
        py-2.5 px-5 rounded-full
        ${ className }`}
        style={style} method={method}>
            {children}
        </Link>
    );
};

export default ButtonAnchor;
