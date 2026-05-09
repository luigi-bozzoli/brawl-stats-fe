import stats from "@/constants/stats.json";
import type { RawStats } from "@/model/interfaces/stats/aggregated/RawStats";
import { getGlobalStats, removeGlobalStats, type Stats } from "@/model/interfaces/stats/aggregated/Stats";
import { mapStats } from "@/model/mappers/stats/aggregated/mapStats";
import { useEffect, useState } from "react";
import StatsPanel from "../components/StatsPanel";
import { columns } from "../components/table/columns";
import { DataTable } from "../components/table/DataTable";

async function getData(): Promise<Stats[]> {
    const raw = stats as RawStats[];
    return raw.map(mapStats);
}

export default function GlobalStats() {
    const [data, setData] = useState<Stats[]>([]);
    const [globalData, setGlobalData] = useState<Stats>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getData();
                setData(removeGlobalStats(result));
                setGlobalData(getGlobalStats(result))
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        }

        fetchData();
    }, []);

    return (

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-2 sm:gap-5 content-center justify-center">
            <div className="mt-2.5 rounded-lg bg-brawl-dark border border-(--color-border) shadow-sm p-4">
                <h1 className="text-lg font-extrabold text-text-primary mb-4">
                    GLOBAL STATS
                </h1>

                {globalData && (
                    <StatsPanel data={globalData}></StatsPanel>
                )}

            </div>
            {loading ? (
                <div className="text-center py-4">Loading...</div>
            ) : (
                <DataTable columns={columns} data={data} initialColumnVisibility={{
                    draws: false,
                    rankedDraws: false,
                }} />
            )}
        </div>

    );
}