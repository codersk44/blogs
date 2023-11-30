import React from "react";

const Footer = () => {
  return (
    <div className="bg-gray-900">
      <div className=" px-4 pt-16 mx-auto sm:max-w-xl md :max-w-full  lg:max-w-screen-xl md:px-24 lg:px-4 ">
        <div>
          <div className="grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4">
            <div className="">
              <p className="font-medium tracking-wide text-gray-200">
                Category
              </p>
              <ul>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    World
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    USA
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    RUSSIA
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="font-medium tracking-wide text-gray-200">OS</p>
              <ul>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    MACOS
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    ANDROID
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    APPLE
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    IOS
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="font-medium tracking-wide text-gray-200">
                TECH
              </p>
              <ul>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    INTERN
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    FRONTEND
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    REACT
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    JS
                  </a>
                </li>
              </ul>
            </div>
            <div className="">
              <p className="font-medium tracking-wide text-gray-200">
                SOCIAL
              </p>
              <ul>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    INSTA
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    FACEBOOK
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    WHATSAPP
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="text-gray-400 transition-colors duration-300 hover:text-orange-500"
                  >
                    API
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
