import { TableProps } from '@crayond_dev/ui_table'
import { MoreIcon, ProductFridgeIcon } from '../../assets';


export const Header: TableProps['Header'] = [
    {
        id: 'id',
        align: 'center',
        disablePadding: false,
        label: 'S.No',
        isSortable: false,
    },
    {
        id: 'user_id',
        align: 'left',
        disablePadding: false,
        label: 'User ID',
        isSortable: true,
    },
    {
        id: 'user_name',
        align: 'left',
        disablePadding: false,
        label: 'User Name',
        isSortable: true,
    },
    {
        id: 'email_id',
        align: 'left',
        disablePadding: false,
        label: 'Email ID',
        isSortable: true,
    },
    {
        id: 'phone_number',
        align: 'left',
        disablePadding: false,
        label: 'Phone Number',
        isSortable: false,
    },

    {
        id: 'products',
        align: 'left',
        disablePadding: false,
        label: 'Products Count',
        isSortable: true,
    },
    {
        id: 'is_blocked',
        align: 'left',
        disablePadding: false,
        label: 'Block User',
        isSortable: false,
    },
    {
        id: 'edit',
        align: 'center',
        disablePadding: false,
        label: 'Action',
    },
];
export const tableData = [
    { type: ['TEXT'], name: 'id' },
    { type: ['TEXT'], name: 'user_id' },
    { type: ['TEXT'], name: 'user_name' },
    { type: ['TEXT'], name: 'email_id' },
    { type: ['TEXT'], name: 'phone_number' },
    {
        type: ['CUSTOM'],
        name: 'products',
    },
    {
        type: ['SWITCH'],
        name: 'is_blocked',
        switchText: [{ label_1: '', label_2: '' }],
    },
    {
        type: ['CUSTOM'],
        name: 'edit',
    },
];
