import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col bg-primary">
      <div className="grid grid-cols-2 md:grid-cols-5">
        <div className="col-span-2">
          <ul className="pl-10 md:pl-20 pt-28">
            <li>
              <h1 className="text-white font-bold text-2xl">DIMATA</h1>
            </li>
            <li>
              <p className="text-white pt-5 text-xl">
                Jl. Danau Tempe No.21A, Sidakarya, Denpasar Selatan, Kota
                Denpasar, Bali 80224
              </p>
            </li>
            <li>
              <h1 className="pt-5 text-white font-bold text-xl">Contact Us</h1>
            </li>
            <li>
              <p className="text-white text-xl">marketing@dimata.com</p>
            </li>
            <li>
              <p className="text-white text-xl">+62 361 448-4425</p>
            </li>
            <li>
              <h1 className="text-white font-bold pt-5 text-xl">Follow Us</h1>
            </li>
            <li className="flex row pt-2 gap-2">
              <a href="#">
                <Image src={"/facebook.svg"} width={50} height={50} />
              </a>
              <a href="#" className="pt-1">
                <Image src={"/instagram.svg"} width={40} height={40} />
              </a>
              <a href="#">
                <Image src={"/in.svg"} width={50} height={50} />
              </a>
            </li>
          </ul>
        </div>
        <ul className="pt-28 pl-10">
          <li>
            <h1 className="font-bold text-white text-2xl">Company</h1>
          </li>
          <li className="pt-2">
            <p className="text-white text-xl">About</p>
          </li>
          <li className="pt-2">
            <p className="text-white text-xl">Our Services</p>
          </li>
          <li className="pt-2">
            <p className="text-white text-xl">Our Products</p>
          </li>
          <li className="pt-2">
            <p className="text-white text-xl">Our Projects</p>
          </li>
          <li className="pt-2">
            <p className="text-white text-xl">Contact</p>
          </li>
        </ul>
        <ul className="pt-28 pl-10">
          <li>
            <h1 className="font-bold text-white text-2xl">Resource</h1>
          </li>
          <li className="pt-2">
            <p className="text-white text-xl">Help</p>
          </li>
          <li className="pt-2">
            <p className="text-white text-xl">Community</p>
          </li>
          <li className="pt-2">
            <p className="text-white text-xl">Forum</p>
          </li>
          <li className="pt-2">
            <p className="text-white text-xl">Training</p>
          </li>
        </ul>
        <ul className="pt-28 pl-10">
          <li>
            <h1 className="font-bold text-white text-2xl">Legal</h1>
          </li>
          <li className="pt-2">
            <p className="text-white text-xl">Terms & Conditions</p>
          </li>
          <li className="pt-2">
            <p className="text-white text-xl">Privacy</p>
          </li>
          <li className="pt-2">
            <p className="text-white text-xl">Licenses</p>
          </li>
        </ul>
      </div>
      <div className="flex justify-center pt-28">
        <p className="text-white">© 2024 Dimata. All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
