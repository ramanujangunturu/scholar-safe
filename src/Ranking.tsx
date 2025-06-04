import React, { useEffect, useState } from 'react';
import { IconX } from '@tabler/icons-react';
import { BackgroundBeamsDemo } from "./components/elements/BeamsBackground";
import axios from 'axios';
import ProjectDescription from "./ProjectDescription";

interface Project {
  _id: string;
  id: string;
  project_title: string;
  project_description: string;
  project_pdf_link: string;
  team_members: string[];
  year_done: number;
  tech_stack: string[];
  integer_rank: number;
}

const ProjectCard: React.FC<{ project: Project; onClick: () => void }> = ({ project, onClick }) => {
  const getRankColor = (rank: number) => {
    switch(rank) {
      case 1: return 'bg-yellow-500 text-black';
      case 2: return 'bg-gray-400 text-black';
      case 3: return 'bg-orange-600 text-black';
      default: return 'bg-gray-700 text-white';
    }
  };

  return (
    <div 
      className="bg-black text-white rounded-[40px] h-[280px] w-[400px] cursor-pointer hover:transform hover:scale-105 transition-all duration-300"
      onClick={onClick}
    >
      <div className="p-6 h-full flex flex-col">
        <div className="flex items-center justify-between mb-4">
          <span className={`${getRankColor(project.integer_rank)} w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl`}>
            {project.integer_rank}
          </span>
          <span className="text-gray-400">{project.year_done}</span>
        </div>
        
        <h2 className="text-xl font-bold mb-4 line-clamp-2">{project.project_title}</h2>
        
        <div className="space-y-4 flex-grow">
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-1">Team Members</h3>
            <p className="text-sm line-clamp-2">{project.team_members.join(", ")}</p>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-400 mb-1">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech_stack.slice(0, 3).map((tech, index) => (
                <span key={index} className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                  {tech}
                </span>
              ))}
              {project.tech_stack.length > 3 && (
                <span className="px-2 py-1 bg-gray-800 rounded-full text-xs">
                  +{project.tech_stack.length - 3}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

function Ranking() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [view, setView] = useState(false);
  const [id, setId] = useState<number>(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        setLoading(true);
        const response = await axios.get('http://127.0.0.1:8000/projects/ranked');
        setProjects(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch projects. Please try again later.');
        console.error('Error fetching projects:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <>
      <div className="h-screen w-screen z-0">
        <BackgroundBeamsDemo>
          <div className="h-screen w-[100%] flex flex-col">
            <div className="h-[20%] w-[100%] flex items-center justify-center">
              <h1 className="text-4xl font-bold text-white">Project Rankings</h1>
            </div>
            
            <div className="h-[80%] w-[100%] flex flex-wrap justify-center gap-6 overflow-y-auto" >
              {loading ? (
                <div className="flex justify-center items-center h-64">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white"></div>
                </div>
              ) : error ? (
                <div className="text-red-500 text-center p-4 bg-red-100 rounded-lg">
                  {error}
                </div>
              ) : (
                projects.map((project, index) => (
                  <ProjectCard 
                    key={project._id}
                    project={project}
                    onClick={() => {
                      setView(true);
                      setId(index);
                    }}
                  />
                ))
              )}
            </div>
          </div>
        </BackgroundBeamsDemo>
      </div>

      {view && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center">
          <ProjectDescription id={id} data={projects} setView={setView} />
        </div>
      )}
    </>
  );
}

export default Ranking; 