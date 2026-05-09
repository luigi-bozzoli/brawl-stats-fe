import type { Map } from "@/model/interfaces/map/Map";
import type { RawMap } from "@/model/interfaces/map/RawMap";
import { mapGenericStats } from "../stats/generic/mapGenericStats";


export function mapMap(raw: RawMap): Map {
    return {
        id: raw.id,
        name: raw.name,
        mode: raw.mode,
        stats: mapGenericStats(raw.stats)
    };
}
