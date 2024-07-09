import { Link } from 'react-router-dom';
import useScrollToHash from '../../hooks/useScrollToHash';
export interface CTAButtonProps {
    ctaButtonId: string;
    ctaButtonText: string;
    ctaButtonStyles: string;
}
const CTAButton: React.FC<CTAButtonProps> = ({
    ctaButtonId,
    ctaButtonText,
    ctaButtonStyles,
}) => {
    useScrollToHash();
    return (
        <Link
            to={ctaButtonId}
            className={'rounded-3xl poppins-light-400 ' + ctaButtonStyles}
        >
            {ctaButtonText}
        </Link>
    );
};

export default CTAButton;
