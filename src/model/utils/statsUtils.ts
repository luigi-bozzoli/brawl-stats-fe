export const toNumber = (value?: number, fallback = 0) => value ?? fallback;

export const pct = (value: number): string => {
    return `${(value * 100).toFixed(1)}%`;
};