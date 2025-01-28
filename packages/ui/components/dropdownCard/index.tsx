import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { dropdownCardStyle } from './style';

export interface DropdownCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  header: string;
  labelData: { bg: React.ReactNode; svg: React.ReactNode; status: string; color: string };
  noProductText?: string;
  component?: JSX.Element;
  documentUpload?: JSX.Element;
  noProductImage?: JSX.Element;
  productImage?: string;
  isSelect?: boolean;
  noBorder?: boolean;
  cardData: {
    provider: string;
    document_url: string | File;
    serial_no: string;
    coverage: number | string;
    coverageType: string;
    purchased_on: string;
    valid_from: string;
    valid_to: string;
  };
}

export const DropdownCard = (props: DropdownCardProps): JSX.Element => {
  const {
    className = '',
    sx = {},
    header = '',
    labelData,
    noProductImage,
    noProductText = '',
    component,
    isSelect = false,
    noBorder = false,
    cardData,
    documentUpload,
    productImage,
    ...rest
  } = props;

  return (
    <Box
      sx={[
        {
          ...dropdownCardStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={dropdownCardStyle.sectionSx}>
        <Box sx={dropdownCardStyle.cardSx}>
          <Typography sx={dropdownCardStyle.headerSx}>{header}</Typography>
          <Box sx={dropdownCardStyle.iconSectionSx}>
            <Box sx={dropdownCardStyle.iconSx}>{labelData?.svg}</Box>
            <Typography
              sx={{
                ...dropdownCardStyle.purchaseSx,
                // ...(subHeader === 'Purchase AMC'
                //   ? dropdownCardStyle.purchaseSx
                //   : subHeader === 'Insured'
                //   ? dropdownCardStyle.insuredSx
                //   : dropdownCardStyle.expiringSx),
                color: labelData?.color,
                backgroundImage: `url(${labelData?.bg})`,
              }}
            >
              {labelData?.status}
            </Typography>
          </Box>
        </Box>
        <Box>
          {isSelect ? (
            <>
              <Box sx={dropdownCardStyle.productSectionSx}>
                {cardData.provider || cardData.valid_to ? (
                  <Box sx={dropdownCardStyle.productImgSx}>
                    <img src={productImage} alt="Product Img" />
                  </Box>
                ) : (
                  ''
                )}
                <Box>
                  <Typography sx={dropdownCardStyle.productTitleSx}>{cardData?.provider}</Typography>
                  <Typography sx={dropdownCardStyle.productSubTitleSx}>
                    {cardData?.coverage}&nbsp;{cardData?.coverageType}
                  </Typography>
                </Box>
              </Box>
            </>
          ) : (
            <Box sx={dropdownCardStyle.noProductSectionSx}>
              <Box sx={dropdownCardStyle.noProductImageSx}>{noProductImage}</Box>
              <Typography sx={dropdownCardStyle.noProductTextSx}>{noProductText}</Typography>
            </Box>
          )}
          {documentUpload && <Box sx={dropdownCardStyle.componentNoBorderSx}>{documentUpload}</Box>}
          <Box height={'8px'} />
          {component && <Box sx={noBorder ? dropdownCardStyle.componentsSx : dropdownCardStyle.componentSx}>{component}</Box>}
        </Box>
        {/* {warrantyDetails?.warranty_provider ? (
          <Box>
            <Box sx={dropdownCardStyle.productSectionSx}>
              <Box sx={dropdownCardStyle.productImgSx}>
                <img src={productImage} alt="Product Img" />
              </Box>
              <Box>
                <Typography sx={dropdownCardStyle.productTitleSx}>{warrantyDetails?.warranty_provider}</Typography>
                <Typography sx={dropdownCardStyle.productSubTitleSx}>
                  {warrantyDetails?.warranty_coverage}&nbsp;{warrantyDetails?.coverage_type}
                </Typography>
              </Box>
            </Box>

            <Box sx={dropdownCardStyle.componentSx}>{component}</Box>
          </Box>
        ) : (
          <Box sx={dropdownCardStyle.noProductSectionSx}>
            <Box sx={dropdownCardStyle.noProductImageSx}>{noProductImage}</Box>
            <Typography sx={dropdownCardStyle.noProductTextSx}>{noProductText}</Typography>
          </Box>
        )}
        {insuranceDetails && <Box sx={dropdownCardStyle.componentNoBorderSx}>{documentUpload}</Box>} */}
      </Box>
    </Box>
  );
};
