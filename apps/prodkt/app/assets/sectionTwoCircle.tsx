import * as React from 'react';

const SecTwoCircleIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width={159} height={169} viewBox="0 0 159 169" fill="none" {...props}>
    <g filter="url(#filter0_d_1_1945)">
      <circle cx={79.6372} cy={39.6373} r={28.7699} transform="rotate(-31.957 79.637 39.637)" fill="#74A0FF" />
    </g>
    <defs>
      <filter
        id="filter0_d_1_1945"
        x={0.863281}
        y={10.8635}
        width={157.548}
        height={157.548}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix in="SourceAlpha" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
        <feOffset dy={50} />
        <feGaussianBlur stdDeviation={25} />
        <feColorMatrix values="0 0 0 0 0.504725 0 0 0 0 0.492571 0 0 0 0 0.605 0 0 0 0.2 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_1_1945" />
        <feBlend in="SourceGraphic" in2="effect1_dropShadow_1_1945" result="shape" />
      </filter>
    </defs>
  </svg>
);
export default SecTwoCircleIcon;
