type Props = {
  title: string;
  description: string;
  image: string; // assuming this is a URL
};

const Service = ({ title, description, image }: Props) => {
  return (
    <div className="md:w-[447px] md:h-[605px]">
      <div className="md:w-[447px] md:h-[605px]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
      <div>
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default Service;
