import { useServiceProviders, useUserProfileDetails } from "@core/store";
import { BackCircleIcon, NoProductsIllustration, PageHeader } from "@core/ui/atoms";
import { SeeWorkingHoursComponent, ServiceProviderCard } from "@core/ui/components";
import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { PreferredServiceStyle } from "./style";
import { track } from '@amplitude/analytics-browser';

export default function PreferredServiceProvider() {

    const [searchParams] = useSearchParams();
    const {
        getProductDetails,
        productDetailsLoading,
        productDetails,
        serviceProvidersListLoading,
        filterServiceProvidersList,
        openWorkingHoursDrawer,
        updateDrawerState,
        removePreferableService,
        getServiceProvidersList,
    } = useServiceProviders();

    const { getProfileDetails, } = useUserProfileDetails();

    const updateRemovePreferableDrawer = (index: number) => {
        removePreferableService(index, () => {
            getServiceProvidersList();
        })
    }
    const goToDialPad = (number: number | null) => {
        window.open(`tel:${number}`);
    };

    useEffect(() => {
        getProductDetails(searchParams.get('id') ?? '');
        getProfileDetails();

    }, []);


    // Amplitude tracking
    useEffect(() => {
        track('Preferred service provider page', {
            name: 'customer-app',
        });
    }, []);

    return (
        <Box>
            <Box bgcolor="primary.900" height={'100vh'}>
                <Box pt={2} px={2.5} height={'100vh'}>
                    <PageHeader
                        showIcon
                        icon={<BackCircleIcon rootStyle={{ color: 'text.A100' }} />}
                        header
                        headerText="Preferred Service Provider"
                    />
                    {productDetails?.product_info?.is_preferred_service_provider && <Typography variant="subtitle1" fontWeight={700} sx={{ color: '#010811', mt: '30px', fontSize: '14px' }}>{`Preferred Service Providers (${filterServiceProvidersList?.length})`}</Typography>}

                    <Box sx={{
                        height: "calc(100vh - 111px)",
                        overflow: 'overlay'
                    }}>
                        {productDetails?.product_info?.is_preferred_service_provider &&
                            <>

                                {serviceProvidersListLoading || productDetailsLoading
                                    ? [1, 2, 3].map(() => (
                                        <ServiceProviderCard
                                            loading={true}
                                            openBenefits={() => false}
                                            openBookService={() => false}
                                            goToDialPad={() => false}
                                        />
                                    ))
                                    : filterServiceProvidersList?.length > 0 &&
                                    filterServiceProvidersList?.map((service, index) => (
                                        <ServiceProviderCard
                                            key={index}
                                            index={index}
                                            showBookMarkIcon={true}
                                            loading={serviceProvidersListLoading || productDetailsLoading}
                                            goToDialPad={goToDialPad}
                                            updateRemovePreferableDrawer={updateRemovePreferableDrawer}
                                            workingHorusUpdate={() => updateDrawerState('openWorkingHoursDrawer', true)}
                                            cardData={service}
                                            sx={{
                                                '&:last-child': {
                                                    marginBottom: '24px'
                                                }
                                            }}
                                        />
                                    ))}
                            </>
                        }


                        {!serviceProvidersListLoading && !productDetailsLoading && !productDetails?.product_info?.is_preferred_service_provider && (
                            <Box sx={PreferredServiceStyle.noProductContainer}>
                                <Box sx={PreferredServiceStyle.noProductsAddedSx}>
                                    <NoProductsIllustration />
                                </Box>
                                <Box sx={PreferredServiceStyle.noProductsTextHeaderSx}>
                                    <Typography variant="body1" sx={PreferredServiceStyle.noProductsTextSx}>
                                        No Preferred Service Provider
                                    </Typography>
                                    <Typography variant="body1" sx={PreferredServiceStyle.noAddProductsTextSx}>
                                        No Preferred Service Provider available in selected location
                                    </Typography>
                                </Box>
                            </Box>
                        )}
                    </Box>


                </Box>
            </Box>
            {/* see working hours */}
            {openWorkingHoursDrawer &&
                <SeeWorkingHoursComponent
                    openWorkingHoursDrawer={openWorkingHoursDrawer}
                    handleCloseDrawer={() => updateDrawerState('openWorkingHoursDrawer', false)}
                />
            }
        </Box>
    );
}
