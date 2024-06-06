import { CurrentPage } from "../../shared/types";
import Link from "./Link";
import logo from "/assets/logo.svg";

type Props = {
  currentPage: CurrentPage,
  setCurrentPage: (value: CurrentPage)=> void
};

const Navbar = ({currentPage, setCurrentPage}: Props) => {
  return (
    <header>
      <nav>
        <div className="fixed top-0 font-libre text-[#1E1E1E] w-full py-6">
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

          <div></div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
