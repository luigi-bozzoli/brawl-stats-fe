import type { RawStats } from "../../../interfaces/stats/aggregated/RawStats";
import type { Stats } from "../../../interfaces/stats/aggregated/Stats";
import { mapRankedStats } from "../generic/mapRankedStats";
import { mapTrophyStats } from "../generic/mapTrophyStats";

export function mapStats(raw: RawStats): Stats {
    const trophies = mapTrophyStats(raw.trophies);
    const ranked = mapRankedStats(raw.ranked);
    const star_player_count = raw.star_player_count ?? 0;

    return {
        userId: raw.userId ?? "",
        star_player_count,
        ranked,
        trophies,
        overallScore: calculateOverallScore({ trophies, ranked, star_player_count }),
    };
}

function calculateOverallScore(stats: Pick<Stats, "trophies" | "ranked" | "star_player_count">): number {
    const VICTORY_POINTS = 3;
    const DEFEAT_PENALTY = 1;
    const DRAW_POINTS = 1;
    const STAR_PLAYER_MULTIPLIER = 5;

    const totalVictories = stats.trophies.victories + stats.ranked.victories;
    const totalDefeats = stats.trophies.defeats + stats.ranked.defeats;
    const totalDraws = stats.trophies.draws + stats.ranked.draws;

    return (
        totalVictories * VICTORY_POINTS -
        totalDefeats * DEFEAT_PENALTY +
        totalDraws * DRAW_POINTS +
        stats.star_player_count * STAR_PLAYER_MULTIPLIER
    );
}