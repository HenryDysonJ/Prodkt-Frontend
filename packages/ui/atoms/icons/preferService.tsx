import { SvgIcon, SvgIconProps, SxProps } from '@mui/material';

interface IconProps extends SvgIconProps {
    rootStyle?: SxProps;
}

export function ServiceMaintenanceIcon(props: IconProps) {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        width: 25.161,
        height: 24.491,
        ...rootStyle,
    };
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 25.161 24.491"
            sx={rootSx}
            {...rest}
        >
            <path
                fill="#dfdfdf"
                stroke="#dfdfdf"
                strokeWidth="0.4"
                d="M19.511.2a8.042 8.042 0 00-5.36 2.268c-1.557 1.557-1.526 3.2-.942 5.169L10.856 9.99 5.895 5.028c0-.028 0-.058-.007-.087l-.237-1.132a.861.861 0 00-.37-.54L2.27 1.314a.862.862 0 00-1.071.113l-.719.719a.857.857 0 00-.111 1.063l1.924 2.976a.846.846 0 00.525.369l1.167.268a.916.916 0 00.1.008l4.964 4.966-2.9 2.9a4.657 4.657 0 00-4.2 1.851 4.7 4.7 0 003.492 7.507c.088 0 .177.007.265.007a4.689 4.689 0 004.671-5.141l1.874-1.868a2.087 2.087 0 00.517.88l5.733 5.736a2.144 2.144 0 003.02 0l1.207-1.209a2.137 2.137 0 000-3.018l-5.74-5.732a2.1 2.1 0 00-.879-.515l1.326-1.327c1.968.582 3.614.615 5.171-.942s2.756-4.459 2.074-6.627a.424.424 0 00-.305-.287.429.429 0 00-.4.113l-2.663 2.663a.419.419 0 01-.412.11l-.467-.125a3 3 0 01-2.114-2.113l-.125-.467a.424.424 0 01.112-.412l2.664-2.671A.426.426 0 0020.797.4a4.437 4.437 0 00-1.286-.2zm-.037.857c.11 0 .218.005.325.013l-2.1 2.1a1.282 1.282 0 00-.33 1.237l.125.469a3.853 3.853 0 002.716 2.716l.467.125a1.279 1.279 0 001.236-.332l2.094-2.094a7.179 7.179 0 01-2 5.023c-1.331 1.331-2.68 1.247-4.561.657a.428.428 0 00-.429.105l-7.392 7.392a.422.422 0 00-.12.362 3.841 3.841 0 01-6.818 2.92 3.863 3.863 0 01-.06-4.681 3.814 3.814 0 013.062-1.537 4.206 4.206 0 01.557.038.424.424 0 00.36-.12l7.392-7.39a.427.427 0 00.107-.432c-.59-1.879-.674-3.227.657-4.557a7.347 7.347 0 014.712-2.013zm-17.671.974l3.014 1.956.234 1.129-.879.877-1.166-.267L1.085 2.75zm3.714 3.827l4.734 4.736-.6.6-4.736-4.732.3-.3zm10.145.107a.427.427 0 00-.3.729l3.02 3.018a.426.426 0 00.6-.6l-3.017-3.018a.431.431 0 00-.303-.129zm-1.211 3.622a.427.427 0 00-.3.729l.605.6a.427.427 0 10.6-.6l-.6-.6a.431.431 0 00-.305-.129zm-1.509 1.509a.428.428 0 00-.3.729l.6.605a.429.429 0 00.605 0 .429.429 0 000-.605l-.605-.6a.419.419 0 00-.296-.129zm-1.504 1.513a.428.428 0 00-.3.73l.6.6a.427.427 0 00.605-.6l-.605-.605a.423.423 0 00-.3-.125zm4.189 1.351a1.242 1.242 0 01.759.355l5.735 5.735a1.28 1.28 0 010 1.811l-1.21 1.203a1.278 1.278 0 01-1.809 0l-5.736-5.736a1.267 1.267 0 01-.352-1.042l2.326-2.328a1.374 1.374 0 01.287-.002zm-5.7.16a.426.426 0 00-.3.729l.605.6a.426.426 0 00.6-.6l-.6-.605a.428.428 0 00-.303-.128zm-1.511 1.509a.43.43 0 00-.3.125.425.425 0 000 .6l.6.605a.427.427 0 10.6-.605l-.6-.6a.427.427 0 00-.298-.129zm7.967.068a.428.428 0 00-.3.73l4.227 4.225a.427.427 0 00.6-.6l-4.226-4.227a.43.43 0 00-.298-.132zm-1.207 1.207a.428.428 0 00-.3.73l4.227 4.226a.426.426 0 00.6-.6l-4.224-4.227a.43.43 0 00-.3-.132zm-8.96.145a.416.416 0 00-.11.015l-1.906.51a.431.431 0 00-.3.3l-.509 1.9a.427.427 0 00.108.412l1.394 1.394a.425.425 0 00.3.125.5.5 0 00.112-.013l1.9-.512a.425.425 0 00.3-.3l.51-1.9a.43.43 0 00-.11-.414l-1.384-1.395a.44.44 0 00-.302-.125zm-.128.9l1.046 1.046-.383 1.427-1.426.387L4.28 19.76l.382-1.429z"
                data-name="icons8-maintenance (1)"
            ></path>
        </SvgIcon>
    );
}

