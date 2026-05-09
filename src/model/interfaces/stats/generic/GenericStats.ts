import type { RankedStats } from "./RankedStats";
import type { TrophyStats } from "./TrophyStats";



export interface GenericStats {
    ranked?: RankedStats;
    trophies?: TrophyStats;
    star_player_count?: number;
}