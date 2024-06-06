import { useState } from "react";
import Navbar from "../navbar/Navbar";
import { CurrentPage } from "../../shared/types";

const Home = () => {
  const [currentPage, setCurrentPage] = useState<CurrentPage>(CurrentPage.Home);

  return (
    <>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
    </>
  );
};

export default Home;
