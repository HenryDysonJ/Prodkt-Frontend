import * as React from 'react';

const CircleSmallIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width={96} height={192} viewBox="0 0 96 192" fill="none" {...props}>
    <g filter="url(#filter0_d_1_1943)">
      <circle
        cx={7.24164}
        cy={53.2415}
        r={38.6445}
        transform="rotate(-31.957 7.242 53.242)"
        fill="url(#paint0_linear_1_1943)"
      />
    </g>
    <defs>
      <filter
        id="filter0_d_1_1943"
        x={-81.4081}
        y={14.5918}
        width={177.299}
        height={177.299}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={50} />
        <feGaussianBlur stdDeviation={25} />
        <feColorMatrix values="0 0 0 0 0.504725 0 0 0 0 0.492571 0 0 0 0 0.605 0 0 0 0.2 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_1943" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1943" result="shape" />
      </filter>
      <linearGradient
        id="paint0_linear_1_1943"
        x1={45.8861}
        y1={14.597}
        x2={-31.4029}
        y2={91.886}
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#74A0FF" />
        <stop offset={1} stopColor="#74A0FF" />
      </linearGradient>
    </defs>
  </svg>
);
export default CircleSmallIcon;
