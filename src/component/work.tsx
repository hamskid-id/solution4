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
                        title:"Trade Shows",
                        text:"A great way to connect with potential customers and promote your business. We can help you plan and execute a successful trade show, from developing a strategy to creating marketing materials and follow-up campaigns."
                    },{
                        icon:<AiOutlineRocket color={activeCard ==2?"white":"#5758e0"} size="3rem" className="mb-4"/>,
                        title:"Branding",
                        text:"We'll work with you to create a brand identity that reflects your business's values and personality. We'll also help you develop a cohesive brand message that will resonate with your target audience. We can also help you create branded materials, including logos, website design, and promotional materials."
                    },{
                        icon:<AiOutlineForm color={activeCard ==3?"white":"#5758e0"} size="3rem" className="mb-4"/>,
                        title:"Content Creation",
                        text:"Content is king when it comes to marketing, and we can help you create high-quality content that will engage your audience and drive results."
                    },{
                        icon:<AiOutlineMonitor color={activeCard ==4?"white":"#5758e0"} size="3rem" className="mb-4"/>,
                        title:"Graphics Design",
                        text:"Creating a style guide and design templates that you can use for all of your marketing materials. From brochures and business cards to website and social media graphics, we'll make sure your brand looks great. "
                    },{
                        icon:<AiOutlineShoppingCart color={activeCard ==1?"white":"#5758e0"} size="3rem" className="mb-4"/>,
                        title:"Media Buying",
                        text:"We can help you reach your target audience through effective media buying. We'll work with you to create a media plan that will target your ideal customers and get the best return on your investment."
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