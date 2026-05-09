"use client"

import {
    flexRender,
    type ColumnFiltersState,
    getFilteredRowModel,
    type SortingState,
    getCoreRowModel,
    getSortedRowModel,
    getPaginationRowModel,
    useReactTable,
    type VisibilityState,
    type ColumnDef,
} from "@tanstack/react-table"

import {
    DropdownMenu,
    DropdownMenuCheckboxItem,
    DropdownMenuContent,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"


interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[]
    data: TData[]
    initialColumnVisibility?: VisibilityState
}

export function DataTable<TData, TValue>({
    columns,
    data,
    initialColumnVisibility = {},
}: DataTableProps<TData, TValue>) {
    const [sorting, setSorting] = useState<SortingState>([])
    const [columnVisibility, setColumnVisibility] = useState<VisibilityState>(initialColumnVisibility)
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const navigate = useNavigate();

    const handleRowClick = <K extends keyof TData>(row: TData, key: K, rowIndex: number) => {
        navigate(`/player/${encodeURIComponent(String(row[key]))}`, {
            state: { rowData: data[rowIndex] }
        });
    }

    const table = useReactTable({
        data,
        columns,
        getCoreRowModel: getCoreRowModel(),
        onColumnVisibilityChange: setColumnVisibility,
        onSortingChange: setSorting,
        getSortedRowModel: getSortedRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnVisibility,
            columnFilters,
        },
    })

    return (
        <div className="rounded-lg mt-2.5 border border-(--color-border) bg-card-bg overflow-hidden">
            {/* Toolbar */}
            <div className="flex flex-col items-center sm:flex-row sm:items-center sm:justify-between gap-3 px-2 sm:px-4 py-3 border-b border-(--color-border)">
                <Input
                    placeholder="Filter users..."
                    value={(table.getColumn("userId")?.getFilterValue() as string) ?? ""}
                    onChange={(event) =>
                        table.getColumn("userId")?.setFilterValue(event.target.value)
                    }
                    className="max-w-sm rounded-sm h-8 text-text-secondary placeholder:text-text-secondary placeholder:font-(--font-fredoka) placeholder:text-sm"
                />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <button
                            className="
                                inline-flex w-fit flex-none
                                 items-center gap-2 px-4 h-8 radius-sm
                                bg-card-bg border border-(--color-border) rounded-sm
                                text-text-secondary font-(--font-fredoka) text-sm
                                hover:border-brawl-blue hover:text-brawl-blue
                                transition-colors duration-150 cursor-pointer
                            "
                        >
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                <rect x="1" y="2" width="12" height="1.5" rx="0.75" fill="currentColor" />
                                <rect x="3" y="6" width="8" height="1.5" rx="0.75" fill="currentColor" />
                                <rect x="5" y="10" width="4" height="1.5" rx="0.75" fill="currentColor" />
                            </svg>
                            Columns
                        </button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent
                        align="end"
                        className="
                            bg-card-bg border border-(--color-border)
                            rounded-md p-1 shadow-xl min-w-40
                        "
                    >
                        {table
                            .getAllColumns()
                            .filter((column) => column.getCanHide())
                            .map((column) => (
                                <DropdownMenuCheckboxItem
                                    key={column.id}
                                    className="
                                        capitalize font-(--font-fredoka) text-sm
                                        text-text-secondary
                                        hover:text-text-primary
                                        hover:bg-bg-surface
                                        rounded-sm px-3 py-1.5 cursor-pointer
                                        data-[state=checked]:text-brawl-blue
                                    "
                                    checked={column.getIsVisible()}
                                    onCheckedChange={(value) => column.toggleVisibility(!!value)}
                                >
                                    {column.columnDef.meta?.label}
                                </DropdownMenuCheckboxItem>
                            ))}
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>

            {/* Table */}
            <div>
                <Table>
                    <TableHeader>
                        {table.getHeaderGroups().map((headerGroup) => (
                            <TableRow
                                key={headerGroup.id}
                                className="border-b border-(--color-border) bg-bg-surface hover:bg-bg-surface"
                            >
                                {headerGroup.headers.map((header) => (
                                    <TableHead
                                        key={header.id}
                                        className="
                                            font-(--font-luckiest) text-xs tracking-widest uppercase
                                            text-text-muted px-4 py-3
                                        "
                                    >
                                        {header.isPlaceholder
                                            ? null
                                            : flexRender(
                                                header.column.columnDef.header,
                                                header.getContext()
                                            )}
                                    </TableHead>
                                ))}
                            </TableRow>
                        ))}
                    </TableHeader>
                    <TableBody>
                        {table.getRowModel().rows?.length ? (
                            table.getRowModel().rows.map((row, i) => (
                                <TableRow
                                    onClick={() => handleRowClick(row.original, "userId" as keyof TData, row.index)}
                                    key={row.id}
                                    data-state={row.getIsSelected() && "selected"}
                                    className="
                                        border-b border-border-subtle last:border-0
                                        font-(--font-fredoka) text-sm text-text-secondary
                                        hover:bg-card-raised hover:text-text-primary
                                        data-[state=selected]:bg-brawl-blue/10
                                        data-[state=selected]:border-brawl-blue/20
                                        transition-colors duration-100
                                    "
                                    style={{
                                        background: i % 2 === 0
                                            ? "var(--color-card-bg)"
                                            : "var(--color-brawl-dark)"
                                    }}
                                >
                                    {row.getVisibleCells().map((cell) => (
                                        <TableCell key={cell.id} className="px-4 py-3">
                                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                                        </TableCell>
                                    ))}
                                </TableRow>
                            ))
                        ) : (
                            <TableRow className="hover:bg-transparent">
                                <TableCell
                                    colSpan={columns.length}
                                    className="
                                        h-24 text-center
                                        font-(--font-fredoka) text-text-muted
                                        bg-card-bg
                                    "
                                >
                                    No results found.
                                </TableCell>
                            </TableRow>
                        )}
                    </TableBody>
                </Table>
            </div>

            {/* Pagination */}
            <div className="flex items-center justify-end gap-2 px-4 py-3 border-t border-(--color-border)">
                <span className="font-(--font-fredoka) text-xs text-text-muted mr-auto">
                    Page {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
                </span>
                <button
                    onClick={() => table.previousPage()}
                    disabled={!table.getCanPreviousPage()}

                    className="
                        px-4 py-1.5 rounded-sm
                        bg-card-bg border border(--color-border)
                        font-(--font-fredoka) text-sm text-text-secondary
                        hover:border-brawl-blue hover:text-brawl-blue
                        disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:border-(--color-border)
                       disabled:hover:text-text-secondary
                        transition-colors duration-150 cursor-pointer
                    "
                >
                    ← Prev
                </button>
                <button
                    onClick={() => table.nextPage()}
                    disabled={!table.getCanNextPage()}
                    className="
                        px-4 py-1.5 rounded-sm
                        bg-brawl-blue border border-brawl-blue
                        font-(--font-fredoka) text-sm text-white
                        hover:brightness-110
                        disabled:opacity-30 disabled:cursor-not-allowed disabled:hover:brightness-100
                        transition-all duration-150 cursor-pointer
                    "
                >
                    Next →
                </button>
            </div>

        </div>
    )
}