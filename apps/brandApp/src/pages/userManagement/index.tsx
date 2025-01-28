import { TabsSwitch } from "@atoms/tabsSwitch";
import { TopBar } from "@core/ui/components";
import { Box, SxProps, Theme } from "@mui/material";

import { Permissions } from "./helperComponents/permissions";
import { Repository } from "./helperComponents/repository";
import { RoleMaping } from "./helperComponents/roleMaping";
import { Roles } from "./helperComponents/roles";
export interface CreateBroast {
  className?: string;
  sx?: SxProps<Theme>;
}

export function UserManagement(props: CreateBroast): JSX.Element {
  const { className = "", sx = {}, ...rest } = props;

  const tabsData = [
    { label: "Repository", children: <Repository /> },
    { label: "Permissions", children: <Permissions /> },
    { label: "Roles", children: <Roles /> },
    { label: "Role Mapping", children: <RoleMaping /> },
  ];

  return (
    <>
      <TopBar title="User management" />
      <Box sx={{ "& .MuiTabs-flexContainer": { columnGap: "4rem" } }}>
        <TabsSwitch tabs={tabsData} tabStyle={{ p: "12px 24px" }} />
      </Box>
    </>
  );
}
