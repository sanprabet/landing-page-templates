import React, { useState } from 'react';

interface FormCTAQuestionProps {
    question: string;
    options: string[];
    onSelect?: (question: string, option: string) => void;
    selectedOption?: string;
}

const FormCTAQuestion: React.FC<FormCTAQuestionProps> = ({
    question,
    options = [],
    onSelect = () => { console.error('Assign onSelect function'); },
    selectedOption,
}) => {
    return (
        <div key={question} className="mb-4 w-full">
            <label className="block text-gray-700 text-sm md:text-base lg:text-lg font-bold mb-2">
                {question}
            </label>
            <div className="switch_3_ways_v2 flex justify-start relative">
                {options.map((option, idx) => (
                    <div
                        key={idx}
                        id={`option${idx}`}
                        className={`switch2 px-4 py-2 mr-1 md:px-6 md:py-2 lg:px-8 lg:py-2 text-sm md:text-base lg:text-lg text-center rounded-full cursor-pointer transition-colors duration-300 ${selectedOption === option ? 'bg-green-500 text-white' : 'bg-gray-300 text-gray-700'}`}
                        onClick={() => onSelect(question, option)}
                    >
                        {option}
                    </div>
                ))}
            </div>
        </div>
    );
};

export interface FormCTAQuestionsConfig {
    questions?: {
        question: string;
        options: {
            option: string;
            derivedQuestions?: FormCTAQuestionProps[];
        }[];
    }[];
}

interface FormCTAQuestionsProps extends FormCTAQuestionsConfig {
    onAnswersChange: (answer: Record<string, string>) => void;
}

const FormCTAQuestions: React.FC<FormCTAQuestionsProps> = ({
    questions = [],
    onAnswersChange,
}) => {
    const [answers, setAnswers] = useState<Record<string, string>>({});

    const handleSelect = (question: string, option: string) => {
        const newAnswers = { ...answers, [question]: option };
        setAnswers(newAnswers);
        onAnswersChange(newAnswers);
    };

    return (
        <>
            {questions.map((q, id) => (
                <div key={id}>
                    <FormCTAQuestion
                        question={q.question}
                        options={q.options.map((option) => option.option)}
                        onSelect={handleSelect}
                        selectedOption={answers[q.question]}
                    />
                    {q.options.map((option, idy) => (
                        <div key={idy}>
                            {option.option === answers[q.question] && option.derivedQuestions?.map((dq, idx) => (
                                <FormCTAQuestion
                                    key={idx}
                                    question={dq.question}
                                    options={dq.options}
                                    onSelect={handleSelect}
                                    selectedOption={answers[dq.question]}
                                />
                            ))}
                        </div>
                    ))}
                </div>
            ))}
        </>
    );
};

export default FormCTAQuestions;
