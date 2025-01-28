import { uploadInvoiceDocument } from '@/app/api/upload-invoice/route';
import { LoadingMessage } from '@/app/assets/loading';
import FileUploadSvg from '@/app/assets/uploadSvg';
import UploadLeftSvg from '@/app/assets/uploadSvgLeft';
import UploadRightSvg from '@/app/assets/uploadSvgRight';
import { useState } from 'react';

export default function UploadSection(props: any) {
  const { onUploadClick, loading } = props;
  return (
    <div className="max-[380px]:mx-[16px] mx-[32px] sm:mx-12 md:mx-20 lg:mx-28 min-[1300px]:mx-36 rounded-firstSection bg-white p-4">
      <div className="rounded-[14px] border border-[rgba(39, 116, 207, 0.30)] border-dashed bg-[#EEF6FF] py-16 flex flex-col items-center justify-center">
        {
          loading ?
            <div className="flex items-center">
              <LoadingMessage height='30px' />
            </div> :
            <>
              <div className="relative">
                <FileUploadSvg />
                <UploadLeftSvg />
                <UploadRightSvg className="absolute right-0 bottom-0" />
                <input onChange={(e) => onUploadClick(e.target.files)} accept="image/jpeg, image/*,application/pdf" type="file" id="myFile" name="filename" className="absolute inset-0 opacity-0 cursor-pointer" />
              </div>
              <p className="text-[17px] pt-[14px] pb-[5px] font-medium leading-[25.828px] font-poppins text-[#0F0F0F]">
                Scan and Upload files or <span className="text-[#4C95EB] underline cursor-pointer">Browse</span>
              </p>
              <p className="text-[#676767] text-[13px] font-poppins leading-[19.371px] font-light">
                Supported formates: JPEG, PNG, PDF.
              </p>
            </>
        }
      </div>
    </div>
  );
}
