import Link from "next/link";

export default function NotFound() {
    return (
        <div className="flex items-center justify-center h-screen bg-gray-900 text-white">
            <div className="text-center">
                <h1 className="text-9xl font-bold">404</h1>
                <p className="text-2xl mt-4">Page Under Development</p>
                <p className="mt-4 text-lg">
                    This page is currently under development and cannot be accessed. Please return to the previous page or visit our{" "}
                    <Link href="/" className="text-blue-400 hover:text-blue-600">
                        Homepage
                    </Link>
                    .
                </p>
                <div className="mt-6">
                    <Link
                        href="/"
                        className="inline-block px-6 py-3 text-lg font-semibold text-white bg-blue-600 rounded-md hover:bg-blue-700 transition duration-200"
                    >
                        Go to Homepage
                    </Link>
                </div>
            </div>
        </div>
    );
}
