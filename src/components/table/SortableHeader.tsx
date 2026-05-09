import type { Column } from "@tanstack/react-table"
import { ArrowUpDown, ArrowUp, ArrowDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function SortableHeader<TData>(label: string) {
    return ({ column }: { column: Column<TData, unknown> }) => {
        const isSorted = column.getIsSorted()

        const handleSort = () => {
            console.log(isSorted)
            if (isSorted === "asc") {
                column.toggleSorting(true) // asc → desc
            } else if (isSorted === "desc") {
                column.clearSorting() // desc → none (default)
            } else {
                column.toggleSorting(false) // none → asc
            }
        }

        return (
            <Button variant="ghost" onClick={handleSort}>
                {label}
                {isSorted === "asc" ? (
                    <ArrowUp className="ml-2 h-4 w-4" />
                ) : isSorted === "desc" ? (
                    <ArrowDown className="ml-2 h-4 w-4" />
                ) : (
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                )}
            </Button>
        )
    }
}