import Tabs from '../../components/molecules/Tabs';
import { User, Building2, FileText, Smartphone } from 'lucide-react';

export default {
    title: 'Molecules/Tabs',
    component: Tabs,
    tags: ['autodocs'],
    argTypes: {
        activeTab: { control: 'text' },
        onChange: { action: 'tabChanged' },
    },
};

const sampleTabs = [
    { id: 'identity', label: 'Identitas & Kontak', icon: User },
    { id: 'business', label: 'Usaha & Keuangan', icon: Building2 },
    { id: 'legal', label: 'Dokumen Legal', icon: FileText },
    { id: 'device', label: 'QRIS & Perangkat', icon: Smartphone },
];

export const Default = {
    args: {
        tabs: sampleTabs,
        activeTab: 'identity',
    },
};

export const BusinessTabActive = {
    args: {
        tabs: sampleTabs,
        activeTab: 'business',
    },
};
