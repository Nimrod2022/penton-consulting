import Hero from '../../components/Hero';

const Home = () => {
  return (
    <>
      <section id="home" className="py-20 w-full min-h-full ">
        <Hero />
      </section>
      <section id="services" className="w-5/6 mx-auto">
        <div className="mx-auto">
          <div>
            <h3 className="text-[#FFA500] font-semibold text-md py-5">
              Expertise
            </h3>
            <h2 className="text-[#003366] text-3xl ">
              Comprehensive Consulting Services for <br /> Energy Projects
            </h2>
            <p className="w-3/6 pt-3">
              We provide a range of services to support energy projects,
              including architectural, structural, and mechanical drawings for
              gas stations and filling plants. We also offer energy regulatory
              compliance services, environmental impact assessments, and
              quotations for general engineering works.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
