import type { RawRankedStats } from "../../../interfaces/stats/generic/RawRankedStats";
import type { RankedStats } from "../../../interfaces/stats/generic/RankedStats";
import { toNumber } from "../../../utils/statsUtils";


export function mapRankedStats(raw?: RawRankedStats): RankedStats {
    const victories = toNumber(raw?.victories);
    const defeats = toNumber(raw?.defeats);
    const draws = toNumber(raw?.draws);

    const rankedTotalMatches = victories + defeats + draws;

    const rankedWinRate =
        rankedTotalMatches > 0 ? victories / rankedTotalMatches : 0;
    const rankedLossRate = rankedTotalMatches > 0 ? defeats / rankedTotalMatches : 0;
    const rankedDrawRate = rankedTotalMatches > 0 ? draws / rankedTotalMatches : 0;

    return {
        victories,
        defeats,
        draws,
        rankedTotalMatches,
        rankedWinRate,
        rankedLossRate,
        rankedDrawRate
    };
}