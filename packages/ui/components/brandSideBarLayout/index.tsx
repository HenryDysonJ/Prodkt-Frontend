import TopBar from "@components/brandTopBar";
import { TopNavbar } from "@components/brandTopNav";
import { brandRoutes } from "@core/routes";
import { useBrandWebForm, useModuleMasters } from "@core/store/brand-app";
import { localStorageKeys } from "@core/utils";
import type { SxProps, Theme } from "@mui/material";
import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import CustomerIcon from "../../assets/brandAssets/customer";
import MarketingIcon from "../../assets/brandAssets/marketing";
import OffersIcon from "../../assets/brandAssets/offers";
import ProductIcon from "../../assets/brandAssets/product";
import SettingsIcon from "../../assets/brandAssets/settings";
import SuportIcon from "../../assets/brandAssets/suport";
import { PopoverComponent } from "..";
import AccordionSteper from "./helperComponent/accordian";
import { sideBarStyle } from "./style";
export interface SideBarLayoutPros {
  className?: string;
  sx?: SxProps<Theme>;
  children?: React.ReactNode;
  handleMainContentClick?: () => void;
}

const MenuItem = [{ id: "1", label: "Logout", color: "#DF3813" }];

export function SideBarLayout(props: SideBarLayoutPros): JSX.Element {
  const {
    className = "",
    sx = {},
    handleMainContentClick,
    children,
    ...rest
  } = props;
  const { changemodule, webFormmMaster, getWebFormMaster } = useBrandWebForm();

  const navigate = useNavigate();
  const location = useLocation();

  const [anchorElRow, setAnchorElRow] =
    useState<HTMLButtonElement | null>(null);
  const [activeTab, setActiveTab] = useState<any>([]);

  const formName =
    webFormmMaster?.webFormMasterData?.map((form: any) => ({
      label: form?.name,
      redirectTo: `/support/${form?.id}`,
    })) || [];

  const menuItems = [
    {
      id: 1,
      title: "Customers",
      logo: <CustomerIcon />,
      children: [
        {
          label: "Manage customers",
          redirectTo: brandRoutes.home,
          subRoutes: [brandRoutes.viewCustomer, brandRoutes.opportunities],
        },
        {
          label: "Customer segments",
          redirectTo: brandRoutes.customerSegments,
        },
      ],
    },
    {
      title: "Products",
      logo: <ProductIcon color={activeTab[0] === "Products" && "#0E70EB"} />,
      redirectTo: brandRoutes.productList,
      subRoutes: [brandRoutes.addProduct],
    },
    {
      id: 3,
      title: "Marketing",
      logo: <MarketingIcon />,
      children: [
        {
          label: "Templates",
          redirectTo: brandRoutes.templates,
          subRoutes: [brandRoutes.createTemplate],
        },
        {
          label: "Broadcast messages",
          redirectTo: brandRoutes.broadcastMsg,
          subRoutes: [brandRoutes.createBroast],
        },
        {
          label: "Sequences",
          redirectTo: brandRoutes.sequences,
          subRoutes: [brandRoutes.createSequence],
        },
        { label: "Manage opt outs", redirectTo: brandRoutes.manageOptOuts },
      ],
    },
    {
      id: 4,
      title: "Support",
      logo: <SuportIcon />,
      children: [
        ...formName,
      ],
    },
    {
      id: 5,
      title: "Offers",
      logo: <OffersIcon color={activeTab[0] === "Offers" && "#0E70EB"} />,
      redirectTo: brandRoutes.offers,
      subRoutes: [brandRoutes.createOffers],
    },
    {
      id: 6,
      title: "Settings",
      logo: <SettingsIcon />,
      children: [
        {
          label: "Configure webforms",
          redirectTo: brandRoutes.configureWebforms,
          subRoutes: [brandRoutes.createNewWebForm],
        },
        { label: "User management", redirectTo: brandRoutes.userManageMent },
        {
          label: "Configure whatsapp",
          redirectTo: brandRoutes.configureWhatsApp,
        },
        { label: "Configure SMS", redirectTo: brandRoutes.configureSMS },
        { label: "Modules masters", redirectTo: brandRoutes.moduleMaster },

      ],
    },
  ];

  const findCurrentPath = (pathname: string) => {
    const menuItem = menuItems?.find(
      (list) =>
        list.redirectTo === pathname ||
        list.children?.find((child) => child.redirectTo === pathname) ||
        list.children?.find(
          (child: any) =>
            child?.subRoutes &&
            child?.subRoutes?.length > 0 &&
            child?.subRoutes?.includes(location?.pathname)
        )
    );
    return menuItem?.title;
  };

  const handleClickChildrenItem = (item: any) => {
    navigate(item?.redirectTo);
  };

  const handleClickTitle = (item: any) => {
    if (item === "Products") {
      navigate(brandRoutes.productList);
    }
    if (item === "Offers") {
      navigate(brandRoutes.offers);
    }
    const duplicateItems = activeTab?.filter((tab: string) => tab === item);

    if (duplicateItems.length > 0) {
      setActiveTab((prev: any) => {
        return [""];
      });
    } else {
      setActiveTab((prev: any) => {
        return [item];
      });
    }
  };

  const handleProfileClick = (e: any) => {
    setAnchorElRow(e.currentTarget);
  };

  const handleClickLogOut = () => {
    localStorage.removeItem(localStorageKeys.authToken);
    setAnchorElRow(null);
    navigate(brandRoutes.login);
  };

  useEffect(() => {
    getWebFormMaster();
  }, [changemodule]);

  useEffect(() => {
    setActiveTab([`${findCurrentPath(location.pathname)}`]);
  }, [location]);

  return (
    <>
      <Box>
        <TopNavbar handleProfileClick={handleProfileClick} />
        <Box
          sx={[
            {
              ...sideBarStyle.rootSx,
            },
            ...(Array.isArray(sx) ? sx : [sx]),
          ]}
          className={`${className}`}
          {...rest}
        >
          <Box sx={sideBarStyle.sidebarParentBox}>
            {menuItems &&
              menuItems?.length > 0 &&
              menuItems?.map((item, i) => (
                <AccordionSteper
                  key={i}
                  items={item}
                  expanded={activeTab.some((tab: any) => tab === item.title)}
                  title={item?.title}
                  icon={item?.logo}
                  childrenItem={item?.children}
                  handleClickTitle={() => handleClickTitle(item.title)}
                  handleClickChildrenItems={handleClickChildrenItem}
                />
              ))}
          </Box>
          {/* children */}
          <Box
            sx={sideBarStyle.childrenLayoutStyle}
            onClick={handleMainContentClick}
          >
            {children}
          </Box>
        </Box>

        {/** table row popover */}
        <PopoverComponent
          handleClickMenuLabel={(e) => handleClickLogOut()}
          actionMenu={MenuItem}
          handleClose={() => setAnchorElRow(null)}
          eventCuretTarget={anchorElRow}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "center",
            horizontal: "right",
          }}
        />
      </Box>
    </>
  );
}
