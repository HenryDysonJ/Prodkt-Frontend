import TopBar from "@core/ui/components/brandTopBar";
import { Search } from "@crayond_dev/ui_search";
import { Avatar, Box, Stack, SxProps, Theme, Typography } from "@mui/material";
import { viewCustomerStyle } from "@pages/brandViewCustomer/style";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

import FilterIcon from "../../assets/filter";
import Ntify from "../../assets/notify.png";
import phone from "../../assets/phone.png";
import StarsIcon from "../../assets/stars";
import WhatsappIcon from "../../assets/whatsapp";
import { opportunitiesStyle } from "./style";

export interface Opportunitiesprops {
  className?: string;
  sx?: SxProps<Theme>;
}

export function Opportunities(props: Opportunitiesprops): JSX.Element {
  const { className = "", sx = {}, ...rest } = props;
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const handleSearchFunc = (e: any) => {
    setSearch(e?.target.value);
  };

  const handleLinkWhatsApp = () => {
    navigate("/sideBar/template-broadcast");
  };

  return (
    <Box
      sx={[
        {
          ...opportunitiesStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <TopBar
        title="Opportunities"
        backBtn={true}
        backBtnFunc={() => navigate(-1)}
        containButtonText=""
        outlineButtonText=""
      />
      <Stack sx={opportunitiesStyle.containerStyle}>
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
        <Stack
          sx={{
            backgroundColor: "#F0F3F6",
            p: '1.6rem',
            borderRadius: '0.8rem',
            mt:'1.6rem',
          }}
        >
          <Box sx={{ ...viewCustomerStyle.infoItemStyle, columnGap: '0.8rem' }}>
            <StarsIcon />
            <Typography
              sx={{ ...viewCustomerStyle.summaryTitle, fontSize: '1.4rem' }}
            >
              Upsell product
            </Typography>
          </Box>
          <Stack sx={viewCustomerStyle.customerInfoContainer} mt={2}>
            <Box sx={viewCustomerStyle.productContainer}>
              <Avatar src={phone} sx={viewCustomerStyle.productImg} />
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
                  Customer is eligible for an exclusive upgrade to latest model
                  mobile. ask them to upgrade the mobile and help them enjoy
                  cutting-edge features
                </Typography>
              </Box>
            </Box>
            <Box>
              <Stack
                sx={{ ...viewCustomerStyle.infoItemStyle, columnGap: "0.4rem" }}
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
            p: '1.6rem',
            borderRadius: '0.8rem',
            mt: 2,
          }}
        >
          <Box sx={{ ...viewCustomerStyle.infoItemStyle, columnGap: '0.8rem' }}>
            <StarsIcon />
            <Typography
              sx={{ ...viewCustomerStyle.summaryTitle, fontSize: '1.4rem' }}
            >
              Upsell product
            </Typography>
          </Box>
          <Stack sx={viewCustomerStyle.customerInfoContainer} mt={2}>
            <Box sx={viewCustomerStyle.productContainer}>
              <Avatar src={phone} sx={viewCustomerStyle.productImg} />
              <Box>
                <Typography
                  sx={{
                    ...viewCustomerStyle.summaryTitle,
                    fontWeight: "500",
                    fontSize: '1.4rem',
                    width: { md: "100%", lg: "53rem" },
                    lineHeight: "2rem",
                  }}
                >
                  Customer is eligible for an exclusive upgrade to latest model
                  mobile. ask them to upgrade the mobile and help them enjoy
                  cutting-edge features
                </Typography>
              </Box>
            </Box>
            <Box>
              <Stack
                sx={{ ...viewCustomerStyle.infoItemStyle, columnGap: '0.4rem' }}
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
            p: '1.6rem',
            borderRadius: '0.8rem',
            mt: 2,
          }}
        >
          <Box sx={{ ...viewCustomerStyle.infoItemStyle, columnGap: '0.8rem' }}>
            <StarsIcon />
            <Typography
              sx={{ ...viewCustomerStyle.summaryTitle, fontSize: '1.4rem' }}
            >
              Upsell product
            </Typography>
          </Box>
          <Stack sx={viewCustomerStyle.customerInfoContainer} mt={2}>
            <Box sx={viewCustomerStyle.productContainer}>
              <Avatar src={phone} sx={viewCustomerStyle.productImg} />
              <Box>
                <Typography
                  sx={{
                    ...viewCustomerStyle.summaryTitle,
                    fontWeight: "500",
                    fontSize: '1.4rem',
                    width: { md: "100%", lg: '53rem'},
                    lineHeight: '2rem',
                  }}
                >
                  Customer is eligible for an exclusive upgrade to latest model
                  mobile. ask them to upgrade the mobile and help them enjoy
                  cutting-edge features
                </Typography>
              </Box>
            </Box>
            <Box>
              <Stack
                sx={{ ...viewCustomerStyle.infoItemStyle, columnGap: '0.4rem' }}
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
            p: '1.6rem',
            borderRadius: '0.8rem',
            mt: 2,
          }}
        >
          <Box sx={{ ...viewCustomerStyle.infoItemStyle, columnGap: '0.8rem' }}>
            <StarsIcon />
            <Typography
              sx={{ ...viewCustomerStyle.summaryTitle, fontSize: '1.4rem' }}
            >
              Lorem ipsum title
            </Typography>
          </Box>
          <Stack sx={viewCustomerStyle.customerInfoContainer} mt={2}>
            <Box sx={viewCustomerStyle.productContainer}>
              <Avatar src={Ntify} sx={viewCustomerStyle.productImg} />
              <Box>
                <Typography
                  sx={{
                    ...viewCustomerStyle.summaryTitle,
                    fontWeight: "500",
                    fontSize: '1.4rem',
                    width: { md: "100%", lg: '53rem'},
                    lineHeight: '2rem',
                  }}
                >
                  Customer is eligible for an exclusive upgrade to latest model
                  mobile. ask them to upgrade the mobile and help them enjoy
                  cutting-edge features
                </Typography>
              </Box>
            </Box>
            <Box>
              <Stack
                sx={{ ...viewCustomerStyle.infoItemStyle, columnGap: '0.4rem' }}
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
            p: '1.6rem',
            borderRadius: '0.8rem',
            mt: 2,
          }}
        >
          <Box sx={{ ...viewCustomerStyle.infoItemStyle, columnGap: '0.8rem' }}>
            <StarsIcon />
            <Typography
              sx={{ ...viewCustomerStyle.summaryTitle, fontSize: '1.4rem' }}
            >
              Lorem ipsum title
            </Typography>
          </Box>
          <Stack sx={viewCustomerStyle.customerInfoContainer} mt={2}>
            <Box sx={viewCustomerStyle.productContainer}>
              <Avatar src={Ntify} sx={viewCustomerStyle.productImg} />
              <Box>
                <Typography
                  sx={{
                    ...viewCustomerStyle.summaryTitle,
                    fontWeight: "500",
                    fontSize: '1.4rem',
                    width: { md: "100%", lg: '53rem'},
                    lineHeight: '2rem',
                  }}
                >
                  Customer is eligible for an exclusive upgrade to latest model
                  mobile. ask them to upgrade the mobile and help them enjoy
                  cutting-edge features
                </Typography>
              </Box>
            </Box>
            <Box>
              <Stack
                sx={{ ...viewCustomerStyle.infoItemStyle, columnGap: '0.4rem' }}
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
      </Stack>
    </Box>
  );
}
