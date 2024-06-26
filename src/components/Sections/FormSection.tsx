import { FormCTA } from '../../features';
import { FormProps } from '../../features/FormCTA';

interface FormSectionProps {
    formStyles?: string;
    sectionId?: string;
    headingText?: string;
    secondaryText?: string;
    headingStyle?: string;
    formConfig?: FormProps;
}

const FormSection: React.FC<FormSectionProps> = ({
    formStyles = 'bg-main-green',
    sectionId = 'cta',
    headingText = 'ADD A HEADING',
    secondaryText = 'ADD A SECONDARY TEXT',
    headingStyle = '',
    formConfig,
}) => {
    return (
        <>
            <section
                id={sectionId}
                className={`form-section w-full flex flex-col justify-center items-center text-left`}
            >
                <div className={`z-20 w-full px-4 py-14 ${formStyles}`}>
                    <h2
                        className={`text-center text-[2rem] leading-[2rem] sm:text-[2.8rem] sm:leading-[3rem] md:text-[3rem] md:leading-[3.2rem] lg:text-[4.5rem] lg:leading-[5rem] font-bold mb-4 ${headingStyle}`}
                    >
                        {headingText}
                        <br />
                        <span className="text-white">{secondaryText}</span>
                    </h2>
                    <FormCTA {...formConfig} />
                </div>
            </section>
        </>
    );
};

export default FormSection;
