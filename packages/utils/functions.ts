import { envConfig } from '@core/envconfig';
import InfoRedIcon from '@core/ui/atoms/icons/infoRedIcon';
import { Theme } from '@mui/material';
import moment from 'moment';

import { httpRequest } from './api';

export const camalize = function camalize(str: string) {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, (chr: string) => chr.toUpperCase());
};

export const makeid = () => {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  const charactersLength = characters.length;
  for (let i = 0; i < 5; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
};

export const routeTo = (store: any, path: any, routeAfter = 1000) =>
  setTimeout(() => {
    store.setState({ route: path });
  }, routeAfter);

/* eslint-disable implicit-arrow-linebreak */
export const parseJwt = (token: any) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};

export interface LocationData {
  address?: string;
  latitude?: number | string;
  longitude?: number | string;
  city?: string;
  location?: string;
  code?: string;
  country_name?: string;
}

export const getCoords = (): Promise<LocationData | null> => {
  return new Promise<LocationData | null>((resolve, reject) => {
    new Promise<GeolocationPosition>((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    }).then((pos) => {
      const lat = pos.coords.latitude;
      const long = pos.coords.longitude;

      fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${long}&key=AIzaSyC460AqqU6PgMO4s5wJvE5GLge9evj4r6o`,
      )
        .then((data) => data.json())
        .then(({ results }) => {
          if (Array.isArray(results)) {
            const [info] = results;
            const city = info?.address_components?.find((comp: any) => comp?.types?.includes('locality'));
            const address = info?.address_components?.find((comp: any) => comp?.types?.includes('political'));
            const location = info?.address_components?.find((comp: any) =>
              comp?.types?.includes('administrative_area_level_1'),
            );
            const code = info?.address_components?.find((comp: any) => comp?.types?.includes('country'));
            const _obj: LocationData = {};
            _obj['address'] = `${address?.long_name ?? ''}, ${city?.long_name}, ${location?.long_name}`;
            _obj['latitude'] = lat;
            _obj['longitude'] = long;
            _obj['city'] = city?.long_name;
            _obj['location'] = location?.long_name;
            _obj['code'] = code?.short_name;
            _obj['country_name'] = code?.long_name;
            resolve(_obj);
          }
        })
        .catch((err) => {
          console.log(err);
          reject(null);
        });
    });
  });
};

export const UploadFiles = async (files: any, type?: string) => {

  // if (!files?.length > 0) {
  //   return
  // }
  let response = [];
  for (const iterator of files) {
    const formData = new FormData();
    formData.append('file', iterator);

    const res = await httpRequest('POST', `${envConfig.api_url}/file_storage/upload_files`, formData, true);
    const value = type === 'fileName' ? {
      name: iterator?.name,
      url: res?.data?.data?.[0]?.url
    } :
      res?.data?.data?.[0]?.url
    return response = [...response, value]
  }
  return response
}
export const getMyProductDates = (type?: any, date?: any) => {
  const insurance: any = moment(date?.insurance_valid_to);
  const warranty: any = moment(date?.warranty_valid_to);

  if (type === 'insurance') {
    const start = moment().format('YYYY-MM-DD');
    const end = moment(insurance);
    end.diff(start, 'days');

    if (end.diff(start, 'days') < 7) {
      return {
        title: 'Insurance Expiring Soon',
        color: 'secondary.main',
        icon: InfoRedIcon({}),
      };
    } else if (end.diff(start, 'days') > start) {
      return {
        title: 'Insurance Expired',
        color: 'error.900',
        icon: InfoRedIcon({}),
      };
    } else if (end.diff(start, 'days') > 0) {
      return {
        title: 'Insurance Fin Service',
        color: 'text.500',
      };
    } else {
      return {
        title: 'Protect your device',
        color: 'primary.main',
      };
    }
  } else if (type === 'available') {
    const start = moment().format('YYYY-MM-DD');
    const end = moment(date);
    end.diff(start, 'days');

    if (end.diff(start, 'days') > 0) {
      return {
        title: 'Amc Fin Service',
        color: 'text.500',
      };
    } else {
      return {
        title: 'No Data Available',
        color: 'text.500',
      };
    }
  } else if (type === 'warranty') {
    const start = moment().format('YYYY-MM-DD');
    const end = moment(warranty);
    end.diff(start, 'days');

    if (end.diff(start, 'days') > 0) {
      return {
        title: 'Warranty Expiring on ' + moment(warranty).format('DD MMM YY'),
        color: 'text.500',
      };
    } else if (end.diff(start, 'days') > 1) {
      return {
        title: 'Warranty Expiring Soon',
        color: 'secondary.main',
        icon: warranty.diff(start, 'days') > 0 ? null : InfoRedIcon({}),
      };
    } else {
      return {
        title: 'warranty Expired',
        color: 'error.900',
        icon: warranty.diff(start, 'days') > 0 ? null : warranty.diff(start, 'days') > 0 ? null : InfoRedIcon({}),
      };
    }
  }
};

export const isFutureDate = (date: any) => {
  const currentDate = new Date();
  const checkDate = new Date(date);
  return currentDate < checkDate;
};

export function getMobileOperatingSystem() {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const userAgent = navigator.userAgent || navigator.vendor || window.opera;

  // Windows Phone must come first because its UA also contains "Android"
  if (/windows phone/i.test(userAgent)) {
    return 'Windows Phone';
  }

  if (/android/i.test(userAgent)) {
    return 'Android';
  }
  // iOS detection from: http://stackoverflow.com/a/9039885/177710
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
    return 'iOS';
  }

  return 'unknown';
}

export function isStandalone(): boolean {
  const isStandalone = window.matchMedia("(display-mode: standalone)").matches;
  if (document.referrer.startsWith("android-app://")) {
    return true; // Trusted web app
  } else if ("standalone" in navigator || isStandalone) {
    return true;
  }
  return false;
}

export function isPWA(): boolean {
  const mediaQuery = window.matchMedia("(display-mode: standalone)").matches;
  return mediaQuery
}

export function isAlphaNumericCharacters(value: string) {
  const letters = /^[A-Za-z0-9_-]*$/;
  if (value?.length > 0) {
    if (value.match(letters)) {
      return true
    }
    return false
  }
  return true
}



export interface IColumnData {
    type?: Array<string>;
    name?: string;
    width?: number | string;
    variant?: any;
    [key: string]: any;
  }
  
  export interface IHeaderData {
    id: string;
    align?: string;
    disablePadding?: boolean;
    label: string;
    isSortable?: boolean;
    [key: string]: any;
  }
  
  const DEFAULT_HEADER_DATA: IHeaderData = {
    id: 'column',
    align: 'left',
    disablePadding: false,
    label: 'Column Name',
    isSortable: false,
  };
  
  export const getHeaderData = (headerData: Array<IHeaderData>) => {
    return headerData.map((column: IHeaderData) => ({
      ...DEFAULT_HEADER_DATA,
      ...column,
    }));
  };
  
  export const getDefaultTableProperties = (theme: Theme) => {
    if (!theme) throw new Error('Theme object is required to set color for UI elements');
    return {
      headerOptions: {
        fontSize: '14px',
        fontWeight: '600',
        color: '#4E585E',
        bgColor: '#F0F3F6',
        borderBottom: '0px solid #D9DBDD',
        padding: '10px 8px',
        borderRadius: 8,
        lineHeight: '20px',
        wordWrap: 'break-word',
      },
      rowOptions: {
        paddingTop: '6px',
        paddingBottom: '12px',
      },
      cellOptions: {
        fontSize: '14px',
        fontWeight: '500',
        color: '#02111A',
        bgColor: theme.palette.common.white,
        padding: '8px  !important',
        borderBottom: `1px solid #D9DBDD`,
      },
      noDataFound: {
        fontSize: '16px',
        fontWeight: '600',
        color: '#353448', // TODO: COLOR not in theme
        bgColor: '#F7F7F7', // TODO: COLOR not in theme
        text: '',
        component: null,
      },
      tableBackground: theme.palette.common.white,
      tableMinWidth: '100%',
  
      tableName: ' ',
      marginAll: '0px',
  
      dense: 'medium',
  
      paginationOption: {
        isEnable: false,
        rowPerPage: 25,
        rowsPerPageOptions: [5, 10, 25],
      },
      HeaderComponent: {
        variant: 'CUSTOM',
        component: '',
      },
  
      stickyOptions: {
        stickyHeader: true,
        stickyRight: [],
        stickyLeft: [],
      },
    };
  };