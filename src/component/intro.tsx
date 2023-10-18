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
                    value="MEGA SPRINT LIMITED"
                />
                <Text
                    style="text-2xl mb-12 c-grey text-center"
                    value="When it comes to the development, design, creation, and distribution of computer software, applications, and related products, Mega Sprint Limited is a trusted leader in the industry. With a team of experienced and talented professionals, the company has the ability to create custom solutions that meet the unique needs of each client."
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