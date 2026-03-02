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

        <div className="space-y-6">
          <h3 className="text-2xl font-bold text-gray-800 pr-8">{project.title}</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div className="flex justify-center md:justify-start">
              <img
                src={process.env.PUBLIC_URL + "/" + project.image}
                alt={project.title}
                className="w-full max-w-xs max-h-64 object-contain rounded-lg"
              />
            </div>

            <div>
              <p className="text-gray-600 leading-relaxed text-justify">
                {project.fullDescription}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <div>
              <h4 className="text-lg font-semibold text-gray-700">
                Key Features
              </h4>
              <ul className="mt-2 space-y-2 text-left">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start text-left">
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
                    className="px-3 py-1 rounded-full text-sm border"
                    style={{
                      backgroundColor: "var(--primary-color)",
                      color: "var(--text-color)",
                      borderColor: "var(--border-color)",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-4 pt-2 md:justify-end">
            <a
              href={project.link}
              className="px-4 py-2 text-white rounded-lg transition-colors"
              style={{
                backgroundColor: "var(--primary-color)",
                color: "var(--text-color)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.opacity = "0.8";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.opacity = "1";
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
            {project.hasVideoDemo === true && (
              <a
                href={project.videoDemoLink}
                className="px-4 py-2 text-white rounded-lg transition-colors"
                style={{
                  backgroundColor: "var(--secondary-color)",
                  color: "var(--text-color)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = "0.8";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = "1";
                }}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
