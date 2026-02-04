
import React from 'react';

const Tabs = ({ tabs, activeTab, onChange }) => {
    return (
        <div className="flex border-b border-slate-100 px-6 gap-6 overflow-x-auto">
            {tabs.map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => onChange(tab.id)}
                    className={`flex items-center gap-2 py-4 text-sm font-medium border-b-2 transition-colors whitespace-nowrap ${activeTab === tab.id
                            ? 'border-mantap-blue text-mantap-blue'
                            : 'border-transparent text-slate-500 hover:text-slate-700'
                        }`}
                >
                    {tab.icon && <tab.icon size={16} />}
                    {tab.label}
                </button>
            ))}
        </div>
    );
};

export default Tabs;
