import { Button } from '@atoms/button';
import { CustomTextfield } from '@atoms/customTextfield';
import { AddIconSvg, CallIcon, CloseIcon, DecrementIconSvg, SearchIconColor } from '@atoms/icons';
import { addProductDetails, useAddProductCategory, useScanproduct, useSearchProduct } from '@core/store';
import { ModeOfPurchase } from '@core/ui/components/modeOfPurchase';
import { Box, Typography } from '@mui/material';
import Imes from '@assets/imes.png'
import React, { useState, useRef } from 'react';
import BarCode from '@assets/barcode.png';
import { DrawerComponent, ModalHeader, QuestionCard, ScreenLayout } from '..';
import { productDetailsStyle } from './style';
import { SerialNumber } from '@atoms/serialNumber';
import { Scanner } from '@atoms/qrScanner';
import { type } from 'os';
import { debug } from 'console';
import { isAlphaNumericCharacters } from '@core/utils';
import { CheckBox } from '@atoms/checkbox';

export interface ProductDetailsProps {
  showAddProduct?: boolean;
  phoneNumber?: number;
  openImei?: boolean;
  setOpenImei?: any;
  show: boolean;
  setShow: any;
}

export interface LocationInterface {
  address: string;
  latitude: string;
  longitude: string;
}

