import type { SxProps } from '@mui/material';

interface ProductCardDetailsStyleProps {
  [key: string]: SxProps;
}

export const productCardDetailsStyle: ProductCardDetailsStyleProps = {
  rootSx: {},

  dividerSx: {
    // hight:'100%',
    // borderLeft: '0.5px dashed',
    borderStyle:'dashed',
    // borderRightWidth: 'inherit',
    borderColor: 'divider.100',
  },

  cardSx: {
    padding: '16px',
    borderRadius: '10px',
    backgroundColor: 'background.surface.100',
  },

  headerSx: {
    fontSize: '14px',
    fontWeight: 900,
    color: 'text.A100',
  },

  detailSectionSx: {
    borderColor: 'grey.A300',
  },

  bottomSectionSx: {
    paddingTop: '11px',
  },

  titleSx: {
    fontSize: '10px',
    color: 'text.A100',
    pb: '4px',
  },

  valueSx: {
    fontSize: '12px',
    fontWeight: 'medium',
    color: 'text.700',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    width: '89px',
    whiteSpace: 'nowrap',
  },
  overFlowValueSx: {
    fontSize: '12px',
    fontWeight: 'medium',
    color: 'text.700',
    textOverflow: 'ellipsis',
    width: '160px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',

  },

  topValueSx: {
    fontSize: '12px',
    fontWeight: 'medium',
    color: 'text.700',
    width: '134px',
  },

  ellipseSx: {
    fontSize: '12px',
    fontWeight: 'medium',
    color: 'text.700',
    width: '192px',
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },

  boxSx: {
    display: 'flex',
    flexDirection: 'column',
    borderColor: 'grey.A300',
  },

  locationBoxSx: {
    paddingLeft: '18px',
  },

  modeBoxSx: {
    paddingRight: '15px',
  },
};
