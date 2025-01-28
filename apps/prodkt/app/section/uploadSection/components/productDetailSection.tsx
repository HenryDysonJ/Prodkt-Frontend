import HorizontalDivider from '@/app/assets/horizontalDivider';
import VerticalDivider from '@/app/assets/verticalDivider';
import SuccessSection from './successSection';

export default function ProductDetailSection(props: any) {
  const { invoiceData, exploreClick, isErr, onTryagainclickFunc } = props;

  return (
    <>
      {
        isErr && invoiceData?.message === 'Please provide a valid invoice!' ?
          <SuccessSection
            dataFailed={
              invoiceData?.message === 'Please provide a valid invoice!' ? true : false
            }
            onTryAgainClick={onTryagainclickFunc}
          />
          :
          <div className="max-[380px]:mx-[16px] mx-[32px] sm:mx-12 md:mx-20 lg:mx-28 min-[1300px]:mx-36 rounded-firstSection bg-white p-4">
            <div className="rounded-[14px] border border-[rgba(39, 116, 207, 0.30)] border-dashed bg-[#EEF6FF] py-10 flex flex-col items-center justify-center">
              <div className="grid grid-cols-12 flex justify-center">
                <div className="col-span-12 sm:col-span-12 lg:col-span-5 flex justify-center sm:justify-center lg:justify-end pr-0 sm:pr-0 lg:pr-[50px]">
                  <img
                    src={invoiceData?.data?.product_details?.image_url}
                    alt="Product Image"
                    className="w-[162px] h-[196px] object-cover"
                  />
                </div>
                <div className="col-span-1 max-[768px]:hidden">
                  <HorizontalDivider />
                </div>
                <div className="col-span-12 sm:col-span-12 lg:col-span-6 flex flex-col justify-center sm:justify-center lg:justify-start px-[20px] sm:px-[20px] lg:px-0 mt-[30px] sm:mt-[30px] lg:mt-0">
                  <div>
                    <p className="text-[22px] text-secTwoHeaderColorOne font-semibold font-poppins">{invoiceData?.data?.product_details?.product_name}</p>
                    <p className="text-descriptionColor font-light text-xs font-poppins">{invoiceData?.data?.product_details?.product_name}</p>
                    <VerticalDivider className="my-[15px]" />
                    <div className="flex">
                      <p className="leftText">Date of purchase:</p>
                      <p className="rightText">{invoiceData?.data?.product_details?.purchase_date}</p>
                    </div>
                    <div className="flex">
                      <p className="leftText">Warranty:</p>
                      <p className="rightText">{invoiceData?.data?.standard_warranty_details
                        ?.warranty_coverage}&nbsp;{invoiceData?.data?.standard_warranty_details
                          ?.warranty_coverage_type}</p>
                    </div>
                    <div className="flex">
                      <p className="leftText">Seller Details:</p>
                      <p className="rightText">{invoiceData?.data?.product_details?.mode_of_purchase}</p>
                    </div>
                  </div>
                  <button
                    onClick={() => exploreClick()}
                    type="button"
                    className="text-sm text-white font-medium max-w-full sm:max-w-full lg:max-w-[293px] py-[10.69px] bg-downloadButtonBg rounded-downloadButtonRadius mt-[30px]"
                  >
                    Explore More
                  </button>
                </div>
              </div>
            </div>
          </div>
      }
    </>
  );
}
