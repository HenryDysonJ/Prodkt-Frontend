import { SvgIcon, SvgIconProps, SxProps } from '@mui/material';

interface IconProps extends SvgIconProps {
  rootStyle?: SxProps;
}

export function ServiceReminderIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 159,
    height: 86.065,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 159 86.065" sx={rootSx} {...rest}>
      <defs>
        <clipPath id="clip-path">
          <path
            d="M146.313 184.978c0 .75-6.433 1.378-14.364 1.378s-14.364-.6-14.364-1.378c0-.75-8.319-19.926 14.171-20.289 19.66-.315 14.557 19.539 14.557 20.289z"
            data-name="Path 104471"
            transform="translate(-116.08 -164.685)"
          ></path>
        </clipPath>
      </defs>
      <g transform="translate(-46.2 -65.201)">
        <g data-name="Group 118262" transform="translate(46.2 65.201)">
          <path
            fill="#84a6ce"
            d="M195.322 132.331l35.6 4.038c39.224-3.7 39.9-38.45 37.193-45.657-9.334-24.787-34.75-13.784-40.53-12.938-10.882 1.6-24.183-2.007-36.709-8.391s-34.9-7.061-45.463 9.5c-10.568 16.541-3.216 54.12 34.363 54.773z"
            data-name="Path 104455"
            opacity="0.15"
            transform="translate(-118.083 -65.201)"
          ></path>
          <path
            fill="#84a6ce"
            d="M230.812 159.953l29.575 3.893c38.208-3.144 33.154-32.477 30.905-38.474-7.738-20.555-28.874-11.438-33.662-10.737-9.044 1.33-20.1-1.669-30.494-6.965-10.423-5.32-29.019-5.876-37.8 7.884s-2.684 44.98 28.56 45.512z"
            data-name="Path 104456"
            opacity="0.1"
            transform="translate(-151.953 -94.757)"
          ></path>
          <path
            fill="#84a6ce"
            d="M189.7 342.148c1.644-.484 2.515-1.016 2.515-1.548 0-3.265-32.695-5.9-73.007-5.9S46.2 337.36 46.2 340.6c0 1.451 6.553 2.781 17.387 3.821-2.854.895-4.4 1.838-4.4 2.854 0 4.595 32.695 8.319 73.007 8.319s73.007-3.724 73.007-8.319c.023-1.935-5.78-3.724-15.501-5.127z"
            data-name="Path 104457"
            opacity="0.23"
            transform="translate(-46.2 -269.528)"
          ></path>
          <g fill="#56cbb7" data-name="Group 118208" transform="translate(100.903 7.642)">
            <path
              d="M496.378 96.9a9.512 9.512 0 016.6 2.563c1.669 1.572 3.337 5.465 1.935 8.391-2.829 5.852-9.02 6.505-13.494 8.8-4.474 2.273-4.812 4.74-1.886 3.7 3-1.088 9.262-5.417 11.269-1.04 2.757 5.973-5.635 8.923-10.519 10.084-6.287 1.5-11.124 4.522-8.319 5.054s7.231-2.612 10.084.435 2.007 8.1-5.852 9.891c-7.884 1.79-8.319 5.175-5.03 4.837s5.2-2.9 7.448.677c2.273 3.579-4.038 6.215-9.625 6.844-5.562.629-12.672 6.626-12.672 6.626s-3.071-14.268-2.854-24.449c.22-9.813 8.805-42.389 32.915-42.413z"
              data-name="Path 104458"
              transform="translate(-463.454 -96.876)"
            ></path>
            <path
              d="M492.605 106.231l9.455-3.071-8.029 1.91A47.78 47.78 0 01503 99.363a9.623 9.623 0 00-6.6-2.563c-24.134.048-32.719 32.622-32.937 42.416-.218 10.205 2.854 24.449 2.854 24.449-.145-.677.121-5.3 1.378-11.8l8.174-4.546-8 3.652c.363-1.765.8-3.676 1.33-5.659l14.292-7.98-13.857 6.336a99.563 99.563 0 012.007-6.36l6.481-3.627-6.215 2.854a96.991 96.991 0 012.781-6.771l19.564-7.521-18.089 4.57c.484-.943.967-1.862 1.5-2.781q.762-1.306 1.523-2.539l6.481-2.926-6 2.152a68.125 68.125 0 014.425-6.021l14.63-4.74-13.276 3.168a64.476 64.476 0 017.159-6.895z"
              data-name="Path 104459"
              opacity="0.34"
              transform="translate(-463.454 -96.8)"
            ></path>
          </g>
          <g fill="#56cbb7" data-name="Group 118209" transform="translate(104.614 40.328)">
            <path
              d="M518.073 233.931a6.449 6.449 0 013.144 3.627c.508 1.475.266 4.353-1.523 5.659-3.555 2.612-7.472 1.04-10.882.991s-4.4 1.306-2.3 1.62c2.152.314 7.279-.314 7.085 2.95-.242 4.474-6.215 3.555-9.5 2.708-4.232-1.088-8.1-.822-6.6.387 1.523 1.209 5.151.725 5.9 3.458s-1.378 5.489-6.674 4.063-6.626.459-4.546 1.306 4.038-.1 4.256 2.781-4.4 2.442-7.932 1.04-9.7-.048-9.7-.048 2.708-9.528 6.07-15.574c3.239-5.827 18.74-22.634 33.202-14.968z"
              data-name="Path 104460"
              transform="translate(-478.8 -231.964)"
            ></path>
            <path
              d="M512.9 238.384l6.65 1.185-5.417-1.4a32.569 32.569 0 017.182-.58 6.539 6.539 0 00-3.144-3.627c-14.461-7.642-29.962 9.141-33.2 14.969-3.361 6.046-6.07 15.574-6.07 15.574a37.15 37.15 0 014.595-6.626l6.36-.145-5.949-.339a63.93 63.93 0 012.588-2.974l11.1-.242-10.326-.6c.991-1.04 2.08-2.1 3.216-3.168l5.03-.1-4.619-.266a50.313 50.313 0 013.821-3.168l14.123 1.717-12.309-3.047c.58-.411 1.185-.8 1.789-1.185.58-.363 1.161-.7 1.717-1.04l4.812.29-4.28-.6a39.244 39.244 0 014.571-2.2l10.278 1.814-8.972-2.322a38.628 38.628 0 016.454-1.92z"
              data-name="Path 104461"
              opacity="0.34"
              transform="translate(-478.876 -231.991)"
            ></path>
          </g>
          <g fill="#56cbb7" data-name="Group 118210" transform="translate(38.402 13.149)">
            <path
              d="M212.111 119.682a7.351 7.351 0 00-5.078 1.741c-1.306 1.137-2.684 4.038-1.693 6.287 1.959 4.5 6.626 5.175 9.939 7.037s3.482 3.724 1.306 2.829c-2.225-.895-6.844-4.353-8.488-1.112-2.249 4.425 3.99 6.916 7.642 7.932 4.691 1.306 8.27 3.748 6.142 4.063-2.152.339-5.369-2.176-7.618.024s-1.765 6.07 4.135 7.642 6.142 4.159 3.652 3.8-3.845-2.346-5.659.29 2.878 4.812 7.061 5.441 9.383 5.369 9.383 5.369 2.733-10.689 2.878-18.379c.145-7.403-5.393-32.239-23.602-32.964z"
              data-name="Path 104462"
              transform="translate(-205.002 -119.652)"
            ></path>
            <path
              d="M221.142 126.812l-7.061-2.588 6.021 1.669a36.258 36.258 0 00-6.6-4.571 7.273 7.273 0 015.078-1.741c18.209.725 23.747 25.561 23.6 32.985-.145 7.69-2.878 18.379-2.878 18.379a42.469 42.469 0 00-.7-8.948l-6.046-3.676 5.925 3a94.147 94.147 0 00-.822-4.3l-10.544-6.433 10.278 5.2c-.363-1.572-.822-3.192-1.33-4.861L231.274 148l4.595 2.322a79.828 79.828 0 00-1.886-5.2l-14.558-6.263 13.542 3.966a88.126 88.126 0 00-1.04-2.152q-.508-1.016-1.088-1.959l-4.812-2.394 4.45 1.814a50.662 50.662 0 00-3.168-4.667l-10.906-3.99 9.939 2.781a49.548 49.548 0 00-5.2-5.446z"
              data-name="Path 104463"
              opacity="0.34"
              transform="translate(-211.445 -119.576)"
            ></path>
          </g>
          <g data-name="Group 118218" transform="translate(16.899 24.058)">
            <g fill="#f4cb00" data-name="Group 118212" transform="translate(1.504 18.914)">
              <path
                d="M151.1 248.3h-28.7s.387 20.99 7.448 30.083c0 0 1.62.532 3.627.991a14.845 14.845 0 003.265.363 14.845 14.845 0 003.265-.363 45.482 45.482 0 003.627-.991c7.086-9.093 7.468-30.083 7.468-30.083z"
                data-name="Path 104464"
                transform="translate(-122.376 -246.994)"
              ></path>
              <path
                d="M140.1 272.628a23.334 23.334 0 003.168 5.755s1.62.532 3.627.991a14.873 14.873 0 006.529 0 45.482 45.482 0 003.627-.991c7.085-9.093 7.448-30.083 7.448-30.083s-1.788 21.958-24.399 24.328z"
                data-name="Path 104465"
                opacity="0.35"
                transform="translate(-135.796 -246.994)"
              ></path>
              <g data-name="Group 118211">
                <ellipse cx="14.364" cy="1.378" data-name="Ellipse 130744" rx="14.364" ry="1.378"></ellipse>
                <ellipse cx="14.364" cy="1.378" data-name="Ellipse 130745" rx="14.364" ry="1.378"></ellipse>
              </g>
            </g>
            <g data-name="Group 118217">
              <g clipPath="url(#clip-path)" data-name="Group 118213">
                <path
                  fill="#fc9e86"
                  d="M164.489 167.3l-1.644 3.531-1.645 39.659 2.829.121 1.62-39.684"
                  data-name="Path 104466"
                  transform="translate(-150.289 -166.668)"
                ></path>
                <path
                  fill="#ff4f68"
                  d="M162.9 182.3l-1.6 39.563 2.805.121 1.62-39.563-.58.6-.8-.677-.846.629z"
                  data-name="Path 104467"
                  transform="translate(-150.365 -178.04)"
                ></path>
                <path
                  fill="#ff4f68"
                  d="M163.476 182.929l-.58-.629-1.6 39.563.58.024z"
                  data-name="Path 104468"
                  opacity="0.48"
                  transform="translate(-150.365 -178.04)"
                ></path>
                <path
                  fill="#ff4f68"
                  d="M172.1 183.38l.6-.58-1.62 39.563-.58-.024z"
                  data-name="Path 104469"
                  opacity="0.48"
                  transform="translate(-157.34 -178.419)"
                ></path>
                <path
                  fill="#ff4f68"
                  d="M172.9 168.291l.484-.991.339 1.04z"
                  data-name="Path 104470"
                  transform="translate(-159.16 -166.668)"
                ></path>
              </g>
              <g clipPath="url(#clip-path)" data-name="Group 118214">
                <path
                  fill="#fc9e86"
                  d="M131.5 178.9l-.8 3.8 7.738 38.934 2.781-.556-7.738-38.934"
                  data-name="Path 104472"
                  transform="translate(-127.165 -175.462)"
                ></path>
                <path
                  fill="#56cbb7"
                  d="M130.8 193.256l7.714 38.837 2.781-.556-7.714-38.837-.435.75-.943-.459-.653.774z"
                  data-name="Path 104473"
                  transform="translate(-127.24 -185.925)"
                ></path>
                <path
                  fill="#56cbb7"
                  d="M131.5 195.484l-.7-.484 7.714 38.837.58-.121z"
                  data-name="Path 104474"
                  opacity="0.54"
                  transform="translate(-127.24 -187.669)"
                ></path>
                <path
                  fill="#56cbb7"
                  d="M140.4 193.425l.459-.725 7.714 38.837-.58.121z"
                  data-name="Path 104475"
                  opacity="0.54"
                  transform="translate(-134.519 -185.925)"
                ></path>
                <path
                  fill="#56cbb7"
                  d="M133.1 179.888l.218-1.088.58.943z"
                  data-name="Path 104476"
                  transform="translate(-128.984 -175.387)"
                ></path>
              </g>
              <g clipPath="url(#clip-path)" data-name="Group 118215">
                <path
                  fill="#fc9e86"
                  d="M180.832 202.5l-2.733 2.757-14.8 36.83 2.612 1.064 14.8-36.83"
                  data-name="Path 104478"
                  transform="translate(-151.881 -193.355)"
                ></path>
                <path
                  fill="#84a6ce"
                  d="M178.051 214.3L163.3 251.033l2.612 1.064 14.776-36.757-.774.411-.532-.919-.991.29z"
                  data-name="Path 104479"
                  transform="translate(-151.881 -202.302)"
                ></path>
                <path
                  fill="#84a6ce"
                  d="M178.39 215.074l-.339-.774-14.751 36.733.556.218z"
                  data-name="Path 104480"
                  opacity="0.54"
                  transform="translate(-151.881 -202.302)"
                ></path>
                <path
                  fill="#84a6ce"
                  d="M186.434 218.963l.774-.363-14.776 36.757-.532-.218z"
                  data-name="Path 104481"
                  opacity="0.54"
                  transform="translate(-158.401 -205.562)"
                ></path>
                <path
                  fill="#84a6ce"
                  d="M232.6 203.274l.8-.774-.048 1.088z"
                  data-name="Path 104482"
                  transform="translate(-204.423 -193.355)"
                ></path>
              </g>
              <g clipPath="url(#clip-path)" data-name="Group 118216">
                <path
                  fill="#fc9e86"
                  d="M151.837 188l-1.137 3.724 4.28 39.466 2.805-.314-4.28-39.466"
                  data-name="Path 104484"
                  transform="translate(-142.328 -182.362)"
                ></path>
                <path
                  fill="#84a6ce"
                  d="M150.8 202.89l4.256 39.369 2.805-.314-4.256-39.345-.484.7-.919-.556-.725.725z"
                  data-name="Path 104485"
                  transform="translate(-142.404 -193.431)"
                ></path>
                <path
                  fill="#84a6ce"
                  d="M151.453 204.332l-.653-.532 4.256 39.369.6-.073z"
                  data-name="Path 104486"
                  opacity="0.54"
                  transform="translate(-142.404 -194.341)"
                ></path>
                <path
                  fill="#84a6ce"
                  d="M160.2 203.253l.532-.653 4.256 39.345-.58.073z"
                  data-name="Path 104487"
                  opacity="0.54"
                  transform="translate(-149.531 -193.431)"
                ></path>
                <path
                  fill="#84a6ce"
                  d="M154.1 188.964l.314-1.064.484.991z"
                  data-name="Path 104488"
                  transform="translate(-144.906 -182.286)"
                ></path>
              </g>
            </g>
          </g>
          <path
            fill="#84a6ce"
            d="M252.46 356.669c1.112-.266 1.717-.532 1.717-.8 0-1.693-22.345-3.071-49.889-3.071s-49.889 1.378-49.889 3.071c0 .75 4.474 1.451 11.874 1.983-1.935.459-3 .967-3 1.475 0 2.394 22.345 4.329 49.889 4.329s49.889-1.935 49.889-4.329c.025-.989-3.941-1.908-10.591-2.658z"
            data-name="Path 104490"
            opacity="0.44"
            transform="translate(-128.235 -283.251)"
          ></path>
          <g data-name="Group 118253" transform="translate(36.999 29.233)">
            <g fill="#dad9db" data-name="Group 118220" transform="translate(0 3.655)">
              <path
                d="M426.8 244.874h42.8L454.344 201.2z"
                data-name="Path 104491"
                transform="translate(-371.761 -201.2)"
              ></path>
              <path
                d="M426.8 244.874h42.8L454.344 201.2z"
                data-name="Path 104492"
                opacity="0.45"
                transform="translate(-371.761 -201.2)"
              ></path>
              <path
                d="M489.771 363.452l-15.115-5.852-21.256 5.707z"
                data-name="Path 104493"
                opacity="0.45"
                transform="translate(-391.928 -319.779)"
              ></path>
              <g data-name="Group 118219" transform="translate(29.188 37.821)">
                <path
                  d="M355.3 366.62l18.137-9.02H337.19l-17.29 9.068z"
                  data-name="Path 104494"
                  transform="translate(-319.9 -357.6)"
                ></path>
                <path
                  d="M355.3 366.62l18.137-9.02H337.19l-17.29 8.682z"
                  data-name="Path 104495"
                  opacity="0.15"
                  transform="translate(-319.9 -357.6)"
                ></path>
              </g>
              <path
                d="M263.792 248.066H199.2l17.992-46.866h64.592z"
                data-name="Path 104496"
                transform="translate(-199.2 -201.2)"
              ></path>
            </g>
            <path
              fill="#fff"
              d="M275.87 244.446H221l16.251-43.746h54.87z"
              data-name="Path 104497"
              transform="translate(-215.728 -197.166)"
            ></path>
            <path
              fill="#fff"
              d="M275.87 244.446H221l16.251-43.746h54.87z"
              data-name="Path 104498"
              transform="translate(-215.728 -197.166)"
            ></path>
            <path
              fill="#dad9db"
              d="M275.87 244.446H221l16.251-43.746h54.87z"
              data-name="Path 104499"
              transform="translate(-215.728 -197.166)"
            ></path>
            <path
              fill="#dad9db"
              d="M240.23 204.5a153.516 153.516 0 01-8.851 21.208L224.1 245.32c12.865 1.741 52.67-.145 52.67-.145s4.353-7.424 6.287-11.463c.387-.8.774-1.669 1.209-2.612l9.891-26.6z"
              data-name="Path 104500"
              transform="translate(-218.079 -200.047)"
            ></path>
            <path
              fill="#fff"
              d="M282.189 200.624s-7.545 19.757-12.067 29.212c-1.935 4.063-6.287 11.463-6.287 11.463s-49.526 2.346-55.934-.629c0 0 13.107-20.386 19.419-40.07h54.87z"
              data-name="Path 104501"
              transform="translate(-205.796 -197.09)"
            ></path>
            <path
              fill="#0e70eb"
              d="M303.882 186.09c-.943-.073-1.789 1.088-1.935 2.612a3.7 3.7 0 00.411 2.152 4.945 4.945 0 01-.024-1.04c.145-1.523.895-2.708 1.669-2.636.725.073 1.209 1.137 1.209 2.467a4.9 4.9 0 00.1-.629c.166-1.548-.487-2.854-1.43-2.926z"
              data-name="Path 104502"
              transform="translate(-277.088 -186.087)"
            ></path>
            <path
              fill="#0e70eb"
              d="M324.682 186.09c-.943-.073-1.79 1.088-1.935 2.612a3.7 3.7 0 00.411 2.152 4.945 4.945 0 01-.024-1.04c.145-1.523.895-2.708 1.669-2.636.725.073 1.209 1.137 1.209 2.467a4.9 4.9 0 00.1-.629c.142-1.548-.512-2.854-1.43-2.926z"
              data-name="Path 104503"
              transform="translate(-292.858 -186.087)"
            ></path>
            <path
              fill="#0e70eb"
              d="M345.382 186.09c-.943-.073-1.789 1.088-1.935 2.612a3.7 3.7 0 00.411 2.152 4.945 4.945 0 01-.024-1.04c.145-1.523.895-2.708 1.669-2.636.725.073 1.209 1.137 1.209 2.467a4.9 4.9 0 00.1-.629c.166-1.548-.487-2.854-1.43-2.926z"
              data-name="Path 104504"
              transform="translate(-308.552 -186.087)"
            ></path>
            <path
              fill="#0e70eb"
              d="M366.182 186.09c-.943-.073-1.79 1.088-1.935 2.612a3.7 3.7 0 00.411 2.152 4.947 4.947 0 01-.024-1.04c.145-1.523.895-2.708 1.669-2.636.725.073 1.209 1.137 1.209 2.467a4.891 4.891 0 00.1-.629c.142-1.548-.487-2.854-1.43-2.926z"
              data-name="Path 104505"
              transform="translate(-324.322 -186.087)"
            ></path>
            <path
              fill="#0e70eb"
              d="M386.982 186.09c-.943-.073-1.789 1.088-1.935 2.612a3.7 3.7 0 00.411 2.152 4.945 4.945 0 01-.024-1.04c.145-1.523.895-2.708 1.669-2.636.725.073 1.209 1.137 1.209 2.467a4.891 4.891 0 00.1-.629c.142-1.548-.512-2.854-1.43-2.926z"
              data-name="Path 104506"
              transform="translate(-340.092 -186.087)"
            ></path>
            <path
              fill="#0e70eb"
              d="M407.682 186.09c-.943-.073-1.79 1.088-1.935 2.612a3.7 3.7 0 00.411 2.152 4.943 4.943 0 01-.024-1.04c.145-1.523.895-2.708 1.669-2.636.725.073 1.209 1.137 1.209 2.467a4.9 4.9 0 00.1-.629c.142-1.548-.487-2.854-1.43-2.926z"
              data-name="Path 104507"
              transform="translate(-355.787 -186.087)"
            ></path>
            <path
              fill="#0e70eb"
              d="M428.482 186.09c-.943-.073-1.789 1.088-1.935 2.612a3.7 3.7 0 00.411 2.152 4.949 4.949 0 01-.024-1.04c.145-1.523.895-2.708 1.669-2.636.725.073 1.209 1.137 1.209 2.467a4.9 4.9 0 00.1-.629c.142-1.548-.512-2.854-1.43-2.926z"
              data-name="Path 104508"
              transform="translate(-371.557 -186.087)"
            ></path>
            <path
              fill="#0e70eb"
              d="M449.182 186.09c-.943-.073-1.79 1.088-1.935 2.612a3.7 3.7 0 00.411 2.152 4.947 4.947 0 01-.024-1.04c.145-1.523.895-2.708 1.669-2.636.725.073 1.209 1.137 1.209 2.467a4.9 4.9 0 00.1-.629c.142-1.548-.487-2.854-1.43-2.926z"
              data-name="Path 104509"
              transform="translate(-387.251 -186.087)"
            ></path>
            <path
              fill="#0e70eb"
              d="M469.982 186.09c-.943-.073-1.789 1.088-1.935 2.612a3.7 3.7 0 00.411 2.152 4.945 4.945 0 01-.024-1.04c.145-1.523.895-2.708 1.669-2.636.725.073 1.209 1.137 1.209 2.467a4.891 4.891 0 00.1-.629c.142-1.548-.512-2.854-1.43-2.926z"
              data-name="Path 104510"
              transform="translate(-403.021 -186.087)"
            ></path>
            <path
              fill="#0e70eb"
              d="M488.082 186.09c-.943-.073-1.79 1.088-1.935 2.612a3.7 3.7 0 00.411 2.152 4.947 4.947 0 01-.024-1.04c.145-1.523.895-2.708 1.669-2.636.725.073 1.209 1.137 1.209 2.467a4.9 4.9 0 00.1-.629c.142-1.548-.512-2.854-1.43-2.926z"
              data-name="Path 104511"
              transform="translate(-416.744 -186.087)"
            ></path>
            <g data-name="Group 118228" transform="translate(20.289 7.766)">
              <g data-name="Group 118221">
                <path
                  fill="#dad9db"
                  d="M285.422 218.418h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104512"
                  transform="translate(-283.1 -218.2)"
                ></path>
              </g>
              <g data-name="Group 118222" transform="translate(6.844 .024)">
                <path
                  fill="#dad9db"
                  d="M313.746 218.518h5.854l-2.007 5.417h-5.852l2.007-5.417m-.169-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104513"
                  transform="translate(-311.4 -218.3)"
                ></path>
              </g>
              <g data-name="Group 118223" transform="translate(13.711 .024)">
                <path
                  fill="#dad9db"
                  d="M342.122 218.518h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104514"
                  transform="translate(-339.8 -218.3)"
                ></path>
              </g>
              <g data-name="Group 118224" transform="translate(20.555 .024)">
                <path
                  fill="#dad9db"
                  d="M370.422 218.518h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104515"
                  transform="translate(-368.1 -218.3)"
                ></path>
              </g>
              <g data-name="Group 118225" transform="translate(27.471 .048)">
                <path
                  fill="#dad9db"
                  d="M399.046 218.618h5.854l-2.007 5.417h-5.852l2.007-5.417m-.169-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104516"
                  transform="translate(-396.7 -218.4)"
                ></path>
              </g>
              <g data-name="Group 118226" transform="translate(34.388 .048)">
                <path
                  fill="#dad9db"
                  d="M427.646 218.618h5.854l-2.007 5.417h-5.852l2.007-5.417m-.169-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104517"
                  transform="translate(-425.3 -218.4)"
                ></path>
              </g>
              <g data-name="Group 118227" transform="translate(41.304 .048)">
                <path
                  fill="#dad9db"
                  d="M456.246 218.618h5.854l-2.007 5.417h-5.852l2.007-5.417m-.169-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104518"
                  transform="translate(-453.9 -218.4)"
                ></path>
              </g>
              <path
                fill="#0e70eb"
                d="M345.787 224.152H339.5l2.176-5.852h6.312z"
                data-name="Path 104519"
                opacity="0.74"
                transform="translate(-325.861 -218.276)"
              ></path>
            </g>
            <g data-name="Group 118236" transform="translate(17.17 16.181)">
              <g data-name="Group 118229">
                <path
                  fill="#dad9db"
                  d="M272.522 253.218h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.175-5.852z"
                  data-name="Path 104520"
                  transform="translate(-270.2 -253)"
                ></path>
              </g>
              <g data-name="Group 118230" transform="translate(6.844)">
                <path
                  fill="#dad9db"
                  d="M300.822 253.218h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.175-5.852z"
                  data-name="Path 104521"
                  transform="translate(-298.5 -253)"
                ></path>
              </g>
              <g data-name="Group 118231" transform="translate(13.687 .024)">
                <path
                  fill="#dad9db"
                  d="M329.146 253.318H335l-2.007 5.417h-5.852l2.007-5.417m-.169-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104522"
                  transform="translate(-326.8 -253.1)"
                ></path>
              </g>
              <g data-name="Group 118232" transform="translate(20.555 .024)">
                <path
                  fill="#dad9db"
                  d="M357.522 253.318h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104523"
                  transform="translate(-355.2 -253.1)"
                ></path>
              </g>
              <g data-name="Group 118233" transform="translate(27.471 .024)">
                <path
                  fill="#dad9db"
                  d="M386.121 253.318h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104524"
                  transform="translate(-383.8 -253.1)"
                ></path>
              </g>
              <g data-name="Group 118234" transform="translate(34.388 .048)">
                <path
                  fill="#dad9db"
                  d="M414.721 253.418h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104525"
                  transform="translate(-412.4 -253.2)"
                ></path>
              </g>
              <g data-name="Group 118235" transform="translate(41.304 .048)">
                <path
                  fill="#dad9db"
                  d="M443.322 253.418h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218L441 259.052h6.312l2.176-5.852z"
                  data-name="Path 104526"
                  transform="translate(-441 -253.2)"
                ></path>
              </g>
            </g>
            <g data-name="Group 118244" transform="translate(14.026 24.573)">
              <g data-name="Group 118237">
                <path
                  fill="#dad9db"
                  d="M259.522 287.918h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104527"
                  transform="translate(-257.2 -287.7)"
                ></path>
              </g>
              <g data-name="Group 118238" transform="translate(6.868 .024)">
                <path
                  fill="#dad9db"
                  d="M287.922 288.018h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104528"
                  transform="translate(-285.6 -287.8)"
                ></path>
              </g>
              <g data-name="Group 118239" transform="translate(13.711 .024)">
                <path
                  fill="#dad9db"
                  d="M316.221 288.018h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104529"
                  transform="translate(-313.9 -287.8)"
                ></path>
              </g>
              <g data-name="Group 118240" transform="translate(20.579 .024)">
                <path
                  fill="#dad9db"
                  d="M344.622 288.018h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104530"
                  transform="translate(-342.3 -287.8)"
                ></path>
              </g>
              <g data-name="Group 118241" transform="translate(27.496 .048)">
                <path
                  fill="#dad9db"
                  d="M373.222 288.118h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104531"
                  transform="translate(-370.9 -287.9)"
                ></path>
              </g>
              <g data-name="Group 118242" transform="translate(34.412 .048)">
                <path
                  fill="#dad9db"
                  d="M401.822 288.118h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104532"
                  transform="translate(-399.5 -287.9)"
                ></path>
              </g>
              <g data-name="Group 118243" transform="translate(41.328 .073)">
                <path
                  fill="#dad9db"
                  d="M430.422 288.218h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.175-5.852z"
                  data-name="Path 104533"
                  transform="translate(-428.1 -288)"
                ></path>
              </g>
              <path
                fill="#0e70eb"
                d="M377.187 293.752H370.9l2.176-5.852h6.287z"
                data-name="Path 104534"
                opacity="0.74"
                transform="translate(-343.404 -287.852)"
              ></path>
            </g>
            <g data-name="Group 118252" transform="translate(10.906 32.988)">
              <g data-name="Group 118245">
                <path
                  fill="#dad9db"
                  d="M246.622 322.718h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104535"
                  transform="translate(-244.3 -322.5)"
                ></path>
              </g>
              <g data-name="Group 118246" transform="translate(6.844)">
                <path
                  fill="#dad9db"
                  d="M274.946 322.718h5.854l-2.007 5.417h-5.852l2.007-5.417m-.169-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104536"
                  transform="translate(-272.6 -322.5)"
                ></path>
              </g>
              <g data-name="Group 118247" transform="translate(13.711 .024)">
                <path
                  fill="#dad9db"
                  d="M303.322 322.818h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218L301 328.452h6.312l2.176-5.852z"
                  data-name="Path 104537"
                  transform="translate(-301 -322.6)"
                ></path>
              </g>
              <g data-name="Group 118248" transform="translate(20.555 .024)">
                <path
                  fill="#dad9db"
                  d="M331.622 322.818h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104538"
                  transform="translate(-329.3 -322.6)"
                ></path>
              </g>
              <g data-name="Group 118249" transform="translate(34.388 .048)">
                <path
                  fill="#dad9db"
                  d="M388.846 322.918h5.854l-2.031 5.417h-5.852l2.031-5.417m-.169-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104539"
                  transform="translate(-386.5 -322.7)"
                ></path>
              </g>
              <g data-name="Group 118250" transform="translate(41.328 .048)">
                <path
                  fill="#dad9db"
                  d="M417.522 322.918h5.852l-2.007 5.417h-5.852l2.007-5.417m-.145-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104540"
                  transform="translate(-415.2 -322.7)"
                ></path>
              </g>
              <g data-name="Group 118251" transform="translate(27.471 .024)">
                <path
                  fill="#dad9db"
                  d="M360.246 322.818h5.854l-2.007 5.417h-5.852l2.007-5.417m-.169-.218l-2.176 5.852h6.312l2.176-5.852z"
                  data-name="Path 104541"
                  transform="translate(-357.9 -322.6)"
                ></path>
              </g>
            </g>
          </g>
          <g data-name="Group 118261" transform="translate(66.686 5.465)">
            <g fill="#0e70eb" data-name="Group 118259" transform="translate(17.227)">
              <path
                d="M404.687 93.265L393.2 87.8l14.606 4.377z"
                data-name="Path 104555"
                transform="translate(-393.2 -87.8)"
              ></path>
              <path
                d="M405.748 93.644l-1.112 3.24L394.6 88.3z"
                data-name="Path 104556"
                transform="translate(-394.261 -88.179)"
              ></path>
              <path
                d="M405.748 93.644l-1.112 3.24L394.6 88.3z"
                data-name="Path 104557"
                opacity="0.45"
                transform="translate(-394.261 -88.179)"
              ></path>
              <path
                d="M403.768 93.628l-.193 2.878L393.2 87.8z"
                data-name="Path 104558"
                transform="translate(-393.2 -87.8)"
              ></path>
              <path
                d="M403.768 93.628l-.193 2.878L393.2 87.8z"
                data-name="Path 104559"
                opacity="0.2"
                transform="translate(-393.2 -87.8)"
              ></path>
              <path
                d="M399.318 95.055l4.45-1.427L393.2 87.8z"
                data-name="Path 104560"
                transform="translate(-393.2 -87.8)"
              ></path>
            </g>
            <g
              fill="none"
              stroke="#b5cae2"
              strokeDasharray="7.69 9.715"
              strokeWidth="1"
              data-name="Group 118260"
              transform="translate(0 9.165)"
            >
              <path
                d="M69.414 33.106c4.159 3.772 8.367 12.647 9.5 15.453a4.85 4.85 0 01.145 4.159c-3.071 5.78-23.191 1.04-44.907-10.544C12.436 30.566-2.678 16.492.393 10.737c1.741-3.265 8.9-3.168 18.693-.411"
                data-name="Path 104561"
              ></path>
              <path d="M29.56 0c11.922 6.916 27.689 17.6 38.281 30.76" data-name="Path 104562"></path>
            </g>
          </g>
        </g>
      </g>
    </SvgIcon>
  );
}

