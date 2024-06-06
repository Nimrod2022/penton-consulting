import Button from "../../shared/Button";
import { CurrentPage } from "../../shared/types";
import Link from "./Link";
import logo from "/assets/logo.svg";

type Props = {
  currentPage: CurrentPage;
  setCurrentPage: (value: CurrentPage) => void;
};

const Navbar = ({ currentPage, setCurrentPage }: Props) => {
  return (
    <header>
      <nav>
        <div className="w-full fixed   top-0 font-libre text-[#1E1E1E]  py-6">
          <div className=" mx-auto  w-5/6 flex  items-center justify-between">
            <div>
              <img src={logo} alt="logo" />
            </div>

            <div className="flex gap-10">
              <Link
                page="Home"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              <Link
                page="Services"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
              <Link
                page="Projects"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />

              <Link
                page="Contact"
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              />
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
