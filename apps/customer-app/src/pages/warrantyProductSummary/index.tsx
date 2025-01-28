import { webRoutes } from '@core/routes';
import {
  addProductDetails,
  useProductSummary,
  useScanproduct
} from '@core/store';
import { BackCircleIcon, PageHeader } from '@core/ui/atoms';
import {
  FileUploadCard,
  FooterButtonComponent,
  ProductListCard,
  SpecificationCard,
  WarrantyInsuranceCard
} from '@core/ui/components';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { warrantyProductSummaryStyle } from './style';

export default function WarrantyProductSummary() {
  const { productSummary, warrantyInsuranceAmcData, documentData, genProductSummary } = useProductSummary();

  // general hooks
  const navigate = useNavigate();
  const location = useLocation();
  const isScan = location?.state?.data?.isScan || false;
  const product_detail = location?.state?.data?.data;
  const addProductTypeId = location?.state?.data?.data?.product_details?.type_id;
  const standardWarrantyDetails = location?.state?.data?.getWhatProductISelected;
  const [productDetails] = React.useState<any>(product_detail);

  // Store
  const addProductDetail = addProductDetails();
  const { productDetails: addproduct, whatsAppCoverage_id, whatsAppProductDetails } = addProductDetails()
  const { updateProducts } = addProductDetails();
  const { invoiceDocument } = useScanproduct();

  // functionality
  const ConstructWhatsAppArray = (data: any) => {

    const arrayToReturn = [
      {
        title: 'Date of Purchase',
        value: data?.product_details?.purchase_date ?? '',
      },
      {
        title: 'Serial Number',
        value: data?.product_details?.serial_no ?? invoiceDocument?.serial_no ?? '',
      },
      {
        title: 'Mode of Purchase',
        value: data?.product_details?.mode_of_purchase ?? '',
      }, {
        title: 'Model No',
        value: data?.product_details?.model_no ?? '',
      },
    ];

    if (data?.product_details?.mode_of_purchase !== 'online') {
      arrayToReturn.push({
        title: 'Location',
        value: data?.product_details?.location_name ?? '',
      });
    }

    return arrayToReturn;
  };

  const ConstructArray = (data: any) => {

    const arrayToReturn = [
      {
        title: 'Date of Purchase',
        value: data?.purchase_date ?? '',
      },
      {
        title: 'Serial Number',
        value: data?.serial_no ?? invoiceDocument?.serial_no ?? '',
      },
      {
        title: 'Mode of Purchase',
        value: data?.mode_of_purchase ?? '',
      },
    ];

    if (data?.mode_of_purchase !== 'online') {
      arrayToReturn.push({
        title: 'Location',
        value: data?.location_name ?? '',
      });
    }

    arrayToReturn.push({
      title: 'IMEI Number',
      value: data?.imei_no ?? invoiceDocument?.serial_no ?? '',
    });

    return arrayToReturn;
  };


  const backRouteAddProduct = () => {
    if (isScan) {
      navigate(webRoutes.addproductBot);
    } else {
      navigate(webRoutes.addProductDetails, {
        state: {
          open: true,
        },
      });
      updateProducts('currentStep', 4);
    }
  };

  const selected = product_detail?.invoice_details?.find((x: any) => x.checked);

  const productTypeId = selected?.product_details?.type_id;

  const addProduct = () => {
    if (addProductTypeId) {
      navigate(webRoutes.nickName, {
        state: {
          typeId: addProductTypeId,
          data: {
            isScan: true,
            data: productDetails,
            standardWarrantyDetails: standardWarrantyDetails
          },
        },
      });
    } else {
      navigate(webRoutes.nickName, {
        state: {
          typeId: productTypeId,
          data: {
            isScan: true,
            data: productDetails,
            standardWarrantyDetails: standardWarrantyDetails
          },
        },
      });
    }
  };

  React.useEffect(() => {
    genProductSummary(addProductDetail);
  }, []);


  // Amplitude tracking
  useEffect(() => {
    track('Warranty product summary page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Container
      sx={warrantyProductSummaryStyle.mainRootSx}
    >
      <Box sx={warrantyProductSummaryStyle.rootSx}>

        <Box sx={warrantyProductSummaryStyle.headerSx}>
          <PageHeader
            subRootStyle={{ width: '88%' }}
            useBackBtnClick={whatsAppCoverage_id ? false : true}
            showIcon={whatsAppCoverage_id ? false : true}
            header
            onBackBtnClick={() => backRouteAddProduct()}
            icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />}
            headerText="Product Summary"
          />
        </Box>

        <Box sx={warrantyProductSummaryStyle.listCardSx}>
          <ProductListCard
            imageURL={
              whatsAppCoverage_id ? whatsAppProductDetails?.product_details?.image_url :
                isScan ? selected?.product_details?.image_url
                  : addProductDetail.productDetails.product_details.url
            }
            productDescription={
              whatsAppCoverage_id ? whatsAppProductDetails?.product_details?.product_name :
                isScan
                  ? selected?.product_details?.product_name
                  : addProductDetail.productDetails.product_details.name
            }
          />
        </Box>

        <Box sx={warrantyProductSummaryStyle.detailsCardSx}>
          <SpecificationCard
            heading={'Product Details'}
            paddingStyle
            specification={
              whatsAppCoverage_id ? ConstructWhatsAppArray(whatsAppProductDetails) :
                isScan ? ConstructArray(selected?.product_details) : productSummary?.filter((val) => val.value)} />
        </Box>

        <Box sx={warrantyProductSummaryStyle.warrantInsuranceCardSx}>
          <WarrantyInsuranceCard header="Warranty, Insurance & AMC" isScan={isScan} selected={selected} data={warrantyInsuranceAmcData} />
        </Box>

        {/* document Component */}
        {documentData?.filter((val) => val.subTitle.length > 0).length > 0 && (
          <Box sx={warrantyProductSummaryStyle.uploadSectionSx}>
            <FileUploadCard
              header={`Documents (${documentData.filter((val) => val?.subTitle?.length > 0).length})`}
              data={documentData}
            />
          </Box>
        )}

      </Box>

      <Box sx={warrantyProductSummaryStyle.fixedButtonSectionSx}>
        {isScan || whatsAppCoverage_id ? (
          <FooterButtonComponent
            sx={{ px: 2, py: 2.8 }}
            showRightBtn
            rightButton="Add Product"
            handleClickNext={() => addProduct()}
          />
        ) : (
          <FooterButtonComponent
            sx={{ px: 2, py: 2.8 }}
            showLeftBtn
            showRightBtn
            leftButton="Modify"
            rightButton="Confirm"
            handleClickPrevious={() => backRouteAddProduct()}
            handleClickNext={() => {
              navigate(webRoutes.nickName, {
                state: {
                  typeId: addProductTypeId,
                },
              });
            }}
          />
        )}
      </Box>
    </Container >
  );
}
