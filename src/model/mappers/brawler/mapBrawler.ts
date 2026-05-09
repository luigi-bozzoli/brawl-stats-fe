import type { Brawler } from "@/model/interfaces/brawler/Brawler";
import type { RawBrawler } from "@/model/interfaces/brawler/RawBrawler";
import { mapGenericStats } from "../stats/generic/mapGenericStats";


export function mapBrawler(raw: RawBrawler): Brawler {


    return {
        id: raw.id,
        name: raw.name,
        stats: mapGenericStats(raw.stats)
    };
}
