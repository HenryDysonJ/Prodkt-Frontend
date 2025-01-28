import type { SxProps } from '@mui/material';
import LoginBanner from "./../../assets/loginBanner.png";


interface loginStyleProps {
  [key: string]: SxProps;
}

export const loginStyle: loginStyleProps = {

    rootSx : {
        width: '100%',
        height:'calc(100vh - 80px)',
        overflow: 'hidden'
    },
    subrootSx: {
        height: '100%',
    },
    cardParentSx: {
       height: '100%',
       backgroundImage: `url('${LoginBanner}')`,
       backgroundRepeat: 'no-repeat',
       backgroundPosition: 'center'
    },
};
