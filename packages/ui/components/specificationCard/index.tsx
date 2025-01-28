import { CopyIcon, EyeIcon, ReportDownloadIcon } from '@atoms/icons';
import { DocumentIcon } from '@atoms/icons/productSearchIconsLists';
import { Box, Divider, Grid, Stack, SxProps, Theme, Typography } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { Worker } from '@phuocng/react-pdf-viewer';
import CopyToClipboard from 'react-copy-to-clipboard';
import { lazy, Suspense, useState } from 'react';

import { specificationCardStyle } from './style';
import { DailogModal } from '..';
import { ArchivedProductDataInterface } from '@core/store/interface';
import { PdfViewer } from '@atoms/pdfViewer';
interface specificationProductDetails {
  title: string;
  value: string;
}

export interface SpecificationCardProps {
  heading?: string;
  showIcon?: boolean;
  copyIconShown?: boolean;
  className?: string;
  modalNo?: string;
  specification?: specificationProductDetails[];
  sx?: SxProps<Theme>;
  valueTextStyle?: SxProps<Theme>;
  paddingStyle?: boolean;
  spectificationTextStyle?: object;
}

export const SpecificationCard = (props: SpecificationCardProps): JSX.Element => {
  const {
    valueTextStyle,
    paddingStyle,
    copyIconShown,
    heading = '',
    modalNo = '',
    showIcon = false,
    specification,
    spectificationTextStyle = {},
    className = '',
    sx = {},
    ...rest
  } = props;


  const [showPDF, setShowPDF] = useState(false);
  const [invoiceDocument, setInvoiceDocument] = useState();

  const onClickFnc = (data: any) => {
    setShowPDF(true);
    setInvoiceDocument(data);
  };

  const handleClickShowPdfClose = () => {
    setShowPDF(false);
  };

  const returnTheColor = (val: any) => {
    if (val?.type === 'img') {
      return {};
    }
    if (val?.length > 0) {
      return val?.includes('Expiring') ? specificationCardStyle.expiredTextSx : {};
    } else {
      return '';
    }
  };

  const handleCopy = (value: any) => {
    navigator.clipboard
      .writeText(value)
      .then(() => {
        enqueueSnackbar('Serial Number copied', {
          variant: 'success',
          autoHideDuration: 3000,
        });
      })
      .catch(() => {
        enqueueSnackbar('Failed to copy', {
          variant: 'error',
          autoHideDuration: 3000,
        });
      });
  };

  const Viewer = lazy(() => import('@phuocng/react-pdf-viewer'));

  return (
    <Box
      sx={[
        {
          ...specificationCardStyle.rootSx,
        },
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      className={`${className}`}
      {...rest}
    >
      <Box sx={{ ...specificationCardStyle.cardSx, padding: paddingStyle ? '20px' : '' }}>
        <Typography
          sx={{ ...specificationCardStyle.spectificationTextSx, ...spectificationTextStyle } as SxProps<Theme>}
        >
          {showIcon && <DocumentIcon rootStyle={{ color: 'text.A100' }} />}
          {heading}
        </Typography>
        <Grid container rowSpacing={1}>
          {specification?.map(
            (val: specificationProductDetails, index: number, array: specificationProductDetails[]) => {
              // const isPdf = val?.value?.includes('.pdf');
              return (
                <Grid
                  key={index}
                  item
                  xs={index === array.length - 1 && array.length % 2 !== 0 ? 12 : 6}
                  sx={{
                    ...specificationCardStyle.borderBottomDividerSx,
                    borderTop: ![0, 1].includes(index) ? '1px dashed #8E959D3D !important' : 'none',
                    borderRight: index % 2 === 0 && index !== array.length - 1 ? '1px dashed #8E959D3D !important' : 'none',
                    pl: index % 2 === 1 ? 1.5 : 0,
                    mt: '0px !important',
                    pt: '10px',
                  }}
                >
                  {val?.title === '0' ? (
                    <Typography sx={specificationCardStyle.productNameSx}>Invoice Document</Typography>
                  ) : (
                    <Typography sx={specificationCardStyle.productNameSx}>{val?.title}</Typography>
                  )}
                  <Box display="flex" justifyContent="space-between" mr={1.5} gap={5}>
                    {val?.title === 'Serial Number' ? (
                      <>
                        <Typography
                          sx={{
                            fontSize: '12px',
                            color: 'text.700',
                            fontWeight: 500,
                            width: '250px',
                            whiteSpace: 'nowrap',
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                          }} py={0.8}>
                          {val?.value ? val?.value : 'Nil'}
                        </Typography>
                        {copyIconShown && (
                          <CopyToClipboard data-testid="copy" text={val?.value} onCopy={() => handleCopy(val?.value)}>
                            <Box sx={specificationCardStyle.copyIconSx}>
                              <CopyIcon />
                            </Box>
                          </CopyToClipboard>
                        )}
                      </>
                    ) : val?.title === '0' ? (
                      <>
                        <Grid container py={0.8}>
                          <Grid
                            data-testid="view"
                            xs={6}
                            sx={{ ...specificationCardStyle.gridStyle, cursor: 'pointer' }}
                            onClick={() => onClickFnc({ data: val?.value })}
                          >
                            <EyeIcon />
                            <Typography sx={specificationCardStyle.invoiceSubTextSx}>View</Typography>
                          </Grid>
                          <Grid xs={6} sx={specificationCardStyle.gridStyle}>
                            <a
                              data-testid="download"
                              style={{
                                display: 'flex',
                                alignItems: 'center',
                                fontSize: '14px',
                                textDecoration: 'none',
                                color: '#6C6C6C',
                              }}
                              href={val?.value}
                              download
                            >
                              <ReportDownloadIcon />
                              &nbsp;&nbsp;
                              <Typography sx={specificationCardStyle.invoiceSubTextSx}>Download</Typography>
                            </a>
                          </Grid>
                        </Grid>
                      </>
                    ) : (
                      <>
                        <Typography
                          pt={1}
                          pb={1}
                          sx={{
                            color: 'text.700',
                            fontSize: '12px',
                            fontWeight: 500,
                            lineBreak: 'anywhere',
                            ...valueTextStyle,
                            ...returnTheColor(val?.value),
                          }}
                        >
                          {val?.value ? val?.value : 'Nil'}
                        </Typography>
                      </>
                    )}
                  </Box>
                </Grid>
              );
            }
          )}
        </Grid>
      </Box>
      {showPDF && (
        // <DailogModal content="View Document" open={showPDF} onClose={handleClickShowPdfClose}>
        //   {invoiceDocument?.isPdf && (
        //     <PdfViewer url={invoiceDocument?.data} />
        //   )}

        //   {!invoiceDocument?.isPdf && (
        //     <Box>
        //       <img width={'100%'} height={'100%'} src={invoiceDocument?.data} alt="" />
        //     </Box>
        //   )}
        // </DailogModal>
        <DailogModal content="View Document" open={showPDF} onClose={handleClickShowPdfClose}>

          <Box>
            <div style={{ zoom: '50%' }}>
              <PdfViewer url={invoiceDocument?.data} />
            </div>
          </Box>

          {!invoiceDocument?.isPDF && (
            <Box>
              <img width={'100%'} height={'100%'} src={invoiceDocument?.data} alt="" />;
            </Box>
          )}
        </DailogModal >
      )}
    </Box>
  );
};
