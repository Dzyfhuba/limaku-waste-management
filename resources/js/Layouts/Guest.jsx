import React from 'react';
import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';

export default function Guest({ children }) {
    return (
        <div className="background-primary">
            {children}
        </div>
    );
}
