import { useEffect, useState } from "react";

const useMediaQuery = () => {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia('(max-width: 500px)');
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange = (event: MediaQueryListEvent) => {
            setIsMobile(event.matches as boolean);
        }
        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        }
    }, []);

    return {
        isMobile: isMobile
    }
}

export default useMediaQuery;
