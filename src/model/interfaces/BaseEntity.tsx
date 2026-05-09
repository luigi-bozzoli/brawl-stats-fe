import type { GenericStats } from "./stats/generic/GenericStats";

export interface BaseEntity {
    id: string;
    name: string;
    stats: GenericStats;
}