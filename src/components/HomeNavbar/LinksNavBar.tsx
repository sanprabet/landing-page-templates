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
