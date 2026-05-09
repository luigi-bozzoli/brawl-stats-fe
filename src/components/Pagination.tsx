import React from "react";

type PaginationProps = {
    listSize: number;
    pageSize: number;
    page: number;
    onPageChange: (page: number) => void;
    className?: string;
};

export const Pagination: React.FC<PaginationProps> = ({
    listSize,
    pageSize,
    page,
    onPageChange,
    className = "",
}) => {
    const totalPages = Math.ceil(listSize / pageSize);

    if (totalPages <= 1) return null;

    return (
        <div
            className={`flex items-center justify-center gap-2 px-4 pb-4 ${className}`}
        >
            {/* Prev */}
            <button
                onClick={() => onPageChange(Math.max(1, page - 1))}
                disabled={page === 1}
                className="rounded-full px-3 py-1 text-xs font-semibold bg-black/20 border border-(--color-border) text-text-muted hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
                ← Prev
            </button>

            {/* Mobile */}
            <span className="sm:hidden text-xs text-text-muted font-medium">
                Page {page} of {totalPages}
            </span>
            {/* Desktop: page numbers with ellipsis */}
            {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(
                    (p) =>
                        p === 1 ||
                        p === totalPages ||
                        Math.abs(p - page) <= 2
                )
                .reduce<(number | "…")[]>((acc, p, i, arr) => {
                    if (i > 0 && p - (arr[i - 1] as number) > 1) acc.push("…");
                    acc.push(p);
                    return acc;
                }, [])
                .map((p, i) =>
                    p === "…" ? (
                        <span key={`ellipsis-${i}`} className="hidden sm:inline text-text-muted text-xs px-1">
                            …
                        </span>
                    ) : (
                        <button
                            key={p}
                            onClick={() =>
                                onPageChange(p as number)}
                            className={`hidden sm:flex items-center justify-center rounded-full w-7 h-7 text-xs font-semibold transition-colors ${page === p
                                ? "bg-text-primary text-brawl-dark"
                                : "bg-black/20 border border-(--color-border) text-text-muted hover:text-text-primary"
                                }`}
                        >
                            {p}
                        </button>
                    )
                )}
            {/* Next */}
            <button
                onClick={() =>
                    onPageChange(Math.min(totalPages, page + 1))
                }
                disabled={page === totalPages}
                className="rounded-full px-3 py-1 text-xs font-semibold bg-black/20 border border-(--color-border) text-text-muted hover:text-text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            >
                Next →
            </button>
        </div>
    );
};