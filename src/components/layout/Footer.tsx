export default function Footer() {
    return (
        <footer className="w-full px-6 py-5 mt-5 text-center relative overflow-hidden bg-brawl-dark border-t-[5px] border-bg-base">

            {/* Ambient glow spots */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute left-[10%] top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-brawl-blue/6 blur-3xl" />
                <div className="absolute right-[10%] top-1/2 -translate-y-1/2 w-48 h-48 rounded-full bg-brawl-purple/6 blur-3xl" />
            </div>

            <p className="relative font-fredoka text-[11px] tracking-wide text-text-disabled">
                This is an independent, fan-made project and is not affiliated with or endorsed by
                <span className="text-brawl-blue font-semibold"> Supercell</span>.
                All trademarks and game assets belong to their respective owners.
            </p>
        </footer>
    );
}