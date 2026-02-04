import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import {
  KeyMetricsPage,
  ChartAnalysisPage,
  TopLeaderboardsPage
} from '../pages/BackofficeDashboard';
import MerchantListPage from '../pages/MerchantListPage';
import ApprovalPage from '../pages/ApprovalPage';
import HistoryPage from '../pages/HistoryPage';
import SettlementPage from '../pages/SettlementPage';
import { RoleManagementPage, AuditLogPage } from '../pages/AdminPages';
import HelpPage from '../pages/HelpPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/dashboard/metrics" replace />} />
      <Route path="/dashboard" element={<Navigate to="/dashboard/metrics" replace />} />

      {/* MODULE 1: DASHBOARD */}
      <Route path="/dashboard/metrics" element={<KeyMetricsPage />} />
      <Route path="/dashboard/charts" element={<ChartAnalysisPage />} />
      <Route path="/dashboard/leaderboards" element={<TopLeaderboardsPage />} />

      {/* MODULE 2: MERCHANT MANAGEMENT */}
      <Route path="/merchant/list" element={<MerchantListPage />} />
      <Route path="/merchant/approval" element={<ApprovalPage />} />

      {/* MODULE 3: ONBOARDING (Mapped to Approval page for now) */}
      <Route path="/onboarding/logs" element={<ApprovalPage />} />

      {/* MODULE 4: TRANSACTIONS */}
      <Route path="/transactions/global" element={<HistoryPage />} />
      <Route path="/transactions/fraud" element={<HistoryPage filter="fraud" />} />

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