import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {FC} from "react";
import SlickSlider from "react-slick";
import {LazyImage} from "react-lazy-images";

import Loader from "./Loader";


const Carousel: FC<{ slides: string[] }> = ({slides}) => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        // @ts-ignore
        <SlickSlider    {...settings}>
            {
                slides.map((item) =>
                    (<div key={item} className="h-full mt-5">
                            <div
                                className="flex container   h-[600px] rounded-lg items-center justify-center relative overflow-hidden">
                                <LazyImage
                                    src={item}
                                    placeholder={(props: any) => (
                                        <div
                                            ref={props.ref}
                                            className="scale-1 group-hover:scale-[1.1] transition-all duration-700"
                                        >
                                            <Loader width="1000px" height="300px"/>
                                        </div>
                                    )}
                                    actual={(props: any) => (
                                        <img
                                            className="scale-1 w-full h-full  transition-all duration-300 object-contain"
                                            {...props.imageProps}
                                        />
                                    )}
                                />
                            </div>
                        </div>
                    )
                )
            }

        </SlickSlider>
    );
}

export default Carousel
