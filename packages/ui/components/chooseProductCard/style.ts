import type { SxProps } from '@mui/material';

interface ChooseProductCardStyleProps {
  [key: string]: SxProps;
}

export const chooseProductCardStyle: ChooseProductCardStyleProps = {
  rootSx: {
    margin: '8px 0',
    padding: '12px 14px',
    backgroundColor: 'background.surface.100',
    borderRadius: '8px',
    border: '1px solid',
    borderColor: 'primary.500',
    boxShadow: '0px 0px 12px #0000000F',
  },
  detailsContainer: {
    flexGrow: 1,
    padding: '0 8px 0 12.5px',
    borderLeft: '1px dashed',
    borderLeftColor: '#8E959D3D',
  },
  rightIcon: {
    width: '20px',
    height: '20px',
    marginTop: '3px',
    '& svg': {
      width: '100%',
      height: '100%',
    },
  },
  productName: {
    fontSize: '14px',
    fontWeight: '900',
    color: 'text.A100',
    marginBottom: '6px',
  },
  nextService: {
    fontSize: '12px',
    fontWeight: '500',
    color: 'text.500',
    textOverflow: 'ellipsis',
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
    overflow: 'hidden',
    width:'200px'
  },
  cardDivider: {
    borderStyle: 'dashed',
    borderColor: 'divider.100',
    borderSpacing: '30px',
  },
  infoContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  infoIcon: {
    transform: 'translateY(-0.4px)',
    '& path:last-child': {
      fill: '#F44F5A',
    },
  },
  infoText: {
    fontSize: '12px',
    fontWeight: '500',
    color: 'text.500',
    marginLeft: '4px',
  },
  skeltonRoot: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
    padding: 0,
  },
  skeltonText: {
    backgroundColor: 'primary.200',
  },
};
