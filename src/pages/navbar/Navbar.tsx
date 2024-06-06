import { CurrentPage } from "../../shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import logo from "/assets/logo.svg";
import Button from "../../shared/Button";

type Props = {
  currentPage: CurrentPage;
  setCurrentPage: (value: CurrentPage) => void;
};

const Navbar = ({ currentPage, setCurrentPage }: Props) => {
  return (
    <header>
      <nav>
        <div className="w-full fixed top-0 font-libre text-[#1E1E1E] py-6">
          <div className="mx-auto w-5/6 flex items-center justify-between">
            <div>
              <img src={logo} alt="logo" />
            </div>
            <div className="flex gap-10">
              <AnchorLink href="#home">Home</AnchorLink>
              <AnchorLink href="#services">Services</AnchorLink>
              <AnchorLink href="#projects">Projects</AnchorLink>
              <AnchorLink href="#contact">Contact</AnchorLink>
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
