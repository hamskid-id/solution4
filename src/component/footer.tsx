import { Text } from "./text"

export const Footer =()=>{
    return(
        <div className="lg:px-20 xl:px-20 md:px-20 sm:px-20 xs:px-4 xxs:px-4 xxxs:px-4  py-10">
            <div className="flex justify-between flex-wrap items-center">
                <Text
                    style="c-grey text-lg"
                    value="Dedicated to helping businesses of all sizes succeed."
                />
                <Text
                    style="c-grey text-lg"
                    value="© 2020 Mega Sprint Limited"
                />
            </div>
        </div>
    )
}