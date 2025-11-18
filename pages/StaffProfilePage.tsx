
import React, { useState } from 'react';

const StaffProfilePage: React.FC = () => {
    const [activeTab, setActiveTab] = useState('personal');

    const renderTabContent = () => {
        switch (activeTab) {
            case 'personal': return <div>Personal Information Content</div>;
            case 'job': return <div>Job Details Content</div>;
            case 'documents': return <div>Documents Content</div>;
            case 'leave': return <div>Leave History Content</div>;
            default: return null;
        }
    }

    return (
        <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                    <img src="https://picsum.photos/id/1005/128/128" alt="Staff Avatar" className="w-32 h-32 rounded-full ring-4 ring-primary-200" />
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold text-gray-800 dark:text-white">John Doe</h2>
                        <p className="text-primary-600 dark:text-primary-400 font-medium">Frontend Developer</p>
                        <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">EMP001 | Engineering Department</p>
                        <div className="mt-4 flex justify-center md:justify-start gap-3">
                            <button className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700">Message</button>
                            <button className="px-4 py-2 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-600">Edit Profile</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm">
                <div className="border-b border-gray-200 dark:border-gray-700">
                    <nav className="flex space-x-4 p-4" aria-label="Tabs">
                        <button onClick={() => setActiveTab('personal')} className={`px-3 py-2 font-medium text-sm rounded-md ${activeTab === 'personal' ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                            Personal Information
                        </button>
                        <button onClick={() => setActiveTab('job')} className={`px-3 py-2 font-medium text-sm rounded-md ${activeTab === 'job' ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                            Job Details
                        </button>
                        <button onClick={() => setActiveTab('documents')} className={`px-3 py-2 font-medium text-sm rounded-md ${activeTab === 'documents' ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                            Documents
                        </button>
                        <button onClick={() => setActiveTab('leave')} className={`px-3 py-2 font-medium text-sm rounded-md ${activeTab === 'leave' ? 'bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-200' : 'text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200'}`}>
                            Leave History
                        </button>
                    </nav>
                </div>
                <div className="p-6">
                    {renderTabContent()}
                </div>
            </div>
        </div>
    );
};

export default StaffProfilePage;
