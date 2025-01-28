/* eslint-disable react/jsx-key */
import { useProductDetails } from '@core/store';
import { BackCircleIcon, Button, CheckBox, PageHeader } from '@core/ui/atoms';
import ProductTextIcon from '@core/ui/atoms/icons/productTextIcon';
import { ActivityLog, ShareDetailsComponent, SpecificationCard } from '@core/ui/components';
import { Box, Container, Stack, Typography } from '@mui/material';
import html2canvas from 'html2canvas';
import { useState } from 'react';
import { track } from '@amplitude/analytics-browser';

import { shareDetailsStyle } from './style';
import { useLocation } from 'react-router-dom';

export default function ShareDetails() {
  const { selectAllCheckBoxClick, updateCard, selectCard, warrantyDetailsState, activityState, product_specification } =
    useProductDetails();

  const [isShare, SetIsShare] = useState({
    productSpecificationCard: true,
    insuranceCard: true,
    amcCard: true,
    activityLogCard: true,
    hideCheckBox: false,
    watermark: false,
  });
  const { productSpecificationCard, insuranceCard, amcCard, activityLogCard } = selectCard;

  const ConstructProductSpecification = (data: { [key: string]: any }): { title: string; value: string }[] => {
    const arr: { title: string; value: string }[] = [];
    Object?.keys(data)?.map((key) =>
      typeof data[key] === 'string'
        ? arr?.push({ title: ConstructTitle(key), value: data[key] })
        : typeof data[key] === 'object'
          ? Object?.keys(data[key])?.map((key_) =>
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

  const CheckShareCardClick = (value: boolean, key: string) => {
    updateCard(value, key);
  };

  function urltoFile(url: any, filename: any, mimeType: any) {
    return fetch(url)
      .then(function (res) {
        return res.arrayBuffer();
      })
      .then(function (buf) {
        return new File([buf], filename, { type: mimeType });
      });
  }
  const onShareButtonClick = async (fileName: any) => {
    SetIsShare({
      productSpecificationCard,
      insuranceCard,
      amcCard,
      activityLogCard,
      hideCheckBox: true,
      watermark: true,
    });
    const node = document.getElementById('ticket');
    // useCors to draw image from different origin
    setTimeout(() => {
      SetIsShare({
        productSpecificationCard: true,
        insuranceCard: true,
        amcCard: true,
        activityLogCard: true,
        hideCheckBox: false,
        watermark: false,
      });
      html2canvas(node as any, { useCORS: true }).then(async (canvas) => {
        const base64File = canvas.toDataURL();
        const file2 = await urltoFile(base64File, `${fileName}.png`, 'image/png');
        const fileArray = [file2];
        if (navigator.canShare && navigator.canShare({ files: fileArray })) {
          try {
            await navigator.share({
              files: fileArray,
            });
            /* Show a message if the user shares something */
            console.log(`Thanks for Sharing!`);
          } catch (err) {
            /* This error will appear if the user cancels the action of sharing. */
            console.log(`Couldn't share ${err}`);
          }
        }
      });
    }, 500);
  };

  // Amplitude tracking
  useEffect(() => {
    track('Share details page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Container sx={{ maxWidth: '425px', padding: { sm: '0px', xs: '0px' } }}>
      <Box sx={shareDetailsStyle.rootSx}>
        <Box pt={2} px={2.5}>
          <PageHeader showIcon icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />} header headerText="Share Details" />
        </Box>
        <Box sx={shareDetailsStyle.selectItemsRootSx}>
          <Typography variant="subtitle2" fontWeight={700}>
            Select Items to Share
          </Typography>
          <Box sx={shareDetailsStyle.subRootSx}>
            <Typography sx={shareDetailsStyle.selectTextSx}>Select All</Typography>
            <CheckBox
              checked={[productSpecificationCard, amcCard, insuranceCard, activityLogCard]?.every(Boolean)}
              onChange={selectAllCheckBoxClick}
            />
          </Box>
        </Box>

        <Box px={2.5} pt={1} id="ticket">
          {isShare.productSpecificationCard && (
            <Box py={1}>
              <ShareDetailsComponent
                checkBoxCard={CheckShareCardClick}
                checkBoxKey={'productSpecificationCard'}
                checkBoxValue={productSpecificationCard}
                headertext="Product Specification"
                hideCheckBox={isShare?.hideCheckBox}
              >
                <SpecificationCard specification={ConstructProductSpecification(product_specification) ?? []} />
              </ShareDetailsComponent>
            </Box>
          )}
          {/* Insurance Details */}
          {[undefined, null].includes(warrantyDetailsState?.insurance_details as any) ? null : (
            <>
              {isShare.insuranceCard && (
                <Box py={1}>
                  <ShareDetailsComponent
                    checkBoxCard={CheckShareCardClick}
                    checkBoxKey={'insuranceCard'}
                    checkBoxValue={insuranceCard}
                    headertext="Insurance Details"
                    hideCheckBox={isShare?.hideCheckBox}
                  >
                    <SpecificationCard
                      specification={[
                        {
                          title: 'Policy Number',
                          value: warrantyDetailsState?.insurance_details?.insurance_valid_to ?? '',
                        },
                        { title: 'Policy Name', value: warrantyDetailsState?.insurance_details?.insurer_name ?? '' },
                      ]}
                    />
                  </ShareDetailsComponent>
                </Box>
              )}
            </>
          )}

          {/* AMC Details */}
          {[undefined, null].includes(warrantyDetailsState?.amc_details as any) ? null : (
            <>
              {isShare.amcCard && (
                <Box py={1}>
                  <ShareDetailsComponent
                    checkBoxCard={CheckShareCardClick}
                    checkBoxKey={'amcCard'}
                    checkBoxValue={amcCard}
                    headertext="AMC Details"
                    hideCheckBox={isShare?.hideCheckBox}
                  >
                    <SpecificationCard
                      specification={[
                        { title: 'Amc Expiry Date', value: warrantyDetailsState?.amc_details?.amc_valid_to ?? '' },
                        { title: 'Availed Services', value: warrantyDetailsState?.amc_details?.amc_serial_no ?? '' },
                      ]}
                    />
                  </ShareDetailsComponent>
                </Box>
              )}
            </>
          )}

          {isShare.activityLogCard && (
            <Box py={1}>
              <ShareDetailsComponent
                checkBoxCard={CheckShareCardClick}
                checkBoxKey={'activityLogCard'}
                checkBoxValue={activityLogCard}
                headertext="Activity log"
                hideCheckBox={isShare?.hideCheckBox}
              >
                <ActivityLog sx={{ pl: 1 }} dataList={activityState?.activity_logs} />
              </ShareDetailsComponent>
            </Box>
          )}
          <Box pb={isShare?.watermark ? 1 : 12}>
            {isShare?.watermark && (
              <Stack direction={'row'} gap={'4px'} alignItems="center" pt={0.2} pb={2}>
                <Box flexGrow={1}>
                  <Typography textAlign="right" sx={shareDetailsStyle.watermark} className="watermark">
                    Generated by
                  </Typography>
                </Box>
                <ProductTextIcon />
              </Stack>
            )}
          </Box>
        </Box>
        <Box sx={{ ...shareDetailsStyle.buttonRootSx, maxWidth: '425px' }}>
          <Button sx={shareDetailsStyle.buttonSx} fullWidth onClick={onShareButtonClick}>
            Share
          </Button>
        </Box>
      </Box>
    </Container>
  );
}
