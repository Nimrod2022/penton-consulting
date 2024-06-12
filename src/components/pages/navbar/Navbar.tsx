import { Bars3Icon, XMarkIcon } from '@heroicons/react/16/solid';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../../../public/assets/logo.svg'
import Button from '../../buttons/Button';
import { setCurrentPage } from '../../../reducers/buttonSlice';
import UseMediaQuery from '../../../hooks/UseMediaQuery';
import { CurrentPage } from '../../../shared/types';
const Navbar = () => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
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

    // Call handleScroll once on mount to set initial state
    handleScroll();

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // change nav item text on click
  const getLinkClass = (path: string) => {
    return location.pathname === path ? 'text-[#0D65BE]' : '';
  };

  return (
    <header>
      <nav>
        <div className="w-full  fixed top-0 font-libre text-[#1E1E1E] ">
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
              <div className=" flex  gap-10 text-md">
                <Link
                  to="/"
                  onClick={() => dispatch(setCurrentPage(CurrentPage.Home))}
                  className={getLinkClass('/')}
                >
                  Home
                </Link>
                <Link
                  to="/services"
                  onClick={() => dispatch(setCurrentPage(CurrentPage.Services))}
                  className={getLinkClass('/services')}
                >
                  Services
                </Link>
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
