import { CurrentPage } from "../../shared/types";
import { Link } from "react-router-dom";
import logo from "/assets/logo.svg";
import Button from "../../shared/Button";

type Props = {
  currentPage: CurrentPage;

  setCurrentPage: (value: CurrentPage) => void;
};

const Navbar = ({ currentPage,  setCurrentPage }: Props) => {
  return (
    <header>
      <nav>
        <div className="w-full fixed top-0 font-libre text-[#1E1E1E] py-6">
          <div className="mx-auto w-5/6 flex items-center justify-between">
            <div>
              <Link to="/" onClick={() => setCurrentPage(CurrentPage.Home)}>
                <img src={logo} alt="logo" />
              </Link>
            </div>
            <div className="flex gap-10">
              <Link to="/" onClick={() => setCurrentPage(CurrentPage.Home)}>
                Home
              </Link>
              <Link
                to="/services"
                onClick={() => setCurrentPage(CurrentPage.Services)}
              >
                Services
              </Link>
              <Link
                to="/projects"
                onClick={() => setCurrentPage(CurrentPage.Projects)}
              >
                Projects
              </Link>
              <Link
                to="/contact"
                onClick={() => setCurrentPage(CurrentPage.Contact)}
              >
                Contact
              </Link>
            </div>
            <div>
              <Button
                targetPage={CurrentPage.Contact}
                setCurrentPage={setCurrentPage}
                bgColor="bg-[#003366]"
                textColor="text-white"
              >
                Request a Quote
              </Button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
