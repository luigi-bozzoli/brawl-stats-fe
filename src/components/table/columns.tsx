"use client"

import type { ColumnDef } from "@tanstack/react-table"

import { SortableHeader } from "./SortableHeader.tsx"
import type { Stats } from "@/model/interfaces/stats/aggregated/Stats.ts"



declare module "@tanstack/react-table" {
    interface ColumnMeta<TData, TValue> {
        label?: string
    }
}
export const columns: ColumnDef<Stats>[] = [
    {
        accessorKey: "userId",
        meta: {
            label: "User ID",
        },
        enableHiding: false,
    },
    {
        accessorKey: "trophies.victories",
        header: SortableHeader<Stats>("Victories"),
        meta: {
            label: "Victories",
        },
    },
    {
        accessorKey: "trophies.defeats",
        header: SortableHeader<Stats>("Defeats"),
        meta: {
            label: "Defeats",
        },
    },
    {
        accessorKey: "trophies.draws",
        header: SortableHeader<Stats>("Draws"),
        meta: {
            label: "Draws",
        },
    },
    {
        accessorKey: "ranked.victories",
        header: SortableHeader<Stats>("Ranked Wins"),
        meta: {
            label: "Ranked Wins",
        },
    },
    {
        accessorKey: "ranked.defeats",
        header: SortableHeader<Stats>("Ranked Defeats"),
        meta: {
            label: "Ranked Defeats",
        },
    },
    {
        accessorKey: "ranked.draws",
        header: SortableHeader<Stats>("Ranked Draws"),
        meta: {
            label: "Ranked Draws",
        },
    },
    {
        accessorKey: "star_player_count",
        header: SortableHeader<Stats>("Star Player"),
        meta: {
            label: "Star Player",
        },
    },
    {
        accessorKey: "trophies.gained",
        header: SortableHeader<Stats>("Trophies Gained"),
        meta: {
            label: "Trophies Gained",
        },
    },
    {
        accessorKey: "trophies.lost",
        header: SortableHeader<Stats>("Trophies Lost"),
        meta: {
            label: "Trophies Lost",
        },
    },
    {
        id: "totalMatches",
        header: SortableHeader<Stats>("Total Matches"),
        meta: {
            label: "Total Matches",
        },
        cell: ({ row }) => {
            return row.original.trophies.totalMatches
        },
    },
]