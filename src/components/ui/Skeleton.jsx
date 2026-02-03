import React from 'react';

// 1. Base Skeleton (Kotak Abu Berdenyut)
const Skeleton = ({ className }) => (
  <div className={`bg-slate-200 animate-pulse rounded-lg ${className}`} />
);

// 2. Skeleton khusus Dashboard (Sesuai Layout Grid Anda)
export const DashboardSkeleton = () => {
  return (
    <div className="space-y-6">
      {/* Header Skeleton */}
      <div className="space-y-2">
        <Skeleton className="h-8 w-64" /> {/* Judul */}
        <Skeleton className="h-4 w-96" /> {/* Subjudul */}
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        
        {/* KOLOM KIRI (Card & Table) */}
        <div className="xl:col-span-2 space-y-6">
          
          {/* Settlement Card Skeleton (Mirip Card Biru) */}
          <div className="h-64 rounded-2xl bg-slate-100 border border-slate-200 p-6 relative overflow-hidden">
             <div className="space-y-6 animate-pulse">
                <div className="flex justify-between">
                    <div className="h-4 w-40 bg-slate-200 rounded"></div>
                    <div className="h-6 w-16 bg-slate-200 rounded-full"></div>
                </div>
                <div className="h-12 w-1/2 bg-slate-300 rounded"></div>
                <div className="grid grid-cols-2 gap-4 mt-8 pt-6 border-t border-slate-200">
                    <div className="space-y-2">
                        <div className="h-3 w-24 bg-slate-200 rounded"></div>
                        <div className="h-6 w-32 bg-slate-300 rounded"></div>
                    </div>
                    <div className="space-y-2">
                        <div className="h-3 w-24 bg-slate-200 rounded"></div>
                        <div className="h-2 w-full bg-slate-200 rounded-full"></div>
                    </div>
                </div>
             </div>
          </div>

          {/* Table Skeleton */}
          <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
            <div className="flex justify-between items-center mb-4">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-20" />
            </div>
            {/* Header Table */}
            <div className="flex gap-4 border-b border-slate-100 pb-2">
                <Skeleton className="h-4 flex-1" />
                <Skeleton className="h-4 flex-1" />
                <Skeleton className="h-4 flex-1" />
                <Skeleton className="h-4 flex-1" />
            </div>
            {/* Rows */}
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="flex gap-4 py-3 border-b border-slate-50 last:border-0">
                    <Skeleton className="h-4 flex-1" />
                    <Skeleton className="h-4 flex-1" />
                    <Skeleton className="h-4 flex-1" />
                    <Skeleton className="h-4 flex-1" />
                </div>
            ))}
          </div>
        </div>

        {/* KOLOM KANAN (Widgets) */}
        <div className="space-y-6">
          {/* Quick Actions Skeleton */}
          <div className="bg-white p-6 rounded-xl border border-slate-200 h-48">
             <Skeleton className="h-6 w-32 mb-4" />
             <div className="grid grid-cols-2 gap-3">
                <Skeleton className="h-24 w-full rounded-xl" />
                <Skeleton className="h-24 w-full rounded-xl" />
             </div>
          </div>

          {/* Help Widget Skeleton */}
          <div className="bg-slate-50 p-6 rounded-xl border border-slate-200 h-40">
             <Skeleton className="h-6 w-40 mb-2" />
             <Skeleton className="h-4 w-full mb-4" />
             <Skeleton className="h-10 w-full rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. Skeleton Generic untuk Halaman Lain (History/QRIS/Help)
export const PageSkeleton = () => {
    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <div className="space-y-2">
                    <Skeleton className="h-8 w-64" />
                    <Skeleton className="h-4 w-96" />
                </div>
                <Skeleton className="h-10 w-32" />
            </div>
            
            {/* Kotak Filter Besar */}
            <Skeleton className="h-20 w-full rounded-xl" />

            {/* Kotak Konten Utama */}
            <div className="bg-white border border-slate-200 rounded-xl p-6 space-y-4">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                    <Skeleton key={i} className="h-12 w-full" />
                ))}
            </div>
        </div>
    )
}