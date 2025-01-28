import { SxProps, Theme, Typography } from '@mui/material';
import { Box } from '@mui/material';

import { fileUploadCardStyle } from './style';

interface DocumentsProps {
  icon?: JSX.Element;
  title?: string;
  subTitle?: string;
}
export interface FileUploadCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  header?: string;
  data?: DocumentsProps[];
}

export const FileUploadCard = (props: FileUploadCardProps): JSX.Element => {
  const { className = '', sx = {}, header = '', data, ...rest } = props;

  return (
    <Box
      sx={[
        {
          ...fileUploadCardStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box
        sx={
          data?.filter((val) => val.subTitle.length > 0).length < 2
            ? fileUploadCardStyle.rootBoxSectionSx
            : fileUploadCardStyle.rootBoxSx
        }
      >
        <Box sx={fileUploadCardStyle.headerSx}>{header}</Box>
        <Box
          sx={{
            // overflowY: 'hidden',
            overflow: 'scroll',
            overflowX: 'overlay',
            display: 'flex',
            flexDirection: 'row',
            marginTop: '13px',
          }}
        >
          {data?.map((val, index) => {
            return (
              <>
                {Array.isArray(val?.subTitle) &&
                  val?.subTitle?.length > 0 &&
                  val?.subTitle.map((v) => {
                    return (
                      <Box key={index} sx={fileUploadCardStyle.cardSx}>
                        <Box sx={{ width: '240px', display: 'flex' }}>
                          <Box sx={fileUploadCardStyle.iconSx}>{val?.icon}</Box>
                          <Box>
                            <Typography sx={fileUploadCardStyle.fileSx}>{val?.title}</Typography>
                            <Typography sx={fileUploadCardStyle.fileNameSx}>{v}</Typography>
                          </Box>
                        </Box>
                      </Box>
                    );
                  })}
              </>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
};
