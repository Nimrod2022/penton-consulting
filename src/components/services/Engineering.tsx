import Service from './Service';
import engineeringService from '../../../public/assets/engineering-service.svg';

type Props = {
    bgColor: string
};

const Engineering = ({bgColor}: Props) => {
  return (
    <Service
      title="Architectural, Structural & Mechanical Drawings"
      description="We conduct thorough environmental impact assessments and audits (EIA/EA)
           for energy projects in the oil and gas industry, as well as general projects."
      image={engineeringService}
      serviceId={1}
      bgColor={bgColor}
    ></Service>
  );
};

export default Engineering;
