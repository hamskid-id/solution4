import { Text } from "./text"

export const AboutUs =()=>{
    return(
        <div className="lg:px-20 xl:px-20 md:px-20 sm:px-20 xs:px-4 xxs:px-4 xxxs:px-4  py-20 mid-dark p-10 grid lg:grid-cols-2 xl:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 xxs:grid-cols-1 gap-14 m-auto">
            <div>
                <img 
                    src="https://mobirise.com/extensions/solutionm4/marketingsolution/assets/images/03.jpg"
                    alt="object not found"
                    className="w-full"
                />
            </div>
            <div className="flex flex-col items-start">
                <div className="coloredLine mb-4"></div>
                <div>
                    <Text
                        style="text-white mb-4 font-semibold text-4xl"
                        value="About Us"
                    />
                    <Text
                        style="c-grey text-lg text-justify"
                        value="Mega Sprint Limited is an IT company that provides a range of services, including web development, software development, and IT consulting. The company was founded in 2022 to provide high-quality, reliable IT services to businesses and organizations around the world.
                               Mega Sprint Limited is committed to providing innovative, cutting-edge IT solutions that help businesses and organizations reach their full potential. The company believes in the power of technology to transform the way we live and work, and is dedicated to making this technology accessible and user-friendly. It values integrity, innovation, and collaboration, and strives to build long-term relationships with its clients."
                    />
                </div>
            </div>
        </div>
    )
}
