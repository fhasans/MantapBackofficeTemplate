
import React from 'react';

const PageHeader = ({ title, subtitle, actions }) => {
    return (
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
                <h1 className="text-2xl font-bold text-slate-800">{title}</h1>
                {subtitle && <p className="text-slate-500 text-sm">{subtitle}</p>}
            </div>
            {actions && <div className="flex gap-2">{actions}</div>}
        </div>
    );
};

export default PageHeader;
