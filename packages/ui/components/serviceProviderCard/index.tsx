import { AlarmClockIcon, ClockIcon } from '@atoms/icons';
import { PhoneIcon } from '@atoms/icons/productIcons';
import { ColorStarIcon, StarIcon } from '@atoms/icons/searchProductIcon';
import { Box, Divider, IconButton, Skeleton, Stack, SxProps, Theme, Typography } from '@mui/material';
import Rating from '@mui/material/Rating';

import { ActiveBookMark, InActiveBookMark, RemovePreferableIcon, ViewDirectionIcon, WhatAppIcon } from '@atoms/icons/preferService';
import { useServiceProviders } from '@core/store';
import moment from 'moment';
import { ScheduleServiceMaintenance } from '..';
import { serviceProviderCardStyle } from './style';
import { useState } from 'react';
import { Button } from '@atoms/button';
// import { ServiceProvidersListProps } from '@core/store/interface';


interface ServiceProvidersListProps {
  id?: string;
  provider_name?: string;
  provider_logo?: string;
  opening_hours?: any;
  google_ref_id?: string;
  provider_id?: string;
  location_name?: string;
  is_bookmark?: boolean;
  working_weekday?: any;
  is_primary?: boolean;
  location_coordinate?: {
    lat: number | null,
    lng: number | null,
  };
  mobile_no?: number | null;
  store_start_date?: string;
  inspection_charge?: number;
  benefits?: Array<string>;
  type_id?: string;
  starts_from?: string;
  working_hours?: string;
  is_book_service?: boolean;
  is_active_amc?: boolean;
  user_ratings_total?: any;
  rating?: any;


}

type cardData = {
  id?: string;
  provider_name?: string;
  opening_hours?: any;
  provider_logo?: string;
  is_bookmark?: boolean;
  is_primary?: boolean;
  location_name?: string;
  location_coordinate?: {
    lat: number | string,
    lng: number | string,
  };
  mobile_no?: number | string | null;
  working_weekday?: any;
  store_start_date?: string;
  inspection_charge?: number;
  benefits?: Array<string>;
  type_id?: string;
  starts_from?: string;
  working_hours?: string;
  is_book_service?: boolean;
  is_active_amc?: boolean;
  user_ratings_total?: any;
  rating?: any;
};
export interface ServiceProviderCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  openBenefits?: (status: boolean, data?: ServiceProvidersListProps) => void;
  openBookService?: () => void;
  workingHorusUpdate?: () => void;
  goToDialPad?: (status: number | null) => void;
  editServiceProvider?: () => void;
  updateRemovePreferableDrawer?: (index: number) => void;
  loading?: boolean;
  showBookMarkIcon?: boolean;
  cardData?: ServiceProvidersListProps;
  index?: number;
  isEditShown?: boolean;
  markAsPrimary?: boolean;
  markAsPrimaryClick?: () => void;
}

