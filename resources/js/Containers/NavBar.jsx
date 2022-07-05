import Button from '@/Components/Button';
import Dropdown from '@/Components/Dropdown';
import NavBrand from '@/Components/NavBrand';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/inertia-react';
import React, { useEffect, useState } from 'react';

export default function NavBar({ ...props }) {
    const [auth, setAuth] = useState(false);
    console.log(props);
    useEffect(() => {
        fetch('/auth/check')
            .then((response) => response.json())
            .then(setAuth);
    }, []);
    console.log(auth);
    const login = (
        <Link href={route('login')} className="navigation-link">
            Login
        </Link>
    );

    const profile = (
        <Dropdown>
            <Dropdown.Trigger>
                <span
                    className="inline-flex rounded-lg justify-content-center"
                    style={{ display: 'inline-flex' }}
                >
                    <Button
                        type="button"
                        className="btn d-flex justify-content-center"
                        styles={{
                            width: '184px',
                            padding: '10px',
                        }}
                    >
                        <span className="username">
                            {props.auth.user == undefined
                                ? ''
                                : props.auth.user.name}
                        </span>
                        <span className="material-symbols-outlined ms-2 d-lg-block d-none">
                            account_circle
                        </span>
                    </Button>
                </span>
            </Dropdown.Trigger>

            <Dropdown.Content>
                <Dropdown.Link href={'profile'} as="button">
                    Profile
                </Dropdown.Link>
                <Dropdown.Link href={'history'} as="button">
                    History
                </Dropdown.Link>
                <Dropdown.Link href={route('logout')} method="post" as="button">
                    Log Out
                </Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
    );

    return (
        <nav
            className="navbar navbar-light"
            style={{ position: 'fixed', zIndex: 99999 }}
        >
            <NavBrand href={undefined}>LIMAKU</NavBrand>
            <div className="d-lg-flex d-none" id="navList">
                <NavLink href="/" active={undefined}>
                    Dashboard
                </NavLink>
                <NavLink href="/exchange" active={undefined}>
                    Tukar Tunai
                </NavLink>
                <NavLink href="/about" active={undefined}>
                    Tentang Kami
                </NavLink>

                {auth ? profile : login}
            </div>
            <button
                className="btn d-lg-none"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
            >
                <span
                    className="material-symbols-outlined"
                    style={{ color: '#484848' }}
                >
                    menu
                </span>
            </button>

            <div
                className="offcanvas offcanvas-end"
                tabIndex="-1"
                id="offcanvasRight"
                aria-labelledby="offcanvasRightLabel"
                data-bs-scroll="true"
            >
                <div className="offcanvas-header">
                    <h5 id="offcanvasRightLabel"></h5>
                    <button
                        type="button"
                        className="btn-close text-reset"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    ></button>
                </div>
                <div className="offcanvas-body">
                    <NavLink className="w-100" href="/" active={undefined}>
                        Dashboard
                    </NavLink>
                    <NavLink
                        className="w-100"
                        href="/exchange"
                        active={undefined}
                    >
                        Tukar Tunai
                    </NavLink>
                    <NavLink className="w-100" href="/about" active={undefined}>
                        Tentang Kami
                    </NavLink>
                </div>
            </div>
        </nav>
    );
}
