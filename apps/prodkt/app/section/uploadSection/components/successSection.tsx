import ErrorSvg from '@/app/assets/errorSvg';
import SuccessSvg from '@/app/assets/successSvg';
import RefreshOutlinedIcon from '@mui/icons-material/RefreshOutlined';

export default function SuccessSection(props: { dataFailed: any, onTryAgainClick?: any }) {
  const { dataFailed, onTryAgainClick } = props;
  return (
    <div className="max-[380px]:mx-[16px] mx-[32px] sm:mx-12 md:mx-20 lg:mx-28 min-[1300px]:mx-36 rounded-firstSection bg-white p-4">
      <div className="rounded-[14px] border border-[rgba(39, 116, 207, 0.30)] border-dashed bg-[#EEF6FF] py-[88px] flex flex-col items-center justify-center">



        {/* error screen */}
        {
          dataFailed ?
            <>
              <ErrorSvg className="w-[88px]" />
              <p className="text-secTwoHeaderColorOne text-[22px] font-poppins font-semibold mt-[12px]">Error! Please upload a valid document</p>
              <div className='flex items-center gap-1 mt-3 cursor-pointer' onClick={onTryAgainClick}>
                <RefreshOutlinedIcon />
                <p className='text-decoration-line: underline text-[#343538] font-poppins font-semibold text-[18px]'>Try Again</p>
              </div>
            </>
            :
            <>
              <SuccessSvg className="w-[88px]" />
              <p className="text-secTwoHeaderColorOne text-[22px] font-poppins font-semibold mt-[12px]">SMS has been successfully sent</p>
              <div>
                <p className="text-#071E2E text-[18px] font-poppins font-normal">You can now install the app and upkeep your products</p>
              </div>
            </>
        }

      </div>
    </div>
  );
}
