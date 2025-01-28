import { Divider, Stack, SxProps, Theme, Typography } from '@mui/material';
import { Box } from '@mui/material';

import { productCardDetailsStyle } from './style';
interface dataInterface {
  label: string;
  value: string;
}
export interface ProductCardDetailsProps {
  className?: string;
  sx?: SxProps<Theme>;
  header?: string;
  data?: dataInterface[];
}

export const ProductCardDetails = (props: ProductCardDetailsProps): JSX.Element => {
  const { className = '', sx = {}, header = '', data, ...rest } = props;

  return (
    <Box
      sx={[
        {
          ...productCardDetailsStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={productCardDetailsStyle.cardSx}>
        <Box sx={productCardDetailsStyle.headerSx}>{header}</Box>

        <Stack
          pt={1.5}
          direction="row"
          divider={<Divider sx={productCardDetailsStyle.dividerSx} orientation="vertical" flexItem />}
          justifyContent="space-between"
          sx={{ backgroundColor: 'background.surface.100', pb: 1.5 }}
          flexWrap="wrap"
        >
          {data
            ?.filter((val) => val.label !== 'Location' && val.value !== undefined && val.value !== '')
            ?.filter((val) => val.label !== 'Location' && val.label !== 'Mode of Purchase' && val?.label !== 'IMEI Number')
            .map((val, index) => {
              return (
                <Box key={index} sx={productCardDetailsStyle.boxSx}>
                  <Typography sx={productCardDetailsStyle.titleSx}>{val?.label}</Typography>
                  <Typography sx={productCardDetailsStyle.valueSx}>{val.value}</Typography>
                </Box>
              );
            })}
        </Stack>
        {data?.filter((val) => val?.label === 'Mode of Purchase' && val?.value) && (
          <Divider
            orientation="vertical"
            flexItem
            sx={{ borderBottom: '0.5px dashed', borderRightWidth: 'inherit', borderColor: 'divider.100' }}
          />
        )}
        <Stack
          pt={1.5}
          direction="row"
          divider={<Divider sx={productCardDetailsStyle.dividerSx} orientation="vertical" flexItem />}
          justifyContent="space-between"
          sx={{ backgroundColor: 'background.surface.100', pb: 0.5 }}
        >
          {data
            ?.filter(
              (val) =>
                val?.label === 'IMEI Number' ||
                (val?.label === 'Location' && val?.value?.length > 0) ||
                val?.label === 'Mode of Purchase',
            )
            ?.filter((val) => val?.label === 'Location' || val?.label === 'Mode of Purchase' || val?.label === 'IMEI Number')
            .map((value, index) => {
              return (
                <>
                  <Box key={index} sx={productCardDetailsStyle.boxSx}>
                    <Typography sx={productCardDetailsStyle.titleSx}>{value?.label}</Typography>
                    <Typography sx={productCardDetailsStyle.overFlowValueSx}>{value.value}</Typography>
                  </Box>
                </>
              );
            })}
        </Stack>
      </Box>
    </Box>
  );
};
