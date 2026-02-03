import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import {
  KeyMetricsPage,
  ChartAnalysisPage,
  TopLeaderboardsPage
} from './BackofficeDashboard';

const DashboardPage = ({
  stats,
  trendData,
  compositionData,
  topMerchants,
  topRegions
}) => {
  const location = useLocation();

  // Handle hash scrolling specifically after render
  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="space-y-12 pb-20">
      {/* Section A: Key Metrics */}
      <section id="dashboard-metrics" className="scroll-mt-24">
        <KeyMetricsPage stats={stats} />
      </section>

      {/* Section B: Charts */}
      <section id="dashboard-charts" className="scroll-mt-24">
        <ChartAnalysisPage
          trendData={trendData}
          compositionData={compositionData}
        />
      </section>

      {/* Section C: Leaderboards */}
      <section id="dashboard-leaderboard" className="scroll-mt-24">
        <TopLeaderboardsPage
          merchants={topMerchants}
          regions={topRegions}
        />
      </section>
    </div>
  );
};

export default DashboardPage;