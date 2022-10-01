import React from "react";
import web from "../assets/img/aritraghorai.png";
import png from "../assets/img/aritraghorai.png";

type Props = {};

const Hero = (props: Props) => {
  return (
    <div className="container mx-auto relative z-20">
      <div
        className="
      grid grid-cols-1
      lg:grid-cols-2
      items-center
      justify-center
      relative
    "
      >
        <div
          className="
        pt-10
        pb-20
        lg:py-36
        xl:py-48
        text-center
        lg:text-left
        order-2
        lg:order-1
      "
        >
          <h1 className="mb-6 text-blue-500 font-bold text-3xl lg:text-xl">
            Hey, I'm {`{`}
            <span className="text-black dark:text-white">
              Aritra&nbsp;Ghorai
            </span>
            {`}`}
          </h1>
          <h3 className="mb-6 font-semibold text-xl lg:text-4xl">
            I am a self-motivated individual with a strong interest in
            developing scalable application.
          </h3>
          <h3 className="font-semibold text-xl lg:text-4xl">
            In short; I work to make the internet a better experience.
          </h3>
          <a
            href="https://github.com/aritraghorai"
            target="_blank"
            rel="noopener noreferrer"
            className="
          inline-flex
          items-center
          justify-center
          pl-5
          pr-4
          py-3
          font-bold
          text-sm
          bg-blue-500
          hover:bg-blue-400
          focus:bg-blue-600
          text-white
          rounded-full
          shadow-sm
          hover:shadow-md
          focus:shadow-sm
          mt-6
          mr-3
        "
          >
            Find me on GitHub
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="white"
              viewBox="0 0 496 512"
              stroke="white"
            >
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ghoraiaritra"
            target="_blank"
            rel="noopener noreferrer"
            className="
          inline-flex
          items-center
          justify-center
          pl-5
          pr-4
          py-3
          font-bold
          text-sm
          bg-blue-500
          hover:bg-blue-400
          focus:bg-blue-600
          text-white
          rounded-full
          shadow-sm
          hover:shadow-md
          focus:shadow-sm
          mt-6
          mr-3
        "
          >
            Find me on LinkedIn
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-2"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
              />
            </svg>
          </a>
        </div>
        <div
          className="
        flex
        items-center
        justify-center
        relative
        order-1
        lg:order-2
        pt-10
        lg:pt-0
      "
        >
          <img src={web} alt="" className="w-48  md:w-[26rem] " />
        </div>
      </div>
    </div>
  );
};
export default Hero;
