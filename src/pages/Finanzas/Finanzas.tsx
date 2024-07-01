import React from 'react';
import HomeNavbar from '../../components/HomeNavbar';
import HomeFooter from '../../components/HomeFooter';
import HeroSection from '../../components/Sections/HeroSection';
import CompaniesSection from '../../components/Sections/CompaniesSection';
import DescriptionSection from '../../components/Sections/DescriptionSection';
import FormSection from '../../components/Sections/FormSection';

import { CountryCode } from 'libphonenumber-js';

// Images
import landing from '../../assets/landing.png';
import Skandia from '../../assets/skandia.png';
import descriptionImage from '../../assets/3.jpg';
import descriptionImage2 from '../../assets/4.jpg';
import descriptionImage3 from '../../assets/5.jpeg';

const Finanzas: React.FC = () => {
    const CTAButtonConfig = {
        ctaButtonText: 'Agenda una cita',
        ctaButtonStyles:
            'bg-secondary-green hover:bg-secondary-green-grey text-main-green py-2 px-6 md:px-4 xl:px-8 text-[1.1rem] md:text-[1.2rem] font-medium w-fit',
        ctaButtonId: '#cta',
    };

    const HomeNavbarConfig = {
        navStyles: ' bg-main-green',
        logoText: 'SB',
        logoLink: '/',
        links: [{ text: 'Portafolio Sura', link: '/salud' }],
        linkStyle: 'max-w-fit mx-auto my-3',
        ctaConfig: {
            ctaButtonText: 'Agenda una cita',
            ctaButtonStyles:
                'bg-secondary-green hover:bg-secondary-green-grey text-main-green py-2 px-6 md:px-4 xl:px-8 text-[1.1rem] md:text-[1.2rem] font-medium w-fit mx-auto',
            ctaButtonId: '#cta',
        },
    };

    const HeroSectionConfig = {
        sectionStyles: 'bg-main-green pt-[2rem] lg:pt-[4rem]',
        headingText: 'APUESTA POR TI',
        secondaryText: 'INVIERTE HOY',
        secondaryStyles: 'text-secondary-green',
        headingStyles: '',
        paragraphText:
            'Te ayudamos a escoger la mejor forma de sacar rentabilidad de tu dinero con inversiones seguras.',
        paragraphStyles: '',
        ctaConfig: CTAButtonConfig,
        backgroundImage: landing,
        backgroundAlt: 'Park Landscape',
    };

    const CompaniesSectionConfig = {
        headingText: 'JUBILACION TRANQUILA.',
        secondaryText: 'CON INVERSIONES SEGURAS.',
        headingTextStyles: '',
        paragraphText:
            'En solo 3 pasos puedes acceder a los productos financieros más rentables y seguros de Colombia.',
        paragraphTextStyles: '',
        ctaConfig: {
            ctaButtonText: 'Agenda una cita',
            ctaButtonStyles:
                'bg-secondary-green hover:bg-secondary-green-grey text-main-green py-2 px-6 md:px-4 xl:px-8 text-[1.1rem] md:text-[1.2rem] font-medium w-fit mx-auto my-[2rem]',
            ctaButtonId: '#cta',
        },
        carrouselImages: [
            { src: Skandia, alt: 'Company 1' },
            { src: Skandia, alt: 'Company 1' },
            { src: Skandia, alt: 'Company 1' },
            { src: Skandia, alt: 'Company 1' },
            { src: Skandia, alt: 'Company 1' },
            { src: Skandia, alt: 'Company 1' },
            { src: Skandia, alt: 'Company 1' },
            { src: Skandia, alt: 'Company 1' },
        ],
    };

    const DescriptionSectionConfig = {
        sectionStyles: 'bg-white-cream',
        labelStyle: 'poppins-light-400 bg-secondary-green text-main-green ',
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
        formStyles: 'bg-main-green',
        sectionId: 'cta',
        headingText: 'APUESTA POR TU FUTURO',
        secondaryText: 'INVIERTE HOY',
        headingStyle: 'poppins-light-900 text-secondary-green',
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

    return (
        <div className="bg-main-green">
            <HomeNavbar {...HomeNavbarConfig} />
            <HeroSection {...HeroSectionConfig} />
            <CompaniesSection {...CompaniesSectionConfig} />
            <DescriptionSection {...DescriptionSectionConfig} />
            <FormSection {...FormSectionConfig} />
            <HomeFooter />
        </div>
    );
};

export default Finanzas;
