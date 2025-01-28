import Link from 'next/link';
import CircleBigIcon from '../assets/cicleBig';
import CircleSmallIcon from '../assets/circleSmall';
import SectionFourBgSvg from '../assets/sectionFourBgImageSvg';

export default function SectionFour() {
  return (
    <div className="bg-white text-center relative">
      <p className="text-[26px] lg:text-secTwoLeftHeaderFontSize text-secTwoHeaderColorOne font-bold leading-[35px] lg:leading-secTwoLeftHeaderLineHeight pt-sectionFourPt pb-5">
        Download now for <br />
        convenience, knowledge, and attentive care
      </p>
      <button
        type="button"
        className="text-sectionFourHeader text-white font-bold h-14 mb-56 py-downloadButtonY px-downloadButtonX bg-downloadButtonBg rounded-downloadButtonRadius"
      >
        <a href='https://app.prodkt.co/signin/' target="_blank">Get Started</a>
      </button>
      <div className="absolute bottom-[-40px]">
        <SectionFourBgSvg className="w-full px-[80px]" />
      </div>
      <div className="absolute top-[30px] lg:top-[105px] left-0">
        <CircleSmallIcon />
      </div>
      <div className="absolute bottom-[-56px] right-0">
        <CircleBigIcon />
      </div>
    </div>
  );
}
