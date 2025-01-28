import { ChatBotIcon, LoadingMessage } from '@atoms/icons';
import { ProfileUpload } from '@atoms/profileUpload';
import type { SxProps, Theme } from '@mui/material';
import { Box, Divider, Stack, Typography } from '@mui/material';
import moment from 'moment';
import { ReactNode } from 'react';

import { customChatBotStyle } from './style';

export interface ChatBotData {
  id: number | string;
  qus: string;
  ans?: string;
  message?: string;
  header?: string;
  val?: any;
}
export interface CustomChatBotProps {
  className?: string;
  message?: ReactNode;
  messageTime?: string | number | Date | undefined;
  url?: string | File | undefined;
  altText?: string | undefined;
  sx?: SxProps<Theme>;
  isUser?: boolean;
  isInitialMessage?: boolean;
  loadingMessage?: boolean;
  chatStyle?: SxProps<Theme>;
  chatRespondStyle?: SxProps<Theme>;
  header?: string;
  onClickMessage?: (val: ChatBotData) => void;
  data?: ChatBotData[];
}

export const CustomChatBot = (props: CustomChatBotProps): JSX.Element => {
  const {
    className = '',
    isUser = true,
    data = [],
    isInitialMessage = false,
    loadingMessage = false,
    onClickMessage = () => false,
    chatStyle,
    url = '',
    altText = '',
    message = '',
    messageTime = '',
    chatRespondStyle,
    header = "",
    sx = {},
    ...rest
  } = props;

  return (
    <Box
      sx={[{ ...customChatBotStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      {isUser ? (
        <Box display={'flex'} justifyContent={'end'}>
          <Box sx={{ ...customChatBotStyle.mainBox, ...chatStyle } as SxProps<Theme>}>

            <Box>
              <Box sx={customChatBotStyle.clipSx}>
                <Typography sx={customChatBotStyle.replyTestSx}>{message}</Typography>
              </Box>
              <Typography sx={customChatBotStyle.timeSx}>{moment(messageTime).format('hh:mm A')}</Typography>
            </Box>
            <Box sx={customChatBotStyle.profileBox}>
              <ProfileUpload
                profileStyleSx={url ? {} : customChatBotStyle.profileAvatarSx}
                avatarStyle={url ? {} : customChatBotStyle.avatarSx}
                url={url}
                altText={altText}
                showIcon={false}
                height={url ? '25px' : '16px'}
                width={url ? '25px' : '16px'}
                fontSize="13px"
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <>
          {
            message &&
            <Box sx={{ ...customChatBotStyle.mainRespondBox, ...chatRespondStyle } as SxProps<Theme>}>
              <Box sx={customChatBotStyle.chatBotIconSx}>
                <ChatBotIcon />
              </Box>
              <Box flexGrow={1}>
                <Box sx={isInitialMessage ? customChatBotStyle.clipMessageSx : customChatBotStyle.clipRespondSx}>
                  <Typography
                    sx={isInitialMessage ? customChatBotStyle.initialRespondTestSx : customChatBotStyle.respondTestSx}
                  >
                    {loadingMessage ? <LoadingMessage /> : isInitialMessage ? header : message}
                  </Typography>
                  {isInitialMessage && (
                    <Stack
                      direction={'column'}
                      divider={<Divider sx={{ borderColor: 'grey.A300' }} orientation="horizontal" />}
                    >
                      {data.map((val: ChatBotData, index: number) => {

                        return (
                          <Typography key={index} onClick={() => onClickMessage({ val, header, message })} sx={customChatBotStyle.startTestSx}>
                            {val}
                          </Typography>
                        );
                      })}
                    </Stack>
                  )}
                </Box>
                <Typography sx={{ ...customChatBotStyle.timeRespondSx, visibility: messageTime ? 'visible' : 'hidden' }}>
                  {moment(messageTime).format('hh:mm A')}
                </Typography>
              </Box>
            </Box>
          }
        </>
      )}
    </Box>
  );
};
