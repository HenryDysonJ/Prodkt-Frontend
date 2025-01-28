import { brandRoutes } from "@core/routes";
import { useCustomerSegment, useManageCustomers } from "@core/store/brand-app";
import TopBar from "@core/ui/components/brandTopBar";
import { BasicButton } from "@crayond_dev/ui_basic-button";
import { DashboardStats } from "@crayond_dev/ui_dashboard-stats";
import { DialogBox } from "@crayond_dev/ui_dialog";
import { InputField } from "@crayond_dev/ui_input-field";
import { Search } from "@crayond_dev/ui_search";
import { SelectAndautocomplete } from "@crayond_dev/ui_select-and-autocomplete";
import { Table } from "@crayond_dev/ui_table";
import {
  Avatar,
  Box,
  CircularProgress,
  Grid,
  Stack,
  SxProps,
  Theme,
  Typography,
} from "@mui/material";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import ActivityIcon from "../../assets/activity";
import BasicInfoicon from "../../assets/basicInfo";
import ConductIcon from "../../assets/conduct";
import { EmptyIcon } from "../../assets/emptyIcon";
import FilterIcon from "../../assets/filter";
import Ntify from "../../assets/notify.png";
import OpenTicketicon from "../../assets/openTicket";
import OppurtunityIcon from "../../assets/oppurtunity";
import phone from "../../assets/phone.png";
import ProductIcon from "../../assets/product";
import PurchaseValIcon from "../../assets/purchaseVal";
import RewardsIcon from "../../assets/rewards";
import ServiceHistoryIcon from "../../assets/serviceHistory";
import StarsIcon from "../../assets/stars";
import Wash from "../../assets/wash.png";
import WhatsappIcon from "../../assets/whatsapp";
import SteperComponent from "./components/steper";
import { viewCustomerStyle } from "./style";
import moment from "moment";
import { AddIconSvg, ErrorDialog } from "@core/ui/atoms";

export interface ViewCustomerprop {
  className?: string;
  sx?: SxProps<Theme>;
}

const steps = [
  {
    label: "Product Purchased",
    description: `Samsung 7 kg fully automatic front load washing machine silver (WW70R20GLSS/TL) has been purchased`,
    date: "On 12-12-2023,12:25 PM",
  },
  {
    label: "",
    description: `Samsung 7 kg fully automatic front load washing machine silver (WW70R20GLSS/TL) has been purchased`,
    date: "On 12-12-2023,12:25 PM",
  },
  {
    label: "",
    description: `Samsung 7 kg fully automatic front load washing machine silver (WW70R20GLSS/TL) has been purchased`,
    date: "On 12-12-2023,12:25 PM",
  },
];

const TagComponent = (props: any) => {
  const { tagitem, handleClickTag } = props;
  return (
    <Stack direction={"row"} columnGap={"0.6rem"}>
      {tagitem &&
        tagitem?.map((item: any, i: number) => (
          <Typography key={i} sx={viewCustomerStyle.tagStyle}>
            {item?.segment?.tag_name}
          </Typography>
        ))}
      <Typography
        sx={{
          ...viewCustomerStyle.tagStyle,
          backgroundColor: "#E0EAF9",
          color: "#0E70EB",
          cursor: "pointer",
        }}
        onClick={handleClickTag}
      >
        Add tag
      </Typography>
    </Stack>
  );
};

