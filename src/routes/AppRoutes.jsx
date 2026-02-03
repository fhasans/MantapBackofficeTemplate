import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import {
  KeyMetricsPage,
  ChartAnalysisPage,
  TopLeaderboardsPage
} from '../components/pages/BackofficeDashboard';
import MerchantListPage from '../components/pages/MerchantListPage';
import ApprovalPage from '../components/pages/ApprovalPage';
import HistoryPage from '../components/pages/HistoryPage';
import SettlementPage from '../components/pages/SettlementPage';
import { RoleManagementPage, AuditLogPage } from '../components/pages/AdminPages';
import HelpPage from '../components/pages/HelpPage';

const AppRoutes = ({
  stats, trendData, compositionData, topMerchants, topRegions,
  merchants, registrations, transactions
}) => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/metrics" replace />} />
      <Route path="/dashboard" element={<Navigate to="/dashboard/metrics" replace />} />

      {/* MODULE 1: DASHBOARD */}
      <Route path="/dashboard/metrics" element={<KeyMetricsPage stats={stats} />} />
      <Route path="/dashboard/charts" element={<ChartAnalysisPage trendData={trendData} compositionData={compositionData} />} />
      <Route path="/dashboard/leaderboards" element={<TopLeaderboardsPage merchants={topMerchants} regions={topRegions} />} />

      {/* MODULE 2: MERCHANT MANAGEMENT */}
      <Route path="/merchant/list" element={<MerchantListPage merchants={merchants} />} />
      <Route path="/merchant/approval" element={<ApprovalPage registrations={registrations} />} />

      {/* MODULE 3: ONBOARDING (Mapped to Approval page for now) */}
      <Route path="/onboarding/logs" element={<ApprovalPage registrations={registrations} />} />

      {/* MODULE 4: TRANSACTIONS */}
      <Route path="/transactions/global" element={<HistoryPage transactions={transactions} />} />
      <Route path="/transactions/fraud" element={<HistoryPage transactions={transactions} filter="fraud" />} />

      {/* MODULE 5: FINANCE */}
      <Route path="/finance/settlement" element={<SettlementPage />} />

      {/* MODULE 6: ADMIN */}
      <Route path="/admin/roles" element={<RoleManagementPage />} />
      <Route path="/admin/audit" element={<AuditLogPage />} />

      <Route path="/help" element={<HelpPage />} />
      <Route path="*" element={<div className="p-8">Halaman tidak ditemukan</div>} />
    </Routes>
  );
};

export default AppRoutes;