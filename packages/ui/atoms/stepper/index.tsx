import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import { stepperStyle } from "./style";

interface StepperProps {
  selectOrder: {
    id: string;
    icon: React.ReactNode;
    label: string;
    sublabel?: string;
    color: string;
  }[];
  progressWidth: number;
  count: number;
  renderComponent: () => React.ReactNode;
}

export const CustomStepper: React.FC<StepperProps> = ({
  selectOrder,
  progressWidth,
  count,
  renderComponent,
}) => {
  return (
    <Box sx={stepperStyle.processRootSx}>
      <Box sx={stepperStyle.processCardStyle}>
        <Stack sx={stepperStyle.processContainerStyle}>
          <Box width={"70%"}>
            <Stack sx={stepperStyle.numberContiner}>
              {selectOrder.map((val) => (
                <Box key={val.id} sx={stepperStyle.listStyle}>
                  <Box sx={{ backgroundColor: "#fff", width: "fit-content" }}>
                    {val.icon}
                  </Box>
                  <Typography
                    sx={{ ...stepperStyle.lanelStyle, color: val?.color, fontWeight: val?.color === '#FF980E' && 600 }}
                  >
                    {val.label}
                  </Typography>
                  {val.sublabel && (
                    <Typography sx={{ ...stepperStyle.lanelSubStyle }}>
                      {/* {val.sublabel} */}
                    </Typography>
                  )}
                </Box>
              ))}
              <Box sx={stepperStyle.progressLineStyle}></Box>
              <Box
                sx={{
                  ...stepperStyle.activeProgress,
                  width: `${progressWidth}%`,
                }}
              ></Box>
            </Stack>
          </Box>
        </Stack>
        <Stack sx={{ height: "100%" }}>{renderComponent as any}</Stack>
      </Box>
    </Box>
  );
};
