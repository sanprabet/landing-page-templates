import { Link } from 'react-router-dom';



const HomeFooter = ({
    footerStyles = 'bg-main-green',
    text = '&copy; 2024 TiendYa. All rights reserved.',
    textStyle = 'text-secondary-green',

    linksStyles = 'text-white hover:text-stone-300',
    links = [
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
    ],
}) => {
    return (
        <footer className={"shadow-md " + footerStyles}>
            <div className="max-w-7xl px-1 sm:px-3 xl:px-6 py-3">
                <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center md:text-left">
                        <p className={"text-xs md:text-sm " + textStyle}>
                            {text}
                        </p>
                    </div>
                    <div className="mt-1">
                        <div className="flex wrap justify-center md:justify-end space-x-4 text-center">
                            {
                                links.map((l, index) => (
                                    <Link
                                        key={index}
                                        to={l.link}
                                        className={"px-3 py-2 rounded-md text-xs md:text-sm font-bold text-center " + linksStyles}
                                    >
                                        {l.text}
                                    </Link>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default HomeFooter;
