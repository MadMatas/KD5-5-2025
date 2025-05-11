


function Carousel() {
    return (
        <>
            <div className="carousel mx-[25em] mt-[5em]">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="https://static.lagofast.com/website/image/17325896962035687.webp"
                        className="w-full h-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="https://cdn.mos.cms.futurecdn.net/jjC962ZNeg884s7hdb56AT-1200-80.jpg"
                        className="w-full h-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="https://sm.pcmag.com/t/pcmag_au/review/p/path-of-ex/path-of-exile-2-for-pc_1bkn.1920.jpg"
                        className="w-full h-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="https://static1.thegamerimages.com/wordpress/wp-content/uploads/wm/2024/12/path-of-exile-2-atlas-passive-tree.jpg"
                        className="w-full h-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Carousel;