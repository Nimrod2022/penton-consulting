type Props = {
  image: string;
  title: string;
  description: string;
};

const Operations = ({ image, title, description }: Props) => {
  return (
    <div className="bg-[#0E4379] md:w-[380px] md:h-[420px] flex flex-col md:px-5 md:py-10 items-center ">
      <img src={image} alt={title} className="size-20" />
      <h3 className="text-xl py-5 text-center">{title}</h3>
      <p className="text-[#DBE3EB]">{description}</p>
    </div>
  );
};

export default Operations;
