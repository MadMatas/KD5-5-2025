import { Link } from "react-router";

function HeroElden() {
  return (
    <>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row">
          <img
            src="https://i0.wp.com/twistedvoxel.com/wp-content/uploads/2019/03/sekiro-shadows-die-twice-review.jpg?fit=1920%2C1080&ssl=1"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">Elden Ring</h1>
            <p className="py-6">
              Elden Ring is a 2022 action role-playing game developed by
              FromSoftware and published by Bandai Namco Entertainment. It was
              directed by Hidetaka Miyazaki with worldbuilding provided by the
              American fantasy writer George R. R. Martin.
            </p>
            <Link
              to={"/elden/about"}
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

export default HeroElden;
