import { useState } from "react";
import { signIn } from "next-auth/react";
import { HiEye, HiEyeOff } from "react-icons/hi";

export default function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Reset error state before attempting login
        setError("");

        const result = await signIn("credentials", {
            redirect: false,
            email,
            password,
        });

        if (result?.error) {
            setError("Invalid email or password. Please try again.");
        } else {
            window.location.href = "/";
        }
    };

    return (
        <div className="flex flex-col lg:flex-row min-h-screen bg-cover bg-center bg-[url('https://s3-alpha-sig.figma.com/img/9305/b68e/1a5930ae3c33b038c88eed7bef7da0fd?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=inngVRFJtl~Puy17EKTz8PE1vRwYmafOH3N82QuqlmktPjAX25FtA1zP4H0Y4lhR74EsaXazS2wcT1A73n9wbBs6fntAT1g~AzLJIJ9JpIFvZKqXvodhDl6qGvfAfBngquhbMriqcqXM9-i00-PAmZMeC9lj33POA3i30UeE2eo6ynmLm9PrPow9TX1q-YUxD02cECMBAW07o9IVRfmyBl0wwCmknMur2TYFgy~e1x5pForHyS6gZZDOusULJEcgoYSY4-BWYtCyeERyNOxQ-e78mHUFu4QpI2~nUO43yCaX4yKKzbXOKf4E4GydJ0QeDm7P1z2tnAakFTo9wULzUw__')]">
            {/* Left Container - Hide on small screens */}
            <div className="hidden lg:flex-1 lg:flex lg:justify-center lg:items-center lg:p-12 text-white bg-gradient-to-r from-orange-500 via-amber-500 to-orange-500 bg-opacity-70">
                <div>
                    <h1 className="text-4xl font-bold">WELCOME TO DIMATA</h1>
                    <h2 className="text-2xl font-semibold mb-6">SMART SOFTWARE SOLUTIONS</h2>
                </div>
            </div>

            {/* Right Container */}
            <div className="flex-1 flex justify-center items-center bg-gray-400 bg-opacity-60 p-6">
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
                    <h1 className="text-3xl font-semibold text-amber-500 mb-6 text-center">
                        Login
                    </h1>

                    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                        {/* Email Input */}
                        <div>
                            <label htmlFor="email" className="text-sm font-semibold text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                placeholder="you@example.com"
                            />
                        </div>

                        {/* Password Input */}
                        <div className="relative">
                            <label htmlFor="password" className="text-sm font-semibold text-gray-700">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                className="w-full mt-2 p-2 pr-10 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500"
                                placeholder="Enter your password"
                            />

                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute top-[2.6rem] right-3 text-gray-500"
                            >
                                {showPassword ? <HiEyeOff size={24} /> : <HiEye size={24} />}
                            </button>
                        </div>

                        {/* Error Message */}
                        {error && (
                            <div className="text-red-500 text-sm mt-2 text-center">
                                {error}
                            </div>
                        )}

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="bg-amber-500 text-white py-2 rounded-md hover:bg-amber-600 transition duration-200 font-semibold"
                        >
                            Login
                        </button>
                    </form>

                    {/* Footer */}
                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Dont have an account?{" "}
                            <a
                                href="/register"
                                className="text-amber-500 font-semibold hover:underline"
                            >
                                Register
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
