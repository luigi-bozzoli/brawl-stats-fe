import { CardHeader, CardTitle } from "@/components/ui/card";
import { EMOJI } from "@/constants/emoji";
import type { GenericStats } from "@/model/interfaces/stats/generic/GenericStats";
import React from "react";
import StatPill from "./StatsPill";
import { pct } from "@/model/utils/statsUtils";



interface StatsCardHeaderProps {
    leading?: React.ReactNode;
    name: string;
    open: boolean;
    stats: GenericStats
}

interface WinRateTokens {
    bg: string;
    text: string;
    ring: string;
}

function winRateTokens(winRate: number): WinRateTokens {
    if (winRate >= 0.55)
        return {
            bg: "bg-stat-win-high-bg",
            text: "text-stat-win-high-text",
            ring: "ring-stat-win-high-ring",
        };
    if (winRate >= 0.45)
        return {
            bg: "bg-stat-win-mid-bg",
            text: "text-stat-win-mid-text",
            ring: "ring-stat-win-mid-ring",
        };
    return {
        bg: "bg-stat-win-low-bg",
        text: "text-stat-win-low-text",
        ring: "ring-stat-win-low-ring",
    };
}


// ─── Header ───────────────────────────────────────────────────────────────────

export function StatsCardHeader({
    leading,
    name,
    open,
    stats
}: StatsCardHeaderProps) {
    const { ranked, trophies, star_player_count } = stats;

    return (
        <CardHeader className="flex flex-row items-center gap-4 pb-3">
            {/* Leading slot — image, mode name, or nothing */}
            {leading ?? null}

            {/* Name + preview pills */}
            <div className="flex flex-col flex-1 min-w-0 gap-1.5">
                <CardTitle className="font-extrabold text-text-primary truncate">
                    {name}
                </CardTitle>

                {/* Inline stat pills — always visible on sm+ */}
                <div className="hidden sm:flex flex-wrap gap-1.5">
                    {/* Trophy pills */}
                    {trophies &&
                        (() => {
                            const t = winRateTokens(trophies.winRate);
                            return (
                                <>
                                    <StatPill
                                        label={`${EMOJI.trophy} ${pct(trophies.winRate)}`}
                                        {...t}
                                    />
                                    <StatPill
                                        label={`${EMOJI.trophy} ${trophies.totalMatches}`}
                                        bg="bg-stat-matches-bg"
                                        text="text-stat-matches-text"
                                        ring="ring-stat-matches-ring"
                                    />
                                </>
                            );
                        })()}

                    {/* Ranked pills */}
                    {ranked &&
                        (() => {
                            const r = winRateTokens(ranked.rankedWinRate);
                            return (
                                <>
                                    <StatPill
                                        label={`${EMOJI.ranked} ${pct(ranked.rankedWinRate)}`}
                                        {...r}
                                    />
                                    <StatPill
                                        label={`${EMOJI.ranked} ${ranked.rankedTotalMatches}`}
                                        bg="bg-stat-matches-bg"
                                        text="text-stat-matches-text"
                                        ring="ring-stat-matches-ring"
                                    />
                                </>
                            );
                        })()}

                    {/* Star player */}
                    {star_player_count !== undefined && (
                        <StatPill
                            label={`${EMOJI.star} ${star_player_count}`}
                            bg="bg-stat-star-bg"
                            text="text-stat-star-text"
                            ring="ring-stat-star-ring"
                        />
                    )}
                </div>
            </div>

            {/* Chevron */}
            <span
                className={`ml-auto text-text-secondary transition-transform duration-200 shrink-0 ${open ? "rotate-180" : "rotate-0"
                    }`}
            >
                ▾
            </span>
        </CardHeader>
    );
}