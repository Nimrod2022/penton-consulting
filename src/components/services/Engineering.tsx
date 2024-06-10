import Service from './Service';
import engineeringService from '../../../public/assets/engineering-service.svg';

type Props = {};

const Engineering = (props: Props) => {
  return (
    <Service
      title="Architectural, Structural & Mechanical Drawings"
      description="We conduct thorough environmental impact assessments and audits (EIA/EA)
           for energy projects in the oil and gas industry, as well as general projects."
      image={engineeringService}
      serviceId={1}
    ></Service>
  );
};

export default Engineering;
