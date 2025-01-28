import * as React from 'react';

const VerticalDivider = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width={237} height={2} viewBox="0 0 237 2" fill="none" {...props}>
    <path d="M236 1H1" stroke="#2774CF" strokeOpacity={0.3} strokeLinecap="round" strokeDasharray="4 4" />
  </svg>
);
export default VerticalDivider;
