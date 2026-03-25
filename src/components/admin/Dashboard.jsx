import React, { useState, useEffect } from 'react';
import { LayoutDashboard, FolderGit2, Briefcase, LogOut, Wrench } from 'lucide-react';
import ProjectEditor from './ProjectEditor';
import ExperienceEditor from './ExperienceEditor';
import SkillsEditor from './SkillsEditor';
import JsonExporter from './JsonExporter';
import enData from '../../i18n/locales/en.json';
import frData from '../../i18n/locales/fr.json';

const Dashboard = ({ onLogout }) => {
  const [activeTab, setActiveTab] = useState('projects');
  const [data, setData] = useState({ en: enData, fr: frData });
  const [currentLang, setCurrentLang] = useState('en'); // 'en' or 'fr'

  const handleProjectUpdate = (updatedProjects) => {
    setData(prev => ({
      ...prev,
      [currentLang]: {
        ...prev[currentLang],
        projects: {
          ...prev[currentLang].projects,
          items: updatedProjects
        }
      }
    }));
  };

  const handleExperienceUpdate = (updatedExperience) => {
    setData(prev => ({
      ...prev,
      [currentLang]: {
        ...prev[currentLang],
        experience: {
          ...prev[currentLang].experience,
          items: updatedExperience
        }
      }
    }));
  };

  const handleSkillsUpdate = (updatedSkills) => {
    setData(prev => ({
      ...prev,
      [currentLang]: {
        ...prev[currentLang],
        skills: updatedSkills
      }
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Top Navigation */}
      <nav className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <LayoutDashboard className="w-6 h-6 text-blue-600 mr-2" />
              <span className="font-bold text-xl text-gray-900">Portfolio Admin</span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setCurrentLang('en')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${currentLang === 'en' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                  English
                </button>
                <button
                  onClick={() => setCurrentLang('fr')}
                  className={`px-3 py-1 rounded-md text-sm font-medium transition-colors ${currentLang === 'fr' ? 'bg-white shadow-sm text-gray-900' : 'text-gray-500 hover:text-gray-900'
                    }`}
                >
                  Français
                </button>
              </div>
              <div className="h-6 w-px bg-gray-300"></div>
              <button
                onClick={onLogout}
                className="flex items-center text-gray-500 hover:text-red-600 transition-colors"
              >
                <LogOut className="w-5 h-5 mr-2" />
                Logout
              </button>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <JsonExporter data={data} />
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Sidebar Navigation */}
          <aside className="w-full md:w-64 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-sm p-4 space-y-2 sticky top-24">
              <button
                onClick={() => setActiveTab('projects')}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'projects'
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                <FolderGit2 className="w-5 h-5 mr-3" />
                Projects
              </button>
              <button
                onClick={() => setActiveTab('experience')}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'experience'
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                <Briefcase className="w-5 h-5 mr-3" />
                Experience
              </button>
              <button
                onClick={() => setActiveTab('skills')}
                className={`w-full flex items-center px-4 py-3 rounded-lg transition-colors ${activeTab === 'skills'
                    ? 'bg-blue-50 text-blue-700 font-medium'
                    : 'text-gray-600 hover:bg-gray-50'
                  }`}
              >
                <Wrench className="w-5 h-5 mr-3" />
                Skills
              </button>
            </div>
          </aside>

          {/* Main Content Area */}
          <main className="flex-1">
            <div className="bg-white rounded-xl shadow-sm p-6 min-h-[500px]">
              {activeTab === 'projects' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Manage Projects ({currentLang.toUpperCase()})
                  </h2>
                  <ProjectEditor
                    initialProjects={data[currentLang].projects.items}
                    onSave={handleProjectUpdate}
                    key={currentLang}
                  />
                </div>
              )}
              {activeTab === 'experience' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Manage Experience ({currentLang.toUpperCase()})
                  </h2>
                  <ExperienceEditor
                    initialExperience={data[currentLang].experience.items}
                    onSave={handleExperienceUpdate}
                    key={currentLang}
                  />
                </div>
              )}
              {activeTab === 'skills' && (
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Manage Skills ({currentLang.toUpperCase()})
                  </h2>
                  <SkillsEditor
                    initialSkills={data[currentLang].skills}
                    onSave={handleSkillsUpdate}
                    key={currentLang}
                  />
                </div>
              )}
            </div>
          </main>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
