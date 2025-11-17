
import React from 'react';

const TasksPage: React.FC = () => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Tasks</h2>
    <p className="text-gray-600">This page will show assigned tasks, their progress, deadlines, and a Kanban or list view of tasks.</p>
    {/* Placeholder for task board */}
    <div className="mt-8 h-96 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <p className="text-gray-500">Task Board Placeholder</p>
    </div>
  </div>
);

export default TasksPage;
