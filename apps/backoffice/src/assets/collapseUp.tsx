import { SvgIcon, SvgIconProps, SxProps } from "@mui/material";
import * as React from "react"

export interface IconInterface extends SvgIconProps {
    rootStyle?: SxProps;
}
export const CollapseUpIcon = (props: IconInterface): JSX.Element => {
    const { rootStyle, ...rest } = props;
    const rootSx = {
        height: 22,
        width: 22,
        ...rootStyle,
    };
    return (
        <SvgIcon xmlns="http://www.w3.org/2000/svg" width={24} height={24} {...props}>
            <path
                fill="#0e70eb"
                d="M20 12a8 8 0 1 0-8 8 8.009 8.009 0 0 0 8-8Zm-1.231 0A6.769 6.769 0 1 1 12 5.231 6.761 6.761 0 0 1 18.769 12Zm-2.635 1.1-3.692-3.7L12 8.981l-.442.423L7.865 13.1l.885.885L12 10.731l3.25 3.25Z"
                data-name="Group 121215"
            />
        </SvgIcon>
    )
}
