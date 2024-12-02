import Image from "next/image";

const OurProjects = () => {
    return (
        <div className="flex flex-col gap-3 lg:py-32">
            {/* Section 1 */}
            <div className="flex flex-col lg:flex-row gap-5">
                {/* Images on large screens */}
                <div className="hidden lg:block flex-1">
                    <Image src="/Image/projects/1.svg" alt="Image 1" width={322} height={322} />
                </div>
                <div className="hidden lg:block flex-1">
                    <Image src="/Image/projects/1.svg" alt="Image 1" width={322} height={322} />
                </div>

                {/* Content Section */}
                <div className="flex p-6 lg:pr-32 justify-end w-full">
                    <div className="flex flex-col justify-start items-end w-full gap-3">
                        <div className="flex flex-col justify-start items-end">
                            <hr className="w-9 bg-indigo-900 h-0.5" />
                            <span className="text-indigo-900 font-medium">OUR PROJECTS</span>
                        </div>
                        <h1 className="text-3xl text-end sm:text-4xl font-bold text-gray-800 lg:w-[30rem]">
                            Transforming ideas into impactful solutions for our clients.
                        </h1>
                        <div className="flex flex-row space-y-4 mt-3">
                            <a
                                href="#"
                                className="inline-flex py-3 px-10 text-base font-medium text-center text-white bg-indigo-800 hover:bg-indigo-900"
                            >
                                See All
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Section 2 */}
            <div className="flex flex-col lg:flex-row gap-5">
                {/* Images for large screens */}
                <div className="hidden lg:block flex-1">
                    <Image src="/Image/projects/1.svg" alt="Image 1" width={322} height={322} />
                </div>
                <div className="hidden lg:block flex-1">
                    <Image src="/Image/projects/1.svg" alt="Image 1" width={322} height={322} />
                </div>
                <div className="hidden lg:block flex-1">
                    <Image src="/Image/projects/1.svg" alt="Image 1" width={322} height={322} />
                </div>
                <div className="hidden lg:block flex-1">
                    <Image src="/Image/projects/1.svg" alt="Image 1" width={322} height={322} />
                </div>
            </div>
        </div>
    );
}

export default OurProjects;
