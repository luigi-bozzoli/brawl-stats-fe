export interface RankedStats {
    victories: number;
    defeats: number;
    draws: number;
    rankedTotalMatches: number;
    rankedWinRate: number;    // 0–1
    rankedLossRate: number;         // 0–1
    rankedDrawRate: number;         // 0–1
}
