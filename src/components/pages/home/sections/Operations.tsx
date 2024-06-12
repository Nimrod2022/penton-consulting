import { motion } from 'framer-motion';

type Props = {
  image: string;
  title: string;
  description: string;
  index: number;
};

const Operations = ({ image, title, description, index }: Props) => {
  return (
    <motion.div
      className="bg-[#0E4379] md:w-full md:max-w-[380px] md:min-h-[450px] md:h-auto flex flex-col md:px-5 py-5 md:py-10 items-center px-5 "
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      <img src={image} alt={title} className="size-10 md:size-auto" />
      <h3 className="md:text-xl py-3 text-center">{title}</h3>
      <p className="text-[#DBE3EB] text-sm md:text-md">{description}</p>
    </motion.div>
  );
};

export default Operations;
