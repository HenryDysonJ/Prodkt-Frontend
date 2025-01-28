import { SvgIcon } from "@mui/material";

export const MoreIcon = (props: any) => {
    const { rootStyle, ...rest } = props;
    const rootSx = {
      height: 19,
      width: 19,
      color: '#0E1824',
      ...rootStyle,
    };
    return (
      <SvgIcon xmlns="http://www.w3.org/2000/svg" width="3" height="13" viewBox="0 0 3 13" {...rest} sx={rootSx}>
        <g id="Group_106650" data-name="Group 106650" transform="translate(-283 -240)">
          <g
            id="Ellipse_129864"
            data-name="Ellipse 129864"
            transform="translate(283 253) rotate(-90)"
            fill="#357968"
            stroke="#707070"
            stroke-width="1"
          >
            <circle cx="1.5" cy="1.5" r="1.5" stroke="none" />
            <circle cx="1.5" cy="1.5" r="1" fill="none" />
          </g>
          <g
            id="Ellipse_129865"
            data-name="Ellipse 129865"
            transform="translate(283 248) rotate(-90)"
            fill="#357968"
            stroke="#707070"
            stroke-width="1"
          >
            <circle cx="1.5" cy="1.5" r="1.5" stroke="none" />
            <circle cx="1.5" cy="1.5" r="1" fill="none" />
          </g>
          <g
            id="Ellipse_129866"
            data-name="Ellipse 129866"
            transform="translate(283 243) rotate(-90)"
            fill="#357968"
            stroke="#707070"
            stroke-width="1"
          >
            <circle cx="1.5" cy="1.5" r="1.5" stroke="none" />
            <circle cx="1.5" cy="1.5" r="1" fill="none" />
          </g>
        </g>
      </SvgIcon>
    );
  }