export function ServiceCloseIcon(props: IconProps) {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        width: 12,
        height: 12,
        ...rootStyle,
    };
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 12 12"
            sx={rootSx}
            {...rest}
        >
            <path
                fill="#fff"
                d="M18.259 6.97a.7.7 0 00-.492.217l-4.788 4.791-4.788-4.791a.705.705 0 10-1 1l4.788 4.791-4.785 4.788a.705.705 0 101 1l4.788-4.791 4.788 4.791a.705.705 0 101-1l-4.788-4.791 4.788-4.791a.705.705 0 00-.5-1.214z"
                transform="translate(-6.981 -6.97)"
            ></path>
        </SvgIcon>
    );
}

export function ServiceDoubleIcon(props: IconProps) {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        width: 9.164,
        height: 8.938,
        ...rootStyle,
    };
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 9.164 8.938"
            sx={rootSx}
            {...rest}
        >
            <path
                fill="#fff"
                stroke="#fff"
                strokeWidth="0.5"
                d="M4.773.25a.5.5 0 01.357.152l3.6 3.721a.5.5 0 010 .692l-3.6 3.721a.5.5 0 11-.715-.692l3.268-3.375-3.268-3.375a.5.5 0 01.358-.843zm-3.98 0a.5.5 0 01.357.152l3.6 3.721a.5.5 0 010 .692l-3.6 3.721a.5.5 0 11-.715-.692l3.268-3.375L.438 1.093A.5.5 0 01.796.25z"
            ></path>
        </SvgIcon>
    );
}

export function AddPlusServiceIcon(props: IconProps) {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        width: 12,
        height: 12,
        ...rootStyle,
    };
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            sx={rootSx}
            {...rest}
        >
            <g data-name="Group 105775" transform="translate(-248 -388)">
                <circle
                    cx="6"
                    cy="6"
                    r="6"
                    fill="#0e70eb"
                    data-name="Ellipse 129116"
                    transform="translate(248 388)"
                ></circle>
                <path
                    fill="#fff"
                    stroke="#fff"
                    strokeWidth="0.5"
                    d="M254.124 391.228a.242.242 0 00-.238.245v2.577h-2.577a.242.242 0 100 .483h2.577v2.577a.242.242 0 10.483 0v-2.576h2.578a.242.242 0 100-.483h-2.58v-2.578a.242.242 0 00-.245-.245z"
                ></path>
            </g>
        </SvgIcon>
    );
}