export function ViewCustomer(props: ViewCustomerprop): JSX.Element {
  const { className = "", sx = {}, ...rest } = props;
  const {
    segments,
    loading,
    viewCustomersList,
    setLoading,
    setHandleSelectTag,
    getViewCustomersList,
    updateCustomersTagList,
    sendInvoice,
  } = useManageCustomers();
  const { segmentsTagLists, getSegmentsList } = useCustomerSegment();

  const [openAddTag, setOpenAddTag] = useState<boolean>(false);
  const [search, setSearch] = useState("");
  const [tagError, setError] = useState({ tags: "" });
  const [selectMenu, setSelectMenu] = useState(0);
  const [openDialog, setOpenDialog] = useState(false);

  const navigate = useNavigate();
  const { state } = useLocation();

  const handleClickAddTag = () => {
    const tagopt: any =
      viewCustomersList?.data?.customer?.customer_segments?.map(
        (item: any) => ({
          label: item?.segment?.tag_name,
          value: item?.segment?.id,
        })
      );
    setHandleSelectTag(tagopt);
    setOpenAddTag(true);
  };

  const handleCloseTagModal = () => {
    setOpenAddTag(false);
  };

  const handleSearchFunc = (e: any) => {
    setSearch(e?.target.value);
  };

  const handleMoveAllOpportunities = (e: any) => {
    navigate(brandRoutes.opportunities);
  };

  const handleLinkWhatsApp = (e: any) => {
    navigate("/sideBar/template-broadcast");
  };

  const handleSaveTag = async () => {
    setLoading(true);
    if (segments?.length === 0) {
      setError({ tags: "Select customer tag required" });
    } else {
      const res: any = await updateCustomersTagList(state?.data?.id);
      if (res === 200) {
        setError({ tags: "" });
        setOpenAddTag(false);
        setLoading(false);
      } else {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      }
    }
  };

  const handleSelectmenus = (val: number) => {
    setSelectMenu(val);
    const element = document.getElementById(`${val}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const tagOptions =
    segmentsTagLists?.result?.map((item) => ({
      label: item?.tag_name,
      value: item?.id,
    })) || [];
  // debugger
  const summaryStatus = [
    {
      title: "Open tickets",
      count: viewCustomersList?.data?.overAllSummary?.openTickets,
      icon: <OpenTicketicon color={"#B38306"} />,
      color: "#f7f3e6",
    },
    {
      title: "Purchase Value",
      count: viewCustomersList?.data?.overAllSummary?.purchasedAmount,
      icon: <PurchaseValIcon />,
      color: "#e5fef5",
    },
    {
      title: "Reward points",
      count: viewCustomersList?.data?.overAllSummary?.rewardPoints,
      icon: <RewardsIcon />,
      color: "#e6f3f7",
    },
  ];

  const InfoMenu = [
    {
      id: 1,
      title: "Basic information",
      icon: <BasicInfoicon color={selectMenu === 1 ? "#0E70EB" : "#4E585E"} />,
    },
    {
      id: 2,
      title: "Open tickets",
      icon: <OpenTicketicon color={selectMenu === 2 ? "#0E70EB" : "#4E585E"} />,
    },
    {
      id: 3,
      title: "Service history",
      icon: (
        <ServiceHistoryIcon color={selectMenu === 3 ? "#0E70EB" : "#4E585E"} />
      ),
      count:
        viewCustomersList?.data?.overAllSummary?.openTickets !== 0 &&
        viewCustomersList?.data?.overAllSummary?.openTickets,
    },
    {
      id: 4,
      title: "Contact information",
      icon: <ConductIcon color={selectMenu === 4 ? "#0E70EB" : "#4E585E"} />,
    },
    {
      id: 5,
      title: "Products owned",
      icon: <ProductIcon color={selectMenu === 5 ? "#0E70EB" : "#4E585E"} />,
    },
    {
      id: 6,
      title: "Opportunities",
      icon: (
        <OppurtunityIcon color={selectMenu === 6 ? "#0E70EB" : "#4E585E"} />
      ),
    },
    {
      id: 7,
      title: "Activity log",
      icon: <ActivityIcon color={selectMenu === 7 ? "#0E70EB" : "#4E585E"} />,
    },
  ];

  const tableItems = [
    {
      ticketID: "34567890",
      requestedDateTime: "20-02-2020, 05:00 PM",
      requestType: "Warranty registration",
      reason: "20-02-2020",
      status: [
        {
          label: openAddTag === true ? "Active" : "Assigned",
          color: openAddTag === true ? "#008545" : "#D17800",
          bgColor: openAddTag === true ? "#CBF2E0" : "#FFDDB8",
        },
      ],
    },
    {
      ticketID: "34567890",
      requestedDateTime: "20-02-2020, 05:00 PM",
      requestType: "Warranty registration",
      reason: "20-02-2020",
      status: [
        {
          label: openAddTag !== true ? "Active" : "Assigned",
          color: openAddTag !== true ? "#008545" : "#3D0600",
          bgColor: openAddTag !== true ? "#CBF2E0" : "#FFDAD3",
        },
      ],
    },
    {
      ticketID: "34567890",
      requestedDateTime: "20-02-2020, 05:00 PM",
      requestType: "Warranty registration",
      reason: "20-02-2020",
      status: [
        {
          label: openAddTag !== true ? "Active" : "Assigned",
          color: openAddTag !== true ? "#008545" : "#3D0600",
          bgColor: openAddTag !== true ? "#CBF2E0" : "#FFDAD3",
        },
      ],
    },
  ];

  const tableData = {
    Header: [
      {
        id: "ticketID",
        align: "left",
        disablePadding: false,
        label: "Ticket ID",
        isSortable: false,
      },
      {
        id: "requestedDateTime",
        align: "left",
        disablePadding: false,
        label: "Requested date & time",
        isSortable: false,
      },
      {
        id: "requestType",
        align: "left",
        disablePadding: false,
        label: "Request type",
        isSortable: false,
      },
      {
        id: "reason",
        align: "left",
        disablePadding: false,
        label: "Reason",
        isSortable: false,
      },
      {
        id: "status",
        align: "left",
        disablePadding: false,
        label: "Status",
        isSortable: false,
      },
    ],
    dataList: tableItems,
    tableData: [
      { type: ["TEXT"], name: "ticketID", width: 100 },
      { type: ["TEXT"], name: "requestedDateTime", width: 150 },
      { type: ["TEXT"], name: "requestType", width: 160 },
      { type: ["TEXT"], name: "reason", width: 100 },
      { type: ["LABEL"], name: "status", width: 70 },
    ],
    headerOptions: {
      fontSize: "1.4rem",
      fontWeight: "600",
      color: "#4E585E",
      bgColor: "#F0F3F6",
      borderBottom: "0rem solid #D9DBDD",
      padding: "1.4rem 1.2rem",
      borderRadius: "0.8rem",
    },
    cellOptions: {
      fontSize: "1.4rem",
      fontWeight: "500",
      color: "#02111A",
      bgColor: "#fff",
      padding: "1.6rem 1.2rem",
      borderBottom: "0.1rem solid #D9DBDD",
    },
    noDataFound: {
      fontSize: "1.6rem",
      fontWeight: "600",
      color: "#353448",
      bgColor: "#F7F7F7",
      text: "",
      component: null,
    },
    tableBackground: "#ffffff",
    tableMinWidth: "100%",

    tableName: " ",
    marginAll: "0rem",

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
      stickyRight: ["action", "response"],
    },
  };

  const tableItemService = [
    {
      ticketID: "34567890",
      dateTime: "20-02-2020, 05:00 PM",
      requestType: "Warranty registration",
      reason: "20-02-2020",
      status: [
        {
          label: "Closed",
          color: "#4E585E",
          bgColor: "#E6E8E9",
        },
      ],
    },
    {
      ticketID: "34567890",
      dateTime: "20-02-2020, 05:00 PM",
      requestType: "Warranty registration",
      reason: "20-02-2020",
      status: [
        {
          label: "Closed",
          color: "#4E585E",
          bgColor: "#E6E8E9",
        },
      ],
    },
    {
      ticketID: "34567890",
      dateTime: "20-02-2020, 05:00 PM",
      reason: "20-02-2020",
      status: [
        {
          label: "Closed",
          color: "#4E585E",
          bgColor: "#E6E8E9",
        },
      ],
    },
  ];

  const tableDataService = {
    Header: [
      {
        id: "ticketID",
        align: "left",
        disablePadding: false,
        label: "Ticket ID",
        isSortable: false,
      },
      {
        id: "dateTime",
        align: "left",
        disablePadding: false,
        label: "Requested date & time",
        isSortable: false,
      },
      {
        id: "reason",
        align: "left",
        disablePadding: false,
        label: "Reason",
        isSortable: false,
      },
      {
        id: "status",
        align: "left",
        disablePadding: false,
        label: "Status",
        isSortable: false,
      },
    ],
    dataList: tableItemService,
    tableData: [
      { type: ["TEXT"], name: "ticketID", width: 130 },
      { type: ["TEXT"], name: "dateTime", width: 160 },
      { type: ["TEXT"], name: "reason", width: 130 },
      { type: ["LABEL"], name: "status", width: 50 },
    ],
    headerOptions: {
      fontSize: "1.4rem",
      fontWeight: "600",
      color: "#4E585E",
      bgColor: "#F0F3F6",
      borderBottom: "0rem solid #D9DBDD",
      padding: "1.4rem 1.2rem",
      borderRadius: "0.8rem",
    },
    cellOptions: {
      fontSize: "1.4rem",
      fontWeight: "500",
      color: "#02111A",
      bgColor: "#fff",
      padding: "1.6rem 1.2rem",
      borderBottom: "0.1rem solid #D9DBDD",
    },
    noDataFound: {
      fontSize: "1.6rem",
      fontWeight: "600",
      color: "#353448",
      bgColor: "#F7F7F7",
      text: "",
      component: null,
    },
    tableBackground: "#ffffff",
    tableMinWidth: "100%",
    tableName: " ",
    marginAll: "0rem",
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
      stickyRight: ["action", "response"],
    },
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  const handleCancel = () => {
    setOpenDialog(false);
  };

  const handleDownload = () => {
    sendInvoice(viewCustomersList?.data)
  }

  useEffect(() => {
    getViewCustomersList(state?.data?.id);
  }, []);

  useEffect(() => {
    getSegmentsList('', '', 0, 5,);
  }, [openAddTag]);
  return (
    <Box
      sx={[
        {
          ...viewCustomerStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <TopBar
        title={state?.data?.customerName}
        backBtn={true}
        backBtnFunc={() => navigate(-1)}
        containButtonText=""
        outlineButtonText=""
      />
      <Stack sx={viewCustomerStyle.rooContainerStyle}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={12} md={3} lg={2.4}>
            <Stack sx={viewCustomerStyle.infoMenuCardStyle}>
              {InfoMenu &&
                InfoMenu?.map((items: any, i, { length }) => (
                  <Stack
                    key={i}
                    sx={{
                      ...viewCustomerStyle.infoItemStyle,
                      backgroundColor:
                        selectMenu === items?.id ? "#E9F3FF" : "",
                    }}
                    mb={length === i + 1 ? "0rem" : "1rem"}
                    onClick={() => handleSelectmenus(items?.id)}
                  >
                    <Box mt={"0.4rem"}>{items?.icon}</Box>
                    <Typography
                      sx={{
                        ...viewCustomerStyle.menuItemTitle,
                        color: selectMenu === items?.id ? "#0E70EB" : "",
                      }}
                    >
                      {items?.title}
                    </Typography>
                    {items?.count && (
                      <Avatar sx={viewCustomerStyle.menuCountStyle}>
                        {items?.count}
                      </Avatar>
                    )}
                  </Stack>
                ))}
            </Stack>
          </Grid>
          <Grid item xs={12} sm={12} md={9} lg={9.6}>
            <Stack sx={viewCustomerStyle.summaryRootContainer}>
              <Stack id={"0"}>
                <Typography sx={viewCustomerStyle.summaryTitle}>
                  Overall summary
                </Typography>
                {/** status part */}
                <Stack sx={viewCustomerStyle.statusContainer} mt={2}>
                  <Grid container spacing={2}>
                    {summaryStatus &&
                      summaryStatus.map((items: any, i: number) => (
                        <Grid key={i} item xs={6} md={3}>
                          <DashboardStats
                            name={items?.title}
                            count={items?.count}
                            IconbgColor={items?.color}
                            Icon={items?.icon}
                            sx={viewCustomerStyle.dashboardCardStyle}
                          />
                        </Grid>
                      ))}
                  </Grid>
                </Stack>
              </Stack>
              {/** Basic information part */}
              <Stack id="1" sx={viewCustomerStyle.basicInfoContainer} mt={2}>
                <Typography sx={viewCustomerStyle.summaryTitle}>
                  Basic information
                </Typography>
                <Stack
                  sx={viewCustomerStyle.customerInfoContainer}
                  mt={2}
                  pr={"3rem"}
                >
                  <Box>
                    <Typography sx={viewCustomerStyle.customerTitleStyle}>
                      Customer ID
                    </Typography>
                    <Typography sx={viewCustomerStyle.customerValueStyle}>
                      {viewCustomersList?.data?.customer?.customer_id}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={viewCustomerStyle.customerTitleStyle}>
                      Full name
                    </Typography>
                    <Typography
                      sx={viewCustomerStyle.customerValueStyle}
                    >{`${viewCustomersList?.data?.customer?.first_name} ${viewCustomersList?.data?.customer?.last_name}`}</Typography>
                  </Box>
                  <Box>
                    <Typography sx={viewCustomerStyle.customerTitleStyle}>
                      Mobile number
                    </Typography>
                    <Typography sx={viewCustomerStyle.customerValueStyle}>
                      {viewCustomersList?.data?.customer?.mobile_no}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={viewCustomerStyle.customerTitleStyle}>
                      Email ID
                    </Typography>
                    <Typography sx={viewCustomerStyle.customerValueStyle}>
                      {viewCustomersList?.data?.customer?.email_id}
                    </Typography>
                  </Box>
                </Stack>

                <Stack mt={3}>
                  <Typography sx={viewCustomerStyle.customerTitleStyle} mb={1}>
                    Tags
                  </Typography>

                  <TagComponent
                    tagitem={
                      viewCustomersList?.data?.customer?.customer_segments
                    }
                    handleClickTag={handleClickAddTag}
                  />
                </Stack>
              </Stack>
              {/** Open tickets part */}
              <Stack
                id="2"
                sx={viewCustomerStyle.openTicketContainerTableStyle}
                mt={2}
              >
                <Typography sx={viewCustomerStyle.summaryTitle}>
                  Open tickets{" "}
                  {viewCustomersList?.data?.customer?.open_tickets?.length >
                    0 && `(${3})`}
                </Typography>
                <Box mt={2} height={"100%"}>
                  {viewCustomersList?.data?.customer?.open_tickets?.length >
                    0 ? (
                    <Table {...(tableData as any)} tableMaxHeight={"30vh"} />
                  ) : (
                    <Box
                      sx={{
                        display: "grid",
                        placeItems: "center",
                        height: "100%",
                      }}
                    >
                      <EmptyIcon />
                    </Box>
                  )}
                </Box>
              </Stack>
              {/** Service history part */}
              <Stack
                id="3"
                sx={viewCustomerStyle.openTicketContainerTableStyle}
                mt={2}
              >
                <Typography sx={viewCustomerStyle.summaryTitle}>
                  Service history
                  {viewCustomersList?.data?.customer?.service_history?.length >
                    0 && `(${3})`}
                </Typography>
                <Box mt={2}>
                  {viewCustomersList?.data?.customer?.service_history?.length >
                    0 ? (
                    <Table
                      {...(tableDataService as any)}
                      tableMaxHeight={"30vh"}
                    />
                  ) : (
                    <Box
                      sx={{
                        display: "grid",
                        placeItems: "center",
                        height: "100%",
                      }}
                    >
                      <EmptyIcon />
                    </Box>
                  )}
                </Box>
              </Stack>
              {/** Contact information part */}
              <Stack id="4" sx={viewCustomerStyle.contactInfoContainer} mt={2}>
                <Typography sx={viewCustomerStyle.summaryTitle}>
                  Contact information
                </Typography>
                <Stack
                  sx={viewCustomerStyle.customerInfoContainer}
                  mt={2}
                  pr={"3rem"}
                >
                  <Box>
                    <Typography sx={viewCustomerStyle.customerTitleStyle}>
                      Mobile number
                    </Typography>
                    <Typography sx={viewCustomerStyle.customerValueStyle}>
                      {viewCustomersList?.data?.customer?.mobile_no}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={viewCustomerStyle.customerTitleStyle}>
                      Email ID
                    </Typography>
                    <Typography
                      sx={viewCustomerStyle.customerValueStyle}
                    >{`${viewCustomersList?.data?.customer?.email_id}`}</Typography>
                  </Box>
                  <Box>
                    <Typography sx={viewCustomerStyle.customerTitleStyle}>
                      Address
                    </Typography>
                    <Typography sx={viewCustomerStyle.customerValueStyle}>
                    {viewCustomersList?.data?.customer?.address}
                    </Typography>
                  </Box>
                  <Box>
                    <Typography sx={viewCustomerStyle.customerTitleStyle}>
                      Region
                    </Typography>
                    <Typography sx={viewCustomerStyle.customerValueStyle}>
                      {viewCustomersList?.data?.customer?.region}
                    </Typography>
                  </Box>
                </Stack>
              </Stack>
              {/** Products owned part */}
              <Stack id="5" sx={viewCustomerStyle.productOwnedContainer} mt={2}>
                <Typography sx={viewCustomerStyle.summaryTitle}>
                  Products owned
                  {viewCustomersList?.data?.customer?.customer_products
                    ?.length > 0 &&
                    `(${viewCustomersList?.data?.customer?.customer_products?.length})`}
                </Typography>
                <Box
                  sx={{
                    overflow: "scroll",
                    maxHeight:
                      viewCustomersList?.data?.customer?.customer_products
                        ?.length === 2
                        ? "47rem"
                        : "max-condent",
                  }}
                >
                  {viewCustomersList?.data?.customer?.customer_products
                    ?.length > 0 ? (
                    viewCustomersList?.data?.customer?.customer_products?.map(
                      (item: any, i: number, { length }: any) => (
                        <Stack
                          sx={{
                            borderBottom:
                              length === i + 1
                                ? "0rem solid"
                                : "0.1rem solid #E5E8EB",
                            paddingBottom: length === i + 1 ? "" : "1.6rem",
                          }}
                          key={item?.id}
                        >
                          <Stack
                            sx={viewCustomerStyle.customerInfoContainer}
                            mt={2}
                          >
                            <Box sx={viewCustomerStyle.productContainer}>
                              <Avatar
                                src={item?.product?.product_image}
                                sx={viewCustomerStyle.productImg}
                              />
                              <Box>
                                <Typography
                                  sx={{
                                    ...viewCustomerStyle.summaryTitle,
                                    fontWeight: "500",
                                    fontSize: "1.4rem",
                                  }}
                                >
                                  {item?.product?.product_name}
                                </Typography>
                                <Typography
                                  sx={viewCustomerStyle.customerTitleStyle}
                                >
                                  Purchase made on {item?.purchase_date}
                                </Typography>
                              </Box>
                            </Box>
                            <Box>
                              <Stack
                                sx={{
                                  ...viewCustomerStyle.infoItemStyle,
                                  columnGap: "0.4rem",
                                }}
                                onClick={() => setOpenDialog(true)}
                              >
                                <WhatsappIcon />
                                <Typography sx={viewCustomerStyle.sendlinkText}>
                                  Send invoice in whatsapp
                                </Typography>
                              </Stack>
                            </Box>
                          </Stack>

                          <Stack
                            sx={{
                              ...viewCustomerStyle.contactInfoContainer,
                              backgroundColor: "#F0F3F6",
                              minHeight: "",
                            }}
                            mt={"1.6rem"}
                          >
                            <Typography sx={viewCustomerStyle.summaryTitle}>
                              Warranty info
                            </Typography>
                            <Stack
                              sx={viewCustomerStyle.customerInfoContainer}
                              mt={2}
                            >
                              <Box>
                                <Typography
                                  sx={viewCustomerStyle.customerTitleStyle}
                                >
                                  Registration date
                                </Typography>
                                <Typography
                                  sx={viewCustomerStyle.customerValueStyle}
                                >
                                  {moment(item?.purchase_date).format('DD-MM-YYYY') ?? ''}
                                </Typography>
                              </Box>
                              <Box>
                                <Typography
                                  sx={viewCustomerStyle.customerTitleStyle}
                                >
                                  Warranty Expiration date
                                </Typography>
                                <Typography
                                  sx={viewCustomerStyle.customerValueStyle}
                                >
                                  {moment(item?.warranty_expiry_date).format('DD-MM-YYYY') ?? ''}
                                </Typography>
                              </Box>
                              <Box>
                                <Typography
                                  sx={viewCustomerStyle.customerTitleStyle}
                                >
                                  Status
                                </Typography>
                                <Typography
                                  sx={{
                                    ...viewCustomerStyle.tagStyle,
                                    backgroundColor:
                                      item?.is_active === true
                                        ? "#CBF2E0"
                                        : "#FFDAD3",
                                    color:
                                      item?.is_active === true
                                        ? "#008545"
                                        : "#3D0600",
                                  }}
                                >
                                  {item?.is_active === true
                                    ? "Active"
                                    : "Inactive"}
                                </Typography>
                              </Box>
                              <Box></Box>
                            </Stack>
                          </Stack>
                        </Stack>
                      )
                    )
                  ) : (
                    <Box
                      sx={{
                        display: "grid",
                        placeItems: "center",
                        height: "100%",
                      }}
                    >
                      <EmptyIcon />
                    </Box>
                  )}
                </Box>
              </Stack>
              {/** Opportunities  part */}
              <Stack
                id="6"
                sx={viewCustomerStyle.opportunitiesContainer}
                mt={2}
              >
                <Stack sx={viewCustomerStyle.customerInfoContainer}>
                  <Typography sx={viewCustomerStyle.summaryTitle}>
                    Opportunities{" "}
                  </Typography>
                  <Box sx={viewCustomerStyle.productContainer}>
                    <Search
                      value={search}
                      variant={"isSearchInput"}
                      rootStyle={{ minWidth: "20rem" }}
                      inputWidth="100%"
                      minExpandWidth="100%"
                      placeHolderText="Search by product name"
                      placeHolderColor="#4E585E"
                      onSelectSearchDataFun={() => false}
                      handleOptionChange={() => false}
                      handleInputOnChange={handleSearchFunc}
                      inputBorderHoverColor="#D9DBDD"
                      inputBorderDefaultColor="#D9DBDD"
                      inputBorderFocusColor="#D9DBDD"
                    />
                    <Box sx={viewCustomerStyle.filterButton}>
                      <FilterIcon />
                    </Box>
                  </Box>
                </Stack>
                {viewCustomersList?.data?.customer?.opportunities?.length >
                  0 ? (
                  <>
                    <Stack
                      sx={{
                        backgroundColor: "#F0F3F6",
                        p: "1.6rem",
                        borderRadius: "0.8rem",
                        mt: " 1.6rem",
                      }}
                    >
                      <Box
                        sx={{
                          ...viewCustomerStyle.infoItemStyle,
                          columnGap: "0.8rem",
                        }}
                      >
                        <StarsIcon />
                        <Typography
                          sx={{
                            ...viewCustomerStyle.summaryTitle,
                            fontSize: "1.4rem",
                          }}
                        >
                          Upsell product
                        </Typography>
                      </Box>
                      <Stack
                        sx={viewCustomerStyle.customerInfoContainer}
                        mt={2}
                      >
                        <Box sx={viewCustomerStyle.productContainer}>
                          <Avatar
                            src={phone}
                            sx={viewCustomerStyle.productImg}
                          />
                          <Box>
                            <Typography
                              sx={{
                                ...viewCustomerStyle.summaryTitle,
                                fontWeight: "500",
                                fontSize: "1.4rem",
                                width: { md: "100%", lg: "53rem" },
                                lineHeight: "2rem",
                              }}
                            >
                              Customer is eligible for an exclusive upgrade to
                              latest model mobile. ask them to upgrade the
                              mobile and help them enjoy cutting-edge features
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Stack
                            sx={{
                              ...viewCustomerStyle.infoItemStyle,
                              columnGap: "0.4rem",
                            }}
                          >
                            <WhatsappIcon />
                            <Typography
                              sx={viewCustomerStyle.sendlinkText}
                              onClick={handleLinkWhatsApp}
                            >
                              Send invoice in whatsapp
                            </Typography>
                          </Stack>
                        </Box>
                      </Stack>
                    </Stack>

                    <Stack
                      sx={{
                        backgroundColor: "#F0F3F6",
                        p: "1.6rem",
                        borderRadius: "0.8rem",
                        mt: "1.6rem",
                      }}
                    >
                      <Box
                        sx={{
                          ...viewCustomerStyle.infoItemStyle,
                          columnGap: "0.8rem",
                        }}
                      >
                        <StarsIcon />
                        <Typography
                          sx={{
                            ...viewCustomerStyle.summaryTitle,
                            fontSize: "1.4rem",
                          }}
                        >
                          Lorem ipsum title
                        </Typography>
                      </Box>
                      <Stack
                        sx={viewCustomerStyle.customerInfoContainer}
                        mt={2}
                      >
                        <Box sx={viewCustomerStyle.productContainer}>
                          <Avatar
                            src={Ntify}
                            sx={viewCustomerStyle.productImg}
                          />
                          <Box>
                            <Typography
                              sx={{
                                ...viewCustomerStyle.summaryTitle,
                                fontWeight: "500",
                                fontSize: "1.4rem",
                                width: { md: "100%", lg: "53rem" },
                                lineHeight: "2rem",
                              }}
                            >
                              Customer is eligible for an exclusive upgrade to
                              latest model mobile. ask them to upgrade the
                              mobile and help them enjoy cutting-edge features
                            </Typography>
                          </Box>
                        </Box>
                        <Box>
                          <Stack
                            sx={{
                              ...viewCustomerStyle.infoItemStyle,
                              columnGap: "0.4rem",
                            }}
                          >
                            <WhatsappIcon />
                            <Typography
                              sx={viewCustomerStyle.sendlinkText}
                              onClick={handleLinkWhatsApp}
                            >
                              Send invoice in whatsapp
                            </Typography>
                          </Stack>
                        </Box>
                      </Stack>
                    </Stack>

                    <Stack
                      sx={{
                        display: "grid",
                        placeItems: "center",
                        mt: "1.6rem",
                      }}
                    >
                      <Typography
                        onClick={handleMoveAllOpportunities}
                        sx={{
                          ...viewCustomerStyle.sendlinkText,
                          fontSize: "1.6rem",
                          fontWeight: "600",
                          cursor: "pointer",
                        }}
                      >
                        See all opportunities
                      </Typography>
                    </Stack>
                  </>
                ) : (
                  <Box
                    sx={{
                      display: "grid",
                      placeItems: "center",
                      height: "100%",
                    }}
                  >
                    <EmptyIcon />
                  </Box>
                )}
              </Stack>
              {/** Activity log  part */}
              <Stack id="7" sx={viewCustomerStyle.activitylogStyle} mt={2}>
                <Typography sx={viewCustomerStyle.summaryTitle}>
                  Activity log
                </Typography>
                {viewCustomersList?.data?.customer?.activity_log?.length > 0 ? (
                  <SteperComponent steps={steps} />
                ) : (
                  <Box
                    sx={{
                      display: "grid",
                      placeItems: "center",
                      height: "100%",
                    }}
                  >
                    <EmptyIcon />
                  </Box>
                )}
              </Stack>
            </Stack>
          </Grid >
        </Grid >
      </Stack >

      {/** Add new tag modal */}
      < DialogBox
        title={"Add tag"}
        titleStyle={viewCustomerStyle.addNewModalTitleStyle}
        open={openAddTag}
        handleClose={handleCloseTagModal}
        titleVariant={"inherit"}
        maxWidth="xs"
        dialogmodalBoxStyle={viewCustomerStyle.dialogmodalBoxSx}
        Body={
          <>
            <Box>
              <InputField
                variant="filled"
                label="Customer name"
                placeholder=""
                onChange={(e: any) => console.log(e.target.value)}
                value={state?.data?.customerName}
                isLabelRequired={false}
                helperText=""
                fullWidth
                disabled={true}
                error={false}
                errorMessage={""}
                isErrorRequired={false}
                inputStyle={{
                  "& .MuiFilledInput-root.Mui-disabled": {
                    backgroundColor: "#E6EAEB !important",
                  },
                }}
                sx={viewCustomerStyle.formInputStyle}
              />
            </Box>
            <Box mt={2}>
              <SelectAndautocomplete
                options={tagOptions}
                variant="filled"
                selectType="chip"
                placeholder={""}
                multiple
                limitTags={4}
                optionSelectedIconShow={false}
                onChange={(e: any, value: any) => {
                  setHandleSelectTag(value), setError({ tags: "" });
                }}
                freeSolo
                addOptionBtnLabel='Add New'
                value={segments}
                label={"Select customer tags"}
                isError={Boolean(tagError.tags)}
                optionStyle={{ fontSize: "1.4rem" }}
                addOptionAction={() => console.log('hih')}
                labelStyleProps={{ fontSize: "1.4rem !important" }}
                sx={{
                  ...viewCustomerStyle.filterSelectStyle,
                  ...{
                    "& .MuiInputLabel-root": {
                      fontWeight: "500",
                      transform: segments?.[0]?.label
                        ? "translate(1.2rem, 0.6rem) scale(1) !important"
                        : "translate(1.2rem, 1.6rem) scale(1) !important",
                      "&.Mui-focused": {
                        transform:
                          "translate(1.2rem, 0.6rem) scale(1) !important",
                      },
                    },
                  },
                }}
                chipStyle={{ fontSize: "1.4rem" }}
              />
            </Box>
          </>
        }
        footerComponent={
          <>
            <Box sx={{ display: "flex", width: "100%" }}>
              <BasicButton
                sx={viewCustomerStyle.addNewButonStyle}
                rootSx={{ width: "100%" }}
                onClick={() => handleSaveTag()}
              >
                {loading ? (
                  <CircularProgress size={20} sx={{ color: "#ffff" }} />
                ) : (
                  "Save"
                )}
              </BasicButton>
            </Box>
          </>
        }
      />
      < ErrorDialog
        open={openDialog}
        handleClose={handleCloseDialog}
        title=""
        bodyText="Send invoice to whatsapp?"
        subText={"Are you sure want to send their purchase invoice to whatsapp"}
        cancelButtonText="Cancel"
        saveButtonText="Confirm"
        onCancel={handleCancel}
        onDelete={handleDownload}
        // hrefSave={bulkData}
        subtextStyle={{ fontWeight: 600, color: "#4E585E", width: '200px' }}
        btnWidth={'13rem'}
      />
    </Box >
  );
}
