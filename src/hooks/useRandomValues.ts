import { useMemo } from 'react';

export function useRandomValues(count: number, seed?: number) {
    return useMemo(() => {
        // Use a seeded random if provided, otherwise generate consistent values
        const values = [];
        for (let i = 0; i < count; i++) {
            // Use index-based calculation for consistent values between server and client
            const value = ((i + 1) * 9973) % 100;
            values.push(value / 100);
        }
        return values;
    }, [count, seed]);
}

export function useRandomFloatingElements(count: number) {
    const randomValues = useRandomValues(count * 6); // 6 values per element
    
    return useMemo(() => {
        const elements = [];
        for (let i = 0; i < count; i++) {
            const baseIndex = i * 6;
            elements.push({
                duration: randomValues[baseIndex] * 15 + 15,
                delay: randomValues[baseIndex + 1] * 10,
                left: randomValues[baseIndex + 2] * 100,
                top: randomValues[baseIndex + 3] * 100,
                scale: randomValues[baseIndex + 4] * 0.5 + 1,
                opacity: randomValues[baseIndex + 5] * 0.3 + 0.3,
            });
        }
        return elements;
    }, [count, randomValues]);
}