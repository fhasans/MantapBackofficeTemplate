import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Search, Download, Calendar, AlertTriangle } from 'lucide-react';
import { formatIDR } from '../utils/currency';
import PageHeader from '../components/organisms/PageHeader';
import StatusBadge from '../components/atoms/StatusBadge';
import Pagination from '../components/molecules/Pagination';

const HistoryPage = ({ filter }) => {
  const allTransactions = useSelector((state) => state.transaction.globalTransactions);

  const [filterStatus, setFilterStatus] = useState('all');
  const [fraudFilter, setFraudFilter] = useState('all');

  // Logic Filtering
  const filteredData = allTransactions.filter(item => {
    const matchStatus = filterStatus === 'all' || item.status === filterStatus;
    const matchFraud = fraudFilter === 'all' ||
      (fraudFilter === 'clean' ? item.fraudStatus === 'clean' : item.fraudStatus !== 'clean');
    return matchStatus && matchFraud;
  });

  return (
    <div className="space-y-6 animation-fade-in">

      {/* Header Page */}
      <PageHeader
        title="Transaction Monitoring"
        subtitle="Real-time global transaction log & fraud detection."
        actions={
          <>
            <button className="flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 px-4 py-2 rounded-lg text-sm font-bold hover:bg-red-100 transition-colors">
              <AlertTriangle size={18} /> Fraud Alerts (2)
            </button>
            <button className="flex items-center gap-2 bg-white border border-slate-200 px-4 py-2 rounded-lg text-sm font-semibold text-slate-600 hover:bg-slate-50 shadow-sm">
              <Download size={18} /> Export CSV
            </button>
          </>
        }
      />

      {/* Filter Bar */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col xl:flex-row gap-4">

        {/* Search */}
        <div className="relative flex-1 min-w-[300px]">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Search RRN, MID, TID, or Card Last 4..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mantap-blue/20 transition-all"
          />
        </div>

        {/* Filters Group */}
        <div className="flex flex-wrap gap-3">
          {/* Status Filter */}
          <div className="flex rounded-lg border border-slate-200 p-1 bg-slate-50">
            {['all', 'success', 'failed'].map((status) => (
              <button
                key={status}
                onClick={() => setFilterStatus(status)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold capitalize transition-colors ${filterStatus === status
                  ? 'bg-white text-slate-800 shadow-sm border border-slate-200'
                  : 'text-slate-500 hover:text-slate-700'
                  }`}
              >
                {status === 'all' ? 'All Status' : status}
              </button>
            ))}
          </div>

          {/* Fraud Filter */}
          <div className="flex rounded-lg border border-slate-200 p-1 bg-slate-50">
            {['all', 'detected'].map((fStatus) => (
              <button
                key={fStatus}
                onClick={() => setFraudFilter(fStatus)}
                className={`px-3 py-1.5 rounded-md text-xs font-bold capitalize transition-colors flex items-center gap-1 ${fraudFilter === fStatus
                  ? 'bg-white text-red-600 shadow-sm border border-slate-200'
                  : 'text-slate-500 hover:text-slate-700'
                  }`}
              >
                {fStatus === 'detected' && <AlertTriangle size={12} />}
                {fStatus === 'all' ? 'All Transactions' : 'Suspicious Only'}
              </button>
            ))}
          </div>

          {/* Date Picker Dummy */}
          <div className="flex items-center gap-2 bg-white border border-slate-200 px-3 py-2 rounded-lg text-slate-600 cursor-pointer hover:border-mantap-blue hover:text-mantap-blue transition-colors">
            <Calendar size={18} />
            <span className="text-sm font-medium">Today</span>
          </div>
        </div>
      </div>

      {/* Table Section */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 uppercase text-[10px] tracking-wider border-b border-slate-200">
              <tr>
                <th className="px-4 py-3 font-semibold">Time / RRN</th>
                <th className="px-4 py-3 font-semibold">Merchant (MID)</th>
                <th className="px-4 py-3 font-semibold">Terminal (TID)</th>
                <th className="px-4 py-3 font-semibold">Trans Type</th>
                <th className="px-4 py-3 font-semibold">PAN / Source</th>
                <th className="px-4 py-3 font-semibold text-right">Amount</th>
                <th className="px-4 py-3 font-semibold text-center">Status</th>
                <th className="px-4 py-3 font-semibold text-center">Risk Level</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.map((item) => {
                const isFraud = item.fraudStatus !== 'clean';
                return (
                  <tr key={item.id} className={`transition-colors ${isFraud ? 'bg-red-50/50 hover:bg-red-50' : 'hover:bg-slate-50'}`}>
                    <td className="px-4 py-3">
                      <div className="font-bold text-slate-700">{item.time}</div>
                      <div className="text-[10px] font-mono text-slate-400">{item.rrn}</div>
                    </td>
                    <td className="px-4 py-3">
                      <div className="text-xs font-bold text-slate-700">Toko Berkah</div>
                      <div className="text-[10px] font-mono text-slate-400">{item.mid}</div>
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-slate-500">
                      {item.tid}
                    </td>
                    <td className="px-4 py-3">
                      <StatusBadge status={item.type} icon={false} />
                    </td>
                    <td className="px-4 py-3 font-mono text-xs text-slate-500">
                      {item.pan}
                    </td>
                    <td className="px-4 py-3 font-bold text-slate-800 text-right">
                      {formatIDR(item.amount)}
                    </td>
                    <td className="px-4 py-3 text-center">
                      <StatusBadge status={item.status} icon={false} />
                    </td>
                    <td className="px-4 py-3 text-center">
                      {isFraud ? (
                        <div className="flex items-center justify-center gap-1 text-red-600 font-bold text-xs animate-pulse">
                          <AlertTriangle size={14} /> {item.fraudStatus.toUpperCase()}
                        </div>
                      ) : (
                        <StatusBadge status="clean" icon={false} />
                      )}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <Pagination itemsPerPage={filteredData.length} totalItems={allTransactions.length} />
      </div>
    </div>
  );
};

export default HistoryPage;