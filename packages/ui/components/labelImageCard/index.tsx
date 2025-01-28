import { Box, SxProps, Theme, Typography } from '@mui/material';
import { Worker } from '@phuocng/react-pdf-viewer';
import { enqueueSnackbar } from 'notistack';
import { lazy, Suspense, useEffect, useState } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { DailogModal } from '..';
import { labelImageCardStyle } from './style';
import { PdfViewer } from '@atoms/pdfViewer';

export interface LabelImageCardProps {
  className?: string;
  sx?: SxProps<Theme>;
  image: any;
  providerName?: string | undefined;
  from_date?: string;
  to_date?: string;
  viewText?: string;
  viewUrl?: string;
  viewIcon: JSX.Element;
  labelText: string;
  product_serial_no?: string;
  copyIcon?: JSX.Element;
  amc_coverage?: number;
  coverage_type?: string;
  no_of_Service_avilable?: number;
}

export const LabelImageCard = (props: LabelImageCardProps): JSX.Element => {
  const {
    image = '',
    providerName = '',
    from_date = '',
    to_date = '',
    viewIcon,
    viewText = '',
    viewUrl = '',
    labelText = '',
    product_serial_no = '',
    copyIcon,
    amc_coverage,
    no_of_Service_avilable,
    coverage_type = '',
    ...rest
  } = props;

  const [showPDF, setShowPDF] = useState(false);
  const [isImageShow, setIsImageShow] = useState(false);
  const Viewer = lazy(() => import('@phuocng/react-pdf-viewer'));

  const handleCopy = () => {
    navigator.clipboard
      .writeText(product_serial_no)
      .then(() => {
        enqueueSnackbar('Product Serial Number copied', {
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

  const togglePdf = () => {
    setShowPDF(!showPDF);
  };

  useEffect(() => {
    const isPdf = viewUrl?.[0]?.includes('.pdf');
    setIsImageShow(isPdf)
  }, [])

  return (
    <Box sx={labelImageCardStyle.rootSx} {...rest}>
      <Box sx={labelImageCardStyle.cardSx}>
        <Box sx={labelImageCardStyle.imageSx}>{image ? <img src={image} width={44} height={44} style={{ objectFit: 'contain' }} alt="Logo" /> : <Box>{image}</Box>}</Box>
        <Typography sx={labelImageCardStyle.nameTextSx}>{providerName}</Typography>
        {amc_coverage ? (
          <Typography sx={labelImageCardStyle.dateTextSx}>
            {amc_coverage} {coverage_type} Validity
          </Typography>
        ) : (
          <Typography sx={labelImageCardStyle.dateTextSx}>
            {from_date} - {to_date}
          </Typography>
        )}

        {!amc_coverage && (
          <Box sx={labelImageCardStyle.textSectionSx}>
            <Box sx={labelImageCardStyle.viewSectionSx}>
              {
                viewUrl && (
                  <>
                    <Typography onClick={togglePdf} sx={labelImageCardStyle.viewTextSx}>
                      {viewText}
                    </Typography>
                    <Box>{viewIcon}</Box>
                  </>
                )

                // : (
                //   <Box onClick={handleUploadDocument}>
                //     <Typography sx={labelImageCardStyle.uploadTextSx}>Upload Document</Typography>
                //   </Box>
                // )
              }
            </Box>
            {product_serial_no && (
              <Box sx={labelImageCardStyle.copySectionSx}>
                <Box sx={labelImageCardStyle.dotSx} component="span"></Box>
                <Typography sx={labelImageCardStyle.productNumSx}>{product_serial_no}</Typography>
                <CopyToClipboard text={product_serial_no} onCopy={handleCopy}>
                  <Box sx={labelImageCardStyle.copyIconSx}>{copyIcon}</Box>
                </CopyToClipboard>
              </Box>
            )}
          </Box>
        )}
      </Box>
      {no_of_Service_avilable && (
        <Box sx={labelImageCardStyle.servicesSx}>
          <Typography>{no_of_Service_avilable} Services available in this package</Typography>
        </Box>
      )}
      <Typography variant="subtitle2" fontWeight="400" sx={labelImageCardStyle.labelTextSx}>
        {labelText}
      </Typography>

      <>
        {/* {showPDF && (
          <DailogModal content="View Document" open={showPDF} onClose={togglePdf}>
            <Box>
              <Suspense>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.7.107/build/pdf.worker.min.js">
                  <div style={{ zoom: '50%' }}>
                    <Viewer fileUrl={viewUrl} />;
                  </div>
                </Worker>
              </Suspense>
            </Box>
          </DailogModal>
        )} */}



        {showPDF && (
          <DailogModal content="View Document" open={showPDF} onClose={togglePdf}>
            {isImageShow && (
              <Box>
                <div style={{ zoom: '50%' }}>
                  {viewUrl?.map((v: string, index: number) => {
                    return <PdfViewer url={v} />
                  })}
                </div>
              </Box>
            )}
            {!isImageShow && (
              <Box>
                {viewUrl?.map((v: string, index: number) => {
                  return <img key={index} width={'100%'} height={'100%'} src={v} alt="" />;
                })}
              </Box>
            )}
          </DailogModal>
        )}
      </>
    </Box>
  );
};
