import React from 'react';
import HomeNavbar from '../../components/HomeNavbar';
import HomeFooter from '../../components/HomeFooter';
import HeroSection from '../../components/Sections/HeroSection';
import CompaniesSection from '../../components/Sections/CompaniesSection';
import DescriptionSection from '../../components/Sections/DescriptionSection';
import FormSection from '../../components/Sections/FormSection';

import { CountryCode } from 'libphonenumber-js';

// Images
import landing2 from '../../assets/landing2.png';
import Skandia from '../../assets/skandia.png';
import Sura from '../../assets/sura.png';
import Invexco from '../../assets/invexco.png';
import Panamerican from '../../assets/panamerican.png';
import Axa from '../../assets/axa.png';
import descriptionImage from '../../assets/3.jpg';
import descriptionImage2 from '../../assets/4.jpg';
import descriptionImage3 from '../../assets/5.jpeg';

const Salud: React.FC = () => {
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

    const CompaniesSectionConfig = {
        headingText: 'NO QUEREMOS QUE TU SALUD.',
        secondaryText: 'DEPENDA DEL GOBIERNO.',
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

    const DescriptionSectionConfig = {
        sectionStyles: 'bg-white-cream',
        labelStyle: 'poppins-light-400 bg-secondary-blue text-main-blue ',
        titleStyle: 'poppins-light-900 font-bold text-gray-900',
        descriptionStyle: 'poppins-light-400 text-gray-700',
        descriptionData: [
            {
                image: descriptionImage,
                title: 'Te conocemos.',
                description:
                    'Con una encuesta y asesoría, encontramos los mejores planes del mercado.',
            },
            {
                image: descriptionImage3,
                title: 'Te asesoramos.',
                description:
                    'Presentamos múltiples cotizaciones para que elijas cómo invertir tu dinero.',
            },
            {
                image: descriptionImage2,
                title: 'Te acompañamos.',
                description: 'Te guiamos en la construcción de tu capital.',
            },
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

    return (
        <div className="bg-main-blue">
            <HomeNavbar {...HomeNavbarConfig} />
            <HeroSection {...HeroSectionConfig} />
            <CompaniesSection {...CompaniesSectionConfig} />
            <DescriptionSection {...DescriptionSectionConfig} />
            <FormSection {...FormSectionConfig} />
            <HomeFooter {...HomeFooterConfig}/>
        </div>
    );
};

export default Salud;
