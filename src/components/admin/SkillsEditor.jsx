import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Save, X } from 'lucide-react';

const SkillsEditor = ({ initialSkills, onSave }) => {
    const [skills, setSkills] = useState(initialSkills || {});
    const [editingCategory, setEditingCategory] = useState(null);
    const [newSkill, setNewSkill] = useState('');

    useEffect(() => {
        setSkills(initialSkills || {});
    }, [initialSkills]);

    const handleAddSkill = (category) => {
        if (!newSkill.trim()) return;

        const updatedSkills = {
            ...skills,
            [category]: [...(skills[category] || []), newSkill.trim()]
        };

        setSkills(updatedSkills);
        onSave(updatedSkills);
        setNewSkill('');
    };

    const handleDeleteSkill = (category, skillToDelete) => {
        if (window.confirm(`Are you sure you want to delete "${skillToDelete}"?`)) {
            const updatedSkills = {
                ...skills,
                [category]: skills[category].filter(skill => skill !== skillToDelete)
            };
            setSkills(updatedSkills);
            onSave(updatedSkills);
        }
    };

    // Helper to get categories from the skills object
    const categories = Object.keys(skills);

    return (
        <div className="space-y-8">
            {categories.map((category) => (
                <div key={category} className="bg-white border border-gray-200 rounded-xl p-6">
                    <h3 className="text-lg font-bold text-gray-900 mb-4 capitalize">
                        {category.replace(/([A-Z])/g, ' $1').trim()} {/* Format camelCase to Title Case */}
                    </h3>

                    <div className="flex flex-wrap gap-2 mb-4">
                        {skills[category].map((skill, index) => (
                            <div
                                key={index}
                                className="flex items-center bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
                            >
                                {skill}
                                <button
                                    onClick={() => handleDeleteSkill(category, skill)}
                                    className="ml-2 text-blue-400 hover:text-red-600 transition-colors"
                                >
                                    <X className="w-3 h-3" />
                                </button>
                            </div>
                        ))}
                    </div>

                    <div className="flex gap-2">
                        <input
                            type="text"
                            placeholder={`Add new ${category} skill...`}
                            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                            value={editingCategory === category ? newSkill : ''}
                            onChange={(e) => {
                                setEditingCategory(category);
                                setNewSkill(e.target.value);
                            }}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    handleAddSkill(category);
                                }
                            }}
                        />
                        <button
                            onClick={() => handleAddSkill(category)}
                            disabled={editingCategory !== category || !newSkill.trim()}
                            className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                        >
                            <Plus className="w-4 h-4" />
                        </button>
                    </div>
                </div>
            ))}

            <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-sm text-blue-800">
                <p className="font-medium">Note:</p>
                <p>Skills are grouped by category (e.g., Frontend, Backend, Tools). To add a new category, you would currently need to edit the JSON file directly, but you can manage all existing skills here.</p>
            </div>
        </div>
    );
};

export default SkillsEditor;
