import type { Brawler } from "../brawler/Brawler";
import type { Map } from "../map/Map";


export interface Player {
    id: string;
    brawlers?: Brawler[];
    maps?: Map[]
}