export const ProductDetails = (props: ProductDetailsProps): JSX.Element => {
  const { openImei, setOpenImei, show, setShow, showAddProduct = false, phoneNumber = '*#06#' } = props;
  const [drawerImeiOpen, setDrawerImeiOpen] = useState<boolean>(false);
  const [drawerImeitwoOpen, setDrawerImeitwoOpen] = useState<boolean>(false);
  const [drawerSerialOpen, setDrawerSerialOpen] = useState<boolean>(false);
  const [open, setOpen] = useState(false);
  const [isExtendedShow, setIsExtendedShow] = useState('');

  const [maxDate] = useState(new Date()?.toISOString()?.split('T')[0]);

  const {
    category,
    getCategory,
    productDetails,
    updateProductDetails,
    updateProductDetailsName,
    updateProductDetailsSpecification,
    updateProductSerialNo,
    onScanType,
    productYearIncrementDecrement
  } = addProductDetails();


  // const { updateProductDetails } = useAddProductCategory()


  const { updateSerialNo, clearSerialNo, onUpdateImeiNo, onUpdateSerialNo, serialIndex, product_details } =
    useScanproduct();


  const handleSerialDrawerOpen = () => {
    getCategory(() => {
      setDrawerSerialOpen(true);
    });
  };

  const scrollRef = useRef<HTMLDivElement | null>(null);


  const handleChangeModeOfPurchase = (mode: string) => {
    if (scrollRef) {
      setTimeout(() => {
        scrollRef.current?.scrollIntoView()
      }, 50);
    }
    updateProductDetails('mode_of_purchase', mode as never)
  }

  const handleChangeDateOfPurchase = (mode: string) => {
    updateProductDetails('dateofpurchase', mode as never)
  }

  const handleImeiDrawerOpen = () => {
    getCategory(() => {
      setDrawerImeiOpen(true);
    });
  };

  const handleDialPadClick = () => {
    window.open(`tel:${phoneNumber}`);
  };

  const onQrScanClick = (type: string) => {
    setShow(true);
    onScanType(type);
  };
  const onQrImeiClick = (type: string) => {
    setShow(true);
    onScanType(type);
  };

  const serialNumber = (val = false) => {
    setOpen(val);
    // setOpenImei(false);
  };
  const imeiNumber = () => {
    setOpen(false);
    setOpenImei(true);
  };

  const handleIncrement = () => {

  }
  const handleDecrement = () => {

  }

  // handleIncrement={() =>
  //   externalAmcDocumentUpdateState(
  //     'amc_coverage',
  //     (externalDocumentProductDetails?.amc_details?.amc_coverage + 1) as never,
  //   )
  // }
  // handleDecrement={() =>
  //   externalDocumentProductDetails?.amc_details?.amc_coverage > 0
  //     ? externalAmcDocumentUpdateState(
  //       'amc_coverage',
  //       (externalDocumentProductDetails?.amc_details?.amc_coverage - 1) as never,
  //     )
  //     : null
  // }

  React.useEffect(() => {
    getCategory();
  }, []);

  return (
    <Box sx={productDetailsStyle.rootSx}>
      <Box>
        {!showAddProduct && (
          <CustomTextfield
            textFieldStyle={{ mb: 2, pl: 1, pr: 0.2 }}
            definitionName="Product Name"
            isRequired
            variant="textField"
            placeholder="Name"
            value={productDetails?.product_details?.name}
            onChange={(e) => updateProductDetailsName(e.target.value)}
          />
        )}
        {!showAddProduct && (
          <CustomTextfield
            textFieldStyle={{ mb: 2 }}
            definitionName="Category"
            isRequired
            variant="dropDown"
            disabled={category.loading}
            placeholder={category.loading ? 'Loading...' : 'Category'}
            options={category.data}
            value={productDetails.category?.value}
            onMenuItemClick={(category) => updateProductDetails('category', category)}
          />
        )}
        {!showAddProduct && (
          <CustomTextfield
            textFieldStyle={{ mb: 2 }}
            definitionName="Brand Name"
            isRequired
            variant="textField"
            placeholder="Brand Name"
            value={productDetails?.brand}
            onChange={(e) => updateProductDetails('brand', e.target.value)}
          />
        )}
        {/* {productDetails?.category?.specifications ?? []} */}
        {!showAddProduct && productDetails?.category?.label && (
          <>
            {Array.isArray(productDetails?.category?.specifications) &&
              productDetails?.category?.specifications?.length > 0
              ? productDetails?.category?.specifications.map((val, i) => {
                return (
                  <CustomTextfield
                    key={i}
                    type={val?.label === 'RAM' ? 'number' : val?.label === 'Storage' ? 'number' : 'text'}
                    textFieldStyle={{ mb: 2 }}
                    definitionName={val?.label}
                    isRequired
                    variant="textField"
                    placeholder={val?.label}
                    value={productDetails.product_details.specifications[val?.value ?? '']}
                    onChange={(e) =>
                      updateProductDetailsSpecification(
                        val?.value ?? '',
                        e.target.value,
                        val?.label === 'RAM' ? 2 : val?.label === 'Storage' ? 3 : '',
                      )
                    }
                  />
                );
              })
              : null}
          </>
        )}

        {!showAddProduct ? (
          <CustomTextfield
            textFieldStyle={{ mb: 1 }}
            testid="dateOfPurchase"
            definitionName="Date Of Purchase"
            isRequired
            variant="dateField"
            value={productDetails?.data_of_purchase}
            maxDate={maxDate}
            placeholder="dd-mm-yyyy"
            onChange={(e) => updateProductDetails('data_of_purchase', e.target.value as never)}
          />
        )
          :
          // <Box sx={productDetailsStyle.checkBoxHeaderSx}>
          //   <Box sx={{ display: 'flex', justifyContent: 'space-between', gap: 1 }}>
          //     <Typography sx={productDetailsStyle.purchaseTextSx}>Do you have purchase date?&nbsp;<Typography sx={{ color: 'error.900' }}>*</Typography></Typography>
          //     <Box sx={{ display: 'flex', gap: 1 }}>
          //       <CheckBox checked={productDetails.data_of_purchase} onClick={() => setIsExtendedShow('Yes')} label="Yes" />
          //       <CheckBox checked={isExtendedShow === 'No'} onClick={() => setIsExtendedShow('No')} label="No" />
          //     </Box>
          //   </Box>

          //   <Box py={1} px={2}>
          //     {
          //       isExtendedShow === 'Yes' &&
          //       <CustomTextfield
          //         textFieldStyle={{ mb: 1 }}
          //         testid="dateOfPurchase"
          //         definitionName="Date Of Purchase"
          //         isRequired
          //         variant="dateField"
          //         value={productDetails?.data_of_purchase}
          //         maxDate={maxDate}
          //         placeholder="dd-mm-yyyy"
          //         onChange={(e) => updateProductDetails('data_of_purchase', e.target.value as never)}
          //       />
          //     }
          //     {
          //       isExtendedShow === 'No' &&
          //       <Box sx={{
          //         ...productDetailsStyle.approximateStyle,
          //         py: isExtendedShow === 'No' ? 1.2 : 1.5,
          //       }}>
          //         <Typography sx={productDetailsStyle.purchaseTextSx}>Approximate age (Yrs)&nbsp;<Typography sx={{ color: 'error.900' }}>*</Typography></Typography>
          //         <Box sx={productDetailsStyle.addBoxSx}>
          //           <Typography sx={{ cursor: 'pointer' }}
          //             onClick={() =>
          //               productYearIncrementDecrement(
          //                 'approximateAge',
          //                 (productDetails?.approximateAge - 1) as never,
          //               )
          //             }
          //           >
          //             <DecrementIconSvg />
          //           </Typography>
          //           <Typography sx={{ color: 'text.A100', fontWeight: 700, fontSize: '12px' }}>
          //             {productDetails?.approximateAge ?? 0}
          //           </Typography>
          //           <Typography sx={{ color: 'text.A100', fontWeight: 700, fontSize: '12px' }}>
          //             Year
          //           </Typography>
          //           <Typography sx={{ cursor: 'pointer' }}
          //             onClick={() =>
          //               productYearIncrementDecrement(
          //                 'approximateAge',
          //                 (productDetails?.approximateAge + 1) as never,
          //               )
          //             }
          //           >
          //             <AddIconSvg />
          //           </Typography>
          //         </Box>
          //       </Box>
          //     }
          //   </Box>
          // </Box>

          <ModeOfPurchase
            showAddProduct={showAddProduct}
            sx={{ pb: 1 }}
            modeTitle="Do you have purchase date?"
            isRequired={true}
            mode={productDetails?.dateofpurchase}
            handleChange={(mode) => handleChangeDateOfPurchase(mode)}
            dateComponent={
              <Box pb={1.2}>
                <CustomTextfield
                  textFieldStyle={{ mb: 1 }}
                  testid="dateOfPurchase"
                  definitionName="Date Of Purchase"
                  isRequired
                  variant="dateField"
                  value={productDetails?.data_of_purchase}
                  maxDate={maxDate}
                  placeholder="dd-mm-yyyy"
                  onChange={(e) => updateProductDetails('data_of_purchase', e.target.value as never)}
                />
              </Box>
            }
          />
        }
        {/* serial number */}
        <Box
          data-testid="findTheSerialNumber"
          sx={productDetailsStyle.searchBoxSx}
        >
          <Box>
            <SearchIconColor />
          </Box>
          <Typography onClick={() => handleSerialDrawerOpen()} sx={productDetailsStyle.typeSx}>{`Where to find serial number?`}</Typography>
        </Box>

        {/* <CustomTextfield
          testid="serialNumber"
          textFieldStyle={{ mb: 2 }}
          definitionName={productDetails.category.serial_no.title}
          isRequired
          variant="textField"
          placeholder={productDetails.category.serial_no.title}
          value={productDetails?.serial_no}
          onChange={(e) => updateProductDetails('serial_no', e.target.value)}
        /> */}
        <SerialNumber
          open={open}
          setOpen={serialNumber}
          value={productDetails?.serial_no}
          updateSerialNo={(e: any) => { isAlphaNumericCharacters(e.target.value) ? updateProductDetails('serial_no', e.target.value) : null }}
          onScanCameraClick={() => onQrScanClick('serial_no')}
          variant="textField"
          definitionName="Serial Number"
          placeholder="Serial Number"
          serialText="Scan Serial Number"
        />

        {/* Imei Number */}

        {
          (productDetails?.category?.category_name === 'Tablet' ||
            productDetails?.category?.category_name === 'Mobile')
            ||
            (productDetails?.product_details?.category_name === 'Tablet' ||
              productDetails?.product_details?.category_name === 'Mobile') ?
            (
              <>
                <Box
                  data-testid="findTheSerialNumber"
                  sx={productDetailsStyle.searchBoxSx}
                >
                  <Box>
                    <SearchIconColor />
                  </Box>
                  <Typography sx={productDetailsStyle.typeSx} onClick={() => handleImeiDrawerOpen()}>
                    {`Where to find ${productDetails?.category?.serial_no?.title
                      || productDetails?.product_details?.serial_no?.title}?`}
                  </Typography>
                </Box>
                <SerialNumber
                  // open={openImei}
                  // setOpen={() => imeiNumber()}
                  value={productDetails?.imei_no}
                  updateSerialNo={(e: any) => {
                    updateProductDetails('imei_no', e.target.value);
                  }}
                  onScanCameraClick={() => onQrImeiClick('imei_no')}
                  variant="textField"
                  definitionName="IMEI Number"
                  placeholder="IMEI Number"
                  serialText="Scan IMEI Number"
                  index={serialIndex}
                />
              </>
            ) : null
        }

        <ModeOfPurchase
          sx={{ pb: 1 }}
          modeTitle="Mode of Purchase"
          isRequired={true}
          mode={productDetails.mode_of_purchase}
          handleChange={(mode) => handleChangeModeOfPurchase(mode)}
          location={productDetails.purchase_location}
          handleLocation={(location) => updateProductDetails('purchase_location', location as never)} showAddProduct={undefined}
        />
        <div ref={scrollRef}></div>
      </Box>
      {/* serial drawer */}
      <DrawerComponent
        heightStyle={{ height: '100%' }}
        borderBottom
        showHeader={true}
        open={drawerSerialOpen}
        footer
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon={true}
            showHeader={true}
            headerText="Where to find serial number"
            onClose={() => setDrawerSerialOpen(false)}
          />
        }
        footerComponent={
          <Box px={1.5} pb={1} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box sx={{ bgcolor: 'text.700', borderRadius: '8px', py: 0.4, width: '150px' }}></Box>
          </Box>
        }
      >
        <Box px={1}>
          <Box px={0.2}>
            <img src={BarCode} width="100%" alt="serial Number number" />
          </Box>
          <Box>
            <Typography sx={productDetailsStyle.textSx}>
              Locate your device's serial number easily by checking the box label, inspecting the device itself, or navigating to Settings&#62;System&#62;About&#62;Status&#62;Serial No.
            </Typography>
          </Box>
        </Box>
      </DrawerComponent>

      {/* imei Drawer */}
      <DrawerComponent
        heightStyle={{ height: '100%' }}
        borderBottom
        showHeader={true}
        open={drawerImeiOpen}
        footer
        headerComponent={
          <ModalHeader
            icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
            showIcon={true}
            showHeader={true}
            headerText={`Where to find ${productDetails?.category?.serial_no?.title || productDetails?.product_details?.serial_no?.title}?`}
            onClose={() => setDrawerImeiOpen(false)}
          />
        }
        footerComponent={
          <Box px={1.5} pb={1}>
            <Button
              sx={productDetailsStyle.drawerButton}
              fullWidth
              startIcon={<CallIcon />}
              onClick={() => handleDialPadClick()}
            >
              {`Get your ${productDetails?.category?.serial_no?.title || productDetails?.product_details?.serial_no?.title}`}
            </Button>
          </Box>
        }
      >
        <Box px={1}>
          <Box px={0.2} pb={1}>
            <img src={Imes} width="100%" alt="imes number" />
          </Box>
          <Box>
            <Typography sx={{ color: 'text.A100', fontSize: '12px', mb: 1, fontWeight: 'bold' }}>Check your phone's Settings app.</Typography>
            <Typography sx={{ color: 'text.A100', fontSize: '12px', pb: 0.3, pl: 1.5 }}>1. Tap About phone.</Typography>
            <Typography sx={{ color: 'text.A100', fontSize: '12px', pl: 1.5 }}>2. Scroll down until you find "IMEI."</Typography>
          </Box>
        </Box>
      </DrawerComponent>
    </Box >
  );
};
