import * as React from 'react';

const UserNoneIcon = (props: React.SVGProps<SVGSVGElement>): JSX.Element => {
    const { height, ...restProps } = props;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="45"
            height="44"
            fill="none"
            viewBox="0 0 45 44"
        >
            <path
                fill="#5D9DEF"
                d="M22.783 0a22 22 0 100 44 22 22 0 000-44zm0 9.9a5.5 5.5 0 110 11 5.5 5.5 0 010-11zm9.9 18.187c0 3.142-4.011 6.006-9.9 6.006s-9.9-2.864-9.9-6.006v-.734a2.05 2.05 0 012.046-2.046h15.697a2.05 2.05 0 012.046 2.046l.011.734z"
            ></path>
        </svg>
    );
};

export default UserNoneIcon;
