import type { SxProps } from '@mui/material';

interface AccordianCardLayoutStyleProps {
  [key: string]: SxProps;
}

export const accordianCardLayoutStyle: AccordianCardLayoutStyleProps = {
  rootSx: {
    '& .MuiButtonBase-root': {
      // padding: '4px',
      padding: '0px 13px',
      '& p': {
        paddingRight: '30px',
      },
    },
    '& .MuiAccordion-root': {
      backgroundImage: 'none',
      boxShadow: 'none',
      '& .MuiAccordionSummary-root.Mui-expanded': {
        minHeight: '48px',
        padding: '0px 13px',
        '& .MuiAccordionSummary-content.Mui-expanded': {
          margin: '12px 0',
        },
      },
    },
    '& .MuiAccordionDetails-root': {
      padding: '0px',
    },
  },

  accordianSx: {
    backgroundColor: 'transparent',
  },

  accordianBgColorSx: {
    backgroundColor: 'secondary.900',
    borderRadius: '8px !important',
  },

  titleSx: {
    fontSize: '12px',
    color: 'text.400',
    fontWeight: 600,
  },

  titleColorSx: {
    fontSize: '14px',
    color: 'text.400',
    fontWeight: 600,
  },
};
