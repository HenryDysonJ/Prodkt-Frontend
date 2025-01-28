import { Input } from '@atoms/input';
import { ToggleButton } from '@atoms/toggleButton';
import type { SxProps, Theme } from '@mui/material';
import { Box } from '@mui/material';
import Divider from '@mui/material/Divider';
import { enqueueSnackbar } from 'notistack';

import { warrantyCoverageStyle } from './style';

interface toggleButtonInterface {
  label: string;
  value: string | number;
}

export interface WarrantyCoverageProps {
  className?: string;
  sx?: SxProps<Theme>;
  testData?: string;
  onChange?: (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void;
  value?: string | number | undefined | any;
  isError?: boolean | any;
  errorMessage?: string;
  toggleValue?: string;
  options?: toggleButtonInterface[] | undefined;
  isReadOnly?: boolean;
  handleToggle: (value: string | number) => void;
}

export const WarrantyCoverage = (props: WarrantyCoverageProps): JSX.Element => {
  const {
    testData,
    isError = false,
    errorMessage,
    isReadOnly = false,
    options = [],
    onChange = () => false,
    value = '',
    className = '',
    sx = {},
    handleToggle,
    toggleValue = '',
    ...rest
  } = props;



  const checkToggle = (val: any) => {
    if (val?.condition <= Number(value)) {
      // enqueueSnackbar(`Invalid input for warranty coverage`, { variant: 'warning' });
    } else {
      handleToggle(val?.value);
    }
  };

  const handleChangeValue = (e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value > 0) {
      if (value >= 1 && value <= 5) {
        handleToggle('year');
      } else if (value >= 6 && value <= 60) {
        handleToggle('months');
      } else {
        handleToggle('');
      }
    } else {
      // enqueueSnackbar(`The minimum value should be 1`, { variant: 'error' });
      handleToggle('');
    }
    onChange(e);
  };

  return (
    <Box
      sx={[{ ...warrantyCoverageStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={warrantyCoverageStyle.mainBoxSx}>
        <Input
          testid={testData}
          type="number"
          onChange={handleChangeValue}
          value={value}
          isError={isError}
          isReadOnly={isReadOnly}
          onKeyPress={(e) => {
            console.log(e.key);
            if ((Number(value) <= 0 && Number(e.key) === 0) || e.key === '-') {
              e.preventDefault();
            }
          }}
          errorMessage={errorMessage}
          testFieldStyle={warrantyCoverageStyle.inputFieldSx}
        />
        <Divider sx={warrantyCoverageStyle.dividerSx} orientation="vertical" variant="middle" flexItem />
        <ToggleButton fullResponse={true} onChange={checkToggle} value={toggleValue} options={options} />
      </Box>
    </Box>
  );
};
