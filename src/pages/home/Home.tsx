
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
      <section id="services" className="py-20">
        <h1>Services</h1>
        <Button
          targetPage={CurrentPage.Services}
          setCurrentPage={setCurrentPage}
        >
          See All Services
        </Button>
      </section>
      <section id="projects" className="py-20">
        <h1>Projects</h1>
      </section>
      <section id="contact" className="py-20">
        <h1>Contact</h1>
        <Button
          targetPage={CurrentPage.Contact}
          setCurrentPage={setCurrentPage}
        >
          Get a Quote
        </Button>
      </section>
    </div>
  );
};

export default Home;
