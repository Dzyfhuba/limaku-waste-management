import { Link } from '@inertiajs/inertia-react';
import React from 'react';

const ButtonMailto = ({ mailto, children, className }) => {
    return (
        <Link
            to='#'
            onClick={(e) => {
                window.location.href = mailto;
                e.preventDefault();
            }}
            className={`bg-neutral-700 text-neutral-100 border-2
            hover:bg-neutral-100 hover:text-neutral-700 hover:border-neutral-700
            hover:dark:bg-neutral-700 hover:dark:text-neutral-100 hover:dark:border-neutral-100
            py-2.5 px-5 rounded-full
            ${ className }`}
        >
            {children}
        </Link>
    );
};

export default ButtonMailto;
