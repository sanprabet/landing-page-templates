import React from 'react';

import { CountryCode } from 'libphonenumber-js';

const CTAButtonConfig = {
    ctaButtonText: 'Agenda una cita',
    ctaButtonStyles:
    'bg-secondary-blue hover:bg-secondary-blue-grey text-main-green my-2 py-2 px-6 md:px-4 xl:px-8 text-[1.1rem] md:text-[1.2rem] font-medium w-fit',
    ctaButtonId: '#cta',
};

const HomeNavbarConfig = {
    navStyles: ' bg-main-blue ',
    logoText: 'SB',
    logoLink: '/',
    links: [
        {
            text: 'Inversiones',
            link: '/finanzas'
        },
        {
            text: 'Quien Somos',
            link: '/'
        }
    ],
    linkStyle: 'max-w-fit mx-auto my-3 poppins-light-300 cursor-pointer text-white text-[1rem] md:text-[1.1rem] font-medium hover:text-stone-300 md:mx-3',
    ctaConfig: {
        ctaButtonText: 'Agenda una cita',
        ctaButtonStyles:
        'bg-secondary-blue hover:bg-secondary-blue-grey text-main-green py-[0.4rem] px-2 xl:px-4 text-[1.1rem] md:text-[1.2rem] font-medium w-fit',
        ctaButtonId: '#cta',
    },
    mobileMenuButtonStyles: 'text-main-blue bg-secondary-blue hover:bg-secondary-blue-grey'
};

import landing2 from '../../assets/landing2.png';
const HeroSectionConfig = {
    sectionStyles: 'bg-main-blue pt-[2rem] lg:pt-[4rem] min-h-[calc(100vh-90rem)]',
    headingText: 'CUIDA',
    secondaryText: 'TU FAMILIA',
    headingStyles: 'text-white poppins-light-900 text-white text-[3rem] leading-[3rem] sm:text-[4rem] sm:leading-[4rem] md:text-[5rem] md:leading-[5rem] xl:text-[6.5rem] xl:leading-[6.5rem] font-bold',
    secondaryStyles: 'text-secondary-blue',
    paragraphText:
    'Planes de Salud Adaptados a Tus Necesidades.',
    paragraphStyles: '',
    ctaConfig: CTAButtonConfig,
    backgroundImage: landing2,
    backgroundAlt: 'Park Landscape',
};

import Sura from '../../assets/sura.png';
import Panamerican from '../../assets/panamerican.png';
import Axa from '../../assets/axa.png';

const CompaniesSectionConfig = {
    headingText: 'QUEREMOS QUE TU SALUD.',
    secondaryText: 'TENGA EL MEJOR SERVICIO.',
    headingTextStyles: 'text-main-blue',
    paragraphText:
    'Trabajamos con las mejores empresas del pais para cubrir todas tus necesidades. Desde Polizas hospitalarias hasta coberturas internacionales de salud.',
    paragraphTextStyles: '',
    carrouselImages: [
        { src: Sura, alt: 'Company 2' },
        { src: Panamerican, alt: 'Company 4' },
        { src: Axa, alt: 'Company 5' },
        { src: Sura, alt: 'Company 2' },
        { src: Panamerican, alt: 'Company 4' },
        { src: Axa, alt: 'Company 5' },
    ],
};

