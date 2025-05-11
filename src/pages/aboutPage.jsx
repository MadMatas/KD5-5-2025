import { Link } from "react-router"
import Carousel from "../components/carousel"
import Accordion from "../components/accordion"


function AboutPage() {
    return (
        <>
            <Link to={"/"} className="bg-slate-900 text-white py-2 px-8 inline-block align-middle font-bold m-2 hover:bg-cyan-800">Back</Link> {/*Style'inimas kaip <a></a> elemento */}
            <Carousel />
            <Accordion />

        </>
    )
}


export default AboutPage