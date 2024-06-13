import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

// const container = {
//   hidden: {},
//   visible: {
//     transition: { staggerChildren: 0.2 },
//   },
// };

type Props = {
  title: string;
  description: string;
  image: string;
  serviceId: string;
  bgColor: string;
  index: number;
};

const Service = ({
  title,
  bgColor,
  description,
  image,
  serviceId,
  index,
}: Props) => {
  return (
    <motion.div
      className="flex flex-col justify-between w-full md:w-1/3 p-4"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <Link to={`/services/${serviceId}`} className="flex flex-col h-full">
        <div className="flex-grow">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <div className={`${bgColor} flex flex-col items-center py-4`}>
          <h3 className="text-[#036] pt-3 md:pt-5 pb-3 text-center md:text-xl">
            {title}
          </h3>
          <p className="mx-5 md:pb-5 ">{description}</p>
          <div className="md:pt-0 pt-3">
            <Link to={`/services/${serviceId}`}>
              <button className="text-[#036] px-2 py-2 font-semibold hover:bg-[#036] hover:text-white md:px-4 md:py-3 rounded-md">
                Learn more &gt;
              </button>
            </Link>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default Service;
