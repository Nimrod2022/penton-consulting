import React from 'react';
import { Link } from 'react-router-dom';

interface DropdownProps {
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}

const Dropdown: React.FC<DropdownProps> = ({ onMouseEnter, onMouseLeave }) => {
  return (
    <div
      className="absolute left-0 mt-2 md:w-60 bg-white text-sm border border-gray-200 rounded-md shadow-lg"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link
        to="/services/engineering"
        className="block px-4 py-2 hover:text-[#0D65BE]  hover:bg-gray-100"
      >
        Engineering services
      </Link>
      <Link
        to="/services/energy"
        className="block px-4 py-2 hover:text-[#0D65BE] hover:bg-gray-100"
      >
        Energy compliance
      </Link>
      <Link
        to="/services/environment"
        className="block px-4 py-2 hover:text-[#0D65BE] hover:bg-gray-100"
      >
        Environmental services
      </Link>
      <Link
        to="/services/quotations"
        className="block px-4 py-2 hover:text-[#0D65BE] hover:bg-gray-100"
      >
        Project quotations
      </Link>
    </div>
  );
};

export default Dropdown;
