import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";

import { useLocation } from "react-router-dom";
import DropDownArrow from "../../../assets/brandAssets/dropDownArrow";
import { sideBarStyle } from "../style";

interface AccordionSteperProp {
  title: string;
  icon?: React.ReactNode;
  expanded?: boolean;
  items: any;
  childrenItem?: { label: string }[];
  handleClickChildrenItems?: (item: { label: string }, index: number) => void;
  handleClickTitle?: () => void;
}
const AccordionSteper = (props: AccordionSteperProp) => {
  const {
    title,
    icon,
    items,
    expanded,
    childrenItem = [],
    handleClickTitle,
    handleClickChildrenItems,
  } = props;

  const location = useLocation();

  const handleClickChildrenItem = (item: any, i: number) => {
    handleClickChildrenItems && handleClickChildrenItems(item, i);
  };

  return (
    <Accordion
      expanded={expanded && expanded}
      elevation={0}
      sx={sideBarStyle.accordianContainer}
    >
      <AccordionSummary
        expandIcon={childrenItem.length > 0 && <DropDownArrow />}
      >
        <Stack
          sx={{
            ...sideBarStyle.acordianTitleContainer,
            backgroundColor:
              (childrenItem.length === 0 &&
                location?.pathname === items?.redirectTo) ||
              (items?.subRoutes &&
                items?.subRoutes?.length > 0 &&
                items?.subRoutes?.includes(location?.pathname))
                ? "#E9F3FF"
                : "",
          }}
          onClick={() => handleClickTitle && handleClickTitle()}
        >
          <Box>{icon}</Box>
          <Typography
            sx={{
              ...sideBarStyle.sideBarTitle,

              color:
                location?.pathname === items?.redirectTo ||
                (items?.subRoutes &&
                  items?.subRoutes?.length > 0 &&
                  items?.subRoutes?.includes(location?.pathname))
                  ? "#0E70EB"
                  : "",
            }}
          >
            {title}
          </Typography>
        </Stack>
      </AccordionSummary>
      <AccordionDetails sx={{ p: 0, display:'grid', gap:'6px' }}>
        {childrenItem &&
          childrenItem?.map((item: any, index: number) => (
            <Typography
              key={index}
              onClick={() => handleClickChildrenItem(item, index)}
              sx={{
                ...sideBarStyle.childItemStyle,
                backgroundColor:
                  location?.pathname === item?.redirectTo ||
                  (item?.subRoutes &&
                    item?.subRoutes?.length > 0 &&
                    item?.subRoutes?.includes(location?.pathname))
                    ? "#E9F3FF"
                    : "",
                color:
                  location?.pathname === item?.redirectTo ||
                  (item?.subRoutes &&
                    item?.subRoutes?.length > 0 &&
                    item?.subRoutes?.includes(location?.pathname))
                    ? "#0E70EB"
                    : "",
              }}
            >
              {item?.label}
            </Typography>
          ))}
      </AccordionDetails>
    </Accordion>
  );
};

export default AccordionSteper;
