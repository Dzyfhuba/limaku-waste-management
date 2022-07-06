import React, { useEffect, useState } from 'react';
import Button from './Button';
import UIMode from '../Redux/UIMode';

function ModeToggle(...props) {
    const [icon, setIcon] = useState(String);

    useEffect(() => {
        setIcon('light_mode');
    }, []);

    const styles = {
        position: 'fixed',
        bottom: '0px',
        right: '0px',
    };

    const handleOnClick = () => {
        UIMode.dispatch({ type: 'FLIP' });
        setIcon(icon == 'light_mode' ? 'dark_mode' : 'light_mode');
    };

    return (
        <Button
            type="button"
            styles={styles}
            processing={undefined}
            onClick={handleOnClick}
        >
            <span className="material-symbols-outlined">{icon}</span>;
        </Button>
    );
}

export default ModeToggle;
