import { TileProps } from '../../../shared/types';

const Tile: React.FC<TileProps> = ({ project, onClick }) => {
  return (
    <div
      className="relative bg-cover bg-center w-full h-56 md:h-80  text-white cursor-pointer "
      style={{ backgroundImage: `url(${project.bImage})` }}
      onClick={() => onClick(project)}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
        <h3 className="text-md md:text-2xl text-center font-bold">
          {project.title}
        </h3>
      </div>
    </div>
  );
};

export default Tile;
