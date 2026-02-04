// src/components/pages/ApprovalPage.jsx

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { CheckCircle, XCircle, FileText, ChevronRight, Eye, AlertCircle } from 'lucide-react';
import MerchantDetail from '../components/organisms/MerchantDetail';
import PageHeader from '../components/organisms/PageHeader';

const ApprovalPage = () => {
  const registrations = useSelector((state) => state.merchant.registrationQueue);
  const [selectedReg, setSelectedReg] = useState(null); // State untuk Modal Detail

  return (
    <div className="space-y-6 animation-fade-in relative">

      {/* Header */}
      <PageHeader
        title="Approval / Onboarding"
        subtitle="Verifikasi dokumen merchant baru (Role: Maker/Checker)."
      />

      {/* Grid Layout: Full Width List now that Detail is Modal */}
      <div className="grid grid-cols-1 gap-6">

        {/* LIST ANTRIAN */}
        <div className="space-y-4">
          {registrations.map((reg) => (
            <div
              key={reg.id}
              onClick={() => setSelectedReg(reg)}
              className={`bg-white p-5 rounded-xl border cursor-pointer transition-all hover:shadow-md ${selectedReg?.id === reg.id
                ? 'border-mantap-blue ring-1 ring-mantap-blue'
                : 'border-slate-200 hover:border-mantap-blue/50'
                }`}
            >
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold ${reg.type === 'UMI' ? 'bg-purple-100 text-purple-600' : 'bg-blue-100 text-mantap-blue'
                    }`}>
                    {reg.businessName.substring(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-800">{reg.businessName}</h3>
                    <p className="text-xs text-slate-500">Owner: {reg.owner} • Kategori: {reg.type}</p>
                    <div className="flex items-center gap-2 mt-2">
                      <span className="text-[10px] bg-orange-100 text-orange-700 px-2 py-0.5 rounded font-bold border border-orange-200">
                        {reg.status}
                      </span>
                      <span className="text-[10px] text-slate-400">ID: {reg.id}</span>
                    </div>
                  </div>
                </div>
                <ChevronRight className={`text-slate-300 transition-transform ${selectedReg?.id === reg.id ? 'rotate-90 text-mantap-blue' : ''}`} />
              </div>
            </div>
          ))}

          {registrations.length === 0 && (
            <div className="p-10 bg-white border border-dashed border-slate-300 rounded-xl text-center text-slate-400">
              <CheckCircle className="mx-auto mb-2 opacity-50" size={32} />
              <p>Tidak ada antrian approval saat ini.</p>
            </div>
          )}
        </div>

      </div>

      {/* Detail Modal */}
      {selectedReg && (
        <MerchantDetail
          data={selectedReg}
          mode="readonly"
          onClose={() => setSelectedReg(null)}
        />
      )}

    </div>
  );
};

export default ApprovalPage;