
import React from 'react';

const InputGroup = ({ label, value, disabled, type = "text", onChange }) => (
    <div className="space-y-1.5">
        <label className="text-xs font-bold text-slate-500">{label}</label>
        <input
            type={type}
            defaultValue={value}
            disabled={disabled}
            onChange={onChange}
            className="w-full px-3 py-2 bg-white border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-mantap-blue focus:ring-1 focus:ring-mantap-blue disabled:bg-slate-100 disabled:text-slate-500"
        />
    </div>
);

export default InputGroup;
