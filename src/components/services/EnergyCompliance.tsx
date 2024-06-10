import Service from './Service';
import energyCompliance from '../../../public/assets/energy-compliance-service.svg';

type Props = {
  bgColor: string;
};

const EnergyCompliance = ({ bgColor }: Props) => {
  return (
    <Service
      title="Energy Regulatory Compliance"
      description="Ensure your energy projects meet all regulatory requirements with our comprehensive
             compliance services, including licenses, permits, technical audits, and emergency response plans."
      image={energyCompliance}
      serviceId={2}
      bgColor={bgColor}
    ></Service>
  );
};

export default EnergyCompliance;
