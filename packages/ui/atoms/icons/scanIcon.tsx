import { SvgIcon, SvgIconProps, SxProps } from '@mui/material';

interface IconProps extends SvgIconProps {
  rootStyle?: SxProps;
}

export function ScanIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;

  const rootSx = {
    height: 60.692,
    width: 50.387,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" sx={rootSx} {...rest} viewBox="0 0 50.387 50.341">
      <g data-name="Group 106191" transform="translate(-36.528 -4.655)">
        <path
          data-name="Path 6825"
          d="M85.366 18.488v-8.121a4.272 4.272 0 00-.88-3.151 4.114 4.114 0 00-3-1.043h-8.432"
          fill="none"
          stroke="#138072"
          strokeLinecap="round"
          strokeWidth={3}
        />
        <path
          data-name="Path 6826"
          d="M85.366 41.167v8.121a4.272 4.272 0 01-.88 3.151 4.114 4.114 0 01-3 1.043h-8.432"
          fill="none"
          stroke="#138072"
          strokeLinecap="round"
          strokeWidth={3}
        />
        <path
          data-name="Path 6824"
          d="M38.077 18.488v-8.121a4.272 4.272 0 01.88-3.151 4.114 4.114 0 013-1.043h8.432"
          fill="none"
          stroke="#138072"
          strokeLinecap="round"
          strokeWidth={3}
        />
        <path
          data-name="Path 6827"
          d="M38.077 41.167v8.121a4.272 4.272 0 00.88 3.151 4.114 4.114 0 003 1.043h8.432"
          fill="none"
          stroke="#138072"
          strokeLinecap="round"
          strokeWidth={3}
        />
        <rect data-name="Rectangle 56682" width={30} height={30} rx={3} transform="translate(47 15)" fill="#8ae5d0" />
        <g data-name="Rectangle 56683" transform="translate(45 36)" fill="#8ae5d0" stroke="#138072" strokeWidth={2}>
          <rect width={10} height={10} rx={2} stroke="none" />
          <rect x={1} y={1} width={8} height={8} rx={1} fill="none" />
        </g>
        <g data-name="Rectangle 56684" transform="translate(70 36)" fill="#8ae5d0" stroke="#138072" strokeWidth={2}>
          <rect width={10} height={10} rx={2} stroke="none" />
          <rect x={1} y={1} width={8} height={8} rx={1} fill="none" />
        </g>
        <g data-name="Rectangle 56685" transform="translate(70 13)" fill="#8ae5d0" stroke="#138072" strokeWidth={2}>
          <rect width={10} height={10} rx={2} stroke="none" />
          <rect x={1} y={1} width={8} height={8} rx={1} fill="none" />
        </g>
        <path
          data-name="Path 6828"
          d="M47.015 22.286v-4.8a2.527 2.527 0 01.521-1.865 2.434 2.434 0 011.775-.617h4.988"
          fill="none"
          stroke="#138072"
          strokeLinecap="round"
          strokeWidth={3}
        />
        <path
          data-name="Path 6829"
          d="M53.452 23h10.592"
          fill="none"
          stroke="#138072"
          strokeLinecap="round"
          strokeWidth={3}
        />
        <path
          data-name="Path 6830"
          d="M64.044 13v5.242"
          fill="none"
          stroke="#138072"
          strokeLinecap="round"
          strokeWidth={3}
        />
        <path
          data-name="Path 6832"
          d="M68.343 28.619h2.916"
          fill="none"
          stroke="#138072"
          strokeLinecap="round"
          strokeWidth={3}
        />
        <path
          data-name="Path 6833"
          d="M76.343 28.619h2.916"
          fill="none"
          stroke="#138072"
          strokeLinecap="round"
          strokeWidth={3}
        />
        <path
          data-name="Path 6831"
          d="M61.966 46V35.455a5.461 5.461 0 00-1.168-4.093 5.536 5.536 0 00-3.98-1.355H45.634"
          fill="none"
          stroke="#138072"
          strokeLinecap="round"
          strokeWidth={3}
        />
      </g>
    </SvgIcon>
  );
}
