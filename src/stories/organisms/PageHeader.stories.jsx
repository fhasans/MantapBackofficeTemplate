import PageHeader from '../../components/organisms/PageHeader';
import { Download, AlertTriangle } from 'lucide-react';

export default {
    title: 'Organisms/PageHeader',
    component: PageHeader,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        subtitle: { control: 'text' },
    },
};

export const Default = {
    args: {
        title: 'Data Merchant',
        subtitle: 'Database seluruh mitra merchant terdaftar.',
        actions: (
            <button className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold">
                <Download size={18} /> Export Excel
            </button>
        ),
    },
};

export const WithMultipleActions = {
    args: {
        title: 'Transaction Monitoring',
        subtitle: 'Real-time global transaction log & fraud detection.',
        actions: (
            <div className="flex gap-2">
                <button className="flex items-center gap-2 bg-red-50 text-red-700 border border-red-200 px-4 py-2 rounded-lg text-sm font-bold">
                    <AlertTriangle size={18} /> Fraud Alerts
                </button>
                <button className="flex items-center gap-2 bg-white text-slate-600 border border-slate-200 px-4 py-2 rounded-lg text-sm font-semibold">
                    <Download size={18} /> Export CSV
                </button>
            </div>
        ),
    },
};
