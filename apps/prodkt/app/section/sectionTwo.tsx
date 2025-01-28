import ProductLifeSpanSvg from '../assets/productLifeSpan';
import ProductPolicySvg from '../assets/productPolicySvg';
import SecTwoBorderLineIcon from '../assets/sectionTwoBorderLine';
import SecTwoCircleIcon from '../assets/sectionTwoCircle';
import StayOrganizerSvg from '../assets/stayOrganizeSvg';

export default function SectionTwo() {
  return (
    <div className="bg-white pb-32 relative">
      <p className="text-secTwoHeaderColorOne text-[30px] lg:text-secTwoFontSize font-bold pt-12 lg:pt-[55px] xl:pt-20 pb-20 lg:pb-[95px] xl:pb-36 text-center">
        Here’s how <span className="text-secTwoHeaderColorTwo">Prodkt can help you…</span>
      </p>
      <div className="lg:w-[925px] max-[380px]:mx-0 mx-[20px] md:mx-[40px] lg:mx-auto">
        <div className="grid grid-cols-12 gap-[30px] md:gap-[68px] xl:gap-[99px] mb-[10px] sm:mb-[60px] md:mb-[60px] xl:mb-24 relative">
          <div className="col-span-1"></div>
          <div className="col-span-12 sm:col-span-5 max-[425px]:pl-[20px] md:pl-0 xl:pl-0">
            <p className="max-[380px]:text-[16px] text-[18px] md:text-[22px] xl:text-secTwoLeftHeaderFontSize leading-[25px] md:leading-[28px] xl:leading-secTwoLeftHeaderLineHeight text-secTwoHeaderColorOne pb-3 font-bold font-poppins">
              Never miss on those
              <br /> crucial docs again
            </p>
            <p className="max-[380px]:text-[10px] text-[11.5px] md:text-[11px] lg:text-sm xl:text-sm font-medium font-poppins text-secTwoHeaderColorOne leading-secTwoLeftDescriptionLineHeight">
              Store product documents in our secured vault.
              <br />
              Access invoices, warranties, manuals easily
              <br />
              for organized, and controlled ownership
              <br />
              journey conveniently.
            </p>
          </div>
          <div className="col-span-4 sm:col-span-5 w-full hidden sm:block mt-[-35px] sm:mt-[-73px] md:mt-[-73px] lg:mt-[-73px]">
            <StayOrganizerSvg className="w-full" />
          </div>
          {/* <div className="col-span-4 sm:col-span-5 w-full mt-[-35px] sm:mt-[-73px] md:mt-[-73px] lg:mt-[-73px]">
            <StayOrganizerSvg className="w-full" />
          </div> */}
          <div className="col-span-1"></div>
          <div className="absolute max-[380px]:left-[16px] max-[425px]:left-[5px] top-[-36px]  sm:bottom-0 md:left-[-20px] lg:left-0 lg:top-0 w-quotesWidth h-quotesHeight bg-quotesBoxColor rounded-lg sm:top-0">
            <p className="quotesStyle">"</p>
          </div>
        </div>
        <div className="grid grid-cols-12 gap-[30px] md:gap-[68px] xl:gap-[99px] mb-[13px] md:mb-[60px] lg:mb-[50px] xl:mb-24 pt-0 md:pt-0 lg:pt-[50px] xl:pt-[84px] relative">
          <div className="col-span-1"></div>
          <div className="col-span-11 sm:col-span-5 w-full mt-[-96px] sm:mt-[-75px] md:mt-[-75px] lg:mt-[-75px] xs:ml-0 sm:ml-[-75px] md:ml-[-75px] lg:ml-[-75px]">
            <ProductPolicySvg className="w-full" />
          </div>
          <div className="col-span-12 sm:col-span-5 mt-[48px] md:mt-0 xl:mt-0 max-[425px]:pl-[20px] md:pl-0 xl:pl-0">
            <p className="leading-[25px] md:leading-[28px] xl:leading-secTwoLeftHeaderLineHeight max-[380px]:text-[16px] text-[18px] md:text-[22px] xl:text-secTwoLeftHeaderFontSize text-secTwoHeaderColorOne pb-3 font-bold font-poppins">
              Unravel your <br />
              product policies
            </p>
            <p className="max-[380px]:text-[10px] text-[11.5px] md:text-[11px] lg:text-sm xl:text-sm font-medium font-poppins text-secTwoHeaderColorOne leading-secTwoLeftDescriptionLineHeight">
              Get insights into product terms, invoices, warranties,
              <br />
              insurance, AMCs in plain English. Go beyond the
              <br />
              the surface, know the good, bad & challenges for
              <br />
              comprehensive understanding.
            </p>
          </div>
          <div className="col-span-1"></div>
          <div className="absolute max-[380px]:left-[20px]  md:left-[321px] lg:left-[405px] xl:left-[491px] top-[190px] md:top-0 lg:top-[50px] xl:top-[84px] z-10 w-quotesWidth h-quotesHeight bg-quotesBoxColor rounded-lg">
            <p className="quotesStyle">"</p>
          </div>
        </div>
        {/* <div className="col-span-9 sm:col-span-5 w-[80%] mt-[-96px] sm:mt-[-75px] md:mt-[-75px] lg:mt-[-75px] xs:ml-0 sm:ml-[-75px] md:ml-[-75px] lg:ml-[-75px]">
          <ProductPolicySvg className="w-full" />
        </div> */}
        <div className="sm:block lg:hidden md:hidden xl:hidden col-span-9 sm:col-span-5 w-[100%] mt-[-96px] sm:mt-[-75px] md:mt-[-75px] lg:mt-[-75px] xs:ml-0 sm:ml-[-75px] md:ml-[-75px] lg:ml-[-75px]">
          <StayOrganizerSvg className="w-full" />
        </div>
        <div className="grid grid-cols-12 gap-[30px] md:gap-[68px] xl:gap-[99px] pt-[45px] md:pt-[45px] lg:pt-[105px] xl:pt-[110px] relative">
          <div className="col-span-1"></div>
          <div className="col-span-12 sm:col-span-5 max-[425px]:pl-[20px] md:pl-0 xl:pl-0">
            <p className="leading-[25px] md:leading-[28px] xl:leading-secTwoLeftHeaderLineHeight max-[380px]:text-[16px] text-[18px] md:text-[22px] xl:text-secTwoLeftHeaderFontSize text-secTwoHeaderColorOne pb-3 font-bold font-poppins">
              Maximize
              <br />
              Product Lifespan
            </p>
            <p className="max-[380px]:text-[10px] text-[11.5px] md:text-[11px] lg:text-sm xl:text-sm font-medium font-poppins text-secTwoHeaderColorOne leading-secTwoLeftDescriptionLineHeight">
              Enhance product lifespan. Schedule
              <br />
              maintenance, receive timely reminders
              <br />
              for fullest performance of devices and
              <br />
              appliances.
            </p>
          </div>
          <div className="col-span-12 sm:col-span-5 w-full mt-[-75px]">
            <ProductLifeSpanSvg className="w-full" />
          </div>
          <div className="col-span-1"></div>
          <div className="absolute max-[380px]:left-[20px] top-[10px] left-[0px] sm:left-[-20px] md:left-[-20px] lg:left-0 sm:left-0 md:left-0 lg:left-0 max-[380px]:top-[14px] top-[20px] md:top-[54px] lg:top-[114px] xl:top-[114px] z-10 w-quotesWidth h-quotesHeight bg-quotesBoxColor rounded-lg">
            <p className="quotesStyle">"</p>
          </div>
        </div>
      </div>
      <div className="absolute left-[-50px] top-[-39px]">
        <SecTwoCircleIcon />
      </div>
      <div className="absolute right-[80px] bottom-[-135px]">
        <SecTwoCircleIcon />
      </div>
      {/* <div className="absolute w-[90%] md:w-[45%] lg:w-[40%] max-[375px]:w-[100%] xl:w-auto max-[380px]:top-[162px] top-[190px] md:top-[120px] lg:top-[200px] xl:top-[333px] left-[20px] md:left-[42px] lg:left-[72px] xl:left-[190px] min-[1440px]:left-[282px]">
        <SecTwoBorderLineIcon className="w-full" />
      </div> */}
      <div className="hidden md:block absolute w-[90%] md:w-[45%] lg:w-[40%] max-[375px]:w-[100%] xl:w-auto max-[380px]:top-[162px] top-[190px] md:top-[120px] lg:top-[200px] xl:top-[333px] left-[42px] min-[900px]:left-[76px] min-[1200px]:left-[192px] min-[1440px]:left-[282px] min-[2560px]:left-[842px]">
        <SecTwoBorderLineIcon className="w-full" />
      </div>
    </div>
  );
}
