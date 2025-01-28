import type { SxProps, Theme } from '@mui/material';
import { Box, Divider } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';

import { accordianCardLayoutStyle } from './style';
import { ExpressionIcon } from '@atoms/icons';

export interface AccordianCardLayoutProps {
  className?: string;
  dataTestId?: string;
  sx?: SxProps<Theme>;
  icon?: JSX.Element;
  title?: string;
  component?: JSX.Element;
  startIcon?: JSX.Element;
  backgroundColor?: boolean;
  childrenStyle?: SxProps<Theme> | undefined;
}

export const AccordianCardLayout = (props: AccordianCardLayoutProps): JSX.Element => {
  const {
    className = '',
    dataTestId,
    sx = {},
    title = '',
    icon,
    component,
    childrenStyle,
    startIcon,
    backgroundColor = false,
    ...rest
  } = props;

  return (
    <Box
      sx={[
        {
          ...accordianCardLayoutStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Accordion
        sx={backgroundColor ? accordianCardLayoutStyle.accordianBgColorSx : accordianCardLayoutStyle.accordianSx}
      >
        <AccordionSummary
          data-testid={dataTestId}
          expandIcon={icon}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          {startIcon && <Box sx={{ paddingRight: '6px' }}>{startIcon}</Box>}
          <Typography sx={backgroundColor ? accordianCardLayoutStyle.titleColorSx : accordianCardLayoutStyle.titleSx}>
            {title}
          </Typography>
        </AccordionSummary>
        {backgroundColor && (
          <Box
            component="span"
            sx={{ width: '100%', display: 'inherit', borderBottom: '1.3px dashed', borderColor: 'divider.100' }}
          />
        )}

        <AccordionDetails>
          <Box
            sx={
              {
                ...accordianCardLayoutStyle.childrenSx,
                ...childrenStyle,
              } as SxProps<Theme>
            }
          >
            {component}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};
