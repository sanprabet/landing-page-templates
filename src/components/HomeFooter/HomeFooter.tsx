const HomeFooter = ({
    footerStyles = 'bg-main-green',
    footerText = '&copy; 2024 TiendYa. All rights reserved.',
    footerTextStyle = 'text-secondary-green poppins-light-300 text-[1.1rem] md:text-[1.2rem]',
    linkStyles = 'text-white hover:text-stone-300 poppins-light-300 cursor-pointer text-[1.1rem] md:text-[1.2rem] font-medium',
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
    newsletterHeading = 'Subscribe to our Newsletter to get updates.',
    newsletterHeadingStyle = 'md:text-center max-w-lg text-xl font-bold text-gray-800 xl:text-2xl',
    emailPlaceholder = 'Email Address',
    emailInputStyle = 'px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300',
    subscribeButtonText = 'Subscribe',
    subscribeButtonStyle = 'w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80',
    quickLinksHeading = 'Quick Links',
    quickLinksHeadingStyle = 'font-semibold text-gray-700',
    documentationHeading = 'Documentation',
    documentationHeadingStyle = 'font-semibold text-gray-700',
    documentationLinks = [
      {
        link: '#',
        text: 'Terms & Conditions',
      },
      {
        link: '#',
        text: 'Privacy Policy',
      },
      {
        link: '#',
        text: 'Return Policy',
      },
    ],
  }) => {
    return (
      <footer className={footerStyles}>
        <div className="container px-6 py-10 pb-1 mx-auto">
          <div className="grid gap-y-1 grid-cols-1 lg:grid-cols-2">
            <div className="">
              <h1 className={"w-full text-center md:text-start " + newsletterHeadingStyle}>{newsletterHeading}</h1>
              <div className="w-full flex flex-col justify-center my-4 lg:flex-row ">
                <input
                  id="email"
                  type="text"
                  className={"w-full " + emailInputStyle} // w-full px-4 py-2 text-main-green bg-white border rounded-md focus:border-secondary-green dark:focus:border-secondary-green focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-secondary-green
                  placeholder={emailPlaceholder}
                />
                <button className={"w-full " + subscribeButtonStyle}>
                  {subscribeButtonText}
                </button>
              </div>
            </div>
  
            <div className="flex flex-col sm:flex-row justify-around">
              <div className="flex flex-col items-center md:items-start space-y-2">
                <p className={"text-center md:text-start " + quickLinksHeadingStyle}>{quickLinksHeading}</p>
                {links.map(({ link, text }) => (
                  <a href={link} className={linkStyles} key={link}>
                    {text}
                  </a>
                ))}
              </div>
              <div className="flex flex-col items-center md:items-start space-y-2">
                <p className={" text-center md:text-start " + documentationHeadingStyle}>{documentationHeading}</p>
                {documentationLinks.map(({ link, text }) => (
                  <a href={link} className={linkStyles} key={link}>
                    {text}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <hr className="mt-5 justify-center" />
          <div className="m-5">
            <p className={`text-center ${footerTextStyle}`}>{footerText}</p>
          </div>
        </div>
      </footer>
    );
  };
  
  export default HomeFooter;
  
{/* <footer className={"shadow-md " + footerStyles}>
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
</footer> */}