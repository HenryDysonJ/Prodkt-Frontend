import { SvgIcon, SvgIconProps, SxProps } from '@mui/material';

interface IconProps extends SvgIconProps {
  rootStyle?: SxProps;
}

export function SearchAddIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 60.692,
    width: 62.06,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" sx={rootSx} {...rest} viewBox="0 0 62.06 60.692">
      <g data-name="Group 106183" transform="translate(-34 7.885)">
        <path
          data-name="Rectangle 56640"
          d="M0 0h44v26a6 6 0 01-6 6H6a6 6 0 01-6-6V0z"
          transform="translate(36)"
          fill="#6b968b"
        />
        <path data-name="Rectangle 56641" transform="translate(35 -6)" fill="#608778" d="M0 0H46V6H0z" />
        <path data-name="Rectangle 56642" transform="translate(52 -6)" fill="#f9b659" d="M0 0H13V24H0z" />
        <path
          data-name="Path 6813"
          d="M71.678.256H35v-7.141h46.231V.256h-5.307"
          fill="none"
          stroke="#294f61"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          data-name="Path 6814"
          d="M51.615 11.091V-6.685h13.047v24.282H51.615"
          fill="none"
          stroke="#294f61"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          data-name="Path 6815"
          d="M36.447 7.745l-.182 14.291s-.193 5.68 1.755 8.014 5.818 2.177 5.818 2.177h10.4"
          fill="none"
          stroke="#294f61"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          data-name="Path 6816"
          d="M79.787 10.461V.636"
          fill="none"
          stroke="#294f61"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          data-name="Path 6817"
          d="M36.445 3.009V.636"
          fill="none"
          stroke="#294f61"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <circle
          data-name="Ellipse 129460"
          cx={15}
          cy={15}
          r={15}
          transform="translate(56 11)"
          fill="#f9b659"
          stroke="#294f61"
          strokeWidth={2}
        />
        <circle
          data-name="Ellipse 129459"
          cx={10}
          cy={10}
          r={10}
          transform="translate(61 16)"
          fill="#fff"
          stroke="#294f61"
          strokeLinecap="round"
          strokeWidth={2}
          strokeDasharray="50 9"
        />
        <path
          data-name="Path 6820"
          d="M81.232 37.57l5.114 5.28"
          fill="none"
          stroke="#294f61"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <rect
          data-name="Rectangle 56674"
          width={5.057}
          height={9.391}
          rx={2.528}
          transform="rotate(-43 99.414 -85.322)"
          fill="#6b968b"
          stroke="#294f61"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          strokeDasharray="13 3"
        />
        <path
          data-name="Path 6821"
          d="M68.229 27.527v-2.531"
          fill="none"
          stroke="#f9b659"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          data-name="Path 6822"
          d="M71.119 27.527v-2.531"
          fill="none"
          stroke="#f9b659"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
        <path
          data-name="Path 6823"
          d="M74.008 27.527v-2.531"
          fill="none"
          stroke="#f9b659"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
        />
      </g>
    </SvgIcon>
  );
}

export function StarIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 11.999,
    width: 12.584,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" sx={rootSx} {...rest} viewBox="0 0 12.584 11.999">
      <path
        d="M9.905 4.773l1.668 3.742 4.073.43a.3.3 0 01.172.529l-3.043 2.742.85 4.007a.3.3 0 01-.45.327L9.627 14.5l-3.548 2.05a.3.3 0 01-.45-.327l.85-4.007-3.043-2.742a.3.3 0 01.172-.529l4.073-.43 1.668-3.742a.3.3 0 01.556 0z"
        transform="translate(-3.335 -4.593)"
        fill="#e9e9e9"
      />
    </SvgIcon>
  );
}

