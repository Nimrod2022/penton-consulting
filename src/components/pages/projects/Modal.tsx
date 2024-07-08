import React from 'react';
import { RxCross2 } from 'react-icons/rx';
import { Carousel } from 'react-responsive-carousel';
import { ModalProps } from '../../../shared/types';

import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, project }) => {
  if (!isOpen || !project) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex px-5 md:px-0 items-center justify-center z-50">
      <div className="bg-white p-2 md:p-5 rounded-lg max-w-3xl w-full md:h-3/4 relative overflow-y-auto">
        <button className="absolute top-2 right-2 text-black" onClick={onClose}>
          <RxCross2 className="absolute md:top-3 size-6 md:size-8 text-rose-600 right-0 md:right-2" />
        </button>
        <h2 className="text-md md:text-xl font-bold mb-3">{project.title}</h2>
        <Carousel showArrows={true} showThumbs={false} infiniteLoop={true}>
          {project.projectImages.map((image: string, index: number) => (
            <div key={index}>
              <img
                src={image}
                alt={`Project ${index}`}
                className="rounded-lg overflow-hidden"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Modal;
