import BannerSectionSvg from '../assets/bannerSectionSvg';
import TopHeaderLineIcon from '../assets/topHeaderLine';
import HeaderLogo from '../assets/headerLogo';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function SectionOne() {
  return (
    <div className="bg-white rounded-firstSection shadow-cardSection">
      <p className="text-3xl font-bold text-custom font-poppins pt-logoTop pl-[10px] max-[320px]:pl-[10px] max-[380px]:pl-[15px] max-[425px]:pl-[10px] lg:pl-logoLeft">
        <HeaderLogo className="w-[150px] h-[40px]" />
      </p>
      <div className="grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-12 xs:grid-cols-12">
        <div className="pt-4 pl-6 md:pt-6 md:pl-10 lg:pt-[76px] lg:pl-[103px] lg:col-span-1 md:col-span-1 sm:col-span-12 xs:col-span-12 order-2 sm:order-1">
          <div className="relative">
            <p className="text-[26px] md:text-3xl lg:text-[40px] xl:text-headFontSize text-headColor leading-[26px] md:leading-[36px] lg:leading-[48px] xl:leading-headLineHeight font-bold font-poppins pb-8 relative z-10">
              Take care of your home gadgets!
            </p>
            <div className="absolute max-[380px]:bottom-[12px] bottom-[15px] sm:bottom-[14px] md:bottom-[14px] lg:bottom-[17px] max-[380px]:left-0 right-[150px] md:right-[75px] lg:right-[55px] min-[1300px]:left-0">
              <TopHeaderLineIcon />
            </div>
          </div>
          <p className="text-[15px] lg:text-[15px] xl:text-base text-descriptionColor font-normal font-poppins pb-6">
            Prodkt gives you the power to make your products
            <br /> last longer and know everything about them inside out.
          </p>
          <div className="">
            <button
              type="button"
              className="text-base text-white font-bold h-14 mb-16 lg:mb-[70px] xl:mb-44 py-downloadButtonY bg-downloadButtonBg rounded-downloadButtonRadius w-exploreWidth
              lg:w-exploreWidth sm:w-exploreWidthSm"
            >
              <a href='https://app.prodkt.co/signin/' target="_blank">Get Started</a>
            </button>

            <button
              type="button"
              className="text-base border border-[#0E70EB] text-demoBtnTxt font-bold h-14 py-downloadButtonY px-ButtonX bg-demoBtnBg rounded-downloadButtonRadius w-exploreWidth 
              lg:w-exploreWidth md:ml-[24px] lg:ml-[24px]  ml-[24px] sm:w-exploreWidthSm"
            >
              <a href='#chatbotSec'>View demo</a> <span className="pl-[8px]"><ArrowForwardIcon /></span>
            </button>
          </div>

        </div>
        <div className="w-full mt-[45px] lg:mt-[-90px] pr-[20px] lg:col-span-1 md:col-span-1 sm:col-span-12 xs:col-span-12 order-1 sm:order-2">
          <BannerSectionSvg className="w-full h-full lg:h-full" />
        </div>
      </div>
    </div>
  );
}
