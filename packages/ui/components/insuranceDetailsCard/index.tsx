import { Button } from '@atoms/button';
import { CheckBox } from '@atoms/checkbox';
import { EditPenIcon, FaceEmojiIcon, InfoIcon } from '@atoms/icons';
// import { CircleInfoIcon } from '@atoms/icons/searchProductIcon';
import MascotLoadingWithBg from '@core/ui/assets/mascotLoadingWithBg.gif';
import type { SxProps, Theme } from '@mui/material';
import { Box, Divider, Stack, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { warrantyDetailsCardStyle } from './style';

export interface InsuranceDetailsCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  addManuallyOnClick?: (type: 'warranty' | 'amc' | 'insurance') => void;
  cardData?: {
    questionTitle?: string;
    title?: string;
  };
  type?: 'warranty' | 'amc' | 'insurance';
  showUpload?: boolean;
  insuranceUploadComponent?: React.ReactNode;
  specificationComponent?: React.ReactNode;
  loading?: boolean;
  product_detail?: string;
  penOnclick?: (type: 'warranty' | 'amc' | 'insurance') => void;
  isInsuranceShow?: any;
  setIsInsuranceShow?: any;
}

export const InsuranceDetailsCard = (props: InsuranceDetailsCardProps): JSX.Element => {
  const {
    product_detail,
    loading,
    specificationComponent,
    insuranceUploadComponent,
    className = '',
    sx = {},
    cardData,
    showUpload,
    addManuallyOnClick,
    penOnclick = () => false,
    type,
    isInsuranceShow,
    setIsInsuranceShow,
    ...rest
  } = props;



  useEffect(() => {
    if (product_detail) {
      setIsInsuranceShow('Yes');
    }
  }, [product_detail]);

  return (
    <Box
      sx={[{ ...warrantyDetailsCardStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Stack
        direction={'column'}
        alignItems={'center'}
        divider={
          <>
            {product_detail === '' ? (
              <Divider flexItem sx={{ border: '1.3px dashed', borderColor: 'divider.100' }} orientation="horizontal" />
            ) : null}
          </>
        }
      >
        {/* {type !== 'warranty' && (
          <Box sx={warrantyDetailsCardStyle.qnsContainer}>
            {product_detail === undefined
              // || product_detail?.insurance_coverage
              ? null : (
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                  <Typography sx={warrantyDetailsCardStyle.qns}>{cardData?.questionTitle}
                    <Box component="span" sx={{ color: 'error.900' }}>
                      *
                    </Box>
                  </Typography>
                  <Box display={'flex'} gap="10px">
                    <CheckBox checked={isInsuranceShow === 'Yes'} onClick={() => setIsInsuranceShow('Yes')} label="Yes" />
                    <CheckBox checked={isInsuranceShow === 'No'} onClick={() => setIsInsuranceShow('No')} label="No" />
                  </Box>
                </Stack>
              )}
          </Box>
        )} */}

        <Box px={2} py={2}>
          <Typography sx={warrantyDetailsCardStyle.title}>{cardData?.title}</Typography>
          {specificationComponent}
        </Box>


        {/* {isShow === 'Yes' && (
          <>
            {loading ? (
              <Box
                sx={{
                  py: 3,
                }}
              >
                <img src={MascotLoadingWithBg} alt="Loading Mascot" />
                <Typography
                  sx={{
                    gap: 1,
                    display: 'flex',
                    alignItems: 'center',
                    textAlign: 'center',
                    color: 'text.700',
                    fontSize: '14px',
                    fontWeight: 500,
                    py: 1.5,
                  }}
                >
                  <FaceEmojiIcon /> Fetching insurance details....
                </Typography>
              </Box>
            ) : (
              <>
                <Box sx={warrantyDetailsCardStyle.detailsContainer}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={warrantyDetailsCardStyle.title}>{cardData?.title}</Typography>
                    {product_detail === undefined ? null : (
                      <>
                        <EditPenIcon onClick={() => penOnclick(type)} sx={{ fontSize: '14px', cursor: 'pointer' }} />
                      </>
                    )}
                  </Box>
                  <Box>{specificationComponent}</Box>
                  {showUpload && (
                    <Box sx={warrantyDetailsCardStyle.uploadContainer}>
                      <Typography sx={warrantyDetailsCardStyle.uploadDes}>Upload Insurance documents by</Typography>

                      <Box py={1}>{insuranceUploadComponent}</Box>
                      <Divider flexItem orientation="horizontal" sx={warrantyDetailsCardStyle.orDivider}>
                        <Typography sx={warrantyDetailsCardStyle.subText}>or</Typography>
                      </Divider>
                      <Button
                        variant="text"
                        sx={warrantyDetailsCardStyle.addBtn}
                        onClick={() => addManuallyOnClick(type)}
                      >
                        Add Manually
                      </Button>
                    </Box>
                  )}
                </Box>
                <Box
                  sx={{
                    bgcolor: 'primary.100',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px',
                    // borderRadius: '8px',
                    pl: 4.3,
                    pr: 4.2,
                    py: 1,
                    borderBottomLeftRadius: '8px',
                    borderBottomRightRadius: '8px',
                  }}
                >
                  <InfoIcon />
                  <Typography sx={{ color: 'primary.main', fontSize: '12px', fontWeight: 500, width: '297px' }}>
                    Upload insurance purchase invoice and policy document
                  </Typography>
                </Box>
              </>
            )}
          </>
        )} */}
      </Stack>
    </Box>
  );
};
