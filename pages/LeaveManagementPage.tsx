
import React from 'react';

const LeaveManagementPage: React.FC = () => (
  <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
    <h2 className="text-xl font-semibold text-gray-800 mb-4">Leave Management</h2>
    <p className="text-gray-600">This page will display a table of leave requests with options to approve or reject, and show leave history.</p>
    {/* Placeholder for leave requests table */}
    <div className="mt-8 h-96 flex items-center justify-center bg-gray-50 rounded-lg border-2 border-dashed border-gray-300">
        <p className="text-gray-500">Leave Requests Table Placeholder</p>
    </div>
  </div>
);

export default LeaveManagementPage;
