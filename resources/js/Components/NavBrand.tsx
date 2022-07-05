import React from 'react';
import { Link } from '@inertiajs/inertia-react';

export default function NavBrand({ href, children }) {
    const styles = {
        color: '#484848',
        fontWeight: 'bolder',
        fontSize: '1.5rem',
    };
  return (
    <Link href={href} className={'nav-link'} style={styles}>
      {children}
    </Link>
  );
}
