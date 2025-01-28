import { PaletteColorOptions } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface TypeBackground {
    surface?: {
      gradient?: string;
      default?: string;
      mainGradient?: string;
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      A100?: string;
      A200?: string;
      A300?: string;
    };
  }

  interface TypeText {
    text?: {
      100?: string;
      200?: string;
      300?: string;
      400?: string;
      500?: string;
      600?: string;
      700?: string;
      800?: string;
      900?: string;
      A100?: string;
      A200?: string;
      A300?: string;
    };
  }

  interface PaletteColor {
    default?: string;
    gradient?: string;
    mainGradient?: string;
    100?: string;
    200?: string;
    300?: string;
    400?: string;
    500?: string;
    600?: string;
    700?: string;
    800?: string;
    900?: string;
    A100?: string;
    A200?: string;
    A300?: string;
  }
  interface Palette {
    100?: PaletteColor;
    200?: PaletteColor;
    300?: PaletteColor;
    400?: PaletteColor;
    500?: PaletteColor;
    600?: PaletteColor;
    700?: PaletteColor;
    800?: PaletteColor;
    900?: PaletteColor;
    A100?: PaletteColor;
    A200?: PaletteColor;
    A300?: PaletteColor;
  }
  interface PaletteOptions {
    100?: PaletteColorOptions;
    200?: PaletteColorOptions;
    300?: PaletteColorOptions;
    400?: PaletteColorOptions;
    500?: PaletteColorOptions;
    600?: PaletteColorOptions;
    700?: PaletteColorOptions;
    800?: PaletteColorOptions;
    900?: PaletteColorOptions;
    A100?: PaletteColorOptions;
    A200?: PaletteColorOptions;
    A300?: PaletteColorOptions;
  }
}

