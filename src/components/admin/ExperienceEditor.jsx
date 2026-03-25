import React, { useState, useEffect } from 'react';
import { Plus, Trash2, Save, X } from 'lucide-react';

const ExperienceEditor = ({ initialExperience, onSave }) => {
    const [experiences, setExperiences] = useState(initialExperience || []);
    const [editingId, setEditingId] = useState(null);
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        setExperiences(initialExperience || []);
    }, [initialExperience]);

    const handleAddNew = () => {
        const newExp = {
            id: Date.now(),
            company: '',
            role: '',
            period: '',
            location: '',
            description: ''
        };
        setEditingId(newExp.id);
        setFormData(newExp);
    };

    const handleEdit = (exp, index) => {
        setEditingId(index);
        setFormData({ ...exp });
    };

    const handleDelete = (index) => {
        if (window.confirm('Are you sure you want to delete this experience?')) {
            const updatedExp = experiences.filter((_, i) => i !== index);
            setExperiences(updatedExp);
            onSave(updatedExp);
        }
    };

    const handleSaveForm = () => {
        let updatedExp;
        if (editingId === formData.id) {
            updatedExp = [...experiences, formData];
        } else {
            updatedExp = experiences.map((e, i) => (i === editingId ? formData : e));
        }

        const cleanExp = updatedExp.map(({ id, ...rest }) => rest);

        setExperiences(cleanExp);
        onSave(cleanExp);
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
                <h3 className="text-lg font-medium text-gray-900">Experience List</h3>
                <button
                    onClick={handleAddNew}
                    disabled={editingId !== null}
                    className="flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    <Plus className="w-4 h-4 mr-2" />
                    Add Experience
                </button>
            </div>

            {/* Editor Form */}
            {editingId !== null && (
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-6">
                    <h4 className="text-md font-bold text-gray-800 mb-4">
                        {typeof editingId === 'number' && editingId > 1000 ? 'New Experience' : 'Edit Experience'}
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Company</label>
                            <input
                                type="text"
                                value={formData.company}
                                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Role</label>
                            <input
                                type="text"
                                value={formData.role}
                                onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Period</label>
                            <input
                                type="text"
                                value={formData.period}
                                onChange={(e) => setFormData({ ...formData, period: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                            <input
                                type="text"
                                value={formData.location}
                                onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                            />
                        </div>
                        <div className="md:col-span-2">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                            <textarea
                                rows="4"
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
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
                {experiences.map((exp, index) => (
                    <div
                        key={index}
                        className={`bg-white border rounded-xl p-4 flex justify-between items-center ${editingId === index ? 'ring-2 ring-blue-500 border-transparent' : 'border-gray-200'
                            }`}
                    >
                        <div>
                            <h4 className="font-bold text-gray-900">{exp.company}</h4>
                            <p className="text-sm text-blue-600 font-medium">{exp.role}</p>
                            <p className="text-xs text-gray-500">{exp.period}</p>
                        </div>
                        <div className="flex space-x-2">
                            <button
                                onClick={() => handleEdit(exp, index)}
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

export default ExperienceEditor;
