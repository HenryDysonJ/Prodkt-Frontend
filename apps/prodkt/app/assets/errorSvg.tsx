
// export function ErrorIcon(props: IconProps) {
//     const { rootStyle, ...rest } = props;
//     const rootSx = {
//       width: 88,
//       height: 88,
//       ...rootStyle,
//     };
//     return (
//       <SvgIcon
//         xmlns="http://www.w3.org/2000/svg"
//         sx={rootSx} {...rest}
//         fill="none"
//         viewBox="0 0 88 88"
//       >
//         <g clipPath="url(#clip0_538_2012)">
//           <g>
//             <g>
//               <path
//                 fill="#DF3813"
//                 d="M44 0C19.697 0 0 19.697 0 44s19.697 44 44 44 44-19.697 44-44S68.303 0 44 0zm-5.792 16.552c0-1.272 1.031-2.32 2.303-2.32h6.96c1.273 0 2.321 1.03 2.321 2.302v35.578c0 1.272-1.031 2.32-2.303 2.32h-6.96c-1.273 0-2.321-1.03-2.321-2.302V16.552zM44 73.769a6.712 6.712 0 01-6.703-6.703A6.712 6.712 0 0144 60.362a6.712 6.712 0 016.703 6.704A6.712 6.712 0 0144 73.769z"
//               ></path>
//             </g>
//           </g>
//         </g>
//         <defs>
//           <clipPath id="clip0_538_2012">
//             <path fill="#fff" d="M0 0H88V88H0z"></path>
//           </clipPath>
//         </defs>
//       </SvgIcon>
//     );
//   }

import * as React from 'react';

const ErrorSvg = (props: React.SVGProps<SVGSVGElement>): JSX.Element => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="88"
        height="88"
        fill="none"
        viewBox="0 0 88 88"
    >
        <g clipPath="url(#clip0_538_2012)">
            <g>
                <g>
                    <path
                        fill="#DF3813"
                        d="M44 0C19.697 0 0 19.697 0 44s19.697 44 44 44 44-19.697 44-44S68.303 0 44 0zm-5.792 16.552c0-1.272 1.031-2.32 2.303-2.32h6.96c1.273 0 2.321 1.03 2.321 2.302v35.578c0 1.272-1.031 2.32-2.303 2.32h-6.96c-1.273 0-2.321-1.03-2.321-2.302V16.552zM44 73.769a6.712 6.712 0 01-6.703-6.703A6.712 6.712 0 0144 60.362a6.712 6.712 0 016.703 6.704A6.712 6.712 0 0144 73.769z"
                    ></path>
                </g>
            </g>
        </g>
        <defs>
            <clipPath id="clip0_538_2012">
                <path fill="#fff" d="M0 0H88V88H0z"></path>
            </clipPath>
        </defs>
    </svg>
);
export default ErrorSvg;
