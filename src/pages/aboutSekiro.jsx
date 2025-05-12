import NavBar from "../components/navbar";

function AboutSekiro() {
  return (
    <>
      <NavBar />
      <div className="flex justify-evenly">
        <img
          className="max-w-[400px]"
          src="https://platform.polygon.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/12321569/Sekiro_24.jpg?quality=90&strip=all&crop=7.8125,0,84.375,100"
          alt=""
        />
        <img
          className="max-w-[400px]"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiqBXqu7ZUqoi3GqN4ess7oniudBBgRaCHlw&s"
          alt=""
        />
        <img
          className="max-w-[400px]"
          src="https://img.redbull.com/images/c_crop,w_1200,h_600,x_0,y_0/c_auto,w_1200,h_630/f_auto,q_auto/redbullcom/2019/04/05/6143e5be-18ff-47ff-a94f-feac15edd31b/sekiro"
          alt=""
        />
      </div>
      <div className="ml-[10em] mr-[10em] mt-[3em]">
        <div className="collapse bg-base-100 border-base-300 border my-3">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Unique and Challenging Combat System</div>
          <div className="collapse-content text-sm">Sekiro's combat revolves around posture and timing rather than traditional health depletion. The parry-focused system demands precision and rewards skill, making every duel—especially boss fights—feel intense and personal.</div>
        </div>
        <div className="collapse bg-base-100 border-base-300 border my-3">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Incredible Boss Fights and Enemy Design</div>
          <div className="collapse-content text-sm">The game features some of the most memorable and cinematic boss battles in FromSoftware's catalog. Each boss has unique patterns and mechanics, and many are designed to test specific skills the player has (or should have) developed.</div>
        </div>
        <div className="collapse bg-base-100 border-base-300 border my-3">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Immersive World and Storytelling</div>
          <div className="collapse-content text-sm">Set in a mythologized Sengoku-era Japan, Sekiro's world is richly detailed and atmospheric. The narrative, though more direct than Dark Souls or Bloodborne, still offers layers of mystery and depth, particularly through environmental storytelling and lore.</div>
        </div>
      </div>
    </>
  );
}

export default AboutSekiro;
