import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Save, X } from 'lucide-react';

const ProjectEditor = ({ initialProjects, onSave }) => {
    const [projects, setProjects] = useState(initialProjects || []);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        setProjects(initialProjects || []);
    }, [initialProjects]);

    const handleAddNew = () => {
        const newProject = {
            id: Date.now(), // Temporary ID
            title: '',
            description: '',
            link: '',
            image: '' // In a real app this would be an upload, here just a text field or select
        };
        setEditingId(newProject.id);
        setFormData(newProject);
    };

    const handleEdit = (project, index) => {
        setEditingId(index); // Use index as ID for simplicity with array
        setFormData({ ...project });
    };

    const handleDelete = (index) => {
        if (window.confirm('Are you sure you want to delete this project?')) {
            const updatedProjects = projects.filter((_, i) => i !== index);
            setProjects(updatedProjects);
            onSave(updatedProjects);
        }
    };

    const handleSaveForm = () => {
        let updatedProjects;
        if (editingId === formData.id) {
            // New project (using timestamp ID)
            updatedProjects = [...projects, formData];
        } else {
            // Existing project (using index)
            updatedProjects = projects.map((p, i) => (i === editingId ? formData : p));
        }

        // Clean up temp ID if present
        const cleanProjects = updatedProjects.map(({ id, ...rest }) => rest);

        setProjects(cleanProjects);
        onSave(cleanProjects);
        setEditingId(null);
        setFormData(null);
    };

    const handleCancel = () => {
        setEditingId(null);
        setFormData(null);
    };

    return (
        <div className="space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-lg font-medium text-gray-900">Projects List</h3>
                <button
                    onClick={handleAddNew}
                    disabled={editingId !== null}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Project
                </button>
            </div>

            {/* Editor Form */}
            {editingId !== null && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                    <h4 className="text-md font-bold text-gray-800 mb-4">
                        {typeof editingId === 'number' && editingId > 1000 ? 'New Project' : 'Edit Project'}
                    </h4>
                    <div className="grid grid-cols-1 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                            <input
                                type="text"
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                                rows="3"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Link Text (e.g., "View Project")</label>
                            <input
                                type="text"
                                value={formData.link}
                                onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                    </div>
                    <div className="flex justify-end space-x-3 mt-6">
                        <button
                            onClick={handleCancel}
                            className="px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={handleSaveForm}
                            className="flex items-center px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
                        >
                            <Save className="w-4 h-4 mr-2" />
                            Save Changes
                        </button>
                    </div>
                </div>
            )}

            {/* List */}
            <div className="grid gap-4">
                {projects.map((project, index) => (
                    <div
                        key={index}
                        className={`bg-white border rounded-xl p-4 flex justify-between items-center ${editingId === index ? 'ring-2 ring-blue-500 border-transparent' : 'border-gray-200'
                            }`}
                    >
                        <div>
                            <h4 className="font-bold text-gray-900">{project.title}</h4>
                            <p className="text-sm text-gray-500 truncate max-w-md">{project.description}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => handleEdit(project, index)}
                                disabled={editingId !== null}
                                className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg disabled:opacity-30"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => handleDelete(index)}
                                disabled={editingId !== null}
                                className="p-2 text-red-600 hover:bg-red-50 rounded-lg disabled:opacity-30"
                            >
                                <Trash2 className="w-4 h-4" />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProjectEditor;
