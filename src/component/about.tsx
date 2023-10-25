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
                        value="Mega Sprint Limited is a trusted leader in the industry. With a team of experienced and talented professionals, the company has the ability to create custom solutions that meet the unique needs of each client."
                    />
                </div>
            </div>
        </div>
    )
}
