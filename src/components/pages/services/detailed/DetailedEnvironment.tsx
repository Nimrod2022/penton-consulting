import { IoArrowForwardSharp } from 'react-icons/io5';
import ContactBanner from './shared/ContactBanner';
import DetailedButton from './shared/DetailedButton';
import QuickContact from './shared/QuickContact';
import serviceImage from '../../../../../public/assets/engineering-detailed-image.svg';
// import FAQS from '../../home/sections/FAQS';

const DetailedEnvironment = () => {
  return (
    <section className="md:pt-28 pt-20">
      <div className="w-full bg-[#DAEAF2] ">
        <div
          className={`bg-cover w-full bg-[url("../../../../../public/assets/contact-banner.svg")] py-10 md:py-28 services-mobile-bg services-bg `}
        >
          <h4 className=" text-white text-center md:text-3xl font-libre">
            Environmental Compliance Services
          </h4>
          <div className="text-center md:text-xl justify-center flex items-center gap-2  pt-5 text-white">
            <p>Home</p>
            <IoArrowForwardSharp className="text-[#FFA500] size-5 md:size-6" />
            <p>Environmental Services</p>
          </div>
        </div>
        <div className="w-full md:w-5/6 xl:w-4/6 mx-auto bg-[#DAEAF2] md:flex md:justify-between py-10 md:py-20">
          {/* left menu */}
          <div className="md:w-[30%] md:flex md:flex-col gap-10 px-5  md:px-0">
            <div>
              <DetailedButton />
            </div>
            <div className="h-80 md:block hidden">
              <ContactBanner />
            </div>
            <div className="md:block hidden">
              <QuickContact />
            </div>
          </div>
          {/* Text content right */}
          <div className=" md:w-[65%] text-[#373B3D] ">
            <div className="px-5  md:px-0">
              <img
                src={serviceImage}
                alt="engineering"
                className="md:pt-0 pt-5"
              />

              <h1 className="text-black md:text-2xl font-libre py-3">
                Environmental Compliance Services
              </h1>

              <p className="pb-5 md:pb-10">
                This is a complimentary to the energy and Oil and Gas related
                projects, it may come during pre-construction project
                conceptualization by way of the undertaking an Environmental and
                Social Impact Assessment report and/or during Project operation
                process by way of an Environmental audit report. Additionally,
                this goes hand in hand with a fire risk assessment audit, an
                occupational safety assessment audit etc. as part of a facility
                self-improvement process Environmental related services.
              </p>

              <div>
                <p className="text-2xl text-[#373B3D]">Services</p>
                <ul className="list-disc my-4 text-xl ml-6">
                  <li>Environmental Impact Assessment report.</li>
                  <li>Environmental Audit Report</li>
                </ul>
              </div>
            </div>
            <div className="pt-10 ">
              {/* <p className="md:text-2xl text-xl text-center font-bold">
                Freaquently Asked Questions
              </p>
              <FAQS /> */}

              <div className="block md:hidden px-5">
                <QuickContact />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailedEnvironment;
