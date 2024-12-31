import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sdata from "./Sdata";

const Slide =( ) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
        <>
            <div className="slide">
                <h2>single item</h2>
                <slider {...settings}>
                    {Sdata.map ((value) =>(
                        <div className="box" key={value.id}>
                            <div className="img">
                                <img src={value.cover} alt=""/>
                            </div>
                            <div className="text">
                                <span>{value.category}</span>
                                <h2>{value.title}</h2>
                                <p>{value.desc}</p>
                            </div>
                        </div>
                    ))}
                </slider>
            </div>
        </>
    );
};
export default Slide;