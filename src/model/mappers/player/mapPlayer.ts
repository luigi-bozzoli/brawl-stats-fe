
import type { Player } from "../../interfaces/player/Player";
import type { RawPlayer } from "../../interfaces/player/RawPlayer";
import { mapBrawler } from "../brawler/mapBrawler";
import { mapMap } from "../map/mapMap";

export function mapPlayer(raw: RawPlayer): Player {
    return {
        id: raw.id,
        brawlers: (raw.brawlers ?? []).map(mapBrawler),
        maps: (raw.maps ?? []).map(mapMap)
    };
}