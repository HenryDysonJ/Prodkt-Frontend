import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect } from "react";

import { userManagementStyle } from "../style";
import { TreeViewComponent } from "./comonents";
import { userManagementStore } from "@core/store";


export const Repository = () => {

  const { getRepositoryData, userManagementState } = userManagementStore()
  const { repositoryData } = userManagementState

  useEffect(() => {
    getRepositoryData()
  }, [])

  return (
    <Stack sx={{ ...userManagementStyle.rolesCardStyle, padding: "0" }}>
      <Box>
        {repositoryData?.length > 0 && <Stack p={2}>
          <TreeViewComponent state={repositoryData?.[0]?.data ?? []} checkboxsection={false} />
        </Stack>}
      </Box>
    </Stack>
  );
};
