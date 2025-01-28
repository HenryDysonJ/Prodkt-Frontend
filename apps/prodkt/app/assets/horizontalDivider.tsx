import * as React from 'react';

const HorizontalDivider = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
  <svg xmlns="http://www.w3.org/2000/svg" width={2} height={237} viewBox="0 0 2 237" fill="none" {...props}>
    <path d="M1 1v235" stroke="#2774CF" strokeOpacity={0.3} strokeLinecap="round" strokeDasharray="4 4" />
  </svg>
);
export default HorizontalDivider;
