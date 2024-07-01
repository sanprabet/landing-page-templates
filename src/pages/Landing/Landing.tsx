
const CTAButtonConfig = {
    ctaButtonText: 'Conoce mas',
    ctaButtonStyles:
    'bg-secondary-green hover:bg-secondary-green-grey text-main-green py-2 px-6 md:px-4 xl:px-8 text-[1.1rem] md:text-[1.2rem] font-medium w-fit',
    ctaButtonId: '#cta',
};

const HomeNavbarConfig = {
    navStyles: ' bg-main-green',
    logoText: 'SB',
    logoLink: '/',
    links: [
        {
            text: 'Inversiones',
            link: '/finanzas'
        },
        {
            text: 'Portafolio Salud',
            link: '/salud'
        }
    ],
    linkStyle: 'mr-3 leading-5 text-center mb-2',
    ctaConfig: {
        ctaButtonText: 'Conoce mas',
        ctaButtonStyles:
        'bg-secondary-green hover:bg-secondary-green-grey text-main-green py-2 px-6 md:px-4 xl:px-8 text-[1.1rem] md:text-[1.2rem] font-medium w-fit mt-3 mx-auto',
        ctaButtonId: '#cta',
    },
    mobileMenuButtonStyles: 'text-main-green bg-secondary-green hover:bg-secondary-green-grey'
};

import landing from '../../assets/landing3.webp';
const HeroSection2Config = {
    sectionStyles: 'bg-main-green lg:pt-[4rem]',
    headingText: 'PROVEEMOS SEGURIDAD',
    secondaryText: 'PARA TU FUTURO',
    headingStyles: 'poppins-light-900 text-white text-start text-[2.1rem] leading-[2.1rem] sm:text-[2.3rem] sm:leading-[2.3rem] md:text-[2.5rem] md:leading-[2.5rem] xl:text-[4rem] xl:leading-[4rem] font-bold',
    secondaryStyles: 'text-secondary-green ',
    paragraphText:
    'Con inversiones que protegen tu dinero, y planes de salud que protegen a tu familia.',
    paragraphStyles: 'poppins-light-400 text-white max-w-[20rem] text-[0.9rem] sm:max-w-[25rem] sm:text-[1rem] md:max-w-[30rem] md:text-[1.2rem] xl:max-w-[40rem] xl:text-[1.8rem] text-start',
    ctaConfig: CTAButtonConfig,
    backgroundImage: landing,
    backgroundAlt: 'Park Landscape',
};

const HomeFooterConfig = {
    footerStyles: 'bg-main-green',
    text: '&copy; 2024 TiendYa. All rights reserved.',
    textStyle: 'text-secondary-green',
    linkStyles: 'text-white hover:text-stone-300',
    links: [
        {
            link: '/redes',
            text: 'Redes Sociales',
        },
        {
            link: '/contacto',
            text: 'Contactanos',
        },
        {
            link: '/legal',
            text: 'Legal',
        },
    ]
};

import Skandia from '../../assets/skandia.png';
import Sura from '../../assets/sura.png';
import Invexco from '../../assets/invexco.png';
import Panamerican from '../../assets/panamerican.png';
import Axa from '../../assets/axa.png';

const CompaniesSectionConfig = {
    headingText: 'PLANES QUE PROTEGEN',
    secondaryText: 'TU FUTURO',
    headingTextStyles: 'text-main-green',
    paragraphText:
    'Te conectamos con las compañias mas grandes de Colombia, para que tengas acceso a la mejor asesoria a solo un contacto de distancia.',
    paragraphTextStyles: '',
    ctaConfig: CTAButtonConfig,
    carrouselImages: [
        { src: Skandia, alt: 'Company 1' },
        { src: Sura, alt: 'Company 2' },
        { src: Invexco, alt: 'Company 3' },
        { src: Panamerican, alt: 'Company 4' },
        { src: Axa, alt: 'Company 5' },
    ],
};


import HomeNavbar from '../../components/HomeNavbar';
import HomeFooter from '../../components/HomeFooter';
import HeroSection2 from '../../components/Sections/HeroSection2';
import CompaniesSection from '../../components/Sections/CompaniesSection';

const Landing: React.FC = () => {

    return (
        <div className="">
            <HomeNavbar {...HomeNavbarConfig} />
            <HeroSection2 {...HeroSection2Config} />
            <CompaniesSection {...CompaniesSectionConfig} />
            <HomeFooter {...HomeFooterConfig}/>
        </div>
    );
};

export default Landing;