import InputGroup from '../../components/molecules/InputGroup';

export default {
    title: 'Molecules/InputGroup',
    component: InputGroup,
    tags: ['autodocs'],
    argTypes: {
        label: { control: 'text' },
        value: { control: 'text' },
        disabled: { control: 'boolean' },
        placeholder: { control: 'text' },
    },
};

export const Default = {
    args: {
        label: 'Nama Lengkap',
        value: 'Budi Santoso',
        disabled: false,
        placeholder: 'Masukkan nama',
    },
};

export const Disabled = {
    args: {
        label: 'NIK',
        value: '3201123456780001',
        disabled: true,
    },
};

export const Empty = {
    args: {
        label: 'Alamat Email',
        value: '',
        placeholder: 'contoh@email.com',
    },
};
