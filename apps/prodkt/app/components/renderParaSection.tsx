import { dataInterface, contentInterface, nestedStringContent } from "../data";

// nested content as points
const mappingNestedContent = (data: contentInterface, i: number, type: string) => {
    return (
        <div>
            <h1 id={`${data?.title}${i}`}
                className="py-2 lg:text-[17px] md:text-[16px] sm:text-[15px] xs:text-[13px] text-rightheading font-light 
                           font-poppins links">{data?.title}</h1>
            <ol>
                {

                    (data?.content as nestedStringContent[])?.map((val: { content: string; }, i: number) => {
                        return (
                            type === 'points' ? <li className="py-2 lg:text-[17px] md:text-[16px]  sm:text-[15px] xs:text-[13px] text-leftTabHeading font-light 
                            font-poppins">{`${i + 1}. ${val?.content}`}</li> : 
                            <li className="py-2  lg:text-[17px] md:text-[16px]  sm:text-[15px] xs:text-[13px] text-leftTabHeading font-light 
                    font-poppins">{val?.content as string}</li>
                        )
                    })
                }
            </ol>
        </div>
    )
}

// renders different types of content paragraphs
export const RenderParaSection = (data: dataInterface, type: string, e: dataInterface) => {

    switch (type) {
        case 'multiplePara':
            return data?.content?.map((val, i: number) => {
                return (
                    <>
                        <h1 id={`${val?.title}${i}`}
                            className="py-2 lg:text-[17px] md:text-[16px] sm:text-[15px] xs:text-[13px] text-rightheading font-regular 
                           font-poppins links">{val?.title}</h1>
                        <p className="py-2 text-[17px] text-leftTabHeading font-light 
                         font-poppins">{val?.content as string}</p>
                    </>
                )
            })
        case 'points':
            return (
                <>
                    <h1 id={`${data?.title}`}
                        className="py-2 lg:text-[17px] md:text-[16px] sm:text-[15px] xs:text-[13px]text-rightheading font-medium 
                           font-poppins links">{data?.title}</h1>
                    {
                        data?.content?.map((val, i: number) => {
                            return mappingNestedContent(val, i, 'points')
                        })
                    }
                </>
            )
        case 'points_without_no':
            return (
                <>
                    <h1 id={`${data?.title}`}
                        className="py-2 lg:text-[17px] md:text-[16px] sm:text-[15px] xs:text-[13px]text-rightheading font-light 
                               font-poppins links">{data?.title}</h1>
                    {
                        data?.content?.map((val, i: number) => {
                            return mappingNestedContent(val, i, 'points_without_no')
                        })
                    }
                </>
            )
    }
}