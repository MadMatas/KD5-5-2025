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
      <div className="">
        <div className="collapse bg-base-100 border-base-300 border">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Sekiro</div>
          <div className="collapse-content text-sm">Yes.</div>
        </div>
        <div className="collapse bg-base-100 border-base-300 border">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Sekiro</div>
          <div className="collapse-content text-sm">Yes.</div>
        </div>
        <div className="collapse bg-base-100 border-base-300 border">
          <input type="checkbox" />
          <div className="collapse-title font-semibold">Sekiro</div>
          <div className="collapse-content text-sm">Yes.</div>
        </div>
      </div>
    </>
  );
}

export default AboutSekiro;
