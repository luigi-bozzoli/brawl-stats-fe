
import type { Stats } from '@/model/interfaces/stats/aggregated/Stats';
import StatCard from './StatCard';

interface StatsPanelProps {
  data: Stats;
}

export default function StatsPanel({ data }: StatsPanelProps) {
  return (
    <div className="space-y-6">

      {/* General */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-text-muted uppercase tracking-wide">
          General
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard title="Star Player" value={data.star_player_count} />
          <StatCard title="Overall score" value={data.overallScore} />
        </div>
      </div>

      {/* Trophies */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-text-muted uppercase tracking-wide">
          Trophies
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard title="Victories" value={data.trophies.victories} />
          <StatCard title="Defeats" value={data.trophies.defeats} />
          <StatCard title="Draws" value={data.trophies.draws} />
          <StatCard title="Total Matches" value={data.trophies.totalMatches} />
          <StatCard title="Trophies Gained" value={data.trophies.gained} />
          <StatCard title="Trophies Lost" value={data.trophies.lost} />
          <StatCard title="Win Rate" value={`${(data.trophies.winRate * 100).toFixed(1)}%`} />
          <StatCard title="Loss Rate" value={`${(data.trophies.lossRate * 100).toFixed(1)}%`} />
          <StatCard title="Draw Rate" value={`${(data.trophies.drawRate * 100).toFixed(1)}%`} />
        </div>
      </div>

      {/* Ranked */}
      <div>
        <h3 className="mb-3 text-sm font-medium text-text-muted uppercase tracking-wide">
          Ranked
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <StatCard title="Victories" value={data.ranked.victories} />
          <StatCard title="Defeats" value={data.ranked.defeats} />
          <StatCard title="Draws" value={data.ranked.draws} />
          <StatCard title="Total Matches" value={data.ranked.rankedTotalMatches} />
          <StatCard title="Win Rate" value={`${(data.ranked.rankedWinRate * 100).toFixed(1)}%`} />
          <StatCard title="Loss Rate" value={`${(data.ranked.rankedLossRate * 100).toFixed(1)}%`} />
          <StatCard title="Draw Rate" value={`${(data.ranked.rankedDrawRate * 100).toFixed(1)}%`} />
        </div>
      </div>

    </div>
  );
};