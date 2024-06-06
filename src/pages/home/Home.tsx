
import { CurrentPage } from "../../shared/types";
import Button from "../../shared/Button";

type Props = {
  currentPage: CurrentPage;
  setCurrentPage: (value: CurrentPage) => void;
};

const Home = ({ currentPage, setCurrentPage }: Props) => {
  return (
    <div>
      <section id="home" className="py-20">
        <h1>Home</h1>
        <p>Welcome to the Home Page</p>
      </section>
      
    </div>
  );
};

export default Home;
