import { CurrentPage } from "../../shared/types";
import Hero from "../../components/Hero";


type Props = {
  currentPage: CurrentPage;
  setCurrentPage: (value: CurrentPage) => void;
};

const Home = ({setCurrentPage}: Props) => {
  return (
    <section id="home" className="py-20 w-full min-h-full ">
      <Hero setCurrentPage={setCurrentPage}/>
    </section>
  );
};

export default Home;
