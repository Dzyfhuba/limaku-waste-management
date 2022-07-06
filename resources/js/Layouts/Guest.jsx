import React from 'react';
import UIModeToggle from '../Components/UIModeToggle';

export default function Guest({ className = 'background-primary', children }) {
    return (
        <div className={`${className}`}>
            {children}
            <UIModeToggle></UIModeToggle>
        </div>
    );
}
