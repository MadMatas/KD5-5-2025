import NavBar from "../components/navbar";

function AboutElden() {
  return (
    <>
      <NavBar />
      <div className="flex justify-evenly">
        <img
          className="max-w-[400px]"
          src="https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/25513752/elden_ring_godfrey.jpg?quality=90&strip=all&crop=0,0,100,100"
          alt=""
        />
        <img
          className="max-w-[400px]"
          src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/2024/02/mixcollage-22-feb-2024-05-04-pm-3992.jpg"
          alt=""
        />
        <img
          className="max-w-[400px]"
          src="https://www.vice.com/wp-content/uploads/sites/2/2024/12/elden-ring-night-reign-feature-waypoint.jpg"
          alt=""
        />
      </div>
      <div className="ml-[10em] mr-[10em] mt-[3em]">
        <div className="collapse bg-base-100 border-base-300 border my-3">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Massive, Seamlessly Open World</div>
          <div className="collapse-content text-sm">Elden Ring takes the Soulsborne formula into an expansive open world with incredible freedom of exploration. From hidden caves and dungeons to massive legacy dungeons and towering castles, the Lands Between constantly reward curiosity and exploration without handholding.</div>
        </div>
        <div className="collapse bg-base-100 border-base-300 border my-3">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Unprecedented Build Variety and Customization</div>
          <div className="collapse-content text-sm">The game offers an extraordinary range of weapons, spells, ashes of war, and armor, allowing for countless viable builds. Whether you want to be a stealthy assassin, a monstrous strength brute, or a cosmic spellcaster, Elden Ring supports it—and encourages experimentation.</div>
        </div>
        <div className="collapse bg-base-100 border-base-300 border my-3">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Rich Lore and Atmospheric Worldbuilding (with George R.R. Martin’s Touch)</div>
          <div className="collapse-content text-sm">The game's lore is deep, mysterious, and interconnected, blending FromSoftware’s cryptic storytelling with Martin's worldbuilding contributions. Everything—from item descriptions to environmental design—adds to a hauntingly beautiful and tragic world full of history.</div>
        </div>
      </div>
    </>
  );
}

export default AboutElden;
