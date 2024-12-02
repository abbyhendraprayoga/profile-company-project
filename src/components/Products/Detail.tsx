import Footer from "../layout/Footer/index";
import Link from "next/link";
import Image from "next/image";

interface Props {
  product: Product | null;
  closeDet: () => void;
}

interface Product {
  name: string;
  detail: string;
  description: string;
  image: string;
  id: string;
  category: string;
}

const DetailIcons = [
  {
    name: "Expertise and Innovation",
    description:
      "Our team comprises industry experts who leverage the latest technologies to create innovative software solutions tailored to your needs.",
    images: "/Image/products/icon.svg",
    id: "1",
  },
  {
    name: "Expertise and Innovation",
    description:
      "Our team comprises industry experts who leverage the latest technologies to create innovative software solutions tailored to your needs.",
    images: "/Image/products/icon.svg",
    id: "2",
  },
  {
    name: "Expertise and Innovation",
    description:
      "Our team comprises industry experts who leverage the latest technologies to create innovative software solutions tailored to your needs.",
    images: "/Image/products/icon.svg",
    id: "3",
  },
  {
    name: "Expertise and Innovation",
    description:
      "Our team comprises industry experts who leverage the latest technologies to create innovative software solutions tailored to your needs.",
    images: "/Image/products/icon.svg",
    id: "4",
  },
  {
    name: "Expertise and Innovation",
    description:
      "Our team comprises industry experts who leverage the latest technologies to create innovative software solutions tailored to your needs.",
    images: "/Image/products/icon.svg",
    id: "5",
  },
  {
    name: "Expertise and Innovation",
    description:
      "Our team comprises industry experts who leverage the latest technologies to create innovative software solutions tailored to your needs.",
    images: "/Image/products/icon.svg",
    id: "6",
  },
];

const Detail = ({ product, closeDet }: Props) => {
  return (
    <div>
      <div className="flex flex-col">
        <div className=" bg-[url('https://images.unsplash.com/photo-1563986768711-b3bde3dc821e?q=80&w=2068&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-center bg-cover bg-no-repeat relative h-[500px] bg-neutral-500 bg-blend-multiply -z-10 flex flex-col">
          <div className="flex justify-center items-center pt-56 pb-72">
            <h1 className="text-5xl text-white font-bold">{product?.name}</h1>
          </div>
          <div>
            <div className="flex flex-col md:flex-row justify-center items-center p-5 md:p-20">
              <div className="flex flex-col md:flex-row gap-20">
                <div className="pb-5 md:pb-0 pr-20">
                  <button
                    onClick={closeDet}
                    className="absolute cursor-pointer w-8 h-8 text-indigo-900"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="size-10"
                    >
                      <path d="M15.75 19.5 8.25 12l7.5-7.5" />
                    </svg>
                  </button>
                </div>
                <div className="relative">
                  <img
                    src={product?.image}
                    alt={product?.detail}
                    width={450}
                    height={40}
                    className="h-auto rounded-lg"
                  />
                  <span className="absolute bottom-3 md:bottom-5 left-4 px-4 lg:px-10 py-2 lg:py-4 text-black bg-white rounded-md font-bold text-xs md:text-sm lg:text-base">
                    {product?.name}
                  </span>
                </div>
              </div>
              <div className="flex flex-col w-full md:w-1/2 lg:w-1/4">
                <div className="px-4 pt-10 md:pt-0">
                  <hr className="w-9 bg-indigo-900 h-0.5" />
                  <span className="text-indigo-900 text-xl font-medium">
                    About Products
                  </span>
                </div>
                <h1 className=" text-2xl font-bold px-4 pt-5">
                  {product?.detail}
                </h1>
                <p className=" text-xl px-4 text-gray-600 pt-2">
                  {product?.description}
                </p>
                <div className="flex space-y-4 mt-5 pl-4">
                  <Link
                    href="/AboutPage"
                    className="inline-flex py-3 px-10 text-base font-medium text-center text-white bg-indigo-800 hover:bg-indigo-900"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center items-center md:flex-col pt-10 pb-3">
              <hr className=" w-16 bg-indigo-900 font-weight h-0.5" />
              <p
                data-aos="zoom-in"
                className="text-indigo-900 font-medium text-shadow text-center"
              >
                BENEFITS PRODUCT
              </p>
              <h1 className="text-2xl text-black font-bold">
                How Our Product Helps You
              </h1>
            </div>
            <div className="grid grid-cols-3 pt-16 px-32 gap-5 pb-32">
              {DetailIcons.map((icon) => (
                <div key={icon.id}>
                  <div>
                    <Image
                      src={icon.images}
                      width={50}
                      height={50}
                      alt={icon.name}
                      className=" pt-5"
                    />
                    <h1 className="pt-5 font-bold text-black text-2xl">
                      {icon.name}
                    </h1>
                    <p className="pt-2 text-xl text-gray-600">
                      {icon.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
