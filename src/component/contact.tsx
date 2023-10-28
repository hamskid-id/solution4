import { Text } from "./text"
import { toast } from 'react-hot-toast';
import { useForm, ValidationError } from '@formspree/react';
import {useEffect} from "react";

export const Contact =()=>{
    const [state, handleSubmit] = useForm("xleyzzqp");
    useEffect(()=>{
        if (state.succeeded) {
            toast.success('Message Successfully sent!');
        }
    },[state])

    return(
        <div className=" lg:px-20 xl:px-20 md:px-20 sm:px-20 xs:px-4 xxs:px-4 xxxs:px-4  py-20 grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-8 m-auto">
            <div className="flex flex-col items-start lg:order-first md:order-first xl:order-first xs:order-last xxs:order-last xxxs:order-last">
                <div className="coloredLine mb-4"></div>
                <div>
                    <Text
                        style="text-white mb-4 font-semibold text-4xl"
                        value="Let's Talk?"
                    />
                    <Text
                        style="c-grey text-lg mb-4"
                        value="We would love to chat with you about how we  can help you achieve your marketing goals.."
                    />
                </div>
                <form 
                    className="w-full"
                    onSubmit={handleSubmit}
                >
                    <div 
                        className="relative mb-3" 
                        data-te-input-wrapper-init
                    >
                        <input
                            type="text"
                            name="name"
                            required
                            className="bg-black peer border-b-[0.5px]  w-full block min-h-[auto] w-full px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput2"
                            placeholder="Form control lg"/>
                        <label
                            htmlFor="exampleFormControlInput2"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Name
                        </label>
                        <ValidationError 
                            prefix="Email" 
                            field="name"
                            errors={state.errors}
                        />
                    </div>
                    <div 
                        className="relative mb-3" 
                        data-te-input-wrapper-init
                    >
                        <input
                            type="email"
                            name="email"
                             required
                            className="bg-black peer border-b-[0.5px]  w-full block min-h-[auto] w-full px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput2"
                            placeholder="Form control lg" />
                        <label
                            htmlFor="exampleFormControlInput2"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Email
                        </label>
                        <ValidationError 
                            prefix="Email" 
                            field="email"
                            errors={state.errors}
                        />
                    </div>
                    <div 
                        className="relative mb-3" 
                        data-te-input-wrapper-init
                    >
                        <input
                            type="tel"
                            name="tel"
                            className="bg-black peer border-b-[0.5px]  w-full block min-h-[auto] w-full px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput2"
                            required
                            placeholder="Form control lg" />
                        <label
                            htmlFor="exampleFormControlInput2"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Phone
                        </label>
                        <ValidationError 
                            prefix="Phone number" 
                            field="tel"
                            errors={state.errors}
                        />
                    </div>
                    <div 
                        className="relative mb-3" 
                        data-te-input-wrapper-init
                    >
                        <input
                            type="text"
                            name="description"
                             required
                            className="bg-black peer border-b-[0.5px] h-[3rem]  w-full block min-h-[auto] w-full px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                            id="exampleFormControlInput2"
                            placeholder="Form control lg" />
                        <label
                            htmlFor="exampleFormControlInput2"
                            className="pointer-events-none absolute left-3 top-0 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[2.15] text-neutral-500 transition-all duration-200 ease-out peer-focus:-translate-y-[1.15rem] peer-focus:scale-[0.8] peer-focus:text-primary peer-data-[te-input-state-active]:-translate-y-[1.15rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-neutral-200 dark:peer-focus:text-primary"
                            >Description
                        </label>
                        <ValidationError 
                            prefix="Email" 
                            field="description"
                            errors={state.errors}
                        />
                    </div>
                    <div>
                        {
                            state.submitting?
                                <button 
                                type="submit"
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                className="bg-gradient text-white text-sm p-4 rounded mt-4 inline-block rounded text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            >Sending...</button>:
                                <button 
                                type="submit" 
                                disabled={state.submitting}
                                data-te-ripple-init
                                data-te-ripple-color="light"
                                className="bg-gradient text-white text-sm p-4 rounded mt-4 inline-block rounded text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                            >Contact Us</button>
                        }
                        
                    </div>
                </form>
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