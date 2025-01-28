import type { SxProps } from '@mui/material';

interface UploadDocumentsStyleProps {
  [key: string]: SxProps;
}

export const uploadDocumentsStyle: UploadDocumentsStyleProps = {
  rootSx: {
    // ::-webkit-scrollbar {
    //   width: "6px"
    // }
    // /* Track */
    // ::-webkit-scrollbar-track {
    //   boxShadow: 'inset 0 0 5px grey',
    //   borderRadius: "10px"
    // }
    // /* Handle */
    // ::-webkit-scrollbar-thumb {
    //   background: 'red',
    //   borderRadius: '10px'
    // }
    // /* Handle on hover */
    // ::-webkit-scrollbar-thumb:hover {
    //   background: #b30000
    // }
  },
  buttonStyleSx: {
    px: 1.5,
    py: 1.5,
  },
  questionCardSubSx: {
    pb: 1,
    paddingBottom: '16px',
  },
  headerSx: {
    px: 2.5,
    pt: 2.5,
    pb: 2.5,
  },
  footerSx: {
    px: 2.5,
    pb: 2.5,
  },
};