export const lightTheme = {
  palette: {
    common: {
      black: '#000',
      white: '#fff',
    },
    primary: {
      light: '#5D9DEF',
      main: '#0E70EB',
      dark: '#2F82EB',
      darker: '#E6EEFA',
      darked: '#B8D4F6',
      lighter: '#8BB9F3',
      50: '#EAF3FF',
      100: '#E6EEFA',
      200: '#DCE9FA',
      300: '#B8D4F6',
      500: '#EAF2FE',
      700: '#E8F2FF',
      800: '#EBF2FA',
      900: '#F0F4FA',
      A200: '#FFF8EB',
      A100: '#EBF1FA',
      A300: '#FFFFFF',
      A400: '#E6EEFA',
      A500: '#e6eefa',
      A600: '#226FD1',
      A700: '#E6EEFA',
      A800: '#EBF2FA',
      A900: '#E6EEFA',
      B100: '#226FD1',
      B200: '#5D9DEF',
      B300: '#B8D4F6',
      B400: '#13990A',
      B500: '#226FD1',
      B600: '#0E70EB',
      B700: '#0E70EB',
      B800: '#5D9DEF',
      B900: '#D2E2FA',
      C100: '#E6EEFA',
      C200: '#247FF2'
    },
    secondary: {
      light: '#FFDEB0',
      main: '#FF980E',
      dark: '#FFCA80',
      lighter: '#FFF2E0',
      100: '#FFA400',
      200: '#FFDEB3',
      300: '#FFEDD6',
      500: '#FEF9F0',
      600: '#FAFAFA',
      700: '#FFFAF0',
      800: '#FF980E80',
      400: '#D75257',
      900: '#FAF3E6',
      A100: '#ffdeb3',
      A200: '#FFF2E0',
      A300: '#FFF8EB',
      A400: '#FFF8EB',
      A500: '#ffff',
      A600: '#FEA062',
      A700:"#FFF4E4"
    },
    grey: {
      100: '#F2F2F2',
      200: '#E6EEFA',
      300: '#CCCCCC',
      400: '#B9B9B9',
      500: '#A6A6A6',
      600: '#939393',
      700: '#7F7F7F',
      800: '#6C6C6C',
      900: '#595959',
      A100: '#464646',
      A200: '#333333',
      A300: '#E9E9E9',
      A400: '#F1F3F5',
      A500: '#666666',
      A600: '#D3D3D3',
      A700: '#929292',
      A800: '#212529',
      A900: '#DFDFDF',
      B100: '#B8D4F6',
      B200: '#B8D4F6',
      B300: '#F2F2F2',
      B400: '#313840',
      B500: '#FFFFFF',
      B600: '#464646',
      B700: '#212529',
      B800: '#E6EEFA',
      B900: '#FFFFFF',
      C100: '#DFDFDF',
      C200: '#E6EEFA',
      C300: '#666666',
      C400: '#DFDFDF',
      C500: '#FFFFFF',
      C600: '#B9B9B9',
      C700: '#212529',
      C800: '#B8D4F6'
    },
    text: {
      100: '#BCC3CC',
      200: '#3B3B3B',
      300: '#8E959D',
      400: '#3B3B3B',
      500: '#60666F',
      700: '#313840',
      800: '#002B5B',
      900: '#030911',
      A100: '#010811',
      A200: '#262626',
      A300: '#3D3D3D',
      A400: '#0E1824',
      A500: '00000029',
      A600: '#313840',
      A700: '#313840',
      A800: '#FFFFFF',
      A900: '#3B3B3B',
      B100: '#F5F5F5',
      B200: '#FFFFFF',
      B300: '#FFFFFF',
      B400: '#BCC3CC',
      B500: '#B8D4F6',
      B600: '#3B3B3B'
    },
    background: {
      surface: {
        default: 'linear-gradient(to bottom, #E8F2FF, #FFFFFF)',
        gradient: 'linear-gradient(to right, #FFF2E0, #FFFDFA)',
        mainGradient: 'linear-gradient(to right, #FFE0E2, #FFFDFA)',
        20: '#FFFFFF',
        50: '#F3F5F7',
        100: '#FFFFFF',
        200: '#FFFFFF',
        300: '#F3F5F7',
        500: '#EDEFF1',
        600: '#EDEDED',
        700: '#E7E9EC',
        900: '#E2E4E6',
        A100: '#E7FAE6',
        A200: '#EBF3FF',
        A300: '#F2F2F2',
        A400: '#FFFFFF',
        A500: '#FFFFFF',
        A600: 'rgba(0, 0, 0, 0.5)',
        A700: '#EBF2FF',
        A800: '#FFFFFF',
        A900: '#E6EEFA',
        B100: '#E6EEFA',
        B200: '#0E70EB',
        B300: '#F0F4FA',
        B400: '#FFFFFF',
        B500: '#FFFFFF',
        B600: '#464646',
        B700: '#B8D4F6',
        B800: '#E0EEFF',
        B900: 'transparent',
        C100: '#E6EEFA',
        C200: '#464646',
        C300: '#0e70eb',
        C400: '#60666f',
        C500: '#E6EEFA',
        C600: '#E6EEFA',
        C700: '#B8D4F6',
        C800: '#FFFFFF',
        C900: '#FFFFFF',
        D100: '#E7FAE6',
        D200: '#0D0E11',
        D300: '#E0EEFF',
        D400: '#F0F4FA',
        D500: '#0E70EB',
        D600: 'rgba(0, 0, 0, 0.5)',
        D700: '#FFF',
        D800: '#030911'
      },
    },
    icon: {
      100: '#8E959D',
      200: '#90A2B9',
    },
    success: {
      200: '#DBF1E8',
      300: '#D7F5E2',
      400: "#B6E0CE",
      500: '#A9F5C5',
      600: '#2DBA8B',
      700: '#7BF5A8',
      800: "#1B9863",
      900: '#25C460',
      A100: '#13990A',
      A200:"#42A87F",
    },
    error: {
      100:"#FF5757",
      200:"#FFF1F1",
      300: '#FFE0E2',
      500: '#FFB0B5',
      700: '#FF8088',
      800: '#F45560',
      900: '#F44F5A',
    },
    divider: {
      50: '#91B1D9',
      100: '#8E959D3D',
      200: '#E6EEFA',
    },
  },
};
