export function LoadingMessage(props: any) {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        width: 10,
        height: 10,
        ...rootStyle,
    };
    return (
        <svg version="1.1" id="L4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 25" sx={rootSx} {...rest}>
            <circle fill="#5D9DEF" stroke="none" cx="6" cy="12" r="6">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.1" />
            </circle>
            <circle fill="#5D9DEF" stroke="none" cx="26" cy="12" r="6">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.2" />
            </circle>
            <circle fill="#5D9DEF" stroke="none" cx="46" cy="12" r="6">
                <animate attributeName="opacity" dur="1s" values="0;1;0" repeatCount="indefinite" begin="0.3" />
            </circle>
        </svg>
    );
}