export function WhatAppIcon(props: IconProps) {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        width: 18.206,
        height: 18.235,
        ...rootStyle,
    };
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18.206 18.235"
            sx={rootSx}
            {...rest}
        >
            <g fillRule="evenodd" transform="translate(-3.863 -4)">
                <path
                    fill="#fff"
                    d="M4.9 22.33l1.222-4.43A8.571 8.571 0 0119.605 7.534a8.488 8.488 0 012.534 6.066 8.593 8.593 0 01-8.6 8.6 8.692 8.692 0 01-4.117-1.041z"
                    data-name="Path 13670"
                    transform="translate(-.568 -.548)"
                ></path>
                <path
                    fill="#fff"
                    d="M4.6 22.282c-.045 0-.136-.045-.181-.045a.2.2 0 01-.045-.226l1.176-4.389a9.006 9.006 0 01-1.131-4.344 8.823 8.823 0 118.823 8.868 8.692 8.692 0 01-4.117-1.041l-4.476 1.177z"
                    data-name="Path 13671"
                    transform="translate(-.272 -.274)"
                ></path>
                <path
                    fill="none"
                    d="M12.974 4.452a8.652 8.652 0 018.6 8.6 8.593 8.593 0 01-8.6 8.6 8.692 8.692 0 01-4.117-1.041l-4.525 1.171 1.222-4.434a8.564 8.564 0 017.421-12.9M12.974 4a9.076 9.076 0 00-9.049 9.049 8.53 8.53 0 001.131 4.344l-1.177 4.253a.459.459 0 00.136.452.411.411 0 00.317.136h.136L8.857 21.1a8.828 8.828 0 004.163 1 9.055 9.055 0 006.425-15.43A9.182 9.182 0 0012.974 4z"
                    data-name="Path 13672"
                ></path>
                <path
                    fill="#13990a"
                    d="M20.417 10.281A7.041 7.041 0 0015.349 8.2 7.164 7.164 0 008.2 15.349a7.011 7.011 0 001.086 3.8l.181.271-.724 2.624 2.715-.724.271.136a7.255 7.255 0 003.62 1A7.164 7.164 0 0022.5 15.3a7.091 7.091 0 00-2.083-5.019z"
                    data-name="Path 13673"
                    transform="translate(-2.375 -2.3)"
                ></path>
                <path
                    fill="#fff"
                    d="M16.562 15.562c-.181-.362-.317-.362-.5-.362h-.407a.834.834 0 00-.588.271 2.479 2.479 0 00-.769 1.81 4.179 4.179 0 00.86 2.217 8.79 8.79 0 003.665 3.258c1.81.724 2.172.588 2.579.543a2.074 2.074 0 001.448-1.041 1.973 1.973 0 00.136-1.041c-.045-.09-.181-.136-.407-.271a13.58 13.58 0 00-1.448-.679.362.362 0 00-.5.09c-.136.226-.543.679-.679.86a.3.3 0 01-.452.045 4.833 4.833 0 01-1.719-1.086 5.635 5.635 0 01-1.176-1.493c-.136-.226 0-.317.09-.452.09-.09.226-.271.317-.362.09-.136.136-.226.226-.362a.345.345 0 000-.362 16.239 16.239 0 01-.676-1.583z"
                    data-name="Path 13674"
                    transform="translate(-5.715 -6.132)"
                ></path>
            </g>
        </SvgIcon>
    );
}

export function CallIcon(props: IconProps) {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        width: 14,
        height: 14,
        ...rootStyle,
    };
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            sx={rootSx}
            {...rest}
        >
            <g data-name="Group 120606" transform="translate(-149 -237)">
                <path
                    fill="#0e70eb"
                    d="M6.026 3a1.265 1.265 0 00-.789.286L5.2 3.3l-.017.017-1.676 1.734.017.017a1.687 1.687 0 00-.453 1.815V6.9a16.893 16.893 0 003.9 6.1 17.742 17.742 0 006.1 3.9h.017a1.927 1.927 0 001.864-.37l1.7-1.7a1.2 1.2 0 000-1.664l-2.183-2.185-.017-.034a1.222 1.222 0 00-1.679 0l-1.075 1.076a8.691 8.691 0 01-2.2-1.513 6.836 6.836 0 01-1.507-2.181l1.074-1.076a1.149 1.149 0 00-.017-1.647l.017-.017-.05-.05-2.149-2.22-.017-.019-.034-.017A1.265 1.265 0 006.026 3zm0 1.076a.188.188 0 01.118.05l2.149 2.2.05.05a.106.106 0 01-.033.124L6.966 7.841l-.252.235.118.336A8.722 8.722 0 008.746 11.3l.118.1a10.824 10.824 0 002.72 1.765l.336.151 1.6-1.6c.092-.092.076-.092.168 0l2.2 2.2c.092.092.092.059 0 .151l-1.646 1.647a.781.781 0 01-.823.151 16.568 16.568 0 01-5.692-3.631A15.957 15.957 0 014.078 6.53a.683.683 0 01.168-.706l.034-.034 1.629-1.664a.188.188 0 01.117-.05z"
                    data-name="icons8-phone (2)"
                    transform="translate(146.028 234)"
                ></path>
            </g>
        </SvgIcon>
    );
}

