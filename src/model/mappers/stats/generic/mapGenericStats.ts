import type { RawGenericStats } from "../../../interfaces/stats/generic/RawGenericStats";
import type { GenericStats } from "../../../interfaces/stats/generic/GenericStats";
import { mapRankedStats } from "./mapRankedStats";
import { mapTrophyStats } from "./mapTrophyStats";


export function mapGenericStats(raw: RawGenericStats): GenericStats {


    return {
        ranked: mapRankedStats(raw.ranked),
        trophies: mapTrophyStats(raw.trophies),
        star_player_count: raw.star_player_count
    };
}
