'use client';
import React, { useEffect } from 'react';
import { RenderParaSection } from './renderParaSection';
import { contentInterface, dataInterface } from '../data';
import HeaderLogo from '../assets/headerLogo';


export default function FooterLinkComp(props: { data: dataInterface[] }) {

    // on-scroll hightlighting the respective tabs 
    useEffect(() => {
        // content side entire div selection
        const contentTab = document.getElementById('content-tab') as HTMLElement;

        // scroll fn
        const handleScroll = () => {
            const tabsData = ['link0', 'link1', 'link2', 'link3', 'link4', 'link5',
                'link6', 'link7', 'link8', 'link9', 'link10', 'link11', 'link12', 'link13']
            tabsData.forEach((section) => {
                // tab selection
                const link = document.querySelector(`a[href="#${section}"]`);
                let sectionDOM = document.querySelector(`#${section}`) as HTMLElement;
                const sectionTop = sectionDOM?.offsetTop;
                const sectionBottom = sectionTop + sectionDOM?.clientHeight;
                // DOM top === every content top it returns below
                if (contentTab.scrollTop + 150 >= sectionTop && contentTab.scrollTop + 150 < sectionBottom) {
                    link!.classList.add('active');
                } else {
                    if (link !== null) {
                        link.classList.remove('active')
                    }
                }
            });
        };
        // scroll event listener
        contentTab.addEventListener('scroll', handleScroll);
        return () => {
            contentTab.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <>
            {/* logo */}
            <div className="bg-custom py-6">
                <p className="text-3xl font-bold text-custom font-poppins pl-[10px] max-[320px]:pl-[10px] max-[380px]:pl-[15px] max-[425px]:pl-[10px] lg:pl-logoLeft">
                    <HeaderLogo className="w-[150px] h-[30px]" />
                </p>
            </div>
            {/*  */}
            <div className="pt-logoTop mb-[30px] px-2">
                <div className="grid grid-cols-3 h-screen lg:w-4/5
                md:w-4/5 sm:w-full xs:w-full m-auto gap-4">
                    {/* tabs */}
                    <div className="tabs border-r border-color-leftTabHeading">
                        {(props?.data as dataInterface[])?.map((e: dataInterface, i: number) => {
                            return (
                                <a href={`#link${i}`}
                                >
                                    <p className="py-2 leading-7 lg:text-[17px] md:text-[16px]  sm:text-[15px] xs:text-[13px] text-leftTabHeading font-regular font-poppins tab">
                                        {e?.title}
                                    </p>
                                </a>
                            );
                        })}
                    </div>
                    {/* tab contents */}
                    <div className="col-span-2 h-overflow overflow-auto no-scrollbar" id="content-tab">
                        <div className="px-2 content-tab h-overflow">
                            {(props?.data as dataInterface[])?.map((e: dataInterface, i: number) => {
                                return (
                                    <div className='links' id={`link${i}`}>
                                        {/* title of the tab */}
                                        <h1
                                            id={`${e?.title}${i}`}
                                            className="py-2 lg:text-[17px] md:text-[16px]  sm:text-[15px] xs:text-[13px] text-rightheading font-medium 
              font-poppins "
                                        >
                                            {e?.title}
                                        </h1>
                                        {/*returns  content rendering  */}
                                        {e?.content?.[0]?.type !== 'default' ? (
                                            e?.content?.map((val: contentInterface, i: number) => {
                                                return val?.type === 'default' ? (
                                                    <>
                                                        <h1
                                                            id={`${e?.title}${i}`}
                                                            className="py-2 lg:text-[17px] md:text-[16px] sm:text-[15px] xs:text-[13px] text-rightheading font-light 
                          font-poppins links"
                                                        >
                                                            {val?.title}
                                                        </h1>
                                                        <p
                                                            className="py-2 lg:text-[17px] md:text-[16px]  sm:text-[15px] xs:text-[13px] text-leftTabHeading font-light 
                                                            font-poppins"
                                                        >
                                                            {val?.content as string}
                                                        </p>
                                                    </>
                                                ) : (
                                                    RenderParaSection(val as dataInterface, val?.type as string, e)
                                                );
                                            })
                                        ) : (
                                            <p
                                                className="py-2 lg:text-[17px] md:text-[16px]  sm:text-[15px] xs:text-[13px] text-leftTabHeading font-light 
                                            font-poppins"
                                            >
                                                {e?.content?.[0]?.content as string}
                                            </p>
                                        )}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}