import { CurrentPage } from "../../shared/types";


type Props = {
  currentPage: CurrentPage;
  setCurrentPage: (value: CurrentPage) => void;
};

const Home = (props: Props) => {
  return (
    <section id="home" className="py-20 mx-auto min-h-full w-5/6">
      <div>
        <h1>Home</h1>
        <p>Welcome to the Home Page</p>
      </div>
    </section>
  );
};

export default Home;