export function DoubleArrowIcon(props: IconProps) {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        width: 18,
        height: 18,
        ...rootStyle,
    };
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 18 18"
            sx={rootSx}
            {...rest}
        >
            <g data-name="Group 120798" transform="translate(-202 -754)">
                <path
                    fill="#0e70eb"
                    stroke="#0e70eb"
                    strokeWidth="0.2"
                    d="M211.236 759a.62.62 0 01.448.19l4.519 4.671a.623.623 0 010 .868l-4.519 4.667a.625.625 0 11-.9-.868l4.1-4.233-4.1-4.234a.624.624 0 01.448-1.058zm-4.991 0a.62.62 0 01.448.19l4.518 4.671a.623.623 0 010 .868l-4.519 4.667a.625.625 0 01-.9-.868l4.1-4.233-4.1-4.234a.624.624 0 01.448-1.058z"
                ></path>
            </g>
        </SvgIcon>
    );
}

export function ViewDirectionIcon(props: IconProps) {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        width: 15.085,
        height: 15.073,
        ...rootStyle,
    };
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 15.085 15.073"
            sx={rootSx}
            {...rest}
        >
            <path
                fill="#4a89f3"
                d="M11.611 4.077a.688.688 0 01.492.193l6.846 6.846a.7.7 0 010 .984L12.1 18.946a.7.7 0 01-.984 0L4.273 12.1a.7.7 0 010-.984l6.846-6.846a.688.688 0 01.492-.193zm.689 4.108v2.054H9.557a1.369 1.369 0 00-1.369 1.369v2.054h1.369v-2.054H12.3v2.054l2.738-2.738z"
                transform="translate(-4.069 -4.077)"
            ></path>
        </SvgIcon>
    );
}

export function ActiveBookMark(props: IconProps) {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        width: 24,
        height: 24,
        ...rootStyle,
    };
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            sx={rootSx}
            {...rest}
        >
            <g data-name="Group 119313" transform="translate(-254 -381)">
                <path
                    fill="none"
                    d="M0 0H24V24H0z"
                    data-name="Rectangle 59919"
                    transform="translate(254 381)"
                ></path>
                <path
                    fill="#ff980e"
                    d="M21.159 24.238l-7.079-6.194L7 24.238V4.77A1.769 1.769 0 018.77 3h10.619a1.769 1.769 0 011.77 1.77z"
                    transform="translate(251.988 378)"
                ></path>
                <g data-name="Group 120630" transform="translate(261.629 383.675)">
                    <path
                        fill="#fff"
                        d="M201.794 179.513a.222.222 0 00-.167-.146l-2.811-.409-1.256-2.554a.221.221 0 00-.375 0l-1.27 2.561-2.811.409a.215.215 0 00-.167.139.2.2 0 00.056.215l2.041 1.985-.479 2.8a.222.222 0 00.083.208.2.2 0 00.222.014l2.519-1.326 2.519 1.326a.22.22 0 00.222-.021.21.21 0 00.083-.2l-.479-2.8 2.034-1.985a.256.256 0 00.036-.216z"
                        data-name="Path 104893"
                        transform="translate(-192.926 -176.3)"
                    ></path>
                </g>
            </g>
        </SvgIcon>
    );
}

