import Timeline from "@mui/lab/Timeline";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { viewCustomerStyle } from "../style";

interface Stpes {
  label: string;
  description: string;
  date: string;
}

interface StpesCompenetprop {
  steps: Stpes[];
}

export default function SteperComponent(props: StpesCompenetprop) {
  const { steps } = props;
  return (
    <Box sx={viewCustomerStyle.timelineContainer}>
      <Timeline sx={viewCustomerStyle.timeLineStyle}>
        {steps &&
          steps?.map((val: Stpes, i: number, { length }: any) => (
            <TimelineItem key={i}>
              <TimelineSeparator>
                <Box sx={viewCustomerStyle.separatorStyle}>
                  <TimelineDot sx={viewCustomerStyle.setperDotStyle}/>
                </Box>
                {length === i + 1 ? (
                  <></>
                ) : (
                  <TimelineConnector sx={{ backgroundColor: "primary.main" }} />
                )}
              </TimelineSeparator>
              <TimelineContent
                sx={{ py: length === i + 1 ? 0 : 3, px: 2, pt: 0 }}
              >
                <Typography
                  sx={{ ...viewCustomerStyle.summaryTitle, fontSize: "1.4rem" }}
                >
                  {val?.label}
                </Typography>
                <Typography sx={{ ...viewCustomerStyle.menuItemTitle }}>
                  {val?.description}
                </Typography>
                <Typography
                  sx={{
                    ...viewCustomerStyle.menuItemTitle,
                    fontWeight: "400",
                    color: "custom.onSurfaceVariant2",
                  }}
                  mt={1}
                >
                  {val?.date}
                </Typography>
              </TimelineContent>
            </TimelineItem>
          ))}
      </Timeline>
    </Box>
  );
}
