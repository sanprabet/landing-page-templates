import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import useScrollToHash from '../../hooks/useScrollToHash';

import LinksNavBar from './LinksNavBar';
import CTAButton from '../CTAButton';
import { MobileMenu, MobileMenuButton } from './MobileMenu';

import { CTAButtonProps } from '../CTAButton/CTAButton';

interface HomeNavbarProps {
    navStyles?: string;

    logoText?: string;
    logoLink?: string;

    links?: { text: string; link: string }[];
    linkStyle?: string;

    ctaConfig?: CTAButtonProps;

    mobileMenuButtonStyles?: string;
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({
    navStyles = 'bg-main-green',

    logoText = 'Define Logo',
    logoLink = '/',

    links = [{ text: 'Define Links', link: '/' }],
    linkStyle = '',

    ctaConfig = {
        ctaButtonText: 'Define CTA',
        ctaButtonId: '#cta',
        ctaButtonStyles: 'bg-secondary-green hover:bg-secondary-green-grey',
    },
    
    mobileMenuButtonStyles,
}) => {
    useScrollToHash();
    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className={`sticky top-0 z-50 ${navStyles}`}>
            <div className="mx-auto max-w-[110rem] px-4 md:px-2">
                <div className="grid grid-cols-3 h-16 items-center justify-between md:h-20">
                    {/* "Logo" Side */}
                    <div className="flex items-center">
                        <Link
                            to={logoLink}
                            className="flex cursor-pointer flex-shrink-0"
                        >
                            <h1
                                className={`bebas-neue-regular text-white text-[2.4rem] md:text-[3.2rem] md:ml-2`}
                            >
                                {logoText}
                            </h1>
                        </Link>
                    </div>

                    {/* "Landing Link" Center DESKTOP */}
                    <div className="flex justify-center">
                        <div className="hidden md:flex leading-[4rem]">
                            <LinksNavBar links={links} />
                        </div>
                    </div>

                    {/* "CTA" Right Side DESKTOP */}
                    <div className="hidden md:flex justify-end">
                        <CTAButton {...ctaConfig} />
                    </div>

                    {/* "Menu Button" Right Side MOBILE */}
                    <div className="flex md:hidden justify-end -mr-2">
                        <MobileMenuButton
                            buttonStyle={mobileMenuButtonStyles}
                            isOpen={isOpen}
                            toggleMenu={toggleMenu}
                        />
                    </div>
                </div>
            </div>

            {/* "Menu (landing + cta)" MOBILE */}
            <MobileMenu
                isOpen={isOpen}
                ctaConfig={ctaConfig}
                links={links}
                linkStyle={linkStyle}
            />
        </nav>
    );
};

export default HomeNavbar;
