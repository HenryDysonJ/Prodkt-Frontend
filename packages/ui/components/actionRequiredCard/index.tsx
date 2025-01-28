import AvailableBackground from '@assets/availableBackground.svg';
import InsuranceBackground from '@assets/InsuranceBackground.svg';
import WarrantyBackground from '@assets/warrantyBackground.svg';
import { AvailableShield, FridgeIcon, InsuranceShield, WarrantyShield } from '@atoms/icons';
import { useHome } from '@core/store';
import { Box, Card, Skeleton, SxProps, Theme, Typography } from '@mui/material';
import { useEffect } from 'react';

import { actionRequiredCardStyle } from './style';
import { chooseProductData } from '@core/store/interface';
import { AlertIconService, TimerIcon } from '@atoms/icons/serviceReminderIcon';
import moment from 'moment';
import { theme } from '@core/theme';

interface iconProps {
  dark_theme: string;
  light_theme: any;
}
interface expiringInterface {
  nick_name: string;
  warranty_valid_to: string | boolean | undefined;
  image_url: string;
  product_name: string;
  amc_valid_to: string | boolean | undefined;
  insurance_valid_to: string | boolean | undefined;
  is_extended: boolean;
  category_type_id: string;
  user_product_id: string;
  icon: iconProps;
}
export interface ActionRequired {
  amc_valid_to: boolean;
  warranty_valid_to: boolean;
  insurance_valid_to: boolean;
  id?: number;
  src: string;
  claimWarrantyExpireInsuShield?: JSX.Element;
  text: string;
  icon: {
    dark_theme: string;
    light_theme: string;
  }
  productText: string;
  productSubText: string;
  bottomText: string;
  image_url: string;
  product_name: string;
  user_product_id: string;
  nick_name: string;
  remainder_date?: string;
  expiring: any;
  expired: any;
  available: any;
  service_schedule?: any;
  service_remainder?: any;
  service_completed?: any;
}

export interface ActionRequiredCardProps {
  src?: string;
  cardStyle?: object;
  rootStyle?: object;
  className?: string;
  // handleUploadExternalDocWarranty: (val: chooseProductData) => void;
  // handleUploadExternalDocAmc: (val: chooseProductData) => void;
  // handleUploadExternalDocInsurance: (val: chooseProductData) => void;
  handleServiceUpdate: (val: any) => void;
  handleUpdate: (val: any) => void;
  handleScheduleUpdate: (val: any) => void;
  handleServiceNotComplete: (val: any) => void;
  goToScheduleService: (val: any) => void;
  id?: string;
  sx?: SxProps<Theme>;
  skelton?: boolean;
}

