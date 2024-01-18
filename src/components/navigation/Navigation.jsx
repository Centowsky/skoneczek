import React from "react";

const Navigation = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-around items-center">
        <a href="/" className="text-white text-xl font-bold">
          Logo
        </a>
        <ul className="flex space-x-16 justify-between">
          <li>
            <a href="#home" className="text-white hover:text-gray-300">
              Strona główna
            </a>
          </li>
          <li>
            <a href="#about" className="text-white hover:text-gray-300">
              Firma
            </a>
          </li>
          <li>
            <a href="#galeria" className="text-white hover:text-gray-300">
              Galeria
            </a>
          </li>
          <li>
            <a href="#contact" className="text-white hover:text-gray-300">
              Kontakt
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navigation;
