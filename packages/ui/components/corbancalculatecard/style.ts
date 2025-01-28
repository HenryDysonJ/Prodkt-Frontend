import type { SxProps } from '@mui/material';

interface CorbanCalculateCardStyleProps {
  [key: string]: SxProps;
}

export const corbanCalculateCardStyle: CorbanCalculateCardStyleProps = {
  rootSx: {
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'success.400',
    backgroundColor: 'success.200',
    padding: '10px 10px 0px 10px',
    height: '100%'
  },

  corbanText: {
    fontSize: '12px',
    fontWeight: "500",
    lineHeight: '16px',
    color: 'text.200',
    textAlign: "left",
    fontFamily: 'excon, medium',
  },

  corbanTextBold: {
    fontSize: '12px',
    fontWeight: "900",
    lineHeight: '16px',
    color: 'text.900',
    textAlign: "left",
    fontFamily: 'excon, medium',
  },

  bottomRoot: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row"
  },

  btnSx: {
    fontSize: '12px',
    fontWeight: "400",
    lineHeight: '16px',
    color: 'text.A800',
    textAlign: "left",
    padding: '8px 12px',
    fontFamily: 'excon, medium',
    backgroundColor: "success.800",
    textTransform: "none",
    borderRadius: '6px',
    boxShadow: "none",
    ':hover': {
      backgroundColor: "success.800",
      color: 'text.A800',
      boxShadow: "none",
    }
  }
};

