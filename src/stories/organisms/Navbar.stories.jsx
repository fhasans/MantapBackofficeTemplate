import Navbar from '../../components/organisms/Navbar';

export default {
    title: 'Organisms/Navbar',
    component: Navbar,
    tags: ['autodocs'],
    argTypes: {
        ttsEnabled: { control: 'boolean' },
        setTtsEnabled: { action: 'setTtsEnabled' },
        toggleSidebar: { action: 'toggleSidebar' },
        onLogout: { action: 'onLogout' },
    },
};

export const Default = {
    args: {
        ttsEnabled: true,
    },
};

export const TTSOff = {
    args: {
        ttsEnabled: false,
    },
};
