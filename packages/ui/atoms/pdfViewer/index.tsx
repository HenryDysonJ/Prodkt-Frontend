import type { SxProps, Theme } from '@mui/material';
import { Box, Typography } from '@mui/material';
import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

import { pdfViewerStyle } from './style';

export interface PdfViewerProps {
  className?: string;
  sx?: SxProps<Theme>;
  url: string;
};


export const PdfViewer = (props: PdfViewerProps): JSX.Element => {
  const { url = '', className = '', sx = {}, ...rest } = props;

  // Create new plugin instance
  // const defaultLayoutPluginInstance = defaultLayoutPlugin();

  const pdfVersion = "3.9.179"
  const pdfWorkerUrl = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfVersion}/pdf.worker.js`

  return (
    <Box sx={[{ ...pdfViewerStyle.rootSx }, ...(Array.isArray(sx) ? sx : [sx])]} className={`${className}`}  {...rest}>
      {
        url?.length > 0 &&
        <Worker workerUrl={pdfWorkerUrl}>
          <Viewer
            fileUrl={url}
            enableSmoothScroll
          // plugins={[
          //   // Register plugins
          //   defaultLayoutPluginInstance,
          // ]}

          />
        </Worker>
      }
    </Box>
  );
}





