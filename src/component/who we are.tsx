import { AiOutlineFileText,AiOutlineReload} from "react-icons/ai"
import { Text } from "./text"

export const WhoWeAre =()=>{
    return(
        <div className="semi-mid-dark lg:px-20 xl:px-20 md:px-20 sm:px-20 xs:px-4 xxs:px-4 xxxs:px-4  py-20 grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-8 m-auto">
            <div className="flex flex-col items-start">
                <div className="coloredLine mb-4"></div>
                <div>
                    <Text
                        style="text-white mb-4 font-semibold text-4xl"
                        value="We are Professionals"
                    />
                    <Text
                        style="c-grey text-lg mb-8"
                        value="When it comes to marketing, experience counts. We have a team of professionals with years of experience in the industry. We know what works and what doesn't, and we'll use our knowledge to help you achieve your goals. We're also constantly learning and evolving, so we're always up-to-date on the latest marketing trends and best practices."
                    />
                </div>
                <div className="flex wrap mt-2">
                    <div className="me-4"><AiOutlineFileText color="#5758e0" size="3rem"/></div>
                    <div>
                        <Text
                            style="text-white mb-4 font-semibold text-2xl"
                            value="Ideas & Plans"
                        />
                        <Text
                            style="c-grey text-lg"
                            value="We'll help you develop short, snappy marketing plans that are easy to execute and deliver results. No fluff, just actionable plans that will get you results."
                        />
                    </div>
                </div>
                <div className="flex wrap mt-8">
                    <div className="me-4"><AiOutlineReload color="#5758e0" size="3rem"/></div>
                    <div>
                        <Text
                            style="text-white mb-4 font-semibold text-2xl"
                            value="Prompt Strategies"
                        />
                        <Text
                            style="c-grey text-lg"
                            value="Sometimes, you need a marketing strategy fast. We can provide you with prompt strategies that are easy to implement and will make an impact. No matter what your time frame is, we'll work with you to create a plan that will get the job done."
                        />
                    </div>
                </div>
            </div>
            <div>
                <img 
                    src="https://mobirise.com/extensions/solutionm4/marketingsolution/assets/images/02.jpg"
                    alt="object not found"
                    className="w-full"
                />
            </div>
        </div>
    )
}