export function ServiceReminderDateIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 24,
    height: 24,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" data-name="Group 118265" viewBox="0 0 24 24" sx={rootSx} {...rest}>
      <path fill="none" d="M0 0H24V24H0z" data-name="Rectangle 57807"></path>
      <path
        fill="#0e70eb"
        d="M8.172 6A2.175 2.175 0 006 8.172v7.686a2.175 2.175 0 002.172 2.172h3.862a4.32 4.32 0 01-.475-1H8.172A1.171 1.171 0 017 15.858V9.676h10.028v1.883a4.308 4.308 0 011 .476V8.172A2.175 2.175 0 0015.858 6zm0 1h7.686a1.171 1.171 0 011.17 1.17v.5H7v-.5A1.171 1.171 0 018.172 7zm3.843 3.867a.431.431 0 00-.407.29l-.424 1.243H9.771a.43.43 0 00-.259.772l1.143.868-.387 1.239a.43.43 0 00.668.472l.424-.317a4.329 4.329 0 011.5-3.034h-.017l-.425-1.238a.431.431 0 00-.403-.293zm3.676 1.146a3.676 3.676 0 103.676 3.676 3.676 3.676 0 00-3.676-3.674zm-.334 1.337a.334.334 0 01.334.334v2.005h1.671a.334.334 0 110 .668h-2.005a.334.334 0 01-.334-.334v-2.337a.334.334 0 01.334-.334z"
        transform="translate(-1 -1)"
      ></path>{' '}
    </SvgIcon>
  );
}

export function MaintenanceEmptyState(props: IconProps) {

  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 124.082,
    height: 92.531,
    ...rootStyle,
  };

  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      width=""
      height=""
      sx={rootSx} {...rest}
      viewBox="0 0 124.082 92.531"
    >
      <g data-name="Group 114242" transform="translate(-117.262 -164.848)">
        <g
          data-name="illustration_16 [Converted] copy"
          transform="translate(117.262 164.848)"
        >
          <path
            fill="#000045"
            fillRule="evenodd"
            d="M626.932 893.955a2.257 2.257 0 00-2.266-2.255h-49.411a2.254 2.254 0 00-2.255 2.255v30a2.263 2.263 0 002.255 2.266h49.4a2.266 2.266 0 002.266-2.266c.011-6.249.011-23.741.011-30z"
            data-name="Path 28356"
            transform="translate(-556.751 -853.371)"
          ></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M618.722 883.455a2.257 2.257 0 00-2.266-2.255h-49.4a2.254 2.254 0 00-2.255 2.255v30a2.263 2.263 0 002.255 2.266h49.4a2.266 2.266 0 002.266-2.266z"
            data-name="Path 28357"
            transform="translate(-549.435 -844.004)"
          ></path>
          <path
            fill="#48596e"
            fillRule="evenodd"
            d="M572.579 1144.38a2.217 2.217 0 00-.637-1.543 2.172 2.172 0 00-1.543-.637H522.78a2.174 2.174 0 00-2.18 2.18v12.453a2.174 2.174 0 002.18 2.18h47.62a2.217 2.217 0 001.543-.637 2.171 2.171 0 00.637-1.543z"
            data-name="Path 28358"
            transform="translate(-510.005 -1076.84)"
          ></path>
          <path
            fill="#000045"
            fillRule="evenodd"
            d="M599.927 1038.442h22.639a.228.228 0 00.227-.227.219.219 0 00-.227-.216h-22.639a.226.226 0 00-.227.216.244.244 0 00.227.227z"
            data-name="Path 28359"
            transform="translate(-580.569 -983.884)"
          ></path>
          <path
            fill="#000045"
            fillRule="evenodd"
            d="M600.11 1087.742h34.638a.219.219 0 00.216-.227.216.216 0 00-.216-.216H600.11a.216.216 0 00-.216.216.213.213 0 00.216.227z"
            data-name="Path 28360"
            transform="translate(-580.742 -1027.864)"
          ></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M560.427 1259.442h19.812a.221.221 0 100-.442h-19.812a.228.228 0 00-.227.227.219.219 0 00.227.215z"
            data-name="Path 28361"
            transform="translate(-545.332 -1181.036)"
          ></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M560.427 1223.643h10.866a.221.221 0 100-.443h-10.866a.228.228 0 00-.227.227.219.219 0 00.227.216z"
            data-name="Path 28362"
            transform="translate(-545.332 -1149.1)"
          ></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M930.265 1223.978l3.3 3.3a.221.221 0 00.313-.313l-3.3-3.3a.221.221 0 00-.313.313z"
            data-name="Path 28363"
            transform="translate(-875.406 -1149.456)"
          ></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M933.667 1223.565l-3.3 3.3a.221.221 0 00.313.313l3.3-3.3a.221.221 0 00-.313-.313z"
            data-name="Path 28364"
            transform="translate(-875.495 -1149.367)"
          ></path>
          <path
            fill="#0e70eb"
            fillRule="evenodd"
            d="M938.184 833.844a6.408 6.408 0 112.331-.216l1.273 11.352a.647.647 0 01-.561.7c-.335.032-.734.075-1.057.119a.639.639 0 01-.7-.561zm.6-10.791a4.44 4.44 0 11-4.435 4.446 4.453 4.453 0 014.439-4.446z"
            data-name="Path 28365"
            transform="translate(-877.368 -790.389)"
          ></path>
          <path
            fill="#ffc8a3"
            fillRule="evenodd"
            d="M977.1 955s-.68.183-.842.658a3.512 3.512 0 00.14 1.457 1.636 1.636 0 00.032 1.964 2.366 2.366 0 00.183 1.975 1.016 1.016 0 00.173 1.122c.475.615 2.18.82 2.557.205a1.6 1.6 0 000-.982 2.026 2.026 0 00.14-1.478s.388-1.284-.367-1.9a2.158 2.158 0 00-.151-1.521l-.863-1.1z"
            data-name="Path 28366"
            transform="translate(-916.351 -909.841)"
          ></path>
          <path
            fill="#e89b68"
            fillRule="evenodd"
            d="M980.807 974.009l1.532.583a.223.223 0 00.291-.13.227.227 0 00-.129-.291l-1.532-.583a.237.237 0 00-.291.129.227.227 0 00.129.292z"
            data-name="Path 28367"
            transform="translate(-920.424 -926.411)"
          ></path>
          <path
            fill="#e89b68"
            fillRule="evenodd"
            d="M982.407 990.309l1.446.55a.223.223 0 00.291-.13.231.231 0 00-.13-.291l-1.457-.55a.224.224 0 00-.151.421z"
            data-name="Path 28368"
            transform="translate(-921.851 -940.952)"
          ></path>
          <path
            fill="#e89b68"
            fillRule="evenodd"
            d="M984.258 1006.9l1.4.529a.227.227 0 00.291-.129.232.232 0 00-.13-.291l-1.4-.529a.215.215 0 00-.281.129.218.218 0 00.12.291z"
            data-name="Path 28369"
            transform="translate(-923.508 -955.75)"
          ></path>
          <path
            fill="#e89b68"
            fillRule="evenodd"
            d="M1014.232 982.859a3.48 3.48 0 001.834 1.867.224.224 0 10.2-.4 3.032 3.032 0 01-1.6-1.6.231.231 0 00-.443.13z"
            data-name="Path 28370"
            transform="translate(-950.362 -934.441)"
          ></path>
          <path
            fill="#ffc8a3"
            fillRule="evenodd"
            d="M994.573 950.179s-2.018-2.816-2.644-3.885-2.946-1.888-3.777-2.245-1.176 1.759 1.284 2.191l.8 1.77.68 5.892.831.421z"
            data-name="Path 28371"
            transform="translate(-926.549 -900.034)"
          ></path>
          <path
            fill="#779ac5"
            fillRule="evenodd"
            d="M1032.933 1001.436s-3.841-3.572-5.525-3.583l-1.942-.971a.594.594 0 00-.7.13 16.431 16.431 0 00-2.881 4.392.587.587 0 00.032.486 13.612 13.612 0 001.284 1.932s-.5 1.446 3.1 4.7 8.244 7.144 12.42 8.125l-2.018-13.337z"
            data-name="Path 28372"
            transform="translate(-957.161 -947.148)"
          ></path>
          <path
            fill="#3b6394"
            fillRule="evenodd"
            d="M1103.853 1022.369a72.371 72.371 0 005.471 15.96l-1.629-.82A44.579 44.579 0 011103 1021.7z"
            data-name="Path 28373"
            transform="translate(-1029.559 -969.343)"
          ></path>
          <path
            fill="#ec880e"
            fillRule="evenodd"
            d="M1177.479 920.519l-.647-57.019s-6.4 4.176-6.744 4.791c-.291.54.6 1.867.518 2.493-.421 2.946-2.2 8.309-2.449 11.945-.518 7.64.475 28.347.378 37.8h8.946z"
            data-name="Path 28374"
            transform="translate(-1087.55 -828.214)"
          ></path>
          <path
            fill="#5179a9"
            fillRule="evenodd"
            d="M1197.434 916.683h31.7c-1.5-10.284-6.086-47.857-19.219-57.483l-3.388.82s-4.327 1.888-6.161 5.061c-1.63 2.827-2.784 6.453-2.924 12.6-.127 5.019-.17 28.135-.008 39.002z"
            data-name="Path 28375"
            transform="translate(-1113.709 -824.378)"
          ></path>
          <path
            fill="#becee1"
            fillRule="evenodd"
            d="M913.607 708.707l-3.831-6.043a.226.226 0 10-.378.248l3.831 6.043a.225.225 0 00.313.065.239.239 0 00.065-.313z"
            data-name="Path 28376"
            transform="translate(-856.817 -684.643)"
          ></path>
          <path
            fill="#becee1"
            fillRule="evenodd"
            d="M1331.1 735.629l2.6-2.741a.221.221 0 10-.324-.3l-2.6 2.741a.213.213 0 00.011.313.222.222 0 00.313-.013z"
            data-name="Path 28377"
            transform="translate(-1232.699 -711.361)"
          ></path>
          <path
            fill="#becee1"
            fillRule="evenodd"
            d="M682.569 751.092a1.388 1.388 0 00-1.392-1.392h-5.385a1.4 1.4 0 00-1.392 1.392v5.385a1.4 1.4 0 001.392 1.392h5.385a1.388 1.388 0 001.392-1.392zm-.442 0v5.385a.951.951 0 01-.95.95h-5.385a.942.942 0 01-.939-.95v-5.385a.939.939 0 01.939-.939h5.385a.942.942 0 01.949.939z"
            data-name="Path 28378"
            transform="translate(-647.209 -726.694)"
          ></path>
          <path
            fill="#becee1"
            fillRule="evenodd"
            d="M797.2 793.685a.882.882 0 00-.885-.885h-3.334a.889.889 0 00-.885.885v3.334a.889.889 0 00.885.885h3.334a.882.882 0 00.885-.885zm-.453 0v3.334a.444.444 0 01-.443.443h-3.334a.444.444 0 01-.442-.443v-3.334a.444.444 0 01.442-.442h3.334a.438.438 0 01.447.442z"
            data-name="Path 28379"
            transform="translate(-752.208 -765.143)"
          ></path>
          <path
            fill="#becee1"
            fillRule="evenodd"
            d="M1082.678 1292.4a1.478 1.478 0 101.478 1.478 1.474 1.474 0 00-1.478-1.478zm0 .443a1.036 1.036 0 11-1.036 1.036 1.036 1.036 0 011.036-1.036z"
            data-name="Path 28380"
            transform="translate(-1010.112 -1210.832)"
          ></path>
          <path
            fill="#becee1"
            fillRule="evenodd"
            d="M1410.687 842.5a1.192 1.192 0 101.2 1.2 1.186 1.186 0 00-1.2-1.2zm0 .453a.745.745 0 11-.745.745.746.746 0 01.745-.745z"
            data-name="Path 28381"
            transform="translate(-1302.985 -809.48)"
          ></path>
          <path
            fill="#becee1"
            fillRule="evenodd"
            d="M1263.569 560.844a2.446 2.446 0 114.726 1.263 2.418 2.418 0 01-2.374 1.8 1.108 1.108 0 00-1.079.831c-.205.745-.486 1.791-.486 1.791a.222.222 0 00.162.27.216.216 0 00.27-.151s.281-1.047.486-1.791a.67.67 0 01.647-.5 2.888 2.888 0 10-2.784-3.636.222.222 0 00.162.27.216.216 0 00.27-.147z"
            data-name="Path 28382"
            transform="translate(-1172.41 -556.204)"
          ></path>
          <path
            fill="#becee1"
            fillRule="evenodd"
            d="M1141.628 539.069a1.7 1.7 0 112.59.982 1.1 1.1 0 00-.453 1.209c.13.518.291 1.122.291 1.122a.229.229 0 00.281.162.222.222 0 00.162-.27s-.162-.594-.3-1.112a.652.652 0 01.281-.723 2.149 2.149 0 10-3.27-1.23.216.216 0 00.27.151.249.249 0 00.148-.291z"
            data-name="Path 28383"
            transform="translate(-1063.579 -536.501)"
          ></path>
          <path
            fill="#becee1"
            d="M1265.593 645.835a.687.687 0 10-.486-.842.687.687 0 00.486.842z"
            data-name="Path 28384"
            transform="translate(-1174.153 -632.832)"
          ></path>
          <path
            fill="#becee1"
            d="M1169.65 600a.492.492 0 10-.6-.345.495.495 0 00.6.345z"
            data-name="Path 28385"
            transform="translate(-1088.462 -592.28)"
          ></path>
          <path
            fill="#fff"
            fillRule="evenodd"
            d="M469.9 995.345c.8 1.446-.55 3.777-3.043 5.212s-5.18 1.446-6.032.032c0-.011-.011-.011-.011-.022a.011.011 0 00-.011-.011c-.8-1.457.55-3.777 3.043-5.212s5.18-1.446 6.032-.022l.011.011c.011 0 .011 0 .011.011z"
            data-name="Path 28386"
            transform="translate(-456.455 -944.866)"
          ></path>
          <path
            fill="#becee1"
            fillRule="evenodd"
            d="M458.891 998.876c-.011-.011-.022-.032-.032-.043a2.553 2.553 0 010-2.244 8.063 8.063 0 017.532-4.338 2.593 2.593 0 011.942 1.122l-.183.313-.011.022.011-.022a1.014 1.014 0 00-.086-.356c-.011-.032-.022-.043-.043-.032-.119.065-.1.162-.043.248a.351.351 0 00.108.14l.043.022a.755.755 0 01-.151-.162.143.143 0 01.054-.216h.022a1.891 1.891 0 01.076.378h.011v-.008l.183-.313.022.032.011.011a2.58 2.58 0 010 2.223 8.063 8.063 0 01-7.532 4.338 2.542 2.542 0 01-1.932-1.111.011.011 0 01-.011-.011l-.022-.032a.149.149 0 00.032.043zm9.043-5.277l.011.022a.227.227 0 00.194.108.227.227 0 01-.194-.119 2.114 2.114 0 01-.022 1.856 7.618 7.618 0 01-7.046 4.068 2.153 2.153 0 01-1.619-.906l-.011-.022v-.006a2.114 2.114 0 01.022-1.856 7.618 7.618 0 017.046-4.068 2.2 2.2 0 011.619.928zm-8.859 5.363l-.011.011zm-.1-.4c-.011-.032-.022-.043-.043-.032-.119.065-.1.162-.043.248a.7.7 0 00.129.162H459a.04.04 0 01.032.011h.011c.011 0 .011.011.022.011l.011.011v-.032h-.011a.755.755 0 01-.151-.162.143.143 0 01.054-.216h.011a1.887 1.887 0 01.076.378l.011-.022a1.013 1.013 0 00-.089-.356zm9.161-4.867v.043l-.011-.011-.022-.022h.022z"
            data-name="Path 28387"
            transform="translate(-454.695 -943.034)"
          ></path>
          <path
            fill="#000045"
            fillRule="evenodd"
            d="M604.59 923.65c-.011-.011-.021-.032-.032-.043a2.579 2.579 0 01-.032-2.245 8.047 8.047 0 017.467-4.435 2.583 2.583 0 011.953 1.1l-.173.324-.011.022.011-.022a.955.955 0 00-.086-.356c-.011-.032-.022-.043-.043-.032-.119.065-.1.173-.032.259a.683.683 0 00.108.129l.043.022a.544.544 0 01-.151-.162.156.156 0 01.054-.227h.022a1.89 1.89 0 01.076.378h.011v-.022l.183-.313.022.032.011.011a2.573 2.573 0 01.022 2.223 8.048 8.048 0 01-7.478 4.435 2.494 2.494 0 01-1.942-1.079c-.011 0-.011 0-.011-.011l-.022-.032c0 .011.011.022.032.043zm8.989-5.374l.011.022a.227.227 0 00.194.108.227.227 0 01-.194-.119 2.144 2.144 0 010 1.856 7.651 7.651 0 01-7 4.154 2.166 2.166 0 01-1.629-.9l-.011-.022a2.145 2.145 0 010-1.856 7.616 7.616 0 017-4.144 2.121 2.121 0 011.629.9zm-8.805 5.449l-.011.011zm-.1-.388c-.011-.032-.022-.043-.043-.032-.119.065-.1.173-.032.259a.5.5 0 00.129.162h-.011l.011.011a.038.038 0 00.022.011l.011.011v-.032h-.011a.545.545 0 01-.151-.162.149.149 0 01.054-.227c0-.011.011-.011.022 0a1.893 1.893 0 01.076.378l.011-.022a1.72 1.72 0 00-.086-.357zm9.1-4.975v.032l-.011-.011a.011.011 0 01-.011-.011l-.011-.011h.032z"
            data-name="Path 28388"
            transform="translate(-584.661 -875.847)"
          ></path>
          <path
            fill="#becee1"
            d="M481.875 1006.555a2.939 2.939 0 10-4.014-1.079 2.944 2.944 0 004.014 1.079z"
            data-name="Path 28389"
            transform="translate(-471.529 -950.939)"
          ></path>
          <path
            fill="#becee1"
            fillRule="evenodd"
            d="M476.942 999.427a3.159 3.159 0 104.316 1.155 3.159 3.159 0 00-4.316-1.155zm.227.388a2.717 2.717 0 11-.993 3.712 2.728 2.728 0 01.993-3.712z"
            data-name="Path 28390"
            transform="translate(-469.649 -949.099)"
          ></path>
          <path
            fill="#000045"
            fillRule="evenodd"
            d="M624.155 926.257a3.017 3.017 0 104.133 1.057 3.015 3.015 0 00-4.133-1.057zm.227.388a2.571 2.571 0 11-.906 3.529 2.561 2.561 0 01.905-3.528z"
            data-name="Path 28391"
            transform="translate(-601.064 -883.828)"
          ></path>
          <path
            fill="#becee1"
            fillRule="evenodd"
            d="M461.949 954.39l2.223 3.852a.222.222 0 10.388-.216l-2.223-3.852a.228.228 0 00-.3-.086.221.221 0 00-.088.302z"
            data-name="Path 28392"
            transform="translate(-457.655 -909.004)"
          ></path>
          <path
            fill="#becee1"
            fillRule="evenodd"
            d="M511.749 939.253l-.68 3.572a.22.22 0 00.432.086l.68-3.583a.221.221 0 00-.183-.259.216.216 0 00-.249.184z"
            data-name="Path 28393"
            transform="translate(-501.5 -895.626)"
          ></path>
          <path
            fill="#becee1"
            fillRule="evenodd"
            d="M422.564 996.91l3.442 1.2a.222.222 0 10.14-.421l-3.442-1.2a.213.213 0 00-.281.14.231.231 0 00.141.281z"
            data-name="Path 28394"
            transform="translate(-422.414 -946.841)"
          ></path>
          <path
            fill="#ffc8a3"
            fillRule="evenodd"
            d="M1087.712 891.053a21.319 21.319 0 00-2.126-7.305 12.474 12.474 0 00-6.615 1.1 2.833 2.833 0 001.09 3.971 5.15 5.15 0 002.212 1.77l.421 1.716 2.892 2.05z"
            data-name="Path 28395"
            transform="translate(-1007.753 -846.207)"
          ></path>
          <path
            fill="#5179a9"
            fillRule="evenodd"
            d="M1120.078 940.077c.82 2.083 1.694 4.586 1.694 4.586l3.41-10.661a5.8 5.8 0 016.885-2.083c4.37 1.683 4.78 7.715 3.065 11.33s-6.766 17.546-12.183 19.013-7.381-2.913-9.172-8.331c0 0-5.989-13.553-3.518-15.452a15.974 15.974 0 01-.388-2.957.744.744 0 01.5-.691c1.057-.356 3.583-1.2 4.91-1.532a.7.7 0 01.745.3 21.863 21.863 0 011.521 2.579s.712 0 1.554 1.64a20.361 20.361 0 01.977 2.259z"
            data-name="Path 28396"
            transform="translate(-1035.501 -888.864)"
          ></path>
          <path
            fill="#3b6394"
            fillRule="evenodd"
            d="M1214.342 1020.7s-5.352 13.866-9.075 17.924-6.938 3.539-7.866 3.2v1.5s7.737 1.565 12.032-8.471c4.142-9.61 4.909-14.153 4.909-14.153z"
            data-name="Path 28397"
            transform="translate(-1113.773 -968.451)"
          ></path>
          <path
            fill="#3b6394"
            fillRule="evenodd"
            d="M1220.768 952.9a14.538 14.538 0 00-2.633 3.949c-.745 1.759-2.083 6.518-2.083 6.518l-.853-1.629s1.565-3.626 2.363-5.18a10.56 10.56 0 013.206-3.658z"
            data-name="Path 28398"
            transform="translate(-1129.652 -907.967)"
          ></path>
          <path
            fill="#3b6394"
            fillRule="evenodd"
            d="M1200.4 997.1l2.309 6.1.583-1.8z"
            data-name="Path 28399"
            transform="translate(-1116.449 -947.398)"
          ></path>
          <path
            fill="#e89b68"
            fillRule="evenodd"
            d="M1090.691 915.115a5.326 5.326 0 01-.356-1.446.215.215 0 00-.248-.194.222.222 0 00-.194.248 5.694 5.694 0 00.389 1.565.21.21 0 00.291.119.231.231 0 00.118-.292z"
            data-name="Path 28400"
            transform="translate(-1017.865 -872.794)"
          ></path>
          <path
            fill="#000045"
            fillRule="evenodd"
            d="M610.127 1390.343h103.4a.226.226 0 00.227-.216.235.235 0 00-.227-.227h-103.4a.221.221 0 100 .443z"
            data-name="Path 28401"
            transform="translate(-589.669 -1297.811)"
          ></path>
          <path
            fill="#ffc8a3"
            fillRule="evenodd"
            d="M1054.4 746.126a21.73 21.73 0 002.482 4.565s-.032 3.658 2.029 2.255c0 0 3.518 4.7 7.694.669l2.752 3.863 8.212-5.762-4.1-4.921-7.413-6.9-8.827.281z"
            data-name="Path 28402"
            transform="translate(-986.204 -717.951)"
          ></path>
          <path
            fill="#000045"
            fillRule="evenodd"
            d="M1153.406 766.165a8.373 8.373 0 00-1.629 2.644.227.227 0 00.119.291.223.223 0 00.291-.13 8.067 8.067 0 011.532-2.493.221.221 0 00-.313-.313z"
            data-name="Path 28403"
            transform="translate(-1073.059 -741.325)"
          ></path>
          <path
            fill="#000045"
            fillRule="evenodd"
            d="M1157.862 780.816a7.4 7.4 0 00-1.435-.216.235.235 0 00-.227.227.226.226 0 00.216.227 6.671 6.671 0 011.327.2.222.222 0 00.27-.162.2.2 0 00-.151-.276z"
            data-name="Path 28404"
            transform="translate(-1077.019 -754.26)"
          ></path>
          <path
            fill="#000045"
            d="M1088.218 815.831a.656.656 0 10-.874-.313.66.66 0 00.874.313z"
            data-name="Path 28405"
            transform="translate(-1015.533 -784.57)"
          ></path>
          <path
            fill="#000045"
            fillRule="evenodd"
            d="M1044.361 661.7s2.763 9.841 2.439 10.2c-.335.378-4.025-9.723-4.025-9.723a9.362 9.362 0 01-1.317.464l-2.093-3.313.917 3.788a37.051 37.051 0 01-5.611 2.709s-4.91-7.91 1.683-13.575 20.211-6.118 20.513 11.633l-3.647 3.183a8.651 8.651 0 01-5.341-1.867 3.177 3.177 0 001.187-1.155 2.426 2.426 0 00-.3-2.655c-1.74-2.417-4.405.311-4.405.311z"
            data-name="Path 28406"
            transform="translate(-967.035 -636.646)"
          ></path>
          <path
            fill="#000045"
            fillRule="evenodd"
            d="M1076.635 796.436a1.41 1.41 0 01.507-.82 1.725 1.725 0 011.932-.291.227.227 0 00.3-.108.217.217 0 00-.108-.291 2.117 2.117 0 00-2.406.356 1.965 1.965 0 00-.669 1.111.219.219 0 00.205.237.2.2 0 00.239-.194z"
            data-name="Path 28407"
            transform="translate(-1005.644 -766.837)"
          ></path>
          <path
            fill="#000045"
            fillRule="evenodd"
            d="M1163.29 791.735a3.509 3.509 0 01-2.007 1.349.232.232 0 00-.151.281.227.227 0 00.281.151 3.821 3.821 0 002.266-1.565.228.228 0 00-.086-.3.216.216 0 00-.303.084z"
            data-name="Path 28408"
            transform="translate(-1081.41 -764.089)"
          ></path>
          <path
            fill="#ec880e"
            fillRule="evenodd"
            d="M1224.4 789.186a.827.827 0 00-1.176-.086c-.809.7-2.2 1.91-3.011 2.6a.83.83 0 101.09 1.252c.809-.7 2.2-1.9 3.011-2.6a.823.823 0 00.086-1.166z"
            data-name="Path 28409"
            transform="translate(-1133.869 -761.659)"
          ></path>
          <path
            fill="#000045"
            fillRule="evenodd"
            d="M1113.67 858.468a4.168 4.168 0 011.629-.216.222.222 0 10.032-.442 4.67 4.67 0 00-1.8.237.217.217 0 00-.14.281.231.231 0 00.279.14z"
            data-name="Path 28410"
            transform="translate(-1038.815 -823.128)"
          ></path>
          <path
            fill="#000045"
            fillRule="evenodd"
            d="M1229.219 803.282s-1.424 5.622 4.047 11.093l6.852-5.3-.982-1.683 1.651.885 2.514-1.856s-3.431-6.787-10.92-5.935z"
            data-name="Path 28411"
            transform="translate(-1142.01 -771.935)"
          ></path>
          <path
            fill="#e89b68"
            fillRule="evenodd"
            d="M1167.5 842.3a20.728 20.728 0 002.708-3l.95 6.183-.906.669z"
            data-name="Path 28412"
            transform="translate(-1087.099 -806.625)"
          ></path>
        </g>
      </g>
    </SvgIcon>
  );
}

