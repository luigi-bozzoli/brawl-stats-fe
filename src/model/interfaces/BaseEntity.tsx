import type { GenericStats } from "./stats/generic/GenericStats";

export interface BaseEntity {
    id: number;
    name: string;
    stats: GenericStats;
}