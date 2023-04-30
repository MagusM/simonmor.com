import { useEffect, useState } from 'react';

const useHandleKeyPressed = (callback: Function) => {
    const [keyPressed, setKeyPressed] = useState<string>('');

    useEffect(() => {
        function handleKeyPressed(event: KeyboardEvent) {
            setKeyPressed(() => event.key);
            callback(event.key);
        }

        window.addEventListener('keydown', handleKeyPressed);

        return () => {
            window.removeEventListener('keydown', handleKeyPressed);
        };
    }, [callback]);

    return {
        keyPressed: keyPressed,
    };
};

export default useHandleKeyPressed;
