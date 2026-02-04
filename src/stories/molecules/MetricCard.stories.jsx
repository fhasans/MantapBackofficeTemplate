import MetricCard from '../../components/molecules/MetricCard';
import { Layers, CreditCard, Banknote, Users } from 'lucide-react';

export default {
    title: 'Molecules/MetricCard',
    component: MetricCard,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        value: { control: 'text' },
        trend: { control: 'number' },
        isUp: { control: 'boolean' },
        colorClass: { control: 'text' },
    },
};

export const Default = {
    args: {
        title: 'Total TPV',
        value: 'Rp 1.500.000',
        trend: 12.5,
        isUp: true,
        icon: Layers,
        colorClass: 'bg-blue-100 text-mantap-blue',
    },
};

export const NegativeTrend = {
    args: {
        title: 'Freq. Transaksi',
        value: '850',
        trend: 5.2,
        isUp: false,
        icon: CreditCard,
        colorClass: 'bg-purple-100 text-purple-600',
    },
};

export const NoTrend = {
    args: {
        title: 'Total Merchant',
        value: '143',
        trend: 0,
        isUp: true,
        icon: Users,
        colorClass: 'bg-green-100 text-green-600',
    },
};
