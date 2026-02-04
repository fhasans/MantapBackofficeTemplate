
import React from 'react';
import { UserCheck, AlertTriangle } from 'lucide-react';

const StatusBadge = ({ status, type = 'pill', icon = true }) => {
    // Define styles based on status
    const getStyles = () => {
        switch (status) {
            case 'Active':
            case 'success':
            case 'clean':
                return 'bg-green-100 text-green-700 border-green-200';
            case 'Suspend':
            case 'failed':
            case 'detected':
                return 'bg-red-100 text-red-700 border-red-200';
            case 'New':
                return 'bg-blue-100 text-blue-700 border-blue-200';
            case 'Settlement':
                return 'bg-purple-100 text-purple-700 border-purple-200';
            default: // payment, etc
                return 'bg-blue-50 text-blue-700 border-blue-100';
        }
    };

    // Define icon if needed
    const getIcon = () => {
        if (!icon) return null;
        switch (status) {
            case 'Active':
                return <UserCheck size={12} />;
            case 'Suspend':
            case 'detected':
                return <AlertTriangle size={12} />;
            default:
                return null;
        }
    };

    return (
        <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold border ${getStyles()}`}>
            {getIcon()}
            {status === 'detected' ? 'SUSPICIOUS' : status.toUpperCase()}
        </span>
    );
};

export default StatusBadge;
