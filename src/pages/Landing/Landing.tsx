
const CTAButtonConfig = {
    ctaButtonText: 'Conoce mas',
    ctaButtonStyles:
    'bg-secondary-green hover:bg-secondary-green-grey text-main-green py-2 px-6 md:px-4 lg:px-8 text-[1.1rem] md:text-[1.2rem] font-medium w-fit mx-auto my-10',
    ctaButtonId: '#cta',
};

const HomeNavbarConfig = {
    navStyles: ' bg-main-green',
    logoText: 'SB',
    logoLink: '/',
    links: [
        {
            text: 'Finanzas',
            link: '/finanzas'
        },
        {
            text: 'Salud',
            link: '/salud'
        }
    ],
    linkStyle: 'bg-red',
    ctaConfig: CTAButtonConfig,
    mobileMenuButtonStyles: 'text-main-green bg-secondary-green hover:bg-secondary-green-grey'
};

import landing from '../../assets/landing.png';
const HeroSectionConfig = {
    sectionStyles: 'bg-main-green',
    headingText: 'PROVEEMOS SEGURIDAD',
    secondaryText: 'PARA TU FUTURO',
    headingStyles: 'text-white',
    secondaryStyles: 'text-secondary-green',
    paragraphText:
    'Con inversiones que protegen tu dinero, y planes de salud que protegen a tu familia.',
    paragraphStyles: '',
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
import HeroSection from '../../components/Sections/HeroSection';
import CompaniesSection from '../../components/Sections/CompaniesSection';

const Landing: React.FC = () => {

    return (
        <div className="">
            <HomeNavbar {...HomeNavbarConfig} />
            <HeroSection {...HeroSectionConfig} />
            <CompaniesSection {...CompaniesSectionConfig} />
            <HomeFooter {...HomeFooterConfig}/>
        </div>
    );
};

export default Landing;