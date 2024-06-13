import { CurrentPage } from '../../../../../shared/types';
import Button from '../../../../buttons/Button';

const DetailedButton = () => {
  return (
    <div className="border-2 border-[#858686] pb-10 text-md px-3">
      <h1 className="text-xl text-start py-5 text-black font-libre">
        All Services
      </h1>
      <div className="pt-2">
        <Button
          targetPage={CurrentPage.Engineering}
          style="text-[#036] bg-white w-full border-l-4  border-[#036]"
        >
          Architectural, Structural & Drawings
        </Button>
      </div>

      <div className="pt-2">
        <Button
          targetPage={CurrentPage.EnergyCompliance}
          style="text-[#036] bg-white w-full border-l-4  border-[#036]"
        >
          Energy Regulatory Compliance
        </Button>
      </div>

      <div className="pt-2">
        <Button
          targetPage={CurrentPage.EnvironmentalCompliance}
          style="text-[#036] bg-white w-full border-l-4  border-[#036]"
        >
          Environmental Impact Assessments
        </Button>
      </div>

      <div className="pt-2">
        <Button
          targetPage={CurrentPage.Quotations}
          style="text-[#036] bg-white w-full border-l-4  border-[#036]"
        >
          Project Quotations
        </Button>
      </div>
    </div>
  );
};

export default DetailedButton;
