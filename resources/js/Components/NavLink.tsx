import React from "react";
import { Link } from "@inertiajs/inertia-react";

export default function NavLink({ href, active, children }) {
    const styles = {
        width: 186,
        height: 46,
        // textAlign: 'center' as const,
        color: '#484848',
        padding: '10px'
    }
  return (
    <Link href={href} className={active ? "nav-link" : "nav-link"} style={styles}>
      {children}
    </Link>
  );
}
