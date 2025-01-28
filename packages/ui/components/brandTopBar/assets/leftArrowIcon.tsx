import * as React from 'react';
const LeftArrowIcon = (props: any) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    width={props?.width ? props?.width : 16}
    height={props?.height ? props?.height : 16}
    fill='none'
    {...props}
  >
    <path
      fill={props?.color ? props?.color : '#4E585E'}
      d='M4 7.994c0-.31.113-.622.338-.851l5.712-5.805a1.11 1.11 0 0 1 1.614.02c.44.471.432 1.224-.02 1.683L6.771 7.994l4.885 4.965c.451.46.46 1.212.02 1.682a1.11 1.11 0 0 1-1.615.02L4.338 8.847A1.212 1.212 0 0 1 4 7.994Z'
    />
  </svg>
);
export default LeftArrowIcon;
