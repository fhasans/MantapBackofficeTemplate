import React from 'react';
import { useSelector } from 'react-redux';
import { Layers, CreditCard, Banknote, Users } from 'lucide-react';
import Header from '../organisms/Header';
import MetricCard from '../molecules/MetricCard';

const formatIDR = (num) => new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR', maximumFractionDigits: 0 }).format(num);

export const KeyMetrics = () => {
    const stats = useSelector((state) => state.dashboard.stats);

    if (!stats) return null;

    return (
        <div className="animation-fade-in">
            <Header title="Key Metrics" desc="Statistik kunci performa harian (Point A)" />
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
                <MetricCard title="Total TPV" value={formatIDR(stats.tpv.value)} trend={stats.tpv.trend} isUp={stats.tpv.isUp} icon={Layers} colorClass="bg-blue-100 text-mantap-blue" />
                <MetricCard title="Freq. Transaksi" value={`${stats.trxCount.value.toLocaleString()}`} trend={stats.trxCount.trend} isUp={stats.trxCount.isUp} icon={CreditCard} colorClass="bg-purple-100 text-purple-600" />
                <MetricCard title="Disbursement" value={formatIDR(stats.disbursement.value)} trend={stats.disbursement.trend} isUp={stats.disbursement.isUp} icon={Banknote} colorClass="bg-orange-100 text-orange-600" />
                <MetricCard title="Total Merchant" value={stats.merchants.total} trend={1.2} isUp={true} icon={Users} colorClass="bg-green-100 text-green-600" />
            </div>
        </div>
    );
};

export default KeyMetrics;
