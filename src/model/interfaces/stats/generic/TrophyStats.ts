export interface TrophyStats {
    gained: number;
    lost: number;
    defeats: number;
    draws: number;
    victories: number;
    totalMatches: number;
    winRate: number;          // 0–1
    lossRate: number;         // 0–1
    drawRate: number;         // 0–1
}

