import { assets } from "@/app/assets/assets";
import Image from "next/image";
import React from "react";

const Footer = ({ isDarkMode }) => {
  return (
    <div className="mt-20">
      <div className="text-center">
        <div className="w-max flex items-center gap-2 mx-auto">
          {isDarkMode ? (
          <div className="cursor-pointer text-3xl text-center font-Ovo font-bold">
            Elavarasan Sekar
          </div>
        ) : (
          <div className="cursor-pointer text-3xl text-center font-Ovo font-bold">
            Elavarasan Sekar
          </div>
        )}
        </div>

        <div className="w-max flex items-center gap-2 mx-auto">
          <Image
            src={isDarkMode ? assets.mail_icon_dark : assets.mail_icon}
            alt=""
            className="w-6"
          />
          elavarasansekar3@gmail.com
        </div>
        <div className="w-max flex items-center gap-2 mx-auto">
          +91 7639569973
        </div>
      </div>

      <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
        <p>© 2025 elavarasanes. All rights reserved.</p>
        <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
          <li>
            <a target="_blank" href="https://github.com/elavarasan-es">
              GitHub
            </a>
          </li>
          <li>
            <a target="_blank" href="https://instagram.com/greatstackdev">
              LinkedIn
            </a>
          </li>
          <li>
            <a target="_blank" href="https://instagram.com/greatstackdev">
              Naukri
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
