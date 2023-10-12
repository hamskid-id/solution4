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
                        style="c-grey text-lg mb-4"
                        value="Lorem ipsum dolor sit amet, consectetur adipisicing elit, eiusmod tempor incididunt ut labore."
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
                            value="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod."
                        />
                    </div>
                </div>
                <div className="flex wrap mt-4">
                    <div className="me-4"><AiOutlineReload color="#5758e0" size="3rem"/></div>
                    <div>
                        <Text
                            style="text-white mb-4 font-semibold text-2xl"
                            value="Prompt Strategies"
                        />
                        <Text
                            style="c-grey text-lg"
                            value="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod."
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