import React from 'react';

export default function Guest({ className = 'background-primary', children }) {
    return <div className={`${className}`}>{children}</div>;
}
