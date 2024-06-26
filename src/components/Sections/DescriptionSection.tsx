interface DescriptionListProps {
    data: { image: string; title: string; description: string }[];
    labelStyle?: string;
    titleStyle?: string;
    descriptionStyle?: string;
}
const DescriptionList: React.FC<DescriptionListProps> = ({
    data,
    labelStyle,
    titleStyle,
    descriptionStyle,
}) => {
    return (
        <div className="w-full">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="description-row flex flex-col md:flex-row items-center mt-8 px-2 md:px-4 xl:px-8 border-b-1"
                >
                    <div className="description-image w-full md:w-1/2 px-4 order-1 md:order-2">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto rounded-lg shadow-lg z-10"
                        />
                    </div>

                    <div className="description-content w-full md:w-1/2 px-4">
                        <div
                            className={
                                'text-[0.9rem] sm:text-[1rem] md:text-[1.1rem] xl:text-[1.2rem] py-[0.2rem] sm:py-[0.3rem] md:py-[0.4rem] xl:py-[0.5rem] px-[0.8rem] sm:px-[0.9rem] md:px-[1rem] xl:px-[1.1rem] w-fit rounded-full flex justify-center align-middle ' +
                                labelStyle
                            }
                        >
                            {'Paso ' + (index + 1)}
                        </div>
                        <h2
                            className={
                                'text-[1.8rem] sm:text-[2.2rem] md:text-[2.6rem] leading-[2rem] sm:leading-[3rem] md:leading-[3rem] mt-3 ' +
                                titleStyle
                            }
                        >
                            {item.title}
                        </h2>
                        <p
                            className={
                                'text-[0.8rem] sm:text-[1rem] md:text-[1.4rem] xl:text-[1.6rem] my-2 xl:my-4 ' +
                                descriptionStyle
                            }
                        >
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

interface DescriptionSectionProps {
    sectionStyles?: string;
    descriptionData?: { image: string; title: string; description: string }[];
    labelStyle?: string;
    titleStyle?: string;
    descriptionStyle?: string;
}

const DescriptionSection: React.FC<DescriptionSectionProps> = ({
    sectionStyles = '',
    labelStyle = '',
    titleStyle = '',
    descriptionStyle = '',
    descriptionData = [
        {
            image: '',
            title: 'Fill this title',
            description: 'Add a description on the specific step',
        },
    ],
}) => {
    return (
        <section className={'py-2 pb-0 ' + sectionStyles}>
            <DescriptionList
                data={descriptionData}
                labelStyle={labelStyle}
                titleStyle={titleStyle}
                descriptionStyle={descriptionStyle}
            />
        </section>
    );
};

export default DescriptionSection;
