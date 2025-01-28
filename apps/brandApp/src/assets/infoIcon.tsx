import { SvgIcon } from '@mui/material';

const InfoIcon = (props: any) => {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    width: '20px',
    height: '19px',
    marginTop: '12px',
    // color: '#29302b',
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns='http://www.w3.org/2000/svg' width='24px' height='24px' viewBox='0 0 24 24' {...rest} sx={rootSx}>
      <path
        id='icons8-info-50'
        d='M10.729,4a6.729,6.729,0,1,0,6.729,6.729A6.737,6.737,0,0,0,10.729,4Zm0,1.009a5.72,5.72,0,1,1-5.72,5.72A5.712,5.712,0,0,1,10.729,5.009Zm0,2.355a.673.673,0,1,0,.673.673A.673.673,0,0,0,10.729,7.365Zm-.008,2.348a.5.5,0,0,0-.5.512v3.7a.5.5,0,1,0,1.009,0v-3.7a.5.5,0,0,0-.513-.512Z'
        transform='translate(-4 -4)'
      />
    </SvgIcon>
  );
};
export default InfoIcon;
