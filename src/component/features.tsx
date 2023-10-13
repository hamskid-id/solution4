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
                    Digital marketing
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
                    Digital marketing  is one of our specialties! We can help you create an effective digital marketing strategy that includes social media marketing, email marketing, search engine optimization (SEO), pay-per-click (PPC) advertising, and more. We'll help you craft a plan that will reach your target audience where they are, whether it's on social media, search engines, or other digital platforms. We'll also help you track and measure the success of your digital marketing efforts so you can see what's working and what isn't.
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
                    Trade Shows
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
                    Trade shows are a great way to connect with potential customers and promote your business. We can help you plan and execute a successful trade show, from developing a strategy to creating marketing materials and follow-up campaigns.
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
                    Branding
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
                Branding is a key element of any marketing strategy. We'll work with you to create a brand identity that reflects your business's values and personality. We'll also help you develop a cohesive brand message that will resonate with your target audience. We can also help you create branded materials, including logos, website design, and promotional materials. 
                </div>
                </div>
            </div>

            <div
                className=" mid-dark mb-4">
                <h2 className="mb-0" id="headingFour">
                <button
                    className="group relative flex w-full items-center rounded-none border-0 mid-dark c-grey px-5 py-4 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:mid-dark [&:not([data-te-collapse-collapsed])]:c-grey [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:c-grey-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour">
                    Content creation
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
                id="collapseFour"
                className="!visible hidden mid-dark c-grey"
                data-te-collapse-item
                aria-labelledby="headingFour"
                data-te-parent="#accordionExample">
                <div className="px-5 py-4">
                Content is king when it comes to marketing, and we can help you create high-quality content that will engage your audience and drive results. We'll work with you to develop a content strategy and create compelling blog posts, videos, infographics, and more.
                </div>
                </div>
            </div>

            <div
                className=" mid-dark mb-4">
                <h2 className="mb-0" id="headingFive">
                <button
                    className="group relative flex w-full items-center rounded-none border-0 mid-dark c-grey px-5 py-4 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:mid-dark [&:not([data-te-collapse-collapsed])]:c-grey [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:c-grey-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive">
                    Graphics Design
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
                id="collapseFive"
                className="!visible hidden mid-dark c-grey"
                data-te-collapse-item
                aria-labelledby="headingFive"
                data-te-parent="#accordionExample">
                <div className="px-5 py-4">
                Graphic design is an important aspect of any marketing strategy, and we can help you create eye-catching designs that will stand out. We'll work with you to create a style guide and design templates that you can use for all of your marketing materials. From brochures and business cards to website and social media graphics, we'll make sure your brand looks great. 
                </div>
                </div>
            </div>

            <div
                className="rounded-b-lg mid-dark mb-4">
                <h2 className="mb-0" id="headingSix">
                <button
                    className="group relative flex w-full items-center rounded-none border-0 mid-dark c-grey px-5 py-4 text-left text-base  transition [overflow-anchor:none] hover:z-[2] focus:z-[3] focus:outline-none dark:bg-neutral-800 dark:text-white [&:not([data-te-collapse-collapsed])]:mid-dark [&:not([data-te-collapse-collapsed])]:c-grey [&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(229,231,235)] dark:[&:not([data-te-collapse-collapsed])]:bg-neutral-800 dark:[&:not([data-te-collapse-collapsed])]:c-grey-400 dark:[&:not([data-te-collapse-collapsed])]:[box-shadow:inset_0_-1px_0_rgba(75,85,99)]"
                    type="button"
                    data-te-collapse-init
                    data-te-collapse-collapsed
                    data-te-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix">
                    Media Buying
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
                id="collapseSix"
                className="!visible hidden mid-dark c-grey"
                data-te-collapse-item
                aria-labelledby="headingSix"
                data-te-parent="#accordionExample">
                <div className="px-5 py-4">
                We can help you reach your target audience through effective media buying. We'll work with you to create a media plan that will target your ideal customers and get the best return on your investment.
                </div>
                </div>
            </div>


            </div>
        </div>
    )
}