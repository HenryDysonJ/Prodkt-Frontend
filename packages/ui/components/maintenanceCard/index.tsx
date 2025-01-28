import { CalenderIcon, DownloadIcon } from '@atoms/icons';
import { PathSecBoxIcon } from '@atoms/icons/productSearchIconsLists';
import { Card, Divider, SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { RiCheckboxBlankCircleFill } from 'react-icons/ri';

import { maintenanceCardStyle } from './style';
import moment from 'moment';

interface maintenaceDataProps {
  document_url: string;
  maintenance_name: string;
  service_cost: string;
  service_date: string;
  service_type: string;
}
export interface MaintenanceCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  maintenance?: maintenaceDataProps[] | undefined;
}

export const MaintenanceCard = (props: MaintenanceCardProps): JSX.Element => {
  const { maintenance, className = '', sx = {}, ...rest } = props;

  return (
    <Box
      sx={[{ ...maintenanceCardStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      {maintenance?.map((val: maintenaceDataProps, index: number) => {
        return (
          <Card key={index} sx={maintenanceCardStyle.cardSx}>
            <Box px={1.8}>
              <Typography sx={maintenanceCardStyle.headerTextSx}>{val?.maintenance_name}</Typography>
              <Box sx={maintenanceCardStyle.subRootTextSx}>
                <Typography sx={maintenanceCardStyle.subTextSx}>{val?.service_type}</Typography>
                <RiCheckboxBlankCircleFill
                  style={{
                    color: '#CCCCCC',
                    fontSize: '7px',
                  }}
                />
                <Typography sx={maintenanceCardStyle.subTextSx}>{val?.service_type}</Typography>
              </Box>
              <Divider
                sx={{
                  border: '0.8px dashed',
                  borderColor: 'divider.100',
                }}
              />
              <Box sx={maintenanceCardStyle.bottomDataSx}>
                <Typography sx={maintenanceCardStyle.typographyTextSx}>
                  <CalenderIcon sx={maintenanceCardStyle.calendarIconSx} />
                  {moment(val?.service_date).format('D MMM YYYY')}
                </Typography>
                {/* <Typography sx={maintenanceCardStyle.typographyTextSx}>
                  <PathSecBoxIcon />
                  {val?.service_cost}
                </Typography> */}

                <Box data-testid="download">
                  <a
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      fontSize: '14px',
                      textDecoration: 'none',
                      color: 'text.500',
                    }}
                    href={val?.document_url}
                    download
                  >
                    <DownloadIcon />
                    &nbsp; <Typography sx={{fontSize: '14px', color: 'text.500'}}>Download</Typography>
                  </a>
                </Box>
                <Typography>{''}</Typography>
              </Box>
            </Box>
          </Card>
        );
      })}
    </Box>
  );
};
