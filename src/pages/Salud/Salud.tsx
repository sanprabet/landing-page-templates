import React from 'react';

import { CountryCode } from 'libphonenumber-js';

const CTAButtonConfig = {
    ctaButtonText: 'Cotiza Ya',
    ctaButtonStyles:
    'bg-secondary-blue hover:bg-secondary-blue-grey text-main-green my-2 py-2 px-6 md:px-4 lg:px-8 text-[1.1rem] md:text-[1.2rem] font-medium w-fit mx-auto',
    ctaButtonId: '#cta',
};

const HomeNavbarConfig = {
    navStyles: ' bg-main-blue ',
    logoText: 'SB Salud',
    logoLink: '/salud',
    links: [{ text: 'Servicios Financieros', link: '/finanzas' }],
    linkStyle: 'max-w-fit mx-auto my-3',
    ctaConfig: CTAButtonConfig,
    mobileMenuButtonStyles: 'text-main-blue bg-secondary-blue hover:bg-secondary-blue-grey'
};

import landing2 from '../../assets/landing2.png';
const HeroSectionConfig = {
    sectionStyles: 'bg-main-blue',
    headingText: 'CUIDA',
    secondaryText: 'TU FAMILIA',
    headingStyles: 'text-white',
    secondaryStyles: 'text-secondary-blue',
    paragraphText:
    'Con servicios de salud fuera de tu EPS.',
    paragraphStyles: '',
    ctaConfig: CTAButtonConfig,
    backgroundImage: landing2,
    backgroundAlt: 'Park Landscape',
};

import Skandia from '../../assets/skandia.png';
import Sura from '../../assets/sura.png';
import Invexco from '../../assets/invexco.png';
import Panamerican from '../../assets/panamerican.png';
import Axa from '../../assets/axa.png';

const CompaniesSectionConfig = {
    headingText: 'QUEREMOS QUE TU SALUD.',
    secondaryText: 'NO DEPENDA DE TU GOBIERNO.',
    headingTextStyles: 'text-main-blue',
    paragraphText:
    'En solo 3 pasos puedes acceder a los productos de salud con mejor cobertura y precios de Colombia.',
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


const FormSectionConfig = {
    formStyles: 'bg-main-blue',
    sectionId: 'cta',
    headingText: 'APUESTA POR TU FUTURO',
    secondaryText: 'INVIERTE HOY',
    headingStyle: 'poppins-light-900 text-secondary-blue',
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

import { AiFillAlert } from "react-icons/ai";
import { FaHospital } from "react-icons/fa";
const DescriptionSection2Config = {
    sectionStyles: 'bg-white-cream',
    
    title: '¿Que planes de salud ofrecemos?',
    titleStyle: 'poppins-light-900 text-main-blue text-[2rem] leading-[2rem] font-bold sm:px-4 sm:text-[3.2rem] sm:leading-[3.2rem] md:text-[4rem] md:leading-[4rem] lg:text-[5.5rem] lg:leading-[5.5rem] mt-8 mb-4',
    
    descriptionConfig: {
        data: [
            {
                icon: <FaHospital />,
                title: 'Seguro de Vida',
                description: 'Cobertura adaptada a tus necesidades, disponible desde los 14 años. Respaldo económico y opciones de ahorro.',
            },
            {
                icon: <AiFillAlert />,
                title: 'Cobertura',
                description: 'Cobertura en toda la República',
            },
        ],
        cardStyles: 'bg-white-cream-light',
        cardTitleStyle: 'poppins-light-600 text-main-blue',
        cardDescriptionStyle: 'poppins-light-400 text-[1em] text-gray-900 sm:max-w-[30rem] sm:text-[1.2rem] md:max-w-[35rem] md:text-[1.5rem] lg:max-w-[50rem] lg:text-[1.8rem] text-main-blue'
    }

}

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
