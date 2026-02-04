import StatusBadge from '../../components/atoms/StatusBadge';

export default {
    title: 'Atoms/StatusBadge',
    component: StatusBadge,
    tags: ['autodocs'],
    argTypes: {
        status: {
            control: 'select',
            options: ['Active', 'Suspend', 'New', 'Success', 'Failed', 'Detected', 'Clean'],
        },
        icon: { control: 'boolean' },
    },
};

export const Active = {
    args: {
        status: 'Active',
        icon: true,
    },
};

export const Suspend = {
    args: {
        status: 'Suspend',
        icon: true,
    },
};

export const New = {
    args: {
        status: 'New',
        icon: true,
    },
};

export const Success = {
    args: {
        status: 'Success',
        icon: false,
    },
};

export const Failed = {
    args: {
        status: 'Failed',
        icon: false,
    },
};

export const FraudDetected = {
    args: {
        status: 'Detected',
        icon: true,
    },
};
