import { AddProductStateInterface } from "@core/store/interface";
import { MoreIcon } from "../../assets/moreIcon";
import { TableProps } from '@crayond_dev/ui_table'

export const header: TableProps['Header'] = [
    {
        id: 's_no',
        align: 'center',
        disablePadding: false,
        label: 'S.No',
        isSortable: false,
    },
    {
        id: 'category',
        align: 'left',
        disablePadding: false,
        label: 'Category',
        isSortable: true,
    },
    {
        id: 'brand',
        align: 'left',
        disablePadding: false,
        label: 'Brand',
        isSortable: true,
    },
    {
        id: 'model',
        align: 'left',
        disablePadding: false,
        label: 'Model',
        isSortable: true,
    },
    {
        id: 'no_of_user_added',
        align: 'center',
        disablePadding: false,
        label: 'No of Users Added',
        isSortable: true,
    },
    {
        id: 'id',
        align: 'center',
        disablePadding: false,
        label: 'Action',
    },
]

export const tableData = (handleTableTooltip: (index: number, val: AddProductStateInterface) => void) => [
    { type: ['CUSTOM'], name: 's_no' },
    { type: ['TEXT'], name: 'category' },
    { type: ['TEXT'], name: 'brand' },
    { type: ['TEXT'], name: 'model' },
    { type: ['TEXT'], name: 'no_of_user_added' },
    {
        type: ['CUSTOM'],
        name: 'id',
    },
]

export const tabs = () => [
    {
        id: 0,
        label: 'List of Products',
    },
    {
        id: 1,
        label: 'New Requests',
    },
];

export const GiveMeRequestState = (details: any) => {
    const url = details?.img;
    const parts = url.split("/");
    const decodefilename = parts[parts.length - 1];
    const filename = decodeURIComponent(decodefilename);
    const data = {
        id: details?.id,
        icon: null,
        title: "",
        brand_value: {
            name: details?.brand,
            value: details?.brand,
        },
        category_value: {
            name: details?.category,
            product_id: details?.product_type_id,
            category_id: details?.category_id,
            value: details?.product_type_id,
            specifications: details?.specifications,
            insurance: true,
            amc: false,
            extended_warranty: true,
        },
        model: details?.model,
        no_of_users: "",
        warranty_details: {
            coverage_type: details?.coverage_type,
            coverage: details?.coverage,
            warranty_summary: "",
            covered: "",
            notCovered: "",
            serviceType: "",
            document_url: [{
                url: details?.warranty_details?.document_url[0],
                name: ""
            }],
        },

        product_id: [],
        img: {
            url: details?.img,
            name: filename,
        },
    };
    return data
}