import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import Dropdown from './Dropdown';
import logo from '../../../../public/assets/logo.svg';
import UseMediaQuery from '../../../hooks/UseMediaQuery';
import { setCurrentPage } from '../../../reducers/buttonSlice';
import { CurrentPage } from '../../../shared/types';
import Button from '../../buttons/Button';

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<number | null>(null);
  const dispatch = useDispatch();
  const isAboveMediumScreens = UseMediaQuery('(min-width: 1060px)');
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        if (window.scrollY > 0) {
          navbar.classList.add('floating');
        } else {
          navbar.classList.remove('floating');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLinkClass = (path: string) => {
    return location.pathname === path ? 'text-[#0D65BE]' : '';
  };

  const handleMouseEnter = () => {
    if (dropdownTimeout) {
      clearTimeout(dropdownTimeout);
      setDropdownTimeout(null);
    }
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const timeoutId = window.setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Adjust the delay as needed
    setDropdownTimeout(timeoutId);
  };

  const renderLink = (
    path: string,
    label: string,
    currentPage: CurrentPage
  ) => (
    <Link
      to={path}
      onClick={() => dispatch(setCurrentPage(currentPage))}
      className={getLinkClass(path)}
    >
      {label}
    </Link>
  );

  return (
    <header>
      <nav>
        <div className="w-full fixed top-0 font-libre text-[#1E1E1E] z-50">
          {isAboveMediumScreens ? (
            <div className="mx-auto bg-white navbar md:w-5/6 xl:w-4/6 flex items-center justify-between">
              <div>
                <Link
                  to="/"
                  onClick={() => dispatch(setCurrentPage(CurrentPage.Home))}
                >
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className="flex gap-10 text-md">
                {renderLink('/', 'Home', CurrentPage.Home)}
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <Link
                    to="/services"
                    onClick={() =>
                      dispatch(setCurrentPage(CurrentPage.Services))
                    }
                    className={`${getLinkClass('/services')} flex items-center`}
                  >
                    Services
                    <svg
                      className="w-4 h-4 ml-1"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M19 9l-7 7-7-7"
                      ></path>
                    </svg>
                  </Link>
                  {isDropdownOpen && (
                    <Dropdown
                      onMouseEnter={handleMouseEnter}
                      onMouseLeave={handleMouseLeave}
                    />
                  )}
                </div>
                {renderLink('/projects', 'Projects', CurrentPage.Projects)}
                {renderLink('/contact', 'Contact', CurrentPage.Contact)}
              </div>
              <div>
                <Button
                  targetPage={CurrentPage.Contact}
                  style="bg-[#003366] text-white border-none rounded-lg"
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          ) : (
            <div className="px-5">
              <div className="flex navbar justify-between">
                <div>
                  <Link
                    to="/"
                    onClick={() => dispatch(setCurrentPage(CurrentPage.Home))}
                  >
                    <img src={logo} alt="logo" className="h-16" />
                  </Link>
                </div>
                <div>
                  <button
                    aria-label="Toggle Menu"
                    className="rounded-full bg-[#003366] z-40 p-2 my-4"
                    onClick={() => setIsMenuToggled(!isMenuToggled)}
                  >
                    {!isMenuToggled ? (
                      <Bars3Icon className="size-6 text-white" />
                    ) : (
                      <XMarkIcon className="size-6 text-rose-400" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="top-0 fixed z-40">
            <div className="relative">
              <div className="fixed inset-0 z-30 h-screen drop-shadow-xl">
                <div
                  className="flex flex-col text-xl justify-center bg-blue-50 pt-20 h-[50%] duration-300 ease-in-out items-center gap-5"
                  onClick={() => setIsMenuToggled(false)}
                >
                  {renderLink('/', 'Home', CurrentPage.Home)}
                  {renderLink('/services', 'Services', CurrentPage.Services)}
                  {renderLink('/projects', 'Projects', CurrentPage.Projects)}
                  {renderLink('/contact', 'Contact', CurrentPage.Contact)}
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
