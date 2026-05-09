import type { RawTrophyStats } from "../../../interfaces/stats/generic/RawTrophyStats";
import type { TrophyStats } from "../../../interfaces/stats/generic/TrophyStats";
import { toNumber } from "../../../utils/statsUtils";

export function mapTrophyStats(raw?: RawTrophyStats): TrophyStats {
    const gained = toNumber(raw?.gained);
    const lost = toNumber(raw?.lost);
    const defeats = toNumber(raw?.defeats);
    const draws = toNumber(raw?.draws);
    const victories = toNumber(raw?.victories);

    const totalMatches = victories + defeats + draws;

    const winRate = totalMatches > 0 ? victories / totalMatches : 0;
    const lossRate = totalMatches > 0 ? defeats / totalMatches : 0;
    const drawRate = totalMatches > 0 ? draws / totalMatches : 0;

    return {
        gained,
        lost,
        defeats,
        draws,
        victories,
        totalMatches,
        winRate,
        lossRate,
        drawRate,
    };
}