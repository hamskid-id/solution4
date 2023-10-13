import { AiOutlinePlayCircle } from "react-icons/ai"
import { Text } from "./text"
import { useState } from "react";
import ModalVideo from 'react-modal-video';

export const Video =()=>{
    const [isOpen, setOpen] = useState<boolean>(false);
    return(
        <div className=" py-20 semi-mid-dark relative px-4">
            <div className=" lg:w-8/12 xl:w-8/12 md:w-8/12 sm:w-full xs:w-full xxs:w-full xxxs:w-full m-auto">
                <Text
                    style="text-white mb-4 font-semibold text-4xl text-center"
                    value="Watch the video"
                />
                <Text
                    style="c-grey text-lg text-center mb-4"
                    value="No matter what your marketing needs are, we can help you achieve your goals."
                />
                <div className="video-img-container py-40">
                    <AiOutlinePlayCircle 
                        color="#5758e0" 
                        size="3rem" 
                        className=" m-auto flex flex-col justify-center items-center"
                        onClick={() => setOpen(true)}
                    />
                </div>
                <div className="w-full h-full">
                    <ModalVideo
                        channel="youtube"
                        youtube={{ mute: 0, autoplay: 0 }}
                        isOpen={isOpen}
                        videoId="L61p2uyiMSo"
                        onClose={() => setOpen(false)} 
                    />
                </div>
            </div>
        </div>
    )
}