export function InActiveBookMark(props: IconProps) {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        width: 24,
        height: 24,
        ...rootStyle,
    };
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            sx={rootSx}
            {...rest}
        >
            <g data-name="Group 119313" transform="translate(-254 -381)">
                <path
                    fill="none"
                    d="M0 0H24V24H0z"
                    data-name="Rectangle 59919"
                    transform="translate(254 381)"
                ></path>
                <path
                    fill="#757c85"
                    d="M21.159 24.238l-7.079-6.194L7 24.238V4.77A1.769 1.769 0 018.77 3h10.619a1.769 1.769 0 011.77 1.77z"
                    transform="translate(251.988 378)"
                ></path>
                <g data-name="Group 120630" transform="translate(261.629 383.675)">
                    <path
                        fill="#fff"
                        d="M201.794 179.513a.222.222 0 00-.167-.146l-2.811-.409-1.256-2.554a.221.221 0 00-.375 0l-1.27 2.561-2.811.409a.215.215 0 00-.167.139.2.2 0 00.056.215l2.041 1.985-.479 2.8a.222.222 0 00.083.208.2.2 0 00.222.014l2.519-1.326 2.519 1.326a.22.22 0 00.222-.021.21.21 0 00.083-.2l-.479-2.8 2.034-1.985a.256.256 0 00.036-.216z"
                        data-name="Path 104893"
                        transform="translate(-192.926 -176.3)"
                    ></path>
                </g>
            </g>
        </SvgIcon>
    );
}
export function PhoneIcon(props: IconProps) {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        width: 14,
        height: 14,
        ...rootStyle,
    };
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 14 14"
            sx={rootSx}
            {...rest}
        >
            <path
                fill="#3b3b3b"
                d="M6.026 3a1.265 1.265 0 00-.789.286L5.2 3.3l-.017.017-1.676 1.734.017.017a1.687 1.687 0 00-.453 1.815V6.9a16.893 16.893 0 003.9 6.1 17.742 17.742 0 006.1 3.9h.017a1.927 1.927 0 001.864-.37l1.7-1.7a1.2 1.2 0 000-1.664l-2.183-2.185-.017-.034a1.222 1.222 0 00-1.679 0l-1.075 1.076a8.691 8.691 0 01-2.2-1.513 6.836 6.836 0 01-1.507-2.181l1.074-1.076a1.149 1.149 0 00-.017-1.647l.017-.017-.05-.05-2.149-2.22-.017-.019-.034-.017A1.265 1.265 0 006.026 3zm0 1.076a.188.188 0 01.118.05l2.149 2.2.05.05a.106.106 0 01-.033.124L6.966 7.841l-.252.235.118.336A8.722 8.722 0 008.746 11.3l.118.1a10.824 10.824 0 002.72 1.765l.336.151 1.6-1.6c.092-.092.076-.092.168 0l2.2 2.2c.092.092.092.059 0 .151l-1.646 1.647a.781.781 0 01-.823.151 16.568 16.568 0 01-5.692-3.631A15.957 15.957 0 014.078 6.53a.683.683 0 01.168-.706l.034-.034 1.629-1.664a.188.188 0 01.117-.05z"
                data-name="icons8-phone (2)"
                transform="translate(-2.972 -3)"
            ></path>
        </SvgIcon>
    );
}

