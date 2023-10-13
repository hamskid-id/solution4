import { Text } from "./text"
import {AiOutlineSend} from "react-icons/ai"
export const IntroSect =()=>{
    return(
        <div 
            className="w-100 relative mb-3 introContainer flex flex-column justify-center pt-20 pb-32"
        >
        <div className="introBg">
        </div>
            <div className="introContent px-2 m-auto lg:w-8/12 xl:w-8/12 md:w-8/12 sm:w-full xs:w-full xxs:w-full xxxs:w-full">
                <Text
                    style="mb-4 c-blue font-black marketText text-center lg:text-[5.5rem] xl:text-[5.5rem] md:text-[5.5rem] sm:text-[3.5rem] xs:text-[3rem] xxs:text-[2rem] xxxs:text-[2rem]"
                    value="MARKETING SOLUTION AGENCY"
                />
                <Text
                    style="text-2xl mb-12 c-grey text-center"
                    value="Dedicated to helping businesses of all sizes succeed. We offer a wide range of services, from branding and content creation to media buying and event planning. No matter what your marketing needs are, we can help you achieve your goals. "
                />
                <div className="flex px-4 py-2 bg-blue cursor-pointer w-fit m-auto">
                    <div className="me-2"><AiOutlineSend color="white" size="1.4rem"/></div>
                    <Text
                        style="text-lg sm:mb-3 xs:mb-3 xxs:mb-3 xl:mb-0 lg:mb-0 md:mb-0 text-white"
                        value="Get Started"
                    />
                </div>
            </div>
        </div>
    )
}