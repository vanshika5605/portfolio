import { X } from "lucide-react";

const ProjectModal = ({ project, onClose }) => {
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div className="fixed inset-0 bg-black/40" />
      <div
        className="relative z-50 w-full max-w-2xl bg-white rounded-lg shadow-xl p-6 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-4 top-4 p-1 rounded-full hover:bg-gray-100 transition-colors"
        >
          <X size={20} />
        </button>

        <div className="space-y-4">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg"
          />

          <div>
            <h3 className="text-2xl font-bold text-gray-800">
              {project.title}
            </h3>

            <div className="mt-4 space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-gray-700">
                  Overview
                </h4>
                <p className="mt-2 text-gray-600">{project.fullDescription}</p>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700">
                  Key Features
                </h4>
                <ul className="mt-2 space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start">
                      <span className="mr-2">•</span>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-700">
                  Tech Stack
                </h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <a
              href={project.link}
              className="inline-block mt-6 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
