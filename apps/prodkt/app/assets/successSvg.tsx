import * as React from 'react';

const SuccessSvg = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="88"
    height="88"
    fill="none"
    viewBox="0 0 88 88"
  >
    <g clipPath="url(#clip0_1_2933)">
      <mask
        id="mask0_1_2933"
        style={{ maskType: "luminance" }}
        width="88"
        height="88"
        x="0"
        y="0"
        maskUnits="userSpaceOnUse"
      >
        <path fill="#fff" d="M88 0H0v88h88V0z"></path>
      </mask>
      <g mask="url(#mask0_1_2933)">
        <path
          fill="#0E70EB"
          d="M53.39 1.663a43.365 43.365 0 1032.945 51.728A43.374 43.374 0 0053.389 1.663zm15.767 34.172L39.027 64.28a3.642 3.642 0 01-3.169 1.043 4.664 4.664 0 01-2.682-1.974l-10.36-16.29a2.394 2.394 0 01.73-3.29l4.023-2.562a2.376 2.376 0 013.278.727L37.6 52.519l25.01-23.621a2.41 2.41 0 013.378.098l3.278 3.476a2.388 2.388 0 01-.109 3.362z"
        ></path>
      </g>
    </g>
    <defs>
      <clipPath id="clip0_1_2933">
        <path fill="#fff" d="M0 0H88V88H0z"></path>
      </clipPath>
    </defs>
  </svg>
);
export default SuccessSvg;
