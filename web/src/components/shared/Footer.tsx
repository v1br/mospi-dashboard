import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t-2 border-gray-300 mt-4 md:mt-12 mb-4 py-4 text-center text-sm text-secondary">
      <p className="mx-auto w-1/2 md:w-full">
        © {new Date().getFullYear()} <span className="font-medium text-gray-800">MoSPI Dashboard</span>. 
        Built with <span className="text-blue-600 font-semibold">React</span> and <span className="text-yellow-600 font-semibold">Chart.js</span>.
      </p>
    </footer>
  );
};

export default Footer;
