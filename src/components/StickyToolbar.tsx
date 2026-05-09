
export interface SortOption<T extends string> {
    label: string;
    value: T;
}

interface StickyToolbarProps<T extends string> {
    title: string;
    sortKey: T;
    sortDir: "asc" | "desc";
    processedCount: number;
    sortOptions: SortOption<T>[];
    onSort: (key: T) => void;
    onToggleSortDir: () => void;
}

export const StickyToolbar = <T extends string>({
    title,
    sortKey,
    sortDir,
    processedCount,
    sortOptions,
    onSort,
    onToggleSortDir,
}: StickyToolbarProps<T>) => {
    const handleSort = (key: T) => {
        if (key === sortKey) {
            onToggleSortDir();
        } else {
            onSort(key);
        }
    };


    return (
        <div className="sticky top-0 z-10 rounded-t-lg bg-brawl-dark border-b border-(--color-border) px-4 pt-4 pb-3 backdrop-blur-sm">
            <h1 className="text-lg font-extrabold text-text-primary mb-3">{title}</h1>

            <div className="flex flex-wrap gap-3 items-center">
                <div className="flex gap-1.5 flex-wrap items-center">
                    <span className="text-xs text-text-muted font-medium">Sort:</span>

                    {/* Mobile: native select */}
                    <div className="sm:hidden flex items-center gap-1.5">
                        <select
                            value={sortKey}
                            onChange={(e) => handleSort(e.target.value as T)}
                            className="rounded-full px-3 py-1 text-xs font-semibold bg-black/20 border border-(--color-border) text-text-muted focus:outline-none appearance-none text-center"
                        >
                            {sortOptions.map((opt) => (
                                <option key={opt.value} value={opt.value}>
                                    {opt.label}
                                </option>
                            ))}
                        </select>

                        <button
                            onClick={onToggleSortDir}
                            className="rounded-full w-6 h-6 text-xs font-semibold bg-black/20 border border-(--color-border) text-text-muted flex items-center justify-center"
                        >
                            {sortDir === "asc" ? "↑" : "↓"}
                        </button>
                    </div>

                    {/* Desktop: pill buttons */}
                    {sortOptions.map((opt) => {
                        const active = sortKey === opt.value;
                        return (
                            <button
                                key={opt.value}
                                onClick={() => handleSort(opt.value)}
                                className={`hidden sm:flex rounded-full px-3 py-1 text-xs font-semibold transition-colors items-center gap-1 ${active
                                    ? "bg-text-primary text-brawl-dark"
                                    : "bg-black/20 text-text-muted border border-(--color-border) hover:text-text-primary"
                                    }`}
                            >
                                {opt.label}
                                {active && (
                                    <span className="text-[10px]">
                                        {sortDir === "asc" ? "↑" : "↓"}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </div>

                {/* Result count */}
                <span className="ml-auto text-xs text-text-muted shrink-0">
                    {processedCount} brawler{processedCount !== 1 ? "s" : ""}
                </span>
            </div>
        </div>
    );
};