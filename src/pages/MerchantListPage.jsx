// src/components/pages/MerchantListPage.jsx

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Search, Download, Building2, MapPin, Eye } from 'lucide-react';
import MerchantDetail from '../components/organisms/MerchantDetail';
import PageHeader from '../components/organisms/PageHeader';
import StatusBadge from '../components/atoms/StatusBadge';
import Pagination from '../components/molecules/Pagination';

const MerchantListPage = () => {
  const merchants = useSelector((state) => state.merchant.merchantList);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedMerchant, setSelectedMerchant] = useState(null);

  // Logic Filtering
  const filteredData = merchants.filter(merchant => {
    const matchSearch = merchant.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      merchant.mid.toLowerCase().includes(searchTerm.toLowerCase());
    const matchStatus = statusFilter === 'All' || merchant.status === statusFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6 animation-fade-in">

      {/* Header Halaman */}
      <PageHeader
        title="Data Merchant"
        subtitle="Database seluruh mitra merchant terdaftar."
        actions={
          <button className="flex items-center gap-2 bg-mantap-blue text-white px-4 py-2 rounded-lg text-sm font-bold hover:bg-blue-800 shadow-lg shadow-blue-900/20">
            <Download size={18} /> Export Excel
          </button>
        }
      />

      {/* Toolbar: Search & Filter */}
      <div className="bg-white p-4 rounded-xl shadow-sm border border-slate-200 flex flex-col md:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
          <input
            type="text"
            placeholder="Cari Nama Toko atau MID..."
            className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-mantap-blue/20"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          {['All', 'Active', 'Suspend', 'New'].map(status => (
            <button
              key={status}
              onClick={() => setStatusFilter(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors border ${statusFilter === status
                ? 'bg-blue-50 text-mantap-blue border-blue-200'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
            >
              {status}
            </button>
          ))}
        </div>
      </div>

      {/* Tabel Data */}
      <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-left">
            <thead className="bg-slate-50 text-slate-500 uppercase text-xs border-b border-slate-200">
              <tr>
                <th className="px-6 py-4">Merchant Identity</th>
                <th className="px-6 py-4">Pemilik & Lokasi</th>
                <th className="px-6 py-4">Tgl Gabung</th>
                <th className="px-6 py-4 text-center">Status</th>
                <th className="px-6 py-4 text-right">Aksi</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {filteredData.length > 0 ? (
                filteredData.map((item) => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors group">
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-mantap-blue">
                          <Building2 size={20} />
                        </div>
                        <div>
                          <div className="font-bold text-slate-800">{item.name}</div>
                          <div className="text-xs text-slate-500 font-mono">{item.mid}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="font-medium text-slate-700">{item.owner}</div>
                      <div className="text-xs text-slate-400 flex items-center gap-1">
                        <MapPin size={10} /> {item.city}
                      </div>
                    </td>
                    <td className="px-6 py-4 text-slate-500 text-xs">
                      {item.joinDate}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <StatusBadge status={item.status} />
                    </td>
                    <td className="px-6 py-4 text-right">
                      <button
                        onClick={() => setSelectedMerchant(item)}
                        className="p-2 hover:bg-slate-100 rounded-full text-mantap-blue hover:bg-blue-50 transition-colors"
                        title="Lihat Detail"
                      >
                        <Eye size={18} />
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-10 text-center text-slate-400">
                    Tidak ada data merchant yang ditemukan.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        <Pagination itemsPerPage={10} totalItems={filteredData.length} />
      </div>

      {/* Detail Modal */}
      {selectedMerchant && (
        <MerchantDetail
          data={selectedMerchant}
          mode="edit"
          onClose={() => setSelectedMerchant(null)}
        />
      )}
    </div>
  );
};

export default MerchantListPage;