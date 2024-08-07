import React from 'react';
import CTAButton from '../../components/CTAButton';

import { CTAButtonProps } from '../../components/CTAButton/CTAButton';

interface HeroSectionProps {
    sectionStyles?: string;

    headingText?: string;
    secondaryText?: string;
    headingStyles?: string;
    secondaryStyles?: string;

    paragraphText?: string;
    paragraphStyles?: string;

    ctaConfig: CTAButtonProps;

    backgroundImage?: string;
    backgroundAlt?: string;
}

const  HeroSection: React.FC<HeroSectionProps> = ({
    sectionStyles = 'bg-main-green',

    headingText = 'INSERT',
    secondaryText = 'HEADING TEXT',
    headingStyles = '',
    secondaryStyles = '',

    paragraphText = 'Write some of what your company does here. Be brief',
    paragraphStyles = '',

    ctaConfig = {
        ctaButtonText: 'Define CTA',
        ctaButtonId: '#cta',
        ctaButtonStyles: 'bg-secondary-green hover:bg-secondary-green-grey',
    },

    backgroundImage = '',
    backgroundAlt = 'No Image Chosen Yet. Image needs to be ',
}) => {
    return (
        <section
            className={`hero-section relative flex flex-col items-center justify-center text-center ${sectionStyles}`}
        >
            {/* Hero content */}
            <div className="z-20">
                <h1
                    className={headingStyles}
                >
                    {headingText}
                    <span className={secondaryStyles} >
                        <br />
                        {secondaryText}
                    </span>
                </h1>

                <div className={`mx-2 mt-2 pb-5`}>
                    <p
                        className={
                            'poppins-light-400 text-white max-w-[20rem] text-[0.9rem] sm:max-w-[25rem] sm:text-[1.3rem] md:max-w-[30rem] md:text-[1.5rem] xl:max-w-[40rem] xl:text-[1.8rem]' +
                            paragraphStyles
                        }
                    >
                        {paragraphText}
                    </p>
                </div>

                <CTAButton {...ctaConfig} />
            </div>

            {/* Background image */}
            <div className="w-full aspect-w-3 aspect-h-1 z-10 mt-2"></div>
            <div className="absolute bottom-0 left-0 w-full">
                <img
                    src={backgroundImage}
                    alt={backgroundAlt}
                    className="w-full"
                />
            </div>
        </section>
    );
};

export default HeroSection;
