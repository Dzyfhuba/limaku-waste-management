import Button from "@/Components/Button";
import Dropdown from "@/Components/Dropdown";
import NavBrand from "@/Components/NavBrand";
import NavLink from "@/Components/NavLink";
import { Link } from "@inertiajs/inertia-react";
import React, { useEffect, useState } from "react";

export default function NavBar({ ...props }) {
    const [auth, setAuth] = useState(false);
    console.log(props);
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

    const profile = (
        <Dropdown>
            <Dropdown.Trigger>
                <span
                    className="inline-flex rounded-md justify-content-center"
                    style={{ display: "inline-flex" }}
                >
                    <Button
                        type="button"
                        className="btn d-flex justify-content-center"
                        styles={{
                            width: "184px",
                            padding: "10px",
                        }}
                    >
                        {props.auth.user == undefined
                            ? ""
                            : props.auth.user.name}
                        <span className="material-symbols-outlined ms-2 d-md-block d-none">
                            account_circle
                        </span>
                    </Button>
                </span>
            </Dropdown.Trigger>

            <Dropdown.Content>
                <Dropdown.Link href={"profile"} as="button">
                    Profile
                </Dropdown.Link>
                <Dropdown.Link href={"history"} as="button">
                    History
                </Dropdown.Link>
                <Dropdown.Link href={route("logout")} method="post" as="button">
                    Log Out
                </Dropdown.Link>
            </Dropdown.Content>
        </Dropdown>
    );

    const toggleNavbar = (e) => {
        const navList = document.querySelector("#navList");
        navList.classList.toggle("d-none");
        navList.classList.toggle("position-fixed");
        navList.classList.toggle("w-100");
        // navList.querySelector("*").toggle("w-100");
        // navList.classList.toggle("d-flex");
        navList.classList.toggle("flex-column");
        navList.classList.toggle("justify-content-evenly");
        navList.classList.toggle("open");
        navList.querySelector("*").classList.toggle("w-auto");
        if (navList.classList.contains("open")) {
            navList.style.top = "70px";
        } else {
            navList.style.top = "0px";
        }
        console.log(navList.classList.contains("open"));
        navList.style.backgroundColor = "#EFF0F2";
    };

    return (
        <nav
            className="navbar navbar-light"
            style={{ position: "fixed", zIndex: 99999 }}
        >
            <NavBrand href={undefined}>LIMAKU</NavBrand>
            <div className="d-md-flex d-none" id="navList">
                <NavLink href="/exchange" active={undefined}>
                    Tukar Uang
                </NavLink>

                {auth ? profile : login}
            </div>
            <Button
                type="button"
                className="d-md-none border-0"
                onClick={toggleNavbar}
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
