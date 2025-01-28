import { SvgIcon, SvgIconProps, SxProps } from '@mui/material';

interface IconProps extends SvgIconProps {
  rootStyle?: SxProps;
}

export function PhoneIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 24,
    width: 24,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" sx={rootSx} {...rest} viewBox="0 0 24 24">
      <g data-name="Group 113646" transform="translate(-11 -48)">
        <path data-name="Rectangle 59110" transform="translate(11 48)" fill="none" d="M0 0H24V24H0z" />
        <path
          d="M24.435 18.755a1.342 1.342 0 01.558 1.454 3.8 3.8 0 01-2.1 2.5 3.121 3.121 0 01-1.325.212 11.788 11.788 0 01-7.814-4.276c-2.578-3.093-2.936-5.664-2.92-6.921a2.63 2.63 0 01.75-1.83 7.775 7.775 0 011.463-1.1 1.344 1.344 0 011.789.367l2.014 2.77a1.349 1.349 0 01-.137 1.754l-.594.594a.339.339 0 00-.009.469l2.746 2.974a.339.339 0 00.465.03l.882-.735a1.35 1.35 0 011.662-.056c.447.324 1.371.986 2.57 1.794zM21.7 21.576a2.315 2.315 0 001.9-1.445.346.346 0 00-.13-.411 68.638 68.638 0 01-2.186-1.509.336.336 0 00-.413.016l-.927.773a1.353 1.353 0 01-1.862-.122l-3.182-3.45a1.354 1.354 0 01.038-1.876l.619-.618a.339.339 0 00.035-.438l-1.662-2.283a.337.337 0 00-.456-.087c-.306.2-1.228.979-1.283 1.617a6.419 6.419 0 00.58 2.765A12.471 12.471 0 0014.8 17.78a10.915 10.915 0 002.833 2.429 9.317 9.317 0 004.067 1.367z"
          transform="translate(5.063 44.236)"
          fill="#60666f"
        />
      </g>
    </SvgIcon>
  );
}

export function SupportIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 24,
    width: 24,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" sx={rootSx} {...rest} viewBox="0 0 24 24">
      <g data-name="Group 113646" transform="translate(-11 -48)">
        <path data-name="Rectangle 59110" transform="translate(11 48)" fill="none" d="M0 0H24V24H0z" />
        <path
          d="M4 2v12.772h10.218V2zm1.277 1.277h7.663v10.218H5.277zm1.277 1.916V6.47h5.109V5.193zm0 3.193v1.277h2.555V8.386zm3.832 0v1.277h1.277V8.386zM6.554 10.3v1.277h2.555V10.3zm3.832 0v1.277h1.277V10.3z"
          transform="translate(13.891 51.614)"
          fill="#60666f"
        />
      </g>
    </SvgIcon>
  );
}
