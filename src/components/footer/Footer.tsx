import { AiOutlineMail } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { PiPhoneCallLight } from 'react-icons/pi';
import Button from '../buttons/Button';
import logo from '../../public/assets/logo.svg';
import { CurrentPage } from '../../shared/types';

const Footer = () => {
  return (
    <section className="bg-[#036] md:py-10 ">
      <div className="mx-auto w-5/6 xl:w-4/6 flex justify-center items-center md:gap-40 xl:gap-60">
        <div>
          <img src={logo} alt="logo" />
        </div>

        <div>
          <p className="text-white text-xl font-semibold">Get in Touch</p>

          <div>
            <div className="text-white flex items-center gap-3 text-md pt-5">
              <PiPhoneCallLight className="size-8" />

              <p>+254 768 794629</p>
            </div>

            <div className="text-white flex items-center gap-3 text-md pt-5">
              <AiOutlineMail className="size-8" />

              <p>info@pentonenergy.com</p>
            </div>

            <div className="text-white flex items-center gap-3 text-md pt-5">
              <HiLocationMarker className="size-8" />

              <p>Ruiru, Kenya</p>
            </div>
          </div>
        </div>

        <div className="text-white">
          <p className="text-xl font-semibold">Quick Links</p>
          <div className="flex flex-col">
            <Button style="border-none" targetPage={CurrentPage.Home}>
              Home
            </Button>
            <Button style="border-none" targetPage={CurrentPage.Services}>
              Services
            </Button>
            <Button style="border-none" targetPage={CurrentPage.Projects}>
              Projects
            </Button>
            <Button style="border-none" targetPage={CurrentPage.Contact}>
              Contact
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
