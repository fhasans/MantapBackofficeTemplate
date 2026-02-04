
import React from 'react';

const Pagination = ({
    totalItems,
    itemsPerPage,
    currentPage = 1,
    onPageChange,
    showSummary = true
}) => {
    // Simple dummy implementation matching existing UI
    return (
        <div className="p-4 border-t border-slate-200 flex items-center justify-center lg:justify-between text-sm text-slate-500">
            {showSummary && (
                <span className="hidden lg:block">
                    Showing <strong>{itemsPerPage}</strong> of <strong>{totalItems}</strong> items
                </span>
            )}
            <div className="flex gap-2">
                <button className="px-3 py-1 border rounded hover:bg-slate-50 disabled:opacity-50" disabled>Previous</button>
                <div className="hidden sm:flex gap-1">
                    <button className="px-3 py-1 border rounded bg-mantap-blue text-white border-mantap-blue">1</button>
                    <button className="px-3 py-1 border rounded hover:bg-slate-50">2</button>
                    <button className="px-3 py-1 border rounded hover:bg-slate-50">...</button>
                    <button className="px-3 py-1 border rounded hover:bg-slate-50">12</button>
                </div>
                <button className="px-3 py-1 border rounded hover:bg-slate-50">Next</button>
            </div>
        </div>
    );
};

export default Pagination;
