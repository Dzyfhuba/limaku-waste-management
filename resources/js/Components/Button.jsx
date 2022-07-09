import React from 'react';

export default function Button({
    type = 'submit',
    className = 'btn',
    styles,
    processing,
    onClick,
    children,
}) {
    return (
        <button
            type={type}
            className={`bg-neutral-700 text-neutral-100 border-2
            dark:bg-neutral-100 dark:text-neutral-700
            hover:bg-neutral-100 hover:text-neutral-700 hover:border-neutral-700
            hover:dark:bg-neutral-700 hover:dark:text-neutral-100 hover:dark:border-neutral-100
            py-2.5 px-5 rounded-full
             ${className}`}
            onClick={onClick}
            disabled={processing}
            style={styles}
        >
            {children}
        </button>
    );
}
