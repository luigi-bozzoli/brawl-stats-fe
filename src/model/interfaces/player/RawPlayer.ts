import type { RawBrawler } from "../brawler/RawBrawler"
import type { RawMap } from "../map/RawMap"

export interface RawPlayer {
    id: string
    brawlers?: RawBrawler[]
    maps?: RawMap[]
}