export function ServiceReminderSearchIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 123.59,
    height: 88.217,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.59 88.217" sx={rootSx} {...rest}>
      <g data-name="Group 118992" transform="translate(-118.278 -493.73)">
        <g data-name="binoculars_1 [Converted] copy" transform="translate(118.278 493.73)">
          <path
            fill="#e2eaf4"
            d="M676.851 418.92c-13.118 1.324-15.816 13.554-32.273 12.2-33.186-2.739-41.2 20.009-36.859 32.721 7.053 20.649 48.428 28.7 75.331 21.307 10.5-2.886 16.189-7.414 18.208-9.148 9.076-7.8 19.179-23.942 11.112-38.974-6.535-12.196-22.736-19.392-35.519-18.106z"
            data-name="Path 104563"
            opacity="0.33"
            transform="translate(-604.916 -410.842)"
          ></path>
          <path
            fill="#fff"
            d="M1399.481 465.206a5.5 5.5 0 01-1.022-1.106 4.978 4.978 0 01.251 1.479c-.13.335-1.21.959-1.21.959a5.031 5.031 0 011.424-.13c.335.13 1.018 1.089 1.018 1.089a4.2 4.2 0 01-.13-1.428 5.676 5.676 0 011.089-1.014 4.21 4.21 0 01-1.42.151z"
            data-name="Path 104608"
            transform="translate(-1362.044 -459.057)"
          ></path>
          <path
            fill="#fff"
            d="M552.981 752.606a5.5 5.5 0 01-1.022-1.106 4.983 4.983 0 01.251 1.479c-.13.335-1.21.959-1.21.959a5.032 5.032 0 011.424-.13c.335.13 1.018 1.089 1.018 1.089a4.207 4.207 0 01-.13-1.428 5.678 5.678 0 011.089-1.014 4.193 4.193 0 01-1.42.151z"
            data-name="Path 104609"
            transform="translate(-551 -734.419)"
          ></path>
          <path
            fill="#fff"
            d="M3138.181 581.006a5.5 5.5 0 01-1.022-1.106 4.985 4.985 0 01.251 1.479c-.13.335-1.21.959-1.21.959a5.032 5.032 0 011.424-.13c.335.13 1.018 1.089 1.018 1.089a4.2 4.2 0 01-.13-1.428 5.677 5.677 0 011.089-1.014 4.2 4.2 0 01-1.42.151z"
            data-name="Path 104610"
            transform="translate(-3027.918 -570.007)"
          ></path>
          <path
            fill="#fff"
            d="M937.919 551.207a4.527 4.527 0 01-1.332.465c-.331-.071-1.081-.972-1.081-.972a4.7 4.7 0 01.344 1.3 4.451 4.451 0 01-.85 1.114 3.867 3.867 0 011.3-.343 5.4 5.4 0 011.11.85 4.049 4.049 0 01-.36-1.29 5.314 5.314 0 01.869-1.124z"
            data-name="Path 104611"
            transform="translate(-918.916 -542.03)"
          ></path>
          <path
            fill="#fff"
            d="M1110.558 344.106a3.717 3.717 0 01-1.076.377c-.268-.055-.875-.783-.875-.783a3.828 3.828 0 01.281 1.051 3.518 3.518 0 01-.687.9 3.12 3.12 0 011.055-.276 4.3 4.3 0 01.9.687 3.172 3.172 0 01-.289-1.043 3.892 3.892 0 01.691-.913z"
            data-name="Path 104612"
            transform="translate(-1084.862 -343.7)"
          ></path>
          <path
            fill="#fff"
            d="M566.258 477.006a3.719 3.719 0 01-1.076.377c-.268-.054-.875-.783-.875-.783a3.822 3.822 0 01.281 1.051 3.512 3.512 0 01-.687.9 3.117 3.117 0 011.056-.276 4.3 4.3 0 01.9.687 3.172 3.172 0 01-.289-1.043 3.892 3.892 0 01.69-.913z"
            data-name="Path 104613"
            transform="translate(-563.36 -471.033)"
          ></path>
          <path
            fill="#fff"
            d="M3447.758 823.106a3.715 3.715 0 01-1.076.377c-.268-.054-.875-.783-.875-.783a3.82 3.82 0 01.281 1.051 3.511 3.511 0 01-.687.9 3.121 3.121 0 011.056-.276 4.3 4.3 0 01.9.687 3.169 3.169 0 01-.289-1.043 3.887 3.887 0 01.69-.913z"
            data-name="Path 104614"
            transform="translate(-3324.167 -802.637)"
          ></path>
          <path
            fill="#fff"
            d="M3012.958 344.106a3.72 3.72 0 01-1.077.377c-.268-.055-.875-.783-.875-.783a3.829 3.829 0 01.281 1.051 3.518 3.518 0 01-.687.9 3.119 3.119 0 011.055-.276 4.305 4.305 0 01.9.687 3.176 3.176 0 01-.289-1.043 3.9 3.9 0 01.692-.913z"
            data-name="Path 104615"
            transform="translate(-2907.579 -343.7)"
          ></path>
          <g data-name="Group 118296" transform="translate(16.084 7.929)">
            <path
              fill="#18539b"
              d="M1982.76 1326.144a60.524 60.524 0 00-20.984-4.645c-2.237.017-18.447.13-18.819 3.271-.109.917 1.2 1.759 3.824 3.447a38.594 38.594 0 0010.5 4.532 92.223 92.223 0 0010.928 1.579c6.434.712 10.991 1.65 14.786-.641 3.205-1.943.536-7.233-.235-7.543z"
              data-name="Path 104616"
              transform="translate(-1897.07 -1282.196)"
            ></path>
            <path
              fill="#3872b8"
              d="M2451.648 1332.06a24.553 24.553 0 01-7.912-8.168 52.41 52.41 0 00-2.036-.193c.214 3.807 7 8.863 6.873 11.439a1.961 1.961 0 01-.951 1.474c5.621.666 9.747 1.282 13.227-.821a3.062 3.062 0 001.148-1.2 20.024 20.024 0 01-10.349-2.531z"
              data-name="Path 104617"
              transform="translate(-2374.93 -1284.305)"
            ></path>
            <path
              fill="#171718"
              d="M1750.456 394.8a5.626 5.626 0 01-2.107-2.107c-.863-1.357-.708-2.174-1.16-3.481a9.13 9.13 0 00-3.69-4.427 10.327 10.327 0 00-6.748-1.583c-2.2.247-5.944 1.391-6.22 3.481-.138 1.047.633 2.057 1.474 3.162a9.763 9.763 0 002.53 2.32c3.7 2.245 6.924-.419 8.855 1.37 1.776 1.646 1.009 5.692.528 8.222-.57 2.991-1.717 5.215-.632 6.325.7.716-.779-.31-.4.6.251.6-1.734-.26-2.211.188-.612.57.989 4.038 1.131 4.327.637 1.261-.771 1 1.081 1.005 1.592 0 2.639.377 4.691-.507 1.466-.628.988-1.382 2.354-2.132s1.709-.662 2-1.16c.452-.767-.151-1.328.318-2.32.335-.712.729-.595 1.16-1.265a3.648 3.648 0 00-.209-3.9c-.779-1.009-1.86-.917-1.9-1.474-.055-.762 1.952-.867 2.739-2.425a3.034 3.034 0 00-.318-3.267c-.795-.812-1.7-.117-3.266-.952z"
              data-name="Path 104618"
              transform="translate(-1693.532 -383.142)"
            ></path>
            <path
              fill="#171718"
              d="M1579.462 494.642c-1.487-.235-2.647.8-4.218 2.216a12.142 12.142 0 00-2.953 4.113c-.771 1.638-1.294 2.748-.842 3.795.339.787.947.892 1.37 2a2.948 2.948 0 01.209 2c-.427 1.252-1.868 1.076-2.425 2.425a2.883 2.883 0 000 2c.532 1.311 1.9 1.265 2 2.216.08.7-.649.942-.737 2.216a2.347 2.347 0 00.1 1.055c.226.578.817 1.081 2.634 1.583 2.467.679 3.7 1.018 4.532.423 1.278-.922.792-3.443.528-5.588-1.231-9.96-.511-11.468.318-12.758 1.148-1.788 2.526-1.981 2.634-3.585a4.149 4.149 0 00-3.15-4.111z"
              data-name="Path 104619"
              transform="translate(-1540.144 -489.94)"
            ></path>
            <path
              fill="#ea9488"
              d="M1618.8 910.766a5.259 5.259 0 01-3.058-1.793 4.765 4.765 0 01-.737-2.216c-.335-2.031.117-2.932 0-3.795-.482-3.535-10.521-6.2-11.807-4.113-.318.519.167.9.632 2.953.373 1.654 1.219 5.395-.528 7.276-.641.691-1.479.963-3.058 1.474-2.09.679-3.016.427-3.162.842-.319.913 3.539 3.82 8.117 4.955a18.242 18.242 0 0011.07-.842c3.112-1.3 5.78-3.522 5.483-4.218-.166-.38-1.1.001-2.952-.523z"
              data-name="Path 104620"
              transform="translate(-1565.669 -876.544)"
            ></path>
            <path
              fill="#c36252"
              d="M1752.971 902.963c-.482-3.535-10.521-6.2-11.807-4.113-.318.52.168.9.632 2.953a20.01 20.01 0 01.519 3.25c1.24 2.262 2.928 3.736 4.62 3.941 1.893.23 4.184-1.085 5.914-3.573-.02-1.147.21-1.813.122-2.458z"
              data-name="Path 104621"
              transform="translate(-1703.638 -876.544)"
            ></path>
            <path
              fill="#3872b8"
              d="M1394.43 1201.32a133.183 133.183 0 013.146-13.864c1.152-3.761 5.483-3.648 4.364-5.567-.264-.452-1.834-1.68-4.888-2.777a29.144 29.144 0 00-11.577-1.5c-1.4.059-.637 3.615-7.883 3.824-7.426.214-7.82-4.222-8.9-4.008a38.267 38.267 0 00-10.438 3.267 13.5 13.5 0 00-2.882 1.809c-2.852 3.64 6.76 8.457 6.187 32.947a64.921 64.921 0 01-.859 8.988h34.183a83.442 83.442 0 01-.453-23.119z"
              data-name="Path 104622"
              transform="translate(-1333.595 -1144.153)"
            ></path>
            <path
              fill="#fff"
              d="M1639.5 1181.337c-7.426.214-7.82-4.222-8.9-4.008-.783.151-1.587.314-2.4.5 2 2.417 5.366 5.378 10.036 5.717 1.169.084 6.492.469 9.487-3.322a8.393 8.393 0 001.424-2.748c-.57 0-1.152.017-1.759.042-1.404.054-.633 3.614-7.888 3.819z"
              data-name="Path 104623"
              transform="translate(-1595.504 -1144.057)"
            ></path>
            <path
              fill="#ea9488"
              d="M1709.739 561.737a8 8 0 00-1.265-2.53 8.342 8.342 0 00-4-2.739 10.446 10.446 0 00-5.06-.528 6.548 6.548 0 00-3.058.951 6.084 6.084 0 00-1.9 2.107 12.964 12.964 0 00-1.474 7.171c.092 3.141.18 6.195 2.321 9.068.636.859 2.877 3.862 6.22 3.9a6.572 6.572 0 003.162-.842 9.477 9.477 0 004-4.85 15.328 15.328 0 001.265-4.427 22.062 22.062 0 00.1-5.164 8.694 8.694 0 00-.311-2.117z"
              data-name="Path 104624"
              transform="translate(-1657.561 -548.603)"
            ></path>
            <path
              fill="#dd7472"
              d="M1840.9 982.269a6.149 6.149 0 01-1.642 0c-1.072-.142-1.432-.561-1.642-.427-.431.276.632 1.583 2.568 1.575 1.684 0 2.827-1.165 2.5-1.546-.184-.231-.628.238-1.784.398z"
              data-name="Path 104625"
              transform="translate(-1796.06 -956.733)"
            ></path>
            <g data-name="Group 118276" transform="translate(42.456 21.449)">
              <path
                fill="#dd7472"
                d="M1863.793 895.383l-.017.008a.234.234 0 00-.151.247.611.611 0 01-.038.318.889.889 0 01-.758.41 1.1 1.1 0 01-1.064-.532.892.892 0 01-.088-.369.232.232 0 00-.193-.222h-.021a.231.231 0 00-.264.23 1.391 1.391 0 00.134.57 1.561 1.561 0 001.4.8 1.244 1.244 0 00.125 0 1.29 1.29 0 001.156-.7 1.052 1.052 0 00.071-.574.221.221 0 00-.292-.186z"
                data-name="Path 104626"
                transform="translate(-1861.2 -895.238)"
              ></path>
            </g>
            <path
              fill="#543434"
              d="M1955.69 786.59c-.415.017-.733.519-.712 1.127s.377 1.089.8 1.072.733-.52.712-1.127-.381-1.089-.8-1.072z"
              data-name="Path 104627"
              transform="translate(-1908.593 -769.691)"
            ></path>
            <g data-name="Group 118277" transform="translate(45.964 14.39)">
              <path
                fill="#36476b"
                d="M1948.67 726.748a4.285 4.285 0 00-3.564 1.014.418.418 0 00-.008.624l.017.017a.416.416 0 00.553.008 3.422 3.422 0 011.143-.674 3.479 3.479 0 011.718-.142.422.422 0 00.473-.3v-.021a.421.421 0 00-.332-.526z"
                data-name="Path 104628"
                transform="translate(-1944.962 -726.689)"
              ></path>
            </g>
            <path
              fill="#49302a"
              d="M1787.374 786.59c-.415-.017-.771.465-.8 1.072s.3 1.114.712 1.127.771-.465.8-1.072-.294-1.11-.712-1.127z"
              data-name="Path 104629"
              transform="translate(-1747.247 -769.691)"
            ></path>
            <g data-name="Group 118278" transform="translate(37.618 15.193)">
              <path
                fill="#36476b"
                d="M1749.651 746.433a4.339 4.339 0 00-1.562-.524 4.383 4.383 0 00-2.136.268.415.415 0 00-.218.578l.008.021a.418.418 0 00.524.193 3.436 3.436 0 012.97.209.414.414 0 00.54-.122l.013-.017a.417.417 0 00-.139-.606z"
                data-name="Path 104630"
                transform="translate(-1745.688 -745.875)"
              ></path>
            </g>
            <path
              fill="#ea847d"
              d="M1989.926 856c-.612.042-1.085.385-1.055.767s.54.658 1.152.616 1.085-.385 1.055-.766-.54-.656-1.152-.617z"
              data-name="Path 104631"
              transform="translate(-1941.066 -836.193)"
            ></path>
            <path
              fill="#ea847d"
              d="M1742.357 855.181c-.67-.13-1.277.1-1.357.519s.394.863 1.064.993 1.277-.1 1.357-.52-.398-.862-1.064-.992z"
              data-name="Path 104632"
              transform="translate(-1703.571 -835.375)"
            ></path>
            <path
              fill="#171718"
              d="M1790.09 514.559a9.271 9.271 0 00-9.542-1.474c-.729.314-2.7 1.169-2.848 2.635-.155 1.541 1.784 3.045 3.322 3.585a10.985 10.985 0 004.8.209 5.2 5.2 0 012.161-.1 4.841 4.841 0 012.107 1.106c2.023 1.9 1.231 5.324 1.688 5.378.431.05 1.826-2.982 1.16-6.325a9 9 0 00-2.848-5.014z"
              data-name="Path 104633"
              transform="translate(-1738.733 -506.963)"
            ></path>
            <g data-name="Group 118282" transform="translate(51.329 17.416)">
              <g data-name="Group 118279" transform="translate(0 .064)">
                <path
                  fill="#f6a698"
                  d="M2075.756 800.534c-.842-.289-1.68.645-1.721.7-1.3 1.55-1.257 5.2-.268 5.55.222.08.762-.511 1.089-.708a3.991 3.991 0 002.01-3.217c.017-.817-.297-2.049-1.11-2.325z"
                  data-name="Path 104634"
                  transform="translate(-2073.039 -800.478)"
                ></path>
              </g>
              <g data-name="Group 118280" transform="translate(.816 1.792)">
                <path
                  fill="#c36252"
                  d="M2107.7 902.263l.063-.063a.363.363 0 00-.063.063z"
                  data-name="Path 104635"
                  transform="translate(-2107.064 -899.668)"
                ></path>
                <path
                  fill="#dd7472"
                  d="M2093.249 841.771a1.083 1.083 0 00-.72.691.222.222 0 00.146.3.2.2 0 00.222-.138.669.669 0 01.436-.427.6.6 0 01.628.31 1.179 1.179 0 01-.13.968 2.687 2.687 0 01-.5.691c.108-.109.192-.188 0 .008a1.072 1.072 0 01-.088.084l-.083.084c-.385.381-.071.436-.042.436.272.017.574-.327.741-.549a2.049 2.049 0 00.457-1.939.989.989 0 00-1.067-.519z"
                  data-name="Path 104636"
                  transform="translate(-2092.513 -841.748)"
                ></path>
                <path
                  fill="#c36252"
                  d="M2109.221 899.592c.033-.034.063-.063.088-.084a.015.015 0 000-.008l-.113.113c.004-.013.017-.013.025-.021z"
                  data-name="Path 104637"
                  transform="translate(-2108.501 -897.081)"
                ></path>
              </g>
              <g data-name="Group 118281" transform="translate(.203)">
                <path
                  fill="#dd7472"
                  d="M2080.761 799.142a1.293 1.293 0 00-.993-.147 1.971 1.971 0 00-1.194.871.235.235 0 00.054.318.183.183 0 00.26-.059 1.567 1.567 0 01.943-.7.958.958 0 01.72.092 1.2 1.2 0 01.436.691 3.256 3.256 0 01.021 1.851c-.318 1.261-1.148 2.237-1.55 2.283-.125.013-.172.122-.226.243-.151.335-.339.641-.687.624-.172-.008-.243-.059-.264-.335a.207.207 0 00-.2-.205.215.215 0 00-.2.243c.025.323.13.712.637.741.657.034.955-.624 1.064-.871 0 0 0-.013.009-.017a3.784 3.784 0 001.8-2.588 3.746 3.746 0 00-.03-2.124 1.613 1.613 0 00-.6-.911zm-1.265 5.646z"
                  data-name="Path 104638"
                  transform="translate(-2077.887 -798.956)"
                ></path>
              </g>
              <path
                fill="#e5837c"
                d="M2093.431 863c-.029.063.164.155.3.411.259.486.029 1.064.109 1.085.058.017.222-.293.256-.637a.91.91 0 00-.139-.7c-.182-.202-.492-.231-.526-.159z"
                data-name="Path 104639"
                transform="translate(-2092.574 -860.283)"
              ></path>
            </g>
            <g data-name="Group 118286" transform="translate(32.488 17.421)">
              <g data-name="Group 118283" transform="translate(.027 .061)">
                <path
                  fill="#f6a698"
                  d="M1624.984 800.563c-.808.276-1.127 1.508-1.106 2.325a4 4 0 002.011 3.217c.327.2.867.787 1.089.708.989-.348 1.031-4-.268-5.55-.047-.055-.884-.985-1.726-.7z"
                  data-name="Path 104640"
                  transform="translate(-1623.877 -800.508)"
                ></path>
              </g>
              <g data-name="Group 118284" transform="translate(1.141 1.788)">
                <path
                  fill="#c36252"
                  d="M1679.1 902.2l.063.063a.37.37 0 00-.063-.063z"
                  data-name="Path 104641"
                  transform="translate(-1677.901 -899.668)"
                ></path>
                <path
                  fill="#dd7472"
                  d="M1651.631 841.771a.969.969 0 00-1.052.519 2.047 2.047 0 00.457 1.939c.163.222.465.565.741.549.029 0 .344-.059-.042-.436-.033-.029-.059-.059-.084-.084s-.054-.055-.088-.084c-.2-.2-.113-.113 0-.008a2.607 2.607 0 01-.5-.691 1.18 1.18 0 01-.13-.968.6.6 0 01.628-.31.668.668 0 01.436.427.2.2 0 00.222.138.227.227 0 00.147-.3 1.112 1.112 0 00-.735-.691z"
                  data-name="Path 104642"
                  transform="translate(-1650.469 -841.748)"
                ></path>
                <path
                  fill="#c36252"
                  d="M1676.4 899.508c.025.025.054.054.088.084l.021.021-.113-.113s.004 0 .004.008z"
                  data-name="Path 104643"
                  transform="translate(-1675.314 -897.081)"
                ></path>
              </g>
              <g data-name="Group 118285">
                <path
                  fill="#dd7472"
                  d="M1626.682 804.771a.21.21 0 00-.2.205c-.021.281-.088.327-.264.335-.348.017-.536-.289-.687-.624-.054-.121-.1-.23-.226-.243-.4-.046-1.231-1.026-1.55-2.283a3.255 3.255 0 01.021-1.851 1.217 1.217 0 01.436-.691.92.92 0 01.72-.092 1.551 1.551 0 01.942.7.187.187 0 00.26.059.231.231 0 00.055-.318 1.972 1.972 0 00-1.194-.871 1.294 1.294 0 00-.993.147 1.605 1.605 0 00-.6.913 3.747 3.747 0 00-.029 2.124 3.809 3.809 0 001.8 2.588s0 .013.009.017c.113.247.406.909 1.064.871.5-.029.611-.415.637-.741a.212.212 0 00-.201-.245zm-1.412.113z"
                  data-name="Path 104644"
                  transform="translate(-1623.232 -799.056)"
                ></path>
              </g>
              <path
                fill="#e5837c"
                d="M1678.829 863.163a.909.909 0 00-.138.7c.034.343.2.653.255.637.08-.021-.155-.6.109-1.085.134-.251.327-.348.3-.411s-.346-.047-.526.159z"
                data-name="Path 104645"
                transform="translate(-1676.355 -860.287)"
              ></path>
            </g>
            <g data-name="Group 118293" transform="translate(15.546 13.153)">
              <ellipse
                cx="2.312"
                cy="2.584"
                fill="#021549"
                data-name="Ellipse 130747"
                rx="2.312"
                ry="2.584"
                transform="translate(26.223 1.279)"
              ></ellipse>
              <path
                fill="#c36252"
                d="M1634.033 739.77a6.3 6.3 0 00-2.978-.142 5.155 5.155 0 00-1.9.369c-.557.272-1.521.938-1.42 1.391.26 1.177 7.669 1.089 7.916-.172.104-.516-.994-1.182-1.618-1.446z"
                data-name="Path 104646"
                transform="translate(-1610.596 -737.763)"
              ></path>
              <path
                fill="#f6a698"
                d="M1242.4 706.466c-1.751-.046-2.065.356-3.577.3-1.018-.038-2.023-.075-2.555-.767-.377-.49-.31-1.106-.172-2.341.071-.649.327-2.718 1.533-3.791a1.9 1.9 0 01.595-.381c.574-.218.9.029 1.7 0s.766-.289 1.236-.214c.829.134.909.938 1.659 1.022.616.067 1.252-.4 1.236-.683-.013-.189-.306-.222-.892-.766-.176-.163-.189-.193-.339-.339a5.286 5.286 0 00-1.148-.808c-.431-.214-.5-.1-1.96-.3-.708-.092-1.42-.138-2.128-.214a1.551 1.551 0 00-.808.084 2.679 2.679 0 00-.683.553c-.264.247-.394.381-.687.666 0 0-.255.251-.549.524-.448.419-.779.691-1.277 1.106-.545.457-1.164.98-1.361 1.148a15.971 15.971 0 00-2.3 2.894c-.519.679-.5.57-2.467 2.722-1.47 1.613-1.24 1.411-2.894 3.234-2.044 2.258-2.676 2.869-3.875 4.385a19.214 19.214 0 00-1.194 1.575c-1.977 3.518.4 9.441 1.914 9.407.842-.017.762-1.851 3.535-6.6a24.759 24.759 0 013.233-4.172 7.062 7.062 0 011.747-1.4 14.044 14.044 0 012.513-.892 24.332 24.332 0 002.768-1.064c.943-.444.9-.523 1.96-1.022a16.258 16.258 0 012.341-.938 8.948 8.948 0 012.513-.511c.256-.008.942-.013 1.914-.084.712-.055.972-.1 1.106-.3.239-.356-.021-1.014-.381-1.4-.256-.264-.722-.591-2.256-.633z"
                data-name="Path 104647"
                transform="translate(-1218.742 -697.167)"
              ></path>
              <path
                fill="#dd7472"
                d="M1604.441 919.128h-.582a13.483 13.483 0 01-1.261 1.018c-2.618 1.625-5.851.281-5.981.787-.075.3 1.039.917 2.057 1.127a4.763 4.763 0 002.6-.243c1.265-.448 1.231-.955 2.618-1.407a4 4 0 012.032-.235 3.56 3.56 0 011.223.457 1.857 1.857 0 00-.457-.863c-.242-.269-.711-.599-2.249-.641z"
                data-name="Path 104648"
                transform="translate(-1580.786 -909.828)"
              ></path>
              <path
                fill="#03133f"
                d="M1685.34 760.069a1.2 1.2 0 00-1.055-.285l-1.914.23a.71.71 0 00-.6.884l1.583 6.052h2.3a4.062 4.062 0 002.614-.951 2.152 2.152 0 00.255-3.041l2.329-.691V759.6l-5.336.62z"
                data-name="Path 104649"
                transform="translate(-1662.351 -756.985)"
              ></path>
              <path
                fill="#ea9488"
                d="M1595.011 737.7c-.339-.168-.322-.389-.821-.653a2.323 2.323 0 00-1.475-.255c-.314.063-.318.151-.653.2a3.173 3.173 0 01-1.022-.084 2.4 2.4 0 00-1.533.57c-.888.557-3.326 2.492-2.978 3.489.121.356.624.658 1.906.75l.012-.126c.071-.649.327-2.718 1.533-3.791a1.9 1.9 0 01.595-.381c.574-.218.9.029 1.7 0s.767-.289 1.236-.214c.829.134.909.938 1.659 1.022a1.27 1.27 0 001.223-.595 1.642 1.642 0 01-1.382.068z"
                data-name="Path 104650"
                transform="translate(-1571.093 -735.101)"
              ></path>
              <g data-name="Group 118287" transform="translate(16.832 .866)">
                <path
                  fill="#dd7472"
                  d="M1625.258 717.922h-.084a3.376 3.376 0 01-.771-.038 4.68 4.68 0 00-.976-.05 9.537 9.537 0 00-1.83.172 8.336 8.336 0 00-.9.239.126.126 0 00-.08.163.129.129 0 00.163.08 7.69 7.69 0 01.863-.23 9.034 9.034 0 011.784-.168 4.388 4.388 0 01.93.046 3.527 3.527 0 00.817.038h.088c.3-.013.561-.021.683.126a.437.437 0 01.071.436c-.013.021-.025.042-.038.059a.126.126 0 000 .155.126.126 0 00.2.008.444.444 0 00.071-.109.686.686 0 00-.1-.712c-.205-.237-.536-.228-.891-.215z"
                  data-name="Path 104651"
                  transform="translate(-1620.613 -717.835)"
                ></path>
              </g>
              <g data-name="Group 118288" transform="translate(22.03 .454)">
                <path
                  fill="#dd7472"
                  d="M1747.237 709.5q-.056-.038-.125-.088a2.637 2.637 0 01-.23-.188c-.059-.055-.134-.126-.3-.256a5.492 5.492 0 00-.934-.653 3.754 3.754 0 00-.775-.3.131.131 0 00-.159.1.124.124 0 00.092.151 3.3 3.3 0 01.725.281 5.553 5.553 0 01.9.624c.155.126.222.189.281.243a2.2 2.2 0 00.255.209c.05.038.092.067.13.092.126.088.168.117.189.172a.508.508 0 01-.092.419.129.129 0 10.222.13.719.719 0 00.109-.645.7.7 0 00-.288-.291z"
                  data-name="Path 104652"
                  transform="translate(-1744.712 -708.012)"
                ></path>
              </g>
              <path
                fill="#cc6f62"
                d="M1511.959 904.768c-.67-.846-.645-1.889-.892-1.872-.193.013-.176.628-.469 1.361-.6 1.5-2.115 2-1.914 2.341.235.4.733-.637 1.789-.725a3.931 3.931 0 011.236.126 10.353 10.353 0 011.022.381c.947.3 2.019.05 2.044-.172.025-.28-1.807-.163-2.816-1.44z"
                data-name="Path 104653"
                transform="translate(-1496.522 -894.278)"
              ></path>
              <path
                fill="#0e2f77"
                d="M1759 755.253l3.661-1.085V751.5l-5.96.7z"
                data-name="Path 104654"
                transform="translate(-1734.168 -749.224)"
              ></path>
              <path
                fill="#07195b"
                d="M1688.218 758.273l-2.978-2.685a1.2 1.2 0 00-1.055-.285l-1.914.23a.71.71 0 00-.6.884l1.583 6.052h2.3a4.062 4.062 0 002.614-.951 2.15 2.15 0 00.05-3.245z"
                data-name="Path 104655"
                transform="translate(-1662.255 -752.844)"
              ></path>
              <circle
                cx="4.712"
                cy="4.712"
                r="4.712"
                fill="#0e2f77"
                data-name="Ellipse 130748"
                transform="rotate(-45 15.254 -10.601)"
              ></circle>
              <circle
                cx="3.904"
                cy="3.904"
                r="3.904"
                fill="#07195b"
                data-name="Ellipse 130749"
                transform="rotate(-45 15.825 -11.981)"
              ></circle>
              <path
                fill="#021549"
                d="M1578.5 859.56a3.9 3.9 0 01-7.7.892 3.9 3.9 0 107.69-1.252c.004.121.01.239.01.36z"
                data-name="Path 104656"
                transform="translate(-1556.054 -852.413)"
              ></path>
              <circle
                cx="3.368"
                cy="3.368"
                r="3.368"
                fill="#258aef"
                data-name="Ellipse 130750"
                transform="translate(15.517 3.972)"
              ></circle>
              <path
                fill="#1978e0"
                d="M1618.326 796.7a3.366 3.366 0 01-3.426 5.634 3.367 3.367 0 103.426-5.634z"
                data-name="Path 104657"
                transform="translate(-1598.307 -792.531)"
              ></path>
              <circle
                cx="1.818"
                cy="1.818"
                r="1.818"
                fill="#031544"
                data-name="Ellipse 130751"
                transform="translate(26.675 2.129)"
              ></circle>
              <path
                fill="#183b93"
                d="M1786.785 797.6a.285.285 0 10.285.285.285.285 0 00-.285-.285z"
                data-name="Path 104658"
                transform="translate(-1762.719 -793.393)"
              ></path>
              <path
                fill="#6ec4ff"
                d="M1614.5 813.126c.31.9 2.17-.348 1.83-.938-.365-.629-2.069.255-1.83.938z"
                data-name="Path 104659"
                transform="translate(-1597.898 -807.164)"
              ></path>
              <path
                fill="#2a99f4"
                d="M1591.515 888.96a1.21 1.21 0 00-.515-.017 3.36 3.36 0 001.173 1.906 1.293 1.293 0 00.109-1.294 1.268 1.268 0 00-.767-.595z"
                data-name="Path 104660"
                transform="translate(-1575.408 -880.891)"
              ></path>
              <g data-name="Group 118289" transform="translate(14.216 3.663)">
                <path
                  fill="#134191"
                  d="M1560.635 784.732a.191.191 0 00-.264-.084 4.336 4.336 0 00-2.224 3.137.189.189 0 00.168.218.19.19 0 00.209-.159 3.967 3.967 0 012.027-2.861.188.188 0 00.084-.251z"
                  data-name="Path 104661"
                  transform="translate(-1558.144 -784.624)"
                ></path>
              </g>
              <path
                fill="#c36252"
                d="M1989.437 740a5.055 5.055 0 00-1.9-.369 6.294 6.294 0 00-2.978.142c-.624.264-1.721.934-1.617 1.449.251 1.257 7.657 1.345 7.917.172.098-.459-.865-1.121-1.422-1.394z"
                data-name="Path 104662"
                transform="translate(-1950.925 -737.763)"
              ></path>
              <path
                fill="#f6a698"
                d="M1975.8 714.772c-1.2-1.512-1.83-2.128-3.875-4.385-1.655-1.826-1.424-1.625-2.894-3.234-1.969-2.157-1.952-2.044-2.467-2.722a15.789 15.789 0 00-2.3-2.894c-.2-.172-.817-.7-1.361-1.148-.5-.415-.829-.687-1.277-1.106-.289-.272-.549-.524-.549-.524-.293-.285-.423-.419-.687-.666-.49-.461-.6-.519-.683-.553a1.511 1.511 0 00-.809-.084c-.708.071-1.42.117-2.128.214-1.461.193-1.529.084-1.96.3a5.462 5.462 0 00-1.148.808c-.151.147-.163.176-.339.339-.591.545-.884.578-.892.766-.017.285.62.75 1.236.683.75-.084.833-.888 1.659-1.022.469-.075.431.184 1.236.214s1.127-.218 1.7 0a1.9 1.9 0 01.595.381c1.206 1.072 1.462 3.141 1.533 3.791.138 1.236.2 1.851-.172 2.341-.532.691-1.537.729-2.555.767-1.512.059-1.826-.343-3.577-.3-1.542.042-2.01.369-2.258.637-.36.39-.624 1.051-.381 1.4.138.2.4.247 1.106.3.972.071 1.663.08 1.914.084a8.978 8.978 0 012.513.511 15.33 15.33 0 012.342.938c1.056.5 1.014.578 1.96 1.022a24.331 24.331 0 002.769 1.064 14.94 14.94 0 012.513.892 7.42 7.42 0 011.747 1.4 24.5 24.5 0 013.233 4.172c2.773 4.745 2.689 6.58 3.535 6.6 1.52.033 3.9-5.889 1.914-9.407-.145-.251-.493-.691-1.193-1.579z"
                data-name="Path 104663"
                transform="translate(-1920.669 -697.426)"
              ></path>
              <path
                fill="#dd7472"
                d="M1956.257 920.107a12.861 12.861 0 01-1.261-1.018c-.176 0-.369-.008-.582 0-1.542.042-2.011.369-2.258.637a1.959 1.959 0 00-.457.863 3.508 3.508 0 011.223-.457 4 4 0 012.031.234c1.387.457 1.349.959 2.618 1.407a4.762 4.762 0 002.6.243c1.018-.209 2.132-.825 2.057-1.127-.115-.501-3.353.843-5.971-.782z"
                data-name="Path 104664"
                transform="translate(-1921 -909.79)"
              ></path>
              <path
                fill="#03133f"
                d="M1909.474 760.015l-1.914-.23a1.211 1.211 0 00-1.055.285l-.172.155-5.333-.625v2.668l2.329.691a2.152 2.152 0 00.255 3.041 4.054 4.054 0 002.614.951h2.3l1.583-6.052a.71.71 0 00-.607-.884z"
                data-name="Path 104665"
                transform="translate(-1872.424 -756.985)"
              ></path>
              <path
                fill="#ea9488"
                d="M1984.086 737.477a2.4 2.4 0 00-1.533-.57 3.046 3.046 0 01-1.022.084c-.335-.05-.34-.138-.654-.2a2.322 2.322 0 00-1.474.255c-.5.264-.486.482-.821.653a1.649 1.649 0 01-1.382-.071 1.27 1.27 0 001.223.595c.75-.084.833-.888 1.659-1.022.469-.075.431.184 1.236.214s1.127-.218 1.7 0a1.9 1.9 0 01.595.381c1.206 1.072 1.462 3.141 1.533 3.791 0 .042.009.084.013.126 1.281-.092 1.78-.394 1.906-.75.347-.994-2.091-2.929-2.979-3.486z"
                data-name="Path 104666"
                transform="translate(-1945.432 -735.101)"
              ></path>
              <g data-name="Group 118290" transform="translate(34.54 .87)">
                <path
                  fill="#dd7472"
                  d="M2048.982 718.348a8.079 8.079 0 00-.9-.239 8.956 8.956 0 00-1.83-.172 4.705 4.705 0 00-.976.05 3.612 3.612 0 01-.771.038h-.083c-.352-.012-.687-.025-.888.218a.686.686 0 00-.1.712.629.629 0 00.071.109.128.128 0 00.2-.008.133.133 0 000-.155.176.176 0 01-.038-.059.437.437 0 01.071-.436c.122-.147.381-.138.683-.126h.088a3.789 3.789 0 00.817-.038 4.389 4.389 0 01.93-.046 9.014 9.014 0 011.784.168 7.493 7.493 0 01.863.23.131.131 0 00.163-.08.134.134 0 00-.084-.166z"
                  data-name="Path 104667"
                  transform="translate(-2043.377 -717.935)"
                ></path>
              </g>
              <g data-name="Group 118291" transform="translate(32.195 .454)">
                <path
                  fill="#dd7472"
                  d="M1990.236 708.112a.131.131 0 00-.159-.1 3.753 3.753 0 00-.774.3 5.5 5.5 0 00-.935.653 3.407 3.407 0 00-.3.256 2.021 2.021 0 01-.231.188q-.069.05-.125.088a.677.677 0 00-.281.285.72.72 0 00.109.645.129.129 0 10.222-.13.509.509 0 01-.093-.419c.021-.054.063-.084.189-.172.038-.025.08-.055.13-.092a2.191 2.191 0 00.255-.209c.059-.054.126-.117.281-.243a5.34 5.34 0 01.9-.624 3.77 3.77 0 01.724-.281.122.122 0 00.088-.147z"
                  data-name="Path 104668"
                  transform="translate(-1987.396 -708.012)"
                ></path>
              </g>
              <path
                fill="#cc6f62"
                d="M2149.764 904.257c-.293-.733-.276-1.349-.469-1.361-.247-.017-.222 1.026-.892 1.872-1.01 1.277-2.84 1.16-2.811 1.449.025.218 1.1.469 2.044.172a10.055 10.055 0 011.022-.381 3.916 3.916 0 011.236-.126c1.055.088 1.554 1.118 1.788.725.201-.344-1.319-.851-1.918-2.35z"
                data-name="Path 104669"
                transform="translate(-2106.771 -894.278)"
              ></path>
              <path
                fill="#0e2f77"
                d="M1901 754.168l3.661 1.085 2.3-3.058-5.96-.7z"
                data-name="Path 104670"
                transform="translate(-1872.424 -749.224)"
              ></path>
              <path
                fill="#07195b"
                d="M1951.024 755.545l-1.914-.23a1.212 1.212 0 00-1.056.285l-2.978 2.685a2.154 2.154 0 00.059 3.246 4.054 4.054 0 002.614.951h2.295l1.583-6.052a.709.709 0 00-.603-.885z"
                data-name="Path 104671"
                transform="translate(-1913.974 -752.854)"
              ></path>
              <circle
                cx="4.712"
                cy="4.712"
                r="4.712"
                fill="#0e2f77"
                data-name="Ellipse 130752"
                transform="rotate(-45 25.157 -34.516)"
              ></circle>
              <circle
                cx="3.904"
                cy="3.904"
                r="3.904"
                fill="#07195b"
                data-name="Ellipse 130753"
                transform="rotate(-45 25.728 -35.896)"
              ></circle>
              <path
                fill="#021549"
                d="M2047.288 863.464a3.9 3.9 0 01-3.9-3.9 3.489 3.489 0 01.017-.36 3.9 3.9 0 107.69 1.252 3.912 3.912 0 01-3.807 3.008z"
                data-name="Path 104672"
                transform="translate(-2008.763 -852.413)"
              ></path>
              <circle
                cx="3.368"
                cy="3.368"
                r="3.368"
                fill="#258aef"
                data-name="Ellipse 130754"
                transform="translate(34.817 3.972)"
              ></circle>
              <path
                fill="#1978e0"
                d="M2051.261 799.163a3.35 3.35 0 011.072-2.463 3.367 3.367 0 103.43 5.634 3.368 3.368 0 01-4.5-3.171z"
                data-name="Path 104673"
                transform="translate(-2015.278 -792.531)"
              ></path>
              <path
                fill="#183b93"
                d="M2000.185 797.6a.285.285 0 10.285.285.285.285 0 00-.285-.285z"
                data-name="Path 104674"
                transform="translate(-1967.181 -793.393)"
              ></path>
              <path
                fill="#6ec4ff"
                d="M2140.358 812.187c-.339.591 1.521 1.839 1.83.938.235-.682-1.47-1.566-1.83-.938z"
                data-name="Path 104675"
                transform="translate(-2101.717 -807.164)"
              ></path>
              <path
                fill="#2a99f4"
                d="M2176.284 888.96a1.193 1.193 0 00-.657 1.889 3.358 3.358 0 001.173-1.906 1.21 1.21 0 00-.516.017z"
                data-name="Path 104676"
                transform="translate(-2135.322 -880.891)"
              ></path>
              <g data-name="Group 118292" transform="translate(40.339 3.665)">
                <path
                  fill="#134191"
                  d="M2183.607 786.022a4.376 4.376 0 00-1.5-1.332.2.2 0 00-.264.084.191.191 0 00.079.251 3.965 3.965 0 012.027 2.861.191.191 0 00.21.159.191.191 0 00.167-.218 4.329 4.329 0 00-.719-1.805z"
                  data-name="Path 104677"
                  transform="translate(-2181.829 -784.668)"
                ></path>
              </g>
              <circle
                cx="1.646"
                cy="1.646"
                r="1.646"
                fill="#07195b"
                data-name="Ellipse 130755"
                transform="rotate(-12.973 24.44 -115.364)"
              ></circle>
            </g>
            <path
              fill="#477fc3"
              d="M2291.6 949.331a28.117 28.117 0 00-2.186-2.073c-2.241-2.048-3.46-3.171-5.14-4.519a16.346 16.346 0 00-1.294-.963 28.114 28.114 0 00-2.723-1.483 29.543 29.543 0 01-3.681-3.493c-1.051-.247-1.072 1.629-3.586 4.084-2.814 2.752-3.581 1.767-3.744 2.739-.092.545 2.7 3.347 3.267 4.616a60.6 60.6 0 009.211 12.792c8.67 9.416 21.709 5.06 13.571-7.481-.411-.65-2.495-2.874-3.695-4.219z"
              data-name="Path 104678"
              transform="translate(-2209.7 -913.588)"
            ></path>
            <g data-name="Group 118294" transform="translate(62.689 28.634)">
              <path
                fill="#18539b"
                d="M2350.047 1066.811a.258.258 0 00-.356.084 11.572 11.572 0 01-.838 1.168 12.427 12.427 0 01-4.444 3.41.261.261 0 00-.13.344.267.267 0 00.352.134 12.9 12.9 0 004.628-3.552 12.59 12.59 0 00.875-1.219.27.27 0 00-.087-.369z"
                data-name="Path 104679"
                transform="translate(-2344.257 -1066.772)"
              ></path>
            </g>
            <path
              fill="#3872b8"
              d="M886.976 1321.5a60.526 60.526 0 00-20.984 4.645c-.771.314-3.443 5.6-.23 7.539 3.795 2.291 8.356 1.353 14.786.641a91.12 91.12 0 0010.928-1.579 38.584 38.584 0 0010.5-4.532c2.622-1.688 3.933-2.53 3.824-3.447-.378-3.143-16.592-3.256-18.824-3.267z"
              data-name="Path 104680"
              transform="translate(-863.519 -1282.196)"
            ></path>
            <path
              fill="#3e79c2"
              d="M891.962 1323.8a24.51 24.51 0 01-7.912 8.168 20.017 20.017 0 01-10.35 2.53 3.012 3.012 0 001.148 1.2c3.481 2.1 7.606 1.487 13.227.821a1.974 1.974 0 01-.951-1.474c-.126-2.576 6.66-7.632 6.873-11.439-.573.04-1.256.094-2.035.194z"
              data-name="Path 104681"
              transform="translate(-872.606 -1284.209)"
            ></path>
            <path
              fill="#477fc3"
              d="M872.445 940.8c-2.509-2.454-2.534-4.327-3.585-4.084a29.524 29.524 0 01-3.682 3.493 30.172 30.172 0 00-2.723 1.483c-.431.285-.766.54-1.294.963-1.68 1.353-2.9 2.475-5.139 4.519a28.167 28.167 0 00-2.186 2.073c-1.194 1.344-3.28 3.573-3.69 4.209-8.138 12.54 4.9 16.9 13.571 7.481a60.635 60.635 0 009.211-12.792c.57-1.269 3.359-4.067 3.267-4.616-.168-.963-.935.021-3.75-2.729z"
              data-name="Path 104682"
              transform="translate(-847.577 -913.508)"
            ></path>
            <g data-name="Group 118295" transform="translate(19.558 28.634)">
              <path
                fill="#18539b"
                d="M1320.3 1071.473a12.381 12.381 0 01-4.444-3.409 11.645 11.645 0 01-.838-1.169.258.258 0 00-.356-.084.266.266 0 00-.088.368 12.637 12.637 0 00.875 1.219 12.9 12.9 0 004.628 3.552.26.26 0 00.352-.134.261.261 0 00-.129-.343z"
                data-name="Path 104683"
                transform="translate(-1314.532 -1066.772)"
              ></path>
            </g>
            <path
              fill="#18539b"
              d="M2220.877 1578.871c.2-1.428.666-3.757 1.206-6.174-.695-.607-1.357-1.248-1.721-1.219-.955.079-1.454 4.5-1.554 5.214-1.487 10.4-1.621 17.856-1.143 22.731.079.808.176 1.667.285 2.567h3.38a83.475 83.475 0 01-.453-23.119z"
              data-name="Path 104684"
              transform="translate(-2160.043 -1521.703)"
            ></path>
            <path
              fill="#18539b"
              d="M1460.247 1575.39c-.1-.712-.6-5.135-1.554-5.215-.394-.034-1.135.72-1.893 1.365 1.453 4.624 2.668 11.037 2.45 20.214a64.918 64.918 0 01-.859 8.989h2.706q.169-1.382.293-2.622c.478-4.871.34-12.331-1.143-22.731z"
              data-name="Path 104685"
              transform="translate(-1431.283 -1520.455)"
            ></path>
          </g>
        </g>
      </g>{' '}
    </SvgIcon>
  );
}

