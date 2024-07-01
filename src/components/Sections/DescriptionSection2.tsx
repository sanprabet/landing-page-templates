import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillAlert } from "react-icons/ai";

export interface DescriptionListProps {
    data?: { icon: React.ReactElement; title: string; description: string }[];
    cardStyles?: string;
    cardTitleStyle?: string;
    cardDescriptionStyle?: string;
}

const DescriptionList: React.FC<DescriptionListProps> = ({
    data = [
        {
            icon: <AiFillAlert />,
            title: 'Cobertura',
            description: 'Cobertura en toda la República',
        },
    ],
    cardStyles = '',
    cardTitleStyle = '',
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
                        <div className="flex items-center justify-start mb-4">
                            <div className="text-[1.5rem] text-main-green mr-2">
                                {item.icon}
                            </div>
                            <h2 className={`text-[1.5rem] font-bold ${cardTitleStyle}`}>
                                {item.title}
                            </h2>
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
        <section className={`py-12 px-1 sm:px-2 md:px-8 xl:px-12 bg-white-cream ${sectionStyles}`}>
            {title && (
                <h2 className={`text-3xl font-bold text-center mb-8 ${titleStyle}`}>
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
