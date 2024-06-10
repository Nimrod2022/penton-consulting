import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../../public/assets/logo.svg';
import Button from '../../components/buttons/Button';
import { setCurrentPage } from '../../components/buttons/buttonSlice';
import UseMediaQuery from '../../hooks/UseMediaQuery';
import { CurrentPage } from '../../shared/types';

const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const dispatch = useDispatch();
  const isAboveMediumScreens = UseMediaQuery('(min-width: 1060px)');

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

  // Call handleScroll once on mount to set initial state
  handleScroll();

  window.addEventListener('scroll', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <header>
      <nav>
        <div className="w-full  fixed top-0 font-libre text-[#1E1E1E] ">
          {isAboveMediumScreens ? (
            <div className="mx-auto bg-white navbar w-5/6 flex items-center justify-between">
              <div>
                <Link
                  to="/"
                  onClick={() => dispatch(setCurrentPage(CurrentPage.Home))}
                >
                  <img src={logo} alt="logo" />
                </Link>
              </div>
              <div className=" flex  gap-10 text-md">
                <Link
                  to="/"
                  onClick={() => dispatch(setCurrentPage(CurrentPage.Home))}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  onClick={() => dispatch(setCurrentPage(CurrentPage.Services))}
                >
                  Services
                </Link>
                <Link
                  to="/projects"
                  onClick={() => dispatch(setCurrentPage(CurrentPage.Projects))}
                >
                  Projects
                </Link>
                <Link
                  to="/contact"
                  onClick={() => dispatch(setCurrentPage(CurrentPage.Contact))}
                >
                  Contact
                </Link>
              </div>
              <div>
                <Button
                  targetPage={CurrentPage.Contact}
                  bgColor="bg-[#003366]"
                  textColor="text-white"
                  border="none"
                >
                  Request a Quote
                </Button>
              </div>
            </div>
          ) : (
            <div className="flex items-center">
              <div>
                <Link to="/" onClick={() => setCurrentPage(CurrentPage.Home)}>
                  <img
                    src={logo}
                    alt="logo"
                    className="h-16 fixed left-5 top- "
                  />
                </Link>
              </div>
              <div>
                <button
                  aria-label="Toggle Menu"
                  className="rounded-full bg-[#003366] fixed right-5 top-0 z-40  p-2 my-4"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <Bars3Icon className="size-6 text-white" />
                </button>
              </div>
            </div>
          )}
        </div>
        {!isAboveMediumScreens && isMenuToggled && (
          // Mobile Menu
          <div className="navbar bg-white top-0 fixed">
            <div className="relative">
              <button
                aria-label="Toggle Menu"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
                className="fixed top-4 right-5 bg-[#003366] rounded-full z-50"
              >
                <XMarkIcon className="size-10 text-rose-400" />
              </button>

              <div className="fixed inset-0 bg-[#1E568E] bg-opacity-20 z-40 h-screen drop-shadow-xl">
                <div className="flex flex-col text-xl justify-center h-full duration-300 ease-in-out items-center gap-5">
                  <Link
                    to="/"
                    onClick={() => dispatch(setCurrentPage(CurrentPage.Home))}
                  >
                    Home
                  </Link>
                  <Link
                    to="/services"
                    onClick={() =>
                      dispatch(setCurrentPage(CurrentPage.Services))
                    }
                  >
                    Services
                  </Link>
                  <Link
                    to="/projects"
                    onClick={() =>
                      dispatch(setCurrentPage(CurrentPage.Services))
                    }
                  >
                    Projects
                  </Link>
                  <Link
                    to="/contact"
                    onClick={() =>
                      dispatch(setCurrentPage(CurrentPage.Contact))
                    }
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
