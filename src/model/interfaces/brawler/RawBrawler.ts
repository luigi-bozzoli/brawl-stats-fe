import type { RawGenericStats } from "../stats/generic/RawGenericStats";

export interface RawBrawler {
    id: number;
    name: string;
    stats: RawGenericStats;
}