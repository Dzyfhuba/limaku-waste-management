import Button from '@/Components/Button';
import NavBrand from '@/Components/NavBrand';
import NavLink from '@/Components/NavLink';
import React from 'react';

export default function NavBar({...props}){
    return (
        <nav className='navbar navbar-light' style={{ position: 'fixed' }}>
            <NavBrand href={undefined}>LIMAKU</NavBrand>
            <div className="d-md-flex d-none" id="navList">
                <NavLink href='/exchange' active={undefined}>Tukar Uang</NavLink>
                <a href="/login" className="navigation-link">Login</a>
            </div>
            <Button type='button' className='d-md-none border-0' onClick={props.onClick} processing={undefined}>
                <span className="material-symbols-outlined" style={{ color: '#484848' }} >menu</span>
            </Button>
        </nav>
    );
}
