import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        custom: '#30343A',
        headColor: '#021A28',
        descriptionColor: '#666669',
        secTwoHeaderColorOne: '#071E2E',
        secTwoHeaderColorTwo: '#3499DE',
        quotesBoxColor: '#FBAD27',
        leftTabHeading: '#ABAAAB',
        demoBtnTxt: '#0E70EB',
        rightheading: '#2A282C'
      },
      backgroundColor: {
        custom: '#F7F7F7',
        downloadButtonBg: '#1E65FF',
        demoBtnBg: '#ffff',
        circleColor: '#649DE1',
      },
      fontSize: {
        headFontSize: '54px',
        secTwoFontSize: '38px',
        secTwoLeftHeaderFontSize: '32px',
        cardHeaderFontSize: '26px',
        sectionFourHeader: '22px',
        quotesFontSize: '49px',
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        excon: ['Excon', 'sans'],
        roboto: ['Roboto', 'sans-serif'],
      },
      borderRadius: {
        firstSection: '18px',
        downloadButtonRadius: '4.352px',
      },
      boxShadow: {
        custom: '0px 0px 26px -2px rgba(0, 0, 0, 0.09)',
        cardSection: '0px 20px 50px 0px rgba(0, 0, 0, 0.09)',
      },
      padding: {
        logoTop: '47px',
        logoLeft: '97px',
        headTop: '76px',
        headLeft: '103px',
        downloadButtonY: '8.704px',
        downloadButtonX: '70.72px',
        DemoButtonX: '10.72px',
        secTwoPaddingX: '120px',
        secTwoPaddingXMd: '80px',
        secTwoPaddingXSm: '56px',
        sectionFourPt: '118px',
      },
      lineHeight: {
        headLineHeight: '58px',
        secTwoLeftHeaderLineHeight: '42px',
        secTwoLeftDescriptionLineHeight: '22px',
        cardHeaderLineHeight: '34px',
        footerLineHeight: '30px',
      },
      width: {
        quotesWidth: '50px',
        exploreWidth: '160px',
        exploreWidthSm: '130px'

      },
      height: {
        footerHeight: '100%',
        quotesHeight: '50px',
        exploreHeight: '60px',
        overflow: 'inherit'
      },
      border: {
        borderItem: '1px solid #ABAAAB'
      },
      borderColor: {
        footerBorder: 'red'
      },
    },
  },
plugins: [],
};
export default config;
