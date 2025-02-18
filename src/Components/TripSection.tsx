
import TripCard from "./TripCard";
import { trips } from "./data";
import { TripCardProps } from "./TripCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

interface ArrowProps {
    className?: string;
    style?: React.CSSProperties;
    onClick?: () => void;
  }

function SampleNextArrow(props:ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} next-arrow`}
            style={{
                ...style,
                background: "#fcc601",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                position: "absolute",
                left: "2px",
                zIndex: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center"
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props:ArrowProps) {
    const { className, style, onClick } = props;
    return (
        <div
            className={`${className} prev-arrow`}
            style={{
                ...style,
                background: "#fcc601",
                width: "40px",
                height: "40px",
                borderRadius: "50%",
                position: "absolute",
                right: "0px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
            }}
            onClick={onClick}
        />
    );
}

function TripSection() {
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        rtl: true,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3, slidesToScroll: 2, infinite: true, dots: true } },
            { breakpoint: 800, settings: { slidesToShow: 2, slidesToScroll: 1, initialSlide: 2 } },
            { breakpoint: 500, settings: { slidesToShow: 1, slidesToScroll: 1 } },
        ],
    };

    return (
        <div dir="rtl" className="mt-6">
        <h6 className="mt-5 ms-15 mb-2 text-sm text-gray-400">قم بزيارة العالم</h6>
        <h1 className="ms-15 text-xl font-semibold">الرحلات التي نقدمها</h1>
        <div dir="rtl" className="relative w-full max-w-screen-xl mx-auto my-5">
            <Slider {...settings}>
                {trips.map((trip: TripCardProps) => (
                    <TripCard key={trip.id} {...trip} />
                ))}
            </Slider>
        </div>
        </div>
    );
}

export default TripSection;
