import { TreeView } from "@crayond_dev/ui_tree-view";
import { Box, IconButton, Stack, Typography } from "@mui/material";
import React from "react";

import CollapseIcon from "../../../assets/collapseIcon";
import ExpandIcon from "../../../assets/expandIcon";
import InfoIcon from "../../../assets/infoIcon";
import SettingIcon from "../../../assets/settings";
import { ThreeDotIcon } from "../../../assets/threeDotIcon";
import { userManagementStyle } from "../style";

interface List {
  color: boolean;
  bgcolor: string;
  lable: string;
  onClickLabel: (e: any, val: any) => void;
  onClickMenu: (e: any) => void;
  isSelected: any
}

interface TreeView {
  state: any;
  checkboxsection: boolean
  setPermissionData?: (e: any, val: any) => void
}

export const PermissionList = (props: List) => {
  const { color, bgcolor, lable, onClickLabel, onClickMenu, isSelected } = props;
  return (
    <Stack
      sx={{
        ...userManagementStyle.listContainerStyle,
        backgroundColor: isSelected ? '#E0EAF9' : '',
      }}
      onClick={onClickLabel}
    >
      <Stack sx={userManagementStyle.subcontainer}>
        <Box
          sx={{ ...userManagementStyle.listDotStye, backgroundColor: color === true ? 'green' : "red" }}
        ></Box>
        <Typography sx={userManagementStyle.viewTextStyle}>{lable}</Typography>
      </Stack>
      <IconButton onClick={onClickMenu}>
        <ThreeDotIcon />
      </IconButton>
    </Stack>
  );
};

export const TreeViewComponent = (props: TreeView) => {
  const { state, checkboxsection, setPermissionData } = props;
  return (
    <TreeView
      checkboxsection={checkboxsection}
      state={state}
      handleChange={(e: any) => setPermissionData('data', e)}

      parentChildIcon={<InfoIcon />}
      parentIcon={<SettingIcon width="15px" height="16px" />}
      defaultCollapseIcon={
        <ExpandIcon style={{ marginLeft: "10px", marginRight: "10px" }} />
      }
      defaultExpandIcon={
        <CollapseIcon style={{ marginLeft: "10px", marginRight: "10px" }} />
      }
      checkboxWidth={"20px"}
      checkboxHeight={"20px"}
      checkboxBorderRadius={"0px"}
      checkboxBgColor={"#818181"}
      labelStyle={{
        fontSize: "14px",
        color: "custom.onSurface",
        fontWeight: 600,
      }}
      childrenLabelStyle={{
        color: "custom.onSurface",
        fontSize: "14px",
        fontWeight: 500,
      }}
      subChildLabelStyle={{
        color: "custom.onSurfaceVariant",
        fontSize: "12px",
        display: "flex",
        alignItems: "center",
      }}
      heading={"Repository"}
      headingSx={userManagementStyle.repTitle}
      connectors={true}
      dividerShown
      headerTextVariant="metanasVariant"
      headerLeftTextVariant="metanasVariant"
      horizontalBorderSx={{
        borderTop: "1px solid red",
        borderColor: "custom.outline",
        width: "26px",
        transform: "translateY(-50%)",
        mr: 0.5,
        ml: 1.3,
      }}
      disable={true}
      leftBorderStyle={{
        position: "absolute",
        top: 0,
        left: 10,
        width: "10px",
        height: "100%",
        borderLeft: "1px solid",
        borderColor: "custom.outline",
        zIndex: 999,
      }}
      permissionHeadingSx={{
        color: "custom.onSurfaceVariant2",
        width: "80px",
        fontSize: "14px",
        fontWeight: 500,
        display: "flex",
        justifyContent: "center",
        textTransform: "capitalize",
        padding: {
          lg: "0",
          md: "0",
        },
      }}
    />
  );
};