export function ThunderIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 6.069,
    height: 13.794,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.069 13.794" sx={rootSx} {...rest}>
      <path
        fill="#ffa400"
        d="M14.552 13.794a.26.26 0 01-.12-.028.276.276 0 01-.142-.335l2.086-6.258h-2.1a.277.277 0 01-.23-.123.273.273 0 01-.025-.259L16.78.17a.274.274 0 01.255-.17h2.621a.276.276 0 01.252.388l-2.172 4.854h2.057a.277.277 0 01.242.144.274.274 0 01-.012.282l-5.242 8a.274.274 0 01-.229.126z"
        transform="translate(-14)"
      ></path>{' '}
    </SvgIcon>
  );
}

export function InfoGreyIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 10.506,
    height: 10.506,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10.506 10.506" sx={rootSx} {...rest}>
      <g data-name="Group 113639" transform="translate(-223.747 -196.748)">
        <path
          fill="#d3d3d3"
          d="M7.253 2a5.253 5.253 0 105.253 5.253A5.261 5.261 0 007.253 2zm0 1.051a4.2 4.2 0 11-4.2 4.2 4.194 4.194 0 014.2-4.2zm-.525 1.575v1.051h1.05V4.626zm0 2.1v3.153h1.05V6.728z"
          data-name="icons8-info (1)"
          transform="translate(221.747 194.748)"
        ></path>
      </g>{' '}
    </SvgIcon>
  );
}

