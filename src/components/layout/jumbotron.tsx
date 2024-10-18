const Jumbotron = () => {
    return (
        <section className="bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
                <h1 className="mb-4 text-4xl font-semibold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    SMART SOFTWARE SOLUTIONS
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    Transform your business with our innovative information systems
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a
                        href="#"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-orange-400 hover:bg-orange-600 focus:ring-4 focus:ring-orange-200 dark:focus:ring-orange-800"
                    >
                        Book Free Consultation
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Jumbotron;