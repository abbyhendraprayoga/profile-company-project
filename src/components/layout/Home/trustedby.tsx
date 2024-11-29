import { useState, useEffect } from "react";
import Image from "next/image";

const TrustedBy = () => {
    // State untuk loading
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulasi delay (misalnya, memuat gambar atau data)
        setTimeout(() => {
            setIsLoading(false); // Set loading ke false setelah 2 detik
        }, 2000);
    }, []);

    return (
        <div className="bg-white py-12">
            <div className="overflow-hidden relative w-full">
                <div className="scroll-container flex animate-scroll-infinite space-x-8 justify-center">
                    {/* Tampilkan loading spinner jika isLoading true */}
                    {isLoading ? (
                        <div className="flex justify-center w-full">
                            <div className="animate-spin border-t-4 border-indigo-900 border-solid w-10 h-10 rounded-full" />
                        </div>
                    ) : (
                        <div className="flex space-x-32">
                            {/* Logo Set 1 */}
                            <Image src="/Image/trusted/1.svg" alt="ProSaas" width={100} height={55} />
                            <Image src="/Image/trusted/2.svg" alt="No1 City" width={100} height={55} />
                            <Image src="/Image/trusted/3.svg" alt="Mata" width={100} height={55} />
                            <Image src="/Image/trusted/4.svg" alt="Brand" width={100} height={55} />
                            <Image src="/Image/trusted/5.svg" alt="Tech House" width={100} height={55} />
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default TrustedBy;