export function IconSetting(props: IconProps) {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        width: 24,
        height: 24,
        ...rootStyle,
    };
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            sx={rootSx}
            {...rest}
        >
            <g data-name="Group 113646" transform="translate(-11 -48)">
                <path
                    fill="none"
                    d="M0 0H24V24H0z"
                    data-name="Rectangle 59110"
                    transform="translate(11 48)"
                ></path>
                <path
                    fill="#60666f"
                    d="M13.877 4a3.7 3.7 0 00-.877.108.511.511 0 00-.389.447L12.6 4.7a.509.509 0 01-.717.415l-.132-.06a.511.511 0 00-.581.113 3.749 3.749 0 00-.877 1.514.509.509 0 00.193.559l.119.085a.514.514 0 01.214.415.508.508 0 01-.064.245l.064.393.49-.186a1.185 1.185 0 01.419-.076c.019 0 .037 0 .056.006a1.5 1.5 0 00.055-.382 1.532 1.532 0 00-.452-1.085 2.741 2.741 0 01.307-.529 1.529 1.529 0 001.879-1.086 2.554 2.554 0 01.611 0 1.527 1.527 0 001.878 1.086 2.731 2.731 0 01.307.529 1.528 1.528 0 000 2.17 2.741 2.741 0 01-.307.529 1.529 1.529 0 00-1.879 1.086 2.561 2.561 0 01-.344.016c.058.153.111.307.156.464a1.191 1.191 0 01.022.549 3.771 3.771 0 00.736-.1.511.511 0 00.388-.447l.014-.144a.509.509 0 01.717-.414l.132.06a.509.509 0 00.581-.113A3.749 3.749 0 0017.46 8.8a.508.508 0 00-.193-.559l-.119-.085a.51.51 0 010-.83l.119-.086a.508.508 0 00.193-.559 3.749 3.749 0 00-.877-1.514.509.509 0 00-.583-.114l-.131.06a.509.509 0 01-.718-.414l-.014-.144a.51.51 0 00-.389-.447A3.7 3.7 0 0013.877 4zm0 2.378a1.325 1.325 0 101.018.437 1.367 1.367 0 00-1.018-.436zM8.441 7.4a5.106 5.106 0 00-1.241.157.51.51 0 00-.379.412l-.084.516a.68.68 0 01-.911.526l-.49-.186a.51.51 0 00-.546.122A5.086 5.086 0 003.542 11.1a.51.51 0 00.168.533l.405.332a.68.68 0 010 1.052l-.405.332a.51.51 0 00-.167.533 5.091 5.091 0 001.244 2.156.51.51 0 00.545.121l.491-.185a.679.679 0 01.91.526l.084.516a.51.51 0 00.379.412 4.952 4.952 0 002.489 0 .51.51 0 00.379-.412l.084-.516a.68.68 0 01.911-.526l.49.186a.51.51 0 00.546-.122 5.086 5.086 0 001.244-2.156.51.51 0 00-.168-.533l-.405-.332a.68.68 0 010-1.052l.405-.332a.51.51 0 00.167-.533 5.094 5.094 0 00-1.245-2.155.51.51 0 00-.546-.122l-.489.184a.679.679 0 01-.911-.526l-.086-.521a.51.51 0 00-.378-.412A5.1 5.1 0 008.441 7.4zm5.436 0a.286.286 0 01.256.094.4.4 0 010 .491.4.4 0 01-.512 0 .4.4 0 010-.491.286.286 0 01.256-.094zM8.441 8.418a3.977 3.977 0 01.677.084l.024.148a1.7 1.7 0 002.278 1.315l.136-.051a4.041 4.041 0 01.679 1.175l-.113.092a1.7 1.7 0 000 2.629l.113.093a4.033 4.033 0 01-.677 1.175l-.137-.052a1.7 1.7 0 00-2.277 1.314l-.024.145a3.887 3.887 0 01-.677.087 3.878 3.878 0 01-.678-.087l-.024-.145a1.7 1.7 0 00-2.277-1.314l-.138.052a4.034 4.034 0 01-.679-1.178l.113-.093a1.7 1.7 0 000-2.629l-.113-.093a4.033 4.033 0 01.677-1.175l.137.052A1.7 1.7 0 007.74 8.65l.024-.15a3.887 3.887 0 01.677-.082zm0 2.038a2.023 2.023 0 00-1.527.649 2.145 2.145 0 000 2.779 2.122 2.122 0 003.055 0 2.145 2.145 0 000-2.779 2.023 2.023 0 00-1.528-.649zm0 1.019a.939.939 0 01.766.307 1.129 1.129 0 010 1.425.939.939 0 01-.766.307.939.939 0 01-.766-.307 1.129 1.129 0 010-1.425.939.939 0 01.766-.306z"
                    transform="translate(12.932 48.998)"
                ></path>
            </g>
        </SvgIcon>
    );
}


