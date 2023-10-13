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
                        style="c-grey text-lg"
                        value={`Marketing Solution Agency is  "Your one-stop shop for all your marketing needs." "Elevate your business with our marketing solutions." "Your success is our success.Our team is passionate about helping businesses succeed." "We're dedicated to providing the best possible service." "Our mission is to make marketing simple and effective." Services: "Grow your business with our marketing services." "We'll take your marketing to the next level." "Don't do it alone - let us help you achieve your goals."`}
                    />
                </div>
            </div>
        </div>
    )
}