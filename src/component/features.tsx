import { useEffect } from "react";
import { Text } from "./text"
import {
    Collapse,
    initTE,
  } from "tw-elements";
  
export const Features =()=>{
    useEffect(()=>{
        initTE({ Collapse });
    })
    return(
        <div className="lg:px-20 xl:px-20 md:px-20 sm:px-20 xs:px-4 xxs:px-4 xxxs:px-4  py-20">
            <Text
                style="text-white mb-4 font-semibold text-4xl text-center"
                value="Our Features"
            />
            <Text
                style="c-grey text-lg text-center mb-4"
                value="Our features include;"
            />

            <div id="accordionExample mt-4">
            <div
                className="rounded-t-lg mid-dark  mb-4">
                <h2 className="mb-0" id="headingOe">
                <button
                    className="group relative flex w-full items-center rounded-none border-0 mid-dark c-grey px-5 py-4 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:mid-dark [&:not([data-te-collapse-collapsed])]:c-grey [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:c-grey-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseOe"
                    aria-expanded="false"
                    aria-controls="collapseOe"
                    
                    >
                    Computer Engineering Consulting Services
                    <span
                        className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6">
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M12 4.5v15m7.5-7.5h-15" 
                        />
                    </svg>
                    </span>
                </button>
                </h2>
                <div
                id="collapseOe"
                className="!visible hidden c-grey mid-dark"
                data-te-collapse-item
                aria-labelledby="headingOe"
                data-te-parent="#accordionExample">
                <div className="px-5 py-4">
                The company's "Computer Engineering Consulting Services" are designed to help clients get the most out of their hardware systems. They can provide advice on the design and architecture of new systems, or they can help to optimize existing systems. They can also assist with the selection of hardware components, and they can help to troubleshoot and resolve any issues that arise. 
                </div>
                </div>
            </div>
            <div
                className=" mid-dark mb-4">
                <h2 className="mb-0" id="headingTwo">
                <button
                    className="group relative flex w-full items-center rounded-none border-0 mid-dark c-grey px-5 py-4 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:mid-dark [&:not([data-te-collapse-collapsed])]:c-grey [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:c-grey-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                    >
                    Graphic Design Services
                    <span
                    className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6">
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M12 4.5v15m7.5-7.5h-15" 
                        />
                    </svg>
                    </span>
                </button>
                </h2>
                <div
                id="collapseTwo"
                className="!visible hidden mid-dark c-grey"
                data-te-collapse-item
                aria-labelledby="headingTwo"
                data-te-parent="#accordionExample">
                <div className="px-5 py-4">
                The company's "Graphic Design Services" can help clients to create a strong visual identity for their business. We design a logo, develop a brand style guide, and create advertising materials that are both eye-catching and effective. We can also create digital graphics for websites, social media, and other online platforms. Our goal is to help clients stand out from the competition and to make a lasting impression on their target audience.
                </div>
                </div>
            </div>

            <div
                className=" mid-dark mb-4">
                <h2 className="mb-0" id="headingThree">
                <button
                    className="group relative flex w-full items-center rounded-none border-0 mid-dark c-grey px-5 py-4 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:mid-dark [&:not([data-te-collapse-collapsed])]:c-grey [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:c-grey-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree">
                    Computer Engineering Consulting Services
                    <span
                    className="-mr-1 ml-auto h-5 w-5 shrink-0 rotate-[-180deg] fill-[#336dec] transition-transform duration-200 ease-in-out group-[[data-te-collapse-collapsed]]:mr-0 group-[[data-te-collapse-collapsed]]:rotate-0 group-[[data-te-collapse-collapsed]]:fill-[#212529] motion-reduce:transition-none dark:fill-blue-300 dark:group-[[data-te-collapse-collapsed]]:fill-white">
                    <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        stroke-width="1.5" 
                        stroke="currentColor" 
                        className="w-6 h-6">
                        <path 
                            stroke-linecap="round" 
                            stroke-linejoin="round" 
                            d="M12 4.5v15m7.5-7.5h-15" 
                        />
                    </svg>
                    </span>
                </button>
                </h2>
                <div
                id="collapseThree"
                className="!visible hidden mid-dark c-grey"
                data-te-collapse-item
                aria-labelledby="headingThree"
                data-te-parent="#accordionExample">
                <div className="px-5 py-4">
                    The company's "Computer Engineering Consulting Services" are designed to help clients get the most out of their hardware systems. We provide advice on the design and architecture of new systems, or help to optimize existing systems. we assist with the selection of hardware components, and we can also help to troubleshoot and resolve any issues that arise. 
                </div>
                </div>
            </div>
            </div>
        </div>
    )
}