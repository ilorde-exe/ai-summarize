import React from "react";

const Hero = () => {
  return (
    <header className="w-full flex justify-center items-center flex-col">
      {/* Logo for the app */}
      <nav className="flex items-center justify-between mb-10 pt-3 w-full">
        <div className=" object-contain flex justify-center items-center">
          <img src="src\assets\logo.svg" alt="image" className="w-16" />
          <h1 className="flex font-satoshi text-4xl font-extrabold py-1 mb-2 text-center ">
            Summr
            <h1 className="font-satoshi text-4xl font-extrabold text-center text-transparent bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500 bg-clip-text">
              AI
            </h1>
            ze
          </h1>
        </div>
        {/* Github button */}
        <button
          type="button"
          class="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 mr-2 mb-2"
        >
          <svg
            class="w-4 h-4 mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fill-rule="evenodd"
              d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
              clip-rule="evenodd"
            />
          </svg>
          Github
        </button>
      </nav>
      <h1 className=" pb-4 mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center">
        Summarize any
        <br className=" max-md:hidden" />
        <span className="pl-2">text with</span>
        <br className=" max-md:hidden" />
        <span className=" pl-2 text-transparent bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text">
          OpenAI GPT
        </span>
      </h1>
      <h2 className="mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl">
        Make your reading a breeze with SummrAIze an open source text summarizer that uses OpenAi's state of the art GPT models to transform long and lengthy articles into bite sized summaries. 
      </h2>
    </header>
  );
};

export default Hero;
