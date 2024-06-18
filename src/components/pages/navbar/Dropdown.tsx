import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Dropdown = ({ isOpen, setIsOpen, children }) => {
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {children}
      {isOpen && (
        <div className="absolute left-0 w-48 py-2 mt-2 bg-white border rounded shadow-lg">
          <Link
            to="/services/service1"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            Service 1
          </Link>
          <Link
            to="/services/service2"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            Service 2
          </Link>
          <Link
            to="/services/service3"
            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
          >
            Service 3
          </Link>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
