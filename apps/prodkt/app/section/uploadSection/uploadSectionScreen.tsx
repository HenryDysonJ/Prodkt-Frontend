"use client";
import { useState } from 'react';
import ChatBotSection from './components/chatBotSection';
import MobileNumberSection from './components/mobileNumberSection';
import OtpVerification from './components/otpNumberSection';
import ProductDetailSection from './components/productDetailSection';
import SuccessSection from './components/successSection';
import UploadSection from './components/uploadSection';
import { GetOtp, SubmitApi, getResendOtp, uploadInvoiceDocument } from '@/app/api/upload-invoice/route';

export default function UploadSectionScreen() {
  const [activeComponent, setActiveComponent] = useState('A');
  const [invoiceData, setInvoiceData] = useState<any>();
  const [loading, setLoading] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [otpValue, setOtpValue] = useState(['', '', '', '']);
  const [submitData, setSubmitData] = useState<any>();
  const [resendOtp, setResendOtp] = useState<any>();
  const [otpData, setOtpData] = useState<any>();
  const [isShow, setShow] = useState<boolean>(true);

  // upload file Api call
  const onUploadClick = async (files: any) => {
    try {
      setLoading(true);
      const responseData = await uploadInvoiceDocument(files);
      setInvoiceData(responseData)
      setLoading(false);
    } catch (error) {
      console.error('Error:', error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
    if (invoiceData?.api_status === 'API-OK') {
      setActiveComponent('B')
    }
  }

  const exploreClick = () => {
    setActiveComponent('B')
  }

  const handleInputChange = (e: { target: { value: string }; }) => {
    // setInputValue(e.target.value);
    const inputValues = e.target.value;
    if (inputValues?.length <= 10) {
      setInputValue(inputValues);
    }
  };

  const handleInputOtp = (index: any, value: any, e: any) => {
    const newValue = value.charAt(0);

    const newOtpValues = [...otpValue];
    newOtpValues[index] = newValue;
    setOtpValue(newOtpValues);

    if (e && e.keyCode === 8 && index > 0) {
      const prevInput = document.getElementById(`otpInput${index - 1}`);
      if (prevInput) {
        prevInput.focus();
        return;
      }
    }

    if (newValue !== "") {
      if (index < otpValue.length - 1) {
        const nextInput = document.getElementById(`otpInput${index + 1}`);
        if (nextInput) {
          nextInput.focus();
        }
      }
    }
  };


  // submit api call
  const submitClick = async () => {
    const otpString: string = otpValue.join('');
    try {
      const submitData = await SubmitApi(otpString, inputValue, invoiceData)
      setSubmitData(submitData)

    } catch (error) {
      console.error('Error:', error);
    }
    setActiveComponent('D')
  }

  // resend api call
  const resendClick = async () => {
    setOtpValue(['', '', '', ''])
    try {
      const resendData = await getResendOtp(inputValue)
      setResendOtp(resendData)
    } catch (error) {
      console.error('Error:', error);
    }
  }

  // otp Api call
  const getOtpClick = async () => {
    try {
      const getOtpData = await GetOtp(inputValue);
      setOtpData(getOtpData)
    } catch (error) {
      console.error('Error:', error);
    }
    setActiveComponent('C')
  }

  const onTryagainclickFunc = () => {
    ;
    setActiveComponent('A')
    setShow(false)
    setInvoiceData({})
  }



  const renderASection = () => {

    switch (activeComponent) {
      case 'A':
        return <>
          {
            invoiceData?.api_status === 'API-OK' ?
              <ProductDetailSection invoiceData={invoiceData} exploreClick={exploreClick}
                isErr={isShow}
                onTryagainclickFunc={onTryagainclickFunc}
              />
              :
              <UploadSection onUploadClick={onUploadClick} loading={loading} />
          }

        </>
      case 'B':
        return <MobileNumberSection submit={getOtpClick} handleInputChange={handleInputChange} inputValue={inputValue} />;
      case 'C':
        return <OtpVerification resendClick={resendClick} SubmitOtp={submitClick} handleInputOtp={handleInputOtp} otpValue={otpValue} />;
      default:
        break;
    }
  }

  return (
    <div id='chatbotSec'>
      <p className="text-secTwoHeaderColorOne text-[30px] lg:text-secTwoFontSize font-bold pt-12 lg:pt-[55px] xl:pt-20 pb-20 lg:pb-[67px] min-[1300px]:py-10 text-center">
        Unlock the next level of <span className="text-secTwoHeaderColorTwo">care and innovation</span>
      </p>
      <div className='pb-20'>
       <ChatBotSection />

        {/* {renderASection()} */}
      </div>
    </div>
  );
}