export function ColorStarIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 11.999,
    width: 12.584,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" sx={rootSx} {...rest} viewBox="0 0 12.584 11.999">
      <defs>
        <linearGradient id="a" x1={0.137} y1={0.045} x2={0.841} y2={1.032} gradientUnits="objectBoundingBox">
          <stop offset={0} stopColor="#ffda1c" />
          <stop offset={1} stopColor="#feb705" />
        </linearGradient>
      </defs>
      <path
        d="M9.905 4.773l1.668 3.742 4.073.43a.3.3 0 01.172.529l-3.043 2.742.85 4.007a.3.3 0 01-.45.327L9.627 14.5l-3.548 2.05a.3.3 0 01-.45-.327l.85-4.007-3.043-2.742a.3.3 0 01.172-.529l4.073-.43 1.668-3.742a.3.3 0 01.556 0z"
        transform="translate(-3.335 -4.593)"
        fill="url(#a)"
      />
    </SvgIcon>
  );
}

export function HeartIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 24,
    width: 24,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" sx={rootSx} {...rest} viewBox="0 0 24 24">
      <g data-name="Group 118193" transform="translate(-254 -381)">
        <path
          d="M13.545 24.08l-.272-.225c-.427-.354-1-.744-1.664-1.2C8.977 20.862 5 18.149 5 13.821a4.86 4.86 0 018.545-3.131 4.86 4.86 0 018.545 3.131c0 4.327-3.977 7.041-6.609 8.837-.664.452-1.237.843-1.664 1.2z"
          transform="translate(252.455 376.46)"
          fill="#d3d3d3"
        />
        <path data-name="Rectangle 59919" transform="translate(254 381)" fill="none" d="M0 0H24V24H0z" />
      </g>
    </SvgIcon>
  );
}

export function ColorHeartIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 24,
    width: 24,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" sx={rootSx} {...rest} viewBox="0 0 24 24">
      <g data-name="Group 118192" transform="translate(-254 -381)">
        <path
          d="M13.545 24.08l-.272-.225c-.427-.354-1-.744-1.664-1.2C8.977 20.862 5 18.149 5 13.821a4.86 4.86 0 018.545-3.131 4.86 4.86 0 018.545 3.131c0 4.327-3.977 7.041-6.609 8.837-.664.452-1.237.843-1.664 1.2z"
          transform="translate(252.455 376.46)"
          fill="currentColor"
        />
        <path data-name="Rectangle 59919" transform="translate(254 381)" fill="none" d="M0 0H24V24H0z" />
      </g>
    </SvgIcon>
  );
}

export function DummyDocumentIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 26,
    width: 20,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" sx={rootSx} {...rest} viewBox="0 0 20 26">
      <path
        d="M7 0a4.008 4.008 0 00-4 4v18a4.008 4.008 0 004 4h12a4.008 4.008 0 004-4V8c0-1.062-.973-2.07-2.719-3.781-.242-.238-.5-.5-.75-.75s-.512-.477-.75-.719C17.07 1 16.063 0 15 0zm0 2h7.281C15 2.184 15 3.051 15 3.938V7a1 1 0 001 1h3c1 0 2 0 2 1v13a2 2 0 01-2 2H7a2 2 0 01-2-2V4a2 2 0 012-2zm.813 8A1 1 0 108 12h10a1 1 0 100-2H7.813zm0 4A1 1 0 108 16h8a1 1 0 100-2H7.813zm0 4A1 1 0 108 20h10a1 1 0 100-2H7.813z"
        transform="translate(-3)"
        fill="#ff980e"
      />
    </SvgIcon>
  );
}

export function CircleInfoIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 10.506,
    width: 10.506,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.506 10.506" sx={rootSx} {...rest}>
      <g data-name="Group 113639">
        <path
          data-name="icons8-info (1)"
          d="M7.253 2a5.253 5.253 0 105.253 5.253A5.261 5.261 0 007.253 2zm0 1.051a4.2 4.2 0 11-4.2 4.2 4.194 4.194 0 014.2-4.2zm-.525 1.575v1.051h1.05V4.626zm0 2.1v3.153h1.05V6.728z"
          transform="translate(-223.747 -196.748) translate(221.747 194.748)"
          fill="#bdbdbd"
        />
      </g>
    </SvgIcon>
  );
}
