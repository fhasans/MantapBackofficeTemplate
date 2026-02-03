import React, { useState } from 'react';
import { X, User, Building2, FileText, Smartphone, Save, AlertCircle } from 'lucide-react';

const MerchantDetail = ({ data, mode = 'readonly', onClose }) => {
    const [activeTab, setActiveTab] = useState('identity');

    if (!data) return null;

    const isReadOnly = mode === 'readonly';

    const tabs = [
        { id: 'identity', label: 'Identitas & Kontak', icon: User },
        { id: 'business', label: 'Usaha & Keuangan', icon: Building2 },
        { id: 'legal', label: 'Dokumen Legal', icon: FileText },
        { id: 'device', label: 'QRIS & Perangkat', icon: Smartphone },
    ];

    return (
        <div className="fixed inset-0 z-50 flex justify-end">
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/30 backdrop-blur-sm transition-opacity" onClick={onClose} />

            {/* Drawer Panel */}
            <div className="relative w-full max-w-2xl bg-white h-full shadow-2xl flex flex-col animation-slide-in-right">

                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-slate-100">
                    <div>
                        <div className="flex items-center gap-3">
                            <h2 className="text-xl font-bold text-slate-800">Detail Merchant</h2>
                            <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold border uppercase ${data.status === 'Active' ? 'bg-green-100 text-green-700 border-green-200' :
                                    data.status === 'Suspend' ? 'bg-red-100 text-red-700 border-red-200' : 'bg-blue-100 text-blue-700 border-blue-200'
                                }`}>
                                {data.status || 'Draft'}
                            </span>
                        </div>
                        <p className="text-sm text-slate-500 mt-1">{data.name || data.businessName} - {data.mid || 'No MID'}</p>
                    </div>
                    <button onClick={onClose} className="p-2 hover:bg-slate-100 rounded-full text-slate-400 hover:text-red-500 transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Tabs */}
                <div className="flex border-b border-slate-100 px-6 gap-6 overflow-x-auto">
                    {tabs.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTab(tab.id)}
                            className={`flex items-center gap-2 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id
                                    ? 'border-mantap-blue text-mantap-blue'
                                    : 'border-transparent text-slate-500 hover:text-slate-700'
                                }`}
                        >
                            <tab.icon size={16} />
                            {tab.label}
                        </button>
                    ))}
                </div>

                {/* Content */}
                <div className="flex-1 overflow-y-auto p-6 bg-slate-50/50">

                    {/* TAB 1: IDENTITAS */}
                    {activeTab === 'identity' && (
                        <div className="space-y-6 animation-fade-in">
                            <SectionTitle title="Data Pemilik (Owner)" subtitle="Sesuai dengan e-KTP Pemilik Usaha" />
                            <div className="grid grid-cols-2 gap-4">
                                <InputGroup label="NIK" value={data.nik || '3201123456780001'} disabled={isReadOnly} />
                                <InputGroup label="Nama Lengkap" value={data.owner} disabled={isReadOnly} />
                                <InputGroup label="Nomor HP (WhatsApp)" value={data.phone || '08123456789'} disabled={isReadOnly} />
                                <InputGroup label="Email" value={data.email || 'owner@example.com'} disabled={isReadOnly} />
                            </div>

                            <SectionTitle title="Data PIC (Penanggung Jawab)" subtitle="Hubungan kontak operasional harian" />
                            <div className="grid grid-cols-2 gap-4">
                                <InputGroup label="Nama PIC" value={data.picName || data.owner} disabled={isReadOnly} />
                                <InputGroup label="No HP PIC" value={data.picPhone || data.phone} disabled={isReadOnly} />
                            </div>
                        </div>
                    )}

                    {/* TAB 2: USAHA */}
                    {activeTab === 'business' && (
                        <div className="space-y-6 animation-fade-in">
                            <SectionTitle title="Profil Usaha" subtitle="Informasi detail mengenai bisnis" />
                            <div className="grid grid-cols-2 gap-4">
                                <InputGroup label="Nama Resmi Toko" value={data.name || data.businessName} disabled={isReadOnly} />
                                <InputGroup label="Nama Stiker QR" value={data.stickerName || data.name} disabled={isReadOnly} />
                                <InputGroup label="Kategori Usaha (MCC)" value={data.category || '5812 - Restaurants'} disabled={isReadOnly} />
                                <InputGroup label="Tipe Layanan" value="QRIS Statis" disabled={isReadOnly} />
                            </div>

                            <SectionTitle title="Lokasi & Operasional" subtitle="Alamat fisik dan jam operasional" />
                            <div className="grid grid-cols-1 gap-4">
                                <InputGroup label="Alamat Lengkap" value={data.address || 'Jl. Jend. Sudirman No. 1'} disabled={isReadOnly} />
                            </div>
                            <div className="grid grid-cols-3 gap-4 mt-4">
                                <InputGroup label="Kota/Kab" value={data.city} disabled={isReadOnly} />
                                <InputGroup label="Kode Pos" value="12190" disabled={isReadOnly} />
                                <InputGroup label="Status Tempat" value="Milik Sendiri" disabled={isReadOnly} />
                            </div>

                            <SectionTitle title="Data Keuangan" subtitle="Rekening settlement dan omzet" />
                            <div className="grid grid-cols-2 gap-4">
                                <InputGroup label="No. Rekening Mandiri Taspen" value="101-00-91283-1" disabled={isReadOnly} />
                                <InputGroup label="Nama Pemilik Rekening" value={data.owner} disabled={isReadOnly} />
                                <InputGroup label="Omzet per Tahun" value="< Rp 300 Juta (UMI)" disabled={isReadOnly} />
                            </div>
                        </div>
                    )}

                    {/* TAB 3: LEGAL */}
                    {activeTab === 'legal' && (
                        <div className="space-y-6 animation-fade-in">
                            <div className="bg-blue-50 p-4 rounded-lg flex items-start gap-3 border border-blue-100">
                                <AlertCircle className="text-blue-600 shrink-0" size={20} />
                                <p className="text-sm text-blue-800">
                                    Dokumen berikut telah divalidasi oleh sistem OCR. Klik 'Lihat' untuk memeriksa file asli.
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-4">
                                <DocItem label="Foto e-KTP Pemilik" status="Valid" />
                                <DocItem label="Foto Selfie dengan KTP" status="Valid" />
                                <DocItem label="Foto Lokasi Usaha (Depan)" status="Valid" />
                                <DocItem label="Foto Produk / Daftar Menu" status="Valid" />
                                {data.type !== 'UMI' && <DocItem label="NPWP / NIB" status="Pending Upload" />}
                            </div>
                        </div>
                    )}

                    {/* TAB 4: QRIS */}
                    {activeTab === 'device' && (
                        <div className="space-y-6 animation-fade-in">
                            <SectionTitle title="Konfigurasi QRIS" subtitle="Data teknis pembayaran" />
                            <div className="grid grid-cols-2 gap-4">
                                <InputGroup label="National MID (NMID)" value={`ID10200${Math.floor(Math.random() * 1000)}`} disabled={true} />
                                <InputGroup label="Terminal ID (TID)" value={`8800${Math.floor(Math.random() * 1000)}`} disabled={true} />
                                <InputGroup label="Status PTEN" value="Active" disabled={true} />
                                <InputGroup label="MDR Rate" value="0.7%" disabled={true} />
                            </div>
                        </div>
                    )}

                </div>

                {/* Footer Actions */}
                {!isReadOnly && (
                    <div className="p-6 border-t border-slate-100 bg-white flex justify-end gap-3">
                        <button onClick={onClose} className="px-5 py-2.5 rounded-lg text-slate-500 font-bold hover:bg-slate-100 transition-colors">
                            Batal
                        </button>
                        <button className="px-5 py-2.5 rounded-lg bg-mantap-blue text-white font-bold hover:bg-blue-800 shadow-lg shadow-blue-900/10 flex items-center gap-2">
                            <Save size={18} /> Simpan Perubahan
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

// --- Sub Components ---

const SectionTitle = ({ title, subtitle }) => (
    <div className="mb-4">
        <h3 className="font-bold text-slate-800">{title}</h3>
        <p className="text-xs text-slate-400">{subtitle}</p>
    </div>
);

const InputGroup = ({ label, value, disabled }) => (
    <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-500">{label}</label>
        <input
            type="text"
            defaultValue={value}
            disabled={disabled}
            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-mantap-blue focus:ring-1 focus:ring-mantap-blue disabled:bg-slate-100 disabled:text-slate-500"
        />
    </div>
);

const DocItem = ({ label, status }) => (
    <div className="flex items-center justify-between p-4 bg-white border border-slate-200 rounded-lg">
        <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-slate-100 flex items-center justify-center text-slate-400">
                <FileText size={20} />
            </div>
            <div>
                <p className="font-bold text-slate-700 text-sm">{label}</p>
                <p className="text-xs text-slate-400">JPG/PNG • Max 2MB</p>
            </div>
        </div>
        <div className="flex items-center gap-3">
            <span className={`text-xs font-bold px-2 py-0.5 rounded ${status === 'Valid' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>{status}</span>
            <button className="text-sm font-bold text-mantap-blue hover:underline">Lihat</button>
        </div>
    </div>
);

export default MerchantDetail;
