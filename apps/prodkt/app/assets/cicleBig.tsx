import * as React from 'react';

const CircleBigIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width={122} height={270} viewBox="0 0 122 270" fill="none" {...props}>
    <g filter="url(#filter0_d_1_2232)">
      <circle cx={125.046} cy={95.0463} r={74.365} transform="rotate(19.657 125.046 95.046)" fill="#74A0FF" />
    </g>
    <defs>
      <filter
        id="filter0_d_1_2232"
        x={0.660645}
        y={20.6611}
        width={248.771}
        height={248.77}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={50} />
        <feGaussianBlur stdDeviation={25} />
        <feColorMatrix values="0 0 0 0 0.505882 0 0 0 0 0.494118 0 0 0 0 0.603922 0 0 0 0.2 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_2232" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_2232" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default CircleBigIcon;
