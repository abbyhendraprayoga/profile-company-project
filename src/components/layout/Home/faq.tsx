import { useState, useEffect } from 'react';
import Image from 'next/image';

const faqData = [
    { id: 1, question: 'What technologies are commonly used to build software at Dimata IT Solutions?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vehicula diam, in elementum tellus convallis ac.' },
    { id: 2, question: 'What technologies are commonly used to build software at Dimata IT Solutions?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vehicula diam, in elementum tellus convallis ac.' },
    { id: 3, question: 'What technologies are commonly used to build software at Dimata IT Solutions?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vehicula diam, in elementum tellus convallis ac.' },
    { id: 4, question: 'What technologies are commonly used to build software at Dimata IT Solutions?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vehicula diam, in elementum tellus convallis ac.' },
    { id: 5, question: 'What technologies are commonly used to build software at Dimata IT Solutions?', answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vehicula vehicula diam, in elementum tellus convallis ac.' },
];

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    const handleClick = (index: number) => {
        setActiveIndex(index === activeIndex ? null : index); // Toggle the active index
    };

    useEffect(() => {
        // Simulating an API call delay
        setTimeout(() => {
            setIsLoading(false);
        }, 1500); // Simulate 1.5 seconds loading
    }, []);

    if (isLoading) {
        return (
            <div className="flex flex-col gap-5 p-5 sm:px-10 lg:px-32">
                <div className="flex flex-col gap-3">
                    <div>
                        <hr className="w-9 bg-indigo-900 h-0.5" />
                        <span className="text-indigo-900 font-medium">FAQ</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                        Frequently Asked Questions
                    </h1>
                </div>
                <div className="flex justify-center items-center">
                    <span className="text-lg text-indigo-900">Loading...</span>
                </div>
            </div>
        );
    }

    return (
        <div className="flex flex-col gap-5 p-5 sm:px-10 lg:px-32">
            <div className="flex flex-col gap-3">
                <div>
                    <hr className="w-9 bg-indigo-900 h-0.5" />
                    <span className="text-indigo-900 font-medium">FAQ</span>
                </div>
                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800">
                    Frequently Asked Questions
                </h1>
            </div>
            <div className="flex flex-col justify-center items-center gap-5">
                {faqData.map((item, index) => (
                    <div
                        key={item.id}
                        className={`group flex flex-col justify-between border-2 border-indigo-900 w-full sm:w-[90%] lg:w-full cursor-pointer
        ${activeIndex === index ? 'bg-indigo-900 text-white' : 'bg-white hover:bg-indigo-900 hover:text-white transition-all duration-300 ease-in-out'}`}
                        onClick={() => handleClick(index)}
                    >
                        <div className="flex flex-row justify-between items-center w-full p-4 sm:p-5">
                            <h1
                                className={`text-lg sm:text-xl font-bold text-gray-800 group-hover:text-white
                ${activeIndex === index ? 'text-white' : ''}`}
                            >
                                {item.question}
                            </h1>
                            <Image
                                src="/Image/icons/down.svg"
                                alt="down"
                                width={20}
                                height={20}
                                className={`transform transition-transform duration-300 ease-in-out
                ${activeIndex === index ? 'rotate-180' : ''}`}
                            />
                        </div>

                        {/* Answer Section with Smooth Animation */}
                        <div
                            className={`overflow-hidden transition-all duration-500 ease-in-out
            ${activeIndex === index ? 'max-h-[500px]' : 'max-h-0'}`}
                        >
                            {activeIndex === index && (
                                <div className="p-4 sm:p-5 text-gray-800 bg-white">
                                    <p>{item.answer}</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
