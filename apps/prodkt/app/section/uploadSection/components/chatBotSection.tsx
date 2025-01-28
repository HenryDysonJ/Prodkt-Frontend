'use client';
import BotIcon from "@/app/assets/botIcon";
import UploadInvoiceIcon from "@/app/assets/uploadInvoiceIcon";

import Divider from "@/app/assets/divider";
import UserNoneIcon from "@/app/assets/userNoneIcon";
import { SetStateAction, useEffect, useState } from "react";
import axios from "axios";
import { GetOtp, SubmitApi, uploadInvoiceDocument } from "@/app/api/upload-invoice/route";
import { LoadingMessage } from "@/app/assets/loading";
import SuccessSection from "./successSection";
import ChatBotExploreIcon from '@core/ui/assets/chatExplore.svg';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


export default function ChatBotSection() {
    const [invoiceData, setInvoiceData] = useState<any>();
    const [otpData, setOtpData] = useState<any>();
    const [initialQuestions, setInitialQuestion] = useState<any>();
    const [loading, setLoading] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [otpValue, setOtpValue] = useState(['', '', '', '']);
    const [submitData, setSubmitData] = useState<any>();
    const [isExplore, setIsExplore] = useState<boolean>(false)
    const [isVerifyNo, setIsVerifyNo] = useState<boolean>(false)
    const [isUploadButton, setIsUploadButton] = useState<boolean>(false)


    const [activeComponent, setActiveComponent] = useState(true)




    const initialQuestionClick = (val?: any) => {
        setInitialQuestion(val)
    }
    const handleInputChange = (e: { target: { value: SetStateAction<string>; }; }) => {
        const inputValues = e.target.value;
        if (inputValues?.length <= 10) {
            setInputValue(inputValues);
        }
    };

    const onClickExplore = () => {
        setIsExplore(true)
    }

    const handleInputOtp = (index: any, value: any, e: any) => {
        const newOtpValues = [...otpValue];
        newOtpValues[index] = value;
        setOtpValue(newOtpValues);

        if (e && e.keyCode === 8 && index > 0) {
            const prevInput = document.getElementById(`otpInput${index - 1}`);
            if (prevInput) {
                prevInput.focus();
                return;
            }
        }

        otpValue[index] = value;

        if (index < otpValue.length - 1 && value !== "") {
            const nextInput = document.getElementById(`otpInput${index + 1}`);
            if (nextInput) {
                nextInput.focus();
            }
        }
    };


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
    }

    // if yes redirect to verfiy phone number
    const enterPhoneNumber = () => {
        setIsVerifyNo(true)
    }

    // otp Api call
    const getOtpClick = async () => {
        try {
            const getOtpData = await GetOtp(inputValue);
            setOtpData(getOtpData)
        } catch (error) {
            console.error('Error:', error);
        }
    }

    // submit api call
    const onsubmit = async () => {
        const otpString: string = otpValue.join('');
        try {
            const submitData = await SubmitApi(otpString, inputValue, invoiceData)
            setSubmitData(submitData)
        } catch (error) {
            console.error('Error:', error);
        }
    }


    const loadingData = invoiceData?.api_status

    const uploadingFail = invoiceData?.message

    const initialQuestionMapping = invoiceData?.data?.qus_ans?.qus_and_ans

    const onTryAgainClick = () => {
        setActiveComponent(false);
        setInvoiceData({});
    }

    useEffect(() => {
        if (submitData?.message) {
            let seconds = 1;
            const interval = setInterval(() => {
                seconds += 1;
                if (seconds === 3) {
                    window.location.reload();
                    clearInterval(interval);
                }
            }, 1000);
        }
    }, [submitData?.message])

    return (
        <>
            {
                activeComponent && uploadingFail === 'Please provide a valid invoice!' ?
                    <SuccessSection dataFailed={
                        uploadingFail === 'Please provide a valid invoice!' ? true : false
                    }
                        onTryAgainClick={onTryAgainClick}
                    />
                    :
                    <div className="h-full w-[390px] max-[380px]:w-[300px] sm:w-[640px] md:w-[768px] lg:w-[1024px] xl:w-[1260px] mx-auto">
                        <div className="bg-[rgba(255, 255, 255, 0.32)] shadow-cardSection rounded-t-[52px] p-[20px] md:p-[40px]  max-[380px]:p-0 ">
                            <div className="bg-[#fff] rounded-t-[52px]">
                                {
                                    isExplore ?
                                        <div className="flex-1 overflow-y-auto px-[15px] sm:px-[50px] md:px-[100px] lg:px-[150px]  py-[80px]">
                                            {/* */}
                                            <div className="flex items-center gap-4 relative">
                                                <BotIcon />
                                                <div className='border-[1px] py-[14px] px-2 rounded-md border-#E9E9E9'>
                                                    <p className=' bg-[#F2F2F2] w-[250px] px-2 py-2 rounded-t-md text-#071E2E text-[14px] font-medium'>Welcome! Your product ally is at your service.</p>
                                                    <div onClick={() => setIsUploadButton(true)}>
                                                        <p id="initialQuestion" className='border-t-[1px] text-[#5D9DEF] text-[14px]  px-2 py-3 cursor-pointer font-medium'>
                                                            {'Upload any product invoice!'}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="absolute left-6 top-[64px] max-[768px]:hidden">
                                                    <Divider height='110px' />
                                                </div>
                                            </div>

                                            {/* upload Invoice */}
                                            {
                                                isUploadButton && <div className=' pl-[20px] py-2 relative'>
                                                    <div className='flex justify-end items-start gap-4'>
                                                        <div className='bg-[#fff] border border-dashed border-[#0E70EB] h-[100px] w-[257px] rounded-lg flex flex-col justify-center'>
                                                            <div className='bg-[#fff] grid place-items-center rounded-lg py-2'>
                                                                <UploadInvoiceIcon />
                                                                <p className='text-[14px] font-medium py-[6px] text-[#0E70EB]'>Upload Invoice</p>
                                                                <input onChange={(e) => onUploadClick(e.target.files)} accept="image/jpeg, image/*,application/pdf" type="file" id="myFile" name="filename" className="absolute inset-0 opacity-0 cursor-pointer" />
                                                            </div>
                                                        </div>
                                                        <UserNoneIcon />
                                                    </div>
                                                    {
                                                        loadingData === 'API-OK' ?
                                                            <div className="absolute right-[20px] top-[90px] max-[768px]:hidden ">
                                                                <Divider height='179px' />
                                                            </div>
                                                            : null
                                                    }

                                                </div>
                                            }
                                            {!loading && loadingData === 'API-OK'
                                                ?
                                                <div className="flex items-center py-2 relative gap-4 relative">
                                                    <BotIcon />
                                                    <div className='border-[1px] py-3 px-2 rounded-md border-#E9E9E9'>
                                                        <p className='text-#071E2E text-[14px] font-medium'>Invoice uploaded</p>
                                                    </div>
                                                    <div className="absolute left-6 top-[64px] max-[768px]:hidden">
                                                        <Divider height='120px' />
                                                    </div>
                                                </div>
                                                : null
                                            }

                                            {/* initial question */}
                                            <div className="flex gap-4 relative">
                                                {
                                                    loading ?
                                                        <>
                                                            <BotIcon />
                                                            <div className="flex items-center">
                                                                <LoadingMessage height='30px' />
                                                            </div>
                                                        </>
                                                        : null
                                                }

                                                {
                                                    loadingData === 'API-OK' ?
                                                        <>
                                                            <BotIcon />
                                                            <div className="absolute left-6 top-[64px] max-[768px]:hidden">
                                                                <Divider height='150px' />
                                                            </div>
                                                            <div className='rounded-md  border-[1px]'>
                                                                <p className=' bg-[#F2F2F2] w-[250px] px-2 py-2 rounded-t-md text-#071E2E text-[14px] font-medium'>{invoiceData?.data?.qus_ans?.title}</p>
                                                                {
                                                                    initialQuestionMapping?.map((val: any, index: number) => {
                                                                        return (
                                                                            <div key={index} onClick={() => initialQuestionClick(val)}>
                                                                                <p id="initialQuestion" className='border-t-[1px] text-[#5D9DEF] text-[14px]  px-2 py-3 cursor-pointer'>
                                                                                    {val?.question}
                                                                                </p>
                                                                            </div>
                                                                        )
                                                                    })
                                                                }
                                                            </div>
                                                        </>
                                                        : null
                                                }
                                            </div>


                                            {/* clicked after show a initial question */}

                                            {
                                                loadingData === 'API-OK' ?
                                                    <div className=' pl-[20px] py-2 relative pb-2'>
                                                        <div className='flex justify-end items-start gap-4'>
                                                            <div className='border-[1px] py-3 px-2 rounded-md border-#E9E9E9'>
                                                                <p className='text-#071E2E text-[14px] font-medium'>{initialQuestions?.question ?? 'Please click a question You will get a Answer!!'}</p>
                                                            </div>
                                                            <UserNoneIcon />
                                                        </div>
                                                        <div className="absolute right-[20px] top-[60px] max-[768px]:hidden ">
                                                            <Divider height='50px' className="bg-[#e5e7eb]" />
                                                        </div>
                                                    </div>
                                                    : null
                                            }

                                            {/* initial question answer from Chatgpt */}
                                            {
                                                initialQuestions?.answer ?
                                                    <div className="flex items-center gap-4 relative">
                                                        <BotIcon />
                                                        <div className='border-[1px] py-3 px-2 rounded-md border-#E9E9E9'>
                                                            <p className='text-#071E2E text-[14px] font-medium'>Your product was purchased on <span className='text-blue-400 text-[14px] font-normal'>{initialQuestions?.answer} </span></p>
                                                        </div>
                                                        <div className="absolute left-6 top-[64px] max-[768px]:hidden">
                                                            <Divider height='120px' />
                                                        </div>
                                                    </div>
                                                    : null
                                            }

                                            {
                                                initialQuestions?.answer ?
                                                    <div className="flex items-center gap-4 relative py-2 ">
                                                        <BotIcon />
                                                        <div className="absolute left-6 top-[64px] max-[768px]:hidden">
                                                            <Divider height='150px' />
                                                        </div>
                                                        <div className='rounded-md  border-[1px]'>
                                                            <p className=' bg-[#F2F2F2] w-[250px] px-2 py-2 rounded-t-md text-#071E2E text-[14px] font-medium'>Need more clarifications about your product? We've got answers for you!</p>

                                                            <div onClick={() => initialQuestionClick()}>
                                                                <p id="initialQuestion" className='border-t-[1px] text-[#5D9DEF] text-[14px]  px-2 py-3 cursor-pointer'>
                                                                    {'Yes'}
                                                                </p>
                                                            </div>
                                                            <div onClick={() => enterPhoneNumber()}>
                                                                <p id="initialQuestion" className='border-t-[1px] text-[#5D9DEF] text-[14px]  px-2 py-3 cursor-pointer'>
                                                                    {'No'}
                                                                </p>
                                                            </div>

                                                        </div>
                                                    </div>
                                                    : null
                                            }

                                            {
                                                isVerifyNo ? <div className="flex items-center gap-4 relative">
                                                    <BotIcon />
                                                    <div className='border-[1px] py-3 px-2 rounded-md border-#E9E9E9'>
                                                        <p className='text-#071E2E text-[14px] font-medium'>Help us assist you better by verifying your mobile number.</p>
                                                    </div>
                                                    <div className="absolute left-6 top-[64px] max-[768px]:hidden">
                                                        <Divider height='120px' />
                                                    </div>
                                                </div>
                                                    : null
                                            }

                                            {/* Enter a number field */}
                                            {
                                                isVerifyNo ?
                                                    <div className=' pl-[20px] py-2 relative'>
                                                        <div className='flex justify-end items-start gap-4'>
                                                            <div className='bg-[#B8D4F6] w-[257px] rounded-lg'>
                                                                <div className='pb-3 mt-4 px-[12px]'>
                                                                    <input
                                                                        className="w-full text-[14px] border rounded shadow px-2 py-2 focus:outline-none focus:none focus:border-none text-center"
                                                                        type="number"
                                                                        value={inputValue}
                                                                        onChange={handleInputChange}
                                                                        pattern="[0-9]{10}"
                                                                        placeholder="please enter your mobile number"
                                                                    />
                                                                </div>
                                                                <div onClick={getOtpClick} className='bg-[#0E70EB] grid place-items-center mt-1 rounded-b-lg py-2 cursor-pointer'>
                                                                    <p className='text-[14px] py-2 text-[#fff] font-medium'>Get OTP</p>
                                                                </div>
                                                            </div>
                                                            <UserNoneIcon />
                                                        </div>
                                                        <div className="absolute right-[20px] top-[70px] max-[768px]:hidden ">
                                                            <Divider height='120px' className="bg-[#e5e7eb]" />
                                                        </div>
                                                    </div>
                                                    : null
                                            }


                                            {/* Sms sent to be otp */}
                                            {
                                                otpData?.message === 'OTP sent successfully' ?
                                                    <div className="flex items-center gap-4 relative">
                                                        <BotIcon />
                                                        <div>
                                                            <div className='border-[1px] my-2 py-3 px-2 rounded-md border-#E9E9E9'>
                                                                <p className='text-#071E2E text-[14px] font-medium'>Great! SMS has been sent to +91{inputValue}.</p>
                                                            </div>
                                                            <div className='border-[1px] my-2 py-3 px-2 rounded-md border-#E9E9E9'>
                                                                <p className='text-#071E2E text-[14px] font-medium'>Enter your OTP and unleash Prodkt!</p>
                                                            </div>
                                                        </div>

                                                        <div className="absolute left-6 top-[70px] max-[768px]:hidden">
                                                            <Divider height='130px' />
                                                        </div>
                                                    </div>
                                                    : null
                                            }


                                            {/* Get otp */}
                                            {
                                                otpData?.message === 'OTP sent successfully' ?
                                                    <div className=' pl-[20px] py-4'>
                                                        <div className='flex justify-end items-start gap-4'>
                                                            <div className='bg-[#B8D4F6] w-[257px] rounded-lg'>
                                                                <div className='pb-3 mt-4 pl-[12px]'>
                                                                    <div className="flex justify-center mt-3">
                                                                        <input id="otpInput0" value={otpValue[0]} onChange={(e) => handleInputOtp(0, e.target.value, e)} type="text" className="w-12 h-12 mx-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500" maxLength={1} />
                                                                        <input id="otpInput1" value={otpValue[1]} onChange={(e) => handleInputOtp(1, e.target.value, e)} type="text" className="w-12 h-12 mx-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500" maxLength={1} />
                                                                        <input id="otpInput2" value={otpValue[2]} onChange={(e) => handleInputOtp(2, e.target.value, e)} type="text" className="w-12 h-12 mx-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500" maxLength={1} />
                                                                        <input id="otpInput3" value={otpValue[3]} onChange={(e) => handleInputOtp(3, e.target.value, e)} type="text" className="w-12 h-12 mx-1 text-center border border-gray-300 rounded focus:outline-none focus:border-blue-500" maxLength={1} />
                                                                    </div>
                                                                </div>
                                                                <div onClick={onsubmit} className='bg-[#0E70EB] grid place-items-center mt-1 rounded-b-lg py-2 cursor-pointer'>
                                                                    <p className='text-[14px] py-2 text-[#fff] font-medium'>Submit</p>
                                                                </div>
                                                            </div>
                                                            <UserNoneIcon />
                                                        </div>
                                                    </div>
                                                    : null
                                            }


                                            {/* Sms sent SuccessFully */}
                                            {
                                                submitData?.message === 'OTP verified and product is added successfully' ?

                                                    <div className="flex items-center gap-4 ">
                                                        <BotIcon />
                                                        <div className='border-[1px] my-2 py-3 px-2 rounded-md border-#E9E9E9'>
                                                            <p className='text-#071E2E text-[14px] font-medium'>Thanks for choosing us.</p>
                                                        </div>
                                                    </div>
                                                    : null
                                            }

                                        </div> :
                                        <div className="px-[15px] sm:px-[50px] md:px-[100px] lg:px-[150px]  py-[60px]">
                                            <div className="flex justify-center">
                                                <img src={ChatBotExploreIcon.src}
                                                    style={{ width: '100%', height: 'auto' }} />
                                            </div>
                                            <div className="flex justify-center pt-[50px]">
                                                <button
                                                    onClick={() => onClickExplore()}
                                                    type="button"
                                                    className="text-base text-white font-bold h-14  py-downloadButtonY bg-downloadButtonBg rounded-downloadButtonRadius w-exploreWidth h-exploreHeight"
                                                >
                                                    <a>Explore</a> <ArrowForwardIcon />
                                                </button>
                                            </div>
                                        </div>
                                }
                            </div>
                        </div>
                    </div >
            }
        </>


    );
}