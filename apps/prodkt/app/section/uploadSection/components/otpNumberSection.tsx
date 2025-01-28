import HorizontalDivider from '@/app/assets/horizontalDivider';
import VerificationSectionSvg from '@/app/assets/verificationSvg';

export default function OtpVerification(props: any) {

  const { handleInputOtp, otpValue, SubmitOtp, resendClick } = props;

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
          <div className="col-span-12 sm:col-span-12 lg:col-span-5 flex flex-col justify-center sm:justify-center md:justify-center items-center sm:items-center md:items-center lg:items-start px-[20px] sm:px-[20px] lg:px-0 mt-[30px] sm:mt-[30px] lg:mt-0">
            <p className="text-[22px] sm:text-[22px] md:text-[26px] text-secTwoHeaderColorOne font-semibold font-poppins">
              Enter OTP Number
            </p>
            <p className="text-[14px] text-[#000] font-light font-poppins">
              Enter the a digit code sent to + 91 77087 78654
            </p>
            <div className="my-[18px] flex gap-[16px]">
              <input type='number' id="otpInput0" value={otpValue[0]} onChange={(e) => handleInputOtp(0, e.target.value, e)} className="w-[58px] h-[51px] md:w-[66px] md:h-[59px] rounded-[5px] text-center font-bold text-[16px]" maxLength={1} />
              <input type='number' id="otpInput1" value={otpValue[1]} onChange={(e) => handleInputOtp(1, e.target.value, e)} className="w-[58px] h-[51px] md:w-[66px] md:h-[59px] rounded-[5px] text-center font-bold text-[16px]" maxLength={1} />
              <input type='number' id="otpInput2" value={otpValue[2]} onChange={(e) => handleInputOtp(2, e.target.value, e)} className="w-[58px] h-[51px] md:w-[66px] md:h-[59px] rounded-[5px] text-center font-bold text-[16px]" maxLength={1} />
              <input type='number' id="otpInput3" value={otpValue[3]} onChange={(e) => handleInputOtp(3, e.target.value, e)} className="w-[58px] h-[51px] md:w-[66px] md:h-[59px] rounded-[5px] text-center font-bold text-[16px]" maxLength={1} />
            </div>
            <button
              onClick={SubmitOtp}
              type="button"
              className="text-sm text-white font-medium w-full sm:w-full md:w-[323px] lg:w-[323px] py-[14.69px] bg-downloadButtonBg rounded-downloadButtonRadius"
            >
              Submit
            </button>
            <div onClick={resendClick}>
              <p className="text-[#5D9DEF] text-[12px] font-normal font-poppins mt-[8px] w-full sm:w-full md:w-[323px] lg:w-[323px] cursor-pointer text-right">
                Resend Code
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
