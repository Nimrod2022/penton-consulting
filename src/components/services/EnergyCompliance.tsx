import Service from './Service';
import energyCompliance from '../../../public/assets/energy-compliance-service.svg';

type Props = {
  bgColor: string;
  index: number;
};

const EnergyCompliance = ({ bgColor, index }: Props) => {
  return (
    <Service
      title="Energy Regulatory Compliance"
      description="Ensure your energy projects meet all regulatory requirements with our comprehensive
             compliance services, including licenses, permits, technical audits, and emergency response plans."
      image={energyCompliance}
      serviceId={2}
      bgColor={bgColor}
      index={index}
    ></Service>
  );
};

export default EnergyCompliance;
