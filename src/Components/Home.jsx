import React from "react";

const Home = () => {
  return (
   <div className="w-full bg-gradient-to-br px-4 sm:px-6 lg:px-8 py-12">
  <div className="max-w-5xl mx-auto text-center space-y-6">
    <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-500 transition duration-700 ease-in-out hover:scale-105">
      Learn React with Interactive Components
    </h1>

    <p className="text-base sm:text-lg md:text-xl text-yellow-600 max-w-3xl mx-auto transition duration-700 ease-in-out hover:text-gray-800">
      Discover the power of React — a JavaScript library for building fast, modular, and scalable UIs with reusable components and hooks.
    </p>

    <div className="flex justify-center">
      <button className="mt-2 px-6 py-3 bg-indigo-600 text-white text-sm sm:text-base rounded-md shadow-md transition duration-300 ease-in-out hover:bg-indigo-700 hover:scale-105">
        Start Learning React
      </button>
    </div>
  </div>

  <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-2 sm:px-0">
    {[
      {
        title: "JSX & Components",
        description:
          "Build reusable UI elements with JSX — a syntax extension that blends JavaScript and HTML.",
      },
      {
        title: "State & Props",
        description:
          "Pass data with props and manage local UI state to create interactive applications.",
      },
      {
        title: "Hooks & Lifecycle",
        description:
          "Use powerful React hooks like useState and useEffect to handle side effects and app logic.",
      },
    ].map((card, index) => (
      <div
        key={index}
        className="group bg-white rounded-xl shadow-lg p-6 text-left transition-all duration-500 hover:shadow-xl hover:scale-105 hover:-translate-y-1"
      >
        <h2 className="text-lg sm:text-xl font-semibold text-gray-800 mb-2 transition duration-300 group-hover:text-indigo-600">
          {card.title}
        </h2>
        <p className="text-sm sm:text-base text-gray-600 transition duration-300 group-hover:text-gray-800">
          {card.description}
        </p>
      </div>
    ))}
  </div>
</div>

  );
};

export default Home;
