import Button from "@/Components/Button";
import NavBrand from "@/Components/NavBrand";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";

export default function NavBar({ ...props }) {
    const [auth, setAuth] = useState(false);

    useEffect(() => {
        fetch("/auth/check")
            .then((response) => response.json())
            .then(setAuth);
    }, []);
    console.log(auth);
    const login = (
        <Link href={route("login")} className="navigation-link">
            Login
        </Link>
    );

    const logout = (
        <Link
            href={route("logout")}
            className="navigation-link"
            method="post"
            as="button"
        >
            Logout
        </Link>
    );

    return (
        <nav className="navbar navbar-light" style={{ position: "fixed" }}>
            <NavBrand href={undefined}>LIMAKU</NavBrand>
            <div className="d-md-flex d-none" id="navList">
                <NavLink href="/exchange" active={undefined}>
                    Tukar Uang
                </NavLink>

                {auth ? logout : login}
            </div>
            <Button
                type="button"
                className="d-md-none border-0"
                onClick={props.onClick}
                processing={undefined}
                styles={undefined}
            >
                <span
                    className="material-symbols-outlined"
                    style={{ color: "#484848" }}
                >
                    menu
                </span>
            </Button>
        </nav>
    );
}
