import PhoneScreenShotImg from "@core/ui/assets/phoneScreenshots.svg"
import react from 'react'

export default function SectionFive() {
    return (
        <div className='position: relative'>
            <div className='w-100 pb-[30px] bg-[#2C65E1]'>
                <div className='custom-bg-class bg-cover bg-center'>
                    <img src={PhoneScreenShotImg.src} style={{width:'100%',height:'auto'}} alt='cardImage' />
                </div>
                <div className='w-1/2 m-auto '>
                    <p className='text-white text-center text-[27px] font-bold leading-8 pb-[20px]'>Unlock a world of convenience, knowledge,
                        and care for your beloved possessions.</p>
                    <div className='text-center'>
                        <button
                            type="button"
                            className="text-[18px] w-[210px] text-[#000] font-bold h-[53px] mb-[50px] bg-[#FFFFFF] rounded-downloadButtonRadius"
                        >
                            <a href='https://app.prodkt.co/signin/' target="_blank">Lets get started</a>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}