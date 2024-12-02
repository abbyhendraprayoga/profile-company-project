import { useState, useEffect } from "react";

// Komponen Jumbotron dengan skeleton loading
const Jumbotron = () => {
    const [isLoading, setIsLoading] = useState(true);

    // Simulasi delay loading data (bisa diganti dengan data fetch asli)
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000); // Delay untuk simulasi loading
    }, []);

    if (isLoading) {
        return (
            <section className="bg-center bg-cover min-h-screen bg-gray-200 bg-blend-multiply animate-pulse">
                <div className="px-4 mx-auto max-w-screen-xl text-center py-[30vh] lg:py-56">
                    <div className="h-10 bg-gray-300 rounded mb-4 w-1/2 mx-auto"></div>
                    <div className="h-5 bg-gray-300 rounded mb-8 w-3/4 mx-auto"></div>
                    <div className="h-10 bg-gray-300 rounded w-40 mx-auto"></div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-center bg-cover min-h-screen bg-no-repeat bg-[url('/Image/jumbotron.svg')] bg-gray-200 bg-blend-multiply">
            <div className="px-4 mx-auto max-w-screen-xl text-center py-[30vh] lg:py-56">
                <h1 className="mb-4 text-4xl font-bold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
                    SMART SOFTWARE <br /> SOLUTIONS
                </h1>
                <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
                    Transform your business with our innovative information systems
                </p>
                <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-y-0">
                    <a
                        href="https://wa.me/623614484425?text=Hello%20I%20would%20like%20to%20book%20a%20free%20consultation"
                        target="_blank"
                        className="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white bg-amber-500 hover:bg-amber-600"
                    >
                        Book Free Consultation
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Jumbotron;
