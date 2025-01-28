import { LocationIcon } from '@atoms/icons';
import { Input } from '@atoms/input';
import LocationParent from '@core/ui/atoms/location';
import { getCoords, LocationData } from '@core/utils/functions';
import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';

import { useLocationStyle } from './style';

export interface UseLocationProps {
  className?: string;
  sx?: SxProps<Theme>;
  handleChange: (data: LocationData | null) => void;
  value?: LocationData | null;
  userDetails?: boolean;
}

export const UseLocation = (props: UseLocationProps): JSX.Element => {
  const { value, handleChange, className = '', sx = {}, userDetails = false, ...rest } = props;

  const onClickCurrentLocation = async () => {
    const data = await getCoords();
    handleChange(data);
  };

  return (
    <Box
      sx={[
        {
          ...useLocationStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box>
        <LocationParent
          value={value}
          handleChange={(data: any) => handleChange(data)}
          textFieldComponent={(
            ref: React.RefObject<HTMLInputElement>,
            value: string,
            handleChange: (loc: string) => void,
          ) => (
            <Input
              inputProps={{
                'data-testid': 'locality',
              }}
              inputRef={ref}
              onChange={(e) => handleChange(e.target.value)}
              value={value}
              placeholder={userDetails ? 'Location *' : 'Location (Recommended)'}
            />
          )}
        />
      </Box>
      <Box sx={useLocationStyle.locationSx} onClick={() => onClickCurrentLocation()}>
        <LocationIcon />
        <Typography sx={{ userSelect: 'none' }}>Use Current Location</Typography>
      </Box>
    </Box>
  );
};
