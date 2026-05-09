import type { RawRankedStats } from "./RawRankedStats";
import type { RawTrophyStats } from "./RawTrophyStats";


export interface RawGenericStats {
    ranked?: RawRankedStats;
    trophies?: RawTrophyStats;
    star_player_count?: number;
}