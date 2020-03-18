import { useEffect } from 'react';
import { useLocalStorage } from './useLocalStorage';

export const useDarkMode = () => {
    const [mode, setMode] = useLocalStorage(false)

    useEffect(() => {
        mode
        ? document.body.classList.add('dark-mode')
        : document.body.classList.remove('dark-mode')
    }, [setMode]);
    return [mode, setMode];
};

