import { useLocation, useParams } from "react-router-dom";
import type { Stats } from "@/model/interfaces/stats/aggregated/Stats";
import stats from "@/constants/player_stats.json";
import { mapPlayer } from "@/model/mappers/player/mapPlayer";
import { useEffect, useState } from "react";
import StatsPanel from "../components/StatsPanel";
import BrawlerStatsContainer from "../components/BrawlerStatsContainer";
import type { Player } from "@/model/interfaces/player/Player";
import type { RawPlayer } from "@/model/interfaces/player/RawPlayer";


async function getData(id: string): Promise<Player> {
    const raw = stats as RawPlayer[];
    const found = raw.find(p => p.id === id);
    return mapPlayer(found!);
}

export default function PlayerStats() {
    const { id } = useParams();
    const { state } = useLocation();
    const decodedId = decodeURIComponent(id!);
    const stats: Stats = state?.rowData;
    const [player, setPlayer] = useState<Player>();
    useEffect(() => {
        async function fetchData() {
            try {
                const result = await getData(decodedId);
                setPlayer(result);
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        fetchData();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col gap-2 sm:gap-5 content-center justify-center">
            <div className="mt-2.5 rounded-lg bg-brawl-dark border border-(--color-border) shadow-sm p-4">
                <h1 className="text-lg font-extrabold text-text-primary mb-4">
                    PLAYER STATS
                </h1>
                {stats && <StatsPanel data={stats}></StatsPanel>}

            </div>

            {
                player?.brawlers &&
                <BrawlerStatsContainer entities={player.brawlers} title="BRAWLER STATS" type="brawler"></BrawlerStatsContainer>
            }

            {
                player?.maps &&
                <BrawlerStatsContainer entities={player.maps} title="MAP STATS" type="map"></BrawlerStatsContainer>
            }


        </div>

    )
}