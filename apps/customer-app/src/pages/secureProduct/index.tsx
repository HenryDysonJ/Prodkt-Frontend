import {
  useAvailableAmcDetails,
  useAvailableInsuranceDetails,
  useAvailableWarrantyDetails,
  useSecureProduct,
  useUpdateProductService,
} from '@core/store';
import BajajFinserv from '@core/ui/assets/bajajFinserv.png';
import ExpiredLabel from '@core/ui/assets/expiredLabel.svg';
import ExpiringSoonLabel from '@core/ui/assets/expiringLabel.svg';
import PurchaseLabel from '@core/ui/assets/purchaseLabel.svg';
import { Button, CloseIcon } from '@core/ui/atoms';
import {
  EmptyBoxIcon,
  FileUploadIcon,
  GreenShieldIcon,
  GreenToolsBoxIcon,
  OrangePrizeIcon,
  SecureProductBannerIcon,
  UpDownIcon,
} from '@core/ui/atoms/icons/productSearchIconsLists';
import {
  AccordianCardLayout,
  AmcDrawerForm,
  DocumentUploadUiComponent,
  DrawerComponent,
  DropdownCard,
  ExtWarrantyDrawerForm,
  InsuranceDrawerForm,
  ModalHeader,
  SideImageCard,
  WarrantyDrawerForm,
} from '@core/ui/components';
import { Box, Container, Skeleton, Stack, Typography } from '@mui/material';
import { differenceInDays } from 'date-fns';
import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { track } from '@amplitude/analytics-browser';
import { secureProductStyle } from './style';

const options = [
  {
    value: 'months',
    label: 'Months',
  },
  {
    value: 'year',
    label: 'Year',
  },
];

