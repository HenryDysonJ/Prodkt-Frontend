// import '@phuocng/react-pdf-viewer/cjs/react-pdf-viewer.css';
import Viewer, { Worker } from '@phuocng/react-pdf-viewer';
import { CheckBox } from '@atoms/checkbox';
import type { SxProps, Theme } from '@mui/material';
import { Box, Card, CardActionArea, CardMedia, Grid, Stack, Typography } from '@mui/material';
// import { Worker } from '@phuocng/react-pdf-viewer';
import moment from 'moment';
import { lazy, Suspense, useState } from 'react';
import { DailogModal } from '..';
import { documentViewCardStyle } from './style';
import { DummyDocumentIcon } from '@atoms/icons/searchProductIcon';
import { useLongPress } from 'use-long-press';
import { PdfViewer } from '@atoms/pdfViewer';
interface PropData {
  data?: string | string[];
  isPDF?: boolean;
}

export interface DocumentDataProps {
  is_active?: boolean;
  purchased_on?: string;
  id: string;
  valid_to?: string;
  document_url?: string;
}
export interface DocumentViewCardProps {
  cardStyle?: SxProps<Theme>;
  nickName?: string;
  cardName?: string;
  checked: Array<string>;
  onChange?: (checked: boolean, val: unknown) => void;
  handleMouseDown?: () => void;
  isGrid?: boolean;
  isCheckIcon?: boolean;
  documentData: DocumentDataProps[];
}

export const DocumentViewCard = (props: DocumentViewCardProps): JSX.Element => {
  const {
    cardStyle = {},
    cardName = '',
    onChange = () => false,
    checked = [],
    isCheckIcon = false,
    isGrid = false,
    handleMouseDown = () => false,
    nickName = '',
    documentData = [],
  } = props;
  const [showPDF, setShowPDF] = useState(false);
  const [isPdfView, setIsPdfView] = useState<PropData | null>();




  const handleClickShowPdf = (data: PropData) => {
    setIsPdfView(data);
    setShowPDF(true);
  };
  const handleClickShowPdfClose = () => {
    setIsPdfView(null);
    setShowPDF(false);
  };

  const getProductNickName = (name: string) => {
    if (name?.length > 0) {
      const lastIndex = name?.lastIndexOf('_');
      const na = name.slice(0, lastIndex + 1);

      return na.substring(0, na.length - 1);
    } else {
      return '';
    }
  };

  const bind = useLongPress((val: any) => {
    handleMouseDown();
    onChange(true, documentData[parseInt(val.target.id.replace('doc', ''))])
  });

  // const Viewer = lazy(() => import('@phuocng/react-pdf-viewer'));

  return (
    <>
      {documentData?.map((val, i) => {
        const isPdf = val?.document_url?.[0]?.includes('.pdf');
        return (
          <>
            {isGrid && (
              <Grid item xs={6}>
                <Card
                  id={'doc' + i}
                  {...bind()}
                  onClick={() => !isCheckIcon &&
                    handleClickShowPdf({
                      data: val?.document_url,
                      isPDF: isPdf,
                    })
                  } key={i} sx={{ ...documentViewCardStyle.mainBoxSx, ...cardStyle } as SxProps<Theme>}>
                  {isPdf && (
                    <Box id={'doc' + i} sx={documentViewCardStyle.dummyStateSx}>
                      <DummyDocumentIcon id={'doc' + i}
                      />
                    </Box>
                  )}
                  {!isPdf && (
                    <CardActionArea id={'doc' + i}>
                      <CardMedia
                        id={'doc' + i}
                        sx={documentViewCardStyle.isEnlargedSx}
                        component="img"
                        image={val?.document_url?.[0]}
                        alt="img"
                      />
                    </CardActionArea>
                  )}
                  <Box id={'doc' + i} sx={documentViewCardStyle.cardNameSx}>
                    <Typography id={'doc' + i}>{cardName}</Typography>
                  </Box>
                  {isCheckIcon && (
                    <CheckBox
                      sx={{ position: 'absolute', top: 10, right: 0 }}
                      checked={checked.includes(val.id)}
                      onChange={(e, checked) => onChange(checked.target.checked, val)}
                    />
                  )}
                  <Stack id={'doc' + i} sx={{ px: 1.4, py: 1.4 }} direction={'column'}>
                    <Typography id={'doc' + i} sx={documentViewCardStyle.nickName}>
                      {getProductNickName(nickName?.[0]?.split?.('/')?.pop()) ?? ''}
                    </Typography>
                    <Typography id={'doc' + i} sx={documentViewCardStyle.purchaseDateSx}>
                      {val.is_active && val.valid_to
                        ? `${`Valid till ${moment(val.valid_to).format('DD MMM, YY')}`}`
                        : `${`Purchased on ${moment(val.purchased_on).format('DD MMM, YY')}`}`}
                    </Typography>
                  </Stack>
                </Card>
              </Grid>
            )}
          </>
        );
      })}
      {showPDF && (
        <DailogModal content="View Document" open={showPDF} onClose={handleClickShowPdfClose}>
          {isPdfView?.isPDF && (
            <Box>
              <div style={{ zoom: '50%' }}>
                {(isPdfView?.data as string[])?.map((v: string, index: number) => {
                  return <PdfViewer url={v} />
                })}
              </div>
            </Box>
          )}

          {!isPdfView?.isPDF && (
            <Box>
              {(isPdfView?.data as string[])?.map((v: string, index: number) => {
                return <img key={index} width={'100%'} height={'100%'} src={v} alt="" />;
              })}
            </Box>
          )}
        </DailogModal >
      )}
    </>
  );
};
