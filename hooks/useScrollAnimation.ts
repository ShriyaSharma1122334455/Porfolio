
import { useState, useEffect, useRef } from 'react';

export const useScrollAnimation = <T extends HTMLElement,>() => {
    const [isVisible, setIsVisible] = useState(false);
    const ref = useRef<T>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target);
                }
            },
            {
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, []);

    const animationClasses = isVisible
        ? 'opacity-100 translate-y-0'
        : 'opacity-0 translate-y-8';

    return { ref, animationClasses };
};
