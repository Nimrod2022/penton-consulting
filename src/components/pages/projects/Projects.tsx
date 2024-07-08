import { useState } from 'react';
import { IoArrowForwardSharp } from 'react-icons/io5';
import projects from './data.json';
import Modal from './Modal';
import Tile from './Tile';
import { Project } from '../../../shared/types';

const Projects: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openModal = (project: Project) => {
    setSelectedProject(project);
  };

  const closeModal = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="pt-20 md:pt-28 pb-10 md:pb-20">
      <div
        className={`bg-cover w-full bg-[url("../../../public/assets/services-bg.svg")] py-10 md:py-28 services-mobile-bg md:services-bg`}
      >
        <h4 className=" text-white text-center text-xl md:text-3xl font-libre">
          Projects
        </h4>
        <div className="text-center md:text-xl justify-center flex items-center gap-2 md:pt-3 text-white">
          <p>Home</p>
          <IoArrowForwardSharp className="text-[#FFA500] size-4 md:size-6" />
          <p>Projects</p>
        </div>
      </div>

      <div className=" md:w-5/6 xl:w-4/6 mx-auto ">
        <div className="flex flex-col items-center md:text-center ">
          <h1 className="text-[#FFA500] text-xl md:text-3xl md:pt-10 pt-5 ">
            Projects
          </h1>
          <h1 className="text-2xl py-2 text-center">
            Building a Sustainable Energy Future
          </h1>
          <p className="w-full md:w-[50%] md:px-0 px-5 md:pb-10 pb-5">
            At Penton, we empower energy projects with precision, navigating
            regulatory complexities and driving innovation in energy management.
            Discover how our expertly engineered projects are building the
            foundations of energy excellence and leading the charge towards a
            more compliant and sustainable energy future
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 px-5 md:px-0">
          {projects.map((project) => {
            return (
              <Tile key={project.id} project={project} onClick={openModal} />
            );
          })}
          {selectedProject && (
            <Modal
              isOpen={!!selectedProject}
              onClose={closeModal}
              project={selectedProject}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Projects;
