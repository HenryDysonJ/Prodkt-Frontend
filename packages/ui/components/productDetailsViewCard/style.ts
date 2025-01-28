import type { SxProps } from '@mui/material';

interface ProductDetailsViewCardStyleProps {
  [key: string]: SxProps;
}

export const productDetailsViewCardStyle: ProductDetailsViewCardStyleProps = {
  rootSx: {
    margin: '8px 0',
    backgroundColor: 'background.surface.100',
    borderRadius: '10px',
  },
  detailsContainer: {
    flexGrow: 1,
    padding: '10px 12px',
    borderLeft: '1px solid',
    borderLeftColor: 'grey.B100',
  },
  imageContainer: {
    padding: '5px 0 5px 8px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  productName: {
    fontSize: '14px',
    fontWeight: '900',
    color: 'text.A100',
  },
  productDescription: {
    fontSize: '12px',
    fontWeight: '500',
    color: 'text.500',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'initial',
    display: '-webkit-box',
    '-webkit-line-clamp': '2',
    '-webkit-box-orient': 'vertical',
  },
  skeltonRoot: {
    display: 'flex',
    alignItems: 'center',
    gap: 2,
  },
  skeltonText: {
    backgroundColor: 'primary.200',
    marginBottom: '4px',
  },
};
