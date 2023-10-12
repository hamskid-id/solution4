import { AboutUs } from "../component/about"
import { Contact } from "../component/contact"
import { ContactInfo } from "../component/contactInfo"
import { CustomerTestimony } from "../component/customer"
import { Features } from "../component/features"
import { Footer } from "../component/footer"
import { IntroSect } from "../component/intro"
import { Map } from "../component/map"
import { Nav } from "../component/nav"
import { Portfolio } from "../component/portfolio"
import { Video } from "../component/video"
import { WhoWeAre } from "../component/who we are"
import { Work } from "../component/work"
import {useRef} from "react"

export const Home=()=>{

    const aboutRef= useRef<HTMLDivElement>(null)
    const featuresref=  useRef<HTMLDivElement>(null)
    const contactref=  useRef<HTMLDivElement>(null)
    const pricingref=  useRef<HTMLDivElement>(null)

    return(
        <div>
            <Nav
                aboutRef={aboutRef}
                featuresref={featuresref}
                contactref={contactref}
                pricingref={pricingref}
            />
            <IntroSect/>
            <Work/>
            <div ref={aboutRef}>
                <AboutUs/>
            </div>
            <div ref={pricingref}>
                <WhoWeAre/>
            </div>
            <div ref={featuresref}>
                <Features/>
            </div>
            <Portfolio/>
            <Video/>
            <CustomerTestimony/>
            <Contact
            />
            <Map/>
            <div ref={contactref}>
                <ContactInfo/>
            </div>
            <Footer/>
        </div>
    )
}