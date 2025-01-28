import * as React from 'react';

const Divider = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
    const { height, ...restProps } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="2"
            height={height}
            fill="none"
            viewBox="0 0 2 179"
        >
            <path stroke="#E0E0E0" d="M1 0v179"></path>
        </svg>
    );
};

export default Divider;
