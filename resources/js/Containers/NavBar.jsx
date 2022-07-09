import Button from '@/Components/Button';
import ButtonAnchor from '@/Components/ButtonAnchor';
import Dropdown from '@/Components/Dropdown';
import NavBrand from '@/Components/NavBrand';
import NavLink from '@/Components/NavLink';
import { Link } from '@inertiajs/inertia-react';
import axios from 'axios';
import React, { useEffect, useState } from 'react';

export default function NavBar({ ...props }) {
    const [auth, setAuth] = useState(false);
    const [profileAvailable, setProfileAvailable] = useState(true);
    const [appName, setAppName] = useState(String);

    useEffect(() => {
        axios.get('/auth/check').then((response) => setAuth(response.data));
        axios.get('/app.name').then((response) => setAppName(response.data));
        if (auth) {
            setProfileAvailable(true);
        }
    });
    const login = (
        <ButtonAnchor href={route('login')}>
            Login
        </ButtonAnchor>
    );

    const profile = (
        <Dropdown className="w-100">
            <Dropdown.Trigger>
                <span
                    className=" -100 rounded-lg justify-content-center"
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
                        <span className="username dark:text-neutral-100">
                            {props.auth.user == undefined
                                ? ''
                                : props.auth.user.name}
                        </span>
                        <span className="material-symbols-outlined ms-2 d-lg-block d-none dark:text-neutral-100">
                            account_circle
                        </span>
                    </Button>
                </span>
            </Dropdown.Trigger>

            <Dropdown.Content width="100">
                <Dropdown.Link href={'profile'} as="button" className="w-100">
                    Profile
                </Dropdown.Link>
                <Dropdown.Link href={'history'} as="button" className="w-100">
                    History
                </Dropdown.Link>
                <Dropdown.Link
                    href={route('logout')}
                    method="post"
                    as="button"
                    className="w-100"
                >
                    Log Out
                </Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
    );

    return (
        <nav
            className="flex justify-between w-100 md:px-5 py-1 bg-neutral-100 dark:bg-neutral-700
            shadow"
            style={{ position: 'fixed', zIndex: 99999 }}
        >
            <NavBrand href={'/'}>{appName}</NavBrand>
            <div className="d-lg-flex d-none" id="navList">
                <NavLink
                    href="/"
                    active={undefined}
                    className={'dark:text-neutral-100'}
                >
                    Dashboard
                </NavLink>
                <NavLink
                    href="/exchange"
                    active={undefined}
                    className={'dark:text-neutral-100'}
                >
                    Tukar Tunai
                </NavLink>
                <NavLink
                    href="/about"
                    active={undefined}
                    className={'dark:text-neutral-100'}
                >
                    Tentang Kami
                </NavLink>

                {auth ? profile : login}
            </div>
            <button
                className="btn d-lg-none
                dark:bg-neutral-700 dark:text-neutral-100
                hover:dark:bg-neutral-100 hover:dark:text-neutral-700
                bg-neutral-100 hover:bg-neutral-700 hover:text-neutral-100
                shadow-none
                active:shadow-none
                flex align-middle"
                type="button"
                data-bs-toggle="offcanvas"
                data-bs-target="#offcanvasRight"
                aria-controls="offcanvasRight"
            >
                <span className="material-symbols-outlined">menu</span>
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
                        className="
                        flex align-middle"
                        data-bs-dismiss="offcanvas"
                        aria-label="Close"
                    >
                    <span className="material-symbols-outlined">
                        close
                    </span>
                    </button>
                </div>
                <div className="offcanvas-body flex flex-col">
                    {auth ? (
                        ''
                    ) : (
                        <ButtonAnchor
                            className="w-100 button-primary text-center h-10 flex align-items-center justify-center"
                            href={route('login')}
                            active={undefined}
                        >
                            Login
                        </ButtonAnchor>
                    )}
                    <Link
                        className="w-100 text-center h-10 flex align-items-center justify-center hover:shadow-lg hover:rounded-full hover:text-black"
                        href="/"
                        active={undefined}
                    >
                        Dashboard
                    </Link>
                    <Link
                        className="w-100 text-center h-10 flex align-items-center justify-center hover:shadow-lg hover:rounded-full hover:text-black"
                        href="/exchange"
                        active={undefined}
                    >
                        Tukar Tunai
                    </Link>
                    <Link
                        className="w-100 text-center h-10 flex align-items-center justify-center hover:shadow-lg hover:rounded-full hover:text-black"
                        href="/about"
                        active={undefined}
                    >
                        Tentang Kami
                    </Link>
                    {auth ? (
                        <>
                            <a
                                className={`btn w-100 d-flex justify-content-center hover:shadow-lg rounded-full${
                                    profileAvailable ? '' : ' d-none'
                                }`}
                                data-bs-toggle="collapse"
                                href="#profileCollapse"
                                role="button"
                                aria-expanded="false"
                                aria-controls="profileCollapse"
                            >
                                <span className="username">
                                    {props.auth.user == undefined
                                        ? ''
                                        : props.auth.user.name}
                                </span>
                                <span className="material-symbols-outlined ms-2">
                                    account_circle
                                </span>
                            </a>
                            <div className="collapse" id="profileCollapse">
                                <Link
                                    href={'profile'}
                                    as="button"
                                    className="w-100 text-center h-10 flex align-items-center justify-center hover:shadow-lg hover:rounded-full hover:text-black"
                                >
                                    Profile
                                </Link>
                                <Link
                                    href={'history'}
                                    as="button"
                                    className="w-100 text-center h-10 flex align-items-center justify-center hover:shadow-lg hover:rounded-full hover:text-black"
                                >
                                    History
                                </Link>
                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className="w-100 text-center h-10 flex align-items-center justify-center hover:shadow-lg hover:rounded-full hover:text-black"
                                    onClick={() => setAuth(false)}
                                >
                                    Log Out
                                </Link>
                            </div>
                        </>
                    ) : (
                        ''
                    )}
                </div>
            </div>
        </nav>
    );
}
