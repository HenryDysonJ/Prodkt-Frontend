import { CheckBox } from '@atoms/checkbox';
import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { questionCardStyle } from './style';

export interface CheckBoxProps {
  label?: string;
  onChange?: (isChecked: boolean) => void;
  checked?: boolean;
}

export interface QuestionCardProps {
  className?: string;
  testidCheck?: string;
  testidStand?: string;
  sx?: SxProps<Theme>;
  cardStyle?: SxProps<Theme>;
  isRequired?: boolean;
  title?: string;
  icon?: JSX.Element;
  mapId?: string;
  checkBox?: CheckBoxProps[] | undefined;
  radioButtons?: CheckBoxProps[] | undefined;
  titleStyle?: SxProps<Theme>;
}

export const QuestionCard = (props: QuestionCardProps): JSX.Element => {
  const {
    checkBox = [],
    radioButtons = [],
    icon,
    cardStyle,
    testidCheck,
    mapId,
    testidStand,
    isRequired = false,
    title = '',
    className = '',
    titleStyle = {},
    sx = {},
    ...rest
  } = props;

  

  return (
    <Box
      sx={[{ ...questionCardStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={{ ...questionCardStyle.mainBoxSx, ...cardStyle } as SxProps<Theme>}>
        <Box sx={questionCardStyle.subBoxSx}>
          <Box sx={questionCardStyle.flexBoxSx}>
            <Box sx={{ height: '20px' }}>{icon}</Box>
            <Box sx={questionCardStyle.requiredSX}>
              <Typography sx={{ ...questionCardStyle.titleSx, ...titleStyle } as SxProps}>{title} 
              {isRequired ? <Typography variant='span' sx={questionCardStyle.requiredText}>*</Typography> : ''}</Typography>
              
            </Box>
          </Box>
          <Box sx={questionCardStyle.flexCheckBoxSx}>
            {radioButtons?.map((val: CheckBoxProps, index: number) => {
              return (
                <Box key={index}>
                  <CheckBox id={`${val?.label}${mapId}`}
                   data-testid={`${testidCheck}${index}`} {...val} />
                </Box>
              );
            })}
          </Box>
        </Box>

        {checkBox.length > 0 && (
          <Box sx={questionCardStyle.expandedBox}>
            {checkBox?.map((val: CheckBoxProps, index: number) => {
              return (
                <Box key={index}>
                  <CheckBox
                    isSquare={true}
                    data-testid={`${testidStand}${index}`}
                    // checkSecondStyle={{ borderRadius: '4px' }}
                    // checkStyle={{ borderRadius: '4px' }}
                    {...val}
                  />
                </Box>
              );
            })}
          </Box>
        )}
      </Box>
    </Box>
  );
};
