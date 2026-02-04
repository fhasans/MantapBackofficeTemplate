import Pagination from '../../components/molecules/Pagination';

export default {
    title: 'Molecules/Pagination',
    component: Pagination,
    tags: ['autodocs'],
    argTypes: {
        itemsPerPage: { control: 'number' },
        totalItems: { control: 'number' },
        currentPage: { control: 'number' },
        onPageChange: { action: 'pageChanged' },
    },
};

export const Default = {
    args: {
        itemsPerPage: 10,
        totalItems: 50,
        currentPage: 1,
    },
};

export const MiddlePage = {
    args: {
        itemsPerPage: 10,
        totalItems: 100,
        currentPage: 5,
    },
};

export const LastPage = {
    args: {
        itemsPerPage: 10,
        totalItems: 45,
        currentPage: 5,
    },
};

export const SinglePage = {
    args: {
        itemsPerPage: 10,
        totalItems: 5,
        currentPage: 1,
    },
};
