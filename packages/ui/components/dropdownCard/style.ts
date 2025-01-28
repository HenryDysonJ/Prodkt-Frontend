import type { SxProps } from '@mui/material';

interface DropdownCardStyleProps {
  [key: string]: SxProps;
}

export const dropdownCardStyle: DropdownCardStyleProps = {
  rootSx: {},

  cardSx: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '12px',
    paddingRight: '0px',
  },

  sectionSx: {
    border: '1px solid',
    borderColor: 'primary.100',
    borderRadius: '10px',
    backgroundColor: 'background.surface.100',
    boxShadow: '0px 3px 4px #0000000A',
  },

  headerSx: {
    fontSize: '16px',
    fontWeight: 700,
  },

  iconSectionSx: {
    display: 'flex',
    alignItems: 'center',
    '& p': {
      fontSize: '10px',
    },
  },

  iconSx: {
    '& svg': {
      width: '12px',
      height: '12px',
      marginRight: '6px',
    },
  },

  purchaseSx: {
    fontSize: '10px',
    color: 'success.900',
    padding: '5px',
    paddingLeft: '0px',
  },

  insuredSx: {
    fontSize: '10px',
    color: 'success.900',
    padding: '5px',
    paddingLeft: '0px',
  },

  expiringSx: {
    fontSize: '10px',
    color: 'secondary.main',
    padding: '5px',
    paddingLeft: '0px',
  },

  componentSx: {
    borderTop: '1px solid',
    borderTopStyle: 'dashed',
    borderColor: 'grey.A300',
    padding: '0px 12px',
  },

  componentNoBorderSx: {
    padding: '0px 12px',
    marginBottom: '8px',
  },

  noProductSectionSx: {
    textAlign: 'center',
  },

  noProductTextSx: {
    fontSize: '12px',
    marginBottom: '12px',
    color: 'text.700',
  },

  productSectionSx: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 0 8px 12px',
  },

  productImgSx: {
    width: '34px',
    height: '34px',
    marginRight: '12px',
    '& img': {
      width: '100%',
      height: '100%',
    },
  },

  productTitleSx: {
    fontSize: '12px',
    fontWeight: 500,
  },

  productSubTitleSx: {
    fontSize: '12px',
    color: 'text.500',
    fontWeight: 500,
  },
};