export const ServiceProviderCard = (props: ServiceProviderCardProps): JSX.Element => {
  const {
    className = '',
    sx = {},
    loading = true,
    showBookMarkIcon = false,
    cardData,
    goToDialPad = () => false,
    editServiceProvider = () => false,
    markAsPrimaryClick = () => false,
    isEditShown = false,
    markAsPrimary = false,
    // openBenefits,
    openBookService,
    workingHorusUpdate = () => false,
    updateRemovePreferableDrawer = () => false,
    index = 0,
    ...rest
  } = props;

  const { checkUnCheckBookmark, editMarkAsPrimary, serviceProvidersList, updateDrawerState } = useServiceProviders()
  const [open, setOpen] = useState(false)
  const [openMarkAsPrimary, setOpenMarkAsPrimary] = useState(false)

  const openRemovePreferableDrawer = () => {
    setOpen(true)
    updateDrawerState('removePreferableDrawer', true)
  }

  
  const openEditPrimary = () => {
    setOpenMarkAsPrimary(true)
  }

  const updateRemovePreferableDrawerLocal = (index: number) => {
    updateRemovePreferableDrawer(index)
    setOpen(false)
  }

  const updateMarksasPrimaryFunc = (index: number) => {
    editMarkAsPrimary(index)
    setOpenMarkAsPrimary(false)
  }

  const openWhatsApp = (number: number | null) => {
    const whatsappURL = `https://wa.me/${number}`;
    window.open(whatsappURL, '_blank');
  }

  const openingHours = cardData?.working_weekday;

  const day = moment().get('day') - 1;

  const time: any = openingHours?.[day] ? openingHours?.[day].split(': ')[1].split(' – ') : ['- Nil', '- Nil'];
  const opensAt = 'Open: ' + time[0];

  const closesAt = 'Close: ' + time[1];


const checkPrimary = serviceProvidersList.filter((val) => val.is_primary).length > 0

  return (
    <>
      <Box
        sx={[{ ...serviceProviderCardStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
        className={`${className}`}
        {...rest}
      >
        {loading ? (
          <Box sx={serviceProviderCardStyle.skeletonContainer}>
            <Box sx={serviceProviderCardStyle.skeltonRoot}>
              <Skeleton sx={serviceProviderCardStyle.skeltonText} animation="wave" height={80} width={64} />
              <Box flexGrow={1}>
                <Skeleton sx={serviceProviderCardStyle.skeltonText} animation="wave" height={20} width={228} />
                <Skeleton sx={serviceProviderCardStyle.skeltonText} animation="wave" height={18} width={167} />
                <Skeleton sx={serviceProviderCardStyle.skeltonText} animation="wave" height={18} width={117} />
              </Box>
            </Box>
            <Stack direction={'row'} gap={'8px'} alignItems={'center'}>
              <Box flexGrow={1}>
                <Skeleton sx={serviceProviderCardStyle.skeltonText} animation="wave" height={18} width={167} />
                <Skeleton sx={serviceProviderCardStyle.skeltonText} animation="wave" height={18} width={117} />
              </Box>
              <Skeleton sx={serviceProviderCardStyle.skeltonText} animation="wave" height={40} width={64} />
            </Stack>
          </Box>
        ) : (
          <>
            {/* its not a primary service provider */}
            {
              !cardData?.is_primary &&
              <Box
                sx={{
                  ...serviceProviderCardStyle.serviceCard,
                  borderColor: 'primary.500',
                }}
              >
                <Stack direction="column" gap="14px" divider={<Divider sx={serviceProviderCardStyle.cardDivider} />}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Stack direction="row" gap="12px" alignItems="center" width={'100%'}>
                      {/* <Avatar src={cardData?.provider_logo} sx={serviceProviderCardStyle.serviceProviderIcon}>
                    <ServiceProviderIcon />
                  </Avatar> */}
                      <Box sx={serviceProviderCardStyle.detailsContainer}>
                        {/* <Typography sx={serviceProviderCardStyle.serviceName}>{cardData?.provider_name}</Typography> */}
                        {/* <Typography sx={serviceProviderCardStyle.rate2}>{'Starts from ₹' + cardData?.starts_from}</Typography>
                  <Typography
                    sx={serviceProviderCardStyle.benefits}
                    data-testid={'benefits' + index}
                    onClick={() => openBenefits(true, cardData || {})}
                  >
                    {(cardData?.benefits ? cardData?.benefits?.length : 0) + ' Benefits'}
                  </Typography> */}
                        <Stack direction="row" gap="10px" alignItems={'flex-start'} justifyContent={'space-between'}>
                          <Typography variant='subtitle1' sx={serviceProviderCardStyle.serviceName}>{cardData?.provider_name}</Typography>
                          {showBookMarkIcon && !cardData?.is_primary &&
                            <IconButton data-testid='preferred' onClick={() => serviceProvidersList[index]?.is_bookmark ? openRemovePreferableDrawer() : checkUnCheckBookmark(index)}>
                              {cardData?.is_bookmark ?
                                <ActiveBookMark sx={{ cursor: 'pointer', width: 24, height: 24 }} /> :
                                <InActiveBookMark sx={{ cursor: 'pointer', width: 24, height: 24 }} />
                              }
                            </IconButton>
                          }
                        </Stack>
                        <Box sx={serviceProviderCardStyle.serviceDetails}>
                          <Stack direction="row" gap="4px" pb={1.4}>
                            {/* <LocationIcon sx={serviceProviderCardStyle.locationIcon} /> */}
                            {/* <Typography sx={serviceProviderCardStyle.rate}>{cardData?.location_name}</Typography> */}
                            <Typography sx={serviceProviderCardStyle.rate}>{cardData?.location_name}</Typography>
                          </Stack>


                          {
                            cardData?.location_coordinate === null ? '' :
                              <Stack direction="row" gap="4px" justifyContent={'space-between'}>
                                <Stack direction="row" gap="4px" alignItems="center">
                                  {/* <ClockIcon
                                    rootStyle={{ width: '16px', height: '16px', bgcolor: 'text.B300', transform: 'translateY(2px)' }}
                                  /> */}
                                  <AlarmClockIcon rootStyle={{ color: 'text.A100' }} />
                                  <Typography sx={serviceProviderCardStyle.rate}>{opensAt}</Typography>
                                  {opensAt === 'Open: Open 24 hours' ? (
                                    <Typography></Typography>
                                  ) : (
                                    <Stack direction="row" gap="5px" alignItems={'center'}>
                                      <Box sx={{ backgroundColor: '#CCCCCC', width: '4px', height: '4px', borderRadius: '50px' }}>
                                      </Box><Typography sx={serviceProviderCardStyle.rate}>{closesAt}</Typography>
                                    </Stack>
                                  )}
                                </Stack>
                                <Typography data-testid='See working hours' onClick={workingHorusUpdate} sx={{
                                  textDecoration: 'underline',
                                  fontSize: '12px',
                                  color: '#0E70EB',
                                  cursor: 'pointer'
                                }}>See working hours</Typography>
                              </Stack>
                          }
                        </Box>
                        {/* <Stack mt={1} flexDirection="row" alignItems="center" gap="6px">
                      {cardData?.rating && 
                        <>
                          <Typography sx={serviceProviderCardStyle.ratings}>{cardData?.rating}</Typography>
                          <Stack sx={serviceProviderCardStyle.starRating} spacing={1}>
                            <Rating
                              icon={<ColorStarIcon />}
                              emptyIcon={<StarIcon />}
                              name="half-rating-read"
                              value={cardData?.rating}
                              precision={0.5}
                              readOnly
                            />
                          </Stack>
                          <Typography sx={serviceProviderCardStyle.totalPoints}>
                            ({cardData?.user_ratings_total})
                          </Typography>
                        </>
                      }
                      </Stack> */}

                      </Box>
                    </Stack>
                    {/* {heart ?
                  (<IconButton disableRipple onClick={() => handleClick('Enable')} sx={{ padding: '0px' }}>
                    <ColorHeartIcon sx={{ color: "#f95757" }} />
                  </IconButton>)
                  :
                  (<IconButton disableRipple onClick={() => handleClick('Disable')} sx={{ padding: '0px' }}>
                    <HeartIcon />
                  </IconButton>)
                } */}
                  </Stack>
                  <Stack direction="row" alignItems="center" justifyContent="space-between">


                    <Stack flexDirection="row" alignItems="center" gap="6px">
                      {cardData?.rating && 
                        <>
                          <Typography sx={serviceProviderCardStyle.ratings}>{cardData?.rating}</Typography>
                          <Stack sx={serviceProviderCardStyle.starRating} spacing={1}>
                            <Rating
                              icon={<ColorStarIcon />}
                              emptyIcon={<StarIcon />}
                              name="half-rating-read"
                              value={cardData?.rating}
                              precision={0.5}
                              readOnly
                            />
                          </Stack>
                          <Typography sx={serviceProviderCardStyle.totalPoints}>
                            ({cardData?.user_ratings_total})
                          </Typography>
                        </>
                      }

                      {!cardData?.rating && markAsPrimary && 
                        <Box onClick={openEditPrimary}>
                          < Typography sx={{ cursor: 'pointer', color: 'primary.main', textDecoration: 'underline', fontSize: '14px', fontWeight: '600' }}>
                            Mark as primary
                          </Typography>
                        </Box>
                      }
                    </Stack>

                    {/* <Box sx={serviceProviderCardStyle.serviceDetails}>
                  <Stack direction="row" gap="4px" pb={1.4}>
                    <LocationIcon sx={serviceProviderCardStyle.locationIcon} /> */}
                    {/* <Typography sx={serviceProviderCardStyle.rate}>{cardData?.location_name}</Typography> */}
                    {/* <Typography sx={serviceProviderCardStyle.rate}>{cardData?.location_name}</Typography>
                  </Stack>
                  <Stack direction="row" gap="4px">
                    <ClockIcon
                      rootStyle={{ width: '16px', height: '16px', color: 'text.500', transform: 'translateY(2px)' }}
                    />
                    <Typography sx={serviceProviderCardStyle.rate}>{opensAt}</Typography>
                    {opensAt === 'Open: Open 24 hours' ? (
                      <Typography></Typography>
                    ) : (
                      <Typography sx={serviceProviderCardStyle.rate}>{closesAt}</Typography>
                    )}
                  </Stack>
                </Box> */}
                    <Box sx={serviceProviderCardStyle.contacts}>
                      <Stack direction="row" gap="12px" alignItems="center">
                        {/* {cardData?.mobile_no && ( */}
                        <Box data-testid='whatsapp' onClick={() => openWhatsApp(cardData?.mobile_no || null)} sx={serviceProviderCardStyle.whatsAppSx}>
                          <WhatAppIcon />
                        </Box>

                        {!cardData?.is_primary && cardData?.location_coordinate === null ? '' :
                          <a
                            onClick={openBookService}
                          >
                            <Box
                              sx={serviceProviderCardStyle.dialBtn}
                              data-testid={'bookServiceDrawer' + index}
                            >
                              <ViewDirectionIcon onClick={() => window.open(`http://maps.google.co.in/maps?q=${cardData?.location_coordinate?.lat},${cardData?.location_coordinate?.lng}`)} />
                            </Box>
                          </a>
                        }
                        {cardData?.mobile_no &&
                        <Box
                          sx={serviceProviderCardStyle.dialBtn}
                          data-testid={'call' + index}
                          onClick={() => goToDialPad(cardData?.mobile_no || null)}
                        >
                          <PhoneIcon />
                        </Box>
                        }

                        {/* <a
                      href={`http://maps.google.co.in/maps?q=${cardData?.location_coordinate?.lat},${cardData?.location_coordinate?.lng}`}
                      onClick={() => openBookService()}
                    >
                      <Button sx={serviceProviderCardStyle.bookNowBtn} >
                        View Directions
                      </Button>
                    </a> */}
                      </Stack>
                    </Box>
                  </Stack>
                </Stack>
              </Box>
            }

            {/* primary Serivce provider Only */}
            {
              cardData?.is_primary &&
              <>
                <Box sx={serviceProviderCardStyle.amcContainer}>
                  <Typography variant={'h2'} sx={serviceProviderCardStyle.amcText}>
                    Primary Service Provider
                  </Typography>
                </Box>
                <Box sx={{
                  ...serviceProviderCardStyle.serviceCard,
                  borderColor: cardData?.is_primary ? 'primary.main' : 'primary.500',
                }}>
                  <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
                    <Box sx={{ display: 'grid', gap: '4px' }}>
                      <Typography sx={serviceProviderCardStyle.serviceName}>
                        {cardData?.provider_name}
                      </Typography>
                      <Typography sx={serviceProviderCardStyle.rate}>
                        {cardData?.location_name}
                      </Typography>
                    </Box>
                    <Box sx={serviceProviderCardStyle.contacts}>
                      <Stack direction="row" gap="12px" alignItems="center">
                        {/* {cardData?.mobile_no && ( */}
                        <Box data-testid='whatsapp' onClick={() => openWhatsApp(cardData?.mobile_no || null)} sx={serviceProviderCardStyle.whatsAppSx}>
                          <WhatAppIcon />
                        </Box>

                        {cardData?.location_coordinate === null ? '' :
                          <a
                            href={`http://maps.google.co.in/maps?q=${cardData?.location_coordinate?.lat},${cardData?.location_coordinate?.lng}`}
                            onClick={openBookService}
                          >
                            <Box
                              sx={serviceProviderCardStyle.dialBtn}
                              data-testid={'bookServiceDrawer' + index}
                            >
                              <ViewDirectionIcon />
                            </Box>
                          </a>
                        }
                        <Box
                          sx={serviceProviderCardStyle.dialBtn}
                          data-testid={'call' + index}
                          onClick={() => goToDialPad(cardData?.mobile_no || null)}
                        >
                          <PhoneIcon />
                        </Box>
                        {isEditShown &&
                          <>
                            <Button
                              data-testId='Edit'
                              sx={{
                                borderRadius: '8px',
                                py: 0.5,
                                px: 0.3,
                                textTransform: 'capitalize',
                                boxShadow: 'none',
                                '&:hover': {
                                  boxShadow: 'none'
                                }
                              }}
                              onClick={editServiceProvider}
                            >
                              Edit
                            </Button>
                          </>
                        }

                        {/* <a
                      href={`http://maps.google.co.in/maps?q=${cardData?.location_coordinate?.lat},${cardData?.location_coordinate?.lng}`}
                      onClick={() => openBookService()}
                    >
                      <Button sx={serviceProviderCardStyle.bookNowBtn} >
                        View Directions
                      </Button>
                    </a> */}
                      </Stack>
                    </Box>
                  </Box>
                </Box>
              </>
            }
          </>

        )}


      </Box >
      {open &&
        <ScheduleServiceMaintenance
          drawerTitle={'Remove from preferable?'}
          leftButtonName={'No, cancel'}
          showDrawerSubtitle={true}
          showBottomText={false}
          drawerSubtitle={`Are you sure want to remove "${serviceProvidersList[index]?.provider_name}" from preferable service provider`}
          rightButtonName={'Yes, Remove'}
          handleClickPrevious={() => setOpen(false)}
          handleClickNext={() => updateRemovePreferableDrawerLocal(index)}
          openDrawerServiceReminder={open}
          icon={<RemovePreferableIcon />}

        />
      }

      {openMarkAsPrimary &&
        <ScheduleServiceMaintenance
          drawerTitle={checkPrimary ? 'Change Primary Service Provider?' : 'Add Primary Service Provider?'}
          leftButtonName={'No, cancel'}
          showDrawerSubtitle={true}
          showBottomText={false}
          drawerSubtitle={checkPrimary ? `Are you sure want to change "${serviceProvidersList[index]?.provider_name}" from preferable service provider` : `Are you sure want to add "${serviceProvidersList[index]?.provider_name}" from preferable service provider`}
          rightButtonName={'Yes, Confirm'}
          handleClickPrevious={() => setOpenMarkAsPrimary(false)}
          handleClickNext={() => updateMarksasPrimaryFunc(index)}
          openDrawerServiceReminder={openMarkAsPrimary}
          icon={<RemovePreferableIcon />}

        />
      }
    </>
  );
};