export function NewAddIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 16,
    height: 16,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" sx={rootSx} {...rest}>
      <g data-name="Group 105775" transform="translate(-248 -388)">
        <circle cx="8" cy="8" r="8" fill="#fff" data-name="Ellipse 129116" transform="translate(248 388)"></circle>
        <path
          fill="#0e70eb"
          stroke="#0e70eb"
          strokeWidth="0.5"
          d="M255.91 392.17a.312.312 0 00-.307.317v3.33h-3.33a.312.312 0 100 .624h3.33v3.33a.312.312 0 10.624 0v-3.33h3.334a.312.312 0 100-.624h-3.334v-3.33a.312.312 0 00-.317-.317z"
        ></path>
      </g>{' '}
    </SvgIcon>
  );
}

export function AlertIconService(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 13,
    height: 13,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" sx={rootSx} {...rest}>
      <g data-name="Group 118993" transform="translate(22189 -16101)">
        <path fill="none" d="M0 0H13V13H0z" data-name="Rectangle 59921" transform="translate(-22189 16101)"></path>
        <path
          fill={rootStyle ? rootStyle : "#ff980e"}
          d="M6.146 2v1.071A2.926 2.926 0 003.951 5.9v2.929l-.975.971v.488h7.8V9.8L9.8 8.829V5.9a2.926 2.926 0 00-2.2-2.831V2zm-2.24.04A4.864 4.864 0 002 5.9h.976A3.892 3.892 0 014.5 2.813zm5.943 0l-.595.773A3.892 3.892 0 0110.78 5.9h.976a4.864 4.864 0 00-1.907-3.86zM5.9 10.78a.976.976 0 001.951 0z"
          data-name="icons8-reminder (1)"
          transform="translate(-22189.754 16101.622)"
        ></path>
      </g>{' '}
    </SvgIcon>
  );
}

export function TimerIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 13,
    height: 13,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 13 13" sx={rootSx} {...rest}>
      <g data-name="Group 118993" transform="translate(22189 -16101)">
        <path fill="none" d="M0 0H13V13H0z" data-name="Rectangle 59921" transform="translate(-22189 16101)"></path>
        <path
          fill={rootStyle ? rootStyle : "#ff980e"}
          d="M4 1.912a.453.453 0 00-.332.1L2.271 3.19a.455.455 0 00.586.7l1.4-1.173A.455.455 0 004 1.912zm5.225 0a.455.455 0 00-.253.8l1.395 1.173a.455.455 0 10.586-.7L9.555 2.017a.455.455 0 00-.332-.105zm-2.615.949a4.1 4.1 0 104.1 4.1 4.1 4.1 0 00-4.1-4.1zm0 1.82a.455.455 0 01.455.455v1.995l1.162.58a.455.455 0 11-.407.814l-1.413-.706a.455.455 0 01-.252-.407V5.137a.455.455 0 01.455-.455z"
          transform="translate(-22189.111 16102.018)"
        ></path>
      </g>{' '}
    </SvgIcon>
  );
}

