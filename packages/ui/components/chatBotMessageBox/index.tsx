import { MessageTimerIcon, SendIcon } from '@atoms/icons';
import { Input } from '@atoms/input';
import type { SxProps, Theme } from '@mui/material';
import { Box, Stack, Typography } from '@mui/material';
import { useState } from 'react';
import { useEffect, useRef } from 'react';

import { chatBotMessageBoxStyle } from './style';

export interface ChatBotMessageBoxProps {
  className?: string;
  sx?: SxProps<Theme>;
  onChange?: ((e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void) | undefined;
  handleClick?: () => void;
  placeholder?: string;
  value?: string;
  children: React.ReactNode;
  showMessageTimer?: boolean;
  height: string | number;
}

export const ChatBotMessageBox = (props: ChatBotMessageBoxProps): JSX.Element => {
  const {
    className = '',
    sx = {},
    placeholder = '',
    value = '',
    children,
    showMessageTimer = false,
    height = '',
    onChange = () => false,
    handleClick = () => false,
    ...rest
  } = props;

  const [isSelected, setIsSelected] = useState(false);
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const iconAdornment = isSelected
    ? {
      endAdornment: (
        <Box onClick={handleClick} style={{ cursor: 'pointer', display: 'flex' }}>
          <SendIcon />
        </Box>
      ),
    }
    : {};
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [children]);

  return (
    <Box
      sx={[{ ...chatBotMessageBoxStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box
        sx={{
          backgroundColor: 'background.surface.100',
          borderRadius: '10px',
          px: 1.5,
          py: 2,
        }}
      >
        <Box
          ref={scrollRef}
          sx={{
            height: height,
            overflowY: 'auto',
          }}
        >
          {children}
        </Box>
        <form
          action=""
          onSubmit={(e) => {
            e.preventDefault();
            handleClick();
          }}
        >
          {showMessageTimer && (
            <Stack mb={2.5} px={4} direction={'row'} alignItems={'self-start'} justifyContent={'center'} gap={'5px'}>
              <MessageTimerIcon />
              <Typography sx={{ color: '#BDBDBD', fontSize: '12px', fontStyle: 'italic' }}>
                Conversation is closed, chat history will be cleared after 48 hrs.
              </Typography>
            </Stack>
          )}
          <Input
            testFieldStyle={{
              '& .MuiInputBase-root': {
                border: '1px solid #DFDFDF',
                borderRadius: '8px !important',
                paddingRight: '8px',
                '& .MuiOutlinedInput-notchedOutline': {
                  borderWidth: '1.5px !important',
                },
                '& input': {
                  fontSize: '14px',
                  padding: '9px 14px 12px 14px',
                  fontWeight: 600,
                },
              },
            }}
            rootStyle={{ mb: 0 }}
            placeholder={placeholder}
            onChange={onChange}
            InputProps={iconAdornment}
            onClick={() => setIsSelected(true)}
            onFocus={() => setIsSelected(true)}
            onBlur={value.length > 0 ? () => setIsSelected(true) : () => setIsSelected(false)}
            value={value}
          />
        </form>
      </Box>
    </Box>
  );
};
