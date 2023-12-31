import { AiOutlineArrowRight, AiOutlineMail, AiOutlineEnvironment,AiFillPhone } from "react-icons/ai"
import { Text } from "./text"
import { useState } from "react"

export const ContactInfo =()=>{
    const[
        activeCard,setActiveCard
    ]= useState<number|null>(null)
    return(
        <div className="semi-mid-dark lg:px-20 xl:px-20 md:px-20 sm:px-20 xs:px-4 xxs:px-4 xxxs:px-4  py-20 grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-8">
            {
                [
                    {
                        icon:<AiFillPhone color={activeCard ==0?"white":"#5758e0"} size="3rem" className="mb-4"/>,
                        title:"+2348166939205",
                        text:"For more enquiries, you can reach us through "
                    },{
                        icon:<AiOutlineMail color={activeCard ==1?"white":"#5758e0"} size="3rem" className="mb-4"/>,
                        title:"info@megasprintlimited.com.ng",
                        text:"OR send us an email "
                    },{
                        icon:<AiOutlineEnvironment color={activeCard ==2?"white":"#5758e0"} size="3rem" className="mb-4"/>,
                        title:"6, ORE-OFE STREET, AKINBO PHASE 2, AKUTE, OGUN STATE, NIGERIA.",
                        text:"Our Address "
                    }
                ].map((arr,index)=>{
                    const{
                        icon,title,text
                    }=arr
                    return(
                        <div 
                            key={index}
                            onMouseOver={()=>setActiveCard(index)}
                            onMouseLeave={()=>setActiveCard(null)}
                            className="relative work-card"
                        >
                           { 
                                (index ==0 || index ==2) &&
                                    <div className={`${index ==0?"empty-container1":index ==2?"empty-container2":null}`}></div>
                           }
                            <div className={`
                                ${ index ==0? "empty-container1-topper":index ==2? "empty-container2-topper":"mt-4" } 
                                ${activeCard ==index ? "scaled":null } cursor-pointer
                                flex flex-col p-10 justify-between items-center mid-dark h-[100%]`}
                                >
                                {icon}
                                <Text
                                    style="text-white text-2xl font-semibold mb-4 text-center break-all"
                                    value={title}
                                />
                                <Text
                                    style={`${activeCard ==index?"text-white":"c-grey"} text-center text-lg mb-4`}
                                    value={text}
                                />
                                <div className="w-fit border rounded-full p-2">
                                    <AiOutlineArrowRight size="1rem" color="white"/>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
    )
}