import React from 'react';
import { Link } from 'react-router-dom';

export interface DescriptionListProps {
    data?: { icon: React.ReactElement; title: string; company: string; description: string }[];
    cardStyles?: string;
    cardTitleStyle?: string;
    cardSubtitleStyle?: string;
    cardDescriptionStyle?: string;
}

const DescriptionList: React.FC<DescriptionListProps> = ({
    data = [
        {
            title: 'Cobertura',
            company: 'SURA',
            description: 'Cobertura en toda la República',
        },
    ],
    cardStyles = '',
    cardTitleStyle = '',
    cardSubtitleStyle = '',
    cardDescriptionStyle = '',
}) => {
    return (
        <div className="w-full grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 px-4 sm:px-0">
            {
                data.map((item, index) => (
                    <div
                        key={index}
                        className={`description-item flex flex-col p-6 border rounded-lg shadow-lg transition-transform transform hover:scale-105 ${cardStyles}`}
                    >
                        <div className="">
                            <h2 className={cardTitleStyle}>
                                {item.title}
                            </h2>
                            <h3 className={cardSubtitleStyle}>
                                {item.company}
                            </h3>
                        </div>
                        <p className={`text-base text-gray-700 ${cardDescriptionStyle}`}>
                            {item.description}
                        </p>
                        <div>
                            <Link
                                to="#cta"
                                className="text-secondary-green hover:text-secondary-green-light"

                            />
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

interface DescriptionSectionProps {
    sectionStyles?: string;
    title?: string;
    titleStyle?: string;
    descriptionConfig?: DescriptionListProps;
}

const DescriptionSection2: React.FC<DescriptionSectionProps> = ({
    sectionStyles = '',
    title = '',
    titleStyle = '',
    descriptionConfig,
}) => {
    return (
        <section className={`py-12 px-1 sm:px-2 md:px-8 xl:px-12 ${sectionStyles}`}>
            {title && (
                <h2 className={`font-bold text-center mb-8 ${titleStyle}`}>
                    {title}
                </h2>
            )}
            <DescriptionList
                {...descriptionConfig}
            />
        </section>
    );
};

export default DescriptionSection2;
