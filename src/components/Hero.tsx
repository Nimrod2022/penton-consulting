import landingImage from "../../public/assets/landing-bg.svg";
import { CurrentPage } from "../shared/types";
import Button from "./buttons/Button";
import { useAppDispatch, useAppSelector } from "../hooks/UseApp";

//import { setCurrentPage } from "../features/buttons/buttonSlice";

type Props = {
  targetPage?: CurrentPage;
  children?: React.ReactNode;
  bgColor?: string;
  textColor?: string;
  border?: string;
};

const Hero = ({ border }: Props) => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.page.page);
  console.log("Current page in Hero component:", currentPage);
  return (
    <section className="w-full ">
      <div>
        <div>
          <img
            src={landingImage}
            alt="home image"
            className="md:pt-5 hidden md:block md:w-full h-4/6"
          />
          <img
            src="../../public/assets/landing-mobile.png"
            alt="home image"
            className="md:pt-5 md:hidden block md:w-full h-4/6"
          />
        </div>
        <div className="text-white bg-[#003366]   md:py-10 md:flex justify-center md:px-28 items-center">
          <div className="md:pt-0 pt-5">
            <h1 className="md:text-4xl text-xl md:px-0 px-10  md:text-start text-center font-libre">
              Where Innovation Meets Energy Excellence
            </h1>
          </div>
          <div className="md:py-0 px-5 py-5">
            <div className="md:w-5/6">
              <p className="md:w-5/6 text-center md:text-start">
                Penton is more than a service provider; we're your trusted
                energy partner. With our expertise, reliability, and
                personalized approach, we're committed to helping you achieve
                your energy objectives efficiently and effectively. Partner with
                us and unlock your full potential in energy.
              </p>
            </div>
            <div className="flex pt-7 md:justify-start justify-center md:pt-5 gap-5 md:gap-10 md:w-3/6">
              <Button targetPage={CurrentPage.Services} border="none">
                Get started
              </Button>
              <Button
                targetPage={CurrentPage.Services}
                bgColor="bg-[#003366]"
                textColor="text-white"
                border={border}
              >
                Learn more
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
