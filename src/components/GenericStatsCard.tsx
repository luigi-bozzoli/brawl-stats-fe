import { Card } from "@/components/ui/card";
import type { BaseEntity } from "@/model/interfaces/BaseEntity";
import type { GenericStats } from "@/model/interfaces/stats/generic/GenericStats";
import { useState } from "react";
import { StatsCardContent } from "./StatsCardContent";
import { StatsCardHeader } from "./StatsCardHeader";


type GenericStatsCardProps =
    {
        defaultOpen?: boolean;
        leading?: React.ReactNode;
        entity: BaseEntity;
        map?: never;
    }

export default function GenericStatsCard(props: GenericStatsCardProps) {
    const { defaultOpen = false, leading } = props;
    const [open, setOpen] = useState(defaultOpen);

    let name: string;
    let stats: GenericStats;

    name = props.entity.name;
    stats = props.entity.stats;

    return (
        <Card className="bg-brawl-dark w-full overflow-hidden">
            {/* ── Header ─────────────────────────────────────────── */}
            <button
                className="w-full text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-(--color-border)"
                onClick={() => setOpen((prev) => !prev)}
                aria-expanded={open}
            >
                <StatsCardHeader
                    leading={leading}
                    name={name}
                    open={open}
                    stats={stats}
                />
            </button>

            {/* ── Collapsible stats ──────────────────────────────── */}
            {open &&
                <StatsCardContent stats={stats}></StatsCardContent>
            }
        </Card>
    );
}