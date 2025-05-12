import { Link } from "react-router";

function HeroSekiro() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i0.wp.com/twistedvoxel.com/wp-content/uploads/2019/03/sekiro-shadows-die-twice-review.jpg?fit=1920%2C1080&ssl=1"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Sekiro</h1>
            <p className="py-6">
              Sekiro: Shadows Die Twice is a 2019 action-adventure game
              developed by FromSoftware. It was released in Japan by
              FromSoftware and internationally by Activision for the PlayStation
              4, Windows and Xbox One in March 2019 and for Stadia in October
              2020.
            </p>
            <Link
              to={"/sekiro/about"}
              className="bg-slate-900 text-white py-2 px-8 inline-block align-middle font-bold m-2 hover:bg-cyan-800"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSekiro;
