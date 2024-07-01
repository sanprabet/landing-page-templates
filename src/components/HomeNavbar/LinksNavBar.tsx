import { Link } from 'react-router-dom';

interface LinksNavBarProps {
    links: { text: string; link: string }[];
    linkStyle?: string;
}

const LinksNavBar: React.FC<LinksNavBarProps> = ({
    links = [{ text: 'Define Links', link: '/' }],
    linkStyle = '',
}) => {
    return (
        <>
            {links.map((item, index) => (
                <Link
                    key={index}
                    to={item.link}
                    className={
                        'poppins-light-300 cursor-pointer text-white text-[1.1rem] md:text-[1.2rem] font-medium hover:text-stone-300 ' +
                        linkStyle
                    }
                >
                    {item.text}
                </Link>
            ))}
        </>
    );
};

export default LinksNavBar;
