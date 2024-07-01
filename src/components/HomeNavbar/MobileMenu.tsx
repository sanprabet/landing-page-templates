import LinksNavBar from './LinksNavBar';
import useScrollToHash from '../../hooks/useScrollToHash';
import CTAButton from '../CTAButton';

import { CTAButtonProps } from '../CTAButton/CTAButton';

interface MobileMenuButtonProps {
    isOpen: boolean;
    toggleMenu: () => void;
    buttonStyle?: string;
}

export const MobileMenuButton: React.FC<MobileMenuButtonProps> = ({
    isOpen,
    toggleMenu,
    buttonStyle = 'bg-secondary-green text-main-green hover:bg-secondary-green-grey',
}) => (
    <button
        onClick={toggleMenu}
        type="button"
        className={"inline-flex items-center justify-center p-2 mr-2 rounded-md " + buttonStyle}
        aria-controls="mobile-menu"
        aria-expanded="false"
    >
        <span className="sr-only">Open main menu</span>
        {isOpen ? (
            <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                />
            </svg>
        ) : (
            <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                />
            </svg>
        )}
    </button>
);

interface MobileMenuProps {
    isOpen: boolean;

    ctaConfig?: CTAButtonProps;

    links?: { text: string; link: string }[];
    linkStyle?: string;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
    isOpen,
    ctaConfig = {
        ctaButtonText: 'Define CTA',
        ctaButtonId: '#cta',
        ctaButtonStyles: 'bg-secondary-green hover:bg-secondary-green-grey',
    },
    links = [{ text: 'Define Links', link: '/' }],
    linkStyle = '',
}) => {
    useScrollToHash();
    return (
        <div
            className={`${isOpen ? 'block' : 'hidden'} md:hidden`}
            id="mobile-menu"
        >
            <div className="flex flex-col justify-center px-2 pt-2 pb-5 sm:px-3">
                <LinksNavBar links={links} linkStyle={linkStyle} />
                <CTAButton {...ctaConfig} />
            </div>
        </div>
    );
};
