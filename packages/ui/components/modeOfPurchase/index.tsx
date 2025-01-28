import { CheckBox } from '@atoms/checkbox';
import { LocationData } from '@core/utils';
import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { UseLocation } from '..';
import { modeOfPurchaseStyle } from './style';
import { CustomTextfield } from '@atoms/customTextfield';
import { useState } from 'react';
import { addProductDetails } from '@core/store';

export interface ModeOfPurchaseProps {
  className?: string;
  sx?: SxProps<Theme>;
  boxStyle?: SxProps<Theme>;
  modeTitle: string;
  isRequired: boolean;
  mode: string;
  location?: LocationData;
  handleChange: (value: string) => void;
  handleLocation?: (location: LocationData | null) => void;
  showAddProduct: any;
  dateComponent?: any
}

export const ModeOfPurchase = (props: ModeOfPurchaseProps): JSX.Element => {
  const { dateComponent, showAddProduct, modeTitle = '', boxStyle, isRequired = false, className = '', sx = {}, ...rest } = props;

  const [maxDate] = useState(new Date()?.toISOString()?.split('T')[0]);

  const {
    category,
    getCategory,
    setApproxYears,
    productDetails,
    updateProductDetails,
    updateProductDetailsName,
    updateProductDetailsSpecification,
    updateProductSerialNo,
    onScanType,
    productYearIncrementDecrement
  } = addProductDetails();

  return (
    <Box
      sx={[{ ...modeOfPurchaseStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={{ ...modeOfPurchaseStyle.mainBoxSx, ...boxStyle } as SxProps<Theme>}>
        <Box sx={modeOfPurchaseStyle.headBoxSx}>
          <Box sx={{ display: 'flex', gap: '4px' }}>
            <Typography sx={modeOfPurchaseStyle.headTitleSx}>{modeTitle}</Typography>
            {isRequired && <Typography sx={{ color: 'error.900' }}>*</Typography>}
          </Box>
          {
            !showAddProduct ?
              <Box sx={modeOfPurchaseStyle.flexBoxSx}>
                <CheckBox
                  labelStyle={modeOfPurchaseStyle.checkBoxSx}
                  onChange={() => props.handleChange('offline')}
                  checked={props.mode === 'offline'}
                  label="Offline"
                />
                <CheckBox
                  data-testid="online"
                  labelStyle={modeOfPurchaseStyle.checkBoxSx}
                  onChange={() => {
                    props.handleChange('online');
                  }}
                  checked={props.mode === 'online'}
                  label="Online"
                />
              </Box>
              :
              <Box sx={modeOfPurchaseStyle.flexBoxSx}>
                <CheckBox
                  labelStyle={modeOfPurchaseStyle.checkBoxSx}
                  onChange={() => props.handleChange('Yes')}
                  checked={props.mode === 'Yes'}
                  label="Yes"
                />
                <CheckBox
                  labelStyle={modeOfPurchaseStyle.checkBoxSx}
                  onChange={() => {
                    props.handleChange('No');
                  }}
                  checked={props.mode === 'No'}
                  label="No"
                />
              </Box>
          }
        </Box>
        {
          props.mode === 'Yes' && (
            <Box px={2.5}>
              {dateComponent}
            </Box>
          )
        }
        {
          props.mode === 'No' && (
            <Box px={2.5} py={2}>
              <CustomTextfield
                definitionNameStyle={{
                  color: 'text.500',
                }}
                definitionName="Approximate Age"
                darkText
                handleIncrement={() =>
                  setApproxYears(
                    'approx_years',
                    (productDetails?.approx_years + 1) as never,
                  )

                }
                handleDecrement={() =>
                  productDetails?.approx_years > 0
                    ? setApproxYears(
                      'approx_years',
                      (productDetails?.approx_years - 1) as never,
                    )
                    : null
                }
                yearText="Year"
                isRequired
                variant="addYear"
                yearValue={productDetails?.approx_years}
              />
            </Box>
          )
        }
        {props.mode === 'offline' && (
          <Box sx={modeOfPurchaseStyle.locationBoxSx}>
            <UseLocation value={props.location} handleChange={props?.handleLocation} />
          </Box>
        )}
      </Box>
    </Box>
  );
};