export const ActionRequiredCard = (props: ActionRequiredCardProps): JSX.Element => {
  const { skelton = false, id = '', goToScheduleService=() => false, handleServiceNotComplete=() => false, handleServiceUpdate=() => false, handleScheduleUpdate=() => false, handleUpdate = () => false,
  // handleUploadExternalDocWarranty = () => false, handleUploadExternalDocAmc = () => false, handleUploadExternalDocInsurance = () => false,
  cardStyle = {}, rootStyle = {}, className = '', sx = {}, ...rest } = props;

  const { actionRequiredState, getDisplayActionRequired, handleUpdateState, actionRequired } = useHome();


  useEffect(() => {
    getDisplayActionRequired(id);
  }, []);

  useEffect(() => {
    const cardData: any = [];
    Object?.entries(actionRequiredState)?.map((v) => {
      return v?.[1]?.length > 0 ? [
        ...v?.[1]?.map((c: any) => {
          return cardData.push({ ...c, [v[0]]: true });
        }),
      ] : [];
    });

    handleUpdateState(cardData);
  }, [actionRequiredState, handleUpdateState]);

  return (
    <Box
      sx={[
        {
          ...actionRequiredCardStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      {skelton ? (
        <Box
          sx={{
            display: 'flex',
            gap: 2,
            px: 3,
          }}
        >
          <Box
            sx={{
              border: '1px solid',
              borderColor: 'grey.100',
              backgroundColor: 'primary.800',
              width: '180px',
              height: '150px',
              p: 2,
              borderRadius: '8px',
            }}
          >
            <Box>
              <Skeleton sx={{ width: '80px', height: '10px', bgcolor: 'primary.200', mt: 1, p: 1 }} variant="rounded" />
              <Skeleton sx={{ width: '30px', height: '30px', bgcolor: 'primary.200', mt: 1, p: 1 }} variant="rounded" />
              <Skeleton sx={{ width: '80px', height: '10px', bgcolor: 'primary.200', mt: 1, p: 1 }} variant="rounded" />
              <Skeleton
                sx={{ width: '150px', height: '10px', bgcolor: 'primary.200', mt: 1, p: 1 }}
                variant="rounded"
              />
            </Box>
          </Box>
          <Box
            sx={{
              border: '1px solid',
              borderColor: 'grey.100',
              backgroundColor: 'primary.800',
              width: '180px',
              height: '150px',
              p: 2,
              borderRadius: '8px',
            }}
          >
            <Box>
              <Skeleton sx={{ width: '80px', height: '10px', bgcolor: 'primary.200', mt: 1, p: 1 }} variant="rounded" />
              <Skeleton sx={{ width: '30px', height: '30px', bgcolor: 'primary.200', mt: 1, p: 1 }} variant="rounded" />
              <Skeleton sx={{ width: '80px', height: '10px', bgcolor: 'primary.200', mt: 1, p: 1 }} variant="rounded" />
              <Skeleton
                sx={{ width: '150px', height: '10px', bgcolor: 'primary.200', mt: 1, p: 1 }}
                variant="rounded"
              />
            </Box>
          </Box>
        </Box>
      ) : (
        <Box sx={{ ...actionRequiredCardStyle.rootSubSx, ...rootStyle }}>
          {actionRequired.map((val: ActionRequired, index: number) => {
            return (
              <Card data-testid={`card-${index}`} key={index} sx={{ ...actionRequiredCardStyle.cardSx, ...cardStyle }}>
                <Box sx={{ minHeight: '132px' }}>
                  <Box
                    sx={{
                      ...actionRequiredCardStyle.backgroundImageSx,
                      // backgroundImage: `url(${val?.expired ? InsuranceBackground : WarrantyBackground})`,
                      background: (theme) => val?.expired ? theme.palette.background.surface?.gradient : theme.palette.background.surface?.mainGradient
                    }}
                  >
                    <Typography
                      sx={
                        val?.expired
                          ? actionRequiredCardStyle.expiredTextSx
                          :
                          // val?.available
                          //   ? actionRequiredCardStyle.successTextSx
                          //   :
                          actionRequiredCardStyle.expWarnInsTextSx
                      }
                    >
                      {/* Available */}
                      {/* {val?.available === true && val?.warranty_valid_to === null ? (
                        <>
                          <AvailableShield />
                          Ext-Warranty Available
                        </>
                      ) : val?.available === true && val?.insurance_valid_to === null ? (
                        <>
                          <AvailableShield />
                          Insurance Available
                        </>
                      ) : val?.available === true && val?.amc_valid_to === null ? (
                        <>
                          <AvailableShield />
                          AMC Available
                        </>
                      ) : null} */}

                      {/* Expired */}

                      {val?.expired === true && val?.warranty_valid_to ? (
                        <>
                          <InsuranceShield rootStyle={{color: val?.expired ? '#ff980e' : '#F45560'}} />
                          Ext-Warranty Expired
                        </>
                      ) : val?.expired === true && val?.insurance_valid_to ? (
                        <>
                          <InsuranceShield rootStyle={{color: val?.expired ? '#ff980e' : '#F45560'}} />
                          Insurance Expired
                        </>
                      ) : val?.expired === true && val?.amc_valid_to ? (
                        <>
                          <InsuranceShield rootStyle={{color: val?.expired ? '#ff980e' : '#F45560'}} />
                          AMC Expired
                        </>
                      ) : null}

                      {/* Expiring */}

                      {val?.expiring === true && val?.warranty_valid_to ? (
                        <>
                          <WarrantyShield rootStyle={{color: val?.expiring ? '#ff980e' : '#F45560'}} />
                          Ext-Warranty Expiring Soon
                        </>
                      ) : val?.expiring === true && val?.insurance_valid_to ? (
                        <>
                          <WarrantyShield rootStyle={{color: val?.expiring ? '#ff980e' : '#F45560'}} />
                          Insurance Expiring Soon
                        </>
                      ) : val?.expiring === true && val?.amc_valid_to ? (
                        <>
                          <WarrantyShield rootStyle={{color: val?.expiring ? '#ff980e' : '#F45560'}} />
                          AMC Expiring Soon
                        </>
                      ) : val?.service_schedule ? <>
                        <AlertIconService rootStyle={{color: val?.expired ? '#ff980e' : '#F45560'}} />
                        Schedule Service Reminder
                      </> : val?.service_remainder ? <>
                        <TimerIcon rootStyle={{color: val?.expired ? '#ff980e' : '#F45560'}} />
                        Service Reminder
                      </> : val?.service_completed ? <>
                        <TimerIcon rootStyle={{color: val?.expired ? '#ff980e' : '#F45560'}} />
                        Service Overdue
                      </> : null}
                    </Typography>
                  </Box>
                  <Box sx={actionRequiredCardStyle.iconSx}>
                    {
                      val?.icon?.light_theme ? (
                        <img
                          style={{ width: '32px', height: '32px' }}
                          src={val?.icon?.light_theme ?? ''}
                          alt="light theme icons"
                        />
                      ) : (
                        <FridgeIcon />
                      )
                      // val?.nick_name[0]
                    }
                  </Box>
                  <Typography sx={actionRequiredCardStyle.productTextSx}>{val?.nick_name}</Typography>

                  {val?.service_schedule &&
                    (<Typography sx={actionRequiredCardStyle.productSubTextSx}>
                      Schedule your periodic service reminders
                    </Typography>)}
                  {val?.service_completed && (<Typography onClick={() => handleServiceNotComplete(val)} sx={actionRequiredCardStyle.scheduleServiceText}>
                    Not Completed
                  </Typography>)}
                  {val?.service_remainder && (<Typography sx={actionRequiredCardStyle.productSubTextSx}>
                    {`Upcoming service on ${moment(val?.remainder_date).format("D MMM YY")}`}
                  </Typography>)}
                  {val?.expiring && (<Typography sx={actionRequiredCardStyle.productSubTextSx}>
                    {val?.product_name}
                  </Typography>)}
                  {val?.expired && (<Typography sx={actionRequiredCardStyle.productSubTextSx}>
                    {val?.product_name}
                  </Typography>)}


                  {/* <Typography sx={actionRequiredCardStyle.productSubTextSx}>
                    {val?.service_schedule ? 'Schedule your periodic service reminders' : val?.service_completed ? 'Not Completed' : val?.expiring ? val?.product_name : val?.expiring ? val?.product_name : null}
                  </Typography> */}
                  <Box>
                    {/* Expired */}

                    {/* {val?.expired === true && val?.warranty_valid_to ? (
                      <Typography onClick={() => handleUploadExternalDocWarranty(val)} sx={actionRequiredCardStyle?.externalTextDoc}>Have Ext-warranty?</Typography>
                    ) : val?.expired === true && val?.insurance_valid_to ? (
                      <Typography onClick={() => handleUploadExternalDocInsurance(val)} sx={actionRequiredCardStyle?.externalTextDoc}>
                        Already bought?
                      </Typography>
                    ) : val?.expired === true && val?.amc_valid_to ? (
                      <Typography onClick={() => handleUploadExternalDocAmc(val)} sx={actionRequiredCardStyle?.externalTextDoc}>
                        Already bought?
                      </Typography>
                    ) : null} */}

                    {/* Expiring */}

                    {/* {val?.expiring === true && val?.warranty_valid_to ? (
                      <Typography onClick={() => handleUploadExternalDocWarranty(val)} sx={actionRequiredCardStyle?.externalTextDoc}>Have Ext-warranty?</Typography>
                    ) : val?.expiring === true && val?.insurance_valid_to ? (
                      <Typography onClick={() => handleUploadExternalDocInsurance(val)} sx={actionRequiredCardStyle?.externalTextDoc}>
                        Already bought?
                      </Typography>
                    ) : val?.expiring === true && val?.amc_valid_to ? (
                      <Typography onClick={() => handleUploadExternalDocAmc(val)} sx={actionRequiredCardStyle?.externalTextDoc}>
                        Already bought?
                      </Typography>
                    ) : null} */}
                  </Box>
                </Box>
                <Box data-testid="schedule1" sx={actionRequiredCardStyle.bottomColorSx}>
                  {val?.expired ? (<Typography onClick={() => handleUpdate(val)} sx={actionRequiredCardStyle.bottomButtonTextSx}>
                    {'Update'}
                  </Typography>) : val?.service_schedule ? (<Typography onClick={() => handleScheduleUpdate(val)} sx={actionRequiredCardStyle.bottomButtonTextSx}>
                    {'Set Reminder'}
                  </Typography>) : val?.expiring ?
                    <Typography onClick={() => handleUpdate(val)} sx={actionRequiredCardStyle.bottomButtonTextSx}>
                      {'Update'}
                    </Typography> : val?.service_remainder ?
                      <Typography onClick={() => goToScheduleService(val)} sx={actionRequiredCardStyle.bottomButtonTextSx}>
                        {'Schedule'}
                      </Typography> : val?.service_completed ?
                        <Typography onClick={() => handleServiceUpdate(val)} sx={actionRequiredCardStyle.bottomButtonTextSx}>
                          {'Yes, Completed'}
                        </Typography> : null}
                </Box>

              </Card>
            );
          })}
        </Box>
      )}
    </Box>
  );
};
