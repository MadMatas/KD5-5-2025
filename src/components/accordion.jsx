function Accordion() {
    return (
        <>
            <div className="join join-vertical bg-base-100 flex mx-[20em] justify-center pb-10 mt-5">
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" defaultChecked />
                    <div className="collapse-title font-semibold">New Campaign</div>
                    <div className="collapse-content text-sm">PoE 2 features a completely new 7-act campaign that runs parallel to the original game's story. Both campaigns lead into the same shared endgame: the Atlas of Worlds, now enhanced and expanded.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">New Classes and Ascendancies</div>
                    <div className="collapse-content text-sm">Introduces 19 new Ascendancy Classes, distinct from those in the original game. While the original game had 7 base classes, PoE 2 will build on them with new character archetypes.</div>
                </div>
                <div className="collapse collapse-arrow join-item border-base-300 border">
                    <input type="radio" name="my-accordion-4" />
                    <div className="collapse-title font-semibold">Visual and Engine Upgrades</div>
                    <div className="collapse-content text-sm">PoE 2 uses an updated engine with modern lighting, animations, and physics. It remains free-to-play with no pay-to-win elements, like its predecessor.</div>
                </div>
            </div>
        </>
    );
}

export default Accordion;




