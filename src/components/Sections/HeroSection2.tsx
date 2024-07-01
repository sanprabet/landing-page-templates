import React from 'react';
import CTAButton from '../../components/CTAButton';
import { CTAButtonProps } from '../../components/CTAButton/CTAButton';

interface HeroSection2Props {
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

const HeroSection2: React.FC<HeroSection2Props> = ({
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
            className={`hero-section relative flex flex-col lg:flex-row-reverse items-center justify-center text-center ${sectionStyles}`}
        >
            {/* Background image */}
            <div className="w-full lg:w-1/2">
                <img
                    src={backgroundImage}
                    alt={backgroundAlt}
                    className="w-full"
                />
            </div>

            {/* Hero content */}
            <div className="z-20 w-full lg:w-1/2 p-4">
                <h1
                    className={headingStyles}
                >
                    {headingText}
                    <span className={secondaryStyles}>
                        <br />
                        {secondaryText}
                    </span>
                </h1>

                <div className={`mx-2 mt-2 pb-5 xl:pb-9`}>
                    <p
                        className={
                            paragraphStyles
                        }
                    >
                        {paragraphText}
                    </p>
                </div>

                <CTAButton {...ctaConfig} />
            </div>
        </section>
    );
};

export default HeroSection2;
