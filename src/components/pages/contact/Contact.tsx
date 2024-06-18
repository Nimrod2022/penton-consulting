import { IoArrowForwardSharp } from 'react-icons/io5';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { FaInstagram } from 'react-icons/fa6';
import { AiFillTikTok } from 'react-icons/ai';
import { FaFacebook } from 'react-icons/fa';




import { AiOutlineMail } from 'react-icons/ai';
import { HiLocationMarker } from 'react-icons/hi';
import { PiPhoneCallLight } from 'react-icons/pi';
import eclipseBig from  '../../../../public/assets/contact-eclipse-big.svg'
import eclipseSmall from '../../../../public/assets/contact-eclipse-small.svg';

const Contact = () => {
  return (
    <section id="contact" className="pt-20 ">
      <div
        className={`bg-cover w-full bg-[url("../../../public/assets/services-bg.svg")] py-10 md:py-20 services-mobile-bg md:services-bg`}
      >
        <h4 className=" text-white text-center text-xl md:text-3xl font-libre">
          Contact
        </h4>
        <div className="text-center md:text-xl justify-center flex items-center gap-2 text-white">
          <p>Home</p>
          <IoArrowForwardSharp className="text-[#FFA500] size-4 md:size-6" />
          <p>Contact</p>
        </div>
      </div>
      <div className="flex justify-center items-center md:py-20  md:w-5/6 xl:w-4/6 mx-auto">
        <div className="bg-[#036] flex md:px-28 justify-between rounded-2xl w-full">
          <div className="text-white py-10 p-6 relative w-[50%]">
            <h2 className="text-2xl md:text-3xl">Contact Information</h2>
            <p>Say something to start a live chat!</p>
            <div className="text-white flex items-center gap-3 md:text-md pt-10">
              <PiPhoneCallLight className="size-5 md:size-8" />
              <p>+254 768 794629</p>
            </div>
            <div className="text-white flex items-center gap-3 md:text-md pt-5">
              <AiOutlineMail className="size-5 md:size-8" />
              <p>info@pentonenergy.com</p>
            </div>
            <div className="text-white flex items-center gap-3 md:text-md pt-5">
              <HiLocationMarker className="size-5 md:size-8" />
              <p>Ruiru, Kenya</p>

              {/* eclipse */}
              <div className=" absolute bottom-0 right-0 md:mr-10">
                <div className="relative pt-10">
                  <img src={eclipseBig} alt="" />
                  <img
                    src={eclipseSmall}
                    alt=""
                    className="top-0 absolute left-0"
                  />
                </div>
              </div>
            </div>

            <div className="flex gap-5 pt-5">
              <button>
                {' '}
                <AiFillTwitterCircle className="text-[#FFA500] rounded-full md:size-8" />
              </button>
              <button>
                {' '}
                <FaInstagram className="text-[#FFA500] rounded-full md:size-8" />
              </button>
              <button>
                {' '}
                <AiFillTikTok className="text-[#FFA500] rounded-full md:size-8" />
              </button>
              <button>
                {' '}
                <FaFacebook className="text-[#FFA500] rounded-full md:size-8" />
              </button>
            </div>
          </div>
          <div className="flex flex-col md:w-[50%] justify-center items-center relative pt-10  p-6">
            <h1 className="text-white text-2xl md:text-3xl font-bold">
              Get in <span className="text-[#FFA500]">Touch</span>
            </h1>
            <h3 className="title text-white">
              We'd love to hear from you! Whether you have a question about our
              services, need assistance, or you're in the neighborhood and want
              to check in, feel free to reach out.
            </h3>
            <form
              action="#"
              className="md:space-y-4 space-y-3 text-white pt-5 w-full"
            >
              <div className="flex flex-col">
                <input
                  type="text"
                  id="name"
                  required
                  placeholder="Name"
                  className="border-[#D6DDED] bg-[#036] border rounded-lg p-3 w-full"
                />
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col">
                  <input
                    type="email"
                    id="email"
                    required
                    placeholder="Email"
                    className="border-[#D6DDED] border bg-[#036] rounded-lg p-3 w-full"
                  />
                </div>
                <div className="flex flex-col">
                  <input
                    placeholder="Phone number"
                    type="text"
                    id="phone"
                    className="border-[#D6DDED] border bg-[#036]   rounded-lg p-3 w-full"
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <select
                  id="interest"
                  className="border-[#D6DDED] text-sm border  bg-[#036] rounded-lg p-3 w-full"
                >
                  <option value="select service">Select service</option>
                  <option value="Architectural, Structural & Mechanical Drawings">
                    Architectural, Structural & Mechanical Drawings
                  </option>
                  <option value="Energy Compliance Services">
                    Energy Compliance Services
                  </option>
                  <option value="Environmental Compliance Services">
                    Environmental Compliance Services{' '}
                  </option>
                  <option value="Project Quotation Services">
                    Project Quotation Services
                  </option>
                  
                </select>
              </div>
              <div className="flex flex-col">
                <textarea
                  placeholder="Message"
                  rows="4"
                  id="message"
                  required
                  className="border-[#D6DDED] border bg-[#036] rounded-lg p-5 w-full"
                ></textarea>
              </div>
              <div className="md:pt-5 flex flex-col text items-center justify-center">
                <button
                  type="submit"
                  className="text-md inter w-full rounded-lg px-3 py-2 md:px-5 md:py-3 font-bold bg-[#FFA500] text-black"
                >
                  SEND
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