const DescriptionSection2Config = {
    sectionStyles: 'bg-main-blue',
    
    title: 'Accede a las mejores coberturas de salud con SURA.',
    titleStyle: 'poppins-light-600 text-secondary-blue text-[2rem] leading-[2rem] font-bold sm:px-4 sm:text-[3.2rem] sm:leading-[3.2rem] md:text-[4rem] md:leading-[4rem] xl:text-[5.5rem] xl:leading-[5.5rem] mt-8 mb-4',
    
    descriptionConfig: {
        data: [
            {
                title: 'Salud Global',
                company: 'SURA',
                description: 'Máxima cobertura con habitación individual y tratamientos en el exterior. Protección global para tu familia.',
            }
        ],
        cardStyles: 'bg-white-cream-light',
        cardTitleStyle: 'poppins-light-600 text-main-blue text-[1.2em] md:text-[1.8rem] xl:text-[2rem] xl:leading-[2rem]',
        cardSubtitleStyle: 'poppins-light-400 text-[1em] text-gray-900 sm:max-w-[30rem] sm:text-[1.2rem] md:max-w-[35rem] md:text-[1.4rem] xl:max-w-[50rem] xl:text-[1.5rem] text-main-blue',
        cardDescriptionStyle: 'poppins-light-400 text-[1em] text-gray-900 sm:max-w-[30rem] sm:text-[1.2rem] md:max-w-[35rem] md:text-[1.4rem] xl:max-w-[50rem] xl:text-[1.5rem] xl:leading-[2rem] text-main-blue'
    }

}


const FormSectionConfig = {
    formStyles: 'bg-white-cream',
    sectionId: 'cta',
    headingText: 'LA SALUD NO',
    secondaryText: 'ES NEGOCIABLE',
    headingStyle: 'poppins-light-900 text-main-blue text-center text-[2rem] leading-[2rem] sm:text-[2.8rem] sm:leading-[3rem] md:text-[3rem] md:leading-[3.2rem] xl:text-[4.5rem] xl:leading-[5rem] font-bold mb-4',
    secondaryStyles: 'text-secondary-blue',
    formConfig: {
        sectionStyles: 'bg-white-cream rounded-3xl',
        formTitle:
        'Completa esta encuesta y te contactaremos en menos de 24hrs.',
        phoneData: {
            label: 'Ingresa tu celular',
            labelInputStyles: '',
            phoneInputStyles: '',
            defaultCountryCode: 'CO' as CountryCode,
        },
        emailData: {
            label: 'Ingresa tu correo',
            labelInputStyles: '',
            phoneInputStyles: '',
        },
        questionsConfig: {
            questions: [
                {
                    question: 'Main question, no derived questions',
                    options: [
                        {
                            option: 'A',
                        },
                        {
                            option: 'B',
                        },
                        {
                            option: 'C',
                        },
                    ],
                },
                {
                    question: 'Main Question.',
                    options: [
                        {
                            option: 'A',
                            derivedQuestions: [
                                {
                                    question: 'Secondary 1',
                                    options: ['1', '2', '3'],
                                },
                            ],
                        },
                        {
                            option: 'B',
                            derivedQuestions: [
                                {
                                    question: 'Secondary 2',
                                    options: ['11', '22', '33'],
                                },
                            ],
                        },
                        {
                            option: 'C',
                        }
                    ],
                },
            ],
        },
        submitButtonStyle: '',
        submitButtonText: 'Quiero saber mas.',
    },
};

const HomeFooterConfig = {
    footerStyles: 'bg-main-blue',
    text: '&copy; 2024 TiendYa. All rights reserved.',
    textStyle: 'text-secondary-blue',
    linkStyles: 'poppins-light-300 cursor-pointer text-white text-[1.1rem] md:text-[1.2rem] font-medium hover:text-stone-300',
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

import HomeNavbar from '../../components/HomeNavbar';
import HomeFooter from '../../components/HomeFooter';
import HeroSection from '../../components/Sections/HeroSection';
import CompaniesSection from '../../components/Sections/CompaniesSection';
import FormSection from '../../components/Sections/FormSection';
import DescriptionSection2 from '../../components/Sections/DescriptionSection2';

const Salud: React.FC = () => {

    return (
        <div className="">
            <HomeNavbar {...HomeNavbarConfig} />
            <HeroSection {...HeroSectionConfig} />
            <CompaniesSection {...CompaniesSectionConfig} />
            <DescriptionSection2 {...DescriptionSection2Config} />
            <FormSection {...FormSectionConfig} />
            <HomeFooter {...HomeFooterConfig}/>
        </div>
    );
};

export default Salud;
