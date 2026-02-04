import Sidebar from '../../components/organisms/Sidebar';
import { MemoryRouter } from 'react-router-dom';

export default {
    title: 'Organisms/Sidebar',
    component: Sidebar,
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <MemoryRouter initialEntries={['/dashboard/metrics']}>
                <div className="flex h-screen bg-slate-50">
                    <Story />
                </div>
            </MemoryRouter>
        ),
    ],
    argTypes: {
        isOpen: { control: 'boolean' },
        toggleSidebar: { action: 'toggled' },
        onLogout: { action: 'logout' },
    },
};

export const Open = {
    args: {
        isOpen: true,
    },
};

export const Closed = {
    args: {
        isOpen: false,
    },
};
