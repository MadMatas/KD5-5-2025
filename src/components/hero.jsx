import { Link } from "react-router";


function Hero() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://vulkk.com/wp-content/uploads/2025/04/POE2-Briefs-Dawn-of-the-Hunt-Featured.jpg"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Path of Exile 2</h1>
            <p className="py-6">
              Path of Exile 2 is an upcoming action role-playing video game
              developed and published by Grinding Gear Games. A sequel to Path
              of Exile, the game was released as a paid early access title for
              Windows PC, PlayStation 5 and Xbox Series X/S on December 6, 2024.
            </p>
            <Link to={"/about"} className="bg-slate-900 text-white py-2 px-8 inline-block align-middle font-bold m-2 hover:bg-cyan-800">Read More</Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
