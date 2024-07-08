export enum CurrentPage {
  Home = 'home',
  Projects = 'projects',
  Services = 'services',
  Contact = 'contact',
  Engineering = 'services/engineering',
  EnergyCompliance = 'services/energy',
  EnvironmentalCompliance = 'services/environment',
  Quotations = 'services/quotations',
}

export const TOGGLE_ANIMATION = 'TOGGLE_ANIMATION';

export interface Project {
  id: number;
  title: string;
  bImage: string;
  projectImages: string[];
}

export interface TileProps {
  project: Project;
  onClick: (project: Project) => void;
}

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: Project | null;
}