export function SearchBoughtIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 123.59,
    height: 101.946,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 123.59 101.946" sx={rootSx} {...rest}>
      <g data-name="Group 118992" transform="translate(-118.278 -480.001)">
        <g data-name="binoculars_1 [Converted] copy" transform="translate(118.278 493.73)">
          <path
            fill="#e2eaf4"
            d="M676.851 418.92c-13.118 1.324-15.816 13.554-32.273 12.2-33.186-2.739-41.2 20.009-36.859 32.721 7.053 20.649 48.428 28.7 75.331 21.307 10.5-2.886 16.189-7.414 18.208-9.148 9.076-7.8 19.179-23.942 11.112-38.974-6.535-12.196-22.736-19.392-35.519-18.106z"
            data-name="Path 104563"
            opacity="0.33"
            transform="translate(-604.916 -410.842)"
          ></path>
          <path
            fill="#fff"
            d="M1399.481 465.206a5.5 5.5 0 01-1.022-1.106 4.978 4.978 0 01.251 1.479c-.13.335-1.21.959-1.21.959a5.031 5.031 0 011.424-.13c.335.13 1.018 1.089 1.018 1.089a4.2 4.2 0 01-.13-1.428 5.676 5.676 0 011.089-1.014 4.21 4.21 0 01-1.42.151z"
            data-name="Path 104608"
            transform="translate(-1362.044 -459.057)"
          ></path>
          <path
            fill="#fff"
            d="M552.981 752.606a5.5 5.5 0 01-1.022-1.106 4.983 4.983 0 01.251 1.479c-.13.335-1.21.959-1.21.959a5.032 5.032 0 011.424-.13c.335.13 1.018 1.089 1.018 1.089a4.207 4.207 0 01-.13-1.428 5.678 5.678 0 011.089-1.014 4.193 4.193 0 01-1.42.151z"
            data-name="Path 104609"
            transform="translate(-551 -734.419)"
          ></path>
          <path
            fill="#fff"
            d="M3138.181 581.006a5.5 5.5 0 01-1.022-1.106 4.985 4.985 0 01.251 1.479c-.13.335-1.21.959-1.21.959a5.032 5.032 0 011.424-.13c.335.13 1.018 1.089 1.018 1.089a4.2 4.2 0 01-.13-1.428 5.677 5.677 0 011.089-1.014 4.2 4.2 0 01-1.42.151z"
            data-name="Path 104610"
            transform="translate(-3027.918 -570.007)"
          ></path>
          <path
            fill="#fff"
            d="M937.919 551.207a4.527 4.527 0 01-1.332.465c-.331-.071-1.081-.972-1.081-.972a4.7 4.7 0 01.344 1.3 4.451 4.451 0 01-.85 1.114 3.867 3.867 0 011.3-.343 5.4 5.4 0 011.11.85 4.049 4.049 0 01-.36-1.29 5.314 5.314 0 01.869-1.124z"
            data-name="Path 104611"
            transform="translate(-918.916 -542.03)"
          ></path>
          <path
            fill="#fff"
            d="M1110.558 344.106a3.717 3.717 0 01-1.076.377c-.268-.055-.875-.783-.875-.783a3.828 3.828 0 01.281 1.051 3.518 3.518 0 01-.687.9 3.12 3.12 0 011.055-.276 4.3 4.3 0 01.9.687 3.172 3.172 0 01-.289-1.043 3.892 3.892 0 01.691-.913z"
            data-name="Path 104612"
            transform="translate(-1084.862 -343.7)"
          ></path>
          <path
            fill="#fff"
            d="M566.258 477.006a3.719 3.719 0 01-1.076.377c-.268-.054-.875-.783-.875-.783a3.822 3.822 0 01.281 1.051 3.512 3.512 0 01-.687.9 3.117 3.117 0 011.056-.276 4.3 4.3 0 01.9.687 3.172 3.172 0 01-.289-1.043 3.892 3.892 0 01.69-.913z"
            data-name="Path 104613"
            transform="translate(-563.36 -471.033)"
          ></path>
          <path
            fill="#fff"
            d="M3447.758 823.106a3.715 3.715 0 01-1.076.377c-.268-.054-.875-.783-.875-.783a3.82 3.82 0 01.281 1.051 3.511 3.511 0 01-.687.9 3.121 3.121 0 011.056-.276 4.3 4.3 0 01.9.687 3.169 3.169 0 01-.289-1.043 3.887 3.887 0 01.69-.913z"
            data-name="Path 104614"
            transform="translate(-3324.167 -802.637)"
          ></path>
          <path
            fill="#fff"
            d="M3012.958 344.106a3.72 3.72 0 01-1.077.377c-.268-.055-.875-.783-.875-.783a3.829 3.829 0 01.281 1.051 3.518 3.518 0 01-.687.9 3.119 3.119 0 011.055-.276 4.305 4.305 0 01.9.687 3.176 3.176 0 01-.289-1.043 3.9 3.9 0 01.692-.913z"
            data-name="Path 104615"
            transform="translate(-2907.579 -343.7)"
          ></path>
          <g data-name="Group 118296" transform="translate(16.084 7.929)">
            <path
              fill="#18539b"
              d="M1982.76 1326.144a60.524 60.524 0 00-20.984-4.645c-2.237.017-18.447.13-18.819 3.271-.109.917 1.2 1.759 3.824 3.447a38.594 38.594 0 0010.5 4.532 92.223 92.223 0 0010.928 1.579c6.434.712 10.991 1.65 14.786-.641 3.205-1.943.536-7.233-.235-7.543z"
              data-name="Path 104616"
              transform="translate(-1897.07 -1282.196)"
            ></path>
            <path
              fill="#3872b8"
              d="M2451.648 1332.06a24.553 24.553 0 01-7.912-8.168 52.41 52.41 0 00-2.036-.193c.214 3.807 7 8.863 6.873 11.439a1.961 1.961 0 01-.951 1.474c5.621.666 9.747 1.282 13.227-.821a3.062 3.062 0 001.148-1.2 20.024 20.024 0 01-10.349-2.531z"
              data-name="Path 104617"
              transform="translate(-2374.93 -1284.305)"
            ></path>
            <path
              fill="#171718"
              d="M1750.456 394.8a5.626 5.626 0 01-2.107-2.107c-.863-1.357-.708-2.174-1.16-3.481a9.13 9.13 0 00-3.69-4.427 10.327 10.327 0 00-6.748-1.583c-2.2.247-5.944 1.391-6.22 3.481-.138 1.047.633 2.057 1.474 3.162a9.763 9.763 0 002.53 2.32c3.7 2.245 6.924-.419 8.855 1.37 1.776 1.646 1.009 5.692.528 8.222-.57 2.991-1.717 5.215-.632 6.325.7.716-.779-.31-.4.6.251.6-1.734-.26-2.211.188-.612.57.989 4.038 1.131 4.327.637 1.261-.771 1 1.081 1.005 1.592 0 2.639.377 4.691-.507 1.466-.628.988-1.382 2.354-2.132s1.709-.662 2-1.16c.452-.767-.151-1.328.318-2.32.335-.712.729-.595 1.16-1.265a3.648 3.648 0 00-.209-3.9c-.779-1.009-1.86-.917-1.9-1.474-.055-.762 1.952-.867 2.739-2.425a3.034 3.034 0 00-.318-3.267c-.795-.812-1.7-.117-3.266-.952z"
              data-name="Path 104618"
              transform="translate(-1693.532 -383.142)"
            ></path>
            <path
              fill="#171718"
              d="M1579.462 494.642c-1.487-.235-2.647.8-4.218 2.216a12.142 12.142 0 00-2.953 4.113c-.771 1.638-1.294 2.748-.842 3.795.339.787.947.892 1.37 2a2.948 2.948 0 01.209 2c-.427 1.252-1.868 1.076-2.425 2.425a2.883 2.883 0 000 2c.532 1.311 1.9 1.265 2 2.216.08.7-.649.942-.737 2.216a2.347 2.347 0 00.1 1.055c.226.578.817 1.081 2.634 1.583 2.467.679 3.7 1.018 4.532.423 1.278-.922.792-3.443.528-5.588-1.231-9.96-.511-11.468.318-12.758 1.148-1.788 2.526-1.981 2.634-3.585a4.149 4.149 0 00-3.15-4.111z"
              data-name="Path 104619"
              transform="translate(-1540.144 -489.94)"
            ></path>
            <path
              fill="#ea9488"
              d="M1618.8 910.766a5.259 5.259 0 01-3.058-1.793 4.765 4.765 0 01-.737-2.216c-.335-2.031.117-2.932 0-3.795-.482-3.535-10.521-6.2-11.807-4.113-.318.519.167.9.632 2.953.373 1.654 1.219 5.395-.528 7.276-.641.691-1.479.963-3.058 1.474-2.09.679-3.016.427-3.162.842-.319.913 3.539 3.82 8.117 4.955a18.242 18.242 0 0011.07-.842c3.112-1.3 5.78-3.522 5.483-4.218-.166-.38-1.1.001-2.952-.523z"
              data-name="Path 104620"
              transform="translate(-1565.669 -876.544)"
            ></path>
            <path
              fill="#c36252"
              d="M1752.971 902.963c-.482-3.535-10.521-6.2-11.807-4.113-.318.52.168.9.632 2.953a20.01 20.01 0 01.519 3.25c1.24 2.262 2.928 3.736 4.62 3.941 1.893.23 4.184-1.085 5.914-3.573-.02-1.147.21-1.813.122-2.458z"
              data-name="Path 104621"
              transform="translate(-1703.638 -876.544)"
            ></path>
            <path
              fill="#3872b8"
              d="M1394.43 1201.32a133.183 133.183 0 013.146-13.864c1.152-3.761 5.483-3.648 4.364-5.567-.264-.452-1.834-1.68-4.888-2.777a29.144 29.144 0 00-11.577-1.5c-1.4.059-.637 3.615-7.883 3.824-7.426.214-7.82-4.222-8.9-4.008a38.267 38.267 0 00-10.438 3.267 13.5 13.5 0 00-2.882 1.809c-2.852 3.64 6.76 8.457 6.187 32.947a64.921 64.921 0 01-.859 8.988h34.183a83.442 83.442 0 01-.453-23.119z"
              data-name="Path 104622"
              transform="translate(-1333.595 -1144.153)"
            ></path>
            <path
              fill="#fff"
              d="M1639.5 1181.337c-7.426.214-7.82-4.222-8.9-4.008-.783.151-1.587.314-2.4.5 2 2.417 5.366 5.378 10.036 5.717 1.169.084 6.492.469 9.487-3.322a8.393 8.393 0 001.424-2.748c-.57 0-1.152.017-1.759.042-1.404.054-.633 3.614-7.888 3.819z"
              data-name="Path 104623"
              transform="translate(-1595.504 -1144.057)"
            ></path>
            <path
              fill="#ea9488"
              d="M1709.739 561.737a8 8 0 00-1.265-2.53 8.342 8.342 0 00-4-2.739 10.446 10.446 0 00-5.06-.528 6.548 6.548 0 00-3.058.951 6.084 6.084 0 00-1.9 2.107 12.964 12.964 0 00-1.474 7.171c.092 3.141.18 6.195 2.321 9.068.636.859 2.877 3.862 6.22 3.9a6.572 6.572 0 003.162-.842 9.477 9.477 0 004-4.85 15.328 15.328 0 001.265-4.427 22.062 22.062 0 00.1-5.164 8.694 8.694 0 00-.311-2.117z"
              data-name="Path 104624"
              transform="translate(-1657.561 -548.603)"
            ></path>
            <path
              fill="#dd7472"
              d="M1840.9 982.269a6.149 6.149 0 01-1.642 0c-1.072-.142-1.432-.561-1.642-.427-.431.276.632 1.583 2.568 1.575 1.684 0 2.827-1.165 2.5-1.546-.184-.231-.628.238-1.784.398z"
              data-name="Path 104625"
              transform="translate(-1796.06 -956.733)"
            ></path>
            <g data-name="Group 118276" transform="translate(42.456 21.449)">
              <path
                fill="#dd7472"
                d="M1863.793 895.383l-.017.008a.234.234 0 00-.151.247.611.611 0 01-.038.318.889.889 0 01-.758.41 1.1 1.1 0 01-1.064-.532.892.892 0 01-.088-.369.232.232 0 00-.193-.222h-.021a.231.231 0 00-.264.23 1.391 1.391 0 00.134.57 1.561 1.561 0 001.4.8 1.244 1.244 0 00.125 0 1.29 1.29 0 001.156-.7 1.052 1.052 0 00.071-.574.221.221 0 00-.292-.186z"
                data-name="Path 104626"
                transform="translate(-1861.2 -895.238)"
              ></path>
            </g>
            <path
              fill="#543434"
              d="M1955.69 786.59c-.415.017-.733.519-.712 1.127s.377 1.089.8 1.072.733-.52.712-1.127-.381-1.089-.8-1.072z"
              data-name="Path 104627"
              transform="translate(-1908.593 -769.691)"
            ></path>
            <g data-name="Group 118277" transform="translate(45.964 14.39)">
              <path
                fill="#36476b"
                d="M1948.67 726.748a4.285 4.285 0 00-3.564 1.014.418.418 0 00-.008.624l.017.017a.416.416 0 00.553.008 3.422 3.422 0 011.143-.674 3.479 3.479 0 011.718-.142.422.422 0 00.473-.3v-.021a.421.421 0 00-.332-.526z"
                data-name="Path 104628"
                transform="translate(-1944.962 -726.689)"
              ></path>
            </g>
            <path
              fill="#49302a"
              d="M1787.374 786.59c-.415-.017-.771.465-.8 1.072s.3 1.114.712 1.127.771-.465.8-1.072-.294-1.11-.712-1.127z"
              data-name="Path 104629"
              transform="translate(-1747.247 -769.691)"
            ></path>
            <g data-name="Group 118278" transform="translate(37.618 15.193)">
              <path
                fill="#36476b"
                d="M1749.651 746.433a4.339 4.339 0 00-1.562-.524 4.383 4.383 0 00-2.136.268.415.415 0 00-.218.578l.008.021a.418.418 0 00.524.193 3.436 3.436 0 012.97.209.414.414 0 00.54-.122l.013-.017a.417.417 0 00-.139-.606z"
                data-name="Path 104630"
                transform="translate(-1745.688 -745.875)"
              ></path>
            </g>
            <path
              fill="#ea847d"
              d="M1989.926 856c-.612.042-1.085.385-1.055.767s.54.658 1.152.616 1.085-.385 1.055-.766-.54-.656-1.152-.617z"
              data-name="Path 104631"
              transform="translate(-1941.066 -836.193)"
            ></path>
            <path
              fill="#ea847d"
              d="M1742.357 855.181c-.67-.13-1.277.1-1.357.519s.394.863 1.064.993 1.277-.1 1.357-.52-.398-.862-1.064-.992z"
              data-name="Path 104632"
              transform="translate(-1703.571 -835.375)"
            ></path>
            <path
              fill="#171718"
              d="M1790.09 514.559a9.271 9.271 0 00-9.542-1.474c-.729.314-2.7 1.169-2.848 2.635-.155 1.541 1.784 3.045 3.322 3.585a10.985 10.985 0 004.8.209 5.2 5.2 0 012.161-.1 4.841 4.841 0 012.107 1.106c2.023 1.9 1.231 5.324 1.688 5.378.431.05 1.826-2.982 1.16-6.325a9 9 0 00-2.848-5.014z"
              data-name="Path 104633"
              transform="translate(-1738.733 -506.963)"
            ></path>
            <g data-name="Group 118282" transform="translate(51.329 17.416)">
              <g data-name="Group 118279" transform="translate(0 .064)">
                <path
                  fill="#f6a698"
                  d="M2075.756 800.534c-.842-.289-1.68.645-1.721.7-1.3 1.55-1.257 5.2-.268 5.55.222.08.762-.511 1.089-.708a3.991 3.991 0 002.01-3.217c.017-.817-.297-2.049-1.11-2.325z"
                  data-name="Path 104634"
                  transform="translate(-2073.039 -800.478)"
                ></path>
              </g>
              <g data-name="Group 118280" transform="translate(.816 1.792)">
                <path
                  fill="#c36252"
                  d="M2107.7 902.263l.063-.063a.363.363 0 00-.063.063z"
                  data-name="Path 104635"
                  transform="translate(-2107.064 -899.668)"
                ></path>
                <path
                  fill="#dd7472"
                  d="M2093.249 841.771a1.083 1.083 0 00-.72.691.222.222 0 00.146.3.2.2 0 00.222-.138.669.669 0 01.436-.427.6.6 0 01.628.31 1.179 1.179 0 01-.13.968 2.687 2.687 0 01-.5.691c.108-.109.192-.188 0 .008a1.072 1.072 0 01-.088.084l-.083.084c-.385.381-.071.436-.042.436.272.017.574-.327.741-.549a2.049 2.049 0 00.457-1.939.989.989 0 00-1.067-.519z"
                  data-name="Path 104636"
                  transform="translate(-2092.513 -841.748)"
                ></path>
                <path
                  fill="#c36252"
                  d="M2109.221 899.592c.033-.034.063-.063.088-.084a.015.015 0 000-.008l-.113.113c.004-.013.017-.013.025-.021z"
                  data-name="Path 104637"
                  transform="translate(-2108.501 -897.081)"
                ></path>
              </g>
              <g data-name="Group 118281" transform="translate(.203)">
                <path
                  fill="#dd7472"
                  d="M2080.761 799.142a1.293 1.293 0 00-.993-.147 1.971 1.971 0 00-1.194.871.235.235 0 00.054.318.183.183 0 00.26-.059 1.567 1.567 0 01.943-.7.958.958 0 01.72.092 1.2 1.2 0 01.436.691 3.256 3.256 0 01.021 1.851c-.318 1.261-1.148 2.237-1.55 2.283-.125.013-.172.122-.226.243-.151.335-.339.641-.687.624-.172-.008-.243-.059-.264-.335a.207.207 0 00-.2-.205.215.215 0 00-.2.243c.025.323.13.712.637.741.657.034.955-.624 1.064-.871 0 0 0-.013.009-.017a3.784 3.784 0 001.8-2.588 3.746 3.746 0 00-.03-2.124 1.613 1.613 0 00-.6-.911zm-1.265 5.646z"
                  data-name="Path 104638"
                  transform="translate(-2077.887 -798.956)"
                ></path>
              </g>
              <path
                fill="#e5837c"
                d="M2093.431 863c-.029.063.164.155.3.411.259.486.029 1.064.109 1.085.058.017.222-.293.256-.637a.91.91 0 00-.139-.7c-.182-.202-.492-.231-.526-.159z"
                data-name="Path 104639"
                transform="translate(-2092.574 -860.283)"
              ></path>
            </g>
            <g data-name="Group 118286" transform="translate(32.488 17.421)">
              <g data-name="Group 118283" transform="translate(.027 .061)">
                <path
                  fill="#f6a698"
                  d="M1624.984 800.563c-.808.276-1.127 1.508-1.106 2.325a4 4 0 002.011 3.217c.327.2.867.787 1.089.708.989-.348 1.031-4-.268-5.55-.047-.055-.884-.985-1.726-.7z"
                  data-name="Path 104640"
                  transform="translate(-1623.877 -800.508)"
                ></path>
              </g>
              <g data-name="Group 118284" transform="translate(1.141 1.788)">
                <path
                  fill="#c36252"
                  d="M1679.1 902.2l.063.063a.37.37 0 00-.063-.063z"
                  data-name="Path 104641"
                  transform="translate(-1677.901 -899.668)"
                ></path>
                <path
                  fill="#dd7472"
                  d="M1651.631 841.771a.969.969 0 00-1.052.519 2.047 2.047 0 00.457 1.939c.163.222.465.565.741.549.029 0 .344-.059-.042-.436-.033-.029-.059-.059-.084-.084s-.054-.055-.088-.084c-.2-.2-.113-.113 0-.008a2.607 2.607 0 01-.5-.691 1.18 1.18 0 01-.13-.968.6.6 0 01.628-.31.668.668 0 01.436.427.2.2 0 00.222.138.227.227 0 00.147-.3 1.112 1.112 0 00-.735-.691z"
                  data-name="Path 104642"
                  transform="translate(-1650.469 -841.748)"
                ></path>
                <path
                  fill="#c36252"
                  d="M1676.4 899.508c.025.025.054.054.088.084l.021.021-.113-.113s.004 0 .004.008z"
                  data-name="Path 104643"
                  transform="translate(-1675.314 -897.081)"
                ></path>
              </g>
              <g data-name="Group 118285">
                <path
                  fill="#dd7472"
                  d="M1626.682 804.771a.21.21 0 00-.2.205c-.021.281-.088.327-.264.335-.348.017-.536-.289-.687-.624-.054-.121-.1-.23-.226-.243-.4-.046-1.231-1.026-1.55-2.283a3.255 3.255 0 01.021-1.851 1.217 1.217 0 01.436-.691.92.92 0 01.72-.092 1.551 1.551 0 01.942.7.187.187 0 00.26.059.231.231 0 00.055-.318 1.972 1.972 0 00-1.194-.871 1.294 1.294 0 00-.993.147 1.605 1.605 0 00-.6.913 3.747 3.747 0 00-.029 2.124 3.809 3.809 0 001.8 2.588s0 .013.009.017c.113.247.406.909 1.064.871.5-.029.611-.415.637-.741a.212.212 0 00-.201-.245zm-1.412.113z"
                  data-name="Path 104644"
                  transform="translate(-1623.232 -799.056)"
                ></path>
              </g>
              <path
                fill="#e5837c"
                d="M1678.829 863.163a.909.909 0 00-.138.7c.034.343.2.653.255.637.08-.021-.155-.6.109-1.085.134-.251.327-.348.3-.411s-.346-.047-.526.159z"
                data-name="Path 104645"
                transform="translate(-1676.355 -860.287)"
              ></path>
            </g>
            <g data-name="Group 118293" transform="translate(15.546 13.153)">
              <ellipse
                cx="2.312"
                cy="2.584"
                fill="#021549"
                data-name="Ellipse 130747"
                rx="2.312"
                ry="2.584"
                transform="translate(26.223 1.279)"
              ></ellipse>
              <path
                fill="#c36252"
                d="M1634.033 739.77a6.3 6.3 0 00-2.978-.142 5.155 5.155 0 00-1.9.369c-.557.272-1.521.938-1.42 1.391.26 1.177 7.669 1.089 7.916-.172.104-.516-.994-1.182-1.618-1.446z"
                data-name="Path 104646"
                transform="translate(-1610.596 -737.763)"
              ></path>
              <path
                fill="#f6a698"
                d="M1242.4 706.466c-1.751-.046-2.065.356-3.577.3-1.018-.038-2.023-.075-2.555-.767-.377-.49-.31-1.106-.172-2.341.071-.649.327-2.718 1.533-3.791a1.9 1.9 0 01.595-.381c.574-.218.9.029 1.7 0s.766-.289 1.236-.214c.829.134.909.938 1.659 1.022.616.067 1.252-.4 1.236-.683-.013-.189-.306-.222-.892-.766-.176-.163-.189-.193-.339-.339a5.286 5.286 0 00-1.148-.808c-.431-.214-.5-.1-1.96-.3-.708-.092-1.42-.138-2.128-.214a1.551 1.551 0 00-.808.084 2.679 2.679 0 00-.683.553c-.264.247-.394.381-.687.666 0 0-.255.251-.549.524-.448.419-.779.691-1.277 1.106-.545.457-1.164.98-1.361 1.148a15.971 15.971 0 00-2.3 2.894c-.519.679-.5.57-2.467 2.722-1.47 1.613-1.24 1.411-2.894 3.234-2.044 2.258-2.676 2.869-3.875 4.385a19.214 19.214 0 00-1.194 1.575c-1.977 3.518.4 9.441 1.914 9.407.842-.017.762-1.851 3.535-6.6a24.759 24.759 0 013.233-4.172 7.062 7.062 0 011.747-1.4 14.044 14.044 0 012.513-.892 24.332 24.332 0 002.768-1.064c.943-.444.9-.523 1.96-1.022a16.258 16.258 0 012.341-.938 8.948 8.948 0 012.513-.511c.256-.008.942-.013 1.914-.084.712-.055.972-.1 1.106-.3.239-.356-.021-1.014-.381-1.4-.256-.264-.722-.591-2.256-.633z"
                data-name="Path 104647"
                transform="translate(-1218.742 -697.167)"
              ></path>
              <path
                fill="#dd7472"
                d="M1604.441 919.128h-.582a13.483 13.483 0 01-1.261 1.018c-2.618 1.625-5.851.281-5.981.787-.075.3 1.039.917 2.057 1.127a4.763 4.763 0 002.6-.243c1.265-.448 1.231-.955 2.618-1.407a4 4 0 012.032-.235 3.56 3.56 0 011.223.457 1.857 1.857 0 00-.457-.863c-.242-.269-.711-.599-2.249-.641z"
                data-name="Path 104648"
                transform="translate(-1580.786 -909.828)"
              ></path>
              <path
                fill="#03133f"
                d="M1685.34 760.069a1.2 1.2 0 00-1.055-.285l-1.914.23a.71.71 0 00-.6.884l1.583 6.052h2.3a4.062 4.062 0 002.614-.951 2.152 2.152 0 00.255-3.041l2.329-.691V759.6l-5.336.62z"
                data-name="Path 104649"
                transform="translate(-1662.351 -756.985)"
              ></path>
              <path
                fill="#ea9488"
                d="M1595.011 737.7c-.339-.168-.322-.389-.821-.653a2.323 2.323 0 00-1.475-.255c-.314.063-.318.151-.653.2a3.173 3.173 0 01-1.022-.084 2.4 2.4 0 00-1.533.57c-.888.557-3.326 2.492-2.978 3.489.121.356.624.658 1.906.75l.012-.126c.071-.649.327-2.718 1.533-3.791a1.9 1.9 0 01.595-.381c.574-.218.9.029 1.7 0s.767-.289 1.236-.214c.829.134.909.938 1.659 1.022a1.27 1.27 0 001.223-.595 1.642 1.642 0 01-1.382.068z"
                data-name="Path 104650"
                transform="translate(-1571.093 -735.101)"
              ></path>
              <g data-name="Group 118287" transform="translate(16.832 .866)">
                <path
                  fill="#dd7472"
                  d="M1625.258 717.922h-.084a3.376 3.376 0 01-.771-.038 4.68 4.68 0 00-.976-.05 9.537 9.537 0 00-1.83.172 8.336 8.336 0 00-.9.239.126.126 0 00-.08.163.129.129 0 00.163.08 7.69 7.69 0 01.863-.23 9.034 9.034 0 011.784-.168 4.388 4.388 0 01.93.046 3.527 3.527 0 00.817.038h.088c.3-.013.561-.021.683.126a.437.437 0 01.071.436c-.013.021-.025.042-.038.059a.126.126 0 000 .155.126.126 0 00.2.008.444.444 0 00.071-.109.686.686 0 00-.1-.712c-.205-.237-.536-.228-.891-.215z"
                  data-name="Path 104651"
                  transform="translate(-1620.613 -717.835)"
                ></path>
              </g>
              <g data-name="Group 118288" transform="translate(22.03 .454)">
                <path
                  fill="#dd7472"
                  d="M1747.237 709.5q-.056-.038-.125-.088a2.637 2.637 0 01-.23-.188c-.059-.055-.134-.126-.3-.256a5.492 5.492 0 00-.934-.653 3.754 3.754 0 00-.775-.3.131.131 0 00-.159.1.124.124 0 00.092.151 3.3 3.3 0 01.725.281 5.553 5.553 0 01.9.624c.155.126.222.189.281.243a2.2 2.2 0 00.255.209c.05.038.092.067.13.092.126.088.168.117.189.172a.508.508 0 01-.092.419.129.129 0 10.222.13.719.719 0 00.109-.645.7.7 0 00-.288-.291z"
                  data-name="Path 104652"
                  transform="translate(-1744.712 -708.012)"
                ></path>
              </g>
              <path
                fill="#cc6f62"
                d="M1511.959 904.768c-.67-.846-.645-1.889-.892-1.872-.193.013-.176.628-.469 1.361-.6 1.5-2.115 2-1.914 2.341.235.4.733-.637 1.789-.725a3.931 3.931 0 011.236.126 10.353 10.353 0 011.022.381c.947.3 2.019.05 2.044-.172.025-.28-1.807-.163-2.816-1.44z"
                data-name="Path 104653"
                transform="translate(-1496.522 -894.278)"
              ></path>
              <path
                fill="#0e2f77"
                d="M1759 755.253l3.661-1.085V751.5l-5.96.7z"
                data-name="Path 104654"
                transform="translate(-1734.168 -749.224)"
              ></path>
              <path
                fill="#07195b"
                d="M1688.218 758.273l-2.978-2.685a1.2 1.2 0 00-1.055-.285l-1.914.23a.71.71 0 00-.6.884l1.583 6.052h2.3a4.062 4.062 0 002.614-.951 2.15 2.15 0 00.05-3.245z"
                data-name="Path 104655"
                transform="translate(-1662.255 -752.844)"
              ></path>
              <circle
                cx="4.712"
                cy="4.712"
                r="4.712"
                fill="#0e2f77"
                data-name="Ellipse 130748"
                transform="rotate(-45 15.254 -10.601)"
              ></circle>
              <circle
                cx="3.904"
                cy="3.904"
                r="3.904"
                fill="#07195b"
                data-name="Ellipse 130749"
                transform="rotate(-45 15.825 -11.981)"
              ></circle>
              <path
                fill="#021549"
                d="M1578.5 859.56a3.9 3.9 0 01-7.7.892 3.9 3.9 0 107.69-1.252c.004.121.01.239.01.36z"
                data-name="Path 104656"
                transform="translate(-1556.054 -852.413)"
              ></path>
              <circle
                cx="3.368"
                cy="3.368"
                r="3.368"
                fill="#258aef"
                data-name="Ellipse 130750"
                transform="translate(15.517 3.972)"
              ></circle>
              <path
                fill="#1978e0"
                d="M1618.326 796.7a3.366 3.366 0 01-3.426 5.634 3.367 3.367 0 103.426-5.634z"
                data-name="Path 104657"
                transform="translate(-1598.307 -792.531)"
              ></path>
              <circle
                cx="1.818"
                cy="1.818"
                r="1.818"
                fill="#031544"
                data-name="Ellipse 130751"
                transform="translate(26.675 2.129)"
              ></circle>
              <path
                fill="#183b93"
                d="M1786.785 797.6a.285.285 0 10.285.285.285.285 0 00-.285-.285z"
                data-name="Path 104658"
                transform="translate(-1762.719 -793.393)"
              ></path>
              <path
                fill="#6ec4ff"
                d="M1614.5 813.126c.31.9 2.17-.348 1.83-.938-.365-.629-2.069.255-1.83.938z"
                data-name="Path 104659"
                transform="translate(-1597.898 -807.164)"
              ></path>
              <path
                fill="#2a99f4"
                d="M1591.515 888.96a1.21 1.21 0 00-.515-.017 3.36 3.36 0 001.173 1.906 1.293 1.293 0 00.109-1.294 1.268 1.268 0 00-.767-.595z"
                data-name="Path 104660"
                transform="translate(-1575.408 -880.891)"
              ></path>
              <g data-name="Group 118289" transform="translate(14.216 3.663)">
                <path
                  fill="#134191"
                  d="M1560.635 784.732a.191.191 0 00-.264-.084 4.336 4.336 0 00-2.224 3.137.189.189 0 00.168.218.19.19 0 00.209-.159 3.967 3.967 0 012.027-2.861.188.188 0 00.084-.251z"
                  data-name="Path 104661"
                  transform="translate(-1558.144 -784.624)"
                ></path>
              </g>
              <path
                fill="#c36252"
                d="M1989.437 740a5.055 5.055 0 00-1.9-.369 6.294 6.294 0 00-2.978.142c-.624.264-1.721.934-1.617 1.449.251 1.257 7.657 1.345 7.917.172.098-.459-.865-1.121-1.422-1.394z"
                data-name="Path 104662"
                transform="translate(-1950.925 -737.763)"
              ></path>
              <path
                fill="#f6a698"
                d="M1975.8 714.772c-1.2-1.512-1.83-2.128-3.875-4.385-1.655-1.826-1.424-1.625-2.894-3.234-1.969-2.157-1.952-2.044-2.467-2.722a15.789 15.789 0 00-2.3-2.894c-.2-.172-.817-.7-1.361-1.148-.5-.415-.829-.687-1.277-1.106-.289-.272-.549-.524-.549-.524-.293-.285-.423-.419-.687-.666-.49-.461-.6-.519-.683-.553a1.511 1.511 0 00-.809-.084c-.708.071-1.42.117-2.128.214-1.461.193-1.529.084-1.96.3a5.462 5.462 0 00-1.148.808c-.151.147-.163.176-.339.339-.591.545-.884.578-.892.766-.017.285.62.75 1.236.683.75-.084.833-.888 1.659-1.022.469-.075.431.184 1.236.214s1.127-.218 1.7 0a1.9 1.9 0 01.595.381c1.206 1.072 1.462 3.141 1.533 3.791.138 1.236.2 1.851-.172 2.341-.532.691-1.537.729-2.555.767-1.512.059-1.826-.343-3.577-.3-1.542.042-2.01.369-2.258.637-.36.39-.624 1.051-.381 1.4.138.2.4.247 1.106.3.972.071 1.663.08 1.914.084a8.978 8.978 0 012.513.511 15.33 15.33 0 012.342.938c1.056.5 1.014.578 1.96 1.022a24.331 24.331 0 002.769 1.064 14.94 14.94 0 012.513.892 7.42 7.42 0 011.747 1.4 24.5 24.5 0 013.233 4.172c2.773 4.745 2.689 6.58 3.535 6.6 1.52.033 3.9-5.889 1.914-9.407-.145-.251-.493-.691-1.193-1.579z"
                data-name="Path 104663"
                transform="translate(-1920.669 -697.426)"
              ></path>
              <path
                fill="#dd7472"
                d="M1956.257 920.107a12.861 12.861 0 01-1.261-1.018c-.176 0-.369-.008-.582 0-1.542.042-2.011.369-2.258.637a1.959 1.959 0 00-.457.863 3.508 3.508 0 011.223-.457 4 4 0 012.031.234c1.387.457 1.349.959 2.618 1.407a4.762 4.762 0 002.6.243c1.018-.209 2.132-.825 2.057-1.127-.115-.501-3.353.843-5.971-.782z"
                data-name="Path 104664"
                transform="translate(-1921 -909.79)"
              ></path>
              <path
                fill="#03133f"
                d="M1909.474 760.015l-1.914-.23a1.211 1.211 0 00-1.055.285l-.172.155-5.333-.625v2.668l2.329.691a2.152 2.152 0 00.255 3.041 4.054 4.054 0 002.614.951h2.3l1.583-6.052a.71.71 0 00-.607-.884z"
                data-name="Path 104665"
                transform="translate(-1872.424 -756.985)"
              ></path>
              <path
                fill="#ea9488"
                d="M1984.086 737.477a2.4 2.4 0 00-1.533-.57 3.046 3.046 0 01-1.022.084c-.335-.05-.34-.138-.654-.2a2.322 2.322 0 00-1.474.255c-.5.264-.486.482-.821.653a1.649 1.649 0 01-1.382-.071 1.27 1.27 0 001.223.595c.75-.084.833-.888 1.659-1.022.469-.075.431.184 1.236.214s1.127-.218 1.7 0a1.9 1.9 0 01.595.381c1.206 1.072 1.462 3.141 1.533 3.791 0 .042.009.084.013.126 1.281-.092 1.78-.394 1.906-.75.347-.994-2.091-2.929-2.979-3.486z"
                data-name="Path 104666"
                transform="translate(-1945.432 -735.101)"
              ></path>
              <g data-name="Group 118290" transform="translate(34.54 .87)">
                <path
                  fill="#dd7472"
                  d="M2048.982 718.348a8.079 8.079 0 00-.9-.239 8.956 8.956 0 00-1.83-.172 4.705 4.705 0 00-.976.05 3.612 3.612 0 01-.771.038h-.083c-.352-.012-.687-.025-.888.218a.686.686 0 00-.1.712.629.629 0 00.071.109.128.128 0 00.2-.008.133.133 0 000-.155.176.176 0 01-.038-.059.437.437 0 01.071-.436c.122-.147.381-.138.683-.126h.088a3.789 3.789 0 00.817-.038 4.389 4.389 0 01.93-.046 9.014 9.014 0 011.784.168 7.493 7.493 0 01.863.23.131.131 0 00.163-.08.134.134 0 00-.084-.166z"
                  data-name="Path 104667"
                  transform="translate(-2043.377 -717.935)"
                ></path>
              </g>
              <g data-name="Group 118291" transform="translate(32.195 .454)">
                <path
                  fill="#dd7472"
                  d="M1990.236 708.112a.131.131 0 00-.159-.1 3.753 3.753 0 00-.774.3 5.5 5.5 0 00-.935.653 3.407 3.407 0 00-.3.256 2.021 2.021 0 01-.231.188q-.069.05-.125.088a.677.677 0 00-.281.285.72.72 0 00.109.645.129.129 0 10.222-.13.509.509 0 01-.093-.419c.021-.054.063-.084.189-.172.038-.025.08-.055.13-.092a2.191 2.191 0 00.255-.209c.059-.054.126-.117.281-.243a5.34 5.34 0 01.9-.624 3.77 3.77 0 01.724-.281.122.122 0 00.088-.147z"
                  data-name="Path 104668"
                  transform="translate(-1987.396 -708.012)"
                ></path>
              </g>
              <path
                fill="#cc6f62"
                d="M2149.764 904.257c-.293-.733-.276-1.349-.469-1.361-.247-.017-.222 1.026-.892 1.872-1.01 1.277-2.84 1.16-2.811 1.449.025.218 1.1.469 2.044.172a10.055 10.055 0 011.022-.381 3.916 3.916 0 011.236-.126c1.055.088 1.554 1.118 1.788.725.201-.344-1.319-.851-1.918-2.35z"
                data-name="Path 104669"
                transform="translate(-2106.771 -894.278)"
              ></path>
              <path
                fill="#0e2f77"
                d="M1901 754.168l3.661 1.085 2.3-3.058-5.96-.7z"
                data-name="Path 104670"
                transform="translate(-1872.424 -749.224)"
              ></path>
              <path
                fill="#07195b"
                d="M1951.024 755.545l-1.914-.23a1.212 1.212 0 00-1.056.285l-2.978 2.685a2.154 2.154 0 00.059 3.246 4.054 4.054 0 002.614.951h2.295l1.583-6.052a.709.709 0 00-.603-.885z"
                data-name="Path 104671"
                transform="translate(-1913.974 -752.854)"
              ></path>
              <circle
                cx="4.712"
                cy="4.712"
                r="4.712"
                fill="#0e2f77"
                data-name="Ellipse 130752"
                transform="rotate(-45 25.157 -34.516)"
              ></circle>
              <circle
                cx="3.904"
                cy="3.904"
                r="3.904"
                fill="#07195b"
                data-name="Ellipse 130753"
                transform="rotate(-45 25.728 -35.896)"
              ></circle>
              <path
                fill="#021549"
                d="M2047.288 863.464a3.9 3.9 0 01-3.9-3.9 3.489 3.489 0 01.017-.36 3.9 3.9 0 107.69 1.252 3.912 3.912 0 01-3.807 3.008z"
                data-name="Path 104672"
                transform="translate(-2008.763 -852.413)"
              ></path>
              <circle
                cx="3.368"
                cy="3.368"
                r="3.368"
                fill="#258aef"
                data-name="Ellipse 130754"
                transform="translate(34.817 3.972)"
              ></circle>
              <path
                fill="#1978e0"
                d="M2051.261 799.163a3.35 3.35 0 011.072-2.463 3.367 3.367 0 103.43 5.634 3.368 3.368 0 01-4.5-3.171z"
                data-name="Path 104673"
                transform="translate(-2015.278 -792.531)"
              ></path>
              <path
                fill="#183b93"
                d="M2000.185 797.6a.285.285 0 10.285.285.285.285 0 00-.285-.285z"
                data-name="Path 104674"
                transform="translate(-1967.181 -793.393)"
              ></path>
              <path
                fill="#6ec4ff"
                d="M2140.358 812.187c-.339.591 1.521 1.839 1.83.938.235-.682-1.47-1.566-1.83-.938z"
                data-name="Path 104675"
                transform="translate(-2101.717 -807.164)"
              ></path>
              <path
                fill="#2a99f4"
                d="M2176.284 888.96a1.193 1.193 0 00-.657 1.889 3.358 3.358 0 001.173-1.906 1.21 1.21 0 00-.516.017z"
                data-name="Path 104676"
                transform="translate(-2135.322 -880.891)"
              ></path>
              <g data-name="Group 118292" transform="translate(40.339 3.665)">
                <path
                  fill="#134191"
                  d="M2183.607 786.022a4.376 4.376 0 00-1.5-1.332.2.2 0 00-.264.084.191.191 0 00.079.251 3.965 3.965 0 012.027 2.861.191.191 0 00.21.159.191.191 0 00.167-.218 4.329 4.329 0 00-.719-1.805z"
                  data-name="Path 104677"
                  transform="translate(-2181.829 -784.668)"
                ></path>
              </g>
              <circle
                cx="1.646"
                cy="1.646"
                r="1.646"
                fill="#07195b"
                data-name="Ellipse 130755"
                transform="rotate(-12.973 24.44 -115.364)"
              ></circle>
            </g>
            <path
              fill="#477fc3"
              d="M2291.6 949.331a28.117 28.117 0 00-2.186-2.073c-2.241-2.048-3.46-3.171-5.14-4.519a16.346 16.346 0 00-1.294-.963 28.114 28.114 0 00-2.723-1.483 29.543 29.543 0 01-3.681-3.493c-1.051-.247-1.072 1.629-3.586 4.084-2.814 2.752-3.581 1.767-3.744 2.739-.092.545 2.7 3.347 3.267 4.616a60.6 60.6 0 009.211 12.792c8.67 9.416 21.709 5.06 13.571-7.481-.411-.65-2.495-2.874-3.695-4.219z"
              data-name="Path 104678"
              transform="translate(-2209.7 -913.588)"
            ></path>
            <g data-name="Group 118294" transform="translate(62.689 28.634)">
              <path
                fill="#18539b"
                d="M2350.047 1066.811a.258.258 0 00-.356.084 11.572 11.572 0 01-.838 1.168 12.427 12.427 0 01-4.444 3.41.261.261 0 00-.13.344.267.267 0 00.352.134 12.9 12.9 0 004.628-3.552 12.59 12.59 0 00.875-1.219.27.27 0 00-.087-.369z"
                data-name="Path 104679"
                transform="translate(-2344.257 -1066.772)"
              ></path>
            </g>
            <path
              fill="#3872b8"
              d="M886.976 1321.5a60.526 60.526 0 00-20.984 4.645c-.771.314-3.443 5.6-.23 7.539 3.795 2.291 8.356 1.353 14.786.641a91.12 91.12 0 0010.928-1.579 38.584 38.584 0 0010.5-4.532c2.622-1.688 3.933-2.53 3.824-3.447-.378-3.143-16.592-3.256-18.824-3.267z"
              data-name="Path 104680"
              transform="translate(-863.519 -1282.196)"
            ></path>
            <path
              fill="#3e79c2"
              d="M891.962 1323.8a24.51 24.51 0 01-7.912 8.168 20.017 20.017 0 01-10.35 2.53 3.012 3.012 0 001.148 1.2c3.481 2.1 7.606 1.487 13.227.821a1.974 1.974 0 01-.951-1.474c-.126-2.576 6.66-7.632 6.873-11.439-.573.04-1.256.094-2.035.194z"
              data-name="Path 104681"
              transform="translate(-872.606 -1284.209)"
            ></path>
            <path
              fill="#477fc3"
              d="M872.445 940.8c-2.509-2.454-2.534-4.327-3.585-4.084a29.524 29.524 0 01-3.682 3.493 30.172 30.172 0 00-2.723 1.483c-.431.285-.766.54-1.294.963-1.68 1.353-2.9 2.475-5.139 4.519a28.167 28.167 0 00-2.186 2.073c-1.194 1.344-3.28 3.573-3.69 4.209-8.138 12.54 4.9 16.9 13.571 7.481a60.635 60.635 0 009.211-12.792c.57-1.269 3.359-4.067 3.267-4.616-.168-.963-.935.021-3.75-2.729z"
              data-name="Path 104682"
              transform="translate(-847.577 -913.508)"
            ></path>
            <g data-name="Group 118295" transform="translate(19.558 28.634)">
              <path
                fill="#18539b"
                d="M1320.3 1071.473a12.381 12.381 0 01-4.444-3.409 11.645 11.645 0 01-.838-1.169.258.258 0 00-.356-.084.266.266 0 00-.088.368 12.637 12.637 0 00.875 1.219 12.9 12.9 0 004.628 3.552.26.26 0 00.352-.134.261.261 0 00-.129-.343z"
                data-name="Path 104683"
                transform="translate(-1314.532 -1066.772)"
              ></path>
            </g>
            <path
              fill="#18539b"
              d="M2220.877 1578.871c.2-1.428.666-3.757 1.206-6.174-.695-.607-1.357-1.248-1.721-1.219-.955.079-1.454 4.5-1.554 5.214-1.487 10.4-1.621 17.856-1.143 22.731.079.808.176 1.667.285 2.567h3.38a83.475 83.475 0 01-.453-23.119z"
              data-name="Path 104684"
              transform="translate(-2160.043 -1521.703)"
            ></path>
            <path
              fill="#18539b"
              d="M1460.247 1575.39c-.1-.712-.6-5.135-1.554-5.215-.394-.034-1.135.72-1.893 1.365 1.453 4.624 2.668 11.037 2.45 20.214a64.918 64.918 0 01-.859 8.989h2.706q.169-1.382.293-2.622c.478-4.871.34-12.331-1.143-22.731z"
              data-name="Path 104685"
              transform="translate(-1431.283 -1520.455)"
            ></path>
          </g>
        </g>
        <g data-name="Group 118991" transform="translate(127.068 480.001)">
          <g data-name="Group 118806" transform="translate(23.204)">
            <g data-name="Group 118800">
              <g data-name="Group 118799">
                <g data-name="Group 118793">
                  <g data-name="Group 118792">
                    <g data-name="Group 118789">
                      <ellipse
                        cx="10.528"
                        cy="10.559"
                        fill="#fff"
                        data-name="Ellipse 130756"
                        rx="10.528"
                        ry="10.559"
                        transform="rotate(-84.926 11.46 10.488)"
                      ></ellipse>
                    </g>
                    <g data-name="Group 118791" transform="translate(.854 .829)">
                      <g data-name="Group 118790">
                        <path
                          fill="#e0e0e0"
                          d="M186.872 45.66l.121-.121c.091-.091.212-.182.364-.334a1.962 1.962 0 00.273-.243c.091-.091.182-.212.3-.334a4.54 4.54 0 00.334-.394 3.365 3.365 0 00.364-.485 10.581 10.581 0 001.426-2.7 10.164 10.164 0 00.576-3.975c0-.182-.03-.364-.03-.576-.03-.182-.061-.394-.091-.576s-.061-.394-.091-.576c-.061-.182-.091-.394-.152-.576-.061-.152-.121-.394-.182-.576v-.03c-.061-.182-.152-.394-.212-.607-.091-.212-.182-.394-.273-.576a5.275 5.275 0 00-.3-.576c-.243-.364-.455-.789-.728-1.123-.152-.182-.273-.364-.425-.546-.212-.243-.425-.455-.668-.7-.03-.03-.03-.061-.061-.061-.091-.091-.182-.152-.273-.243-.182-.152-.364-.334-.546-.485-.394-.273-.789-.576-1.214-.819a9.5 9.5 0 00-1.365-.668 6.828 6.828 0 00-.728-.243c-.121-.03-.243-.091-.364-.121l-.394-.091a5.616 5.616 0 00-1.244-.212c-.212-.03-.425-.03-.637-.061l-.667-.03h-.212l-.394.03-.394.03-.394.061-.394.061-.212.03-.212.061c-.425.121-1.092.334-1.487.455-.03 0-.061.03-.091.03a11.368 11.368 0 00-2.913 1.729 11.214 11.214 0 00-2.215 2.579c-.03.03-.03.061-.061.091-.182.394-.516 1-.7 1.4l-.091.182-.061.182-.121.394-.121.394-.091.394-.091.394-.03.182-.091.667c-.03.212-.03.425-.061.637a8.929 8.929 0 000 1.274l.03.394a2.088 2.088 0 00.061.394 6.569 6.569 0 00.121.759 11.507 11.507 0 00.425 1.456 8.932 8.932 0 00.607 1.335c.121.212.243.425.364.607.061.091.121.212.182.3.03.03.03.061.061.091.182.273.394.516.576.759.152.182.3.334.455.516a6.788 6.788 0 00.971.91 5.83 5.83 0 00.516.394c.182.121.334.243.516.364a4.908 4.908 0 00.546.3 4.583 4.583 0 00.546.273 4.3 4.3 0 00.546.243c.182.091.364.121.576.212l.546.182c.182.03.364.091.546.121a10.774 10.774 0 004.035.121 10.263 10.263 0 002.913-.941 2.776 2.776 0 00.516-.273l.455-.273a1.888 1.888 0 00.364-.243c.121-.091.212-.152.3-.212.182-.121.3-.243.394-.3a.677.677 0 00.152-.091 1.575 1.575 0 00-.152.091c-.091.061-.243.182-.394.3a2.624 2.624 0 01-.3.212 4.49 4.49 0 01-.394.243c-.152.091-.273.182-.455.273-.152.091-.334.182-.516.273a10.082 10.082 0 01-2.882.91 10.626 10.626 0 01-4.005-.121c-.182-.03-.364-.091-.546-.121l-.546-.182a4.053 4.053 0 01-.546-.212c-.182-.091-.364-.152-.546-.243a4.237 4.237 0 01-.516-.273h-.03c-.182-.091-.364-.212-.546-.3-.182-.121-.334-.243-.516-.364a3.312 3.312 0 01-.516-.394c-.334-.3-.667-.576-.971-.91-.152-.182-.3-.334-.455-.516-.182-.243-.394-.516-.576-.759-.03-.03-.03-.061-.061-.091-.061-.091-.121-.212-.182-.3-.121-.212-.243-.394-.364-.607a8.848 8.848 0 01-.576-1.335 11.057 11.057 0 01-.425-1.426 5.659 5.659 0 01-.121-.759c-.03-.121-.03-.243-.061-.394v-.425a13.164 13.164 0 010-1.547 7.085 7.085 0 01.121-.789l.03-.212.03-.182.091-.394.091-.394.121-.394.121-.394.061-.182.091-.182c.182-.394.516-1 .7-1.4 0-.03.03-.061.03-.091a11.588 11.588 0 012.185-2.549 10.3 10.3 0 012.882-1.7c.03 0 .061-.03.091-.03.394-.121 1.062-.334 1.487-.455l.212-.061.212-.03.394-.061.394-.061.394-.03.394-.03h.425c.273 0 .516.03.789.03a9.2 9.2 0 011.547.273l.364.091c.121.03.243.091.364.121.243.091.485.152.728.243a10.96 10.96 0 011.335.668 10.638 10.638 0 011.214.819l.546.455c.091.091.182.152.273.243l.061.061c.212.243.425.455.637.7.152.182.273.364.425.546a6.442 6.442 0 01.728 1.123 5.278 5.278 0 01.3.576c.091.182.182.394.273.576.061.212.152.394.212.576.03.091.061.182.091.3v.03c.061.3.152.576.212.85a3.791 3.791 0 01.091.576c.03.182.061.394.091.576 0 .182.03.364.03.576a10.759 10.759 0 01-.576 3.975 9.711 9.711 0 01-1.4 2.7 5.056 5.056 0 01-.364.485c-.121.152-.243.273-.334.394-.121.121-.212.243-.3.334a1.964 1.964 0 01-.273.243 3.04 3.04 0 01-.364.334.131.131 0 01-.055.127z"
                          data-name="Path 104736"
                          transform="translate(-169.525 -27)"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
                <g data-name="Group 118798" transform="translate(17.299 22.487)">
                  <g data-name="Group 118797">
                    <g data-name="Group 118794" transform="translate(.043 .114)">
                      <path
                        fill="#fff"
                        d="M226.972 101.47a1.736 1.736 0 01-2.913-.243 1.667 1.667 0 01.152-1.79 1.736 1.736 0 012.913.243 1.672 1.672 0 01-.152 1.79z"
                        data-name="Path 104737"
                        transform="translate(-223.868 -98.756)"
                      ></path>
                    </g>
                    <g data-name="Group 118796">
                      <g data-name="Group 118795">
                        <path
                          fill="#e0e0e0"
                          d="M226.6 101.482a.376.376 0 01.091-.061.9.9 0 00.212-.243 1.566 1.566 0 00.334-1.092 1.625 1.625 0 00-.212-.789 1.912 1.912 0 00-.637-.667 1.594 1.594 0 00-1-.243 1.889 1.889 0 00-1.032.394 1.783 1.783 0 00-.516 1.972 1.75 1.75 0 00.546.759 2.051 2.051 0 00.728.364 1.873 1.873 0 001.153-.152 1.059 1.059 0 00.273-.182l.061-.061a2.609 2.609 0 01-.364.212 1.734 1.734 0 01-1.092.121 1.649 1.649 0 01-.7-.334 1.548 1.548 0 01-.485-.728 1.752 1.752 0 01-.061-.971 1.8 1.8 0 01.546-.88 1.848 1.848 0 01.941-.394 1.639 1.639 0 011.547.819 1.342 1.342 0 01.212.728 1.641 1.641 0 01-.3 1.062c-.154.275-.275.366-.245.366z"
                          data-name="Path 104738"
                          transform="translate(-223.726 -98.381)"
                        ></path>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
            </g>
            <g data-name="Group 118805" transform="translate(8.219 6.742)">
              <g data-name="Group 118802">
                <g data-name="Group 118801">
                  <path
                    fill="#e0e0e0"
                    d="M193.8 49.436h1.608a1.361 1.361 0 011.4-1.365 1.288 1.288 0 011.244.819 1.424 1.424 0 01-.121 1.3 1.724 1.724 0 01-1.942.668v3.611h1.578v-2.09a3.085 3.085 0 002.215-3 2.869 2.869 0 00-2.973-2.882 2.679 2.679 0 00-3.009 2.939z"
                    data-name="Path 104739"
                    transform="translate(-193.799 -46.49)"
                  ></path>
                </g>
              </g>
              <g data-name="Group 118804" transform="translate(2.155 8.681)">
                <g data-name="Group 118803">
                  <path fill="#e0e0e0" d="M0 0H1.608V1.487H0z" data-name="Rectangle 59931"></path>
                </g>
              </g>
            </g>
          </g>
          <g transform="translate(0 2.738)">
            <g data-name="Group 118883" transform="translate(0 16.03)">
              <g data-name="Group 118881">
                <g data-name="Group 118880">
                  <g data-name="Group 118874">
                    <g data-name="Group 118873">
                      <g data-name="Group 118870">
                        <circle
                          cx="10.195"
                          cy="10.195"
                          r="10.195"
                          fill="#fff"
                          data-name="Ellipse 130757"
                          transform="matrix(.123 -.992 .992 .123 0 20.234)"
                        ></circle>
                      </g>
                      <g data-name="Group 118872" transform="translate(1.235 1.167)">
                        <g data-name="Group 118871">
                          <path
                            fill="#263238"
                            d="M135.229 109.025v-.152a3.147 3.147 0 00-.03-.485v-.364a2.379 2.379 0 00-.061-.425 2.656 2.656 0 01-.061-.485c-.03-.182-.091-.364-.121-.546a10.2 10.2 0 00-1.123-2.731 9.918 9.918 0 00-2.579-2.913c-.152-.121-.3-.212-.455-.334-.152-.091-.3-.182-.485-.3-.152-.091-.334-.212-.485-.3-.182-.091-.364-.182-.516-.243-.091-.03-.182-.091-.273-.121l-.273-.091c-.182-.061-.394-.152-.576-.212a3.55 3.55 0 00-.607-.152 4.435 4.435 0 00-.607-.152 9.026 9.026 0 00-1.3-.152c-.212 0-.455-.03-.668-.03s-.455.03-.667.03a1.137 1.137 0 00-.334.03c-.121.03-.212.03-.334.061a5.6 5.6 0 00-.7.121 11.559 11.559 0 00-1.365.394 12.656 12.656 0 00-1.335.576 7.255 7.255 0 00-.637.394 1.842 1.842 0 00-.3.212l-.3.212a7.183 7.183 0 00-1.153 1c-.182.182-.334.394-.516.576l-.121.152-.121.152-.243.3-.243.3-.212.334-.212.334-.091.182-.091.182a7.757 7.757 0 00-.334.728c-.091.243-.182.516-.273.759a10.475 10.475 0 000 6.493c.091.243.182.516.273.759a7.759 7.759 0 01.334.728l.091.182.091.182.212.334.212.334.243.3.243.3.121.152.121.152c.182.182.334.394.516.576.394.334.759.7 1.153 1l.3.212a1.843 1.843 0 01.3.212c.212.121.425.273.637.394a12.659 12.659 0 001.335.576 11.559 11.559 0 001.365.394c.243.061.455.061.7.121.121.03.243.03.334.061a1.137 1.137 0 01.334.03c.243 0 .455.03.667.03s.455-.03.668-.03a9.028 9.028 0 001.3-.152 3.55 3.55 0 00.607-.152c.212-.061.394-.091.607-.152.182-.061.394-.152.576-.212l.273-.091c.091-.03.182-.091.273-.121.182-.091.364-.182.516-.243a2.621 2.621 0 00.485-.3 4.256 4.256 0 00.485-.3c.152-.121.3-.212.455-.334a9.918 9.918 0 002.579-2.913 10.2 10.2 0 001.123-2.731c.03-.212.121-.394.121-.546a3.026 3.026 0 00.061-.485 2.379 2.379 0 00.061-.425v-.364a2.16 2.16 0 01.03-.485v-.182c0 .121-.03.273-.03.485a1.6 1.6 0 01-.03.364 2.381 2.381 0 01-.061.425c-.03.152-.061.334-.091.485-.03.182-.091.364-.121.546a9.677 9.677 0 01-1.123 2.7 10.224 10.224 0 01-2.579 2.882 5.185 5.185 0 00-.425.334c-.152.091-.3.182-.485.3a3.913 3.913 0 01-.485.273c-.182.091-.364.182-.516.243-.091.03-.182.091-.273.121l-.273.091c-.182.061-.364.152-.576.212-.182.061-.394.091-.607.152a4.437 4.437 0 01-.607.152 9.124 9.124 0 01-1.274.152c-.212 0-.425.03-.668.03-.212 0-.455-.03-.667-.03a1.244 1.244 0 01-.334-.03c-.121-.03-.212-.03-.334-.061a5.141 5.141 0 01-.667-.121 11.554 11.554 0 01-1.365-.394 12.667 12.667 0 01-1.335-.576l-.637-.364a1.841 1.841 0 01-.3-.212l-.3-.212a11.5 11.5 0 01-1.153-.971c-.182-.182-.334-.364-.516-.576l-.121-.152-.121-.152-.243-.3-.243-.3-.212-.334-.212-.334-.091-.182-.091-.182a7.762 7.762 0 01-.334-.728c-.091-.243-.182-.485-.273-.759a10.3 10.3 0 01-.516-3.186 10.156 10.156 0 01.516-3.186c.091-.243.182-.516.273-.759a7.754 7.754 0 00.334-.728l.091-.182.091-.182.212-.334.212-.334.243-.3.243-.3.121-.152.121-.152c.182-.182.334-.364.516-.576a8.873 8.873 0 011.153-.971l.3-.212a1.843 1.843 0 00.3-.212 6.81 6.81 0 01.637-.364 10.415 10.415 0 011.335-.576 11.557 11.557 0 011.362-.398c.212-.061.455-.061.667-.121.121-.03.212-.03.334-.061a1.244 1.244 0 00.334-.03c.212 0 .455-.03.667-.03s.455.03.668.03a9.122 9.122 0 011.274.152 3.549 3.549 0 01.607.152c.212.061.394.091.607.152.182.061.394.152.576.212l.273.091c.091.03.182.091.273.121.182.091.364.182.516.243.182.091.334.182.485.273a4.247 4.247 0 01.485.3 5.186 5.186 0 01.425.334 10.224 10.224 0 012.579 2.882 10.059 10.059 0 011.123 2.7 1.772 1.772 0 01.121.546c.03.182.061.334.091.485a2.381 2.381 0 01.061.425 1.477 1.477 0 00.03.364c0 .212.03.364.03.485a.552.552 0 00.003.277z"
                            data-name="Path 104760"
                            transform="translate(-114.9 -98.8)"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g data-name="Group 118879" transform="translate(22.019 16.063)">
                    <g data-name="Group 118878">
                      <g data-name="Group 118875" transform="translate(.061 .062)">
                        <path
                          fill="#fff"
                          d="M186.938 149.769a1.664 1.664 0 01-1.669 1.669 1.669 1.669 0 010-3.338 1.664 1.664 0 011.669 1.669z"
                          data-name="Path 104761"
                          transform="translate(-183.6 -148.1)"
                        ></path>
                      </g>
                      <g data-name="Group 118877">
                        <g data-name="Group 118876">
                          <path
                            fill="#263238"
                            d="M186.8 149.627v-.121a1.257 1.257 0 00-.03-.3 1.7 1.7 0 00-.607-.941 1.622 1.622 0 00-.728-.334 1.883 1.883 0 00-.91.061 1.407 1.407 0 00-.789.607 1.669 1.669 0 000 2 1.911 1.911 0 00.789.607 1.561 1.561 0 00.91.061 2 2 0 00.728-.334 1.7 1.7 0 00.607-.941 1.257 1.257 0 00.03-.3v-.061a1.8 1.8 0 01-.061.394 1.652 1.652 0 01-.607.88 2.244 2.244 0 01-.668.3 2.054 2.054 0 01-.85-.061 1.6 1.6 0 01-.728-.546 1.61 1.61 0 010-1.881 1.415 1.415 0 01.728-.546 1.366 1.366 0 01.85-.061 1.236 1.236 0 01.668.3 1.651 1.651 0 01.607.88 1.172 1.172 0 01.061.337z"
                            data-name="Path 104762"
                            transform="translate(-183.4 -147.896)"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g fill="#263238" data-name="Group 118882" transform="translate(5.422 9.632)">
                <path
                  d="M131.279 129.458v1.4h-1.092v-1.4L128.7 127h1.153l.91 1.547.91-1.547h1.062z"
                  data-name="Path 104763"
                  transform="translate(-128.7 -126.909)"
                ></path>
                <path
                  d="M146.095 130v.85H143V127h3.034v.85h-1.942v.637h1.729v.819h-1.729v.7z"
                  data-name="Path 104764"
                  transform="translate(-138.661 -126.909)"
                ></path>
                <path
                  d="M154.3 130.28l.364-.819a2.527 2.527 0 001.274.394c.455 0 .637-.121.637-.3 0-.607-2.185-.152-2.185-1.608 0-.7.576-1.244 1.7-1.244a2.877 2.877 0 011.4.334l-.334.819a2.106 2.106 0 00-1.062-.3c-.455 0-.637.152-.637.334 0 .576 2.185.152 2.185 1.578 0 .667-.576 1.244-1.7 1.244a2.842 2.842 0 01-1.642-.432z"
                  data-name="Path 104765"
                  transform="translate(-146.533 -126.7)"
                ></path>
              </g>
            </g>
            <g data-name="Group 118897" transform="translate(82.948 23.366)">
              <g data-name="Group 118895">
                <g data-name="Group 118894">
                  <g data-name="Group 118888" transform="translate(2.861)">
                    <g data-name="Group 118887">
                      <g data-name="Group 118884">
                        <circle
                          cx="10.953"
                          cy="10.953"
                          r="10.953"
                          fill="#fff"
                          data-name="Ellipse 130758"
                          transform="rotate(-7.244 21.817 1.381)"
                        ></circle>
                      </g>
                      <g data-name="Group 118886" transform="translate(1.296 1.199)">
                        <g data-name="Group 118885">
                          <path
                            fill="#263238"
                            d="M327.3 128.244v-.182a3.505 3.505 0 01.03-.516 1.866 1.866 0 01.03-.394 2.34 2.34 0 01.061-.455q.045-.228.091-.546a5.91 5.91 0 01.152-.607 10.672 10.672 0 013.975-6.068c.152-.121.3-.243.485-.364.152-.121.334-.212.516-.334.182-.091.334-.212.546-.3.182-.091.364-.182.577-.273a2.817 2.817 0 01.3-.152 1.269 1.269 0 00.3-.121c.212-.061.425-.152.607-.212l.637-.182a4.3 4.3 0 01.668-.152 10.338 10.338 0 011.4-.152c.243 0 .485-.03.728-.03s.485.03.728.03a1.477 1.477 0 01.364.03c.121.03.243.03.364.061a6.071 6.071 0 01.728.121 11.508 11.508 0 011.456.425 8.536 8.536 0 011.426.637c.243.121.455.273.7.394a1.253 1.253 0 01.334.212l.334.243a10.443 10.443 0 011.244 1.062c.182.212.364.394.546.607l.152.152.121.182.243.334.243.334.212.364.212.364.121.182.091.182c.121.243.243.516.364.789.091.273.212.546.3.819a10.665 10.665 0 010 6.918c-.091.273-.212.546-.3.819-.121.273-.243.516-.364.789l-.091.182-.121.182-.212.364-.212.364-.243.334-.243.334-.121.182-.152.152c-.182.212-.364.425-.546.607a13.567 13.567 0 01-1.244 1.062l-.334.243c-.121.091-.243.152-.334.212-.243.121-.455.273-.7.394a9.8 9.8 0 01-1.426.637 8.792 8.792 0 01-1.456.425 6.077 6.077 0 01-.728.121c-.121.03-.243.03-.364.061s-.243 0-.364.03c-.243 0-.486.03-.728.03s-.485-.03-.728-.03a10.336 10.336 0 01-1.4-.152 4.3 4.3 0 01-.668-.152 5.021 5.021 0 01-.637-.182c-.212-.091-.425-.152-.607-.212a1.267 1.267 0 01-.3-.121 2.82 2.82 0 00-.3-.152c-.182-.091-.394-.182-.577-.273s-.364-.212-.546-.3c-.182-.121-.364-.212-.516-.334s-.3-.243-.485-.364a11.038 11.038 0 01-2.791-3.125 10.281 10.281 0 01-1.183-2.943 4.441 4.441 0 01-.152-.607l-.091-.546a2.34 2.34 0 01-.061-.455 1.6 1.6 0 00-.03-.394c0-.212-.03-.394-.03-.516v-.061a.848.848 0 00.03.182c0 .121.03.3.03.516a1.867 1.867 0 00.03.394 2.345 2.345 0 00.061.455q.046.228.091.546a5.911 5.911 0 00.152.607 9.8 9.8 0 001.214 2.913 11.285 11.285 0 002.761 3.095c.152.121.3.243.485.364a2.883 2.883 0 00.516.3c.182.091.334.212.546.3.182.091.364.182.576.273.091.03.182.091.273.121a1.269 1.269 0 01.3.121c.212.061.394.152.607.212l.637.182a4.3 4.3 0 00.668.152 10.443 10.443 0 001.365.152c.243 0 .486.03.7.03.243 0 .485-.03.728-.03a1.478 1.478 0 00.364-.03c.121-.03.243-.03.364-.061a6.073 6.073 0 00.728-.121 13.178 13.178 0 001.456-.425 9.8 9.8 0 001.426-.637c.243-.121.455-.273.667-.394a1.252 1.252 0 00.334-.212l.334-.243a13.551 13.551 0 001.244-1.062c.182-.212.364-.394.546-.607l.152-.152.121-.152.243-.334.243-.334.212-.364.212-.364.121-.182.091-.182c.121-.243.243-.516.364-.759.091-.273.182-.546.3-.819a10.816 10.816 0 00.546-3.429 11.768 11.768 0 00-.576-3.429c-.091-.273-.182-.546-.3-.819-.121-.243-.243-.516-.364-.759l-.091-.182-.121-.182-.212-.364-.212-.364-.243-.334-.243-.334-.121-.152-.152-.152c-.182-.212-.364-.394-.546-.607a10.434 10.434 0 00-1.244-1.062l-.334-.243a1.252 1.252 0 00-.334-.212c-.212-.121-.455-.273-.668-.394-.485-.212-.941-.455-1.426-.637a8.794 8.794 0 00-1.456-.425 6.071 6.071 0 00-.728-.121c-.121-.03-.243-.03-.364-.061s-.243 0-.364-.03c-.243 0-.485-.03-.728-.03s-.485.03-.7.03a9.394 9.394 0 00-1.365.152 5.287 5.287 0 00-.668.152 5.02 5.02 0 00-.637.182c-.212.061-.425.152-.607.212a1.268 1.268 0 00-.3.121 1.078 1.078 0 01-.273.121c-.182.091-.364.182-.577.273-.182.091-.364.212-.546.3s-.334.212-.516.3c-.152.121-.3.243-.485.364a10.375 10.375 0 00-2.761 3.095 9.8 9.8 0 00-1.214 2.913 4.441 4.441 0 00-.152.607l-.091.546a2.34 2.34 0 00-.061.455c0 .152-.03.273-.03.394 0 .212-.03.394-.03.516a.146.146 0 01.001.131z"
                            data-name="Path 104766"
                            transform="translate(-327.3 -117.2)"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g data-name="Group 118893" transform="translate(0 17.271)">
                    <g data-name="Group 118892">
                      <g data-name="Group 118889" transform="translate(0 .07)">
                        <path
                          fill="#fff"
                          d="M313.6 172.19a1.793 1.793 0 001.79 1.79 1.79 1.79 0 10-1.79-1.79z"
                          data-name="Path 104767"
                          transform="translate(-313.6 -170.4)"
                        ></path>
                      </g>
                      <g data-name="Group 118891">
                        <g data-name="Group 118890">
                          <path
                            fill="#263238"
                            d="M313.6 172.029v-.121a1.634 1.634 0 01.03-.334 1.791 1.791 0 01.637-1 1.963 1.963 0 01.759-.364 1.786 1.786 0 01.971.061 1.833 1.833 0 01.85 2.822 1.914 1.914 0 01-.85.637 1.787 1.787 0 01-.971.061 1.484 1.484 0 01-.759-.364 1.722 1.722 0 01-.637-1 1.489 1.489 0 01-.03-.334v-.061a1.506 1.506 0 00.091.425 1.677 1.677 0 00.637.941 1.558 1.558 0 00.728.3 1.6 1.6 0 00.91-.091 1.689 1.689 0 00.789-.607 1.669 1.669 0 000-2 1.912 1.912 0 00-.789-.607 1.875 1.875 0 00-.91-.091 2.288 2.288 0 00-.728.3 1.78 1.78 0 00-.637.941c-.061.304-.061.486-.091.486z"
                            data-name="Path 104768"
                            transform="translate(-313.6 -170.169)"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g fill="#263238" data-name="Group 118896" transform="translate(10.225 9.695)">
                <path
                  d="M351.669 145.5v4.612h-1.062l-2.033-2.458v2.458H347.3V145.5h1.062l2.033 2.458V145.5z"
                  data-name="Path 104769"
                  transform="translate(-347.3 -145.409)"
                ></path>
                <path
                  d="M364 147.6a2.586 2.586 0 112.579 2.4 2.411 2.411 0 01-2.579-2.4zm3.823 0a1.254 1.254 0 00-1.244-1.335 1.338 1.338 0 000 2.67 1.272 1.272 0 001.244-1.335z"
                  data-name="Path 104770"
                  transform="translate(-358.933 -145.2)"
                ></path>
              </g>
            </g>
            <g data-name="Group 118915" transform="translate(60.052)">
              <g data-name="Group 118909">
                <g data-name="Group 118908">
                  <g data-name="Group 118902">
                    <g data-name="Group 118901">
                      <g data-name="Group 118898">
                        <ellipse
                          cx="9.436"
                          cy="9.466"
                          fill="#fff"
                          data-name="Ellipse 130759"
                          rx="9.436"
                          ry="9.466"
                          transform="rotate(-21.482 18.216 3.455)"
                        ></ellipse>
                      </g>
                      <g data-name="Group 118900" transform="translate(2.781 2.794)">
                        <g data-name="Group 118899">
                          <path
                            fill="#263238"
                            d="M273.6 60.644a1.275 1.275 0 00.152.061c.091.03.243.091.425.152a2.089 2.089 0 01.3.121 2.818 2.818 0 01.394.121c.152.03.3.091.455.121a2.6 2.6 0 00.516.091 8.85 8.85 0 002.731.061 9.074 9.074 0 003.429-1.123 3.315 3.315 0 01.455-.243c.152-.091.273-.212.425-.3a2.154 2.154 0 00.425-.3c.152-.121.273-.243.425-.364a4.673 4.673 0 01.394-.364l.03-.03a5.419 5.419 0 00.394-.425l.364-.455c.121-.152.243-.3.364-.485a7.062 7.062 0 00.607-1.032l.273-.546c.091-.273.212-.546.3-.819 0-.03.03-.061.03-.091.03-.091.061-.212.091-.3a4.851 4.851 0 00.152-.637 9.028 9.028 0 00.152-1.3c.03-.455 0-.91 0-1.365-.03-.212-.061-.455-.091-.7-.03-.121-.03-.243-.061-.334l-.091-.334a7.338 7.338 0 00-.3-1.092c-.061-.182-.152-.364-.212-.546l-.243-.546-.091-.152-.182-.3-.182-.3-.212-.3-.212-.3-.121-.152-.121-.152c-.273-.273-.7-.728-.971-1-.03-.03-.061-.03-.061-.061a10.167 10.167 0 00-2.549-1.638 11.067 11.067 0 00-2.943-.759h-1.669l-.182.03-.364.061-.364.061-.364.091-.364.091-.182.03-.576.212c-.182.061-.364.152-.546.212a6.245 6.245 0 00-1 .516l-.3.182-.273.182a8.605 8.605 0 00-.546.394c-.334.3-.7.576-1 .91a8.732 8.732 0 00-.85 1l-.364.546-.182.273a.106.106 0 01-.03.061 5.967 5.967 0 01-.394.759 4.424 4.424 0 00-.212.576 8.246 8.246 0 00-.334 1.153c-.061.182-.061.394-.121.576-.03.182-.061.394-.091.576 0 .182-.03.394-.03.576v.546a3.3 3.3 0 00.03.546 3.341 3.341 0 00.061.546c.03.182.03.334.061.516s.091.334.121.485a9.372 9.372 0 001.517 3.277 8.937 8.937 0 001.908 1.919 1.844 1.844 0 00.425.3c.152.091.273.182.394.243a3.2 3.2 0 01.334.212 2.823 2.823 0 01.3.152 3.581 3.581 0 00.394.182.674.674 0 00.152.121.332.332 0 00-.121-.061 3.973 3.973 0 00-.394-.212 2.81 2.81 0 01-.3-.152c-.091-.061-.212-.121-.334-.212a4.494 4.494 0 00-.394-.243c-.152-.091-.273-.212-.425-.3a9.105 9.105 0 01-1.881-1.972 9.445 9.445 0 01-1.487-3.246c-.03-.152-.091-.334-.121-.485a201759.457 201759.457 0 00-.121-1.032 3.3 3.3 0 00-.03-.546v-.546c0-.182.03-.364.03-.576.03-.182.061-.364.091-.576a3.9 3.9 0 01.121-.576 9.632 9.632 0 01.334-1.153c.061-.182.152-.394.212-.576.121-.243.243-.516.394-.759a.106.106 0 01.03-.061l.182-.273c.121-.182.212-.364.334-.546a8.734 8.734 0 01.849-1c.3-.334.637-.607.971-.91a6.157 6.157 0 01.546-.394 1.424 1.424 0 01.273-.182l.3-.182a9.427 9.427 0 011.244-.607 5.906 5.906 0 00.668-.243l.182-.061.182-.03.364-.091.364-.091.364-.061.364-.061.182-.03h1.669a9.78 9.78 0 012.913.728 9.483 9.483 0 012.518 1.638l.061.061c.273.273.7.728.941 1l.121.152.091.152.212.3.212.3.182.3.182.3.091.152.061.152a6.059 6.059 0 00.3.637 11.118 11.118 0 01.394 1.335l.091.334c.03.121.03.212.061.334.03.212.061.455.091.668a6.541 6.541 0 010 1.335 9.024 9.024 0 01-.152 1.3 3.549 3.549 0 01-.152.607c-.03.091-.061.212-.091.3 0 .03-.03.061-.03.091-.091.273-.212.546-.3.789l-.273.546a7.068 7.068 0 01-.607 1.032c-.091.182-.243.3-.334.485l-.364.455a4.834 4.834 0 01-.394.394 1.321 1.321 0 00-.182.212l-.03.03c-.212.182-.394.334-.607.516a2.154 2.154 0 01-.425.3c-.152.091-.273.212-.425.3a3.32 3.32 0 01-.455.243 8.779 8.779 0 01-3.4 1.123 10.079 10.079 0 01-2.731-.03 2.605 2.605 0 01-.516-.091c-.152-.03-.3-.091-.455-.121s-.273-.061-.394-.091a3.147 3.147 0 01-.3-.121c-.182-.061-.334-.121-.425-.152a.3.3 0 01-.121.055z"
                            data-name="Path 104771"
                            transform="translate(-267.9 -42.5)"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                  <g data-name="Group 118907" transform="translate(3.444 21.939)">
                    <g data-name="Group 118906">
                      <g data-name="Group 118903" transform="translate(.011 .042)">
                        <path
                          fill="#fff"
                          d="M271.389 108.791a1.546 1.546 0 01-.971-2.427 1.6 1.6 0 011.517-.607 1.546 1.546 0 01.971 2.427 1.528 1.528 0 01-1.517.607z"
                          data-name="Path 104772"
                          transform="translate(-270.121 -105.738)"
                        ></path>
                      </g>
                      <g data-name="Group 118905">
                        <g data-name="Group 118904">
                          <path
                            fill="#263238"
                            d="M271.03 108.6a.133.133 0 00.091.03 1.412 1.412 0 00.273.091 1.482 1.482 0 001.032-.152 2.033 2.033 0 00.546-.485 1.373 1.373 0 00.273-.789 1.445 1.445 0 00-.212-.91 1.729 1.729 0 00-.728-.667 1.865 1.865 0 00-1-.091 1.475 1.475 0 00-.789.455 1.571 1.571 0 00-.394.728 1.951 1.951 0 000 .728 1.6 1.6 0 00.576.85 2.782 2.782 0 00.243.152c.03.03.061.061.091.061a1.779 1.779 0 01-.3-.212 1.513 1.513 0 01-.516-.85 1.359 1.359 0 010-.7 1.72 1.72 0 01.364-.7 1.349 1.349 0 01.758-.425 1.574 1.574 0 01.91.091 1.372 1.372 0 01.7.607 1.683 1.683 0 01.212.85 1.6 1.6 0 01-.243.759 1.225 1.225 0 01-.516.455 1.523 1.523 0 01-.971.182c-.279-.024-.4-.085-.4-.058z"
                            data-name="Path 104773"
                            transform="translate(-270.085 -105.6)"
                          ></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </g>
              </g>
              <g data-name="Group 118914" transform="translate(9.577 7.982)">
                <g data-name="Group 118911">
                  <g data-name="Group 118910">
                    <path
                      fill="#263238"
                      d="M290.3 62.3h1.426a1.2 1.2 0 011.244-1.214 1.23 1.23 0 011.123.728 1.289 1.289 0 01-.093 1.154 1.593 1.593 0 01-1.729.607v3.216h1.429v-1.912a2.762 2.762 0 001.972-2.7A2.571 2.571 0 00293 59.6a2.487 2.487 0 00-2.7 2.7z"
                      data-name="Path 104774"
                      transform="translate(-290.299 -59.6)"
                    ></path>
                  </g>
                </g>
                <g data-name="Group 118913" transform="translate(1.942 7.858)">
                  <g data-name="Group 118912">
                    <path fill="#263238" d="M0 0H1.426V1.335H0z" data-name="Rectangle 59935"></path>
                  </g>
                </g>
              </g>
            </g>
          </g>
        </g>
      </g>{' '}
    </SvgIcon>
  );
}

