import { Button } from '@atoms/button';
import { CheckBox } from '@atoms/checkbox';
import type { SxProps, Theme } from '@mui/material';
import { Box, Divider, Stack, Typography } from '@mui/material';
import React, { useState } from 'react';
import MascotLoadingWithBg from '@core/ui/assets/mascotLoadingWithBg.gif';
import { warrantyDetailsCardStyle } from './style';
import { EditPenIcon, FaceEmojiIcon } from '@atoms/icons';

export interface WarrantyDetailsCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  addManuallyOnClick: (type: 'warranty' | 'amc' | 'insurance') => void;
  cardData?: {
    questionTitle?: string;
    title?: string;
    warranty_coverage?: string;
    warranty_type?: string;
  };
  type: 'warranty' | 'amc' | 'insurance';
  showUpload: boolean;
  warrantyUploadComponent: React.ReactNode;
  loading: boolean;
  product_detail: string
  productDetail: string | number;
  penOnclick: (type: 'warranty' | 'amc' | 'insurance') => void;
}

export const WarrantyDetailsCard = (props: WarrantyDetailsCardProps): JSX.Element => {
  const {
    product_detail,
    loading,
    warrantyUploadComponent,
    className = '',
    sx = {},
    cardData,
    showUpload,
    addManuallyOnClick,
    penOnclick = () => false,
    productDetail,
    type,
    ...rest
  } = props;

  const [isShow, setIsShow] = useState('Yes');


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
            {
              product_detail === '' ?
                <Divider flexItem sx={{ border: '1.3px dashed', borderColor: 'divider.100' }} orientation="horizontal" />
                : null
            }
          </>
        }
      >
        {type !== 'warranty' && (
          <Box sx={warrantyDetailsCardStyle.qnsContainer}>
            {
              product_detail ?
                <Stack direction={'row'} alignItems={'center'} justifyContent={'space-between'}>
                  <Typography sx={warrantyDetailsCardStyle.qns}>{cardData?.questionTitle}</Typography>
                  <Box display={'flex'} gap="10px">
                    <CheckBox checked={isShow === 'Yes'} onClick={() => setIsShow('Yes')} label="Yes" />
                    <CheckBox checked={isShow === 'No'} onClick={() => setIsShow('No')} label="No" />
                  </Box>
                </Stack>
                : null
            }
          </Box>
        )}
        {isShow === 'Yes' && (
          <>
            {
              loading ?
                <Box sx={{
                  py: 3
                }}>
                  <img src={MascotLoadingWithBg} alt='Loading Mascot' />
                  <Typography
                    sx={{
                      gap: 1,
                      display: 'flex',
                      alignItems: 'center',
                      textAlign: 'center',
                      color: 'text.700',
                      fontSize: '14px',
                      fontWeight: 500,
                      py: 1.5
                    }}>
                    <FaceEmojiIcon /> Fetching Warranty details....</Typography>
                </Box>
                :
                <Box sx={warrantyDetailsCardStyle.detailsContainer}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Typography sx={warrantyDetailsCardStyle.title}>{cardData?.title}</Typography>
                    {/* {
                      product_detail === '' ? null :
                        <>
                          <EditPenIcon onClick={() => penOnclick(type)} sx={{ fontSize: '14px', cursor: 'pointer' }} />
                        </>

                    } */}
                  </Box>
                  <Stack
                    direction={'column'}
                    alignItems={'center'}
                    divider={
                      <Divider flexItem sx={{ border: '1.3px dashed', borderColor: 'divider.100' }} orientation="horizontal" />
                    }
                  >
                    {
                      product_detail === '' ? null :
                        <Stack
                          direction={'row'}
                          gap="12px"
                          alignItems={'center'}
                          width={'100%'}
                          divider={
                            <Divider flexItem sx={{ border: '1.3px dashed', borderColor: 'divider.100' }} orientation="vertical" />
                          }
                        >
                          <Box flexGrow={1}>
                            <Typography sx={warrantyDetailsCardStyle.label}>Warranty Details</Typography>
                            <Typography sx={warrantyDetailsCardStyle.value}>{cardData?.warranty_coverage || 'Nil'}</Typography>
                          </Box>
                          <Box flexGrow={1}>
                            <Typography sx={warrantyDetailsCardStyle.label}>Warranty Type</Typography>
                            <Typography sx={warrantyDetailsCardStyle.value}>{cardData?.warranty_type || 'Nil'}</Typography>
                          </Box>
                        </Stack>
                    }
                    {showUpload && (
                      <Box sx={warrantyDetailsCardStyle.uploadContainer}>
                        <Typography sx={warrantyDetailsCardStyle.uploadDes}>Upload Warranty documents by</Typography>

                        <Box py={1}>{warrantyUploadComponent}</Box>
                        <Divider flexItem orientation="horizontal" sx={warrantyDetailsCardStyle.orDivider}>
                          <Typography sx={warrantyDetailsCardStyle.subText}>or</Typography>
                        </Divider>
                        <Button variant="text" sx={warrantyDetailsCardStyle.addBtn} onClick={() => addManuallyOnClick(type)}>
                          Add Manually
                        </Button>
                      </Box>
                    )}
                  </Stack>
                </Box>
            }
          </>
        )}

      </Stack>
    </Box>
  );
};
