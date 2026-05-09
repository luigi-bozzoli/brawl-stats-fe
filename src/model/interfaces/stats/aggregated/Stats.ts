import type { RankedStats } from "../generic/RankedStats";
import type { TrophyStats } from "../generic/TrophyStats";

export interface Stats {
    userId?: string;
    star_player_count: number;
    ranked: RankedStats;
    trophies: TrophyStats;
    overallScore: number;
}

export function getGlobalStats(statsArray: Stats[]): Stats | undefined {
    return statsArray.find(stat => stat.userId === "GLOBAL");
}

export function removeGlobalStats(statsArray: Stats[]): Stats[] {
    return statsArray.filter(stat => stat.userId !== "GLOBAL");
}