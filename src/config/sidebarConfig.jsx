import React from 'react';
import {
    LayoutDashboard, Users, Activity, Wallet, Shield,
    ClipboardList
} from 'lucide-react';

export const sidebarStructure = [
    // 1. DASHBOARD
    {
        label: "Dashboard",
        key: "module-dashboard",
        icon: <LayoutDashboard size={20} />,
        children: [
            { label: "Key Metrics", key: "dashboard-metrics", path: "/dashboard/metrics" },
            { label: "Chart Analysis", key: "dashboard-charts", path: "/dashboard/charts" },
            { label: "Top Leaderboards", key: "dashboard-leaderboard", path: "/dashboard/leaderboards" }
        ]
    },

    // 2. MERCHANT MANAGEMENT
    {
        label: "Merchant Management",
        key: "module-merchant",
        icon: <Users size={20} />,
        children: [
            { label: "Daftar Merchant", key: "merchant-list", path: "/merchant/list" }
        ]
    },

    // 3. MONITORING PENDAFTARAN
    {
        label: "New Onboarding",
        key: "module-onboarding",
        icon: <ClipboardList size={20} />,
        children: [
            { label: "Log Registrasi", key: "onboarding-log", path: "/onboarding/logs" }
        ]
    },

    // 4. TRANSACTION
    {
        label: "Transaction Monitoring",
        key: "module-transaction",
        icon: <Activity size={20} />,
        children: [
            { label: "Log Transaksi Global", key: "trx-global", path: "/transactions/global" },
            { label: "Fraud Detection", key: "trx-fraud", path: "/transactions/fraud" }
        ]
    },

    // 5. FINANCE
    {
        label: "Finance",
        key: "module-finance",
        icon: <Wallet size={20} />,
        children: [
            { label: "Laporan Settlement", key: "finance-settlement", path: "/finance/settlement" }
        ]
    },

    // 6. ADMIN
    {
        label: "Admin Management",
        key: "module-admin",
        icon: <Shield size={20} />,
        children: [
            { label: "Role & Permission", key: "admin-roles", path: "/admin/roles" },
            { label: "Audit Trail Log", key: "admin-audit", path: "/admin/audit" }
        ]
    }
];
