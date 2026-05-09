const BASE_URL = "https://api.yourdomain.com";

export const endpoints = {
    globalStats: `${BASE_URL}/stats/`,
    playerByTag: (playerId: string) => `${BASE_URL}/stats/${playerId}`
} as const;