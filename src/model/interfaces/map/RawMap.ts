import type { RawGenericStats } from "../stats/generic/RawGenericStats";
import type { Mode } from "./Mode";

export interface RawMap {
    id: number;
    name: string;
    mode: Mode;
    stats: RawGenericStats;
}