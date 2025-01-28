import type { SxProps, Theme } from '@mui/material';
import { Box, Divider, Skeleton, Stack, Typography } from '@mui/material';

import { archivedProductCardStyle } from './style';
import { ArchivedProductColorIcon } from '@atoms/icons/serviceReminderIcon';
import { RightBlueArrow } from '@atoms/icons/productSearchIconsLists';
import { CloseIcon, InfoIcon } from '@atoms/icons';
import { DrawerComponent, ModalHeader, SpecificationCard } from '@core/ui/components';
import { useState } from 'react';
import { ArchivedProductDataInterface, ProductSpecificationInterface } from '@core/store/interface';

export interface ArchivedProductCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  archivedProductData: ArchivedProductDataInterface[];
  loading: boolean;
  handleClick: (val: ArchivedProductDataInterface) => void;
  handleDocumentClick: (val: ArchivedProductDataInterface) => void;
}

export const ArchivedProductCard = (props: ArchivedProductCardProps): JSX.Element => {
  const {
    className = '',
    sx = {},
    archivedProductData,
    loading = false,
    handleClick = () => false,
    handleDocumentClick = () => false,
    ...rest
  } = props;

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [value, setValue] = useState<ProductSpecificationInterface>();

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const ConstructProductSpecification = (data: { [key: string]: any }): { title: string; value: string }[] => {
    const arr: { title: string; value: string }[] = [];
    Object?.keys(data)?.map((key) =>
      typeof data[key] === 'string'
        ? arr?.push({ title: ConstructTitle(key), value: data[key] })
        : typeof data[key] === 'object'
          ? Object?.keys(data?.[key] ?? {})?.map((key_) =>
            typeof data[key][key_] === 'string' ? arr?.push({ title: key_, value: data[key][key_] }) : null,
          )
          : null,
    );
    return arr;
  };

  const ConstructTitle = (name: string) => {
    return name === 'product_name'
      ? 'Product Name'
      : name === 'product_serial_no'
        ? 'Serial Number'
        : name === 'invoice_document_url'
          ? 'Invoice Document'
          : name === 'model_no'
            ? 'Modal Number'
            : name === 'invoice_no'
              ? 'Invoice Number'
              : name;
  };

  const onInfoClick = (val: ArchivedProductDataInterface) => {
    setOpenDrawer(true);
    const productSpec = {
      product_serial_no: val?.product_specification?.product_serial_no,
      product_name: val?.product_specification?.product_name,
      model_no: val?.product_specification?.model_no,
      purchased_on: val?.product_specification?.purchased_on,
      specifications: {
        RAM: val?.product_specification?.RAM,
        Storage: val?.product_specification?.Storage,
        Color: val?.product_specification?.Color,
      },
      invoice_no: val?.product_specification?.invoice_no,
      invoice_document_url: val?.product_specification?.invoice_document_url,
    };
    setValue(productSpec);
  };

  return (
    <Box sx={archivedProductCardStyle.rootSx}>
      {loading ? (
        <>
          <Box
            sx={{
              ...archivedProductCardStyle.skeltonSubRootSx,
              bgcolor: 'background.surface.200',
              minHeight: '80px',
              width: '100%',
              borderRadius: '12px',
              // boxShadow: '0px 0px 12px #0000000F',
              border: '1px solid',
              borderColor: 'grey.A100',
              mb: '12px',
            }}
          >
            <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={100} width={80} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Box sx={{ width: '100%' }}>
                <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={20} width="85%" />
                <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={20} width="85%" />
                <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={20} width="85%" />
              </Box>
              <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={40} width={20} />
            </Box>
          </Box>
          <Box
            sx={{
              ...archivedProductCardStyle.skeltonSubRootSx,
              bgcolor: 'background.surface.200',
              minHeight: '80px',
              width: '100%',
              borderRadius: '12px',
              // boxShadow: '0px 0px 12px #0000000F',
              border: '1px solid',
              borderColor: 'grey.A100',
              mb: '12px',
            }}
          >
            <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={100} width={80} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Box sx={{ width: '100%' }}>
                <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={20} width="85%" />
                <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={20} width="85%" />
                <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={20} width="85%" />
              </Box>
              <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={40} width={20} />
            </Box>
          </Box>
          <Box
            sx={{
              ...archivedProductCardStyle.skeltonSubRootSx,
              bgcolor: 'background.surface.200',
              minHeight: '80px',
              width: '100%',
              borderRadius: '12px',
              // boxShadow: '0px 0px 12px #0000000F',
              border: '1px solid',
              borderColor: 'grey.A100',
              mb: '12px',
            }}
          >
            <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={100} width={80} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Box sx={{ width: '100%' }}>
                <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={20} width="85%" />
                <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={20} width="85%" />
                <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={20} width="85%" />
              </Box>
              <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={40} width={20} />
            </Box>
          </Box>
          <Box
            sx={{
              ...archivedProductCardStyle.skeltonSubRootSx,
              bgcolor: 'background.surface.200',
              minHeight: '80px',
              width: '100%',
              borderRadius: '12px',
              // boxShadow: '0px 0px 12px #0000000F',
              border: '1px solid',
              borderColor: 'grey.A100',
              mb: '12px',
            }}
          >
            <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={100} width={80} />
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
              <Box sx={{ width: '100%' }}>
                <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={20} width="85%" />
                <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={20} width="85%" />
                <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={20} width="85%" />
              </Box>
              <Skeleton sx={archivedProductCardStyle.skeltonSx} animation="wave" height={40} width={20} />
            </Box>
          </Box>
        </>
      ) : (
        <>
          {archivedProductData?.map((val, index) => {
            return (
              <Stack
                key={index}
                direction="row"
                alignItems="center"
                divider={<Divider sx={archivedProductCardStyle.dividerSx} orientation="vertical" flexItem />}
                justifyContent="space-between"
                sx={{
                  backgroundColor: 'background.surface.100',
                  minHeight: '80px',
                  width: '100%',
                  borderRadius: '12px',
                  boxShadow: '0px 0px 12px #0000000F',
                  border: '1px solid',
                  borderColor: 'background.surface.100',
                  mb: '12px',
                }}
              >
                <Box sx={archivedProductCardStyle.fridgeIconSx}>
                  <img
                    src={
                      val?.image_url
                        ? val?.image_url
                        : `https://prodkt-master.objectstore.e2enetworks.net/ProductPlaceholder.svg`
                    }
                    alt="Product Image"
                    style={{
                      objectFit: 'contain',
                      width: '100%',
                      height: '100%',
                    }}
                  />
                </Box>
                <Box sx={archivedProductCardStyle.ProductCardRightSx}>
                  <Box sx={archivedProductCardStyle.CardRightSx}>
                    <Typography sx={archivedProductCardStyle.titleSx}>
                      {val?.nick_name}
                      <Box
                        data-testid={`info-${index}`}
                        component="span"
                        pt={0.4}
                        sx={{ cursor: 'pointer' }}
                        onClick={() => onInfoClick(val)}
                      >
                        <InfoIcon />
                      </Box>
                    </Typography>
                    <Typography sx={archivedProductCardStyle.serialNumSx}>Serial No: {val?.serial_no}</Typography>
                    <Box sx={archivedProductCardStyle.viewTextSx} onClick={() => handleDocumentClick(val)}>
                      <Typography>
                        View Documents <RightBlueArrow />
                      </Typography>
                    </Box>
                  </Box>
                  <Box data-testid={`unArchiveProduct-${index}`} onClick={() => handleClick(val)}>
                    <ArchivedProductColorIcon sx={{ cursor: 'pointer' }} />
                  </Box>
                </Box>
              </Stack>
            );
          })}
        </>
      )}
      {/* Specifications Drawer */}

      {openDrawer && (
        <DrawerComponent
          heightStyle={{ p: 0 }}
          borderBottom
          showHeader={true}
          open={openDrawer}
          headerComponent={
            <ModalHeader
              icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
              showIcon={true}
              showHeader={true}
              headerText="Product Specification"
              onClose={() => setOpenDrawer(false)}
            />
          }
        >
          <SpecificationCard
            // valueTextStyle={{
            //   width: '250px',
            //   whiteSpace: 'nowrap',
            //   overflow: 'hidden',
            //   textOverflow: 'ellipsis',
            // }}
            copyIconShown={true}
            spectificationTextStyle={{ p: 0 }}
            specification={ConstructProductSpecification(value) ?? {}}
            paddingStyle
          />
        </DrawerComponent>
      )}
    </Box>
  );
};
