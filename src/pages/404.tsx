import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
            <div className="text-center">
                <h1 className="text-9xl font-bold">404</h1>
                <p className="text-2xl mt-4">Oops! The page you&apos;re looking for doesn&apos;t exist.</p>
                <p className="mt-4 text-lg">
                    It seems like you&apos;ve taken a wrong turn. Go back to{" "}
                    <Link href="/" className="text-blue-400 hover:text-blue-600">
                        Home
                    </Link>
                    .
                </p>
                <div className="mt-6">
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Go to Home
                    </Link>
                </div>
            </div>
        </div>
    );
}
