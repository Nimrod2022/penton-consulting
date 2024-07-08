import { motion } from 'framer-motion';
import { Slide } from 'react-awesome-reveal';
import UseMediaQuery from '../../../../hooks/UseMediaQuery';
type Props = {
  image: string;
  title: string;
  description: string;
  index: number;
};

const Operations = ({ image, title, description, index }: Props) => {
  const isAboveMediumScreens = UseMediaQuery('(min-width: 768px)');

  const content = (
    <>
      <img src={image} alt={title} className="size-10 md:size-auto" />
      <h3 className="md:text-xl py-3 text-center">{title}</h3>
      <p className="text-[#DBE3EB] text-sm md:text-md">{description}</p>
    </>
  );

  return isAboveMediumScreens ? (
    <motion.div
      className="bg-[#0E4379] md:w-full md:max-w-[380px] md:min-h-[450px] md:h-auto flex flex-col md:px-5 py-5 md:py-10 items-center px-5"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      variants={{
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 },
      }}
    >
      {content}
    </motion.div>
  ) : (
    // <div className="bg-[#0E4379] md:w-full md:max-w-[380px] md:min-h-[450px] md:h-auto flex flex-col md:px-5 py-5 md:py-10 items-center px-5">
    //   {content}
    // </div>
    <Slide
      cascade={true}
      triggerOnce={true}
      direction="up"
      className="bg-[#0E4379] md:w-full md:max-w-[380px] md:min-h-[450px] md:h-auto flex flex-col md:px-5 py-5 md:py-10 items-center px-5"
    >
      {content}
    </Slide>
  );
};

export default Operations;
