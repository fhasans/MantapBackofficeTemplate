import React from 'react';
import { Shield, Lock, Clock, Activity, Search, Filter } from 'lucide-react';

export const RoleManagementPage = () => {
    const roles = [
        { id: 1, name: 'Super Admin', users: 3, permissions: 'All Access', status: 'Active' },
        { id: 2, name: 'Finance Checker', users: 5, permissions: 'Settlement, Report', status: 'Active' },
        { id: 3, name: 'Finance Maker', users: 8, permissions: 'Settlement Input', status: 'Active' },
        { id: 4, name: 'Onboarding Staff', users: 12, permissions: 'Merchant Verification', status: 'Active' },
        { id: 5, name: 'Support Agent', users: 20, permissions: 'View Transaction, Merchant Info', status: 'Active' },
    ];

    return (
        <div className="space-y-6 animation-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Role & Permission</h1>
                    <p className="text-slate-500 text-sm">Manajemen akses user backoffice.</p>
                </div>
                <button className="bg-mantap-blue text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-800 shadow-sm">
                    + Tambah Role
                </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {roles.map(role => (
                    <div key={role.id} className="bg-white p-6 rounded-xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                        <div className="flex items-center justify-between mb-4">
                            <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-mantap-blue">
                                <Shield size={20} />
                            </div>
                            <span className="text-xs font-bold px-2 py-1 bg-green-100 text-green-700 rounded-full">{role.status}</span>
                        </div>
                        <h3 className="font-bold text-lg text-slate-800">{role.name}</h3>
                        <div className="text-sm text-slate-500 mt-1 mb-4">{role.users} Users Assigned</div>

                        <div className="space-y-2">
                            <p className="text-xs font-bold text-slate-400 uppercase">Access Level</p>
                            <div className="flex items-center gap-2 text-sm text-slate-700 bg-slate-50 p-2 rounded border border-slate-100">
                                <Lock size={14} className="text-slate-400" />
                                {role.permissions}
                            </div>
                        </div>

                        <div className="mt-6 pt-4 border-t border-slate-100 flex gap-2">
                            <button className="flex-1 px-3 py-2 text-sm font-bold text-slate-600 hover:bg-slate-50 rounded-lg border border-slate-200">Edit</button>
                            <button className="flex-1 px-3 py-2 text-sm font-bold text-mantap-blue hover:bg-blue-50 rounded-lg border border-blue-100">Configure</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export const AuditLogPage = () => {
    const logs = [
        { id: 1, user: 'Admin Satriani', action: 'APPROVE_MERCHANT', target: 'Toko Berkah (M001239)', time: '02 Feb 2026 14:45', ip: '192.168.1.10' },
        { id: 2, user: 'Finance Budi', action: 'PROCESS_SETTLEMENT', target: 'Batch #9921', time: '02 Feb 2026 13:00', ip: '192.168.1.15' },
        { id: 3, user: 'System', action: 'AUTO_SUSPEND_FRAUD', target: 'TRX-998815', time: '02 Feb 2026 14:15', ip: 'Server-Automated' },
        { id: 4, user: 'Admin Satriani', action: 'LOGIN', target: 'Portal Backoffice', time: '02 Feb 2026 09:00', ip: '192.168.1.10' },
        { id: 5, user: 'Staff Ani', action: 'VIEW_MERCHANT_DETAIL', target: 'Warung Padang', time: '02 Feb 2026 10:30', ip: '192.168.1.20' },
    ];

    return (
        <div className="space-y-6 animation-fade-in">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-2xl font-bold text-slate-800">Audit Trail Log</h1>
                    <p className="text-slate-500 text-sm">Rekam jejak aktivitas user dan sistem.</p>
                </div>
                <div className="flex gap-2">
                    <button className="p-2 border border-slate-200 rounded-lg hover:bg-slate-50"><Filter size={20} className="text-slate-500" /></button>
                </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <table className="w-full text-sm text-left">
                    <thead className="bg-slate-50 text-slate-500 uppercase text-xs border-b border-slate-200">
                        <tr>
                            <th className="px-6 py-4">Timestamp / IP</th>
                            <th className="px-6 py-4">User Executor</th>
                            <th className="px-6 py-4">Action Type</th>
                            <th className="px-6 py-4">Target Object</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                        {logs.map(log => (
                            <tr key={log.id} className="hover:bg-slate-50 transition-colors">
                                <td className="px-6 py-4">
                                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                                        <Clock size={14} className="text-slate-400" /> {log.time}
                                    </div>
                                    <div className="text-xs text-slate-400 pl-6">{log.ip}</div>
                                </td>
                                <td className="px-6 py-4 font-bold text-slate-800">
                                    {log.user}
                                </td>
                                <td className="px-6 py-4">
                                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-slate-100 text-slate-600 text-xs font-mono font-bold border border-slate-200">
                                        <Activity size={12} /> {log.action}
                                    </span>
                                </td>
                                <td className="px-6 py-4 text-slate-600">
                                    {log.target}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
