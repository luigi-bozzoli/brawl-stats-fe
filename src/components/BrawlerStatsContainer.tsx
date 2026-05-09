import { useState, useMemo } from "react";
import { EMOJI } from "@/constants/emoji";
import { Pagination } from "./Pagination";
import type { GenericStats } from "@/model/interfaces/stats/generic/GenericStats";
import { StickyToolbar, type SortOption } from "./StickyToolbar";
import type { BaseEntity } from "@/model/interfaces/BaseEntity";
import GenericStatsCard from "./GenericStatsCard";

// ─── constants ───────────────────────────────────────────────────────────────

const PAGE_SIZE = 5;
type SortKey = "name" | "trophyWinRate" | "trophyTotalMatches" | "rankedWinRate" | "rankedTotalMatches" | "starPlayer";
type SortDir = "asc" | "desc";

const SORT_OPTIONS: SortOption<SortKey>[] = [
  { value: "name", label: "Name" },
  { value: "trophyWinRate", label: `${EMOJI.trophy} Win Rate` },
  { value: "trophyTotalMatches", label: `${EMOJI.trophy} Matches` },
  { value: "rankedWinRate", label: `${EMOJI.ranked} Win Rate` },
  { value: "rankedTotalMatches", label: `${EMOJI.ranked} Matches` },
  { value: "starPlayer", label: "Star Player" },
];

// ─── helpers ─────────────────────────────────────────────────────────────────


function getTrophyWinRate(b: GenericStats): number {
  return b.trophies?.winRate ?? 0;
}

function getTrophyTotalMatches(b: GenericStats): number {
  return (
    b.trophies?.totalMatches ?? 0
  );
}

function getRankedWinRate(b: GenericStats): number {
  return b.ranked?.rankedWinRate ?? 0;
}

function getRankedTotalMatches(b: GenericStats): number {
  return (
    b.ranked?.rankedTotalMatches ?? 0
  );
}

function getStarPlayer(b: GenericStats): number {
  return b.star_player_count ?? 0;
}


interface BrawlerStatsContainerProps {
  entities: BaseEntity[];
  title: string;
  type: "brawler" | "map";
}

export default function BrawlerStatsContainer({
  entities,
  title,
  type
}: BrawlerStatsContainerProps) {
  const [sortKey, setSortKey] = useState<SortKey>("name");
  const [sortDir, setSortDir] = useState<SortDir>("asc");
  const [page, setPage] = useState(1);

  const processed = useMemo(() => {
    const filtered = entities.sort((a, b) => {
      let cmp = 0;
      if (sortKey === "name")
        cmp = a.name.localeCompare(b.name);
      else if (sortKey === "rankedWinRate")
        cmp = getRankedWinRate(a.stats) - getRankedWinRate(b.stats);
      else if (sortKey === "rankedTotalMatches")
        cmp = getRankedTotalMatches(a.stats) - getRankedTotalMatches(b.stats);
      else if (sortKey === "trophyWinRate")
        cmp = getTrophyWinRate(a.stats) - getTrophyWinRate(b.stats);
      else if (sortKey === "trophyTotalMatches")
        cmp = getTrophyTotalMatches(a.stats) - getTrophyTotalMatches(b.stats);
      else if (sortKey === "starPlayer")
        cmp = getStarPlayer(a.stats) - getStarPlayer(b.stats);
      return sortDir === "asc" ? cmp : -cmp;
    });

    return filtered;
  }, [entities, sortKey, sortDir]);

  // ── pagination ─────────────────────────────────────────────────────────────
  const paginated = processed.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  return (
    <div className="mt-2.5 rounded-lg bg-brawl-dark border border-(--color-border) shadow-sm">
      <StickyToolbar
        title={title}
        sortKey={sortKey}
        sortDir={sortDir}
        processedCount={processed.length}
        sortOptions={SORT_OPTIONS}
        onSort={setSortKey}
        onToggleSortDir={() => setSortDir(d => d === "asc" ? "desc" : "asc")}
      />



      <div className="p-4 space-y-3">
        {type === "brawler" ? (
          <>
            {
              paginated.map((brawler) => {
                const imgUrl = `https://github.com/Brawlify/CDN/blob/master/brawlers/borderless/${brawler.id}.png?raw=true`;

                return (
                  <GenericStatsCard
                    key={brawler.id}
                    entity={brawler}
                    leading={
                      <img
                        src={imgUrl}
                        alt={brawler.name}
                        className="h-14 w-14 object-contain shrink-0"
                      />
                    }
                  />
                );
              })
            }
          </>
        ) : (
          <>
            {
              paginated.map((map) => {
                return (
                  <GenericStatsCard
                    key={map.id}
                    entity={map}
                  />
                );
              })
            }
          </>
        )}

      </div>

      <Pagination
        listSize={processed.length}
        pageSize={PAGE_SIZE}
        page={page}
        onPageChange={setPage}
      />
    </div>
  );
}