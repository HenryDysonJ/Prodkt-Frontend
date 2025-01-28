import { Avatar, Box, Button, Typography } from "@mui/material";
import { createTemplateStyle } from "./style";
import phonebg from "../../../assets/brandAssets/phonebg1.jpg";
import LeftArrowIcon from "@components/brandTopBar/assets/leftArrowIcon";
import GreenTick from "@assets/brandAssets/greenTick";
import LockIcon from "@assets/brandAssets/lock";
import { useTemlateStore } from "@core/store/brand-app";
import { CSSProperties } from "react";
import moment from "moment";

export const ChatMessage = () => {
  const { templateJson, viewType } = useTemlateStore();


  return (
    <>
      <Box sx={createTemplateStyle.chatSx}>
        <img
          src={phonebg}
          style={createTemplateStyle.bgImgStyle as CSSProperties}
        />
        <Box sx={createTemplateStyle.topcontent}>
          <Box sx={createTemplateStyle.headingItem}>
            <LeftArrowIcon color={"#0f7fef"} />
            <Typography sx={createTemplateStyle.countsx}>32</Typography>
            <Avatar
              sx={{ height: "28px", width: "28px" }}
              src=''></Avatar>
            {/* {templateJson?.header?.type === "fileImage" && templateJson?.header?.value && ( */}
            <Typography sx={createTemplateStyle.headingSx}>Bajaj</Typography>
            <GreenTick style={{ marginTop: "4px" }} />
          </Box>

          <Box sx={createTemplateStyle.messageBox}>
            <Box display={"grid"} justifyContent={"center"}>
              <Box display={"grid"} justifyContent={"center"}>
                <Typography sx={createTemplateStyle.daySx}>
                  {moment(new Date()).format("dddd")}
                </Typography>
              </Box>
              <Box sx={createTemplateStyle.e2eSx}>
                <Typography sx={createTemplateStyle.msgSx}>
                  <LockIcon /> Messages and calls are end-to-end encrypted. No
                  one outside of this chat, not even Whatsapp, can read or
                  listen to them. Tap to learn more
                </Typography>
              </Box>
            </Box>
            <Box sx={createTemplateStyle.chatBoxSx}>
              <Box sx={createTemplateStyle.edgeSx}></Box>
              <Box sx={createTemplateStyle.msgBox}>
                <Box>
                  {templateJson?.header?.type === "text" && (
                    <Typography sx={createTemplateStyle.flashSx}>
                      {templateJson?.header?.value}  sale is on!
                    </Typography>
                  )}

                  {templateJson?.header?.value?.length > 40 &&

                    <Box sx={createTemplateStyle.imageBoxPreview}>
                      <Avatar
                        sx={createTemplateStyle.avatarSx}
                        src={templateJson?.header?.value ?? ""}
                      />
                    </Box>
                  }
                  <Typography
                    sx={{
                      ...createTemplateStyle.subtitle,
                      fontWeight: 400,
                      color: "#20111A",
                    }}
                    mt={1.2}
                  >
                    <div style={createTemplateStyle.customerNameSx} dangerouslySetInnerHTML={{ __html: templateJson?.messageBody?.replace(/{([^}]*)}/g, '<span style="color:#0E70EB;">$1</span>').replaceAll('&nbsp;', '').replaceAll('<p', '<span').replaceAll('</p>', '</span>') }} />
                  </Typography>
                  <Typography sx={createTemplateStyle.subscribeBtn1} mt={1.2}>
                    {templateJson?.declareVariables?.subscribe}
                  </Typography>
                </Box>
              </Box>
              <Box sx={createTemplateStyle.btnBox}>
                <Button
                  sx={createTemplateStyle.subscribeBtn}
                  variant="contained"
                  href={''}
                  target="_blank"
                // disabled={viewType === 'view' ? true : false}
                >
                  {'Unsubscribe'}
                </Button>
                {templateJson?.buttons?.map((btns: any) => (
                  <>
                    <Button
                      sx={createTemplateStyle.subscribeBtn}
                      variant="contained"
                      href={btns?.websiteUrl}
                      target="_blank"
                    // disabled={viewType === 'view' ? true : false}
                    >
                      {btns?.buttonVal ?? 'Button'}
                    </Button>
                  </>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
};
