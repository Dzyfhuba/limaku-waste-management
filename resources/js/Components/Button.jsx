import React from "react";

export default function Button({
    type = "submit",
    className = "btn",
    styles,
    processing,
    onClick,
    children,
}) {
    return (
        <button
            type={type}
            className={className}
            onClick={onClick}
            disabled={processing}
            style={styles}
        >
            {children}
        </button>
    );
}
