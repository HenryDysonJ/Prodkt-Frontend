import BarCode from '@assets/barcode.png';
import { DrawerComponent } from '@components/drawerComponent';
import { ModalHeader } from '@components/modalHeader';
import { webRoutes } from '@core/routes';
import { addProductDetails, useScanproduct } from '@core/store';
import type { SxProps, Theme } from '@mui/material';
import { Box, Divider, Stack, Typography } from '@mui/material';
import Imes from '@assets/imes.png'
import { JSXElementConstructor, ReactElement, ReactNode, ReactPortal, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { AlertIcon, Button, CallIcon, CheckBox, CloseIcon, ProductNotFound, SearchIconColor, SerialNumber } from '..';
import { productInvoiceAddedDrawerStyle } from './style';

export interface ProductInvoiceAddedDrawerProps {
  className?: string;
  phoneNumber?: string;
  sx?: SxProps<Theme>;
  setAddProductState?: any;
  loading?:boolean;
  addProductState?: any;
  isScan?: boolean;
  disabled?: boolean;
  onScanCameraClick: (val: any, type: string) => void;
  onScanSerialNumber: (val: any, type: string) => void;
  onProceedDrawer: () => void;
  setOpenCamera: any;
}

export const ProductInvoiceAddedDrawer = (props: ProductInvoiceAddedDrawerProps): JSX.Element => {
  const {
    isScan,
    disabled,
    onProceedDrawer = () => false,
    addProductState,
    setAddProductState,
    // scanResult,
    onScanCameraClick = () => false,
    onScanSerialNumber = () => false,
    className = '',
    phoneNumber = '*#06#',
    setOpenCamera,
    loading=false,
    sx = {},
    ...rest
  } = props;


  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [newProductDrawer] = useState<boolean>(true);
  const [productNotFound, setProductNotFound] = useState(false);
  const [openImei, setOpenImei] = useState(false);
  const [drawerSerialOpen, setDrawerSerialOpen] = useState<boolean>(false);
  const [drawerImeiOpen, setDrawerImeiOpen] = useState<boolean>(false);

  const {
    updateSerialNo,
    serialCheckedIndex,
    product_details,
    invoiceDocument,
    serialIndex,
    openInvoiceDrawer,
    onCheckedIndexUpdate,
    updateServiceRecordDrawerState
  } = useScanproduct();

  const {
    productDetails,
    category,
    getCategory,
  } = addProductDetails();

  const onChecked = (e: any, index: number) => {
    onCheckedIndexUpdate(index)
    const productInvoiceAddCopy = addProductState;
    if (e === true) {
      productInvoiceAddCopy.map((val: any, inde: number) => {
        if (val?.checked === true) {
          productInvoiceAddCopy[inde].checked = false;
        }
      });
      productInvoiceAddCopy[index].checked = e;
      setAddProductState(productInvoiceAddCopy, index);
      // updateSerialNo('serial_no', '');
    } else {
      productInvoiceAddCopy[index].checked = e;
      setAddProductState(productInvoiceAddCopy, index);
      // updateSerialNo('serial_no', '', index);
    }
  };

  const onProductNotFoundClick = () => {
    setProductNotFound(true)
  }
  const onPreviousClick = () => {
    updateServiceRecordDrawerState('openInvoiceDrawer', false)
  }


  const onAddManually = () => {
    const stateData = category;
    navigate(webRoutes.addProductDetails, {
      state: {
        openDrawer: newProductDrawer,
        productNotFound: stateData,
        onScanPreviousClick: true
      },
    });
  }




  const serialNumber = () => {
    setOpen(true)
    setOpenImei(false)
  }
  const imeiNumber = () => {
    setOpen(false)
    setOpenImei(true)
  }
  const handleSerialDrawerOpen = () => {
    getCategory(() => {
      setDrawerSerialOpen(true);
    });
  };

  const handleImeiDrawerOpen = () => {
    getCategory(() => {
      setDrawerImeiOpen(true);
    });
  };
  const getWhatProductISelected = product_details?.invoice_details?.filter((x: { checked: boolean }) => {
    return x.checked === true;
  });


  const handleDialPadClick = () => {
    window.open(`tel:${phoneNumber}`);
  };
  const openProductDrawers = () => {
    updateServiceRecordDrawerState('openInvoiceDrawer', true)
  }

  useEffect(() => {
    getCategory();
  }, []);


  return (
    <Box
      sx={[
        { ...productInvoiceAddedDrawerStyle.rootSx, position: 'relative', zIndex: 1 },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      {addProductState?.map(
        (
          val: {
            src: string | undefined;
            product_details: any;
            productname:
            | string
            | number
            | boolean
            | ReactElement<any, string | JSXElementConstructor<any>>
            | Iterable<ReactNode>
            | ReactPortal
            | null
            | undefined;
            checked: boolean | undefined;

          },
          index: number,
        ) => {
          return (
            <>
              <Box sx={productInvoiceAddedDrawerStyle.subRootSx}>
                <Stack direction="row"
                  alignItems={'center'}
                  sx={productInvoiceAddedDrawerStyle.stackBoxSx}>
                  <Stack
                    alignItems={'center'} sx={{ py: 1.5, borderRight: '1px solid', borderColor: 'primary.A400' }}
                    divider={<Divider sx={productInvoiceAddedDrawerStyle.dividerSx} orientation="vertical" flexItem />}
                  >
                    <Box sx={{ borderRight: '1px solid', borderColor: 'background.surface.100' }}>
                      <img
                        src={val?.product_details?.image_url ?? `https://prodkt-master.objectstore.e2enetworks.net/ProductPlaceholder.svg`}
                        style={{ paddingLeft: '12px', paddingRight: '12px', width: '52px', height: '52px' }}
                        alt="productImage"
                      />
                    </Box>
                  </Stack>
                  <Box sx={{ px: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 8 }}>
                    <Box pl={1}>
                      <Typography variant='subtitle1' fontWeight={700} sx={productInvoiceAddedDrawerStyle.textSx}>
                        {val?.product_details?.product_name}
                      </Typography>
                    </Box>
                    <Box>
                      <CheckBox checked={val?.checked} onChange={(e) => onChecked(e, index)} />
                    </Box>
                  </Box>
                </Stack>
              </Box>
              {/* <Divider sx={{ border: '1px dashed', borderColor: 'divider.100' }} /> */}
            </>
          );
        },
      )}


      <Box sx={{ bottom: '70px', left: '0px', right: '0px' }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, justifyContent: 'center', py: 2.5, cursor: 'pointer' }}>
          <AlertIcon />
          <Typography
            onClick={() => onProductNotFoundClick()}
            sx={{
              color: 'primary.main',
              textDecoration: 'underline'
            }}>
            Product Not Found
          </Typography>
        </Box>
      </Box>
      <Button
        sx={{ ...productInvoiceAddedDrawerStyle.updateButtonSx, }}
        fullWidth
        disabled={disabled}
        onClick={() => openProductDrawers()}
      >
        Proceed
      </Button>

      {
        <DrawerComponent
          heightStyle={{
            height: '450px'
          }}
          borderBottom
          showHeader={true}
          open={openInvoiceDrawer}
          headerComponent={
            <ModalHeader
              icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
              showIcon={true}
              showHeader={true}
              headerText={`Product Details`}
              onClose={() => updateServiceRecordDrawerState('openInvoiceDrawer', false)}
            />
          }
        >
          <Box>
            <Stack direction="row"
              alignItems={'center'}
              sx={productInvoiceAddedDrawerStyle.stackBoxSx}>
              <Stack
                alignItems={'center'} sx={{ py: 1.5, borderRight: '1px solid', borderColor: '#E6EEFA' }}
                divider={<Divider sx={productInvoiceAddedDrawerStyle.dividerSx} orientation="vertical" flexItem />}
              >
                <Box sx={{ borderRight: '1px solid', borderColor: 'background.surface.100' }}>
                  <img
                    src={getWhatProductISelected?.[0]?.product_details?.image_url ?? `https://prodkt-master.objectstore.e2enetworks.net/ProductPlaceholder.svg`}
                    style={{ paddingLeft: '12px', paddingRight: '12px', width: '52px', height: '52px' }}
                    alt="productImage"
                  />
                </Box>
              </Stack>
              <Box sx={{ px: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 10 }}>
                <Box pl={1}>
                  <Typography variant='subtitle1' fontWeight={700} sx={productInvoiceAddedDrawerStyle.textSx}>
                    {getWhatProductISelected?.[0]?.product_details?.product_name}
                  </Typography>
                </Box>
              </Box>
            </Stack>
            <Box>
              <>
                <Box>
                  <Box
                    data-testid="findTheSerialNumber"
                    sx={productInvoiceAddedDrawerStyle.searchBoxSx}
                  >
                    <Box>
                      <SearchIconColor />
                    </Box>
                    <Typography
                      sx={productInvoiceAddedDrawerStyle.typeSx}
                      onClick={() => handleSerialDrawerOpen()}
                    >
                      {`Where to find serial number?`}
                    </Typography>
                  </Box>
                  <SerialNumber
                    open={open}
                    setOpen={() => serialNumber()}
                    value={getWhatProductISelected?.[0]?.product_details?.serial_no}
                    updateSerialNo={(e: any) => updateSerialNo('serial_no', e.target.value, serialCheckedIndex)}
                    onScanCameraClick={() => onScanCameraClick(serialCheckedIndex, 'serial_no')}
                    variant="textField"
                    definitionName="Serial Number"
                    placeholder="Serial Number"
                    serialText='Scan Serial Number'
                    index={serialIndex}
                  />
                </Box>

                {
                  getWhatProductISelected?.[0]?.product_details?.category_name === 'Mobile' ||
                    getWhatProductISelected?.[0]?.product_details?.category_name === 'Tablet'
                    ?
                    <>
                      <Box>
                        <Box
                          data-testid="findTheSerialNumber"
                          sx={productInvoiceAddedDrawerStyle.searchBoxSx}
                        >
                          <Box>
                            <SearchIconColor />
                          </Box>
                          <Typography
                            sx={productInvoiceAddedDrawerStyle.typeSx}
                            onClick={() => handleImeiDrawerOpen()}
                          >
                            {/* ${productDetails.category.serial_no.title} */}
                            {`Where to find IMEI Number ?`}
                          </Typography>
                        </Box>
                        <SerialNumber
                          // open={openImei}
                          // setOpen={() => imeiNumber()}
                          value={getWhatProductISelected?.[0]?.product_details?.imei_no}
                          updateSerialNo={(e: any) => {
                            updateSerialNo('imei_no', e.target.value, serialCheckedIndex)
                          }}
                          onScanCameraClick={() => onScanSerialNumber(serialCheckedIndex, 'imei_no')}
                          variant="textField"
                          definitionName="IMEI Number"
                          placeholder="IMEI Number"
                          serialText='Scan IMEI Number'
                          index={serialIndex}
                        />
                      </Box>
                    </>
                    : null
                }

              </>

            </Box>

            <Box sx={{ position: 'absolute', bottom: '20px', width: '90%' }}>
              <Box pt={2} sx={{ display: 'flex', justifyContent: 'space-between', gap: 2 }}>
                <Button
                  sx={{
                    ...productInvoiceAddedDrawerStyle.footerButtonSx,
                  }}
                  fullWidth
                  onClick={onPreviousClick}
                >
                  Previous
                </Button>

                <Button
                loading={loading}
                  sx={{
                    ...productInvoiceAddedDrawerStyle.manuallyButtonSx,
                  }}
                  fullWidth
                  onClick={() => onProceedDrawer()}
                  disabled={
                    (getWhatProductISelected?.[0]?.product_details?.category_name === 'Mobile' ||
                      getWhatProductISelected?.[0]?.product_details?.category_name === 'Tablet')
                      ?
                      ((!getWhatProductISelected?.[0]?.product_details?.serial_no)
                        || (!getWhatProductISelected?.[0]?.product_details?.imei_no || invoiceDocument?.imei_no))
                      : (getWhatProductISelected?.[0]?.product_details?.serial_no)
                        ? false : true
                  }
                >
                  Proceed
                </Button>
              </Box>
            </Box>
          </Box>
        </DrawerComponent>
      }

      <DrawerComponent
        borderBottom
        // showHeader={true}
        open={productNotFound}
      >
        <Box>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <ProductNotFound />
          </Box>
          <Typography variant="subtitle2" fontWeight={700} gutterBottom sx={{ pt: 2.5, color: 'text.900', fontSize: '14px', textAlign: 'center' }}>
            Product Not Found
          </Typography>
          <Typography gutterBottom fontWeight={500} sx={{ color: 'text.700', fontSize: '12px', py: 2, textAlign: 'center' }}>
            Would you like to add it manually?
          </Typography>

          <Box pt={2} sx={{ display: 'flex', justifyContent: 'space-between', gap: 3 }}>
            <Button
              sx={productInvoiceAddedDrawerStyle.footerButtonSx}
              fullWidth
              onClick={() => setProductNotFound(false)}
            >
              cancel
            </Button>
            <Button
              sx={productInvoiceAddedDrawerStyle.manuallyButtonSx}
              fullWidth
              onClick={() => onAddManually()}
            >
              Add Manually
            </Button>
          </Box>
        </Box>
      </DrawerComponent>

      {/* serial number */}
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
            headerText={`Where to find serial number?`}
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
            <Typography sx={productInvoiceAddedDrawerStyle.textSSx}>
              Locate your device's serial number easily by checking the box label, inspecting the device itself, or navigating to Settings&#62;System&#62;About&#62;Status&#62;Serial No.
            </Typography>
          </Box>
        </Box>
      </DrawerComponent>

      {/* Imei no */}
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
            headerText={`Where to find IMEI Number?`}
            onClose={() => setDrawerImeiOpen(false)}
          />
        }
        footerComponent={
          <Box px={1.5} pb={1}>
            <Button
              sx={productInvoiceAddedDrawerStyle.drawerButton}
              fullWidth
              startIcon={<CallIcon />}
              onClick={() => handleDialPadClick()}
            >
              {`Get your IMEI number`}
            </Button>
          </Box>
        }
      >
        <Box px={1}>
          <Box px={0.2} pb={1}>
            <img
              src={Imes}
              width="100%" alt="imes number" />
          </Box>
          <Box>
            <Typography sx={{ color: 'text.A100', fontSize: '12px', mb: 1, fontWeight: 'bold' }}>Check your phone's Settings app.</Typography>
            <Typography sx={{ color: 'text.A100', fontSize: '12px', pb: 0.3, pl: 1.5 }}>1. Tap About phone.</Typography>
            <Typography sx={{ color: 'text.A100', fontSize: '12px', pl: 1.5 }}>2. Scroll down until you find "IMEI."</Typography>
          </Box>
        </Box>
      </DrawerComponent>
    </Box>
  );
};
