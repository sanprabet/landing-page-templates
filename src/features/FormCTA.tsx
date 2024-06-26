import { CountryCode } from 'libphonenumber-js';
import React, { useState, useEffect } from 'react';
import PhoneInput, { isValidPhoneNumber } from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

import {
    FormCTAQuestions,
    FormCTAQuestionsConfig,
} from './components/FormCTAQuestions';

export interface FormProps {
    sectionStyles?: string;
    formTitle?: string;
    phoneData?: {
        label: string;
        labelInputStyles?: string;
        phoneInputStyles?: string;
        defaultCountryCode?: CountryCode;
    };
    emailData?: {
        label?: string;
        labelInputStyles?: string;
        emailInputStyles?: string;
    };
    questionsConfig?: FormCTAQuestionsConfig;
    submitButtonStyle?: string;
    submitButtonText?: string;
}

const FormCTA: React.FC<FormProps> = ({
    sectionStyles = '',
    formTitle = 'Form Title',
    phoneData = {
        label: 'Pregunta Celular',
        labelInputStyles: '',
        phoneInputStyles: '',
        defaultCountryCode: 'CO',
    },
    emailData = {
        label: 'Pregunta Correo',
        labelInputStyles: '',
        phoneInputStyles: '',
    },
    questionsConfig,
    submitButtonStyle = '',
    submitButtonText = 'Quiero saber mas.',
}) => {
    const [phoneNumber, setPhoneNumber] = useState<string | undefined>('');
    const [email, setEmail] = useState<string | undefined>('');
    const [answers, setAnswers] = useState<Record<string, string>>({});
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [phoneError, setPhoneError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [allQuestionsAnswered, setAllQuestionsAnswered] = useState(false);

    const validateEmail = (email: string | undefined) => {
        if (!email) return false;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const handleSelect = (newAnswers: Record<string, string>) => {
        setAnswers(newAnswers);
        const allAnswered = questionsConfig?.questions?.every(q => newAnswers[q.question]);
        setAllQuestionsAnswered(allAnswered || false);
    };

    useEffect(() => {
        const isValid = isValidPhoneNumber(phoneNumber || '') && validateEmail(email) && allQuestionsAnswered;
        setIsSubmitting(!isValid);
    }, [phoneNumber, email, allQuestionsAnswered]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        let isValid = true;

        if (!phoneNumber || !isValidPhoneNumber(phoneNumber)) {
            setPhoneError('Por favor ingrese un número de teléfono válido');
            isValid = false;
        } else {
            setPhoneError('');
        }

        if (!email || !validateEmail(email)) {
            setEmailError('Por favor ingrese un correo electrónico válido');
            isValid = false;
        } else {
            setEmailError('');
        }

        if (isValid) {
            console.log({ phoneNumber, email, answers });
        }
    };

    return (
        <form
            onSubmit={handleSubmit}
            className={`max-w-md sm:max-w-[35rem] md:max-w-[50rem] xl:max-w-[60rem] mx-auto ${sectionStyles}`}
        >
            <div
                className={`bg-white w-full px-5 md:px-10 py-6 mx-auto rounded-lg shadow-md flex flex-col items-start`}
            >
                <h3 className="poppins-light-900 text-main-green mx-auto w-[calc(100%-2rem)] sm:w-[calc(100%-2.5rem)] md:w-[calc(100%-3rem)] xl:w-[calc(100%-3.5rem)] text-[1.4rem] leading-[1.4rem] sm:text-[1.6rem] sm:leading-[1.6rem] md:text-[1.8rem] md:leading-[1.8rem] xl:text-[2rem] xl:leading-[2rem] my-6 text-center">
                    {formTitle}
                </h3>
                {phoneData && (
                    <div className="mb-4 w-full">
                        <label
                            htmlFor="phone"
                            className={`block text-gray-700 text-sm md:text-base xl:text-lg font-bold mb-2 ${phoneData.labelInputStyles}`}
                        >
                            {phoneData.label}
                        </label>
                        <PhoneInput
                            international
                            value={phoneNumber}
                            onChange={setPhoneNumber}
                            className={`poppins-light-400 rounded text-gray-700 !w-full !shadow !appearance-none !border !px-2 leading-[2.8rem] focus:outline-none focus:shadow-outline ${phoneData.phoneInputStyles}`}
                            defaultCountry={phoneData.defaultCountryCode}
                        />
                        {phoneError && (
                            <p className="text-red-500 text-xs md:text-sm xl:text-base italic">
                                {phoneError}
                            </p>
                        )}
                    </div>
                )}
                {emailData && (
                    <div className="mb-4 w-full">
                        <label
                            htmlFor="email"
                            className={`block text-gray-700 text-sm md:text-base xl:text-lg font-bold mb-2 ${emailData.labelInputStyles}`}
                        >
                            {emailData.label}
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="shadow appearance-none border border-gray-300 rounded w-full py-2 px-3 md:py-3 xl:py-4 text-gray-700 leading-tight"
                            placeholder="TuCorreo@gmail.com"
                            required
                        /> 
                        {emailError && (
                            <p className="text-red-500 text-xs md:text-sm xl:text-base italic">
                                {emailError}
                            </p>
                        )}
                    </div>
                )}
                {questionsConfig && (
                    <FormCTAQuestions
                        onAnswersChange={handleSelect}
                        {...questionsConfig}
                    />
                )}
                <div className="flex items-center justify-center w-full my-4">
                    <button
                        type="submit"
                        className={
                            'poppins-light-400 text-main-green mt-3 px-5 py-2 xl:py-3 xl:px-8 text-md sm:text-lg md:text-xl rounded-lg ' +
                            submitButtonStyle + (isSubmitting ? ' bg-gray-300 cursor-not-allowed' : ' bg-secondary-green')
                        }
                        disabled={isSubmitting}
                    >
                        {submitButtonText}
                    </button>
                </div>
            </div>
        </form>
    );
};

export default FormCTA;
