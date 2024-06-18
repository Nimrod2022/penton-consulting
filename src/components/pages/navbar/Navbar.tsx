import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../../public/assets/logo.svg';
import UseMediaQuery from '../../../hooks/UseMediaQuery';
import { setCurrentPage } from '../../../reducers/buttonSlice';
import { CurrentPage } from '../../../shared/types';
import Button from '../../buttons/Button';

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
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

    handleScroll();
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const getLinkClass = (path: string) => {
    return location.pathname === path ? 'text-[#0D65BE]' : '';
  };

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
                <Link
                  to="/"
                  onClick={() => dispatch(setCurrentPage(CurrentPage.Home))}
                  className={getLinkClass('/')}
                >
                  Home
                </Link>
                <div
                  className="relative"
                  onMouseEnter={() => setIsDropdownOpen(true)}
                  onMouseLeave={() => setIsDropdownOpen(false)}
                >
                  <Link
                    to="/services"
                    onClick={() => dispatch(setCurrentPage(CurrentPage.Services))}
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
                    <div
                      className="absolute left-0 w-48 py-2 mt-2 bg-white border rounded shadow-lg"
                      onMouseEnter={() => setIsDropdownOpen(true)}
                      onMouseLeave={() => setIsDropdownOpen(false)}
                    >
                      <Link
                        to="/services/service1"
                        onClick={() => {
                          dispatch(setCurrentPage(CurrentPage.Services));
                          setIsDropdownOpen(false);
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        Service 1
                      </Link>
                      <Link
                        to="/services/service2"
                        onClick={() => {
                          dispatch(setCurrentPage(CurrentPage.Services));
                          setIsDropdownOpen(false);
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        Service 2
                      </Link>
                      <Link
                        to="/services/service3"
                        onClick={() => {
                          dispatch(setCurrentPage(CurrentPage.Services));
                          setIsDropdownOpen(false);
                        }}
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-200"
                      >
                        Service 3
                      </Link>
                    </div>
                  )}
                </div>
                <Link
                  to="/projects"
                  onClick={() => dispatch(setCurrentPage(CurrentPage.Projects))}
                  className={getLinkClass('/projects')}
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  onClick={() => dispatch(setCurrentPage(CurrentPage.Contact))}
                  className={getLinkClass('/contact')}
                >
                  Contact
                </Link>
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
                  <Link to="/" onClick={() => dispatch(setCurrentPage(CurrentPage.Home))}>
                    <img src={logo} alt="logo" className="h-16" />
                  </Link>
                </div>
                <div className="">
                  {!isMenuToggled ? (
                    <button
                      aria-label="Toggle Menu"
                      className="rounded-full bg-[#003366] z-40 p-2 my-4"
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                    >
                      <Bars3Icon className="size-6 text-white" />
                    </button>
                  ) : (
                    <button
                      aria-label="Toggle Menu"
                      onClick={() => setIsMenuToggled(!isMenuToggled)}
                      className="rounded-full bg-[#003366] z-50 my-4"
                      style={{ position: 'relative' }}
                    >
                      <XMarkIcon className="size-10 text-rose-400" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          )}
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="top-0 fixed z-40">
            <div className="relative">
              <div className="fixed inset-0 z-30 h-screen drop-shadow-xl">
                <div className="flex flex-col text-xl justify-center bg-blue-50 pt-20 h-[50%] duration-300 ease-in-out items-center gap-5">
                  <Link
                    to="/"
                    onClick={() => {
                      setIsMenuToggled(false);
                      dispatch(setCurrentPage(CurrentPage.Home));
                    }}
                  >
                    Home
                  </Link>
                  <Link
                    to="/services"
                    onClick={() => {
                      setIsMenuToggled(false);
                      dispatch(setCurrentPage(CurrentPage.Services));
                    }}
                  >
                    Services
                  </Link>
                  <Link
                    to="/projects"
                    onClick={() => {
                      setIsMenuToggled(false);
                      dispatch(setCurrentPage(CurrentPage.Projects));
                    }}
                  >
                    Projects
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() => {
                      setIsMenuToggled(false);
                      dispatch(setCurrentPage(CurrentPage.Contact));
                    }}
                  >
                    Contact
                  </Link>
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
