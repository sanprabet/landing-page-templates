import React from 'react';

import LogoCarrousel from '../LogoCarousel/LogoCarrousel';
import CTAButton from '../CTAButton';

import { CTAButtonProps } from '../CTAButton/CTAButton';

interface CompaniesSectionProps {
    headingText?: string;
    secondaryText?: string;
    headingTextStyles?: string;

    paragraphText?: string;
    paragraphTextStyles?: string;

    ctaConfig?: CTAButtonProps;

    carrouselImages?: { src: string; alt: string }[];
}

const CompaniesSection: React.FC<CompaniesSectionProps> = ({
    headingText = 'INSERT',
    secondaryText = 'HEADING TEXT',
    headingTextStyles = 'text-main-green',

    paragraphText = 'Write some of what your company does here. Be brief',
    paragraphTextStyles = '',

    ctaConfig = {
        ctaButtonText: 'Define CTA',
        ctaButtonId: '#cta',
        ctaButtonStyles: 'bg-secondary-green hover:bg-secondary-green-grey',
    },

    carrouselImages = [
        { src: '', alt: 'No Images' },
        { src: '', alt: 'No Images' },
        { src: '', alt: 'No Images' },
        { src: '', alt: 'No Images' },
    ],
}) => {
    return (
        <div className="bg-white-cream">
            <div className="relative pt-[2rem] md:pt-[4rem] xl:pt-[6rem]">
                <h1
                    className={
                        'relative z-10 mx-auto mb-2 max-w-fit px-2 text-center text-[2rem] leading-[2rem] font-bold sm:px-4 sm:text-[3.2rem] sm:leading-[3.2rem] md:text-[4rem] md:leading-[4rem] xl:text-[5.5rem] xl:leading-[5.5rem] poppins-light-900 ' +
                        headingTextStyles
                    }
                >
                    {headingText}
                    <br />
                    {secondaryText}
                </h1>
                <div className="relative z-10 mx-2 flex flex-col justify-center">
                    <p
                        className={
                            'mx-auto max-w-[25rem] text-center text-[1em] text-gray-900 sm:max-w-[30rem] sm:text-[1.2rem] md:max-w-[35rem] md:text-[1.5rem] xl:max-w-[50rem] xl:text-[1.8rem] poppins-light-400 ' +
                            paragraphTextStyles
                        }
                    >
                        {paragraphText}
                    </p>
                    <CTAButton {...ctaConfig} />
                </div>
            </div>
            <LogoCarrousel carrouselImages={carrouselImages} />
        </div>
    );
};

export default CompaniesSection;