export function InfoCircleIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 12.54,
    height: 12.54,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 12.54 12.54" sx={rootSx} {...rest}>
      <path
        data-name="icons8-info (3)"
        d="M8.27 2a6.27 6.27 0 106.27 6.27A6.28 6.28 0 008.27 2zm0 1.254A5.016 5.016 0 113.254 8.27 5.007 5.007 0 018.27 3.254zm-.627 1.881v1.254H8.9V5.135zm0 2.508V11.4H8.9V7.643z"
        transform="translate(-2 -2)"
        fill="#A7AFC4"
      />
    </SvgIcon>
  );
}

export function WhatsappNotificationIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 16,
    height: 16,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" sx={rootSx} {...rest}>
      <path
        data-name="icons8-notification (3)"
        d="M10 2a1.2 1.2 0 00-1.2 1.2v.556A4.8 4.8 0 005.2 8.4v4.8l-1.6 1.6v.8h5.016a1.6 1.6 0 102.767 0H16.4v-.8l-1.6-1.6V8.4a4.8 4.8 0 00-3.6-4.644V3.2A1.2 1.2 0 0010 2zm-4.873.066A7.977 7.977 0 002 8.4h1.6a6.382 6.382 0 012.5-5.067zm9.747 0L13.9 3.333A6.383 6.383 0 0116.4 8.4H18a7.977 7.977 0 00-3.127-6.334zM10 5.2a3.2 3.2 0 013.2 3.2v5.462l.138.138H6.663l.137-.138V8.4A3.2 3.2 0 0110 5.2z"
        transform="translate(-2 -2)"
        fill={rootStyle ? rootStyle : "#60666f"}
      />
    </SvgIcon>
  );
}

