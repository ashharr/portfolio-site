import { useEffect, useState } from "react";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import Timeline from "./components/Timeline";
import { SunIcon, MoonIcon, DownloadIcon } from "./components/Icons";

function App() {
  const [theme, setTheme] = useState(() => {
    // Initialize theme based on system preference
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  });

  // Handle theme changes
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const handleThemeSwitch = () => {
    setTheme(prevTheme => prevTheme === "dark" ? "light" : "dark");
  };

  return (
    <>
      <button
        type="button"
        onClick={handleThemeSwitch}
        className="fixed p-2 z-10 right-20 top-4 bg-violet-300 dark:bg-orange-300 text-lg rounded-md hover:opacity-90 transition-opacity"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
      >
        {theme === "dark" ? <SunIcon /> : <MoonIcon />}
      </button>

      <a 
        href="https://drive.google.com/uc?export=download&id=13cHunDqJtciIpXIaBBF8qNP4UxB64Lfn"
        className="absolute top-4 left-20 bg-violet-300 dark:bg-orange-300 hover:bg-blue-500 dark:hover:bg-teal-200 text-sm text-white dark:text-stone-800 font-bold py-2 px-4 rounded-md inline-flex items-center gap-2 transition-colors"
      >
        <DownloadIcon />
        Resume
      </a>

      <div className="bg-white dark:bg-stone-900 text-stone-900 dark:text-stone-300 min-h-screen font-inter">
        <div className="max-w-5xl w-11/12 mx-auto">
          <Intro />
          <Portfolio />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
