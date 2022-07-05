import React from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/inertia-react";
import NavLink from "@/Components/NavLink";

export default function Guest({ className = "background-primary", children }) {
    return <div className={`${className}`}>{children}</div>;
}
