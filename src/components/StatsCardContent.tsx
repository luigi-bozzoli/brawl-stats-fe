import { CardContent } from "@/components/ui/card";
import StatCard from "./StatCard";
import type { GenericStats } from "@/model/interfaces/stats/generic/GenericStats";
import { pct } from "@/model/utils/statsUtils";


interface StatsCardContentProps {
    stats: GenericStats;
}

export function StatsCardContent({ stats }: StatsCardContentProps) {
    const { ranked, trophies, star_player_count } = stats;
    const hasRanked = !!ranked;
    const hasTrophies = !!trophies;

    return (
        <CardContent className="pt-0 pb-4 flex flex-col gap-4">
            {/* Trophy stats */}
            {hasTrophies && (
                <section>
                    <h3 className="mb-3 text-sm font-medium text-text-muted uppercase tracking-wide">
                        Trophies
                    </h3>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <StatCard title="Total Matches" value={trophies!.totalMatches} />
                        <StatCard title="Victories" value={trophies!.victories} />
                        <StatCard title="Defeats" value={trophies!.defeats} />
                        <StatCard title="Draws" value={trophies!.draws} />
                        <StatCard title="Trophies Gained" value={trophies!.gained} />
                        <StatCard title="Trophies Lost" value={trophies!.lost} />
                        <StatCard title="Win Rate" value={pct(trophies!.winRate)} />
                        <StatCard title="Loss Rate" value={pct(trophies!.lossRate)} />
                        <StatCard title="Draw Rate" value={pct(trophies!.drawRate)} />
                    </div>
                </section>
            )}

            {/* Ranked stats */}
            {hasRanked && (
                <section>
                    <h3 className="mb-3 text-sm font-medium text-text-muted uppercase tracking-wide">
                        Ranked
                    </h3>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <StatCard title="Total Matches" value={ranked!.rankedTotalMatches} />
                        <StatCard title="Victories" value={ranked!.victories} />
                        <StatCard title="Defeats" value={ranked!.defeats} />
                        <StatCard title="Draws" value={ranked!.draws} />
                        <StatCard title="Win Rate" value={pct(ranked!.rankedWinRate)} />
                        <StatCard title="Loss Rate" value={pct(ranked!.rankedLossRate)} />
                        <StatCard title="Draw Rate" value={pct(ranked!.rankedDrawRate)} />
                    </div>
                </section>
            )}

            {/* Star player */}
            {star_player_count !== undefined && (
                <section>
                    <h3 className="mb-3 text-sm font-medium text-text-muted uppercase tracking-wide">
                        MVP
                    </h3>
                    <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
                        <StatCard title="Star Player" value={star_player_count} />
                    </div>
                </section>
            )}
        </CardContent>

    );
}
