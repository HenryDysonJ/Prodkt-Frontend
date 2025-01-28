import { Box, Button, Stack, SxProps, Typography } from "@mui/material";
import { Checkbox } from "@crayond_dev/ui_checkbox";

import { broadcastMsgStyle } from "../style";
import RoundUnCheckIcon from "../../../assets/roundUnCheckIcon";
import RoundCheckedIcon from "../../../assets/roundCheckedIcon";

interface Tepmplates {
  title: string;
  status: boolean;
  select: boolean;
  changeTemp?: string;
  chats: {
    buttons: any; message: string, header: string
  }[];
  setHandleSelect: (val: boolean) => void;
  handleChangeTemp?: () => void;
  boxStyle?: SxProps
}

export default function Templats(pros: Tepmplates) {
  const {
    title,
    status,
    select,
    chats,
    changeTemp,
    handleChangeTemp,
    setHandleSelect,
    boxStyle
  } = pros;

  return (
    <Stack sx={broadcastMsgStyle.templateRootStyle}>
      <Stack sx={broadcastMsgStyle.templateHeadStyle}>
        <Box sx={broadcastMsgStyle}>
          <Typography sx={broadcastMsgStyle.temTitleStyle}>{title}</Typography>
          <Typography
            sx={{
              ...broadcastMsgStyle.statusTitle,
              backgroundColor: status === true ? "#CBF2E0" : "#FFDAD3",
              color: status === true ? "#008545" : "#3D0600",
              mt: "0.4rem",
            }}
          >
            {status === true ? "Approved" : "Not Approved "}
          </Typography>
        </Box>
        <Box>
          {changeTemp ? (
            <Typography
              sx={{ ...broadcastMsgStyle.statusTitle, color: "primary.main" }}
              onClick={handleChangeTemp}
            >
              {changeTemp}
            </Typography>
          ) : (
            <Checkbox
              id={"Checkbox_i"}
              className={""}
              label={"Selected"}
              checked={select}
              indeterminate={false}
              onChange={(e) => setHandleSelect(e?.target?.checked)}
              labelStyle={{
                ...broadcastMsgStyle.statusTitle,
                p: 0,
                color: "primary.main",
              }}
              checkedIcon={<RoundCheckedIcon />}
              icon={<RoundUnCheckIcon />}
            />
          )}
        </Box>
      </Stack>
      <Stack p={"1.2rem"} sx={{ ...broadcastMsgStyle.chatsContainer, ...boxStyle } as SxProps}>
        {chats &&
          chats?.length > 0 &&
          chats?.map((cht: any, i: number) => (
            <Box sx={broadcastMsgStyle.chartLayoutStyle} key={i}>
              <Typography
                sx={{ ...broadcastMsgStyle.temTitleStyle, mb: 1, color: "#000", fontWeight: 700 }}>
                {cht?.header}
              </Typography>
              <Typography
                sx={{
                  ...broadcastMsgStyle.temTitleStyle,
                  color: "text.primary",
                }}
              >
                {cht?.message}
              </Typography>
              <Typography sx={broadcastMsgStyle.subscribeText} mt={1}>
                Click here to unsubscribe
              </Typography>
              <Box sx={broadcastMsgStyle.arrowStyle}></Box>
            </Box>
          ))}
        <Button
          sx={broadcastMsgStyle.subscribeBtn}
          variant="contained"
          href={''}
          target="_blank"
        >
          {'Unsubscribe'}
        </Button>
        {chats?.[0]?.buttons?.length > 0 &&
          chats?.map((cht: any, i: number) => {
            const btn = cht?.buttons?.map((val: { text: string }) => val.text).join(", ");
            return (
              <Button
                key={i}
                sx={broadcastMsgStyle.subscribeBtn}
                variant="contained"
                href={''}
                target="_blank"
              >
                {btn ?? '-'}
              </Button>
            );
          })}

      </Stack>
    </Stack>
  );
}