export default function SecureProduct() {
  const [searchParams] = useSearchParams();
  const id: string = searchParams.get('id') || '';

  const [openDrawer, setOpenDrawer] = useState<boolean>(false);
  const [serviceType, setServiceType] = useState<string>('');

  // const navigate = useNavigate();
  const {
    nick_name,
    amc_details,
    insurance_details,
    standard_warranty_details,
    extended_warranty_details,
    secureProductLoading = false,
    getSecureProduct,
    clear,
    secureData,
  } = useSecureProduct();

  const {
    amc_details: service_amc_details,
    insurance_details: service_insurance_details,
    standard_warranty_details: service_standard_warranty_details,
    extended_warranty_details: service_extended_warranty_details,
    updateInsuranceService,
    updateAmcDetails,
    updateInsuranceDetails,
    updateWarrantyDetails,
    updateExtendedWarrantyDetails,
    updateAmcService,
    updateWarrantyService,
    updateExtWarrantyService,
  } = useUpdateProductService();
  const callSecureProductApi = () => {
    const timeout = 3500;
    setTimeout(() => {
      getSecureProduct(id);
    }, timeout);
  };

  const handleUpdateAmc = async () => {
    await updateAmcService(id)
    callSecureProductApi();
    setOpenDrawer(false);
  };

  const handleUpdateInsurance = async () => {
    await updateInsuranceService(id)
    callSecureProductApi();
    setOpenDrawer(false);

  };

  const handleUpdateWarranty = async () => {
    await updateWarrantyService(id)
    callSecureProductApi();
    setOpenDrawer(false);
  };

  const handleUpdateExtWarranty = async () => {
    await updateExtWarrantyService(id)
    callSecureProductApi();
    setOpenDrawer(false);
  };

  const { availableAmc, getAvailableAmcDetails } = useAvailableAmcDetails();
  const { availableInsurance, getAvailableInsuranceDetails } = useAvailableInsuranceDetails();
  const { availableWarranty, getAvailableWarrantyDetails } = useAvailableWarrantyDetails();

  useEffect(() => {
    clear();
    getSecureProduct(id);
    getAvailableAmcDetails(id);
    getAvailableWarrantyDetails(id);
    getAvailableInsuranceDetails(id);
  }, []);

  const goToHomePage = () => {
    window.location.replace('/');
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const getExpiredStatues = (validTo: string, expiryPeriod = 7): { status: boolean; days: number } => {
    const diffDays: number = differenceInDays(new Date(validTo), new Date());
    if (validTo) {
      return { status: diffDays <= expiryPeriod, days: diffDays };
    } else {
      return { status: true, days: diffDays };
    }
  };

  const getLabel = (
    validTo: string,
    type: string,
  ): { bg: React.ReactNode; svg: React.ReactNode; status: string; color: string } => {
    switch (type) {
      case 'AMC':
        {
          if (validTo) {
            const currentStatus = getExpiredStatues(validTo, 7);
            if (currentStatus?.days > 0) {
              return {
                status: currentStatus.status ? 'Expiring soon' : 'Under AMC',
                bg: currentStatus.status ? ExpiringSoonLabel : PurchaseLabel,
                svg: currentStatus.status ? (
                  <GreenToolsBoxIcon sx={{ color: '#FF980E' }} />
                ) : (
                  <GreenToolsBoxIcon sx={{ color: '#25C460' }} />
                ),
                color: currentStatus.status ? '#FF980E' : '#25C460',
              };
            } else {
              return {
                status: 'Expired',
                bg: ExpiredLabel,
                svg: <GreenToolsBoxIcon sx={{ color: '#F44F5A' }} />,
                color: '#F44F5A',
              };
            }
          }
          return {
            status: 'Purchase AMC',
            bg: PurchaseLabel,
            svg: <GreenToolsBoxIcon sx={{ color: '#25C460' }} />,
            color: '#25C460',
          };
        }
        break;
      case 'Insured':
        {
          if (validTo) {
            const currentStatus = getExpiredStatues(validTo, 7);
            if (currentStatus?.days > 0) {
              return {
                status: currentStatus.status ? 'Expiring soon' : 'Insured',
                bg: currentStatus.status ? ExpiringSoonLabel : PurchaseLabel,
                svg: currentStatus.status ? (
                  <GreenShieldIcon sx={{ color: '#FF980E' }} />
                ) : (
                  <GreenShieldIcon sx={{ color: '#25C460' }} />
                ),
                color: currentStatus.status ? '#FF980E' : '#25C460',
              };
            } else {
              return {
                status: 'Expired',
                bg: ExpiredLabel,
                svg: <GreenShieldIcon sx={{ color: '#F44F5A' }} />,
                color: '#F44F5A',
              };
            }
          }
          return {
            status: 'Purchase Insurance',
            bg: PurchaseLabel,
            svg: <GreenShieldIcon sx={{ color: '#25C460' }} />,
            color: '#25C460',
          };
        }
        break;
      case 'Warranty':
        {
          if (validTo) {
            const currentStatus = getExpiredStatues(validTo, 30);
            if (currentStatus?.days > 0) {
              return {
                status: currentStatus.status ? 'Expiring soon' : 'In Warranty',
                bg: currentStatus.status ? ExpiringSoonLabel : PurchaseLabel,
                svg: currentStatus.status ? (
                  <OrangePrizeIcon sx={{ color: '#FF980E' }} />
                ) : (
                  <OrangePrizeIcon sx={{ color: '#25C460' }} />
                ),
                color: currentStatus.status ? '#FF980E' : '#25C460',
              };
            } else {
              return {
                status: 'Expired',
                bg: ExpiredLabel,
                svg: <OrangePrizeIcon sx={{ color: '#F44F5A' }} />,
                color: '#F44F5A',
              };
            }
          }
          return {
            status: 'Purchase Warranty',
            bg: PurchaseLabel,
            svg: <OrangePrizeIcon sx={{ color: '#25C460' }} />,
            color: '#25C460',
          };
        }
        break;
      default:
        return {
          status: '',
          bg: <></>,
          svg: <></>,
          color: '#25C460',
        };
        break;
    }
  };

  const handleOpen = (type: string) => {
    setOpenDrawer(true);
    setServiceType(type);
  };

  // Amplitude tracking
  useEffect(() => {
    track('Secure product page', {
      name: 'customer-app',
    });
  }, []);

  return (
    <Container
      sx={{
        position: 'relative',
        maxWidth: { sm: '425px', xs: '425px', md: '425px' },
        padding: { sm: '0px', xs: '0px' },
      }}
    >
      <Box sx={secureProductStyle.rootSx}>
        <Box sx={secureProductStyle.bannerSectionSx}>
          <SecureProductBannerIcon />
          <Typography sx={secureProductStyle.titleSx}>
            Let&apos;s ensure <span>{nick_name}</span> is secured!
          </Typography>
        </Box>
        <Box sx={secureProductStyle.mainSx}>
          {secureProductLoading ? (
            [1, 2, 3]?.map((index: number) => (
              <Box key={index} p={1} sx={secureProductStyle.SkeletonSx}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                  <Skeleton animation="wave" height={25} width={188} />
                  <Skeleton animation="wave" height={25} width={88} />
                </Stack>
                <Stack direction={'row'} gap={'12px'}>
                  <Skeleton animation="wave" height={65} width={50} />
                  <Box mt={1.4}>
                    <Skeleton animation="wave" height={20} width={268} />
                    <Skeleton animation="wave" height={20} width={268} />
                  </Box>
                </Stack>
              </Box>
            ))
          ) : (
            <>
              {(Object.keys(secureData)?.includes('amc_details')) && (
                <Box sx={secureProductStyle.amcSx}>
                  <DropdownCard
                    productImage={BajajFinserv}
                    header="AMC"
                    labelData={getLabel(amc_details?.valid_to, 'AMC')}
                    noProductImage={<EmptyBoxIcon />}
                    noProductText="No AMC coverage for this product"
                    isSelect={amc_details ? true : false}
                    cardData={{
                      provider: amc_details?.amc_provider,
                      document_url: amc_details?.document_url,
                      serial_no: amc_details?.serial_no,
                      coverage: amc_details?.amc_coverage && `${amc_details?.amc_coverage} year`,
                      coverageType: '',
                      purchased_on: amc_details?.purchased_on,
                      valid_from: amc_details?.valid_from,
                      valid_to: amc_details?.valid_to,
                    }}
                    noBorder
                    component={
                      <>
                        {amc_details ? amc_details?.valid_to &&
                          getExpiredStatues(amc_details?.valid_to, 7)?.status &&
                          availableAmc?.length > 0 && (
                            <AccordianCardLayout
                              icon={<UpDownIcon />}
                              title="Explore AMC's"
                              component={
                                <SideImageCard
                                  data={availableAmc?.map(
                                    (data: { provider_logo?: string; provider_name?: string }) => {
                                      return {
                                        src: data?.provider_logo,
                                        title: data?.provider_name,
                                        subTitle: '',
                                        buttonText: 'Buy Now',
                                      };
                                    },
                                  )}
                                />
                              }
                            />
                          )
                          :
                          <AccordianCardLayout
                            icon={<UpDownIcon />}
                            title="Explore AMC's"
                            component={
                              <SideImageCard
                                data={availableAmc?.map(
                                  (data: { provider_logo?: string; provider_name?: string }) => {
                                    return {
                                      src: data?.provider_logo,
                                      title: data?.provider_name,
                                      subTitle: '',
                                      buttonText: 'Buy Now',
                                    };
                                  },
                                )}
                              />
                            }
                          />

                        }
                      </>
                    }
                    documentUpload={
                      <>
                        {
                          (!amc_details?.document_url ||
                            !amc_details?.amc_provider ||
                            !amc_details?.amc_coverage || !amc_details?.purchased_on) && (

                            <>
                              <DocumentUploadUiComponent
                                icon={<FileUploadIcon />}
                                text="Tap here to capture amc details"
                                handleClick={() => handleOpen('Amc')}
                              />
                              {serviceType === 'Amc' && (
                                <DrawerComponent
                                  heightStyle={secureProductStyle.drawerHeight}
                                  borderBottom
                                  showHeader={true}
                                  open={openDrawer}
                                  headerComponent={
                                    <ModalHeader
                                      icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                                      showIcon={true}
                                      showHeader={true}
                                      headerText="Update AMC Details"
                                      onClose={handleDrawerClose}
                                    />
                                  }
                                >
                                  <Box>
                                    <AmcDrawerForm
                                      stateValue={service_amc_details}
                                      updateValue={amc_details}
                                      handleChange={updateAmcDetails}
                                      handleClickNext={handleUpdateAmc}
                                      noPrevious
                                    />
                                  </Box>
                                </DrawerComponent>
                              )}
                            </>
                          )}
                      </>
                    }
                  />
                </Box>
              )}
              {(Object.keys(secureData)?.includes('insurance_details')) && (
                <Box sx={secureProductStyle.insuranceSx}>
                  <DropdownCard
                    header="Insurance"
                    labelData={getLabel(insurance_details?.valid_to, 'Insured')}
                    productImage={BajajFinserv}
                    isSelect={insurance_details ? true : false}
                    cardData={{
                      provider: insurance_details?.insurer_name,
                      document_url: insurance_details?.document_url as File,
                      serial_no: insurance_details?.policy_no,
                      coverage: insurance_details?.insurance_coverage,
                      coverageType: insurance_details?.coverage_type,
                      purchased_on: insurance_details?.purchased_on,
                      valid_from: insurance_details?.valid_from,
                      valid_to: insurance_details?.valid_to,
                    }}
                    noProductImage={<EmptyBoxIcon />}
                    noProductText="No Insurance coverage for this product"
                    component={
                      <>
                        {insurance_details ? (
                          insurance_details?.valid_to &&
                          getExpiredStatues(insurance_details?.valid_to, 7)?.status &&
                          availableInsurance?.length > 0 && (
                            <AccordianCardLayout
                              dataTestId="down1"
                              icon={<UpDownIcon />}
                              title="Explore Insurance"
                              component={
                                <SideImageCard
                                  data={availableInsurance?.map(
                                    (data: { provider_logo?: string; provider_name?: string }) => {
                                      return {
                                        src: data?.provider_logo,
                                        title: data?.provider_name,
                                        subTitle: '',
                                        buttonText: 'Buy Now',
                                      };
                                    },
                                  )}
                                />
                              }
                            />
                          )
                        ) : (
                          <AccordianCardLayout
                            dataTestId="down1"
                            icon={<UpDownIcon />}
                            title="Explore Insurance"
                            component={
                              <SideImageCard
                                data={availableInsurance?.map(
                                  (data: { provider_logo?: string; provider_name?: string }) => {
                                    return {
                                      src: data?.provider_logo,
                                      title: data?.provider_name,
                                      subTitle: '',
                                      buttonText: 'Buy Now',
                                    };
                                  },
                                )}
                              />
                            }
                          />
                        )}
                      </>
                    }
                    documentUpload={
                      <>
                        {(!insurance_details?.document_url || !insurance_details?.coverage_type || !insurance_details?.insurer_name) && (
                          <>
                            <DocumentUploadUiComponent
                              icon={<FileUploadIcon />}
                              text="Tap here to capture insurance details"
                              handleClick={() => handleOpen('Insurance')}
                            />
                            {serviceType === 'Insurance' && (
                              <DrawerComponent
                                heightStyle={secureProductStyle.drawerHeight}
                                borderBottom
                                showHeader={true}
                                open={openDrawer}
                                headerComponent={
                                  <ModalHeader
                                    icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                                    showIcon={true}
                                    showHeader={true}
                                    headerText="Update Insurance Details"
                                    onClose={handleDrawerClose}
                                  />
                                }
                              >
                                <Box>
                                  <InsuranceDrawerForm
                                    stateValue={service_insurance_details}
                                    updateValue={insurance_details}
                                    handleChange={updateInsuranceDetails}
                                    handleClickNext={handleUpdateInsurance}
                                    options={options}
                                    noPrevious
                                  />
                                </Box>
                              </DrawerComponent>
                            )}
                          </>
                        )}
                      </>
                    }
                  />
                </Box>
              )}
              <Box sx={secureProductStyle.warrantySx}>
                {standard_warranty_details !== null && (
                  <DropdownCard
                    header="Standard Warranty"
                    labelData={getLabel(standard_warranty_details?.valid_to, 'Warranty')}
                    productImage={BajajFinserv}
                    isSelect={standard_warranty_details !== null ? true : false}
                    cardData={{
                      provider: standard_warranty_details?.warranty_provider,
                      document_url: standard_warranty_details?.document_url,
                      serial_no: '',
                      coverage: standard_warranty_details?.warranty_coverage,
                      coverageType: standard_warranty_details?.coverage_type,
                      purchased_on: '',
                      valid_from: standard_warranty_details?.valid_from,
                      valid_to: standard_warranty_details?.valid_to,
                    }}
                    noProductImage={<EmptyBoxIcon />}
                    noProductText="No Standard Warranty coverage for this product"
                    component={
                      <>
                        {
                          extended_warranty_details === null && (
                            <AccordianCardLayout
                              dataTestId="down2"
                              icon={<UpDownIcon />}
                              title="Explore Extended Warranty"
                              component={
                                <SideImageCard
                                  data={availableWarranty?.map(
                                    (data: { provider_logo?: string; provider_name?: string }) => {
                                      return {
                                        src: data?.provider_logo,
                                        title: data?.provider_name,
                                        subTitle: '',
                                        buttonText: 'Buy Now',
                                      };
                                    },
                                  )}
                                />
                              }
                            />
                          )

                          // :(standard_warranty_details?.valid_to && (getExpiredStatues(standard_warranty_details?.valid_to, 30)?.status &&
                          //   availableWarranty?.length > 0 && (
                          //     <AccordianCardLayout
                          //       dataTestId="down2"
                          //       icon={<UpDownIcon />}
                          //       title="Explore Extended Warranty"
                          //       component={
                          //         <SideImageCard
                          //           data={availableWarranty?.map(
                          //             (data: { provider_logo?: string; provider_name?: string }) => {
                          //               return {
                          //                 src: data?.provider_logo,
                          //                 title: data?.provider_name,
                          //                 subTitle: '',
                          //                 buttonText: 'Buy Now',
                          //               };
                          //             },
                          //           )}
                          //         />
                          //       }
                          //     />
                          //   ))
                          // )
                        }
                      </>
                    }
                    documentUpload={
                      <>
                        {(!standard_warranty_details?.document_url ||
                          !standard_warranty_details?.coverage_type ||
                          !standard_warranty_details?.warranty_coverage ||
                          !standard_warranty_details?.warranty_provider) && (
                            <>
                              <DocumentUploadUiComponent
                                icon={<FileUploadIcon />}
                                text="Tap here to capture warranty details"
                                handleClick={() => handleOpen('Warranty')}
                              />
                              {serviceType === 'Warranty' && (
                                <DrawerComponent
                                  heightStyle={secureProductStyle.drawerHeight}
                                  borderBottom
                                  showHeader={true}
                                  open={openDrawer}
                                  headerComponent={
                                    <ModalHeader
                                      icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                                      showIcon={true}
                                      showHeader={true}
                                      headerText="Update Warranty Details"
                                      onClose={handleDrawerClose}
                                    />
                                  }
                                >
                                  <Box>
                                    <WarrantyDrawerForm
                                      stateValue={service_standard_warranty_details}
                                      updateValue={standard_warranty_details}
                                      handleChange={updateWarrantyDetails}
                                      handleClickNext={handleUpdateWarranty}
                                      options={options}
                                      noPrevious
                                    />
                                  </Box>
                                </DrawerComponent>
                              )}
                            </>
                          )}
                      </>
                    }
                  />
                )}
                {extended_warranty_details !== null && (
                  <>
                    <Box height={'16px'} />
                    <DropdownCard
                      header="Extended Warranty"
                      labelData={getLabel(extended_warranty_details?.valid_to, 'Warranty')}
                      productImage={BajajFinserv}
                      isSelect={extended_warranty_details !== null ? true : false}
                      cardData={{
                        provider: extended_warranty_details?.warranty_provider,
                        document_url: extended_warranty_details?.document_url,
                        serial_no: '',
                        coverage: extended_warranty_details?.warranty_coverage,
                        coverageType: extended_warranty_details?.coverage_type,
                        purchased_on: '',
                        valid_from: extended_warranty_details?.valid_from,
                        valid_to: extended_warranty_details?.valid_to,
                      }}
                      noProductImage={<EmptyBoxIcon />}
                      noProductText="No Extended Warranty coverage for this product"
                      documentUpload={
                        <>
                          {(!extended_warranty_details?.document_url ||
                            !extended_warranty_details?.warranty_provider ||
                            !extended_warranty_details?.coverage_type ||
                            !extended_warranty_details?.warranty_coverage) && (
                              <>
                                <DocumentUploadUiComponent
                                  icon={<FileUploadIcon />}
                                  text="Tap here to capture extended warranty details"
                                  handleClick={() => handleOpen('Extended Warranty')}
                                />
                                {serviceType === 'Extended Warranty' && (
                                  <DrawerComponent
                                    heightStyle={secureProductStyle.drawerHeight}
                                    borderBottom
                                    showHeader={true}
                                    open={openDrawer}
                                    headerComponent={
                                      <ModalHeader
                                        icon={<CloseIcon rootStyle={{ color: 'text.A100' }} />}
                                        showIcon={true}
                                        showHeader={true}
                                        headerText="Update Extended Warranty Details"
                                        onClose={handleDrawerClose}
                                      />
                                    }
                                  >
                                    <Box>
                                      <ExtWarrantyDrawerForm
                                        stateValue={service_extended_warranty_details}
                                        updateValue={extended_warranty_details}
                                        handleChange={updateExtendedWarrantyDetails}
                                        handleClickNext={handleUpdateExtWarranty}
                                        options={options}
                                        noPrevious
                                      />
                                    </Box>
                                  </DrawerComponent>
                                )}
                              </>
                            )}
                        </>
                      }
                    />
                  </>
                )}
              </Box>
            </>
          )}
        </Box>
      </Box>
      <Box sx={secureProductStyle.footerButtonSx}>
        <Button data-testid="homePage" sx={secureProductStyle.homeSx} fullWidth onClick={() => goToHomePage()}>
          Go to Home Page
        </Button>
      </Box>
    </Container>
  );
}
