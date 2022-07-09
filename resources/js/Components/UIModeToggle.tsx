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
        bottom: '10px',
        right: '10px',
    };

    const handleOnClick = () => {
        UIMode.dispatch({ type: 'FLIP' });
        setIcon(icon == 'light_mode' ? 'dark_mode' : 'light_mode');
    };

    return (
        <button
            onClick={handleOnClick}
            className={'py-0 px-0 fixed bottom-5 right-5 w-5 h-5 dark:text-neutral-100 flex items-center active:animate-bounce transition-opacity'}
        >
            <span className="material-symbols-outlined">{icon}</span>
        </button>
    );
}

export default ModeToggle;
