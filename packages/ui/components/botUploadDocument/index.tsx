import { AmcInfoIcon, DocumentBotIcon, DocumentDisableIcon, DocumentInfoIcon, DocumentTickIcon } from '@atoms/icons';
import { useScanproduct } from '@core/store';
import HalfCircleImage from '@core/ui/assets/halfCircle.svg';
import MascotFrame from '@assets/MascotFrame.gif';
import MascotLoading from '@assets/mascotLoading.gif';
import { Box, SxProps, Theme, Typography } from '@mui/material';

import { botUploadDocumentStyle } from './style';

export interface BotUploadDocumentProps {
  className?: string;
  sx?: SxProps<Theme>;
  upload?: boolean;
  amcNotApplicable?: boolean;
  amcNotFound?: boolean;
  notUpload?: boolean;
}

export const BotUploadDocument = (props: BotUploadDocumentProps): JSX.Element => {
  const { amcNotFound = false, amcNotApplicable = false, className = '', sx = {}, ...rest } = props;

  const { currentStatus, loading } = useScanproduct();

  return (
    <Box
      sx={[{ ...botUploadDocumentStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]}
      className={`${className}`}
      {...rest}
    >
      <Box
        sx={{
          backgroundImage: `url(${HalfCircleImage})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'top',
          backgroundPositionY: '80px',
          backgroundSize: 'auto',
        }}
      >
        {/* <div style={botUploadDocumentStyle.div}></div> */}
        <Box sx={botUploadDocumentStyle.totalMoodSx}>
          {/* bot */}
          <Box
            sx={{
              ...botUploadDocumentStyle.emojiSx,
              gridRow: '4/7',
              gridColumn: '5/10',
              maxWidth: '122px',
              marginTop: '-20px',
            }}
          // onClick={() => onHoverBtn()}
          >
            <Box sx={botUploadDocumentStyle.botSx}>
              <Box
                sx={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  width: '214px',
                  height: '136px',
                }}
              >
                <img
                  src={loading ? MascotLoading : MascotFrame}
                  alt="mascot img"
                />
              </Box>
            </Box>
          </Box>

          {/* AMC */}
          <Box
            sx={{
              ...botUploadDocumentStyle.emojiSx,
              gridRow: '6/4',
              gridColumn: '10/14',
              maxWidth: '96px',
              paddingTop: '60px',
              height: '100px',
              paddingLeft: '2px',
            }}
          >
            <Box
              sx={{
                ...botUploadDocumentStyle.amcSx,
                border: '1px solid',
                borderColor:
                  amcNotFound === false ? 'grey.B100' :
                    currentStatus?.step > 3
                      ? currentStatus?.skip?.includes('Amc')
                        ? 'grey.B100'
                        : '#0E70EB'
                      : currentStatus?.step === 3 && currentStatus?.status === 'reject'
                        ? 'grey.B100'
                        : currentStatus?.step < 3
                          ? 'grey.B100'
                          : '#0E70EB'
              }}
            >
              <Box>
                {
                  amcNotFound === false ? <DocumentDisableIcon /> :
                    currentStatus?.step > 3 ? (
                      currentStatus?.skip?.includes('Amc') ? (
                        <DocumentDisableIcon />
                      ) : (
                        <DocumentTickIcon />
                      )
                    ) : currentStatus?.step === 3 && currentStatus?.status === 'reject' ? (
                      <DocumentInfoIcon />
                    ) : currentStatus?.step < 3 ? (
                      <DocumentDisableIcon />
                    ) : (
                      <DocumentBotIcon />
                    )}
                <Typography
                  sx={{
                    color:
                      amcNotFound === false ? 'text.B500' :
                        currentStatus?.step > 3
                          ? currentStatus?.skip?.includes('Amc')
                            ? 'text.B500'
                            : '#5D9DEF'
                          : currentStatus?.step === 3 && currentStatus?.status === 'reject'
                            ? 'primary.300'
                            : currentStatus?.step < 3
                              ? 'text.B500'
                              : '#5D9DEF',
                    fontSize: '12px',
                    mt: '-4px',
                  }}
                >
                  Amc
                </Typography>
              </Box>
              {
                amcNotApplicable &&
                <Box sx={{
                  position: 'absolute',
                  top: '335px',
                  pl: 0.3
                }}>
                  <AmcInfoIcon />
                </Box>
              }

            </Box>

          </Box>


          {/* Invoice */}
          <Box
            sx={{
              ...botUploadDocumentStyle.emojiSx,
              gridRow: '4/7',
              gridColumn: '1/5',
              maxWidth: '80px',
            }}
          >
            <Box
              sx={{
                ...botUploadDocumentStyle.invoiceSx,
              }}
            >
              <Box>
                {currentStatus?.step > 0 ? (
                  <DocumentTickIcon />
                ) : currentStatus?.step === 0 && currentStatus?.status === 'reject' ? (
                  <DocumentInfoIcon />
                ) : (
                  <DocumentBotIcon />
                )}
                <Typography sx={{ color: '#226FD1', fontSize: '12px', mt: '-4px' }}>Invoice</Typography>
              </Box>
            </Box>
          </Box>

          {/* warrantyUpload */}
          <Box
            sx={{
              ...botUploadDocumentStyle.emojiSx,
              gridRow: '1/5',
              gridColumn: '2/7',
              maxWidth: '156px',
              height: '210px',
            }}
          >
            <Box
              sx={{
                ...botUploadDocumentStyle.warrantySx,
                border: '1px solid',
                borderColor:
                  currentStatus?.step > 1
                    ? currentStatus?.skip?.includes('Extended Warranty')
                      ? 'grey.B100'
                      : '#0E70EB'
                    : currentStatus?.step === 1 && currentStatus?.status === 'reject'
                      ? 'grey.B100'
                      : currentStatus?.step < 1
                        ? 'grey.B100'
                        : '#0E70EB',
              }}
            >
              <Box>
                {currentStatus?.step > 1 ? (
                  currentStatus?.skip?.includes('Extended Warranty') ? (
                    <DocumentDisableIcon />
                  ) : (
                    <DocumentTickIcon />
                  )
                ) : currentStatus?.step === 1 && currentStatus?.status === 'reject' ? (
                  <DocumentInfoIcon />
                ) : currentStatus?.step < 1 ? (
                  <DocumentDisableIcon />
                ) : (
                  <DocumentBotIcon />
                )}
                <Typography
                  sx={{
                    color:
                      currentStatus?.step > 1
                        ? currentStatus?.skip?.includes('Extended Warranty')
                          ? 'text.B500'
                          : '#5D9DEF'
                        : currentStatus?.step === 1 && currentStatus?.status === 'reject'
                          ? 'primary.300'
                          : currentStatus?.step < 1
                            ? 'text.B500'
                            : '#5D9DEF',
                    fontSize: '12px',
                    mt: '-4px',
                  }}
                >
                  ExtWarranty
                </Typography>
              </Box>
            </Box>
          </Box>

          {/* insurance */}
          <Box
            sx={{
              ...botUploadDocumentStyle.emojiSx,
              gridRow: '2/4',
              gridColumn: '7/12',
              maxWidth: '158px',
              height: '100px',
              position: 'relative',
              paddingLeft: '24px',
              paddingTop: '12px',
            }}
          >
            <Box
              sx={{
                ...botUploadDocumentStyle.insuranceSx,
                border: '1px solid',
                borderColor:
                  currentStatus?.step > 2
                    ? currentStatus?.skip?.includes('Insurance')
                      ? 'grey.B100'
                      : '#0E70EB'
                    : currentStatus?.step === 2 && currentStatus?.status === 'reject'
                      ? 'grey.B100'
                      : currentStatus?.step < 2
                        ? 'grey.B100'
                        : '#0E70EB'
              }}
            >
              <Box>
                {currentStatus?.step > 2 ? (
                  currentStatus?.skip?.includes('Insurance') ? (
                    <DocumentDisableIcon />
                  ) : (
                    <DocumentTickIcon />
                  )
                ) : currentStatus?.step === 2 && currentStatus?.status === 'reject' ? (
                  <DocumentInfoIcon />
                ) : currentStatus?.step < 2 ? (
                  <DocumentDisableIcon />
                ) : (
                  <DocumentBotIcon />
                )}
                <Typography
                  sx={{
                    color:
                      currentStatus?.step > 2
                        ? currentStatus?.skip?.includes('Insurance')
                          ? 'text.B500'
                          : '#5D9DEF'
                        : currentStatus?.step === 2 && currentStatus?.status === 'reject'
                          ? 'primary.300'
                          : currentStatus?.step < 2
                            ? 'text.B500'
                            : '#5D9DEF',
                    fontSize: '12px',
                    mt: '-4px',
                  }}
                >
                  Insurance
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};