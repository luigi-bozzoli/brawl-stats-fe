
interface StatPillProps {
    label: string;
    bg: string;
    text: string;
    ring: string;
}

export default function StatPill({ label, bg, text, ring }: StatPillProps) {
    return (
        <span
            className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-semibold ring-1 ring-inset ${bg} ${text} ${ring}`}
        >
            {label}
        </span>
    );
}