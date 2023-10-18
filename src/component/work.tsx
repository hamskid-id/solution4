import { AiOutlineArrowRight, AiOutlineDollarCircle, AiOutlineForm, AiOutlineMonitor, AiOutlineRocket, AiOutlineSend, AiOutlineShoppingCart } from "react-icons/ai"
import { Text } from "./text"
import { useState } from "react"

export const Work =()=>{
    const[
        activeCard,setActiveCard
    ]= useState<number|null>(null)
    return(
        <div className="lg:px-20 xl:px-20 md:px-20 sm:px-20 xs:px-4 xxs:px-4 xxxs:px-4  py-20 grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-8">
            {
                [
                    {
                        icon:<AiOutlineSend color={activeCard ==0?"white":"#5758e0"} size="3rem" className="mb-4"/>,
                        title:"Digital Marketting",
                        text:"We can help you create an effective digital marketing strategy that includes social media marketing, email marketing, search engine optimization (SEO), pay-per-click (PPC) advertising, and more."
                    },{
                        icon:<AiOutlineDollarCircle color={activeCard ==1?"white":"#5758e0"} size="3rem" className="mb-4"/>,
                        title:"Introduction to Computer Programing training programmes",
                        text:"The course covers a variety of topics, including algorithms, data structures, and programming languages. It also includes hands-on exercises and projects, so that participants can put their new skills to the test."
                    },{
                        icon:<AiOutlineRocket color={activeCard ==2?"white":"#5758e0"} size="3rem" className="mb-4"/>,
                        title:"Database Services",
                        text:", the company's experts work with clients to develop, implement, and manage database systems that meet their specific needs."
                    },{
                        icon:<AiOutlineForm color={activeCard ==3?"white":"#5758e0"} size="3rem" className="mb-4"/>,
                        title:"Telecommunication Services",
                        text:"Services such as VoIP (voice over IP), SIP (session initiation protocol), video conferencing, and more are provided, with their management and solution, to ensure that they're getting the most out of their telecommunications systems. "
                    },{
                        icon:<AiOutlineMonitor color={activeCard ==4?"white":"#5758e0"} size="3rem" className="mb-4"/>,
                        title:"Graphics Design",
                        text:"Developing a brand style guide, and creating advertising materials that are both eye-catching and effective. We can also create digital graphics for websites, social media, and other online platforms."
                    },{
                        icon:<AiOutlineShoppingCart color={activeCard ==1?"white":"#5758e0"} size="3rem" className="mb-4"/>,
                        title:"Computer Engineering Consulting Services",
                        text:"Designed to help clients get the most out of their hardware systems. We can provide advice on the design and architecture of new systems, or they can help to optimize existing systems."
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
                                (index ==0 || index ==5) &&
                                    <div className={`${index ==0?"empty-container1":index ==5?"empty-container2":null}`}></div>
                           }
                            <div className={`
                                ${ index ==0? "empty-container1-topper":index ==5? "empty-container2-topper":"mt-4" } 
                                ${activeCard ==index ? "scaled":null } cursor-pointer
                                flex flex-col p-10 justify-between items-center mid-dark h-[100%]`}
                                >
                                {icon}
                                <Text
                                    style="text-white text-2xl font-semibold text-center mb-2"
                                    value={title}
                                />
                                <Text
                                    style={`${activeCard ==index?"text-white":"c-grey"} text-center text-lg mb-2`}
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