import Header from '../../components/organisms/Header';

export default {
    title: 'Organisms/Header',
    component: Header,
    tags: ['autodocs'],
    argTypes: {
        title: { control: 'text' },
        desc: { control: 'text' },
    },
};

export const Default = {
    args: {
        title: 'Dashboard Overview',
        desc: 'Ringkasan performa bisnis hari ini.',
    },
};
