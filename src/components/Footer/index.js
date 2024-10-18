import React from "react";
import { FaFacebook, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex bg-primary pb-36">
      <div className="grid grid-cols-4">
        <ul className="pl-20 pt-28">
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
          <li className="flex row">
            <span>
              <FaFacebook className="text-4xl pt-2" />
            </span>
            <span>
              <FaInstagram className="text-4xl pt-2" />
            </span>
          </li>
        </ul>
        <ul></ul>
        <ul></ul>
        <ul></ul>
      </div>
    </div>
  );
};

export default Footer;
