import { Link } from "react-router"

function AboutPage() {
    return (
        <>
            <p>About page</p>
             <Link to={"/"} >Main Page</Link> {/*Style'inimas kaip <a></a> elemento */}
        </>
    )
}


export default AboutPage