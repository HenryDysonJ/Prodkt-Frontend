import { useCustomerSegment } from "@core/store/brand-app";
import { Sort } from "@core/ui/components/brandSort";
import TopBar from "@core/ui/components/brandTopBar";
import { getHeaderData } from "@core/utils";
import { useTableMenu, useToggle } from "@core/utils/hooks";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { InputField } from "@crayond_dev/ui_input-field";
import { Search } from "@crayond_dev/ui_search";
import {
    Box,
    Divider,
    Grid,
    Popover,
    Stack,
    SxProps,
    Theme,
    Typography,
} from "@mui/material";
import moment from "moment";
import { useEffect, useState } from "react";

import DataListOptionsBar from '../../../../../packages/ui/atoms/dataListOptionsBar';
import CustomTable, { IActionMenuItem } from '../../../../../packages/ui/atoms/table';
import EmptyStateIcon from "../../assets/emptyState";
import FilterIcon from "../../assets/filter";
import { ThreeDotIcon } from "../../assets/threeDotIcon";
import { segmentStyle } from "./style";

export interface SegmentProp {
    className?: string;
    sx?: SxProps<Theme>;
}



export function WarrantyRegister(props: SegmentProp): JSX.Element {
    const { className = "", sx = {}, ...rest } = props;
    const {
        limit,
        offset,
        search,
        sortItem,
        tag,
        error,
        segmentsTagLists,
        setError,
        setLimit,
        setOffset,
        clearAll,
        setHandleChangeTag,
        sethandleSortItem,
        setHandleSearch,
        setEditTagName,
        addSegments,
        updateSegments,
        deleteSegments,
        getSegmentsList,
    } = useCustomerSegment();
    const statuscheck = true

    const header = getHeaderData([
        { id: 'registeredDateAndTime', label: 'Registered Date and Time' },
        { id: 'customerName', label: 'Customer Name' },
        { id: 'productName', label: 'Product Name' },
        { id: 'serialNumber', label: 'Serial Number' },
        { id: 'warrantyStartDate', label: 'Warranty Start Date' },
        { id: 'warrantyEndDate', label: 'Warranty End Date' },
        { id: 'status', label: 'Status'},
        { id: 'action', label: '' },
    ]);


    const [anchorElRow, setAnchorElRow] =
        useState<HTMLButtonElement | null>(null);
    const open = Boolean(anchorElRow);

    // const handleSortByChange = (label: string) => {
    //     sethandleSortItem(label);
    //     if (label === "Recently added") {
    //         setSortbadge(true);
    //     } else {
    //         setSortbadge(true);
    //     }
    // };

    const handleSortByChange = (sortBy: any) => {
        sethandleSortItem(sortBy);
        

    }

    const { popupState, restBindTriggerProps, currentRow, handleMenuClick, handleMenuClose } = useTableMenu({
        popupId: 'warranty-menu',
    });


    const handleMenuItemClick = (menuItem: IActionMenuItem) => {
        console.log('handleMenuItemClick \n', menuItem);
        console.log('handleMenuItemClick currentRow\n', currentRow);

        handleMenuClose();
    };

    // Button onclick
    const handleCtaClick = (event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLButtonElement>) => {
        console.log('test')
    };

    const handlePerPageChange = (countPerPage: any) => {
        console.log('countPerPage', countPerPage)
    }

    const handlePageChange = (pageNumber: any) => {
        console.log('pageNumber', pageNumber)
    }











    const listData = [
        {
            registeredDateAndTime: '20-02-2020',
            customerName: 'John Paul',
            productName: 'One Plus',
            serialNumber: '23457896',
            warrantyStartDate: '20-02-2020',
            warrantyEndDate: '20-02-2020',
            id: 'testsyala',
            status: [
                {
                    label: statuscheck ? 'Active' : 'Inactive',
                    color: statuscheck ? '#008545' : '#3D0600',
                    bgColor: statuscheck ? 'rgba(0, 179.76, 94.61, 0.16)' : 'rgba(255, 45, 0, 0.16)',
                },
            ],
            action: 'action',
        },
        {
            registeredDateAndTime: '20-02-2020',
            customerName: ' Paul',
            productName: 'One Plus',
            serialNumber: '23457896',
            warrantyStartDate: '20-02-2020',
            warrantyEndDate: '20-02-2020',
            id: 'testsyala',
            status: [
                {
                    label: statuscheck ? 'Active' : 'Inactive',
                    color: statuscheck ? '#008545' : '#3D0600',
                    bgColor: statuscheck ? 'rgba(0, 179.76, 94.61, 0.16)' : 'rgba(255, 45, 0, 0.16)',
                },
            ],
            action: 'action',
        },
        {
            registeredDateAndTime: '20-02-2020',
            customerName: 'John Paul',
            productName: 'One Plus',
            serialNumber: '23457896',
            warrantyStartDate: '20-02-2020',
            warrantyEndDate: '20-02-2020',
            id: 'testsyala',
            status: [
                {
                    label: statuscheck ? 'Active' : 'Inactive',
                    color: statuscheck ? '#008545' : '#3D0600',
                    bgColor: statuscheck ? 'rgba(0, 179.76, 94.61, 0.16)' : 'rgba(255, 45, 0, 0.16)',
                },
            ],
            action: 'action',
        },
        {
            registeredDateAndTime: '20-02-2020',
            customerName: 'John Paul',
            productName: 'One Plus',
            serialNumber: '23457896',
            warrantyStartDate: '20-02-2020',
            warrantyEndDate: '20-02-2020',
            id: 'testsyala',
            status: [
                {
                    label: statuscheck ? 'Active' : 'Inactive',
                    color: statuscheck ? '#008545' : '#3D0600',
                    bgColor: statuscheck ? 'rgba(0, 179.76, 94.61, 0.16)' : 'rgba(255, 45, 0, 0.16)',
                },
            ],
            action: 'action',
        },
        {
            registeredDateAndTime: '20-02-2020',
            customerName: 'John Paul',
            productName: 'One Plus',
            serialNumber: '23457896',
            warrantyStartDate: '20-02-2020',
            warrantyEndDate: '20-02-2020',
            id: 'testsyala',
            status: [
                {
                    label: statuscheck ? 'Active' : 'Inactive',
                    color: statuscheck ? '#008545' : '#3D0600',
                    bgColor: statuscheck ? 'rgba(0, 179.76, 94.61, 0.16)' : 'rgba(255, 45, 0, 0.16)',
                },
            ],
            action: 'action',
        },
        {
            registeredDateAndTime: '20-02-2020',
            customerName: 'John Paul',
            productName: 'One Plus',
            serialNumber: '23457896',
            warrantyStartDate: '20-02-2020',
            warrantyEndDate: '20-02-2020',
            id: 'testsyala',
            status: [
                {
                    label: statuscheck ? 'Active' : 'Inactive',
                    color: statuscheck ? '#008545' : '#3D0600',
                    bgColor: statuscheck ? 'rgba(0, 179.76, 94.61, 0.16)' : 'rgba(255, 45, 0, 0.16)',
                },
            ],
            action: 'action',
        },
    ]


    useEffect(() => {
        // getSegmentsList();
    }, []);



    return (
        <Box
            sx={[
                {
                    ...segmentStyle.rootSx,
                },
                ...(Array.isArray(sx) ? sx : [sx]),
            ]}
            className={`${className}`}
            {...rest}
        >
            <TopBar title="Warranty registers" backBtn={false} />
            <Stack sx={segmentStyle.tableCardStyle}>
                <Grid container sx={segmentStyle.gridContainer} >
                    <Grid item xs={12}>

                        <DataListOptionsBar
                            hideFilter
                            ctaVariant={'outlined'}
                            search={search}
                            handleSearch={(e) => setHandleSearch(e?.target?.value)}
                            inputPlaceholder={'Search by customer name'}
                            sortItem={sortItem}
                            ctaText={'Export as CSV'}
                            // handleFilterClick={toggleFilter}
                            handleOnSortChange={handleSortByChange}
                            handleCtaClick={handleCtaClick}
                            sx={{ mb: 2 }}
                        />

                    </Grid>
                    <Grid item xs={12} spacing={2}>
                        <CustomTable
                            header={header}
                            dataList={listData ?? []}
                            columnData={[
                                { type: ['TEXT'], name: 'registeredDateAndTime', minWidth: 150 },
                                { type: ['TEXT'], name: 'customerName', minWidth: 150 },
                                { type: ['TEXT'], name: 'productName', minWidth: 150 },
                                { type: ['TEXT'], name: 'serialNumber', minWidth: 150 },
                                { type: ['TEXT'], name: 'warrantyStartDate', minWidth: 150 },
                                { type: ['TEXT'], name: 'warrantyEndDate', minWidth: 150 },
                                { type: ['LABEL'], name: 'status', width: 70 },
                                {
                                    type: ['ACTION'],
                                    name: 'action',
                                    minWidth: 20,
                                    variant: [
                                        {
                                            method: handleMenuClick, // Opens the Menu
                                            icon: <ThreeDotIcon {...restBindTriggerProps} />,
                                        },
                                    ],
                                }

                            ]}
                            actionMenuItems={[
                                { id: '1', label: 'Manage' }
                            ]}
                            popupState={popupState}
                            handleMenuItemClick={handleMenuItemClick}
                            totalRowCount={listData?.length}
                            onPageChange={handlePageChange}
                            onPerPageChange={handlePerPageChange}
                        />
                    </Grid>

                </Grid>
            </Stack>

        </Box>
    );
}
