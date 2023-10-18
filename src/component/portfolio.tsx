import { useState } from "react"
import { Text } from "./text"

export const Portfolio =()=>{
    const[
        activeCard,setActiveCard
    ]= useState<number|null>(null)
    return(
        <div className="lg:px-20 xl:px-20 md:px-20 sm:px-20 xs:px-4 xxs:px-4 xxxs:px-4  py-20 mid-dark">
            <Text
                style="text-white mb-4 font-semibold text-4xl text-center"
                value="Our Portfolio"
            />
            <Text
                style="c-grey text-lg text-justify mb-4"
                value="Our portfolio is a testament to our success. We've worked with a variety of clients from different industries, and we've helped them achieve their marketing goals. We're proud of the work we've done, and we'd love to show you how we can help you too. We're happy to provide you with references and case studies to back up our claims."
            />
            <div className="p-10 grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-8 m-auto">
                {
                    [
                        {
                            img:"https://mobirise.com/extensions/solutionm4/marketingsolution/assets/images/04.jpg"
                        },{
                            img:"https://mobirise.com/extensions/solutionm4/marketingsolution/assets/images/020.jpg"
                        },{
                            img:"https://mobirise.com/extensions/solutionm4/marketingsolution/assets/images/031.jpg"
                        }
                    ].map((port,index)=>{
                        return(
                            <div 
                                className="relative work-card h-[24rem]"
                                key={index}
                                onMouseOver={()=>setActiveCard(index)}
                                onMouseLeave={()=>setActiveCard(null)}
                            >
                                <img 
                                    src={port.img}
                                    alt="object not found"
                                    className="w-full h-[100%]"
                                />
                                {
                                activeCard==index &&
                                    <div className="absolute top-0 w-[100%] h-[100%] top-layer p-8 flex flex-col justify-end">
                                        <Text   
                                            style="text-center text-white mb-4 font-semidold text-lg"
                                            value="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                                        />
                                        <hr className="bg-white mb-4"/>
                                        <Text   
                                            style="text-center text-white font-semidold text-lg"
                                            value="Lorem ipsum dolor sit amet, consectetur adipisicing elit"
                                        />
                                    </div>
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}