export function ArchiveProductIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 24,
    height: 24,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" sx={rootSx} {...rest}>
      <g data-name="Group 113646" transform="translate(-11 -48)">
        <path data-name="Rectangle 59110" transform="translate(11 48)" fill="none" d="M0 0H24V24H0z" />
        <g data-name="Group 120806" fill={rootStyle ? rootStyle : "#60666f"}>
          <path
            data-name="icons8-archive (2)"
            d="M-3928.342-666a1.659 1.659 0 00-1.658 1.658v.332a1.648 1.648 0 001 1.517v7.77a1.658 1.658 0 001.658 1.658h7.3a1.658 1.658 0 001.658-1.658v-7.77a1.648 1.648 0 001-1.517v-.332a1.659 1.659 0 00-1.67-1.658zm0 .663h9.287a1 1 0 011 1v.327a1 1 0 01-1 1h-9.287a1 1 0 01-1-1v-.332a1 1 0 011-1zm0 2.985h9.287v7.629a1 1 0 01-1 1h-7.3a1 1 0 01-1-1z"
            strokeWidth={1}
            transform="translate(3946.698 719.532)"
          />
          <path
            data-name="icons8-down-arrow (1)"
            d="M-3923.698-660.509a.283.283 0 00-.283.283v3.7l-1.095-1.09a.283.283 0 00-.4 0l-.024.024a.283.283 0 000 .4l1.6 1.6a.283.283 0 00.4 0l1.6-1.6a.283.283 0 000-.4l-.024-.024a.283.283 0 00-.4 0l-1.091 1.094v-3.7a.283.283 0 00-.283-.287z"
            strokeWidth={1}
            transform="translate(3946.698 719.532)"
          />
        </g>
      </g>
    </SvgIcon>
  );
}

export function RightForwardBlackIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 6.374,
    height: 10.701,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 6.374 10.701" sx={rootSx} {...rest}>
      <path
        d="M22.886 23.159a.909.909 0 01-.635-1.56l3.889-3.8-3.88-3.781a.909.909 0 111.27-1.3l4.547 4.437a.909.909 0 010 1.3L23.521 22.9a.906.906 0 01-.635.259z"
        transform="translate(-21.977 -12.458)"
        fill="#60666f"
      />
    </SvgIcon>
  );
}

export function ArchivedProductColorIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 24,
    height: 24,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" sx={rootSx} {...rest}>
      <g data-name="Group 120831" transform="translate(-254 -381)">
        <path data-name="Rectangle 59919" transform="translate(254 381)" fill="none" d="M0 0H24V24H0z" />
        <g data-name="Group 120814" fill="#ff980e" stroke="#ff980e">
          <path
            data-name="icons8-archive (2)"
            d="M-3928.137-666a1.864 1.864 0 00-1.863 1.863v.373a1.851 1.851 0 001.118 1.7v8.729a1.863 1.863 0 001.863 1.863h8.2a1.863 1.863 0 001.863-1.863v-8.725a1.851 1.851 0 001.118-1.7v-.377A1.864 1.864 0 00-3917.7-666zm0 .745h10.437a1.118 1.118 0 011.118 1.118v.373a1.118 1.118 0 01-1.118 1.114h-10.437a1.118 1.118 0 01-1.118-1.114v-.373a1.118 1.118 0 011.118-1.113zm0 3.354h10.437v8.57a1.118 1.118 0 01-1.118 1.118h-8.2a1.118 1.118 0 01-1.118-1.118z"
            strokeWidth={0.4}
            transform="translate(4188.92 1051.734)"
          />
          <path
            data-name="icons8-down-arrow (1)"
            d="M-3922.92-654.21a.318.318 0 01-.319-.321v-4.158l-1.23 1.23a.318.318 0 01-.45 0l-.027-.027a.318.318 0 010-.45l1.8-1.8a.318.318 0 01.45 0l1.8 1.8a.318.318 0 010 .45l-.027.027a.318.318 0 01-.45 0l-1.23-1.23v4.158a.318.318 0 01-.317.321z"
            strokeWidth={0.25}
            transform="translate(4188.92 1051.734)"
          />
        </g>
      </g>
    </SvgIcon>
  );
}

export function UnarchiveProductIcon(props: IconProps) {
  const { rootStyle, ...rest } = props;
  const rootSx = {
    width: 81.452,
    height: 75.219,
    ...rootStyle,
  };
  return (
    <SvgIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 81.452 75.219" sx={rootSx} {...rest}>
      <g data-name="Group 120638" transform="translate(-146.773 -524)">
        <path
          data-name="Path 20625"
          d="M155.814 135.859c.208-1.191.541-2.369.78-3.582a21.174 21.174 0 00.1-7.094 27.863 27.863 0 00-5.228-12.45c-2.913-3.907-7.292-7.071-12-5.876-4.9 1.238-9.043 5.014-13.8 6.738-8.066 2.917-16.231-2.4-24.359-2.21-7.018.152-14.382 2.672-19 8.9a13.238 13.238 0 00-2.756 9.334c.546 4.1 3.558 7.226 5.8 10.262 3.443 4.654 4.747 9.723 1.85 15.155-1.958 3.682-4.592 6.934-4.364 11.507.365 7.314 7.118 11.732 12.687 13.7a25.349 25.349 0 0017.705-.044c5-2.011 8.484-6.408 13.038-9.215a20.609 20.609 0 0113.372-2.935c4.813.575 9.885 1.587 14.536-.488 4.451-1.989 6.559-7.3 6.725-12.4a20.363 20.363 0 00-1.129-7.478c-1.032-2.886-3.315-5.138-3.958-8.2a9.5 9.5 0 01.001-3.624z"
          transform="translate(146.773 524) translate(-79.454 -106.601)"
          fill="#e6eefa"
        />
        <path
          data-name="Path 20626"
          d="M155.814 135.859c.208-1.191.541-2.369.78-3.582a21.174 21.174 0 00.1-7.094 27.863 27.863 0 00-5.228-12.45c-2.913-3.907-7.292-7.071-12-5.876-4.9 1.238-9.043 5.014-13.8 6.738-8.066 2.917-16.231-2.4-24.359-2.21-7.018.152-14.382 2.672-19 8.9a13.238 13.238 0 00-2.756 9.334c.546 4.1 3.558 7.226 5.8 10.262 3.443 4.654 4.747 9.723 1.85 15.155-1.958 3.682-4.592 6.934-4.364 11.507.365 7.314 7.118 11.732 12.687 13.7a25.349 25.349 0 0017.705-.044c5-2.011 8.484-6.408 13.038-9.215a20.609 20.609 0 0113.372-2.935c4.813.575 9.885 1.587 14.536-.488 4.451-1.989 6.559-7.3 6.725-12.4a20.363 20.363 0 00-1.129-7.478c-1.032-2.886-3.315-5.138-3.958-8.2a9.5 9.5 0 01.001-3.624z"
          transform="translate(146.773 524) translate(-79.454 -106.601)"
          fill="#fff"
          opacity={0.38}
        />
        <ellipse
          data-name="Ellipse 129793"
          cx={14.925}
          cy={1.905}
          rx={14.925}
          ry={1.905}
          transform="translate(172.575 578.617)"
          fill="#cfdbed"
        />
        <g transform="translate(164.877 533.488)">
          <path
            data-name="Path 104894"
            d="M24.654 9a15.653 15.653 0 00-15.66 15.66 16.06 16.06 0 001.978 7.665l-1.978 6.923a.875.875 0 001.071 1.071l7.006-1.978a15.817 15.817 0 007.665 1.978A15.66 15.66 0 1024.654 9z"
            transform="translate(-.615 -.615)"
            fill="#ffbb67"
          />
          <path
            data-name="Path 104895"
            d="M8.461 11.681a15.5 15.5 0 00-2.967 9.066 15.979 15.979 0 001.9 7.418l-1.9 6.758a.875.875 0 001.071 1.071l6.758-1.9a15.043 15.043 0 007.418 1.9"
            fill="none"
            stroke="#18193f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
          />
          <path
            data-name="Path 104896"
            d="M30.055 32.781A15.221 15.221 0 0020.737 5.5a15.763 15.763 0 00-5.6 1.071"
            fill="none"
            stroke="#18193f"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
          />
          <path
            data-name="Path 104897"
            d="M17.033 16.627a3.709 3.709 0 117.418 0c0 3.462-3.709 3.379-3.709 7.006"
            fill="none"
            stroke="#18193f"
            strokeLinecap="round"
            strokeWidth={3}
          />
          <circle
            data-name="Ellipse 130761"
            cx={1.648}
            cy={1.648}
            r={1.648}
            transform="translate(19.093 26.517)"
            fill="#18193f"
          />
        </g>
      </g>
    </SvgIcon>
  );
}
