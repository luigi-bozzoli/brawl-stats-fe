export default function Header() {
    return (
        <header className="w-full px-6 py-7 text-center relative overflow-hidden bg-brawl-dark border-b-[5px] border-bg-base">

            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-brawl-blue/6 blur-3xl" />
                <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-64 h-64 rounded-full bg-brawl-purple/6 blur-3xl" />
            </div>

            {/* Live badge
            <div className="absolute top-5 right-5 flex items-center gap-1.5 bg-brawl-green/10 border border-brawl-green/25 text-brawl-green font-fredoka font-semibold text-[11px] tracking-widest px-3 py-1 rounded-full">
                <span className="w-1.5 h-1.5 rounded-full bg-brawl-green animate-pulse" />
                LIVE
            </div>
             */}

            <div className="relative flex items-center justify-center gap-3 mb-2">
                <h1 className="font-luckiest text-[clamp(28px,6vw,52px)] tracking-[3px] leading-none [paint-order:stroke_fill] [-webkit-text-stroke:2px_#0f0f20]">
                    <span className="text-brawl-yellow">BRAWL</span>
                    <span className="text-text-primary">STATS</span>
                </h1>
            </div>

            <div className="relative flex items-center justify-center my-2">
                <div className="w-14 h-0.75 bg-border rounded-full" />
                <div className="absolute w-2 h-2 rounded-full bg-brawl-yellow" />
            </div>

            <p className="relative font-fredoka text-[clamp(13px,2vw,16px)] tracking-wide text-text-muted">
                Live stats from across the{" "}
                <span className="text-brawl-blue font-semibold">Brawliverse</span>
            </p>
        </header>
    );
}