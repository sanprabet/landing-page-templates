import { FormCTA } from '../../features';
import { FormProps } from '../../features/FormCTA';

interface FormSectionProps {
    formStyles?: string;
    sectionId?: string;
    headingText?: string;
    secondaryText?: string;
    secondaryStyles?: string;
    headingStyle?: string;
    formConfig?: FormProps;
}

const FormSection: React.FC<FormSectionProps> = ({
    formStyles = 'bg-main-green',
    sectionId = 'cta',
    headingText = 'ADD A HEADING',
    secondaryText = 'ADD A SECONDARY TEXT',
    secondaryStyles = '',
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
                        className={`${headingStyle}`}
                    >
                        {headingText}
                        <br />
                        <span className={secondaryStyles}>{secondaryText}</span>
                    </h2>
                    <FormCTA {...formConfig} />
                </div>
            </section>
        </>
    );
};

export default FormSection;
