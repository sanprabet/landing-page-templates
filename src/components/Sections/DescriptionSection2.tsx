// components/DescriptionList.tsx
import React from 'react';

export interface DescriptionListProps {
    data: { image: string; title: string; description: string }[];
    titleStyle?: string;
    descriptionStyle?: string;
}

const DescriptionList: React.FC<DescriptionListProps> = ({
    data,
    titleStyle,
    descriptionStyle,
}) => {
    return (
        <div className="w-full grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item, index) => (
                <div
                    key={index}
                    className="description-item flex flex-col items-center text-center p-4 border rounded-lg shadow-md"
                >
                    <div className="description-image mb-4">
                        <img
                            src={item.image}
                            alt={item.title}
                            className="w-full h-auto rounded-lg"
                        />
                    </div>

                    <div className="description-content">
                        <h2
                            className={`text-xl font-bold mb-2 ${titleStyle}`}
                        >
                            {item.title}
                        </h2>
                        <p
                            className={`text-sm mb-4 ${descriptionStyle}`}
                        >
                            {item.description}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

interface DescriptionSectionProps extends DescriptionListProps {
  sectionStyles?: string;
}

const DescriptionSection2: React.FC<DescriptionSectionProps> = ({
  sectionStyles = '',
  titleStyle = '',
  descriptionStyle = '',
  data = [
      {
          image: '',
          title: 'Default Title',
          description: 'Default description for the step.',
      },
  ],
}) => {
  return (
      <section className={`py-8 ${sectionStyles}`}>
          <h2 className="text-center text-2xl font-bold mb-8">Use Cases</h2>
          <DescriptionList
              data={data}
              titleStyle={titleStyle}
              descriptionStyle={descriptionStyle}
          />
      </section>
  );
};

export default DescriptionSection2;