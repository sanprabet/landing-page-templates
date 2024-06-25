import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface LogoCarrouselProps {
    carrouselImages: { src: string; alt: string }[];
}

const LogoCarrousel: React.FC<LogoCarrouselProps> = ({ carrouselImages }) => {
    const settings = {
        arrows: false,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
        ],
    };

    return (
        <div className="mt-5">
            <Slider {...settings}>
                {carrouselImages.map((logo, index) => (
                    <div
                        key={index}
                        className="my-auto flex items-center justify-bottom px-2 md:px-8"
                    >
                        <img src={logo.src} alt={logo.alt} className="w-full" />
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default LogoCarrousel;
