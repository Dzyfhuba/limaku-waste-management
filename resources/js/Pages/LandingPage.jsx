import React from 'react';
import Guest from '@/Layouts/Guest';
import { Head } from '@inertiajs/inertia-react';
import NavLink from '@/Components/NavLink';
import Button from '@/Components/Button';
import NavBrand from '@/Components/NavBrand';

export default function LandingPage(props) {
    const loginLinkStyle = {
        border: '1px solid black',
        borderRadius: '23px',
        backgroundColor: '#484848',
        color: '#fff',
        width: 186,
        height: 46,
        textAlign: 'center',
    }
    return (
        <Guest>
            <nav className='navbar navbar-light '>
                <NavBrand>LIMAKU</NavBrand>
                <div className="d-flex">
                    <NavLink href='/exchange'>Tukar Uang</NavLink>
                    <a href="/login" className="nav-link" style={loginLinkStyle}>Login</a>
                </div>
            </nav>
            asd
        </Guest>
    );
}
