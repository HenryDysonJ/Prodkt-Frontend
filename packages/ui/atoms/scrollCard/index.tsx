import { useScanproduct } from '@core/store';
import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import React, { useEffect } from 'react';
import MascotLoading from '@assets/mascotLoading.gif';
import { FaceEmojiIcon, FrowningIcon, PartyEmojiIcon } from '..';
import { scrollCardStyle } from './style';


export interface ScrollCardProps {
  className?: string;
  sx?: SxProps<Theme>;

}

export const ScrollCard = (props: ScrollCardProps): JSX.Element => {
  const { className = '', sx = {}, ...rest } = props;

  const { currentStatus, ProductError, responseMessage, productLoading } = useScanproduct();


  const invoice = [
    {
      id: 1,
      element_id: 'scan',
      scanningText: 'Our document-fetching squad is on the case, retrieving the file you uploaded.',
      icon: <FaceEmojiIcon />,
    },
    {
      id: 2,
      element_id: 'invoice',
      scanningText: 'Fetching invoice documents details...',
      icon: <FaceEmojiIcon />,
    },
    {
      id: 3,
      element_id: 'payment',
      scanningText: productLoading ? 'Mission accomplished! Document fetched successfully!...' : 'Retry document retrieval. Success hoped!',
      icon: ProductError ? <PartyEmojiIcon /> : <FrowningIcon />,
    },
  ];

  const warranty = [
    {
      id: 1,
      element_id: 'scan',
      scanningText: 'Our document-fetching squad is on the case, retrieving the file you uploaded.',
      icon: <FaceEmojiIcon />,
    },
    {
      id: 2,
      element_id: 'invoice',
      scanningText: 'Fetching warranty documents details...',
      icon: <FaceEmojiIcon />,
    },
    {
      id: 3,
      element_id: 'payment',
      scanningText: productLoading ? 'Mission accomplished! Document fetched successfully!...' : 'Retry document retrieval. Success hoped!',
      icon: ProductError ? <PartyEmojiIcon /> : <FrowningIcon />,
    },
  ];

  const insurance = [
    {
      id: 1,
      element_id: 'scan',
      scanningText: 'Our document-fetching squad is on the case, retrieving the file you uploaded.',
      icon: <FaceEmojiIcon />,
    },
    {
      id: 2,
      element_id: 'invoice',
      scanningText: 'Fetching insurance documents details...',
      icon: <FaceEmojiIcon />,
    },
    {
      id: 3,
      element_id: 'payment',
      scanningText: productLoading ? 'Mission accomplished! Document fetched successfully!...' : 'Retry document retrieval. Success hoped!',
      icon: ProductError ? <PartyEmojiIcon /> : <FrowningIcon />,
    },
  ];

  const amc = [
    {
      id: 1,
      element_id: 'scan',
      scanningText: 'Our document-fetching squad is on the case, retrieving the file you uploaded.',
      icon: <FaceEmojiIcon />,
    },
    {
      id: 2,
      element_id: 'invoice',
      scanningText: 'Fetching amc documents details...',
      icon: <FaceEmojiIcon />,
    },
    {
      id: 3,
      element_id: 'payment',
      scanningText: productLoading ? 'Mission accomplished! Document fetched successfully!...' : 'Retry document retrieval. Success hoped!',
      icon: ProductError ? <PartyEmojiIcon /> : <FrowningIcon />,
    },
  ];

  const arrayMap = {
    0: invoice,
    1: warranty,
    2: insurance,
    3: amc,
  };


  const [value, setValue] = React.useState([]);

  useEffect(() => {
    for (let i = 0; i < arrayMap[currentStatus?.step].length; i++) {
      setTimeout(() => {
        const previousValues = arrayMap[currentStatus?.step].slice(0, i + 1);
        setValue(previousValues);
      }, 3200 * i);
    }
  }, []);

  useEffect(() => {
    if (value[value?.length - 1]?.id) {
      const element = document.getElementById(value[value?.length - 1]?.id);
      element.scrollIntoView();
    }
  }, [value]);

  return (
    <>
      <Box
        sx={[{ ...scrollCardStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
        className={`${className}`}
        {...rest}
      >
        <Box
          sx={{
            display: 'grid',
            minHeight: '40vh',
            placeItems: 'center',
            alignContent: 'center'
          }}
        >
          <img
            src={MascotLoading}
            alt="mascot img"
          />
        </Box>

        <Box sx={scrollCardStyle.cardRoot}>
          {value?.map((val: any, index: number) => {
            return (
              <>
                <Box id={val?.id} sx={{
                  ...scrollCardStyle.cardSx,
                  bgcolor: value?.length - 1 === index ?
                    'background.surface.C700'
                    : 'background.surface.C600'
                }}>
                  <Box sx={{
                    ...scrollCardStyle.cardOneSx,
                    '&::after': {
                      zIndex: '1',
                      position: 'absolute',
                      bottom: '85.1%',
                      left: '72%',
                      marginLeft: '-69%',
                      content: '""',
                      width: '0',
                      height: '0',
                      borderBottom: 'solid 28px',
                      borderColor:
                        value?.length - 1 === index ?
                          'background.surface.C700'
                          : 'background.surface.C600',
                      borderLeft: 'solid 16px transparent',
                      borderRight: 'solid 16px transparent',
                    },
                  }}>
                    <Typography key={index} sx={{
                      ...scrollCardStyle.textSx,
                      color: value?.length - 1 === index ? 'text.A100' : 'text.B400'
                    }}>
                      <Box sx={{ paddingTop: '10px' }}>{val?.icon}</Box>
                      {val?.scanningText}
                    </Typography>
                  </Box>
                </Box>
                <Box id={val?.element_id} />
              </>
            );
          })}
        </Box>
      </Box>
    </>
  );
};