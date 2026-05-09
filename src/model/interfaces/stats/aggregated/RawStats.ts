import type { RawRankedStats } from "../generic/RawRankedStats";
import type { RawTrophyStats } from "../generic/RawTrophyStats";

export interface RawStats {
    userId?: string;
    ranked?: RawRankedStats;
    star_player_count?: number;
    trophies?: RawTrophyStats;
}