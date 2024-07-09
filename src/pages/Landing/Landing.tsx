
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
            text: 'Inversiones Skandia',
            link: '/finanzas'
        },
        {
            text: 'Portafolio Salud',
            link: '/salud'
        }
    ],
    linkStyle: 'mx-3 leading-5 text-center mb-2 md:mb-0 poppins-light-300 cursor-pointer text-white text-[1rem] md:text-[1.1rem] font-medium hover:text-stone-300',
    ctaConfig: {
        ctaButtonText: 'Conoce mas',
        ctaButtonStyles:
        'bg-secondary-green hover:bg-secondary-green-grey text-main-green py-2 px-6 md:px-4 xl:px-8 text-[1.1rem] md:text-[1.2rem] font-medium w-fit mt-3 md:mt-0 mx-auto md:mx-0',
        ctaButtonId: '#cta',
    },
    mobileMenuButtonStyles: 'text-main-green bg-secondary-green hover:bg-secondary-green-grey'
};

import landing from '../../assets/landing3.webp';
const HeroSection2Config = {
    sectionStyles: 'bg-main-green md:py-[1rem] lg:py-[4rem] lg:py-[3rem]',
    headingText: 'PROVEEMOS SEGURIDAD',
    secondaryText: 'PARA TU FUTURO',
    headingStyles: 'poppins-light-900 text-white text-[2.7rem] leading-[2.7rem] sm:text-[2.3rem] sm:leading-[2.3rem] md:text-[2.5rem] md:leading-[2.5rem] lg:text-[3.2rem] lg:leading-[3.2rem] xl:text-[3.5rem] xl:leading-[3.5rem] mx-auto lg:mx-0 text-center lg:text-start font-bold',
    secondaryStyles: 'text-secondary-green text-[2.7rem] leading-[2.7rem] sm:text-[2.3rem] sm:leading-[2.3rem] md:text-[2.5rem] md:leading-[2.5rem] lg:text-[3.2rem] lg:leading-[3.2rem] xl:text-[3.5rem] xl:leading-[3.5rem]',
    paragraphText:
    'Con inversiones que protegen tu dinero, y planes de salud que protegen a tu familia.',
    paragraphStyles: 'poppins-light-400 text-white text-[0.9rem] sm:text-[1rem] sm:max-w-[70%] sm:mx-auto lg:mx-0 md:text-[1.2rem] text-center lg:text-start xl:text-[1.5rem]',
    ctaConfig: {
        ctaButtonText: 'Conoce mas',
        ctaButtonStyles:
        'bg-secondary-green hover:bg-secondary-green-grey text-main-green py-2 px-6 md:px-4 lg:px-6 xl:px-8 text-[1.1rem] md:text-[1.2rem] font-medium w-fit mx-auto md:mx-0',
        ctaButtonId: '#cta',
    },
    backgroundImage: landing,
    backgroundAlt: 'Park Landscape',
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

const ColumnSectionConfig = {
    
}    


const HomeFooterConfig = {
  footerStyles: 'bg-main-green',
  footerText: '&copy; 2024 TiendYa. All rights reserved.',
  footerTextStyle: 'text-white poppins-light-300 text-[0.7rem] sm:text-[0.8rem] md:text-[0.9rem] lg:text-[1rem] xl:text-[1.1rem] font-medium',
  linkStyles: 'text-white hover:text-secondary-green poppins-light-300 cursor-pointer text-[0.9rem] sm:text-[1rem] md:text-[1rem] xl:text-[1.2rem] font-medium',
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
  ],
  newsletterHeading: 'Subscribe to our Newsletter to get updates.',
  newsletterHeadingStyle: 'md:text-center font-bold text-secondary-green text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem]',
  emailPlaceholder: 'Email Address',
  emailInputStyle: 'w-full px-4 py-2 text-main-green bg-white border rounded-md focus:border-secondary-green dark:focus:border-secondary-green focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-secondary-green',
  subscribeButtonText: 'Subscribe',
  subscribeButtonStyle: 'px-6 py-2.5 text-sm font-medium tracking-wider text-main-green transition-colors duration-300 transform md:w-auto focus:outline-none bg-secondary-green rounded-lg hover:bg-secondary-green focus:ring focus:ring-secondary-green focus:ring-opacity-800 my-1 lg:my-0 lg:mx-1',
  quickLinksHeading: 'Quick Links',
  quickLinksHeadingStyle: 'font-semibold text-secondary-green text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem]',
  documentationHeading: 'Documentation',
  documentationHeadingStyle: 'font-semibold text-secondary-green text-[1.1rem] sm:text-[1.2rem] md:text-[1.3rem] lg:text-[1.4rem] xl:text-[1.5rem]',
  documentationLinks: [
    {
      link: '#',
      text: 'Terms & Conditions',
    },
    {
      link: '#',
      text: 'Privacy Policy',
    },
    {
      link: '#',
      text: 'Return Policy',
    },
  ],
};



import HomeNavbar from '../../components/HomeNavbar';
import HomeFooter from '../../components/HomeFooter';
import HeroSection2 from '../../components/Sections/HeroSection2';
import CompaniesSection from '../../components/Sections/CompaniesSection';
import ColumnSection from '../../components/Sections/ColumnSection';

const Landing: React.FC = () => {

    return (
        <div className="">
            <HomeNavbar {...HomeNavbarConfig} />
            <HeroSection2 {...HeroSection2Config} />
            {/* <CompaniesSection {...CompaniesSectionConfig} /> */}
            <ColumnSection {...ColumnSectionConfig} />
            <HomeFooter {...HomeFooterConfig}/>
        </div>
    );
};

export default Landing;