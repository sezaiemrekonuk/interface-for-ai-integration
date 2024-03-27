import { useState, useEffect } from "react";

export default function useMedia({ query }: { query: number }) {
    const [isMatch, setIsMatch] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia(`(min-width: ${query}px)`);
        setIsMatch(mediaQuery.matches);

        const handler = (e: MediaQueryListEvent) => setIsMatch(e.matches);
        mediaQuery.addEventListener("change", handler);

        return () => mediaQuery.removeEventListener("change", handler);
    }, [query]);

    return isMatch;
}