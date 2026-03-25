import React from 'react';
import { Download } from 'lucide-react';

const JsonExporter = ({ data }) => {
    const downloadFile = (jsonData, filename) => {
        const blob = new Blob([JSON.stringify(jsonData, null, 4)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
    };

    return (
        <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 flex items-center justify-between">
            <div>
                <h3 className="font-bold text-gray-900">Export Configuration</h3>
                <p className="text-sm text-gray-500">Download the updated JSON files to save your changes.</p>
            </div>
            <div className="flex space-x-3">
                <button
                    onClick={() => downloadFile(data.en, 'en.json')}
                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                    <Download className="w-4 h-4 mr-2" />
                    Download en.json
                </button>
                <button
                    onClick={() => downloadFile(data.fr, 'fr.json')}
                    className="flex items-center px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-900 transition-colors"
                >
                    <Download className="w-4 h-4 mr-2" />
                    Download fr.json
                </button>
            </div>
        </div>
    );
};

export default JsonExporter;
