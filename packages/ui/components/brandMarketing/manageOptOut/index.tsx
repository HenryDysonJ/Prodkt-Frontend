import DownArrowIcon from "@assets/brandAssets/downArrow";
import { ExportIcon } from "@assets/brandAssets/exportIcon";
import GreenTickRound from "@assets/brandAssets/greenTickRound";
import DownPagenationArrow from "@assets/brandAssets/paginationDownArrow";
import LeftPaginationArrow from "@assets/brandAssets/paginationLeftArrow";
import RightPaginationArrow from "@assets/brandAssets/paginationRightArrow";
import { CustomTooltip } from "@atoms/customTooltip";
import { Sort } from "@components/brandSort";
import TopBar from "@components/brandTopBar";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { InputField } from "@crayond_dev/ui_input-field";
import { MobileInput } from "@crayond_dev/ui_mobile-input";
import { Pagination } from "@crayond_dev/ui_pagination";
import { Search } from "@crayond_dev/ui_search";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import { Table, TableProps } from "@crayond_dev/ui_table";
import {
    Box,
    Button,
    Divider,
    Grid,
    SelectChangeEvent,
    Typography
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { OtpInputButton } from "@atoms/otpInput";
import { segmentStyle } from "./style";
import { useManageOpsOuts } from "@core/store";

const MenuOption = [
    {
        id: 1,
        label: "View",
    },
    {
        id: 2,
        label: "Edit",
    },
    {
        id: 2,
        label: "Inactive",
    },
];

const value = [
    { label: "Option 1", value: 1994 },
    { label: "Option 2", value: 1972 },
    { label: "Option 3", value: 1974 },
    { label: "Option 4", value: 2008 },
    { label: "Option 5", value: 1957 },
    { label: "Option 6", value: 1993 },
    { label: "Option 7", value: 1994 },
];

const statusValue = [
    { label: "Active", value: "200" },
    { label: "Inactive", value: "20" },
];

export const ManageOptOps = () => {
    const { getManageOptsOut } = useManageOpsOuts()
    const [open, setOpen] = React.useState(false);
    const [openFilter, setOpenFilter] = React.useState(false);
    const [currentPage, setCurrentPage] = React.useState(1);
    const [rowsPerPage, setRowsPerPage] = React.useState("05");
    const [state1, setSate1] = React.useState(null);
    const [selected, setSelected] = React.useState([]);
    const [proceed, setProceed] = React.useState(true)
    const [otpValue, setOtpValue] = useState<string>('');

    const updateOtpState = (otp: string) => {
        setOtpValue(otp);
    };
    const [anchorElRow, setAnchorElRow] =
        useState<HTMLButtonElement | null>(null);
    const openPop = Boolean(anchorElRow);

    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    const TreeTableData = [
        {
            customerName: 'John Paul',
            phoneNumber: '78989 67897',
            dateAndTime: '20-02-2020, 07:00 PM',
            reason: 'Not subscribed',
            id: 'testsyala',
            custom: <Typography sx={segmentStyle.removeSx} onClick={handleOpen}>Remove from  Opt out</Typography>,
        },
        {
            customerName: 'John Paul',
            phoneNumber: '78989 67897',
            dateAndTime: '20-02-2020, 07:00 PM',
            reason: 'Not subscribed',
            id: 'testsyala',
            custom: <Typography sx={segmentStyle.removeSx} onClick={handleOpen}>Remove from  Opt out</Typography>,
        }, {
            customerName: 'John Paul',
            phoneNumber: '78989 67897',
            dateAndTime: '20-02-2020, 07:00 PM',
            reason: 'Not subscribed',
            id: 'testsyala',
            custom: <Typography sx={segmentStyle.removeSx} onClick={handleOpen}>Remove from  Opt out</Typography>,
        }, {
            customerName: 'John Paul',
            phoneNumber: '78989 67897',
            dateAndTime: '20-02-2020, 07:00 PM',
            reason: 'Not subscribed',
            id: 'testsyala',
            custom: <Typography sx={segmentStyle.removeSx} onClick={handleOpen}>Remove from  Opt out</Typography>,
        },
    ];

    const tableData: TableProps = {
        Header: [
            {
                id: "add-on",
                align: "left",
                disablePadding: false,
                label: "Customer name",
                isSortable: false,
            },
            {
                id: "item",
                align: "left",
                disablePadding: false,
                label: "Phone number",
                isSortable: false,
            },
            {
                id: "created-on",
                align: "left",
                disablePadding: false,
                label: "Date & time",
                isSortable: false,
            },
            {
                id: "status",
                align: "left",
                disablePadding: false,
                label: "Reason",
                isSortable: false,
            },

            {
                id: "action",
                align: "left",
                disablePadding: false,
                label: "",
                isSortable: false,
            },
        ],
        dataList: TreeTableData,
        tableData: [
            { type: ['TEXT'], name: 'customerName', width: 150 },
            { type: ['TEXT'], name: 'phoneNumber', width: 140 },
            { type: ['TEXT'], name: 'dateAndTime', width: 140 },
            { type: ['TEXT'], name: 'reason', width: 140 },
            {
                type: ['CUSTOM'],
                name: 'custom',
                width: 140,
                // viewHandel: ()=>console.log('testong'), // Opens the Menu

            }

        ],
        headerOptions: {
            fontSize: "14px",
            fontWeight: "600",
            color: "#4E585E",
            bgColor: "#f0f3f6",
            borderBottom: "0px solid #E6E6E6",
            padding: "12px",
            borderRadius: "4px",
        },
        rowOptions: {
            rowOddBgColor: "#fff",
            rowEvenBgColor: "#fff",
            paddingTop: "8px",
            paddingBottom: "2px",
            borderRadius: "4px",
        },
        cellOptions: {
            fontSize: "14px",
            fontWeight: "500",
            color: "#02111A",
            bgColor: "#fff",
            borderBottom: "1px solid #D9DBDD",
        },
        noDataFound: {
            fontSize: "16px",
            fontWeight: "600",
            color: "#353448",
            bgColor: "#F7F7F7",
            text: "",
            component: null,
        },
        tableBackground: "#ffffff",
        tableMinWidth: "100%",
        tableName: " ",
        marginAll: "0px",
        dense: "medium",
        paginationOption: {
            isEnable: false,
            rowPerPage: 25,
            rowsPerPageOptions: [5, 10, 25],
        },
        HeaderComponent: {
            variant: "CUSTOM",
            component: "",
        },
        stickyOptions: {
            stickyHeader: true,
            stickyLeft: [],
            stickyRight: ['action', 'response'],
          },
    };

    const handlePerPageChange = (event: SelectChangeEvent) => {
        const perPage = parseInt(event.target.value, 10);
        // Update the state variable name to match the prop name
        setRowsPerPage(perPage.toString());
        setCurrentPage(1);
    };

    const handlePageChange = (event: React.ChangeEvent<any>, page: number) => {
        setCurrentPage(page);
    };

    const startIndex = (currentPage - 1) * parseInt(rowsPerPage, 10);
    const endIndex = startIndex + parseInt(rowsPerPage, 10);

    const currentPageString = rowsPerPage?.toString();

    const totalCount = tableData?.dataList?.length || 0;
    const pageCount = Math.ceil(totalCount / parseInt(rowsPerPage, 10));

    const displayedData = tableData?.dataList?.slice(startIndex, endIndex);

    const handleInputOnChange = () => {
        console.log("log");
    };

    const navigate = useNavigate();

    const handleCloseOtp = () => {
        setTimeout(() => {
            setOpen(false)
        }, 3000)
    }

    const handleProceed = () => {
        setProceed(false)
        handleCloseOtp()
        setTimeout(() => {
            setProceed(true)
        }, 4000)
    }


    useEffect(() => {
        getManageOptsOut()
    }, [])

    return (
        <>

            <TopBar title="Manage opt outs" backBtn={false} />
            <Box sx={segmentStyle.rootSx}>
                <Box sx={segmentStyle.mainBox}>
                    <Box>
                        <Grid container mb={2}>
                            {/* Search input */}
                            <Grid
                                item
                                xs={2}
                                sm={3}
                                md={6}
                                lg={6}
                                xl={6}
                                display={"flex"}
                                gap={2}
                                alignItems={"center"}
                                justifyContent={"flex-start"}
                            >
                                <Search
                                    variant={"isSearchInput"}
                                    rootStyle={{
                                        width: "250px",
                                        borderColor: "1px solid #D9DBDD",
                                    }}
                                    inputWidth="100%"
                                    minExpandWidth="100%"
                                    placeHolderText='Search by template name'
                                    handleInputOnChange={handleInputOnChange}
                                    onSelectSearchDataFun={() => false}
                                    handleOptionChange={() => false}
                                    inputBorderHoverColor="#D9DBDD"
                                    inputBorderDefaultColor="#D9DBDD"
                                    inputBorderFocusColor="#D9DBDD"
                                    value={""}
                                />
                            </Grid>

                            {/* sort and add new button */}
                            <Grid
                                item
                                xs={10}
                                sm={9}
                                md={6}
                                lg={6}
                                xl={6}
                                sx={segmentStyle.gridbutton}
                            >
                                <CustomTooltip title={"Sort"} placement="bottom">
                                    <BasicButton sx={segmentStyle.buttonItemContainer}>
                                        <Sort badge={false} handleChange={() => false} />
                                    </BasicButton>
                                </CustomTooltip>


                                <Divider
                                    orientation={"vertical"}
                                    sx={segmentStyle.divider}
                                />
                                <Button
                                    variant={"outlined"}
                                    sx={segmentStyle.uploadBtn}
                                    startIcon={<ExportIcon />}
                                >
                                    Export as CSV
                                </Button>
                                <Button
                                    variant={"contained"}
                                    sx={segmentStyle.addNewButton}
                                    onClick={() => setOpenFilter(true)}
                                >
                                    Add new
                                </Button>
                            </Grid>
                        </Grid>
                        <Table
                            {...tableData}
                            dataList={displayedData as any}
                            tableMaxHeight={"100%"}
                        />
                    </Box>

                    {/* Table pagination */}
                    <Pagination
                        variant="text"
                        shape="rounded"
                        disabled={false}
                        size="small"
                        totalCount={["5", "10", "15", "20", "25"]}
                        startIcon={<LeftPaginationArrow />}
                        endIcon={<RightPaginationArrow />}
                        selectIcon={<DownPagenationArrow />}
                        count={pageCount}
                        perPage={currentPage}
                        value={parseInt(currentPageString, 10).toString()}
                        handleChange={handlePerPageChange}
                        handleChangePage={handlePageChange}
                        disableVisibleTotalCountSelectMenu={false}
                        paginationBoxStyle={segmentStyle.paginationBoxStyle}
                        pageCount={false}
                        pageText={"Page"}
                        showPaginationBottomCountText={
                            <>
                                <Typography sx={segmentStyle.paginationCountTextStyle}>
                                    {" "}
                                    showing 4-10 of 100 records
                                </Typography>
                            </>
                        }
                    />
                </Box>
                {/* Add new dialog */}
                <DialogBox
                    open={openFilter}
                    handleClose={() => setOpenFilter(false)}
                    title={"Add new opt out"}
                    titleStyle={segmentStyle.titleStyleDialog}
                    maxWidth="sm"
                    dialogmodalBoxStyle={segmentStyle.dialogmodal}
                    dialogBodyStyle={segmentStyle.dialogBodyStyle}
                    Body={
                        <>
                            <Box>
                                <SelectAndautocomplete
                                    options={value}
                                    variant="filled"
                                    selectType="chip"
                                    limitTags={1}
                                    onChange={(e: any, value: any) => {
                                        console.log("valuevaluevalue", e, value);
                                        setSate1(value);
                                    }}
                                    freeSolo
                                    value={state1}
                                    label={"Customer name"}
                                    // addOptionBtnLabel='Add New'
                                    addOptionAction={() => console.log("hih")}
                                    endAdornmentIcon={<DownArrowIcon />}
                                    rootStyleSx={segmentStyle.selectLabelStyle}
                                    optionStyle={{ fontSize: '1.4rem' }}
                                    labelSx={{ fontSize: '2.2rem' }}
                                    labelStyleProps={{ fontSize: '16px !important' }}
                                />
                                <MobileInput
                                    fullWidth
                                    id='MobileInput'
                                    inputStyle={{
                                        '&:focus': {
                                            border: '2px solid',
                                            borderColor: '#D9DBDD',
                                        },
                                        '&:hover ': {
                                            border: '1px solid',
                                            borderColor: '#D9DBDD',
                                        },
                                        'height': '60px !important',
                                        'padding': '11px 16px',
                                        'borderColor': '#D9DBDD !important',
                                        '& .MuiInputLabel-root': {
                                            color: '#4e585e !important',
                                            mt: 0.2,
                                        },
                                    }}
                                    label='Phone number'
                                    labelStyle={{
                                        '& span': {
                                            color: '#F44F5A',
                                        },
                                        'fontSize': '14px',
                                    }}
                                    onChange={(e) => {
                                        // handleChangeStakeHolder('mobileNo', e);
                                    }}
                                    placeholder='Enter mobile number'
                                    sx={{
                                        width: '100%', mt: 2,
                                        "& .MuiAutocomplete-endAdornment": {
                                            marginTop: '10px'
                                        }
                                    }}
                                    // selectValue={addNewStakeholder?.mobileNo}
                                    value={{
                                        // mobile: addNewStakeholder?.mobileNo?.mobile,
                                        // mobileCode: addNewStakeholder?.mobileNo?.mobileCode,
                                    }}
                                    popupIcon={<DownPagenationArrow />}
                                    variant='filled'
                                />
                                <InputField
                                    variant="filled"
                                    label="Reason"
                                    placeholder="Enter Reason"
                                    // onChange={(e: any) => setHandleChangeTag(e.target.value)}
                                    // value={tag?.tagName}
                                    isLabelRequired={false}
                                    helperText=""
                                    fullWidth
                                    // error={Boolean(error)}
                                    // errorMessage={error}
                                    isErrorRequired={false}
                                    inputStyle={{
                                        'width': '100%',
                                        '& .MuiInputLabel-root': {
                                            fontSize: '1.2rem',
                                            color: '#4E585E',
                                            mt: '0.5rem',
                                        },
                                    }}
                                    sx={{
                                        '& .MuiFilledInput-root': {
                                            "& .MuiFilledInput-input": {
                                                fontSize: '1.4rem'
                                            }
                                        }, mt: 2,
                                    }}
                                    labelStyle={{
                                        '& .MuiInputLabel-root': {
                                            fontSize: '1.2rem',
                                            color: '#4E585E',
                                            mt: '0.5rem',
                                        },
                                    }}
                                    errorStyle={{ fontSize: '1.0rem' }}

                                />
                            </Box>

                        </>
                    }
                    footerComponent={
                        <>

                            <Button
                                sx={segmentStyle.applyFilterButtonSx}
                                //   onClick={() => handleAppliFilter()}
                                variant="contained"
                            >
                                Save
                            </Button>
                        </>
                    }
                />

                {/* Otp dialog */}
                <DialogBox
                    open={open}
                    handleClose={handleCloseOtp}
                    title={" "}
                    titleStyle={segmentStyle.titleStyleDialog1}
                    maxWidth="xs"
                    closeIcon={false}
                    dialogmodalBoxStyle={!proceed ? segmentStyle.dialogmodal1 : segmentStyle.dialogmodal2}
                    dialogBodyStyle={!proceed ? segmentStyle.dialogBodyStyle1 : segmentStyle.dialogBodyStyle}
                    Body={
                        <>
                            {proceed ? (
                                <>
                                    <Box>
                                        <Typography sx={segmentStyle.otpSx} textAlign={'center'}>Enter OTP to manage opt outs</Typography>
                                        <Typography sx={segmentStyle.subText} textAlign={'center'}>4 digit authentication code has been sent to your email to manage opt-out list</Typography>
                                        <Box display={'flex'} justifyContent={'center'} mt={'52px'}>
                                            <OtpInputButton
                                                sx={segmentStyle.otpBtnSx}
                                                numInputs={4}
                                                isDisabled={false}
                                                value={otpValue as string}
                                                onChange={(e: string) => updateOtpState(e)}
                                                renderSeparator={<span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>}
                                                shouldAutoFocus={true}
                                            />
                                        </Box>
                                    </Box>
                                </>
                            ) : (
                                <Box display={'grid'} alignItems={'center'} justifyContent={'center'}>
                                    <Box display={'grid'} alignItems={'center'} justifyContent={'center'}>

                                        <GreenTickRound />
                                    </Box>
                                    <Box>
                                        <Typography sx={segmentStyle.otpSx} mt={4} textAlign={'center'}>Customer removed from opt-out list!</Typography>
                                        <Typography sx={segmentStyle.subText} textAlign={'center'}>Customers has been removed from the opt out list successfully</Typography>
                                    </Box>
                                </Box>
                            )}
                        </>
                    }
                    footerComponent={
                        proceed && (
                            <>
                                <Button
                                    sx={segmentStyle.applyFilterButtonSx}
                                    onClick={handleProceed}
                                    variant="contained"
                                >
                                    Proceed
                                </Button>
                            </>
                        )
                    }

                />


            </Box>
        </>
    );
};