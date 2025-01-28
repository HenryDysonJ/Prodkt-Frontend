import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { toggleButtonStyle } from './style';

export interface toggleButtonInterface {
  label: string;
  value: string | number;
}

export interface ToggleButtonProps {
  className?: string;
  sx?: SxProps<Theme>;
  toggleStyle?: SxProps<Theme>;
  onChange: (value: string | number) => void;
  value: string | number;
  options: any[];
  isError?: boolean;
  fullResponse?: boolean;
  errorMessage?: string;
  buttonActiveStyle?: SxProps<Theme>;
  buttonInactiveStyle?: SxProps<Theme>;
  classes?: object;
}

export const ToggleButton = (props: ToggleButtonProps): JSX.Element => {
  const {
    className = '',
    onChange,
    toggleStyle,
    value,
    fullResponse = false,
    options = [],
    isError = false,
    errorMessage = '',
    buttonActiveStyle = {},
    buttonInactiveStyle = {},
    sx = {},
    ...rest
  } = props;

  return (
    <Box sx={[{ ...toggleButtonStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`}>
      <Box sx={{ ...toggleButtonStyle.rootSx, ...toggleStyle } as SxProps<Theme>}>
        {options?.map((val: any, index: number) => (
          <Box
            key={index}
            data-testid={val?.label}
            onClick={() => {
              onChange(fullResponse ? val : val.value);
            }}
          >
            <Box
              sx={
                {
                  cursor: 'pointer',
                  ...(val.value === value
                    ? {
                        ...toggleButtonStyle.buttonActiveSx,
                        ...buttonActiveStyle,
                      }
                    : {
                        ...toggleButtonStyle.buttonInactiveSx,
                        ...buttonInactiveStyle,
                      }),
                } as SxProps<Theme>
              }
            >
              {val?.label && (
                <Typography
                  sx={{
                    px: 1,
                    py: 0.4,
                    fontSize: '12px',
                    textTransform: 'capitalize',
                    ...(val.value === value ? toggleButtonStyle.nameActiveSx : toggleButtonStyle.nameInactiveSx),
                  }}
                >
                  {val?.label}
                </Typography>
              )}
            </Box>
          </Box>
        ))}
      </Box>
      {isError && (
        <Typography sx={{ mt: 0.5 }} variant="caption" color="error">
          {errorMessage}
        </Typography>
      )}
    </Box>
  );
};
