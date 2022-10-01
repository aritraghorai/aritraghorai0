import React, { useEffect, useState } from "react";

import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Projects from "../Components/Projects";

type Props = {};

const Home = (props: Props) => {
  const [theme, toggleTheme] = useState("light");
  const changeTheme = () => {
    if (theme === "dark") {
      toggleTheme("light");
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    } else {
      toggleTheme("dark");
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    }
  };
  useEffect(() => {
    if (
      localStorage.getItem("theme") == "dark" ||
      !localStorage.getItem("theme")
    ) {
      toggleTheme("dark");
      document.documentElement.classList.add("dark");
    }
  }, [theme]);
  return (
    <div className="relative overflow-hidden">
      <Hero />
      <button
        className="
        theme-toggle
        z-50
        fixed
        top-4
        right-4
        rounded-full
        bg-blue-500
        hover:bg-blue-400
        focus:bg-blue-600
        p-3
        font-semibold
        text-sm
        shadow-lg
        hover:shadow-md
      "
        aria-label="Toggle Theme"
        onClick={changeTheme}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 fill-current text-white ${
            theme === "light" ? "" : "hidden"
          }`}
          viewBox="0 0 20 20"
        >
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
        <svg
          v-if="this.themeMode === 'light'"
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 fill-current text-white ${
            theme === "dark" ? "" : "hidden"
          }`}
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      </button>
      <Projects />
      <Footer />
    </div>
  );
};

export default Home;
