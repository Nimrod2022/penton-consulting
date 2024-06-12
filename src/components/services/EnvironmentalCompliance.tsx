import Service from './Service';
import environmentService from '../../../public/assets/environment-services.svg';

type Props = {
  bgColor: string;
  index: number;
};

const EnvironmentalCompliance = ({ bgColor, index }: Props) => {
  return (
    <Service
      title="Architectural, Structural & Mechanical Drawings"
      description="We conduct thorough environmental impact assessments and audits (EIA/EA)
           for energy projects in the oil and gas industry, as well as general projects."
      image={environmentService}
      serviceId={3}
      bgColor={bgColor}
      index={index}
    ></Service>
  );
};

export default EnvironmentalCompliance;
