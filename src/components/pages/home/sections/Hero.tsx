import landingImage from '../../../../../public/assets/landing-bg.png';
import landingImageMobile from '../../../../../public/assets/landing-mobile.png';
import { useAppSelector } from '../../../../hooks/UseApp';
import { CurrentPage } from '../../../../shared/types';
import Button from '../../../buttons/Button';

const Hero = () => {
  const currentPage = useAppSelector((state) => state.page.page);
  console.log('Current page in Hero component:', currentPage);
  return (
    <section className="w-full">
      <div>
        <div>
          <img
            src={landingImage}
            alt="home"
            className="md:pt-5 hidden md:block md:w-full"
          />
          <img
            src={landingImageMobile}
            alt="home"
            className="md:pt-5 md:hidden block md:w-full h-4/6"
          />
        </div>
        <div className="w-full bg-[#003366] ">
          <div className="text-white   md:py-20  md:flex md:gap-40 md:w-5/6 xl:w-4/6 mx-auto items-center">
            <div className="md:pt-0 pt-5">
              <h1 className="md:text-4xl text-xl md:px-0 text-center  md:text-start  font-libre">
                Where Innovation Meets Energy Excellence
              </h1>
            </div>
            <div className="md:py-0 px-5 py-5">
              <p className=" text-center md:text-start">
                Penton is more than a service provider; we&apos;re your trusted
                energy partner. With our expertise, reliability, and
                personalized approach, we&apos;re committed to helping you
                achieve your energy objectives efficiently and effectively.
                Partner with us and unlock your full potential in energy.
              </p>

              <div className="flex pt-7 md:justify-start justify-center md:pt-5 gap-5 md:gap-10 md:w-3/6">
                <Button
                  targetPage={CurrentPage.Contact}
                  style="border-none bg-[#FFA500] rounded-md text-black"
                >
                  Get started
                </Button>
                <Button
                  targetPage={CurrentPage.Services}
                  style="bg-[#003366] text-white border border-[#39FF14] rounded-md"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
