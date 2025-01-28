import HorizontalDivider from '@/app/assets/horizontalDivider';
import VerificationSectionSvg from '@/app/assets/verificationSvg';

export default function MobileNumberSection(props: any) {
  const { handleInputChange, inputValue, submit } = props;

  return (
    <div className="max-[380px]:mx-[16px] mx-[32px] sm:mx-12 md:mx-20 lg:mx-28 min-[1300px]:mx-36 rounded-firstSection bg-white p-4">
      <div className="rounded-[14px] border border-[rgba(39, 116, 207, 0.30)] border-dashed bg-[#EEF6FF] py-10 flex flex-col justify-center">
        <div className="grid grid-cols-12 flex justify-center">
          <div className="col-span-12 sm:col-span-12 lg:col-span-6 flex justify-center sm:justify-center lg:justify-end">
            <VerificationSectionSvg />
          </div>
          <div className="col-span-1 max-[768px]:hidden">
            <HorizontalDivider />
          </div>
          <div className="col-span-12 sm:col-span-12 lg:col-span-5 flex flex-col justify-center sm:justify-center md:justify-center px-[20px] sm:px-[20px] lg:px-0 mt-[30px] sm:mt-[30px] lg:mt-0">
            <p className="text-[22px] sm:text-[22px] md:text-[26px] text-secTwoHeaderColorOne font-semibold font-poppins">
              Enter Mobile Number
            </p>
            <input
              className="font-bold text-[16px] max-w-full sm:max-w-full lg:max-w-[323px] h-[50px] my-[18px] rounded-[5px] text-center"
              value={inputValue}
              onChange={handleInputChange}
              type='number'
            />
            <button
              onClick={submit}
              type="button"
              className="text-sm text-white font-medium max-w-full sm:max-w-full lg:max-w-[323px] py-[12.69px] bg-downloadButtonBg rounded-downloadButtonRadius"
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
