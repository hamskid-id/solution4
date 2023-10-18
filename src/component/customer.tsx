import { useEffect } from "react";
import { Text } from "./text"
import {
    Rating,
    initTE,
  } from "tw-elements";
  
export const CustomerTestimony =()=>{
    useEffect(()=>{
        initTE({ Rating });
    })
    return(
        <div className="px-8 py-20">
            <Text
                style="text-white mb-4 font-semibold text-4xl text-center"
                value="Customer Testimonials"
            />
            <Text
                 style="c-grey text-4xl text-center mb-8"
                value="What our beneficiaries say about us"
            />
             <div className="grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xs:grid-cols-1 xxs:grid-cols-1 gap-4 place-items-center place-content-center " >
                {
                    [
                        {
                            name:"Marie Jordan",
                            img:"https://mobirise.com/extensions/solutionm4/marketingsolution/assets/images/face1.jpg",
                            info:"I'm so glad I found Mega Sprint Limited! They helped me revamp my website, and it looks amazing. They were professional, responsive, and they really understood my needs. I highly recommend them to anyone looking for a company that can provide top-notch software development and related services Mega Sprint Limited is the perfect choice."
                        },{
                            name:"Ann Brown",
                            img:"https://mobirise.com/extensions/solutionm4/marketingsolution/assets/images/face2.jpg",
                            info:"I was feeling really overwhelmed by all the different IT Comapnies options out there, but Mega Sprint Limited helped me cut through the noise and figure out what would work best for my business. They were patient and took the time to answer all of my questions. I'm very happy with the results so far!"
                        },{
                            name:"Andrew Bill",
                            img:"https://mobirise.com/extensions/solutionm4/marketingsolution/assets/images/face3.jpg",
                            info:"Working with Mega Sprint Limited has been a breath of fresh air. I was so stressed out about marketing my business, but they've made it easy and fun. They're always available to answer my questions and help me out. I've seen a real increase in sales since I started working with them. I can't recommend them highly enough!"
                        }
                        // ,{

                        //     name:"Jason Stawer",
                        //     img:"https://mobirise.com/extensions/solutionm4/marketingsolution/assets/images/face4.jpg",
                        //     info:"Lorem ipsum dolor sit amet, consectetur adipiscing."
                        // },{
                        //     name:"Lisa Green",
                        //     img:"https://mobirise.com/extensions/solutionm4/marketingsolution/assets/images/face5.jpg",
                        //     info:"Lorem ipsum dolor sit amet, consectetur adipiscing."
                        // }
                    ].map((review,index)=>{
                        const{
                            name,img,info
                        }=review;
                        return(
                            <div 
                                key={index}
                                className="mb-2 mid-dark p-8 rounded-md md:m-2 lg:m-2 xl:m-2 sm:mx-auto xs:mx-auto xxs:mx-auto flex flex-col justify-between h-full items-center m-auto place-self-center">
                                <div className="w-16 mb-3">
                                    <img 
                                        src={img}
                                        alt="object not found"
                                        className="w-full rounded-full"
                                    />
                                </div>
                                <div>
                                    <Text
                                        style="text-center font-semibold mb-4 text-white text-lg"
                                        value={name}
                                    />
                                    <Text
                                        style="text-center c-grey mb-4 text-sm"
                                        value={info}
                                    />
                                </div>
                                <ul 
                                    className="my-1 flex list-none gap-1 p-0" 
                                    data-te-rating-init
                                    data-te-readonly="true"
                                    data-te-value="5"
                                >
                                    <li>
                                        <span
                                            className="text-primary [&>svg]:h-5 [&>svg]:w-5"
                                            title="Bad"
                                        data-te-rating-icon-ref>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor">
                                            <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                        className="text-primary [&>svg]:h-5 [&>svg]:w-5"
                                        title="Poor"
                                        data-te-rating-icon-ref>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor">
                                            <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                        className="text-primary [&>svg]:h-5 [&>svg]:w-5"
                                        title="OK"
                                        data-te-rating-icon-ref>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor">
                                            <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                        className="text-primary [&>svg]:h-5 [&>svg]:w-5"
                                        title="Good"
                                        data-te-rating-icon-ref>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor">
                                            <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        </span>
                                    </li>
                                    <li>
                                        <span
                                        className="text-primary [&>svg]:h-5 [&>svg]:w-5"
                                        title="Excellent"
                                        data-te-rating-icon-ref>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 24 24"
                                            stroke-width="1.5"
                                            stroke="currentColor">
                                            <path
                                            stroke-linecap="round"
                                            stroke-linejoin="round"
                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                                        </svg>
                                        </span>
                                    </li>
                                </ul>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}