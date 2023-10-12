import { useRef } from "react";
import { Text } from "./text"
import { AiOutlineAlignRight } from "react-icons/ai"
import {FaRocketchat} from "react-icons/fa";
import { AiOutlineSkype ,AiOutlineTwitter,AiOutlineFacebook} from "react-icons/ai";

interface refProps {
    aboutRef:React.RefObject<HTMLDivElement>,
    featuresref:React.RefObject<HTMLDivElement>,
    pricingref:React.RefObject<HTMLDivElement>,
    contactref:React.RefObject<HTMLDivElement>
}

export const Nav =({
    aboutRef,
    featuresref,
    contactref,
    pricingref
}:refProps)=>{
    const navRef = useRef<HTMLDivElement>(null);
    return(
        <div className="lg:px-20  xl:px-20  md:px-20  xs:px-2  sm:px-2 xxs:px-2 lg:flex-col xl:flex-row md:flex-col sm:flex-col xs:flex-col xxs:flex-col py-4 flex justify-between lg:items-center xl:items-center md:items-center xs:items-start sm:items-start xxs:items-start lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col">
            <div className="lg:w-full xl:w-2/5 md:w-full sm:w-full xs:w-full items-center xxs:w-full xxxs:w-full flex">
                <Text
                    style="text-2xl text-white font-semibold text-start"
                    value="SolutionM4"
                />
                <span 
                    className="ms-auto hamburger"
                    onClick={()=>navRef.current?.classList.toggle("active")}
                    ><AiOutlineAlignRight
                    color="white"
                    size="2rem"
                /></span>
            </div>
            <div ref={navRef} className="nav justify-between lg:items-start xl:items-center md:items-start xs:items-start sm:items-start xxs:items-start lg:w-full xl:w-3/5 md:w-full sm:w-full xs:w-full xxs:w-full lg:flex-col xl:flex-row md:flex-col sm:flex-col xs:flex-col xxs:flex-col">
                <div className=" lg:w-full xl:w-4/6 md:w-full sm:w-full xs:w-full xxs:w-full flex lg:items-start xl:items-center md:items-start xs:items-start sm:items-start xxs:items-start justify-between lg:flex-col xl:flex-row md:flex-col sm:flex-col xs:flex-col xxs:flex-col">
                    <div> 
                        <Text
                            style="text-lg sm:mb-3 xs:mb-3 xxs:mb-3 xl:mb-0 lg:mb-0 md:mb-0 text-white me-1"
                            value="About"
                            clickFunc={()=>{
                                if(aboutRef.current){
                                    aboutRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                }
                            }}
                        />
                    </div>
                    <div> 
                        <Text
                            style="text-lg sm:mb-3 xs:mb-3 xxs:mb-3 xl:mb-0 lg:mb-0 md:mb-0 text-white me-1"
                            value="Features"
                            clickFunc={()=>{
                                if(featuresref.current){
                                    featuresref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                }
                            }}
                        />
                    </div>
                    <div> 
                        <Text
                            style="text-lg sm:mb-3 xs:mb-3 xxs:mb-3 xl:mb-0 lg:mb-0 md:mb-0 text-white me-1"
                            value="Pricing"
                            clickFunc={()=>{
                                if(pricingref.current){
                                    pricingref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                }
                            }}
                        />
                    </div>
                    <div> 
                        <Text
                            style="text-lg sm:mb-3 xs:mb-3 xxs:mb-3 xl:mb-0 lg:mb-0 md:mb-0 text-white me-1"
                            value="Contacts"
                            clickFunc={()=>{
                                if(contactref.current){
                                    contactref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                }
                            }}
                        />
                    </div>
                    <div className="flex">
                        <div className="me-4">
                            <AiOutlineSkype color="white" size="1.4rem"/>
                        </div>
                        <div className="me-4">
                            <AiOutlineTwitter color="white" size="1.4rem"/>
                        </div>
                        <div>
                            <AiOutlineFacebook color="white" size="1.4rem"/>
                        </div>
                    </div>
                </div>
                <div className="flex lg:justify-start xl:justify-end md:justify-start sm:justify-start xs:justify-start xxs:justify-start xxs:justify-start lg:items-start xl:items-center md:items-start xs:items-start sm:items-start xxs:items-start lg:flex-row xl:flex-row md:flex-row sm:flex-col xs:flex-col xxs:flex-col xl:w-2/6 lg:w-full md:w-full sm:w-full xs:w-full xxs:w-full">
                    <div className="me-4 sm:my-2 xs:my-2 xxs:my-2 xl:mb-0 lg:mb-0 md:mb-0">
                        <div className="flex items-center border px-4 py-2 border-blue cursor-pointer">
                            <div className="me-2"><FaRocketchat color="white"/></div>
                            <Text
                                style="text-lg text-white"
                                value="Get Started"
                                clickFunc={()=>{
                                if(contactref.current){
                                    contactref.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
                                    }
                                }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}