import { IoArrowForwardSharp } from 'react-icons/io5';
import ContactBanner from './shared/ContactBanner';
import QuickContact from './shared/QuickContact';
import DetailedButton from './shared/DetailedButton';

type Props = {};

const DetailedEnergy = (props: Props) => {
  return (
    <section className="pt-28">
      <div className="w-full bg-[#DAEAF2] ">
        <div
          className={`bg-cover w-full bg-[url("../../../../../public/assets/contact-banner.svg")] md:py-28 services-bg `}
        >
          <h4 className=" text-white text-center text-3xl font-libre">
            Energy Compliance Services
          </h4>
          <div className="text-center md:text-xl justify-center flex items-center md:gap-2  pt-5 text-white">
            <p>Home</p>
            <IoArrowForwardSharp className="text-[#FFA500]  size-6" />
            <p>Energy services</p>
          </div>
        </div>
        <div className="w-5/6 xl:w-4/6 mx-auto bg-[#DAEAF2] py-20">
          {/* left menu */}
          <div className="w-[25%] flex flex-col gap-10">
            <div>
              <DetailedButton />
            </div>
            <div className="h-80">
              <ContactBanner />
            </div>
            <QuickContact />
          </div>
          {/* Text content right */}
          <div></div>
        </div>
      </div>
    </section>
  );
};

export default DetailedEnergy;