export function RemovePreferableIcon(props: IconProps) {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        width: 81.452,
        height: 75.219,
        ...rootStyle,
    };
    return (
        <SvgIcon
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 81.452 75.219"
            sx={rootSx}
            {...rest}
        >
            <g data-name="Group 120638" transform="translate(-146.773 -524)">
                <g transform="translate(146.773 524)">
                    <g>
                        <path
                            fill="#e6eefa"
                            d="M155.814 135.859c.208-1.191.541-2.369.78-3.582a21.174 21.174 0 00.1-7.094 27.863 27.863 0 00-5.228-12.45c-2.913-3.907-7.292-7.071-12-5.876-4.9 1.238-9.043 5.014-13.8 6.738-8.066 2.917-16.231-2.4-24.359-2.21-7.018.152-14.382 2.672-19 8.9a13.238 13.238 0 00-2.756 9.334c.546 4.1 3.558 7.226 5.8 10.262 3.443 4.654 4.747 9.723 1.85 15.155-1.958 3.682-4.592 6.934-4.364 11.507.365 7.314 7.118 11.732 12.687 13.7a25.349 25.349 0 0017.705-.044c5-2.011 8.484-6.408 13.038-9.215a20.609 20.609 0 0113.372-2.935c4.813.575 9.885 1.587 14.536-.488 4.451-1.989 6.559-7.3 6.725-12.4a20.363 20.363 0 00-1.129-7.478c-1.032-2.886-3.315-5.138-3.958-8.2a9.5 9.5 0 01.001-3.624z"
                            data-name="Path 20625"
                            transform="translate(-79.454 -106.601)"
                        ></path>
                        <path
                            fill="#fff"
                            d="M155.814 135.859c.208-1.191.541-2.369.78-3.582a21.174 21.174 0 00.1-7.094 27.863 27.863 0 00-5.228-12.45c-2.913-3.907-7.292-7.071-12-5.876-4.9 1.238-9.043 5.014-13.8 6.738-8.066 2.917-16.231-2.4-24.359-2.21-7.018.152-14.382 2.672-19 8.9a13.238 13.238 0 00-2.756 9.334c.546 4.1 3.558 7.226 5.8 10.262 3.443 4.654 4.747 9.723 1.85 15.155-1.958 3.682-4.592 6.934-4.364 11.507.365 7.314 7.118 11.732 12.687 13.7a25.349 25.349 0 0017.705-.044c5-2.011 8.484-6.408 13.038-9.215a20.609 20.609 0 0113.372-2.935c4.813.575 9.885 1.587 14.536-.488 4.451-1.989 6.559-7.3 6.725-12.4a20.363 20.363 0 00-1.129-7.478c-1.032-2.886-3.315-5.138-3.958-8.2a9.5 9.5 0 01.001-3.624z"
                            data-name="Path 20626"
                            opacity="0.38"
                            transform="translate(-79.454 -106.601)"
                        ></path>
                    </g>
                </g>
                <ellipse
                    cx="14.925"
                    cy="1.905"
                    fill="#cfdbed"
                    data-name="Ellipse 129793"
                    rx="14.925"
                    ry="1.905"
                    transform="translate(172.575 578.617)"
                ></ellipse>
                <g transform="translate(164.877 533.488)">
                    <path
                        fill="#ffbb67"
                        d="M24.654 9a15.653 15.653 0 00-15.66 15.66 16.06 16.06 0 001.978 7.665l-1.978 6.923a.875.875 0 001.071 1.071l7.006-1.978a15.817 15.817 0 007.665 1.978A15.66 15.66 0 1024.654 9z"
                        data-name="Path 104894"
                        transform="translate(-.615 -.615)"
                    ></path>
                    <path
                        fill="none"
                        stroke="#18193f"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M8.461 11.681a15.5 15.5 0 00-2.967 9.066 15.979 15.979 0 001.9 7.418l-1.9 6.758a.875.875 0 001.071 1.071l6.758-1.9a15.043 15.043 0 007.418 1.9"
                        data-name="Path 104895"
                    ></path>
                    <path
                        fill="none"
                        stroke="#18193f"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="3"
                        d="M30.055 32.781A15.221 15.221 0 0020.737 5.5a15.763 15.763 0 00-5.6 1.071"
                        data-name="Path 104896"
                    ></path>
                    <path
                        fill="none"
                        stroke="#18193f"
                        strokeLinecap="round"
                        strokeWidth="3"
                        d="M17.033 16.627a3.709 3.709 0 117.418 0c0 3.462-3.709 3.379-3.709 7.006"
                        data-name="Path 104897"
                    ></path>
                    <circle
                        cx="1.648"
                        cy="1.648"
                        r="1.648"
                        fill="#18193f"
                        data-name="Ellipse 130761"
                        transform="translate(19.093 26.517)"
                    ></circle>
                </g>
            </g>
        </SvgIcon>
    );
}